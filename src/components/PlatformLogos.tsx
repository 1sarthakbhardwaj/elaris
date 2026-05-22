"use client";

import Image from "next/image";
import type { ReactNode } from "react";

type Platform = {
  name: string;
  mark: ReactNode;
};

function PlatformChip({ name, children }: { name: string; children: ReactNode }) {
  return (
    <span
      className="group inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/[0.09] bg-white/[0.04] backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-halo/30 hover:bg-white/[0.07] hover:shadow-[0_0_28px_-10px_rgba(168,205,239,0.45)]"
      aria-label={name}
      title={name}
    >
      {children}
    </span>
  );
}

function BrandImage({ src }: { src: string }) {
  return (
    <Image
      src={src}
      alt=""
      width={28}
      height={28}
      className="h-7 w-7 object-contain drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)] transition-transform duration-300 group-hover:scale-105"
      aria-hidden
    />
  );
}

const PLATFORMS: Platform[] = [
  {
    name: "Meta",
    mark: <BrandImage src="/logos/meta.webp" />,
  },
  {
    name: "TikTok",
    mark: (
      <svg viewBox="0 0 24 24" className="h-6 w-6 text-bone/90" fill="currentColor" aria-hidden>
        <path d="M16.6 5.82s.51.5 0 0A4.28 4.28 0 0 1 15.54 3h-3.09v12.4a2.73 2.73 0 0 1-2.73 2.73 2.73 2.73 0 0 1-2.73-2.73 2.73 2.73 0 0 1 2.73-2.73c.28 0 .55.04.81.12V9.66a5.57 5.57 0 0 0-.81-.06 5.33 5.33 0 0 0-5.33 5.33 5.33 5.33 0 0 0 5.33 5.33 5.33 5.33 0 0 0 5.33-5.33V8.69a7.27 7.27 0 0 0 4.3 1.38V7.01a4.24 4.24 0 0 1-2.58-.81z" />
      </svg>
    ),
  },
  {
    name: "Snapchat",
    mark: <BrandImage src="/logos/snapchat.webp" />,
  },
  {
    name: "YouTube",
    mark: <BrandImage src="/logos/youtube.webp" />,
  },
  {
    name: "LinkedIn",
    mark: (
      <svg viewBox="0 0 24 24" className="h-6 w-6 text-[#0A66C2]" fill="currentColor" aria-hidden>
        <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0z" />
      </svg>
    ),
  },
  {
    name: "X",
    mark: (
      <svg viewBox="0 0 24 24" className="h-5 w-5 text-bone/85" fill="currentColor" aria-hidden>
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: "Pinterest",
    mark: <BrandImage src="/logos/pinterest.webp" />,
  },
];

export default function PlatformLogos() {
  return (
    <div className="anim-fade-up d-4 mt-10 flex flex-col items-center gap-5">
      <span className="text-[10px] text-mono text-chrome/55 uppercase tracking-[0.32em]">
        Delivers to
      </span>
      <div className="flex items-center justify-center flex-wrap gap-2.5 sm:gap-3">
        {PLATFORMS.map((platform) => (
          <PlatformChip key={platform.name} name={platform.name}>
            {platform.mark}
          </PlatformChip>
        ))}
      </div>
    </div>
  );
}
