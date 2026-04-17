"use client";

import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import {
  ReactFlow,
  ReactFlowProvider,
  Background,
  BackgroundVariant,
  useNodesState,
  useEdgesState,
  type Edge,
  type Node,
  type ReactFlowInstance,
} from "@xyflow/react";

import MiniPromptNode from "./studio-mini/MiniPromptNode";
import MiniImageNode from "./studio-mini/MiniImageNode";
import MiniVideoNode from "./studio-mini/MiniVideoNode";
import MiniOutputNode from "./studio-mini/MiniOutputNode";
import MiniChatNode from "./studio-mini/MiniChatNode";
import MiniBrandPackNode from "./studio-mini/MiniBrandPackNode";
import { IconCursor } from "./studio-mini/icons";

/* ==========================================================================
 * Scene authoring — linear story with a Y-split at the editedImage
 * ==========================================================================
 *
 *                                         ┌─→ video ─────────┐
 *   prompt ─→ image ─→ editPrompt ─→ editedImage             ├─→ save ─→ chat ─→ push
 *                                         └─→ brandPack ─────┘
 *
 * Beat summary:
 *   1) Write a prompt, pick `nano-banana-2`, generate the first image.
 *   2) Click the `+` on the generated image → an edit prompt spawns to the
 *      right, taking that image as input and refining it.
 *   3) The edit prompt generates an `editedImage` (amber).
 *   4) Click the `+` on the edited image → `video` branches upward with
 *      `seedance-2.0` (image → motion).
 *   5) Click the `+` on the edited image a second time → `brandPack`
 *      branches downward and resizes the master image into 9 placements
 *      (IG Feed / Story / LinkedIn / MREC / Leaderboard / Billboard / …).
 *   6) Both branches converge at `save`, where the studio snapshot is
 *      written (video + every programmatic size sharing one session).
 *   7) Teammates drop in over chat and approve.
 *   8) Push the approved creative straight to the campaign.
 *
 * Each scene is a full declarative snapshot. `applyScene` diffs it into
 * React Flow state and refits the viewport so the camera feels cinematic
 * as the storyboard expands.
 */

type NodeType = "prompt" | "image" | "video" | "output" | "chat" | "brandPack";

interface SceneNode {
  id: string;
  type: NodeType;
  position: { x: number; y: number };
  data: Record<string, unknown>;
}

interface SceneEdge {
  id: string;
  source: string;
  target: string;
  animated?: boolean;
}

interface Scene {
  duration: number;
  nodes: SceneNode[];
  edges: SceneEdge[];
  cursor?: { x: number; y: number; click?: boolean };
}

/* ——— Shared positions & edges ————————————————————————————— */

// Logical RF px; fitView({ padding }) handles visible scaling. Nodes sit on
// the x=0 axis in a left-to-right timeline, except `video` and `brandPack`
// which branch ± on the y-axis from `editedImage` and reconverge at `save`.
const POS = {
  prompt: { x: 0, y: 0 },
  image: { x: 300, y: 0 },
  editPrompt: { x: 600, y: 0 },
  editedImage: { x: 900, y: 0 },
  video: { x: 1200, y: -140 }, // top branch (motion)
  brandPack: { x: 1200, y: 140 }, // bottom branch (sizes)
  save: { x: 1500, y: 0 }, // merge point
  chat: { x: 1800, y: 0 },
  push: { x: 2100, y: 0 },
} as const;

const EDGES = {
  promptToImage: { id: "e-prompt-image", source: "prompt", target: "image" },
  imageToEdit: {
    id: "e-image-editPrompt",
    source: "image",
    target: "editPrompt",
  },
  editToEdited: {
    id: "e-editPrompt-editedImage",
    source: "editPrompt",
    target: "editedImage",
  },
  // Top branch: motion
  editedToVideo: {
    id: "e-editedImage-video",
    source: "editedImage",
    target: "video",
  },
  videoToSave: {
    id: "e-video-save",
    source: "video",
    target: "save",
  },
  // Bottom branch: every static size
  editedToBrand: {
    id: "e-editedImage-brandPack",
    source: "editedImage",
    target: "brandPack",
  },
  brandToSave: {
    id: "e-brandPack-save",
    source: "brandPack",
    target: "save",
  },
  // Tail: save → chat → push to campaigns
  saveToChat: { id: "e-save-chat", source: "save", target: "chat" },
  chatToPush: { id: "e-chat-push", source: "chat", target: "push" },
} as const;

const PROMPT_TEXT = "summer hero · golden hour, product centered";
const EDIT_TEXT = "add soft palm shadow, warmer amber";

const TEAM_MESSAGES: Array<{
  who: string;
  text: string;
  tone?: "neutral" | "approve";
}> = [
  { who: "Maya", text: "loving the amber — on brand" },
  { who: "Jordan", text: "approved from my side", tone: "approve" },
  { who: "Priya", text: "ship it", tone: "approve" },
];

// Helper: build a SceneNode at its canonical position by id.
function n(id: string, type: NodeType, data: Record<string, unknown>): SceneNode {
  const pos = POS[id as keyof typeof POS] ?? { x: 0, y: 0 };
  return { id, type, position: pos, data };
}

/* ——— Reusable node-state builders ————————————————————————— */

type PromptPhase = "spawn" | "typing" | "waiting" | "generating" | "done";

function promptNode(phase: PromptPhase, typed: number, opts?: { highlight?: boolean; fading?: boolean; progress?: number }): SceneNode {
  return n("prompt", "prompt", {
    phase,
    text: PROMPT_TEXT,
    typeUpTo: typed,
    model: "nano-banana-2 · 1:1",
    filename: "hero.prompt",
    highlight: opts?.highlight,
    progress: opts?.progress,
    fading: opts?.fading,
  });
}

function editPromptNode(phase: PromptPhase, typed: number, opts?: { highlight?: boolean; fading?: boolean; progress?: number }): SceneNode {
  return n("editPrompt", "prompt", {
    phase,
    text: EDIT_TEXT,
    typeUpTo: typed,
    model: "nano-banana-2 · edit",
    filename: "edit.prompt",
    highlight: opts?.highlight,
    progress: opts?.progress,
    fading: opts?.fading,
  });
}

type ImageState = "generating" | "warm" | "amber";

function imageNode(
  state: ImageState,
  opts?: {
    progress?: number;
    fading?: boolean;
    plusPulse?: "right";
  },
): SceneNode {
  if (state === "generating") {
    return n("image", "image", {
      phase: "generating",
      progress: opts?.progress ?? 40,
      modelTag: "Generating",
      filename: "hero-01.png",
      fading: opts?.fading,
      plusPulse: opts?.plusPulse,
    });
  }
  return n("image", "image", {
    phase: "done",
    variant: state === "amber" ? "sunset" : "warm",
    modelTag: "Generated",
    filename: "hero-01.png",
    fading: opts?.fading,
    plusPulse: opts?.plusPulse,
  });
}

function editedImageNode(
  state: "generating" | "done",
  opts?: {
    progress?: number;
    fading?: boolean;
    editedFlash?: boolean;
    plusPulse?: "right";
  },
): SceneNode {
  if (state === "generating") {
    return n("editedImage", "image", {
      phase: "generating",
      progress: opts?.progress ?? 45,
      modelTag: "Re-rendering",
      filename: "hero-02.edited.png",
      fading: opts?.fading,
      plusPulse: opts?.plusPulse,
    });
  }
  return n("editedImage", "image", {
    phase: "done",
    variant: "sunset",
    modelTag: "Edited",
    filename: "hero-02.edited.png",
    editedFlash: opts?.editedFlash,
    fading: opts?.fading,
    plusPulse: opts?.plusPulse,
  });
}

type VideoState = "generating" | "done";

function videoNode(state: VideoState, opts?: { progress?: number; fading?: boolean }): SceneNode {
  if (state === "generating") {
    return n("video", "video", {
      phase: "generating",
      category: "Image to Video",
      model: "seedance-2.0",
      progress: opts?.progress ?? 45,
      fading: opts?.fading,
    });
  }
  return n("video", "video", {
    phase: "done",
    category: "Image to Video",
    model: "seedance-2.0",
    duration: "00:08",
    filename: "hero.mp4",
    fading: opts?.fading,
  });
}

type BrandPhase = "spawn" | "filling" | "done";

function brandPackNode(
  phase: BrandPhase,
  filledCount: number,
  opts?: { fading?: boolean },
): SceneNode {
  return n("brandPack", "brandPack", {
    phase,
    filledCount,
    filename: "brand.pack",
    fading: opts?.fading,
  });
}

type SavePhase = "highlighting" | "saving" | "done";

function saveNode(phase: SavePhase, opts?: { fading?: boolean }): SceneNode {
  return n("save", "output", {
    phase,
    variant: "save",
    target: "Studio",
    doneText: "Saved to Studio",
    fading: opts?.fading,
  });
}

function chatNode(
  phase: "spawn" | "typing" | "approved",
  messagesShown: number,
  approved: boolean,
  opts?: { fading?: boolean },
): SceneNode {
  return n("chat", "chat", {
    phase,
    filename: "team.chat",
    messagesShown,
    approved,
    messages: TEAM_MESSAGES,
    fading: opts?.fading,
  });
}

type PushPhase = "highlighting" | "saving" | "done";

function pushNode(phase: PushPhase, opts?: { fading?: boolean }): SceneNode {
  return n("push", "output", {
    phase,
    variant: "push",
    target: "Launch Summer",
    doneText: "Published — 4 placements live",
    fading: opts?.fading,
  });
}

/* ——— Storyboard (single loop, one horizontal line) ———————————
 *
 * A helper to keep edge arrays readable — each scene only lists the edges
 * whose endpoints are currently on the canvas.
 */

function edgesAnim(...keys: Array<keyof typeof EDGES>) {
  return keys.map((k) => ({ ...EDGES[k], animated: true }));
}

const SCENES: Scene[] = [
  // 0 — Empty canvas, no cursor
  { duration: 500, nodes: [], edges: [] },

  // 1 — Cursor enters near the prompt spawn zone
  {
    duration: 500,
    nodes: [],
    edges: [],
    cursor: { x: 0.18, y: 0.5 },
  },

  // 2 — Click to spawn the Prompt (empty, nano-banana-2)
  {
    duration: 500,
    nodes: [promptNode("spawn", 0)],
    edges: [],
    cursor: { x: 0.2, y: 0.5, click: true },
  },

  // 3 — Prompt types the brief
  {
    duration: 1600,
    nodes: [promptNode("typing", PROMPT_TEXT.length)],
    edges: [],
  },

  // 4 — Click Generate (prompt-only scene → prompt is center-stage)
  {
    duration: 500,
    nodes: [promptNode("waiting", PROMPT_TEXT.length, { highlight: true })],
    edges: [],
    cursor: { x: 0.58, y: 0.75, click: true },
  },

  // 5 — Image spawns generating
  {
    duration: 700,
    nodes: [
      promptNode("generating", PROMPT_TEXT.length, { progress: 50 }),
      imageNode("generating", { progress: 35 }),
    ],
    edges: edgesAnim("promptToImage"),
  },

  // 6 — Image done (warm), prompt done. No cursor yet.
  {
    duration: 700,
    nodes: [
      promptNode("done", PROMPT_TEXT.length),
      imageNode("warm"),
    ],
    edges: edgesAnim("promptToImage"),
  },

  // 7 — Cursor travels toward the "+" connector on the image's right edge.
  //      plusPulse="right" forces the connector visible with a breathing ring.
  {
    duration: 550,
    nodes: [
      promptNode("done", PROMPT_TEXT.length),
      imageNode("warm", { plusPulse: "right" }),
    ],
    edges: edgesAnim("promptToImage"),
    cursor: { x: 0.82, y: 0.5 },
  },

  // 8 — Click the "+" → editPrompt spawns to the right of the image, taking
  //     the image as input (edge image→editPrompt).
  {
    duration: 500,
    nodes: [
      promptNode("done", PROMPT_TEXT.length),
      imageNode("warm", { plusPulse: "right" }),
      editPromptNode("spawn", 0),
    ],
    edges: edgesAnim("promptToImage", "imageToEdit"),
    cursor: { x: 0.85, y: 0.5, click: true },
  },

  // 9 — EditPrompt types the refinement
  {
    duration: 1400,
    nodes: [
      promptNode("done", PROMPT_TEXT.length),
      imageNode("warm"),
      editPromptNode("typing", EDIT_TEXT.length),
    ],
    edges: edgesAnim("promptToImage", "imageToEdit"),
  },

  // 10 — Click Generate on the editPrompt (it's the rightmost node)
  {
    duration: 500,
    nodes: [
      promptNode("done", PROMPT_TEXT.length),
      imageNode("warm"),
      editPromptNode("waiting", EDIT_TEXT.length, { highlight: true }),
    ],
    edges: edgesAnim("promptToImage", "imageToEdit"),
    cursor: { x: 0.9, y: 0.78, click: true },
  },

  // 11 — editedImage spawns generating; editPrompt generating
  {
    duration: 700,
    nodes: [
      promptNode("done", PROMPT_TEXT.length),
      imageNode("warm"),
      editPromptNode("generating", EDIT_TEXT.length, { progress: 55 }),
      editedImageNode("generating", { progress: 40 }),
    ],
    edges: edgesAnim("promptToImage", "imageToEdit", "editToEdited"),
  },

  // 12 — editedImage done (amber + one-shot flash)
  {
    duration: 900,
    nodes: [
      promptNode("done", PROMPT_TEXT.length),
      imageNode("warm"),
      editPromptNode("done", EDIT_TEXT.length),
      editedImageNode("done", { editedFlash: true }),
    ],
    edges: edgesAnim("promptToImage", "imageToEdit", "editToEdited"),
  },

  // 13 — Cursor travels to the "+" connector on the editedImage's right edge
  {
    duration: 550,
    nodes: [
      promptNode("done", PROMPT_TEXT.length),
      imageNode("warm"),
      editPromptNode("done", EDIT_TEXT.length),
      editedImageNode("done", { plusPulse: "right" }),
    ],
    edges: edgesAnim("promptToImage", "imageToEdit", "editToEdited"),
    cursor: { x: 0.9, y: 0.5 },
  },

  // 14 — Click editedImage's "+" → video branches UP (seedance-2.0 generating)
  {
    duration: 700,
    nodes: [
      promptNode("done", PROMPT_TEXT.length),
      imageNode("warm"),
      editPromptNode("done", EDIT_TEXT.length),
      editedImageNode("done", { plusPulse: "right" }),
      videoNode("generating", { progress: 40 }),
    ],
    edges: edgesAnim(
      "promptToImage",
      "imageToEdit",
      "editToEdited",
      "editedToVideo",
    ),
    cursor: { x: 0.92, y: 0.48, click: true },
  },

  // 15 — Video done (top branch complete)
  {
    duration: 700,
    nodes: [
      promptNode("done", PROMPT_TEXT.length),
      imageNode("warm"),
      editPromptNode("done", EDIT_TEXT.length),
      editedImageNode("done"),
      videoNode("done"),
    ],
    edges: edgesAnim(
      "promptToImage",
      "imageToEdit",
      "editToEdited",
      "editedToVideo",
    ),
  },

  // 16 — Cursor returns to editedImage's "+" to wire a second branch
  //      (brandPack sources the image directly, not the video).
  {
    duration: 550,
    nodes: [
      promptNode("done", PROMPT_TEXT.length),
      imageNode("warm"),
      editPromptNode("done", EDIT_TEXT.length),
      editedImageNode("done", { plusPulse: "right" }),
      videoNode("done"),
    ],
    edges: edgesAnim(
      "promptToImage",
      "imageToEdit",
      "editToEdited",
      "editedToVideo",
    ),
    cursor: { x: 0.85, y: 0.5 },
  },

  // 17 — Click → brandPack branches DOWN (empty 0/9). Edge editedImage→brandPack.
  {
    duration: 600,
    nodes: [
      promptNode("done", PROMPT_TEXT.length),
      imageNode("warm"),
      editPromptNode("done", EDIT_TEXT.length),
      editedImageNode("done", { plusPulse: "right" }),
      videoNode("done"),
      brandPackNode("spawn", 0),
    ],
    edges: edgesAnim(
      "promptToImage",
      "imageToEdit",
      "editToEdited",
      "editedToVideo",
      "editedToBrand",
    ),
    cursor: { x: 0.85, y: 0.52, click: true },
  },

  // 18 — BrandPack filling: 4/9
  {
    duration: 750,
    nodes: [
      promptNode("done", PROMPT_TEXT.length),
      imageNode("warm"),
      editPromptNode("done", EDIT_TEXT.length),
      editedImageNode("done"),
      videoNode("done"),
      brandPackNode("filling", 4),
    ],
    edges: edgesAnim(
      "promptToImage",
      "imageToEdit",
      "editToEdited",
      "editedToVideo",
      "editedToBrand",
    ),
  },

  // 19 — BrandPack filling: 9/9
  {
    duration: 750,
    nodes: [
      promptNode("done", PROMPT_TEXT.length),
      imageNode("warm"),
      editPromptNode("done", EDIT_TEXT.length),
      editedImageNode("done"),
      videoNode("done"),
      brandPackNode("filling", 9),
    ],
    edges: edgesAnim(
      "promptToImage",
      "imageToEdit",
      "editToEdited",
      "editedToVideo",
      "editedToBrand",
    ),
  },

  // 20 — BrandPack done (exported stamp)
  {
    duration: 750,
    nodes: [
      promptNode("done", PROMPT_TEXT.length),
      imageNode("warm"),
      editPromptNode("done", EDIT_TEXT.length),
      editedImageNode("done"),
      videoNode("done"),
      brandPackNode("done", 9),
    ],
    edges: edgesAnim(
      "promptToImage",
      "imageToEdit",
      "editToEdited",
      "editedToVideo",
      "editedToBrand",
    ),
  },

  // 21 — Both branches converge at Save (highlighting). Cursor approaches.
  {
    duration: 600,
    nodes: [
      promptNode("done", PROMPT_TEXT.length),
      imageNode("warm"),
      editPromptNode("done", EDIT_TEXT.length),
      editedImageNode("done"),
      videoNode("done"),
      brandPackNode("done", 9),
      saveNode("highlighting"),
    ],
    edges: edgesAnim(
      "promptToImage",
      "imageToEdit",
      "editToEdited",
      "editedToVideo",
      "editedToBrand",
      "videoToSave",
      "brandToSave",
    ),
    cursor: { x: 0.82, y: 0.5 },
  },

  // 22 — Save → saving (click)
  {
    duration: 600,
    nodes: [
      promptNode("done", PROMPT_TEXT.length),
      imageNode("warm"),
      editPromptNode("done", EDIT_TEXT.length),
      editedImageNode("done"),
      videoNode("done"),
      brandPackNode("done", 9),
      saveNode("saving"),
    ],
    edges: edgesAnim(
      "promptToImage",
      "imageToEdit",
      "editToEdited",
      "editedToVideo",
      "editedToBrand",
      "videoToSave",
      "brandToSave",
    ),
    cursor: { x: 0.85, y: 0.5, click: true },
  },

  // 23 — Save → done
  {
    duration: 800,
    nodes: [
      promptNode("done", PROMPT_TEXT.length),
      imageNode("warm"),
      editPromptNode("done", EDIT_TEXT.length),
      editedImageNode("done"),
      videoNode("done"),
      brandPackNode("done", 9),
      saveNode("done"),
    ],
    edges: edgesAnim(
      "promptToImage",
      "imageToEdit",
      "editToEdited",
      "editedToVideo",
      "editedToBrand",
      "videoToSave",
      "brandToSave",
    ),
  },

  // 24 — Chat spawns (0 msgs, typing indicator)
  {
    duration: 600,
    nodes: [
      promptNode("done", PROMPT_TEXT.length),
      imageNode("warm"),
      editPromptNode("done", EDIT_TEXT.length),
      editedImageNode("done"),
      videoNode("done"),
      brandPackNode("done", 9),
      saveNode("done"),
      chatNode("spawn", 0, false),
    ],
    edges: edgesAnim(
      "promptToImage",
      "imageToEdit",
      "editToEdited",
      "editedToVideo",
      "editedToBrand",
      "videoToSave",
      "brandToSave",
      "saveToChat",
    ),
  },

  // 25 — Maya replies
  {
    duration: 700,
    nodes: [
      promptNode("done", PROMPT_TEXT.length),
      imageNode("warm"),
      editPromptNode("done", EDIT_TEXT.length),
      editedImageNode("done"),
      videoNode("done"),
      brandPackNode("done", 9),
      saveNode("done"),
      chatNode("typing", 1, false),
    ],
    edges: edgesAnim(
      "promptToImage",
      "imageToEdit",
      "editToEdited",
      "editedToVideo",
      "editedToBrand",
      "videoToSave",
      "brandToSave",
      "saveToChat",
    ),
  },

  // 26 — Jordan approves
  {
    duration: 700,
    nodes: [
      promptNode("done", PROMPT_TEXT.length),
      imageNode("warm"),
      editPromptNode("done", EDIT_TEXT.length),
      editedImageNode("done"),
      videoNode("done"),
      brandPackNode("done", 9),
      saveNode("done"),
      chatNode("typing", 2, false),
    ],
    edges: edgesAnim(
      "promptToImage",
      "imageToEdit",
      "editToEdited",
      "editedToVideo",
      "editedToBrand",
      "videoToSave",
      "brandToSave",
      "saveToChat",
    ),
  },

  // 27 — Priya ships it + approved stamp
  {
    duration: 900,
    nodes: [
      promptNode("done", PROMPT_TEXT.length),
      imageNode("warm"),
      editPromptNode("done", EDIT_TEXT.length),
      editedImageNode("done"),
      videoNode("done"),
      brandPackNode("done", 9),
      saveNode("done"),
      chatNode("approved", 3, true),
    ],
    edges: edgesAnim(
      "promptToImage",
      "imageToEdit",
      "editToEdited",
      "editedToVideo",
      "editedToBrand",
      "videoToSave",
      "brandToSave",
      "saveToChat",
    ),
  },

  // 28 — Push spawns highlighting; cursor moves
  {
    duration: 550,
    nodes: [
      promptNode("done", PROMPT_TEXT.length),
      imageNode("warm"),
      editPromptNode("done", EDIT_TEXT.length),
      editedImageNode("done"),
      videoNode("done"),
      brandPackNode("done", 9),
      saveNode("done"),
      chatNode("approved", 3, true),
      pushNode("highlighting"),
    ],
    edges: edgesAnim(
      "promptToImage",
      "imageToEdit",
      "editToEdited",
      "editedToVideo",
      "editedToBrand",
      "videoToSave",
      "brandToSave",
      "saveToChat",
      "chatToPush",
    ),
    cursor: { x: 0.9, y: 0.5 },
  },

  // 29 — Push → publishing (click)
  {
    duration: 600,
    nodes: [
      promptNode("done", PROMPT_TEXT.length),
      imageNode("warm"),
      editPromptNode("done", EDIT_TEXT.length),
      editedImageNode("done"),
      videoNode("done"),
      brandPackNode("done", 9),
      saveNode("done"),
      chatNode("approved", 3, true),
      pushNode("saving"),
    ],
    edges: edgesAnim(
      "promptToImage",
      "imageToEdit",
      "editToEdited",
      "editedToVideo",
      "editedToBrand",
      "videoToSave",
      "brandToSave",
      "saveToChat",
      "chatToPush",
    ),
    cursor: { x: 0.92, y: 0.5, click: true },
  },

  // 30 — Push → done ("Published — 4 placements live")
  {
    duration: 1100,
    nodes: [
      promptNode("done", PROMPT_TEXT.length),
      imageNode("warm"),
      editPromptNode("done", EDIT_TEXT.length),
      editedImageNode("done"),
      videoNode("done"),
      brandPackNode("done", 9),
      saveNode("done"),
      chatNode("approved", 3, true),
      pushNode("done"),
    ],
    edges: edgesAnim(
      "promptToImage",
      "imageToEdit",
      "editToEdited",
      "editedToVideo",
      "editedToBrand",
      "videoToSave",
      "brandToSave",
      "saveToChat",
      "chatToPush",
    ),
  },

  // 31 — Fade everything, prep to loop
  {
    duration: 650,
    nodes: [
      promptNode("done", PROMPT_TEXT.length, { fading: true }),
      imageNode("warm", { fading: true }),
      editPromptNode("done", EDIT_TEXT.length, { fading: true }),
      editedImageNode("done", { fading: true }),
      videoNode("done", { fading: true }),
      brandPackNode("done", 9, { fading: true }),
      saveNode("done", { fading: true }),
      chatNode("approved", 3, true, { fading: true }),
      pushNode("done", { fading: true }),
    ],
    edges: [
      { ...EDGES.promptToImage, animated: false },
      { ...EDGES.imageToEdit, animated: false },
      { ...EDGES.editToEdited, animated: false },
      { ...EDGES.editedToVideo, animated: false },
      { ...EDGES.editedToBrand, animated: false },
      { ...EDGES.videoToSave, animated: false },
      { ...EDGES.brandToSave, animated: false },
      { ...EDGES.saveToChat, animated: false },
      { ...EDGES.chatToPush, animated: false },
    ],
  },
];

/* ==========================================================================
 * Inner component (inside ReactFlowProvider)
 * ========================================================================== */

function StudioMiniCanvasInner() {
  const [nodes, setNodes, onNodesChange] = useNodesState<Node>([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState<Edge>([]);

  const sceneIndexRef = useRef(0);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const fitTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const rfRef = useRef<ReactFlowInstance | null>(null);

  const containerRef = useRef<HTMLDivElement | null>(null);

  const [cursor, setCursor] = useState<{
    x: number;
    y: number;
    clickKey: number;
  } | null>(null);

  const [inView, setInView] = useState(false);
  const [hovered, setHovered] = useState(false);

  const nodeTypes = useMemo(
    () => ({
      prompt: MiniPromptNode,
      image: MiniImageNode,
      video: MiniVideoNode,
      output: MiniOutputNode,
      chat: MiniChatNode,
      brandPack: MiniBrandPackNode,
    }),
    [],
  );

  const applyScene = useCallback(
    (i: number) => {
      const s = SCENES[i];
      setNodes(
        s.nodes.map((nd) => ({
          id: nd.id,
          type: nd.type,
          position: nd.position,
          data: nd.data,
          draggable: true,
        })),
      );
      setEdges(
        s.edges.map((e) => ({
          id: e.id,
          source: e.source,
          target: e.target,
          animated: e.animated ?? true,
        })),
      );
      if (s.cursor) {
        setCursor((prev) => ({
          x: s.cursor!.x,
          y: s.cursor!.y,
          clickKey: s.cursor!.click ? Date.now() : (prev?.clickKey ?? 0),
        }));
      } else {
        setCursor(null);
      }
      // Refit the viewport once nodes have been measured.
      if (fitTimerRef.current) clearTimeout(fitTimerRef.current);
      fitTimerRef.current = setTimeout(() => {
        if (s.nodes.length === 0) return;
        rfRef.current?.fitView({ padding: 0.18, duration: 420 });
      }, 70);
    },
    [setNodes, setEdges],
  );

  // Scheduler — only runs when in view AND not hovered.
  useEffect(() => {
    const running = inView && !hovered;
    if (!running) {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
        timerRef.current = null;
      }
      return;
    }
    let cancelled = false;
    const tick = () => {
      if (cancelled) return;
      const idx = sceneIndexRef.current;
      applyScene(idx);
      timerRef.current = setTimeout(() => {
        sceneIndexRef.current = (idx + 1) % SCENES.length;
        tick();
      }, SCENES[idx].duration);
    };
    tick();
    return () => {
      cancelled = true;
      if (timerRef.current) {
        clearTimeout(timerRef.current);
        timerRef.current = null;
      }
      if (fitTimerRef.current) {
        clearTimeout(fitTimerRef.current);
        fitTimerRef.current = null;
      }
    };
  }, [inView, hovered, applyScene]);

  // Observe viewport visibility.
  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;
    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) setInView(e.isIntersecting);
      },
      { rootMargin: "0px", threshold: 0.1 },
    );
    obs.observe(node);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Mini browser-chrome strip — studio tokens */}
      <div
        className="absolute top-0 inset-x-0 z-20 flex items-center gap-2 px-2.5 py-1.5 pointer-events-none"
        style={{
          background: "rgba(22,22,22,0.82)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <div className="flex gap-1">
          <span
            className="w-1.5 h-1.5 rounded-full"
            style={{ background: "rgba(255,255,255,0.22)" }}
          />
          <span
            className="w-1.5 h-1.5 rounded-full"
            style={{ background: "rgba(255,255,255,0.22)" }}
          />
          <span
            className="w-1.5 h-1.5 rounded-full"
            style={{ background: "rgba(255,255,255,0.22)" }}
          />
        </div>
        <span
          className="text-[8px] uppercase tracking-[0.15em]"
          style={{
            color: "rgba(255,255,255,0.55)",
            fontFamily: "var(--font-mono)",
          }}
        >
          studio · hero.flow
        </span>
        <span
          className="ml-auto flex items-center gap-1 text-[8px]"
          style={{
            color: "rgba(34,197,94,0.85)",
            fontFamily: "var(--font-mono)",
          }}
        >
          <span
            className="w-1 h-1 rounded-full"
            style={{
              background: "#22c55e",
              boxShadow: "0 0 6px rgba(34,197,94,0.55)",
            }}
          />
          live
        </span>
      </div>

      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onInit={(inst) => {
          rfRef.current = inst;
        }}
        fitView
        fitViewOptions={{ padding: 0.18, minZoom: 0.25, maxZoom: 1.0 }}
        minZoom={0.2}
        maxZoom={1.2}
        panOnDrag
        zoomOnScroll={false}
        zoomOnPinch
        nodesDraggable
        nodesConnectable={false}
        edgesFocusable={false}
        elementsSelectable={false}
        nodesFocusable={false}
        deleteKeyCode={null}
        defaultEdgeOptions={{ animated: true }}
        proOptions={{ hideAttribution: true }}
      >
        <Background
          variant={BackgroundVariant.Dots}
          gap={20}
          size={1.2}
          color="rgba(255,255,255,0.14)"
        />
      </ReactFlow>

      {/* Animated cursor — container-relative; fades with scene */}
      {cursor && (
        <div
          className="pointer-events-none absolute z-30"
          style={{
            left: `${(cursor.x * 100).toFixed(2)}%`,
            top: `${(cursor.y * 100).toFixed(2)}%`,
            transform: "translate(-4px, -4px)",
            transition:
              "left 480ms cubic-bezier(0.2, 0.9, 0.3, 1), top 480ms cubic-bezier(0.2, 0.9, 0.3, 1)",
            color: "#ffffff",
            filter: "drop-shadow(0 2px 3px rgba(0,0,0,0.6))",
          }}
        >
          <IconCursor size={14} />
          {cursor.clickKey > 0 && (
            <span
              key={cursor.clickKey}
              className="sm-ripple absolute top-1.5 left-1.5 block rounded-full"
              style={{
                width: 14,
                height: 14,
                border: "2px solid rgba(255,255,255,0.85)",
                boxShadow: "0 0 10px rgba(255,255,255,0.45)",
              }}
            />
          )}
        </div>
      )}

      {/* Subtle vignette to soften canvas edges against the card frame */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 100%, transparent 65%, rgba(0,0,0,0.32) 100%)",
        }}
      />
    </div>
  );
}

/* ==========================================================================
 * Public component — wraps in ReactFlowProvider
 * ========================================================================== */

export default function StudioMiniCanvas() {
  return (
    <ReactFlowProvider>
      <StudioMiniCanvasInner />
    </ReactFlowProvider>
  );
}
