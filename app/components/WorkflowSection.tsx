'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Palette, FileText, Image, Brain, Lightbulb, Layout, Wand2, Sparkles, Download, Database, ArrowDown, Zap } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const inputs = [
    { icon: Palette, label: 'Brand Identity', description: 'Logo, colors, fonts, guidelines', color: 'text-purple-500' },
    { icon: FileText, label: 'Campaign Brief', description: 'Platform, format, objectives, audience', color: 'text-blue-500' },
    { icon: Image, label: 'Assets & Moodboards', description: 'Product shots, references, style notes', color: 'text-pink-500' },
];

const agents = [
    { icon: Brain, label: 'Brand Strategist', description: 'Analyzes brand and creates structured templates', color: 'bg-purple-100 text-purple-600' },
    { icon: Lightbulb, label: 'Creative Director', description: 'Generates diverse creative concepts', color: 'bg-amber-100 text-amber-600' },
    { icon: Layout, label: 'Layout Generator', description: 'Creates multiple layout variations', color: 'bg-blue-100 text-blue-600' },
    { icon: Wand2, label: 'Production Agent', description: 'Assembles final campaign assets', color: 'bg-emerald-100 text-emerald-600' },
];

const outputs = [
    { icon: Sparkles, label: 'Creative Concepts', description: 'Production-ready campaign ideas', color: 'text-amber-500' },
    { icon: Image, label: 'AI-Generated Assets', description: 'High-quality campaign visuals', color: 'text-purple-500' },
    { icon: Download, label: 'Platform-Ready Content', description: 'Deploy across all channels', color: 'text-emerald-500' },
];

function StepLabel({ children }: { children: React.ReactNode }) {
    return (
        <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-2 mb-6"
        >
            <div className="h-px w-8 bg-gray-200" />
            <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">{children}</p>
            <div className="h-px w-8 bg-gray-200" />
        </motion.div>
    );
}

function FlowArrow() {
    return (
        <div className="flex justify-center py-6 relative">
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-px h-full bg-gradient-to-b from-gray-200 via-purple-200 to-gray-200"></div>
            </div>
            <div className="w-8 h-8 rounded-full bg-white border border-gray-100 shadow-sm flex items-center justify-center relative z-10 text-gray-300">
                <ArrowDown className="w-4 h-4" />
            </div>
        </div>
    );
}

export function WorkflowSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-50px' });

    const containerVars = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const itemVars = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <section id="workflow" ref={ref} className="py-24 px-6 relative bg-white">
            <div className="max-w-5xl mx-auto">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <p className="text-sm font-bold text-purple-600 uppercase tracking-widest mb-3">How It Works</p>
                    <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 mb-4">
                        AI Agents with<br />
                        <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">Persistent Brand Memory</span>
                    </h2>
                    <p className="mt-4 text-gray-500 max-w-xl mx-auto text-lg font-light">
                        Specialized AI agents work together with shared memory to maintain brand consistency across every campaign.
                    </p>
                </motion.div>

                {/* Inputs */}
                <StepLabel>Inputs</StepLabel>
                <motion.div 
                    variants={containerVars}
                    initial="hidden"
                    animate={isInView ? "show" : "hidden"}
                    className="grid grid-cols-1 md:grid-cols-3 gap-4"
                >
                    {inputs.map((item) => {
                        const Icon = item.icon;
                        return (
                            <motion.div variants={itemVars} key={item.label} whileHover={{ y: -5 }}>
                                <Card className="border border-gray-100 bg-white shadow-sm hover:shadow-lg transition-all duration-300 h-full">
                                    <CardContent className="p-6 flex items-start gap-4">
                                        <div className={`w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center shrink-0 border border-gray-100`}>
                                            <Icon className={`w-5 h-5 ${item.color}`} />
                                        </div>
                                        <div>
                                            <h4 className="text-sm font-bold text-gray-900">{item.label}</h4>
                                            <p className="text-xs text-gray-500 mt-1 leading-relaxed">{item.description}</p>
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        );
                    })}
                </motion.div>

                <FlowArrow />

                {/* Agents */}
                <StepLabel>AI Agent Collaboration</StepLabel>
                <motion.div 
                    variants={containerVars}
                    initial="hidden"
                    animate={isInView ? "show" : "hidden"}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
                >
                    {agents.map((agent) => {
                        const Icon = agent.icon;
                        return (
                            <motion.div variants={itemVars} key={agent.label} whileHover={{ y: -5, scale: 1.02 }}>
                                <Card className="border border-purple-100 bg-gradient-to-b from-white to-purple-50/30 hover:shadow-lg transition-all duration-300 h-full text-center group relative overflow-hidden">
                                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-400 to-pink-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                    <CardContent className="p-6 flex flex-col items-center">
                                        <div className={`w-12 h-12 rounded-2xl ${agent.color} flex items-center justify-center mb-4 shadow-sm group-hover:scale-110 transition-transform`}>
                                            <Icon className="w-6 h-6" />
                                        </div>
                                        <h4 className="text-sm font-bold text-gray-900 mb-2">{agent.label}</h4>
                                        <p className="text-xs text-gray-500 leading-relaxed">{agent.description}</p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        );
                    })}
                </motion.div>

                {/* Brand Memory */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="mt-6"
                >
                    <Card className="border-2 border-dashed border-purple-200 bg-purple-50/50 relative overflow-hidden">
                        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
                        <CardContent className="p-8 text-center relative z-10">
                            <div className="inline-flex items-center gap-3 mb-3 bg-white px-4 py-1.5 rounded-full shadow-sm border border-purple-100">
                                <Database className="w-4 h-4 text-purple-600 animate-pulse" />
                                <h4 className="text-sm font-bold text-gray-900">Persistent Brand Memory</h4>
                            </div>
                            <p className="text-sm text-gray-600 max-w-xl mx-auto leading-relaxed">
                                All agents access a shared memory layer that stores your brand guidelines, tone, visual language, and past winners—ensuring every creative stays on-brand.
                            </p>
                        </CardContent>
                    </Card>
                </motion.div>

                <FlowArrow />

                {/* Outputs */}
                <StepLabel>Outputs</StepLabel>
                <motion.div 
                    variants={containerVars}
                    initial="hidden"
                    animate={isInView ? "show" : "hidden"}
                    className="grid grid-cols-1 md:grid-cols-3 gap-4"
                >
                    {outputs.map((item) => {
                        const Icon = item.icon;
                        return (
                            <motion.div variants={itemVars} key={item.label} whileHover={{ y: -5 }}>
                                <Card className="border border-gray-100 bg-white shadow-sm hover:shadow-lg transition-all duration-300 h-full">
                                    <CardContent className="p-6 flex items-start gap-4">
                                        <div className={`w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center shrink-0 border border-gray-100`}>
                                            <Icon className={`w-5 h-5 ${item.color}`} />
                                        </div>
                                        <div>
                                            <h4 className="text-sm font-bold text-gray-900">{item.label}</h4>
                                            <p className="text-xs text-gray-500 mt-1 leading-relaxed">{item.description}</p>
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}
