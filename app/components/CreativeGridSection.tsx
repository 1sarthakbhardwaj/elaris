'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

// Real creative data with images - natural aspect ratios preserved
const creatives = [
  { 
    id: 1, 
    src: '/images/1.png',
    width: 600,
    height: 700,
  },
  { 
    id: 2, 
    src: '/images/2.png',
    width: 600,
    height: 600,
  },
  { 
    id: 3, 
    src: '/images/3.png',
    width: 450,
    height: 742,
  },
  { 
    id: 4, 
    src: '/images/4.png',
    width: 632,
    height: 634,
  },
  { 
    id: 5, 
    src: '/images/5.png',
    width: 516,
    height: 506,
  },
  { 
    id: 6, 
    src: '/images/6.png',
    width: 800,
    height: 436,
  },
  { 
    id: 7, 
    src: '/images/7.png',
    width: 800,
    height: 800,
  },
  { 
    id: 8, 
    src: '/images/8.png',
    width: 1456,
    height: 816,
  },
  { 
    id: 9, 
    src: '/images/9.png',
    width: 1456,
    height: 816,
  },
  { 
    id: 10, 
    src: '/images/10.png',
    width: 1456,
    height: 816,
  },
];

function Frame({
  children,
  index,
}: {
  children: React.ReactNode;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{
        duration: 0.5,
        ease: [0.21, 0.47, 0.32, 0.98],
        delay: index * 0.05,
      }}
      className="group relative break-inside-avoid overflow-hidden rounded-lg border border-black/8 bg-white transition-all duration-300 hover:border-purple-300 hover:shadow-[0_20px_60px_-15px_rgba(124,58,237,0.25)] hover:-translate-y-1"
    >
      {/* Glow effect on hover */}
      <div className="pointer-events-none absolute -inset-1 rounded-lg opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-gradient-to-br from-purple-500/15 via-pink-500/10 to-purple-500/15 blur-xl" />

      {/* Content wrapper */}
      <div className="relative overflow-hidden rounded-lg">
        {children}

        {/* Overlay gradient on hover */}
        <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-gradient-to-t from-white/60 via-transparent to-transparent" />

        {/* Shine effect */}
        <motion.div
          className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.4] to-transparent"
          initial={{ x: '-100%', skewX: -12 }}
          whileHover={{ x: '200%' }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        />
      </div>

      {/* AI Badge */}
      <div className="absolute top-2.5 right-2.5 z-10 flex items-center gap-1.5 rounded-full bg-white/95 backdrop-blur-md px-2.5 py-1 border border-black/10 shadow-lg">
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
        <span className="text-[10px] font-semibold text-gray-900 tracking-wide">EL GENERATED</span>
      </div>
    </motion.div>
  );
}

export function CreativeGridSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="Showcase" ref={ref} className="relative py-32 pb-40 overflow-hidden bg-gradient-to-b from-white via-purple-50/20 to-white">
      {/* Background */}
      <div className="absolute inset-0">
      </div>

      <div className="relative z-10 container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-6"
        >
          <span className="text-sm font-semibold tracking-wider text-purple-600 uppercase">
            Creative Excellence
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6"
        >
          <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
            AI Generated
          </span>
          <br />
          <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 bg-clip-text text-transparent">
            Campaign Assets
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg text-gray-600 text-center mb-16 max-w-2xl mx-auto"
        >
          See what's possible when AI agents collaborate to create platform-optimized advertising content.
        </motion.p>

        {/* Creative Grid - Structured Masonry Layout */}
        <div className="mx-auto max-w-[1400px] px-4">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
            {creatives.map((creative, index) => (
              <Frame key={creative.id} index={index}>
                <Image
                  src={creative.src}
                  alt={`AI Generated Creative ${creative.id}`}
                  width={creative.width}
                  height={creative.height}
                  className="w-full h-auto select-none"
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
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-300 to-transparent"></div>
    </section>
  );
}
