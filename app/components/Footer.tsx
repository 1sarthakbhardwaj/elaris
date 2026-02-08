'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';

const links = {
  Products: [
    { label: 'Static Studio', href: '#platform-static' },
    { label: 'Motion Studio', href: '#platform-motion' },
    { label: 'Creator Mode', href: '#platform-creator' },
    { label: 'Audio Intelligence', href: '#platform-audio' },
    { label: 'Compliance Engine', href: '#platform-compliance' },
  ],
  // Research: [
  //   { label: 'Elaris Health', href: '#research-health' },
  //   { label: 'Elaris Climate', href: '#research-climate' },
  //   { label: 'Elaris Robotics', href: '#research-robotics' },
  // ],
  Company: [
    { label: 'Why Elaris', href: '#why-elaris' },
    { label: 'Showcase', href: '#Showcase' },
    { label: 'Contact', href: '#top' },
  ],
  Legal: [
    { label: 'Privacy', href: '/privacy-policy' },
    { label: 'Terms', href: '/terms' },
  ],
} as const;

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50">
      {/* top divider */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-black/10 to-transparent" />

      {/* background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/2 h-[520px] w-[920px] -translate-x-1/2 rounded-full bg-purple-500/5 blur-3xl" />
        <div
          data-lenis-parallax
          style={{ ['--lenis-speed' as any]: 0.02 }}
          className="absolute -bottom-40 left-10 h-[420px] w-[420px] rounded-full bg-pink-500/5 blur-3xl"
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-20">
        {/* CTA card */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-120px' }}
          transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="relative overflow-hidden rounded-3xl border border-black/10 bg-white p-8 md:p-10 shadow-xl"
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(124,58,237,0.08),transparent_55%),radial-gradient(circle_at_80%_90%,rgba(236,72,153,0.06),transparent_55%)]" />
          <div className="relative grid grid-cols-1 gap-8 md:grid-cols-2 md:items-center">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold tracking-tight">
                <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                  Ready to optimize your ad creative?
                </span>
              </h3>
              <p className="mt-4 text-gray-600 leading-relaxed">
                See the platform in action and discover how our AI agents transform brand guidelines into high-performing creatives.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row md:justify-end">
              <Button
                size="lg"
                asChild
                className="h-auto rounded-full px-7 py-6 text-base bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 text-white"
              >
                <a href="https://calendly.com/kk-sharma-elarislabs/30min" target="_blank" rel="noopener noreferrer">
                  Book a Demo
                  <ArrowRight className="h-5 w-5" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-auto rounded-full px-7 py-6 text-base border-black/10 bg-transparent hover:bg-gray-50 shadow-sm"
              >
                Showcase
              </Button>
            </div>
          </div>
        </motion.div>

        {/* link columns */}
        <div className="mt-14 grid grid-cols-2 gap-10 md:grid-cols-5">
          <div className="col-span-2 md:col-span-1">
            <a href="#top" className="inline-flex items-center gap-2.5">
              <div className="relative">
                <div className="absolute inset-0 bg-purple-500 rounded-md blur-sm opacity-40" />
                <div className="relative w-8 h-8 rounded-md bg-gradient-to-br from-purple-600 to-purple-700" />
              </div>
              <span className="text-lg font-semibold text-gray-900">Elaris Labs</span>
            </a>
            <p className="mt-4 text-sm text-gray-600 leading-relaxed">
              AI agents that generate, test & refine ad creatives for measurable performance.
            </p>
          </div>

          {Object.entries(links).map(([group, items]) => (
            <div key={group} className="space-y-3">
              <div className="text-sm font-semibold tracking-wide text-gray-900">{group}</div>
              <ul className="space-y-2">
                {items.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Separator */}
        <div className="mt-14">
          <Separator />
        </div>

        {/* From Creative to Critical Infrastructure Section */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-10"
        >
          <div className="text-center max-w-3xl mx-auto">
            <Badge variant="secondary" className="mb-4">
              Our Vision
            </Badge>
            <h4 className="text-lg font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-3">
              From Creative to Critical Infrastructure
            </h4>
            <p className="text-sm text-gray-600 leading-relaxed">
              What began as AI agents optimizing ad creative is evolving into foundational infrastructure for decision-making across industries. From healthcare compliance to climate communication and robotics training, Elaris is building the next generation of intelligent systems that transform complex data into actionable insights.
            </p>
          </div>
        </motion.div>

        {/* bottom bar */}
        <div className="mt-10">
          <Separator />
        </div>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Elaris Labs. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}


