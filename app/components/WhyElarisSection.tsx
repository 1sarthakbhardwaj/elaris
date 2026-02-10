'use client';

import { Card, CardContent } from '@/components/ui/card';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Badge } from '@/components/ui/badge';

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
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-start">
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
            </div>
        </section>
    );
}
