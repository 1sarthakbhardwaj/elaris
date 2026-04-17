"use client";

/**
 * Shared browser-chrome strip used at the top of every animated product-card
 * preview. Gives each story a consistent "app frame" feel without duplicating
 * markup across files.
 */
export default function PreviewChrome({ label }: { label: string }) {
  return (
    <div className="relative z-10 flex items-center justify-between px-3.5 py-2 border-b border-white/[0.08] bg-black/35 backdrop-blur-xl">
      <div className="flex items-center gap-2.5">
        <div className="flex gap-1">
          <span className="w-2 h-2 rounded-full bg-white/20" />
          <span className="w-2 h-2 rounded-full bg-white/20" />
          <span className="w-2 h-2 rounded-full bg-white/20" />
        </div>
        <span className="text-[9px] text-mono text-silver uppercase tracking-[0.18em] truncate">
          {label}
        </span>
      </div>
      <div className="flex items-center gap-1.5 shrink-0">
        <span className="w-1.5 h-1.5 rounded-full bg-halo anim-breathe" />
        <span className="text-[9px] text-mono text-halo uppercase tracking-[0.18em]">live</span>
      </div>
    </div>
  );
}
