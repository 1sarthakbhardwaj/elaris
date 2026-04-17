"use client";

import type { ReactNode } from "react";

type Logo = {
  name: string;
  mark: ReactNode;
};

/** Compact monochrome icon + wordmark set. Every glyph draws in
 *  `currentColor`, so the strip picks up whatever tone the parent sets.
 *  Heights are consistent (h-[18px]) to keep the baseline tidy. */
const LOGOS: Logo[] = [
  {
    name: "Meta",
    mark: (
      <span className="inline-flex items-center gap-1.5">
        <svg viewBox="0 0 32 18" height="14" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="M2.4 11.5C2.4 6.4 4.9 3 8.2 3c2.4 0 4.1 1.6 6 4.4l2.1 3.1c2.3 3.4 3.8 4.6 5.7 4.6 2.4 0 4-2 4-5.1 0-3.2-1.6-5.2-4-5.2-1.9 0-3.5 1.2-5.6 4.2l-1.4 2.1C12.5 14.4 10.7 16 8.3 16c-3.3 0-5.9-3.4-5.9-4.5z" />
        </svg>
        <span className="font-sans font-semibold tracking-tight text-[14px] leading-none">Meta</span>
      </span>
    ),
  },
  {
    name: "TikTok",
    mark: (
      <span className="inline-flex items-center gap-1.5">
        <svg viewBox="0 0 16 16" height="14" fill="currentColor" aria-hidden>
          <path d="M11.3 1.3h-2.1v9.4c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2c.2 0 .4 0 .6.1V6.6c-.2 0-.4-.1-.6-.1-2.4 0-4.3 2-4.3 4.3S4.8 15.2 7.2 15.2s4.3-2 4.3-4.3V6.1c.9.6 2 1 3.2 1V5c-1.8 0-3.4-1.2-3.4-3.7z" />
        </svg>
        <span className="font-sans font-bold tracking-tight text-[14px] leading-none">TikTok</span>
      </span>
    ),
  },
  {
    name: "Snap",
    mark: (
      <span className="inline-flex items-center gap-1.5">
        <svg viewBox="0 0 16 16" height="14" fill="currentColor" aria-hidden>
          <path d="M8 1.3c2.5 0 4.6 1.7 5.3 4 .15.5.22 1.05.22 1.6 0 .85-.04 1.6-.07 2.2 0 .12.05.2.17.24.5.2 1.08.32 1.6.32.3 0 .55.16.6.45.05.3-.15.55-.48.7-.48.23-1.18.4-1.72.55-.12.04-.2.1-.2.24 0 .12.06.28.15.45.36.7 1.13 1.45 2.02 1.8.28.12.35.32.3.56-.05.25-.23.42-.5.5-.65.2-1.48.32-2.22.4-.08.01-.15.08-.18.18-.07.22-.15.5-.23.76-.08.28-.3.42-.6.4-.3-.02-.68-.12-1.08-.12-.35 0-.78.06-1.2.22-.82.3-1.5 1-2.78 1h-.02c-1.28 0-1.96-.7-2.78-1-.42-.16-.85-.22-1.2-.22-.4 0-.78.1-1.08.12-.3.02-.52-.12-.6-.4-.08-.26-.16-.54-.23-.76-.03-.1-.1-.17-.18-.18-.74-.08-1.57-.2-2.22-.4-.27-.08-.45-.25-.5-.5-.05-.24.02-.44.3-.56.89-.35 1.66-1.1 2.02-1.8.09-.17.15-.33.15-.45 0-.14-.08-.2-.2-.24-.54-.15-1.24-.32-1.72-.55-.33-.15-.53-.4-.48-.7.05-.29.3-.45.6-.45.52 0 1.1-.12 1.6-.32.12-.04.17-.12.17-.24-.03-.6-.07-1.35-.07-2.2 0-.55.07-1.1.22-1.6.7-2.3 2.8-4 5.3-4z" />
        </svg>
        <span className="font-sans font-bold tracking-tight text-[14px] leading-none">Snap</span>
      </span>
    ),
  },
  {
    name: "YouTube",
    mark: (
      <span className="inline-flex items-center gap-1.5">
        <svg viewBox="0 0 20 14" height="14" fill="currentColor" aria-hidden>
          <path fillRule="evenodd" clipRule="evenodd" d="M17.5 1.3c.9.3 1.6 1 1.8 1.9.4 1.7.4 5.2.4 5.2s0 3.5-.4 5.2c-.2.9-.9 1.6-1.8 1.9-1.7.4-8.5.4-8.5.4s-6.7 0-8.5-.5c-.9-.3-1.6-1-1.8-1.9C-1.5 11.8-1.5 8.3-1.5 8.3s0-3.5.4-5.2c.2-.9.9-1.6 1.8-1.9C2.4.8 9.2.8 9.2.8s6.7 0 8.5.5zM7.1 4.9v6.8L12.9 8.3 7.1 4.9z" transform="translate(1.5 -1)" />
        </svg>
        <span className="font-sans font-semibold tracking-tight text-[14px] leading-none">YouTube</span>
      </span>
    ),
  },
  {
    name: "LinkedIn",
    mark: (
      <span className="inline-flex items-center gap-1.5">
        <svg viewBox="0 0 16 16" height="14" fill="currentColor" aria-hidden>
          <path d="M14.5 0h-13C.7 0 0 .7 0 1.5v13c0 .8.7 1.5 1.5 1.5h13c.8 0 1.5-.7 1.5-1.5v-13C16 .7 15.3 0 14.5 0zM4.8 13.6H2.4V6.1h2.4v7.5zM3.6 5.1c-.8 0-1.4-.6-1.4-1.4s.6-1.4 1.4-1.4 1.4.6 1.4 1.4-.6 1.4-1.4 1.4zm10 8.5h-2.4V10c0-.9 0-2-1.2-2s-1.4.9-1.4 1.9v3.7H6.2V6.1h2.3v1h.1c.3-.6 1.1-1.2 2.2-1.2 2.4 0 2.8 1.6 2.8 3.6v4.1z" />
        </svg>
        <span className="font-sans font-semibold tracking-tight text-[14px] leading-none">LinkedIn</span>
      </span>
    ),
  },
  {
    name: "X",
    mark: (
      <svg viewBox="0 0 20 20" height="14" fill="currentColor" aria-hidden>
        <path d="M15.3 1.5h2.9L11.9 8.6 19.3 18.5h-5.8L8.9 12.5 3.6 18.5H.7l6.8-7.7L.4 1.5h5.9l4.1 5.5 4.9-5.5zm-1 15.3h1.6L5.7 3.1H4L14.3 16.8z" />
      </svg>
    ),
  },
  {
    name: "Pinterest",
    mark: (
      <span className="inline-flex items-center gap-1.5">
        <svg viewBox="0 0 16 16" height="14" fill="currentColor" aria-hidden>
          <path d="M8 0C3.6 0 0 3.6 0 8c0 3.4 2.1 6.3 5.1 7.4-.1-.6-.1-1.6 0-2.3.1-.6.9-3.8.9-3.8s-.2-.5-.2-1.1c0-1.1.6-1.9 1.4-1.9.7 0 1 .5 1 1.1 0 .7-.4 1.7-.7 2.6-.2.8.4 1.4 1.2 1.4 1.4 0 2.5-1.5 2.5-3.7 0-1.9-1.4-3.3-3.4-3.3-2.3 0-3.6 1.7-3.6 3.5 0 .7.3 1.4.6 1.8.1.1.1.1.1.2 0 .2-.1.6-.2.7 0 .1-.1.1-.2.1-1-.4-1.5-1.7-1.5-3 0-2.3 1.9-5 5.6-5 3 0 5 2.2 5 4.5 0 3-1.7 5.3-4.2 5.3-.8 0-1.6-.4-1.9-.9 0 0-.4 1.6-.5 1.9-.2.7-.6 1.3-1 1.9.7.2 1.5.3 2.2.3 4.4 0 8-3.6 8-8s-3.6-8-8-8z" />
        </svg>
        <span className="font-sans font-bold tracking-tight text-[14px] leading-none">Pinterest</span>
      </span>
    ),
  },
];

export default function PlatformLogos() {
  return (
    <div className="anim-fade-up d-4 mt-10 flex flex-col items-center gap-4">
      <span className="text-[10px] text-mono text-chrome/60 uppercase tracking-[0.3em]">
        Delivers to
      </span>
      <div className="flex items-center justify-center flex-wrap gap-x-7 gap-y-4 text-chrome/55">
        {LOGOS.map((logo) => (
          <span
            key={logo.name}
            className="inline-flex items-center opacity-85 hover:opacity-100 hover:text-bone transition-all duration-300"
            aria-label={logo.name}
          >
            {logo.mark}
          </span>
        ))}
      </div>
    </div>
  );
}
