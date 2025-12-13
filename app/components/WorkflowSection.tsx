'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Users, Building2, BarChart3, FileText, ImageIcon, Grid3x3 } from 'lucide-react';

const inputs = [
  { icon: Users, label: 'Audience Signals', color: 'from-purple-500 to-pink-500' },
  { icon: Building2, label: 'Brand Inputs', color: 'from-pink-500 to-rose-500' },
  { icon: BarChart3, label: 'Performance History', color: 'from-blue-500 to-cyan-500' },
];

const outputs = [
  { icon: FileText, label: 'Scored Ad Copy', color: 'from-emerald-500 to-teal-500' },
  { icon: ImageIcon, label: 'On Brand Visuals', color: 'from-amber-500 to-orange-500' },
  { icon: Grid3x3, label: 'Channel Ready Variants', color: 'from-violet-500 to-purple-500' },
];

export function WorkflowSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="workflow" ref={ref} className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-pink-950/10 to-background"></div>
        <div
          data-lenis-parallax
          style={{ ['--lenis-speed' as any]: 0.02 }}
          className="absolute top-20 left-10 w-72 h-72 bg-pink-600/10 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 container mx-auto px-6">
        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-6"
        >
          <span className="text-sm font-semibold tracking-wider text-pink-400 uppercase">
            How It Works
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6"
        >
          <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            From Signals to
          </span>
          <br />
          <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
            Live Campaigns
          </span>
        </motion.h2>

        {/* Sub Heading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-400 text-center mb-20 max-w-3xl mx-auto"
        >
          See how Elaris AI turns your brand, audience, and performance data into launch ready ads.
        </motion.p>

        {/* Workflow Diagram */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            {/* Left Side - Inputs */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-4"
            >
              <h3 className="text-sm font-semibold tracking-wider text-gray-500 uppercase mb-6">Inputs</h3>
              {inputs.map((input, index) => {
                const Icon = input.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                    whileHover={{ scale: 1.05, x: 10 }}
                    className="group cursor-pointer"
                  >
                    <div className="flex items-center gap-3 px-4 py-3 rounded-xl glass border border-white/10 hover:border-white/20 transition-all backdrop-blur-sm">
                      <div className={`p-2 rounded-lg bg-gradient-to-r ${input.color}`}>
                        <Icon className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-white font-medium">{input.label}</span>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Center - Processing Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex items-center justify-center"
            >
              <div className="relative w-64 h-64">
                {/* Rotating rings */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                  className="absolute inset-0 border-2 border-purple-500/30 rounded-full"
                  style={{ borderTopColor: '#a855f7' }}
                ></motion.div>
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
                  className="absolute inset-4 border-2 border-pink-500/30 rounded-full"
                  style={{ borderRightColor: '#ec4899' }}
                ></motion.div>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
                  className="absolute inset-8 border-2 border-blue-500/30 rounded-full"
                  style={{ borderBottomColor: '#3b82f6' }}
                ></motion.div>

                {/* Center core */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    <motion.div
                      animate={{ 
                        scale: [1, 1.2, 1],
                        opacity: [0.5, 0.8, 0.5]
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-2xl"
                    ></motion.div>
                    <div className="relative w-20 h-20 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 flex items-center justify-center">
                      <svg className="w-10 h-10 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <motion.path
                          d="M12 2L2 7L12 12L22 7L12 2Z"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                        <motion.path
                          d="M2 17L12 22L22 17"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 2, delay: 0.5, repeat: Infinity }}
                        />
                        <motion.path
                          d="M2 12L12 17L22 12"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 2, delay: 1, repeat: Infinity }}
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Pulsing particles */}
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-white rounded-full"
                    style={{
                      top: '50%',
                      left: '50%',
                      marginTop: '-4px',
                      marginLeft: '-4px',
                    }}
                    animate={{
                      x: [0, Math.cos(i * Math.PI / 4) * 100],
                      y: [0, Math.sin(i * Math.PI / 4) * 100],
                      opacity: [1, 0],
                      scale: [1, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.25,
                      ease: 'easeOut',
                    }}
                  />
                ))}
              </div>
            </motion.div>

            {/* Right Side - Outputs */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-4"
            >
              <h3 className="text-sm font-semibold tracking-wider text-gray-500 uppercase mb-6 text-right">Outputs</h3>
              {outputs.map((output, index) => {
                const Icon = output.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                    whileHover={{ scale: 1.05, x: -10 }}
                    className="group cursor-pointer"
                  >
                    <div className="flex items-center gap-3 px-4 py-3 rounded-xl glass border border-white/10 hover:border-white/20 transition-all backdrop-blur-sm">
                      <div className={`p-2 rounded-lg bg-gradient-to-r ${output.color}`}>
                        <Icon className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-white font-medium">{output.label}</span>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
