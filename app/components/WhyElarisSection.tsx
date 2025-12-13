'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

const features = [
  {
    number: '01',
    title: 'Data Guided Decisions',
    description: 'Every visual, angle, and copy line is ranked on predicted performance across channels before you spend.',
    color: 'from-purple-500 to-pink-500'
  },
  {
    number: '02',
    title: 'Unified Brand Voice',
    description: 'Persistent brand memory keeps tone, visuals, and offers consistent across all platforms without extra manual checks.',
    color: 'from-pink-500 to-rose-500'
  },
  {
    number: '03',
    title: 'Augmented Creative Team',
    description: 'Combine strategy, copy, and design agents with your team in one workspace for faster reviews and stronger concepts.',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    number: '04',
    title: 'Self Improving Campaigns',
    description: 'Feedback loops from Meta, TikTok, Google, and more train the system so each new wave of creatives starts from your best winners.',
    color: 'from-emerald-500 to-teal-500'
  }
];

export function WhyElarisSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="why-elaris" ref={ref} className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-blue-950/10 to-background"></div>
        <div
          data-lenis-parallax
          style={{ ['--lenis-speed' as any]: 0.025 }}
          className="absolute top-1/2 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl"
        ></div>
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          {/* Left Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            {/* Section Label */}
            <div className="mb-6">
              <span className="text-sm font-semibold tracking-wider text-blue-400 uppercase">
                Why Elaris AI
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Built for
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Predictable Results.
              </span>
            </h2>

            {/* Body Copy */}
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              Stop guessing what will convert. Elaris AI connects creative, data, and media so every campaign is built to drive measurable growth.
            </p>

            {/* CTA Button */}
            <Button
              size="lg"
              variant="outline"
              className="group text-base px-6 py-6 h-auto rounded-full border-white/20 hover:border-blue-400/50 hover:bg-blue-500/10"
            >
              Generate your ads now
              <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Button>
          </motion.div>

          {/* Right Side - Feature Bullets */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                whileHover={{ x: 10 }}
                className="group relative"
              >
                <div className="flex gap-6 p-6 rounded-2xl glass border border-white/10 hover:border-white/20 transition-all backdrop-blur-sm hover:bg-white/5">
                  {/* Number with gradient */}
                  <div className="flex-shrink-0">
                    <div className={`text-4xl font-bold bg-gradient-to-r ${feature.color} bg-clip-text text-transparent`}>
                      {feature.number}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-white group-hover:to-gray-300 transition-all">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                      {feature.description}
                    </p>
                  </div>
                </div>

                {/* Hover gradient effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-5 blur-xl rounded-2xl transition-opacity duration-300 -z-10`}></div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
