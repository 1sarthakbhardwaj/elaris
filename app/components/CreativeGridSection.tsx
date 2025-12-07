'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

// Mock creative data - replace with real images/content
const creatives = [
  { id: 1, type: 'video', platform: 'TikTok', gradient: 'from-pink-500 to-rose-500' },
  { id: 2, type: 'image', platform: 'Meta', gradient: 'from-blue-500 to-purple-500' },
  { id: 3, type: 'video', platform: 'YouTube', gradient: 'from-red-500 to-orange-500' },
  { id: 4, type: 'image', platform: 'Google', gradient: 'from-green-500 to-emerald-500' },
  { id: 5, type: 'video', platform: 'Instagram', gradient: 'from-purple-500 to-pink-500' },
  { id: 6, type: 'image', platform: 'TikTok', gradient: 'from-cyan-500 to-blue-500' },
  { id: 7, type: 'video', platform: 'Meta', gradient: 'from-violet-500 to-purple-500' },
  { id: 8, type: 'image', platform: 'YouTube', gradient: 'from-amber-500 to-yellow-500' },
];

export function CreativeGridSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="relative py-32 pb-40 overflow-hidden">
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

        {/* Creative Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {creatives.map((creative, index) => (
            <motion.div
              key={creative.id}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ 
                duration: 0.5, 
                delay: 0.3 + index * 0.05,
                type: 'spring',
                stiffness: 100
              }}
              whileHover={{ 
                scale: 1.05, 
                zIndex: 10,
                transition: { duration: 0.2 }
              }}
              className="group relative aspect-[3/4] rounded-2xl overflow-hidden cursor-pointer"
            >
              {/* Placeholder gradient background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${creative.gradient} opacity-80 group-hover:opacity-100 transition-opacity`}></div>
              
              {/* Grid pattern overlay */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.05)_1px,transparent_1px)] bg-[size:20px_20px] opacity-30"></div>

              {/* Content overlay */}
              <div className="absolute inset-0 p-6 flex flex-col justify-between">
                {/* Platform badge */}
                <div className="flex justify-between items-start">
                  <span className="px-3 py-1 rounded-full bg-black/30 backdrop-blur-sm text-xs font-medium text-white border border-white/20">
                    {creative.platform}
                  </span>
                  <div className={`w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/20`}>
                    {creative.type === 'video' ? (
                      <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    ) : (
                      <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                        <circle cx="8.5" cy="8.5" r="1.5"/>
                        <polyline points="21 15 16 10 5 21"/>
                      </svg>
                    )}
                  </div>
                </div>

                {/* Bottom info */}
                <div className="space-y-2">
                  <div className="h-3 bg-white/20 rounded-full w-3/4 backdrop-blur-sm"></div>
                  <div className="h-3 bg-white/20 rounded-full w-1/2 backdrop-blur-sm"></div>
                </div>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-center gap-2 text-white text-sm">
                    <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                    <span className="font-medium">AI Generated</span>
                  </div>
                </div>
              </div>

              {/* Shine effect on hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.6 }}
              />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA or info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 text-sm">
            All creatives generated and optimized by Elaris AI agents
          </p>
          <div className="flex items-center justify-center gap-6 mt-6 flex-wrap">
            {['Meta', 'TikTok', 'Google', 'YouTube', 'Instagram'].map((platform, i) => (
              <motion.div
                key={platform}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 1 + i * 0.1 }}
                className="px-4 py-2 rounded-full glass border border-white/10 text-sm text-gray-300"
              >
                {platform}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Footer decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
    </section>
  );
}
