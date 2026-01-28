'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Brain, Database, Workflow, TrendingUp } from 'lucide-react';

const agents = [
  {
    icon: Brain,
    title: 'Specialized AI Agents',
    description: 'Strategy, copy, and design agents collaborate on each brief, turning a single input into a full set of ready to test creatives.',
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: Database,
    title: 'Shared Brand Memory',
    description: 'A persistent brand brain stores your tone, visual language, and past winners so every new idea starts from what already works.',
    color: 'from-pink-500 to-rose-500'
  },
  {
    icon: Workflow,
    title: 'Agentic Workflows',
    description: 'Orchestrated flows let agents generate, critique, and rank variants, surfacing only the strongest combinations for your review.',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: TrendingUp,
    title: 'Strategic Insight',
    description: 'Performance signals from Meta, TikTok, Google, and others feed back into the system, guiding the next round of creatives and spend.',
    color: 'from-emerald-500 to-teal-500'
  }
];

export function AgentSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="features" ref={ref} className="relative py-32 overflow-hidden bg-gradient-to-b from-white via-purple-50/30 to-white">
      {/* Background decoration */}
      <div
        data-lenis-parallax
        style={{ ['--lenis-speed' as any]: 0.03 }}
        className="absolute -top-24 right-10 w-80 h-80 bg-purple-500/8 rounded-full blur-3xl"
      />
      
      <div className="relative z-10 container mx-auto px-6">
        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-6"
        >
          <span className="text-sm font-semibold tracking-wider text-purple-600 uppercase">
            Your AI Workforce
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-20"
        >
          <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
            Specialized agents built for
          </span>
          <br />
          <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            modern advertising.
          </span>
        </motion.h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {agents.map((agent, index) => {
            const Icon = agent.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl blur-xl -z-10" 
                     style={{ backgroundImage: `linear-gradient(to right, var(--tw-gradient-stops))` }}></div>
                
                <div className="relative p-8 rounded-2xl glass border border-black/8 hover:border-purple-200 transition-all duration-300 h-full backdrop-blur-sm bg-white shadow-sm hover:shadow-xl">
                  {/* Icon with gradient background */}
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${agent.color} mb-6 shadow-lg`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-gray-900 group-hover:to-gray-700 transition-all">
                    {agent.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                    {agent.description}
                  </p>

                  {/* Decorative corner accent */}
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${agent.color} opacity-0 group-hover:opacity-5 blur-2xl transition-opacity duration-300 rounded-full -z-10`}></div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Connecting lines animation (optional decorative element) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl pointer-events-none">
          <svg className="w-full h-full opacity-20" viewBox="0 0 800 600">
            <motion.path
              d="M 200,150 Q 400,100 600,150"
              stroke="url(#gradient1)"
              strokeWidth="2"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={isInView ? { pathLength: 1 } : {}}
              transition={{ duration: 2, delay: 0.5 }}
            />
            <motion.path
              d="M 200,450 Q 400,500 600,450"
              stroke="url(#gradient2)"
              strokeWidth="2"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={isInView ? { pathLength: 1 } : {}}
              transition={{ duration: 2, delay: 0.7 }}
            />
            <defs>
              <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#a855f7" />
                <stop offset="100%" stopColor="#ec4899" />
              </linearGradient>
              <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#06b6d4" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </section>
  );
}
