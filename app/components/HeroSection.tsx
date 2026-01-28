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
          <div className="w-96 h-96 bg-purple-500/15 rounded-full blur-3xl animate-blob"></div>
        </div>
        <div data-lenis-parallax style={{ ['--lenis-speed' as any]: -0.04 }} className="absolute top-1/3 -right-1/4">
          <div className="w-96 h-96 bg-pink-500/15 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
        </div>
        <div data-lenis-parallax style={{ ['--lenis-speed' as any]: -0.03 }} className="absolute -bottom-1/4 left-1/2">
          <div className="w-96 h-96 bg-blue-500/15 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
        </div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,.03)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)]"></div>

      {/* Floating decorative elements */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-[15%] w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-sm border border-black/5 shadow-lg"
      />
      <motion.div
        animate={{
          y: [0, 15, 0],
          rotate: [0, -5, 0]
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-1/3 right-[18%] w-12 h-12 rounded-full bg-gradient-to-br from-blue-500/10 to-cyan-500/10 backdrop-blur-sm border border-black/5 shadow-lg"
      />
      <motion.div
        animate={{
          y: [0, -15, 0],
          x: [0, 10, 0]
        }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-1/3 left-[20%] w-8 h-8 rounded-lg bg-gradient-to-br from-pink-500/15 to-rose-500/15 backdrop-blur-sm border border-black/5 shadow-lg"
      />
      <motion.div
        animate={{
          y: [0, 20, 0],
          x: [0, -8, 0]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute bottom-1/4 right-[15%] w-20 h-20 rounded-3xl bg-gradient-to-br from-emerald-500/10 to-teal-500/10 backdrop-blur-sm border border-black/5 shadow-lg"
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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-black/8 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-purple-600" />
            <span className="text-sm font-semibold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
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
          <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
            AI Agents that Optimize
          </span>
          <br />
          <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 bg-clip-text text-transparent animate-gradient-x">
            Ad Creative
          </span>
        </motion.h1>

        {/* Minimal tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-600 mb-12 max-w-xl mx-auto font-normal"
        >
          Generate, test & refine ad creatives for measurable performance.
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
            asChild
            className="group text-base px-8 py-6 h-auto rounded-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-all text-white"
          >
            <a href="https://calendly.com/kk-sharma-elarislabs/30min" target="_blank" rel="noopener noreferrer">
              Schedule a Call
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
          <span className="text-sm text-gray-500 font-medium">Book a 30-minute consultation</span>
        </motion.div>

        {/* Platform Logos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 pt-8 border-t border-black/5"
        >
          <p className="text-xs text-gray-500 uppercase tracking-widest mb-6 font-semibold">
            Distribute creatives across all major platforms
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {/* Meta */}
            <div className="text-gray-400 hover:text-gray-900 transition-colors" title="Meta">
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.04c-5.5 0-10 4.49-10 10.02 0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 0 0 8.44-9.9c0-5.53-4.5-10.02-10-10.02Z"/>
              </svg>
            </div>
            {/* Google */}
            <div className="text-gray-400 hover:text-gray-900 transition-colors" title="Google">
              <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
            </div>
            {/* YouTube */}
            <div className="text-gray-400 hover:text-gray-900 transition-colors" title="YouTube">
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </div>
            {/* TikTok */}
            <div className="text-gray-400 hover:text-gray-900 transition-colors" title="TikTok">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
              </svg>
            </div>
            {/* Snapchat */}
            <div className="text-gray-400 hover:text-gray-900 transition-colors" title="Snapchat">
              <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.206.793c.99 0 4.347.276 5.93 3.821.529 1.193.403 3.219.299 4.847l-.003.06c-.012.18-.022.345-.03.51.075.045.203.09.401.09.3-.016.659-.12 1.033-.301.165-.088.344-.104.464-.104.182 0 .359.029.509.09.45.149.734.479.734.838.015.449-.39.839-1.213 1.168-.089.029-.209.075-.344.119-.45.135-1.139.36-1.333.81-.09.224-.061.524.12.868l.015.015c.06.136 1.526 3.475 4.791 4.014.255.044.435.27.42.509 0 .075-.015.149-.045.225-.24.569-1.273.988-3.146 1.271-.059.091-.12.375-.164.57-.029.179-.074.36-.134.553-.076.271-.27.405-.555.405h-.03a4.72 4.72 0 0 1-.685-.061c-.633-.091-1.5-.21-2.64.15-.749.239-1.41.82-2.19 1.5-.63.57-1.349 1.17-2.19 1.53-.224.09-.449.12-.69.12-.271 0-.54-.04-.79-.12-.84-.36-1.544-.96-2.189-1.5-.781-.69-1.441-1.261-2.19-1.5-1.14-.36-2.007-.24-2.64-.15a5.09 5.09 0 0 1-.685.06h-.03c-.285 0-.48-.134-.555-.404a5.5 5.5 0 0 1-.134-.554c-.045-.195-.105-.48-.165-.57-1.873-.284-2.906-.702-3.146-1.271a.504.504 0 0 1-.044-.225c-.015-.24.164-.465.42-.509 3.265-.54 4.731-3.879 4.791-4.014l.015-.015c.18-.344.21-.644.12-.868-.195-.449-.884-.674-1.333-.809a5.82 5.82 0 0 1-.344-.12c-.823-.329-1.228-.719-1.213-1.168 0-.36.284-.689.734-.838.15-.06.327-.09.509-.09.12 0 .299.016.464.104.374.18.733.285 1.033.301.198 0 .326-.045.401-.09l-.03-.51a52.913 52.913 0 0 1-.003-.06c-.104-1.628-.23-3.654.299-4.847C7.861 1.069 11.217.793 12.206.793z"/>
              </svg>
            </div>
            {/* LinkedIn */}
            <div className="text-gray-400 hover:text-gray-900 transition-colors" title="LinkedIn">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </div>
            {/* X (Twitter) */}
            <div className="text-gray-400 hover:text-gray-900 transition-colors" title="X">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </div>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-2 text-gray-400">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-5 h-8 rounded-full border border-gray-300 flex items-start justify-center p-1.5"
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
