'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const links = {
  Product: [
    { label: 'Features', href: '#features' },
    { label: 'How it works', href: '#workflow' },
    { label: 'Why Elaris', href: '#why-elaris' },
    { label: 'Showcase', href: '#Showcase' },
  ],
  Company: [
    { label: 'Contact', href: '#top' },
  ],
  Legal: [
    { label: 'Privacy', href: '/privacy-policy' },
    { label: 'Terms', href: '/terms' },
  ],
} as const;

export function Footer() {
  return (
    <footer className="relative overflow-hidden">
      {/* top divider */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/2 h-[520px] w-[920px] -translate-x-1/2 rounded-full bg-purple-600/10 blur-3xl" />
        <div
          data-lenis-parallax
          style={{ ['--lenis-speed' as any]: 0.02 }}
          className="absolute -bottom-40 left-10 h-[420px] w-[420px] rounded-full bg-pink-600/10 blur-3xl"
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-20">
        {/* CTA card */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-120px' }}
          transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-8 md:p-10"
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(168,85,247,0.22),transparent_55%),radial-gradient(circle_at_80%_90%,rgba(236,72,153,0.16),transparent_55%)]" />
          <div className="relative grid grid-cols-1 gap-8 md:grid-cols-2 md:items-center">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold tracking-tight">
                <span className="bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
                  Ready to optimize your ad creative?
                </span>
              </h3>
              <p className="mt-4 text-white/65 leading-relaxed">
                Get a walkthrough of our AI agents and see how we optimize creatives for measurable performance.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row md:justify-end">
              <Button
                size="lg"
                className="h-auto rounded-full px-7 py-6 text-base bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 shadow-lg shadow-purple-500/25"
              >
                Request a Demo
                <ArrowRight className="h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-auto rounded-full px-7 py-6 text-base border-white/15 bg-transparent hover:bg-white/[0.06]"
              >
                Showcase
              </Button>
            </div>
          </div>
        </motion.div>

        {/* link columns */}
        <div className="mt-14 grid grid-cols-2 gap-10 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <a href="#top" className="inline-flex items-center gap-2.5">
              <div className="relative">
                <div className="absolute inset-0 bg-purple-500 rounded-md blur-sm opacity-40" />
                <div className="relative w-8 h-8 rounded-md bg-purple-600" />
              </div>
              <span className="text-lg font-semibold text-white">Elaris Labs</span>
            </a>
            <p className="mt-4 text-sm text-white/60 leading-relaxed">
              AI agents that generate, test & refine ad creatives for measurable performance.
            </p>
          </div>

          {Object.entries(links).map(([group, items]) => (
            <div key={group} className="space-y-3">
              <div className="text-sm font-semibold tracking-wide text-white/80">{group}</div>
              <ul className="space-y-2">
                {items.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="text-sm text-white/55 hover:text-white transition-colors"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* bottom bar */}
        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-white/45">
            © {new Date().getFullYear()} Elaris Labs. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}


