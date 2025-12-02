"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useInView, useSpring } from 'framer-motion';
import { ArrowRight, Brain, Palette, Terminal, Sparkles, Zap, Layers, Target, Cpu, Share2, Database, Wand2, Image as ImageIcon, MessageSquare, GitBranch, Lightbulb, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Generative Creative Visual Component
function CreativeGenVisual() {
  return (
    <div className="relative w-[300px] h-[300px] md:w-[500px] md:h-[500px] flex items-center justify-center">
      {/* Memory Nodes (Context) */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={`node-${i}`}
          className="absolute w-16 h-16 rounded-full border border-purple-500/30 bg-black/50 backdrop-blur-sm flex items-center justify-center"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: 1, 
            scale: 1,
            x: parseFloat((Math.cos(i * (Math.PI * 2 / 3)) * 120).toFixed(4)),
            y: parseFloat((Math.sin(i * (Math.PI * 2 / 3)) * 120).toFixed(4)),
          }}
          transition={{ delay: i * 0.2, duration: 0.5 }}
        >
          {i === 0 && <Brain className="w-6 h-6 text-purple-400" />}
          {i === 1 && <Database className="w-6 h-6 text-blue-400" />}
          {i === 2 && <Target className="w-6 h-6 text-pink-400" />}
        </motion.div>
      ))}

      {/* Central Core (Generation) */}
      <motion.div 
        className="relative z-10 w-32 h-32 bg-black border border-white/10 rounded-full flex items-center justify-center backdrop-blur-xl overflow-hidden shadow-[0_0_50px_rgba(168,85,247,0.3)]"
        animate={{ 
          boxShadow: ["0 0 20px rgba(168,85,247,0.2)", "0 0 50px rgba(168,85,247,0.5)", "0 0 20px rgba(168,85,247,0.2)"] 
        }}
        transition={{ duration: 2, repeat: Infinity }}
      >
         <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20" />
         <Sparkles className="w-12 h-12 text-white animate-pulse" />
      </motion.div>

      {/* Connecting Lines (Context Flow) */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        {[...Array(3)].map((_, i) => (
          <motion.line
            key={`line-${i}`}
            x1="50%"
            y1="50%"
            x2={(50 + parseFloat(((Math.cos(i * (Math.PI * 2 / 3)) * 24).toFixed(4)))) + "%"}
            y2={(50 + parseFloat(((Math.sin(i * (Math.PI * 2 / 3)) * 24).toFixed(4)))) + "%"}
            stroke="url(#line-gradient)"
            strokeWidth="2"
            strokeDasharray="4 4"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, delay: 0.5 + (i * 0.2) }}
          />
        ))}
        <defs>
          <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#a855f7" />
            <stop offset="100%" stopColor="#3b82f6" />
          </linearGradient>
        </defs>
      </svg>
      
      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={`p-${i}`}
            className="absolute w-1 h-1 bg-purple-400 rounded-full"
            animate={{
              x: [0, ((i % 2 === 0 ? 1 : -1) * (50 + (i * 20) % 250))], // Deterministic random-like position
              y: [0, ((i % 3 === 0 ? 1 : -1) * (50 + (i * 15) % 250))],
              opacity: [1, 0],
              scale: [1, 0]
            }}
            transition={{
              duration: 2 + (i % 3), // Deterministic duration
              repeat: Infinity,
              ease: "easeOut"
            }}
            style={{ left: '50%', top: '50%' }}
          />
        ))}
      </div>
    </div>
  );
}

// Rationalization Engine Visualization
function RationalizationEngine() {
  return (
    <div className="relative h-[400px] w-full max-w-2xl mx-auto flex items-center justify-between">
      {/* Data Input */}
      <div className="flex flex-col gap-4">
        {['Audience Signals', 'Brand Guidelines', 'Performance Data'].map((label, i) => (
          <motion.div
            key={label}
            className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-xs text-gray-400"
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: i * 0.1 }}
          >
            {label}
          </motion.div>
        ))}
      </div>

      {/* Processing Rays */}
      <div className="flex-grow mx-8 relative h-full overflow-hidden">
        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute top-1/2 left-0 w-20 h-[2px] bg-purple-400 blur-sm"
            animate={{ 
              x: [-100, 400],
              opacity: [0, 1, 0]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              delay: i * 0.6,
              ease: "linear"
            }}
          />
        ))}
      </div>

      {/* Logic Core */}
      <div className="relative w-32 h-32">
        <motion.div 
          className="absolute inset-0 rounded-full border border-purple-500/30"
          animate={{ rotate: 360 }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        />
        <div className="absolute inset-2 rounded-full border border-blue-500/30 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <GitBranch className="w-8 h-8 text-white" />
        </div>
      </div>

      {/* Output Rays */}
      <div className="flex-grow mx-8 relative h-full overflow-hidden">
        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute top-1/2 left-0 w-20 h-[2px] bg-blue-400 blur-sm"
            animate={{ 
              x: [-100, 400],
              opacity: [0, 1, 0]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              delay: i * 0.6 + 0.3,
              ease: "linear"
            }}
          />
        ))}
      </div>

      {/* Creative Output */}
      <div className="flex flex-col gap-4">
        {['Tailored Copy', 'On-Brand Visuals', 'Strategic Angle'].map((label, i) => (
          <motion.div
            key={label}
            className="px-4 py-2 rounded-lg bg-purple-500/10 border border-purple-500/30 text-xs text-purple-200"
            initial={{ x: 20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: i * 0.1 + 0.5 }}
          >
            {label}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// Section Label Component
function SectionLabel({ children }: { children: string }) {
  return (
    <div className="flex items-center gap-2 mb-4">
      <div className="flex gap-1">
        <div className="w-2 h-2 rounded-full bg-purple-500" />
        <div className="w-2 h-2 rounded-full bg-purple-500/50" />
      </div>
      <span className="text-sm text-gray-400 tracking-wider uppercase">{children}</span>
    </div>
  );
}

// Service Card Component (Updated)
function ServiceCard({ icon: Icon, title, description, delay }: { icon: any; title: string; description: string; delay: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="group relative h-full"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
      <div className="relative h-full bg-[#0a0a0a] border border-white/5 rounded-2xl p-8 overflow-hidden group-hover:border-purple-500/30 transition-all duration-500 group-hover:transform group-hover:-translate-y-1">
        <div className="mb-6 w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-purple-500/20 transition-colors duration-500">
          <Icon className="w-6 h-6 text-gray-400 group-hover:text-purple-400 transition-colors duration-500" />
        </div>
        
        <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
        
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
      </div>
    </motion.div>
  );
}

// Dynamic Scroll Active Tech Item (Unchanged)
function TechItem({ number, name, description }: { number: string; name: string; description: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-45% 0px -45% 0px" });

  return (
    <motion.div 
      ref={ref}
      className={`border-b border-white/5 py-8 cursor-pointer transition-all duration-500 ${isInView ? 'border-purple-500/50' : ''}`}
      animate={{ 
        x: isInView ? 20 : 0,
        opacity: isInView ? 1 : 0.5
      }}
    >
      <div className="flex items-start gap-6">
        <span className={`text-sm font-mono transition-colors duration-500 ${isInView ? 'text-purple-400' : 'text-gray-700'}`}>{number}</span>
        <div>
          <h4 className={`text-xl font-medium mb-2 transition-colors duration-500 ${isInView ? 'text-white' : 'text-gray-600'}`}>{name}</h4>
          <p className={`text-base transition-colors duration-500 ${isInView ? 'text-gray-300' : 'text-gray-700'}`}>{description}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default function LandingPage() {
  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden selection:bg-purple-500/30 font-sans">
      {/* Background Ambient Glows */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-purple-900/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[800px] h-[800px] bg-blue-900/10 rounded-full blur-[120px]" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-xl tracking-tight">Elaris<sup className="text-xs">AI</sup></span>
          </div>
          <a href="http://localhost:3000">
            <Button className="bg-white text-black hover:bg-gray-200 rounded-full px-6">
              Launch App <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <motion.section 
        style={{ opacity: heroOpacity, scale: heroScale }}
        className="relative z-10 min-h-screen flex items-center pt-20"
      >
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-8">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-xs font-medium text-gray-300 uppercase tracking-wide">Ad Generation Platform</span>
                </div>
                
                <h1 className="text-5xl md:text-7xl font-medium tracking-tight leading-[1.1] mb-6">
                  Create Ads That <br />
                  <span className="text-gray-500">Actually Convert.</span>
                </h1>
                
                <p className="text-lg text-gray-400 max-w-md leading-relaxed">
                  Turn your ideas into high-performing ad campaigns instantly. From strategy to visuals, get everything you need to launch.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="flex items-center gap-4"
              >
                <a href="http://localhost:3000">
                  <Button className="h-14 px-8 rounded-full bg-white text-black hover:bg-gray-200 text-base">
                    Start Creating Ads <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </a>
              </motion.div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="flex justify-center lg:justify-end"
            >
              <CreativeGenVisual />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Dynamic Workforce Section (Renamed Services) */}
      <section className="relative z-10 py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <SectionLabel>Your AI Workforce</SectionLabel>
            <h2 className="text-4xl md:text-5xl font-medium mb-6 max-w-2xl">
              Specialized agents working in perfect harmony.
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ServiceCard 
              icon={Share2}
              title="Specialized AI Agents"
              description="A dedicated team of expert agents for Strategy, Copywriting, and Design working together on your campaigns."
              delay={0}
            />
            <ServiceCard 
              icon={Database}
              title="Shared Agent Memory"
              description="A unified context layer ensures every agent has instant access to your brand guidelines and past performance."
              delay={0.1}
            />
            <ServiceCard 
              icon={GitBranch}
              title="Agentic Workflows"
              description="Advanced self-correcting workflows where agents critique and refine each other's work before you see it."
              delay={0.2}
            />
            <ServiceCard 
              icon={Lightbulb}
              title="Strategic Insight"
              description="Agents don't just execute; they rationalize every decision based on real-time market data."
              delay={0.3}
            />
          </div>
        </div>
      </section>

      {/* Rationalization Engine Section (New) */}
      <section className="relative z-10 py-32 px-6 bg-white/[0.02] border-y border-white/5">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <SectionLabel>How It Works</SectionLabel>
          <h2 className="text-3xl md:text-4xl font-medium mb-4">From Idea to Launch</h2>
          <p className="text-gray-400">See how we turn your inputs into ready-to-launch ads.</p>
        </div>
        <RationalizationEngine />
      </section>

      {/* Tech Stack Section */}
      <section className="relative z-10 py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="sticky top-32 h-fit">
              <SectionLabel>Why Choose Us</SectionLabel>
              <h2 className="text-4xl md:text-6xl font-bold mb-6">Built for <br/>Results.</h2>
              <p className="text-gray-400 text-lg mb-8">
                Stop guessing what works. Our platform helps you build campaigns that drive real business growth.
              </p>
              <Button variant="outline" className="rounded-full border-white/10 hover:bg-white/5 text-white">
                View Case Studies <ArrowUpRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            
            <div>
              <div className="space-y-0">
                <TechItem 
                  number="01" 
                  name="Data-Backed Decisions" 
                  description="We explain 'WHY' a specific angle or visual was chosen based on performance data."
                />
                <TechItem 
                  number="02" 
                  name="Unified Brand Voice" 
                  description="Keep your messaging consistent across all channels without constant manual oversight."
                />
                <TechItem 
                  number="03" 
                  name="Expert Creative Team" 
                  description="Access the capabilities of a full creative agency - strategist, copywriter, and designer - in one platform."
                />
                <TechItem 
                  number="04" 
                  name="Self-Optimizing Campaigns" 
                  description="The system learns from every campaign, making your future ads even more effective."
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/5 py-12 px-6 bg-black">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-purple-500" />
            <span className="font-bold text-lg">Elaris AI</span>
          </div>
          <div className="flex gap-8 text-sm text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Twitter</a>
          </div>
          <p className="text-gray-600 text-xs">
            © {new Date().getFullYear()} Elaris AI. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
