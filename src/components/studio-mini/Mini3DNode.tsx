"use client";

import { memo, useCallback, useEffect, useRef, useState } from "react";
import type { NodeProps } from "@xyflow/react";
import MiniNodeShell, {
  MiniCostRow,
  MiniNodeHeader,
  MiniChip,
  PillButton,
  PillDivider,
} from "./MiniNodeShell";
import {
  IconBox,
  IconDownload,
  IconMessage,
  IconOrbit,
  IconWireframe,
} from "./icons";

type ModelPhase = "empty" | "generating" | "done" | "fading";

export interface Mini3DNodeData {
  phase?: ModelPhase;
  category?: string;
  model?: string;
  /** Shown as a chip, e.g. "30k tris". */
  polycount?: string;
  /** Mirrors Meshy's topology option. */
  topology?: "quad" | "triangle";
  /** Export formats offered under the viewport. */
  formats?: string[];
  /** Adds a PBR badge when true. */
  pbr?: boolean;
  /** Credit cost for this generation; hides the cost row when omitted. */
  credits?: number;
  costNote?: string;
  filename?: string;
  progress?: number;
  fading?: boolean;
}

/* ==========================================================================
 * Geometry — a lathed product silhouette
 * ==========================================================================
 * Revolving a 2D profile gives a quad grid, which is what makes the wireframe
 * mode legible: rings run one way, seams the other. Deliberately hand-rolled
 * rather than pulling in a 3D engine — this is a marketing preview, and a
 * WebGL runtime would cost more than the whole page.
 */

type Vec3 = readonly [number, number, number];

/** Bottle profile as [radius, height] pairs, bottom to top; height in [-1, 1]. */
const PROFILE: ReadonlyArray<readonly [number, number]> = [
  [0.0, -1.0],
  [0.46, -1.0],
  [0.54, -0.94],
  [0.56, -0.75],
  [0.56, -0.3],
  [0.555, 0.02],
  [0.53, 0.17],
  [0.47, 0.31],
  [0.38, 0.45],
  [0.28, 0.56],
  [0.21, 0.65],
  [0.185, 0.73],
  [0.18, 0.81],
  [0.225, 0.85],
  [0.225, 0.99],
  [0.0, 0.99],
];

const SEGMENTS = 32;

interface Mesh {
  vertices: Vec3[];
  /** Quads as 4 vertex indices, wound counter-clockwise when facing camera. */
  quads: ReadonlyArray<readonly [number, number, number, number]>;
}

function buildLatheMesh(): Mesh {
  const vertices: Vec3[] = [];
  for (let s = 0; s < SEGMENTS; s++) {
    const theta = (s / SEGMENTS) * Math.PI * 2;
    const cos = Math.cos(theta);
    const sin = Math.sin(theta);
    for (const [r, y] of PROFILE) {
      vertices.push([r * cos, y, r * sin]);
    }
  }

  const quads: Array<readonly [number, number, number, number]> = [];
  const rows = PROFILE.length;
  for (let s = 0; s < SEGMENTS; s++) {
    const next = (s + 1) % SEGMENTS;
    for (let p = 0; p < rows - 1; p++) {
      quads.push([
        s * rows + p,
        next * rows + p,
        next * rows + p + 1,
        s * rows + p + 1,
      ]);
    }
  }
  return { vertices, quads };
}

const MESH = buildLatheMesh();

/* ——— Math helpers ————————————————————————————————————————— */

function rotate(v: Vec3, yaw: number, pitch: number): Vec3 {
  const [x, y, z] = v;
  const cy = Math.cos(yaw);
  const sy = Math.sin(yaw);
  const x1 = x * cy + z * sy;
  const z1 = -x * sy + z * cy;
  const cp = Math.cos(pitch);
  const sp = Math.sin(pitch);
  return [x1, y * cp - z1 * sp, y * sp + z1 * cp];
}

function faceNormal(a: Vec3, b: Vec3, c: Vec3): Vec3 {
  const ux = b[0] - a[0];
  const uy = b[1] - a[1];
  const uz = b[2] - a[2];
  const vx = c[0] - a[0];
  const vy = c[1] - a[1];
  const vz = c[2] - a[2];
  const nx = uy * vz - uz * vy;
  const ny = uz * vx - ux * vz;
  const nz = ux * vy - uy * vx;
  const len = Math.hypot(nx, ny, nz) || 1;
  return [nx / len, ny / len, nz / len];
}

/* ——— Renderer ————————————————————————————————————————————— */

const KEY_LIGHT: Vec3 = (() => {
  const l: Vec3 = [-0.45, 0.65, 0.62];
  const len = Math.hypot(...l);
  return [l[0] / len, l[1] / len, l[2] / len];
})();

/** Warm product base, cool rim — mirrors the amber hero in the storyboard. */
const BASE_DARK: Vec3 = [30, 19, 11];
const BASE_LIT: Vec3 = [250, 193, 110];
const RIM: Vec3 = [34, 211, 238];

/** Half-vector between the key light and a camera looking down -z. */
const HALF: Vec3 = (() => {
  const h: Vec3 = [KEY_LIGHT[0], KEY_LIGHT[1], KEY_LIGHT[2] + 1];
  const len = Math.hypot(...h);
  return [h[0] / len, h[1] / len, h[2] / len];
})();

/** Soft elliptical contact shadow — grounds the mesh in the studio backdrop. */
function drawContactShadow(
  ctx: CanvasRenderingContext2D,
  cx: number,
  cy: number,
  scale: number,
) {
  const y = cy + scale * 0.98;
  const rx = scale * 0.62;
  const ry = scale * 0.15;
  const grad = ctx.createRadialGradient(cx, y, 0, cx, y, rx);
  grad.addColorStop(0, "rgba(0,0,0,0.55)");
  grad.addColorStop(0.6, "rgba(0,0,0,0.22)");
  grad.addColorStop(1, "rgba(0,0,0,0)");
  ctx.save();
  ctx.translate(cx, y);
  ctx.scale(1, ry / rx);
  ctx.translate(-cx, -y);
  ctx.fillStyle = grad;
  ctx.beginPath();
  ctx.arc(cx, y, rx, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();
}

function drawMesh(
  ctx: CanvasRenderingContext2D,
  w: number,
  h: number,
  yaw: number,
  pitch: number,
  wireframe: boolean,
  reveal: number,
) {
  ctx.clearRect(0, 0, w, h);

  const scale = Math.min(w, h) * 0.42;
  const cx = w / 2;
  const cy = h / 2;
  const camZ = 3.4;

  // Rotate once, then project.
  const rotated = MESH.vertices.map((v) => rotate(v, yaw, pitch));
  const projected = rotated.map(([x, y, z]) => {
    const persp = camZ / (camZ - z);
    return { x: cx + x * scale * persp, y: cy - y * scale * persp, z };
  });

  const faces = MESH.quads
    .map((q) => {
      const n = faceNormal(rotated[q[0]], rotated[q[1]], rotated[q[2]]);
      const depth = (rotated[q[0]][2] + rotated[q[1]][2] + rotated[q[2]][2] + rotated[q[3]][2]) / 4;
      return { q, n, depth };
    })
    // Backface cull: keep faces pointing at the camera.
    .filter((f) => f.n[2] > 0)
    // Painter's algorithm — far to near.
    .sort((a, b) => a.depth - b.depth);

  if (!wireframe) drawContactShadow(ctx, cx, cy, scale);

  const shown = Math.max(1, Math.floor(faces.length * reveal));

  for (let i = 0; i < Math.min(shown, faces.length); i++) {
    const { q, n } = faces[i];
    const p0 = projected[q[0]];
    const p1 = projected[q[1]];
    const p2 = projected[q[2]];
    const p3 = projected[q[3]];

    ctx.beginPath();
    ctx.moveTo(p0.x, p0.y);
    ctx.lineTo(p1.x, p1.y);
    ctx.lineTo(p2.x, p2.y);
    ctx.lineTo(p3.x, p3.y);
    ctx.closePath();

    if (wireframe) {
      ctx.strokeStyle = "rgba(34,211,238,0.55)";
      ctx.lineWidth = 0.7;
      ctx.stroke();
      continue;
    }

    const ndotl = Math.max(0, n[0] * KEY_LIGHT[0] + n[1] * KEY_LIGHT[1] + n[2] * KEY_LIGHT[2]);
    // Soft ambient floor so the dark side never goes fully black.
    const t = 0.12 + 0.88 * ndotl;
    // Narrow cool rim only on the extreme grazing angles.
    const rimAmount = Math.pow(1 - Math.min(1, n[2]), 8) * 0.3;
    // Blinn-Phong highlight — reads as a glossy product surface.
    const ndoth = Math.max(0, n[0] * HALF[0] + n[1] * HALF[1] + n[2] * HALF[2]);
    const spec = Math.pow(ndoth, 26) * 200;

    const r = Math.round(BASE_DARK[0] + (BASE_LIT[0] - BASE_DARK[0]) * t + RIM[0] * rimAmount + spec);
    const g = Math.round(BASE_DARK[1] + (BASE_LIT[1] - BASE_DARK[1]) * t + RIM[1] * rimAmount + spec);
    const b = Math.round(BASE_DARK[2] + (BASE_LIT[2] - BASE_DARK[2]) * t + RIM[2] * rimAmount + spec);
    const fill = `rgb(${Math.min(255, r)},${Math.min(255, g)},${Math.min(255, b)})`;

    ctx.fillStyle = fill;
    ctx.fill();
    // Stroke the same colour to hide seams between adjacent quads.
    ctx.strokeStyle = fill;
    ctx.lineWidth = 0.6;
    ctx.stroke();
  }
}

/* ——— Viewport ————————————————————————————————————————————— */

function ModelViewport({
  wireframe,
  reveal,
  spin,
  resetKey,
}: {
  wireframe: boolean;
  reveal: number;
  spin: boolean;
  resetKey: number;
}) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const frameRef = useRef<number | null>(null);
  const yawRef = useRef(0.6);
  const pitchRef = useRef(-0.18);
  const dragRef = useRef<{ x: number; y: number } | null>(null);
  // Auto-spin resumes a beat after the user lets go.
  const idleAtRef = useRef(0);

  useEffect(() => {
    yawRef.current = 0.6;
    pitchRef.current = -0.18;
  }, [resetKey]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduceMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let w = 0;
    let h = 0;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      if (!rect.width || !rect.height) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = rect.width;
      h = rect.height;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();

    const observer = new ResizeObserver(resize);
    observer.observe(canvas);

    let last = performance.now();
    const loop = (now: number) => {
      const dt = Math.min(now - last, 64);
      last = now;

      const idle = !dragRef.current && now - idleAtRef.current > 900;
      if (spin && idle && !reduceMotion) {
        yawRef.current += dt * 0.00042;
      }

      if (w && h) {
        drawMesh(ctx, w, h, yawRef.current, pitchRef.current, wireframe, reveal);
      }
      frameRef.current = requestAnimationFrame(loop);
    };
    frameRef.current = requestAnimationFrame(loop);

    return () => {
      if (frameRef.current !== null) cancelAnimationFrame(frameRef.current);
      observer.disconnect();
    };
  }, [wireframe, reveal, spin]);

  const onPointerDown = useCallback((e: React.PointerEvent<HTMLCanvasElement>) => {
    // Keep React Flow from panning the canvas or dragging the node.
    e.stopPropagation();
    dragRef.current = { x: e.clientX, y: e.clientY };
    idleAtRef.current = performance.now();
    e.currentTarget.setPointerCapture(e.pointerId);
  }, []);

  const onPointerMove = useCallback((e: React.PointerEvent<HTMLCanvasElement>) => {
    const drag = dragRef.current;
    if (!drag) return;
    e.stopPropagation();
    const dx = e.clientX - drag.x;
    const dy = e.clientY - drag.y;
    dragRef.current = { x: e.clientX, y: e.clientY };
    yawRef.current += dx * 0.01;
    // Clamp pitch so the model never flips past the poles.
    pitchRef.current = Math.max(-1.1, Math.min(1.1, pitchRef.current + dy * 0.008));
    idleAtRef.current = performance.now();
  }, []);

  const endDrag = useCallback((e: React.PointerEvent<HTMLCanvasElement>) => {
    if (!dragRef.current) return;
    e.stopPropagation();
    dragRef.current = null;
    idleAtRef.current = performance.now();
  }, []);

  return (
    <canvas
      ref={canvasRef}
      // nodrag/nopan let the pointer orbit the model instead of moving the node.
      className="nodrag nopan absolute inset-0 h-full w-full cursor-grab active:cursor-grabbing"
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={endDrag}
      onPointerCancel={endDrag}
      aria-label="Interactive 3D model preview — drag to orbit"
    />
  );
}

/* ——— Node ————————————————————————————————————————————————— */

function Mini3DNodeComponent({ data }: NodeProps) {
  const d = data as unknown as Mini3DNodeData;
  const phase = d.phase ?? "empty";
  const isEmpty = phase === "empty";
  const isGenerating = phase === "generating";
  const isDone = phase === "done";
  const accent = "var(--studio-3d-accent)";

  const [wireframe, setWireframe] = useState(false);
  const [resetKey, setResetKey] = useState(0);
  const formats = d.formats ?? ["GLB", "FBX", "OBJ", "USDZ"];

  return (
    <MiniNodeShell
      accent={accent}
      fading={d.fading}
      generating={isGenerating}
      progress={d.progress}
      filename={
        d.filename ? { icon: <IconBox size={10} />, text: d.filename } : undefined
      }
      toolbar={
        <>
          <PillButton
            title={wireframe ? "Shaded" : "Wireframe"}
            onClick={() => setWireframe((v) => !v)}
            highlight={wireframe}
          >
            <IconWireframe size={13} />
          </PillButton>
          <PillButton title="Reset view" onClick={() => setResetKey((k) => k + 1)}>
            <IconOrbit size={13} />
          </PillButton>
          <PillDivider />
          <PillButton title="Download">
            <IconDownload size={13} />
          </PillButton>
          <PillButton title="Comment">
            <IconMessage size={13} />
          </PillButton>
        </>
      }
      minWidth={240}
    >
      <MiniNodeHeader
        accent={accent}
        icon={
          <img
            src="/logos/meshy.png"
            alt=""
            width={14}
            height={14}
            className="block"
          />
        }
        label="3D"
        chips={
          <>
            {d.category && (
              <MiniChip accent={accent} tone="soft">
                {d.category}
              </MiniChip>
            )}
            {d.model && <MiniChip tone="outline">{d.model}</MiniChip>}
          </>
        }
      />

      <div className="px-2.5 pt-2 pb-2.5">
        <div
          className="relative w-full overflow-hidden rounded-md"
          style={{ aspectRatio: "4 / 3" }}
        >
          {isEmpty && (
            <div
              className="absolute inset-0 flex flex-col items-center justify-center gap-1.5"
              style={{
                border: "1.5px dashed rgba(255,255,255,0.14)",
                borderRadius: 6,
                background: "rgba(255,255,255,0.02)",
              }}
            >
              <span style={{ color: "var(--studio-text-tertiary)" }}>
                <IconBox size={18} />
              </span>
              <span
                className="text-[9px] tracking-tight"
                style={{ color: "var(--studio-text-tertiary)" }}
              >
                Connect an image
              </span>
            </div>
          )}

          {!isEmpty && (
            <div
              className="absolute inset-0 rounded-md"
              style={{
                // Studio backdrop: soft floor pool under the model.
                background:
                  "radial-gradient(120% 90% at 50% 118%, rgba(34,211,238,0.16) 0%, transparent 60%), linear-gradient(180deg, #101217 0%, #08090c 100%)",
              }}
            >
              <ModelViewport
                wireframe={wireframe || isGenerating}
                reveal={isGenerating ? Math.max(0.06, (d.progress ?? 40) / 100) : 1}
                spin={isDone}
                resetKey={resetKey}
              />

              {/* Drag affordance — fades out once the user has grabbed it. */}
              {isDone && (
                <span
                  className="pointer-events-none absolute left-1.5 bottom-1.5 flex items-center gap-1 rounded px-1 py-0.5 text-[8px] leading-none"
                  style={{
                    background: "rgba(0,0,0,0.5)",
                    color: "rgba(255,255,255,0.7)",
                    fontFamily: "var(--font-mono)",
                  }}
                >
                  <IconOrbit size={8} />
                  drag to orbit
                </span>
              )}

              {isGenerating && (
                <span
                  className="pointer-events-none absolute right-1.5 bottom-1.5 rounded px-1 py-0.5 text-[8px] leading-none"
                  style={{
                    background: "rgba(0,0,0,0.5)",
                    color: accent,
                    fontFamily: "var(--font-mono)",
                  }}
                >
                  building mesh
                </span>
              )}
            </div>
          )}
        </div>

        {/* Export formats + mesh stats */}
        {isDone && (
          <div className="mt-2 flex items-center gap-1 flex-wrap">
            {formats.map((f) => (
              <span
                key={f}
                className="text-[8px] leading-none px-1 py-[3px] rounded-[4px]"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  color: "var(--studio-text-secondary)",
                  fontFamily: "var(--font-mono)",
                }}
              >
                {f}
              </span>
            ))}
            <span className="ml-auto flex items-center gap-1">
              {d.pbr && (
                <MiniChip accent={accent} tone="outline">
                  PBR
                </MiniChip>
              )}
              {d.polycount && <MiniChip tone="outline">{d.polycount}</MiniChip>}
            </span>
          </div>
        )}
      </div>

      {!isEmpty && d.credits !== undefined && (
        <MiniCostRow
          accent={accent}
          credits={d.credits}
          note={d.costNote}
          pending={isGenerating}
        />
      )}
    </MiniNodeShell>
  );
}

export default memo(Mini3DNodeComponent);
