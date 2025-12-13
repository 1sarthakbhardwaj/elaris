'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function HeroSection() {
  return (
    <section id="top" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background gradient blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div data-lenis-parallax style={{ ['--lenis-speed' as any]: -0.06 }} className="absolute top-1/4 -left-1/4">
          <div className="w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-blob"></div>
        </div>
        <div data-lenis-parallax style={{ ['--lenis-speed' as any]: -0.04 }} className="absolute top-1/3 -right-1/4">
          <div className="w-96 h-96 bg-pink-600/20 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
        </div>
        <div data-lenis-parallax style={{ ['--lenis-speed' as any]: -0.03 }} className="absolute -bottom-1/4 left-1/2">
          <div className="w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
        </div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)]"></div>

      {/* Floating decorative elements */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-[15%] w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-white/10"
      />
      <motion.div
        animate={{
          y: [0, 15, 0],
          rotate: [0, -5, 0]
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-1/3 right-[18%] w-12 h-12 rounded-full bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-sm border border-white/10"
      />
      <motion.div
        animate={{
          y: [0, -15, 0],
          x: [0, 10, 0]
        }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-1/3 left-[20%] w-8 h-8 rounded-lg bg-gradient-to-br from-pink-500/30 to-rose-500/30 backdrop-blur-sm border border-white/10"
      />
      <motion.div
        animate={{
          y: [0, 20, 0],
          x: [0, -8, 0]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute bottom-1/4 right-[15%] w-20 h-20 rounded-3xl bg-gradient-to-br from-emerald-500/15 to-teal-500/15 backdrop-blur-sm border border-white/10"
      />

      {/* Orbiting dots */}
      <div
        data-lenis-parallax
        style={{ ['--lenis-speed' as any]: 0.02 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none"
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0"
        >
          <div className="absolute top-0 left-1/2 w-2 h-2 bg-purple-400/50 rounded-full" />
          <div className="absolute bottom-0 left-1/2 w-1.5 h-1.5 bg-pink-400/50 rounded-full" />
        </motion.div>
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute inset-8"
        >
          <div className="absolute top-0 right-0 w-1.5 h-1.5 bg-blue-400/50 rounded-full" />
        </motion.div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-24 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 mb-10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/10 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-sm font-medium bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Agentic Creative Platform
            </span>
          </div>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-6xl lg:text-8xl font-bold mb-8 tracking-tight leading-[1.1]"
        >
          <span className="bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent">
            AI Creative Team
          </span>
          <br />
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-gradient-x">
            for Every Campaign.
          </span>
        </motion.h1>

        {/* Minimal tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-400 mb-12 max-w-xl mx-auto font-light"
        >
          Generate, evaluate & optimize ad creatives across all platforms.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button
            size="lg"
            className="group text-base px-8 py-6 h-auto rounded-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 transition-all"
          >
            Request a Demo
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <span className="text-sm text-gray-500">No credit card required</span>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-2 text-gray-600">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-5 h-8 rounded-full border border-gray-700 flex items-start justify-center p-1.5"
            >
              <motion.div
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1 h-1 bg-gray-500 rounded-full"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
