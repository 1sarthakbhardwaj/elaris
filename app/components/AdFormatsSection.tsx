'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Badge } from '@/components/ui/badge';
import { Image, Clapperboard, Users, Check, ArrowRight, Zap, Brain } from 'lucide-react';

const formats = [
    {
        icon: Image,
        title: 'Static Ads',
        subtitle: 'Pixel-Perfect Visuals',
        description: 'Generate scroll-stopping static imagery tailored to every platform spec. From social feeds to display banners on brand, every time.',
        features: ['Brand-compliant designs', 'Multi-ratio generation', 'High-res export', 'A/B variant packs'],
        gradient: 'from-rose-500 via-pink-500 to-fuchsia-500',
        glow: 'bg-pink-500/20',
        iconBg: 'bg-gradient-to-br from-pink-500 to-rose-600',
    },
    {
        icon: Clapperboard,
        title: 'Video Ads',
        subtitle: 'SOTA Video Models',
        description: 'Create cinematic video ads powered by the latest generative models. Brand memory ensures every frame stays on message.',
        features: ['Latest SOTA model support', 'Brand-context aware', 'Auto-captioning & overlays', 'Multi-format export'],
        gradient: 'from-violet-500 via-purple-500 to-indigo-500',
        glow: 'bg-purple-500/20',
        iconBg: 'bg-gradient-to-br from-purple-500 to-indigo-600',
        featured: true,
    },
    {
        icon: Users,
        title: 'UGC Ads',
        subtitle: 'AI Creator Mode',
        description: 'Authentic UGC-style content with AI avatars that speak, act, and sell like real creators, no talent scheduling, no reshoots.',
        features: ['Diverse avatar library', 'Natural voice cloning', 'Viral hook scripts', 'Platform-native feel'],
        gradient: 'from-cyan-500 via-blue-500 to-indigo-500',
        glow: 'bg-blue-500/20',
        iconBg: 'bg-gradient-to-br from-blue-500 to-cyan-600',
    },
];

export function AdFormatsSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-80px' });

    return (
        <section id="ad-formats" ref={ref} className="relative py-32 px-6 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-white to-gray-50 pointer-events-none" />
            <div className="absolute top-[10%] left-[-5%] w-[500px] h-[500px] bg-purple-200/20 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-[10%] right-[-5%] w-[500px] h-[500px] bg-pink-200/20 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-20"
                >
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 bg-gray-900 text-white px-5 py-2 rounded-full mb-8 shadow-xl shadow-gray-900/20"
                    >
                        <Zap className="w-4 h-4 text-yellow-400" />
                        <span className="text-sm font-semibold tracking-wide">Every Format, One Platform</span>
                    </motion.div>
                    
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-gray-900 leading-[1.1] mb-6">
                        Create ads that <br className="hidden sm:block" />
                        <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-rose-500 bg-clip-text text-transparent animate-gradient-x">actually convert.</span>
                    </h2>
                    <p className="text-lg sm:text-xl text-gray-500 max-w-2xl mx-auto font-light leading-relaxed">
                        Static, video, or UGC — every creative is generated with full brand context and optimized for performance.
                    </p>
                </motion.div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
                    {formats.map((format, index) => {
                        const Icon = format.icon;
                        const isFeatured = format.featured;
                        return (
                            <motion.div
                                key={format.title}
                                initial={{ opacity: 0, y: 40 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.6, delay: index * 0.15 + 0.3 }}
                                whileHover={{ y: -10, scale: 1.02 }}
                                className={`group relative ${isFeatured ? 'lg:scale-105 lg:z-10' : ''}`}
                            >
                                {/* Card */}
                                <div className={`relative h-full rounded-3xl border overflow-hidden transition-all duration-500 ${
                                    isFeatured 
                                        ? 'bg-gray-950 border-white/10 text-white shadow-2xl shadow-purple-500/20' 
                                        : 'bg-white border-gray-200 hover:border-gray-300 shadow-lg hover:shadow-2xl'
                                }`}>
                                    {/* Animated gradient border on hover */}
                                    <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${format.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-sm`} />
                                    <div className={`absolute inset-[1px] rounded-3xl ${isFeatured ? 'bg-gray-950' : 'bg-white'} z-0`} />
                                    
                                    {/* Glow */}
                                    <div className={`absolute top-0 right-0 w-40 h-40 ${format.glow} rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`} />
                                    
                                    <div className="relative z-10 p-8 sm:p-10 flex flex-col h-full">
                                        {/* Top Row */}
                                        <div className="flex justify-between items-start mb-8">
                                            <motion.div 
                                                whileHover={{ rotate: [0, -10, 10, 0] }}
                                                transition={{ duration: 0.5 }}
                                                className={`w-16 h-16 rounded-2xl ${format.iconBg} flex items-center justify-center shadow-xl`}
                                            >
                                                <Icon className="w-8 h-8 text-white" />
                                            </motion.div>
                                            {isFeatured && (
                                                <Badge className="bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs px-3 py-1 shadow-lg">
                                                    <span className="bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent font-bold">Most Popular</span>
                                                </Badge>
                                            )}
                                        </div>

                                        {/* Title */}
                                        <h3 className={`text-2xl font-bold mb-2 ${isFeatured ? 'text-white' : 'text-gray-900'}`}>
                                            {format.title}
                                        </h3>
                                        <p className={`text-sm font-semibold mb-5 bg-gradient-to-r ${format.gradient} bg-clip-text text-transparent`}>
                                            {format.subtitle}
                                        </p>
                                        
                                        {/* Description */}
                                        <p className={`leading-relaxed mb-8 ${isFeatured ? 'text-gray-400' : 'text-gray-500'}`}>
                                            {format.description}
                                        </p>

                                        {/* Features */}
                                        <div className="mt-auto space-y-3">
                                            {format.features.map((feature) => (
                                                <div key={feature} className="flex items-center gap-3">
                                                    <div className={`w-5 h-5 rounded-full bg-gradient-to-br ${format.gradient} flex items-center justify-center shrink-0 shadow-sm`}>
                                                        <Check className="w-3 h-3 text-white" strokeWidth={3} />
                                                    </div>
                                                    <span className={`text-sm ${isFeatured ? 'text-gray-300' : 'text-gray-600'}`}>{feature}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Bottom Banner — Brand Memory Callout */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7, delay: 0.8 }}
                    className="mt-16 relative"
                >
                    <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-8 sm:p-10 shadow-lg">
                        {/* Gradient accent */}
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500"></div>
                        <div className="absolute -top-20 -right-20 w-60 h-60 bg-purple-100/30 rounded-full blur-[60px] pointer-events-none"></div>
                        
                        <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
                            <div className="flex-shrink-0">
                                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center shadow-xl">
                                    <Brain className="w-8 h-8 text-white" />
                                </div>
                            </div>
                            <div className="text-center md:text-left flex-1">
                                <h3 className="text-xl font-bold text-gray-900 mb-2">
                                    Unified Brand Memory Across All Formats
                                </h3>
                                <p className="text-gray-500 leading-relaxed max-w-2xl">
                                    Every ad, static, video, or UGC, is generated with full brand context. 
                                    Our agents <span className="font-semibold text-gray-700">never forget</span> your guidelines, past feedback, or winning patterns. 
                                    Correct something once, and it&apos;s remembered forever.
                                </p>
                            </div>
                            <div className="flex-shrink-0">
                                <div className="flex items-center gap-2 text-sm font-semibold text-purple-600 bg-purple-50 px-5 py-2.5 rounded-full border border-purple-100 shadow-sm hover:bg-purple-100 transition-colors cursor-pointer">
                                    Learn more <ArrowRight className="w-4 h-4" />
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
