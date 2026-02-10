'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';

export function HeroSection() {
    return (
        <section className="relative pt-40 pb-24 px-6 overflow-hidden">
            {/* Ambient Background */}
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-200/30 rounded-full blur-[100px] animate-blob" />
                <div className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] bg-pink-200/30 rounded-full blur-[100px] animate-blob animation-delay-2000" />
                <div className="absolute bottom-[-10%] left-[20%] w-[600px] h-[600px] bg-blue-100/40 rounded-full blur-[100px] animate-blob animation-delay-4000" />
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.6)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.6)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-50"></div>
            </div>

            <div className="max-w-4xl mx-auto text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex justify-center mb-8"
                >
                    <Badge variant="outline" className="bg-white/50 backdrop-blur-sm border-purple-100 px-4 py-1.5 rounded-full text-sm text-gray-600 gap-2 shadow-sm hover:border-purple-200 transition-colors">
                        <Sparkles className="w-3.5 h-3.5 text-purple-600" />
                        <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent font-semibold">Generative AI for Performance Marketing</span>
                    </Badge>
                </motion.div>

                <motion.h1 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-gray-900 leading-[1.1] mb-6"
                >
                    AI Agents that <br className="hidden sm:block" />
                    <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 bg-clip-text text-transparent animate-gradient-x">Optimize Ad Creative</span>
                </motion.h1>
                
                <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed mb-10 font-light"
                >
                    Generate, test & refine ad creatives for measurable performance. 
                    <br className="hidden sm:block" />
                    Deploy to every major platform from one intelligent workspace.
                </motion.p>

                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <Button size="lg" asChild className="rounded-full bg-gray-900 hover:bg-black text-white px-8 h-14 text-base font-medium shadow-xl shadow-purple-500/20 hover:shadow-purple-500/40 transition-all duration-300 hover:scale-105">
                        <a href="http://studio.elarislabs.ai/" target="_blank" rel="noopener noreferrer">
                            Start Creating <ArrowRight className="w-5 h-5 ml-2" />
                        </a>
                    </Button>
                    <Button size="lg" variant="outline" asChild className="rounded-full border-gray-200 bg-white/50 backdrop-blur-sm text-gray-700 hover:bg-white hover:text-purple-600 px-8 h-14 text-base font-medium shadow-sm hover:shadow-md transition-all duration-300 hover:border-purple-200">
                        <a href="https://calendly.com/kk-sharma-elarislabs/30min" target="_blank" rel="noopener noreferrer">
                            Book a Demo
                        </a>
                    </Button>
                </motion.div>
            </div>
        </section>
    );
}
