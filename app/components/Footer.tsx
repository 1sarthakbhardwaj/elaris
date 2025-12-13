'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const links = {
  Product: [
    { label: 'Features', href: '#features' },
    { label: 'How it works', href: '#workflow' },
    { label: 'Why Elaris', href: '#why-elaris' },
    { label: 'Examples', href: '#examples' },
  ],
  Company: [
    { label: 'About', href: '#top' },
    { label: 'Careers', href: '#top' },
    { label: 'Contact', href: '#top' },
  ],
  Resources: [
    { label: 'Sample campaigns', href: '#examples' },
    { label: 'Security', href: '#top' },
    { label: 'Docs', href: '#top' },
  ],
  Legal: [
    { label: 'Privacy', href: '#top' },
    { label: 'Terms', href: '#top' },
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
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/30 px-4 py-2 text-sm text-white/80">
                <Sparkles className="h-4 w-4 text-purple-300" />
                <span>Ready to ship better creatives?</span>
              </div>
              <h3 className="mt-5 text-3xl md:text-4xl font-bold tracking-tight">
                <span className="bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
                  Put Elaris AI to work
                </span>
              </h3>
              <p className="mt-3 text-white/65 leading-relaxed">
                Get a walkthrough of the agentic workflow and see how we rank creatives before you spend.
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
                View Examples
              </Button>
            </div>
          </div>
        </motion.div>

        {/* link columns */}
        <div className="mt-14 grid grid-cols-2 gap-10 md:grid-cols-5">
          <div className="col-span-2 md:col-span-1">
            <a href="#top" className="inline-flex items-center gap-2">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-r from-purple-500 to-pink-500">
                <Sparkles className="h-5 w-5 text-white" />
              </span>
              <span className="text-lg font-semibold text-white">Elaris AI</span>
            </a>
            <p className="mt-3 text-sm text-white/60 leading-relaxed">
              Agentic creative performance platform built to generate, evaluate, and optimize ads across channels.
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
            © {new Date().getFullYear()} Elaris AI. All rights reserved.
          </p>
          <div className="text-xs text-white/45">
            Built with agentic workflows · Smooth scrolling by Lenis
          </div>
        </div>
      </div>
    </footer>
  );
}

