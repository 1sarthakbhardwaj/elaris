"use client";

import { CLIENT_LOGOS } from "@/lib/clients";
import { useReveal } from "./useReveal";

function ClientLogoChip({
  name,
  src,
  fill = false,
}: {
  name: string;
  src: string;
  fill?: boolean;
}) {
  return (
    <div className="group relative flex h-20 w-[180px] shrink-0 items-center justify-center overflow-hidden rounded-xl border border-white/[0.06] bg-white/95 ring-1 ring-inset ring-black/[0.03] transition-all duration-300 hover:-translate-y-0.5 hover:border-halo/25 hover:bg-white hover:shadow-[0_10px_40px_-16px_rgba(168,205,239,0.5)]">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={name}
        className={
          fill
            ? "h-full w-auto object-contain transition-transform duration-300 group-hover:scale-[1.04]"
            : "max-h-11 w-auto max-w-[130px] object-contain px-4 transition-transform duration-300 group-hover:scale-[1.04]"
        }
        loading="lazy"
        decoding="async"
      />
    </div>
  );
}

export default function TrustedBy() {
  const [ref, shown] = useReveal<HTMLDivElement>(0.15);
  const track = [...CLIENT_LOGOS, ...CLIENT_LOGOS];

  return (
    <section
      aria-label="Trusted by leading brands"
      className="relative border-t border-white/[0.06] py-16 md:py-20 overflow-hidden"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(109,166,217,0.07) 0%, transparent 60%)",
        }}
      />

      <div
        ref={ref}
        className={`relative mx-auto max-w-[1200px] ${shown ? "anim-fade-up" : "opacity-0"}`}
      >
        <div className="mb-10 flex flex-col items-center gap-3 px-6 text-center md:mb-12">
          <p className="text-[11px] text-mono uppercase tracking-[0.3em] text-halo">
            ◉ Trusted by
          </p>
          <p className="max-w-[36rem] text-sm leading-relaxed text-chrome md:text-base">
            Brands across retail, media, and finance ship campaigns with ElarisLabs.
          </p>
        </div>

        <div className="marquee-track marquee-clients flex w-max items-center gap-4 md:gap-5">
          {track.map((client, index) => (
            <ClientLogoChip
              key={`${client.name}-${index}`}
              name={client.name}
              src={client.src}
              fill={client.fill}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
