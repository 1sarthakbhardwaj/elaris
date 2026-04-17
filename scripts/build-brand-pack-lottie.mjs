// Generator for /public/lottie/brand-pack-resize.json
// Mirrors the design built in LottieFiles Creator — master creative fans out
// into multiple size variants with pulses, connectors and a scanner highlight.
// Run: node scripts/build-brand-pack-lottie.mjs

import { writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT = resolve(__dirname, "../public/lottie/brand-pack-resize.json");

// ---------- palette (matches site tokens) ----------
const C = {
  halo:   [168, 205, 239],
  plasma: [109, 166, 217],
  deep:   [45, 74, 107],
  silver: [199, 202, 209],
  chrome: [138, 143, 156],
  steel:  [58, 62, 72],
  pearl:  [232, 217, 184],
  brass:  [201, 176, 135],
  lume:   [247, 248, 250],
  coal:   [7, 7, 10],
};
const rgb = ([r, g, b]) => [r / 255, g / 255, b / 255, 1];

// ---------- lottie helpers ----------
const EASE_OUT = { i: { x: [0.25], y: [1] }, o: { x: [0.5], y: [0] } };
const EASE_OUT_XY = { i: { x: 0.25, y: 1 }, o: { x: 0.5, y: 0 } };
const BOUNCE = { i: { x: [0.34], y: [1.56] }, o: { x: [0.64], y: [0] } };
const LINEAR = { i: { x: [0.5], y: [0.5] }, o: { x: [0.5], y: [0.5] } };

function staticProp(k) {
  return { a: 0, k };
}

function animProp(keyframes, easeDefault = EASE_OUT) {
  const ks = keyframes.map((kf, idx) => {
    const next = keyframes[idx + 1];
    const base = { t: kf.t, s: Array.isArray(kf.s) ? kf.s : [kf.s] };
    if (!next) return base;
    return { ...base, ...(kf.ease || easeDefault) };
  });
  return { a: 1, k: ks };
}

const isAnimated = (v) => Array.isArray(v) && v.length > 0 && typeof v[0] === "object" && !Array.isArray(v[0]) && "t" in v[0];

function transform({ pos = [0, 0], scale = [100, 100], anchor = [0, 0], rot = 0, op = 100 }) {
  return {
    p: isAnimated(pos) ? animProp(pos) : staticProp([...pos, 0]),
    a: staticProp([...anchor, 0]),
    s: isAnimated(scale) ? animProp(scale) : staticProp([...scale, 100]),
    r: isAnimated(rot) ? animProp(rot) : staticProp(rot),
    o: isAnimated(op) ? animProp(op) : staticProp(op),
  };
}

function shapeLayer({ ind, name, transform: tr, shapes, ip = 0, op = 240 }) {
  return {
    ddd: 0, ind, ty: 4, nm: name, sr: 1,
    ks: tr,
    ao: 0,
    shapes,
    ip, op, st: 0, bm: 0,
  };
}

// ---------- shapes ----------
function rect({ w, h, r = 0, p = [0, 0] }) {
  return {
    ty: "rc",
    d: 1,
    s: staticProp([w, h]),
    p: staticProp(p),
    r: staticProp(r),
    nm: "Rect Path",
    hd: false,
  };
}
function ellipse({ w, h, p = [0, 0] }) {
  return {
    ty: "el", d: 1,
    s: staticProp([w, h]),
    p: staticProp(p),
    nm: "Ellipse Path",
    hd: false,
  };
}
function path({ points, closed = false }) {
  // points: [{v:[x,y], in:[dx,dy], out:[dx,dy]}, ...]
  const v = points.map((pt) => pt.v);
  const i = points.map((pt) => pt.in);
  const o = points.map((pt) => pt.out);
  return {
    ty: "sh", d: 1,
    ks: staticProp({ c: closed, v, i, o }),
    nm: "Path",
    hd: false,
  };
}
function fill(color, opacity = 100) {
  return {
    ty: "fl",
    c: staticProp(rgb(color)),
    o: typeof opacity === "number" ? staticProp(opacity) : animProp(opacity),
    r: 1, bm: 0, nm: "Fill", hd: false,
  };
}
function stroke(color, width = 1, opacity = 100) {
  return {
    ty: "st",
    c: staticProp(rgb(color)),
    o: typeof opacity === "number" ? staticProp(opacity) : animProp(opacity),
    w: typeof width === "number" ? staticProp(width) : animProp(width),
    lc: 2, lj: 2, ml: 4,
    bm: 0, nm: "Stroke", hd: false,
  };
}
function gradFill({ type = 1, start, end, stops, opacity = 100 }) {
  // type: 1 linear, 2 radial; stops: [{offset, color:[r,g,b], op:0..1}]
  const gradArr = [];
  stops.forEach((s) => {
    gradArr.push(s.offset, s.color[0] / 255, s.color[1] / 255, s.color[2] / 255);
  });
  // also append opacity stops (Lottie encodes alpha separately appended after rgb stops)
  stops.forEach((s) => gradArr.push(s.offset, s.op ?? 1));
  return {
    ty: "gf",
    o: typeof opacity === "number" ? staticProp(opacity) : animProp(opacity),
    r: 1, bm: 0,
    g: { p: stops.length, k: staticProp(gradArr) },
    s: staticProp(start),
    e: staticProp(end),
    t: type,
    nm: "Gradient Fill", hd: false,
  };
}
function tr({ p = [0, 0], s = [100, 100], o = 100, r = 0 }) {
  return {
    ty: "tr",
    p: staticProp(p),
    a: staticProp([0, 0]),
    s: staticProp(s),
    r: staticProp(r),
    o: staticProp(o),
    sk: staticProp(0), sa: staticProp(0),
    nm: "Transform",
  };
}
function group(children, name = "Group") {
  return {
    ty: "gr",
    it: [...children, tr({})],
    nm: name, np: children.length + 1, cix: 2, bm: 0, ix: 1, hd: false,
  };
}
function trimPath({ start = 0, end = 0, offset = 0, m = 1 }) {
  return {
    ty: "tm",
    s: typeof start === "number" ? staticProp(start) : animProp(start),
    e: typeof end === "number" ? staticProp(end) : animProp(end),
    o: typeof offset === "number" ? staticProp(offset) : animProp(offset),
    m, nm: "Trim Paths", hd: false,
  };
}

// ---------- scene config ----------
const FR = 60;
const DUR = 240;
const W = 800, H = 640;
const MX = 200, MY = 320;

const VARIANTS = [
  { label: "1080", pos: [490, 195], size: [90, 90], grad: [C.halo, C.plasma],  delay: 55 },
  { label: "1350", pos: [615, 195], size: [70, 90], grad: [C.silver, C.chrome], delay: 60 },
  { label: "1920", pos: [720, 195], size: [50, 90], grad: [C.pearl, C.brass],  delay: 65 },
  { label: "16:9", pos: [510, 420], size: [130, 75], grad: [C.plasma, C.deep], delay: 70 },
  { label: "728",  pos: [620, 480], size: [130, 20], grad: [C.halo, C.silver], delay: 75 },
  { label: "300",  pos: [720, 430], size: [80, 70],  grad: [C.brass, C.steel], delay: 80 },
];

// ---------- build layers (top→bottom = low index first) ----------
const layers = [];
let ind = 1;

// 1) Scanner highlight
{
  const scanPath = VARIANTS.map((v) => v.pos);
  const scanStart = 140;
  const hold = 14;
  const scanEnd = scanStart + (scanPath.length - 1) * hold;
  const posKfs = [];
  posKfs.push({ t: 0,          s: [...scanPath[0], 0], ease: LINEAR });
  posKfs.push({ t: scanStart,  s: [...scanPath[0], 0], ease: LINEAR });
  scanPath.forEach((p, i) => {
    posKfs.push({ t: scanStart + i * hold, s: [...p, 0], ease: EASE_OUT });
  });
  posKfs.push({ t: DUR, s: [...scanPath[scanPath.length - 1], 0], ease: LINEAR });

  const opKfs = [
    { t: 0, s: 0, ease: LINEAR },
    { t: scanStart - 5, s: 0, ease: EASE_OUT },
    { t: scanStart + 4, s: 100, ease: LINEAR },
    { t: scanEnd, s: 100, ease: EASE_OUT },
    { t: scanEnd + 12, s: 0, ease: LINEAR },
    { t: DUR, s: 0 },
  ];
  const sKfs = [
    { t: 0, s: [60, 60, 100], ease: LINEAR },
    { t: scanStart, s: [60, 60, 100], ease: EASE_OUT },
    { t: scanStart + 6, s: [130, 130, 100], ease: LINEAR },
    { t: scanEnd, s: [130, 130, 100], ease: EASE_OUT },
    { t: scanEnd + 10, s: [60, 60, 100] },
  ];

  layers.push(shapeLayer({
    ind: ind++, name: "Scanner",
    transform: transform({ pos: posKfs, scale: sKfs, op: opKfs }),
    shapes: [group([
      ellipse({ w: 18, h: 18 }),
      fill(C.halo, 100),
      stroke(C.lume, 1.5, 100),
    ], "Scanner")],
  }));
}

// 2) Variant tiles (each its own layer)
VARIANTS.forEach((v) => {
  const scaleKfs = [
    { t: 0, s: [0, 0, 100], ease: LINEAR },
    { t: v.delay, s: [0, 0, 100], ease: BOUNCE },
    { t: v.delay + 18, s: [115, 115, 100], ease: EASE_OUT },
    { t: v.delay + 28, s: [100, 100, 100], ease: LINEAR },
    { t: 225, s: [100, 100, 100], ease: EASE_OUT },
    { t: DUR, s: [90, 90, 100] },
  ];
  const opKfs = [
    { t: 0, s: 0, ease: LINEAR },
    { t: v.delay, s: 0, ease: EASE_OUT },
    { t: v.delay + 12, s: 100, ease: LINEAR },
    { t: 225, s: 100, ease: EASE_OUT },
    { t: DUR, s: 0 },
  ];

  layers.push(shapeLayer({
    ind: ind++, name: `Variant ${v.label}`,
    transform: transform({ pos: v.pos, scale: scaleKfs, op: opKfs }),
    shapes: [group([
      rect({ w: v.size[0], h: v.size[1], r: 8 }),
      stroke(C.halo, 1.25, 100),
      gradFill({
        type: 1,
        start: [-v.size[0] / 2, -v.size[1] / 2],
        end:   [ v.size[0] / 2,  v.size[1] / 2],
        stops: [
          { offset: 0, color: v.grad[0], op: 0.92 },
          { offset: 1, color: v.grad[1], op: 0.55 },
        ],
      }),
    ], "Tile")],
  }));
});

// 3) Inner dot
{
  const scaleKfs = [
    { t: 0, s: [0, 0, 100], ease: LINEAR },
    { t: 20, s: [0, 0, 100], ease: BOUNCE },
    { t: 35, s: [120, 120, 100], ease: EASE_OUT },
    { t: 45, s: [100, 100, 100], ease: LINEAR },
    { t: 225, s: [100, 100, 100], ease: EASE_OUT },
    { t: DUR, s: [0, 0, 100] },
  ];
  const opKfs = [
    { t: 0, s: 0, ease: LINEAR },
    { t: 25, s: 100, ease: LINEAR },
    { t: 225, s: 100, ease: EASE_OUT },
    { t: DUR, s: 0 },
  ];
  layers.push(shapeLayer({
    ind: ind++, name: "Inner dot",
    transform: transform({ pos: [MX, MY], scale: scaleKfs, op: opKfs }),
    shapes: [group([
      ellipse({ w: 24, h: 24 }),
      fill(C.lume, 100),
    ], "InnerDot")],
  }));
}

// 4) Master creative
{
  const scaleKfs = [
    { t: 0, s: [0, 0, 100], ease: LINEAR },
    { t: 18, s: [108, 108, 100], ease: EASE_OUT },
    { t: 28, s: [100, 100, 100], ease: LINEAR },
    { t: 105, s: [100, 100, 100], ease: EASE_OUT },
    { t: 120, s: [103, 103, 100], ease: LINEAR },
    { t: 140, s: [100, 100, 100], ease: LINEAR },
    { t: 190, s: [100, 100, 100], ease: EASE_OUT },
    { t: 205, s: [103, 103, 100], ease: LINEAR },
    { t: 225, s: [100, 100, 100], ease: EASE_OUT },
    { t: DUR, s: [90, 90, 100] },
  ];
  const opKfs = [
    { t: 0, s: 0, ease: LINEAR },
    { t: 15, s: 100, ease: EASE_OUT },
    { t: 225, s: 100, ease: EASE_OUT },
    { t: DUR, s: 0 },
  ];
  layers.push(shapeLayer({
    ind: ind++, name: "Master",
    transform: transform({ pos: [MX, MY], scale: scaleKfs, op: opKfs }),
    shapes: [group([
      rect({ w: 150, h: 150, r: 12 }),
      stroke(C.halo, 2, 100),
      gradFill({
        type: 1,
        start: [-75, -75], end: [75, 75],
        stops: [
          { offset: 0,   color: C.halo,   op: 1 },
          { offset: 0.6, color: C.plasma, op: 1 },
          { offset: 1,   color: C.deep,   op: 1 },
        ],
      }),
    ], "MasterBox")],
  }));
}

// 5) Connectors (drawn w/ trim paths)
VARIANTS.forEach((v, i) => {
  const dx = v.pos[0] - MX;
  const ds = 35 + i * 6;
  const endKfs = [
    { t: 0, s: 0, ease: LINEAR },
    { t: ds, s: 0, ease: EASE_OUT },
    { t: ds + 20, s: 100 },
  ];
  const opKfs = [
    { t: 0, s: 0, ease: LINEAR },
    { t: ds, s: 65, ease: LINEAR },
    { t: 210, s: 65, ease: EASE_OUT },
    { t: 230, s: 30, ease: LINEAR },
    { t: DUR, s: 0 },
  ];
  layers.push(shapeLayer({
    ind: ind++, name: `Connector ${v.label}`,
    transform: transform({ pos: [0, 0], op: opKfs }),
    shapes: [group([
      path({
        points: [
          { v: [MX, MY],         in: [0, 0],         out: [dx * 0.4, 0] },
          { v: [v.pos[0], v.pos[1]], in: [-dx * 0.4, 0], out: [0, 0] },
        ],
        closed: false,
      }),
      trimPath({ start: 0, end: endKfs, offset: 0, m: 1 }),
      stroke(C.halo, 1.25, 100),
    ], "Line")],
  }));
});

// 6) Pulse ring
{
  const p0 = 35, p1 = 115, p2 = 190, pd = 60;
  const sKfs = [
    { t: 0, s: [100, 100, 100], ease: LINEAR },
    { t: p0, s: [100, 100, 100], ease: EASE_OUT },
    { t: p0 + pd, s: [270, 270, 100], ease: LINEAR },
    { t: p0 + pd + 1, s: [100, 100, 100], ease: EASE_OUT },
    { t: p1, s: [100, 100, 100], ease: EASE_OUT },
    { t: p1 + pd, s: [270, 270, 100], ease: LINEAR },
    { t: p1 + pd + 1, s: [100, 100, 100], ease: EASE_OUT },
    { t: p2, s: [100, 100, 100], ease: EASE_OUT },
    { t: p2 + pd, s: [270, 270, 100], ease: LINEAR },
    { t: DUR, s: [270, 270, 100] },
  ];
  const opKfs = [
    { t: 0, s: 0, ease: LINEAR },
    { t: p0, s: 75, ease: EASE_OUT },
    { t: p0 + pd, s: 0, ease: LINEAR },
    { t: p1, s: 75, ease: EASE_OUT },
    { t: p1 + pd, s: 0, ease: LINEAR },
    { t: p2, s: 75, ease: EASE_OUT },
    { t: p2 + pd, s: 0, ease: LINEAR },
    { t: DUR, s: 0 },
  ];
  layers.push(shapeLayer({
    ind: ind++, name: "Pulse",
    transform: transform({ pos: [MX, MY], scale: sKfs, op: opKfs }),
    shapes: [group([
      ellipse({ w: 150, h: 150 }),
      stroke(C.halo, 2, 100),
    ], "PulseRing")],
  }));
}

// 7) Ambient radial glow
{
  const opKfs = [
    { t: 0, s: 40, ease: LINEAR },
    { t: 25, s: 95, ease: EASE_OUT },
    { t: 90, s: 80, ease: LINEAR },
    { t: 140, s: 95, ease: EASE_OUT },
    { t: 200, s: 85, ease: LINEAR },
    { t: 225, s: 95, ease: EASE_OUT },
    { t: DUR, s: 40 },
  ];
  layers.push(shapeLayer({
    ind: ind++, name: "Glow",
    transform: transform({ pos: [MX, MY], op: opKfs }),
    shapes: [group([
      ellipse({ w: 520, h: 520 }),
      gradFill({
        type: 2,
        start: [0, 0], end: [260, 0],
        stops: [
          { offset: 0,   color: C.halo,   op: 0.35 },
          { offset: 0.4, color: C.plasma, op: 0.15 },
          { offset: 1,   color: C.coal,   op: 0 },
        ],
      }),
    ], "Glow")],
  }));
}

// 8) Background
layers.push(shapeLayer({
  ind: ind++, name: "Background",
  transform: transform({ pos: [W / 2, H / 2] }),
  shapes: [group([
    rect({ w: W, h: H }),
    fill(C.coal, 100),
  ], "BG")],
}));

// ---------- top-level JSON ----------
const lottie = {
  v: "5.7.4",
  fr: FR,
  ip: 0,
  op: DUR,
  w: W,
  h: H,
  nm: "Brand Pack Resize",
  ddd: 0,
  assets: [],
  layers,
  meta: { g: "elarislabs-brand-pack" },
};

writeFileSync(OUT, JSON.stringify(lottie));
console.log(`✓ wrote ${OUT}`);
console.log(`  layers: ${layers.length}, duration: ${DUR / FR}s @ ${FR}fps`);
