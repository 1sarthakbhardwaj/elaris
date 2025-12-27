'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

// Real creative data with images - optimized for better grid layout
const creatives = [
  { 
    id: 1, 
    src: '/images/1.png',
    width: 600,
    height: 700,
    span: 'row-span-2',
  },
  { 
    id: 2, 
    src: '/images/2.png',
    width: 600,
    height: 600,
    span: 'row-span-2',
  },
  { 
    id: 3, 
    src: '/images/3.png',
    width: 600,
    height: 800,
    span: 'row-span-3',
  },
  { 
    id: 4, 
    src: '/images/4.png',
    width: 600,
    height: 600,
    span: 'row-span-2',
  },
  { 
    id: 5, 
    src: '/images/5.png',
    width: 600,
    height: 500,
    span: 'row-span-2',
  },
  { 
    id: 6, 
    src: '/images/6.png',
    width: 800,
    height: 450,
    span: 'row-span-2',
  },
  { 
    id: 7, 
    src: '/images/7.png',
    width: 600,
    height: 800,
    span: 'row-span-3',
  },
];

function Frame({
  children,
  index,
  span,
}: {
  children: React.ReactNode;
  index: number;
  span?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{
        duration: 0.5,
        ease: [0.21, 0.47, 0.32, 0.98],
        delay: index * 0.08,
      }}
      className={`group relative overflow-hidden rounded-xl border border-white/10 transition-all duration-300 hover:border-purple-500/30 hover:shadow-[0_20px_60px_-15px_rgba(168,85,247,0.4)] ${span || ''}`}
    >
      {/* Glow effect on hover */}
      <div className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-gradient-to-br from-purple-500/20 via-pink-500/20 to-purple-500/20 blur-xl" />

      {/* Content wrapper - full size */}
      <div className="relative h-full w-full overflow-hidden">
        {children}

        {/* Overlay gradient on hover */}
        <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-gradient-to-t from-purple-900/30 via-transparent to-transparent" />

        {/* Shine effect */}
        <motion.div
          className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.15] to-transparent"
          initial={{ x: '-100%', skewX: -12 }}
          whileHover={{ x: '200%' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        />
      </div>

      {/* AI Badge */}
      <div className="absolute top-3 right-3 z-10 flex items-center gap-1.5 rounded-full bg-black/60 backdrop-blur-md px-3 py-1.5 border border-white/10">
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
        <span className="text-[11px] font-medium text-white/90">AI Generated</span>
      </div>
    </motion.div>
  );
}

export function CreativeGridSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="Showcase" ref={ref} className="relative py-32 pb-40 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-purple-950/10 to-background"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-6"
        >
          <span className="text-sm font-semibold tracking-wider text-purple-400 uppercase">
            Creative Excellence
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6"
        >
          <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            AI Generated
          </span>
          <br />
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
            Campaign Assets
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg text-gray-400 text-center mb-16 max-w-2xl mx-auto"
        >
          See what's possible when AI agents collaborate to create platform-optimized advertising content.
        </motion.p>

        {/* Creative Grid - Bento-style layout */}
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 auto-rows-[240px]">
            {creatives.map((creative, index) => (
              <Frame key={creative.id} index={index} span={creative.span}>
                <Image
                  src={creative.src}
                  alt={`AI Generated Creative ${creative.id}`}
                  width={creative.width}
                  height={creative.height}
                  className="h-full w-full object-cover select-none transition-transform duration-500 hover:scale-105"
                  priority={creative.id <= 3}
                />
              </Frame>
            ))}
          </div>
        </div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-center mt-14"
        >

        </motion.div>
      </div>

      {/* Footer decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
    </section>
  );
}
