'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

// Real creative data with images
const creatives = [
  { 
    id: 1, 
    src: '/images/1.png',
    width: 578,
    height: 714,
  },
  { 
    id: 2, 
    src: '/images/2.png',
    width: 578,
    height: 584,
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
    width: 280,
    height: 488,
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
      initial={{ opacity: 0, y: 18, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-120px' }}
      transition={{
        duration: 0.6,
        ease: [0.21, 0.47, 0.32, 0.98],
        delay: index * 0.06,
      }}
      whileHover={{ y: -6 }}
      className="group relative mb-4 break-inside-avoid overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-2 shadow-[0_0_0_1px_rgba(255,255,255,0.03)] hover:border-white/20 hover:bg-white/[0.06] hover:shadow-[0_18px_60px_-30px_rgba(168,85,247,0.55)] transition-colors"
    >
      {/* outer glow */}
      <div className="pointer-events-none absolute -inset-12 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100 bg-[radial-gradient(circle_at_30%_20%,rgba(168,85,247,0.25),transparent_55%),radial-gradient(circle_at_70%_80%,rgba(236,72,153,0.18),transparent_55%)]" />

      {/* inner frame */}
      <div className="relative overflow-hidden rounded-xl bg-black/30">
        {children}

        {/* subtle gradient for depth */}
        <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-gradient-to-t from-black/45 via-black/0 to-black/0" />

        {/* shine */}
        <motion.div
          className="pointer-events-none absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-white/10 to-transparent"
          initial={{ x: '-180%' }}
          whileHover={{ x: '180%' }}
          transition={{ duration: 0.9, ease: 'easeInOut' }}
        />
      </div>

      {/* tiny caption (keeps it premium, not busy) */}
      <div className="mt-2 flex items-center gap-2 px-1 pb-1">
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400/90" />
        <span className="text-[12px] text-white/70">AI Generated</span>
      </div>
    </motion.div>
  );
}

export function CreativeGridSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="examples" ref={ref} className="relative py-32 pb-40 overflow-hidden">
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

        {/* Creative Grid - Masonry columns (respects real image sizes) */}
        <div className="mx-auto max-w-7xl">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 [column-fill:_balance]">
            {creatives.map((creative, index) => (
              <Frame key={creative.id} index={index}>
                <motion.div
                  className="relative"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                >
                  <Image
                    src={creative.src}
                    alt={`Creative ${creative.id}`}
                    width={creative.width}
                    height={creative.height}
                    className="h-auto w-full select-none"
                    priority={creative.id <= 2}
                  />
                </motion.div>
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
          <p className="text-gray-400 text-sm">
            A living collage of AI-generated campaign creatives.
          </p>
        </motion.div>
      </div>

      {/* Footer decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
    </section>
  );
}
