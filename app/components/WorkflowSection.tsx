'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Palette, FileText, Image, Brain, Lightbulb, Layout, Wand2, Sparkles, Download, Database } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const inputs = [
  { icon: Palette, label: 'Brand Identity', description: 'Logo, colors, fonts, guidelines', color: 'from-purple-500 to-pink-500' },
  { icon: FileText, label: 'Campaign Brief', description: 'Platform, format, objectives, audience', color: 'from-pink-500 to-rose-500' },
  { icon: Image, label: 'Assets & Moodboards', description: 'Product shots, references, style notes', color: 'from-blue-500 to-cyan-500' },
];

const agents = [
  { icon: Brain, label: 'Brand Strategist', description: 'Analyzes your brand and creates structured templates', color: 'from-purple-600 to-purple-500', delay: 0 },
  { icon: Lightbulb, label: 'Creative Director', description: 'Generates diverse creative concepts and ideas', color: 'from-pink-600 to-pink-500', delay: 0.15 },
  { icon: Layout, label: 'Layout Generator', description: 'Creates multiple layout variations', color: 'from-blue-600 to-blue-500', delay: 0.3 },
  { icon: Wand2, label: 'Production Agent', description: 'Assembles final campaign assets', color: 'from-emerald-600 to-emerald-500', delay: 0.45 },
];

const outputs = [
  { icon: Sparkles, label: 'Creative Concepts', description: 'Production-ready campaign ideas', color: 'from-emerald-500 to-teal-500' },
  { icon: Image, label: 'AI-Generated Assets', description: 'High-quality campaign visuals', color: 'from-amber-500 to-orange-500' },
  { icon: Download, label: 'Platform-Ready Content', description: 'Deploy across all channels', color: 'from-violet-500 to-purple-500' },
];

export function WorkflowSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="workflow" ref={ref} className="relative py-32 overflow-hidden bg-gradient-to-b from-white via-pink-50/20 to-white">
      {/* Background */}
      <div className="absolute inset-0">
        <div
          data-lenis-parallax
          style={{ ['--lenis-speed' as any]: 0.02 }}
          className="absolute top-20 left-10 w-72 h-72 bg-pink-500/8 rounded-full blur-3xl"
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
          <span className="text-sm font-semibold tracking-wider text-pink-600 uppercase">
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
          <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
            AI Agents with
          </span>
          <br />
          <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
            Persistent Brand Memory
          </span>
        </motion.h2>

        {/* Sub Heading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-600 text-center mb-20 max-w-3xl mx-auto"
        >
          Specialized AI agents work together with shared memory to maintain your brand consistency across every campaign.
        </motion.p>

        {/* Workflow Diagram */}
        <div className="max-w-7xl mx-auto">
          {/* Inputs Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-12"
          >
            <h3 className="text-sm font-semibold tracking-wider text-gray-500 uppercase mb-6 text-center">Inputs</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {inputs.map((input, index) => {
                const Icon = input.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                    whileHover={{ y: -5 }}
                  >
                    <Card className="h-full border-black/8 hover:border-purple-200 transition-all hover:shadow-lg">
                      <CardContent className="p-5">
                        <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${input.color} shadow-md mb-4`}>
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                        <h4 className="text-base font-bold text-gray-900 mb-2">{input.label}</h4>
                        <p className="text-sm text-gray-600">{input.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Arrow Down */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="flex justify-center mb-12"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className="text-purple-400"
            >
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </motion.div>
          </motion.div>

          {/* AI Agents with Shared Memory */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mb-12"
          >
            <div className="text-center mb-8">
              <h3 className="text-sm font-semibold tracking-wider text-gray-500 uppercase mb-2">AI Agent Collaboration</h3>
              <Badge variant="secondary" className="mt-2">
                <Database className="w-3 h-3 mr-1" />
                Shared Brand Memory
              </Badge>
            </div>
            
            {/* Agents Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {agents.map((agent, index) => {
                const Icon = agent.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.9 + agent.delay }}
                    whileHover={{ scale: 1.05, y: -5 }}
                  >
                    <Card className="h-full border-2 border-purple-100 hover:border-purple-300 transition-all hover:shadow-xl">
                      <CardContent className="p-5">
                        <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${agent.color} shadow-lg mb-4`}>
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                        <h4 className="text-sm font-bold text-gray-900 mb-2">{agent.label}</h4>
                        <p className="text-xs text-gray-600 leading-relaxed">{agent.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>

            {/* Brand Memory Indicator */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 1.4 }}
              className="max-w-2xl mx-auto"
            >
              <Card className="border-2 border-purple-200 bg-gradient-to-br from-purple-50 to-pink-50">
                <CardContent className="p-6 text-center">
                  <div className="flex items-center justify-center gap-2 mb-3">
                    <Database className="w-5 h-5 text-purple-600" />
                    <h4 className="text-base font-bold text-gray-900">Persistent Brand Memory</h4>
                  </div>
                  <p className="text-sm text-gray-600">
                    All agents access a shared memory layer that stores your brand guidelines, tone, visual language, and past winners—ensuring every creative stays on-brand.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          {/* Arrow Down */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 1.5 }}
            className="flex justify-center mb-12"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              className="text-purple-400"
            >
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </motion.div>
          </motion.div>

          {/* Outputs Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 1.6 }}
          >
            <h3 className="text-sm font-semibold tracking-wider text-gray-500 uppercase mb-6 text-center">Outputs</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {outputs.map((output, index) => {
                const Icon = output.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 1.7 + index * 0.1 }}
                    whileHover={{ y: -5 }}
                  >
                    <Card className="h-full border-black/8 hover:border-emerald-200 transition-all hover:shadow-lg">
                      <CardContent className="p-5">
                        <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${output.color} shadow-md mb-4`}>
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                        <h4 className="text-base font-bold text-gray-900 mb-2">{output.label}</h4>
                        <p className="text-sm text-gray-600">{output.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
