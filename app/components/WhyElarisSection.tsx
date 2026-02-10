'use client';

import { Card, CardContent } from '@/components/ui/card';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Badge } from '@/components/ui/badge';
import { Marquee } from '@/components/ui/marquee';

const features = [
    { 
        number: '01', 
        title: 'Data Guided Decisions', 
        description: 'Every visual, angle, and copy line is ranked on predicted performance across channels before you spend.',
        color: 'from-purple-500 to-indigo-500'
    },
    { 
        number: '02', 
        title: 'Unified Brand Memory', 
        description: 'Our agents never forget. They retain every brand guideline, feedback loop, and past win—so if you correct a detail once, the system remembers it forever.',
        color: 'from-pink-500 to-rose-500'
    },
    { 
        number: '03', 
        title: 'Augmented Creative Team', 
        description: 'Combine strategy, copy, and design agents with your team in one workspace for faster reviews and stronger concepts.',
        color: 'from-blue-500 to-cyan-500'
    },
    { 
        number: '04', 
        title: 'Self Improving Campaigns', 
        description: 'Feedback loops from Meta, TikTok, Google, and more train the system so each new wave of creatives starts from your best winners.',
        color: 'from-emerald-500 to-teal-500'
    },
];

const platforms = [
    { name: 'Meta', icon: <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.04c-5.5 0-10 4.49-10 10.02 0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 0 0 8.44-9.9c0-5.53-4.5-10.02-10-10.02Z"/></svg> },
    { name: 'Google', icon: <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg> },
    { name: 'TikTok', icon: <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/></svg> },
    { name: 'Snapchat', icon: <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor"><path d="M12.206.793c.99 0 4.347.276 5.93 3.821.529 1.193.403 3.219.299 4.847l-.003.06c-.012.18-.022.345-.03.51.075.045.203.09.401.09.3-.016.659-.12 1.033-.301.165-.088.344-.104.464-.104.182 0 .359.029.509.09.45.149.734.479.734.838.015.449-.39.839-1.213 1.168-.089.029-.209.075-.344.119-.45.135-1.139.36-1.333.81-.09.224-.061.524.12.868l.015.015c.06.136 1.526 3.475 4.791 4.014.255.044.435.27.42.509 0 .075-.015.149-.045.225-.24.569-1.273.988-3.146 1.271-.059.091-.12.375-.164.57-.029.179-.074.36-.134.553-.076.271-.27.405-.555.405h-.03a4.72 4.72 0 0 1-.685-.061c-.633-.091-1.5-.21-2.64.15-.749.239-1.41.82-2.19 1.5-.63.57-1.349 1.17-2.19 1.53-.224.09-.449.12-.69.12-.271 0-.54-.04-.79-.12-.84-.36-1.544-.96-2.189-1.5-.781-.69-1.441-1.261-2.19-1.5-1.14-.36-2.007-.24-2.64-.15a5.09 5.09 0 0 1-.685.06h-.03c-.285 0-.48-.134-.555-.404a5.5 5.5 0 0 1-.134-.554c-.045-.195-.105-.48-.165-.57-1.873-.284-2.906-.702-3.146-1.271a.504.504 0 0 1-.044-.225c-.015-.24.164-.465.42-.509 3.265-.54 4.731-3.879 4.791-4.014l.015-.015c.18-.344.21-.644.12-.868-.195-.449-.884-.674-1.333-.809a5.82 5.82 0 0 1-.344-.12c-.823-.329-1.228-.719-1.213-1.168 0-.36.284-.689.734-.838.15-.06.327-.09.509-.09.12 0 .299.016.464.104.374.18.733.285 1.033.301.198 0 .326-.045.401-.09l-.03-.51a52.913 52.913 0 0 1-.003-.06c-.104-1.628-.23-3.654.299-4.847C7.861 1.069 11.217.793 12.206.793z"/></svg> },
    { name: 'YouTube', icon: <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg> },
    { name: 'LinkedIn', icon: <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg> },
    { name: 'X', icon: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg> },
];

export function WhyElarisSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section id="why-elaris" ref={ref} className="py-32 px-6 relative bg-gray-950 overflow-hidden">
            {/* Dark theme background effects */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
                <div className="absolute top-[-20%] left-[10%] w-[800px] h-[800px] bg-purple-900/10 rounded-full blur-[120px] animate-blob" />
                <div className="absolute bottom-[-20%] right-[10%] w-[800px] h-[800px] bg-blue-900/10 rounded-full blur-[120px] animate-blob animation-delay-2000" />
                <div className="absolute top-[40%] left-[50%] -translate-x-1/2 w-[600px] h-[600px] bg-pink-900/10 rounded-full blur-[120px] animate-blob animation-delay-4000" />
                
                {/* Grid overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px] opacity-20"></div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-start mb-24">
                    {/* Left Sticky Content */}
                    <div className="lg:col-span-2 lg:sticky lg:top-32">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.6 }}
                        >
                            <Badge variant="outline" className="text-purple-300 border-purple-500/30 bg-purple-500/10 mb-6 px-4 py-1.5 backdrop-blur-md">Why Elaris</Badge>
                            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-[1.1] mb-6">
                                Built for<br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 animate-gradient-x">predictable results.</span>
                            </h2>
                            <p className="text-lg text-gray-400 leading-relaxed font-light mb-8">
                                Stop guessing what will convert. Elaris connects creative, data, and media so every campaign drives measurable growth.
                            </p>
                            
                            {/* Decorative line */}
                            <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></div>
                        </motion.div>
                    </div>

                    {/* Right Feature List */}
                    <div className="lg:col-span-3 space-y-6">
                        {features.map((f, i) => (
                            <motion.div
                                key={f.number}
                                initial={{ opacity: 0, x: 30 }}
                                animate={isInView ? { opacity: 1, x: 0 } : {}}
                                transition={{ duration: 0.5, delay: i * 0.1 + 0.3 }}
                                whileHover={{ x: -10 }}
                                className="group"
                            >
                                <Card className="relative overflow-hidden border border-white/5 bg-white/5 backdrop-blur-md hover:bg-white/10 hover:border-white/20 transition-all duration-500">
                                    {/* Gradient glow on hover */}
                                    <div className={`absolute inset-0 bg-gradient-to-r ${f.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                                    <div className={`absolute left-0 top-0 w-1 h-full bg-gradient-to-b ${f.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                                    
                                    <CardContent className="p-8 flex flex-col sm:flex-row gap-6 relative z-10">
                                        <div className="shrink-0">
                                            <span className={`text-5xl font-bold bg-gradient-to-br ${f.color} bg-clip-text text-transparent opacity-40 group-hover:opacity-100 transition-all duration-500 scale-100 group-hover:scale-110 block`}>
                                                {f.number}
                                            </span>
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all">
                                                {f.title}
                                            </h3>
                                            <p className="text-gray-400 leading-relaxed font-light group-hover:text-gray-300 transition-colors">
                                                {f.description}
                                            </p>
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Platforms Marquee Section */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="border-t border-white/10 pt-16"
                >
                    <p className="text-center text-sm font-medium text-gray-500 uppercase tracking-widest mb-10">Integrated with all major platforms</p>
                    
                    <div className="relative">
                        <Marquee className="[--duration:30s] [--gap:4rem]" pauseOnHover>
                            {platforms.map((platform) => (
                                <div 
                                    key={platform.name} 
                                    className="flex items-center gap-3 text-gray-500 hover:text-white transition-colors duration-300 cursor-pointer group px-4"
                                >
                                    <div className="group-hover:scale-110 transition-transform duration-300">
                                        {platform.icon}
                                    </div>
                                    <span className="text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 -ml-2 group-hover:ml-0">
                                        {platform.name}
                                    </span>
                                </div>
                            ))}
                        </Marquee>
                        
                        {/* Fade edges */}
                        <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-gray-950 to-transparent z-10" />
                        <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-gray-950 to-transparent z-10" />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
