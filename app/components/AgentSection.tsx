'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Brain, Database, Workflow, TrendingUp } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const agents = [
    { 
        icon: Brain, 
        title: 'Specialized AI Agents', 
        description: 'Strategy, copy, and design agents collaborate on each brief, turning a single input into a full set of ready-to-test creatives.',
        gradient: 'from-purple-500 to-indigo-500'
    },
    { 
        icon: Database, 
        title: 'Shared Brand Memory', 
        description: 'A persistent brand brain stores your tone, visual language, and past winners so every new idea starts from what already works.',
        gradient: 'from-pink-500 to-rose-500'
    },
    { 
        icon: Workflow, 
        title: 'Agentic Workflows', 
        description: 'Orchestrated flows let agents generate, critique, and rank variants, surfacing only the strongest combinations for your review.',
        gradient: 'from-blue-500 to-cyan-500'
    },
    { 
        icon: TrendingUp, 
        title: 'Strategic Insight', 
        description: 'Performance signals from Meta, TikTok, Google, and others feed back into the system, guiding the next round of creatives.',
        gradient: 'from-emerald-500 to-teal-500'
    },
];

export function AgentSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section id="features" ref={ref} className="py-32 px-6 relative overflow-hidden bg-gray-50/50">
             {/* Subtle background decoration */}
             <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-b from-purple-100/40 to-transparent rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
             <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-t from-blue-100/40 to-transparent rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2" />

            <div className="max-w-6xl mx-auto relative z-10">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <p className="text-sm font-bold text-purple-600 uppercase tracking-widest mb-3">Your AI Workforce</p>
                    <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 mb-6">
                        Specialized agents built for<br />
                        <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">modern advertising.</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {agents.map((agent, index) => {
                        const Icon = agent.icon;
                        return (
                            <motion.div
                                key={agent.title}
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                                whileHover={{ y: -5 }}
                            >
                                <Card className="group h-full border border-gray-100 bg-white hover:border-purple-200/60 hover:shadow-2xl hover:shadow-purple-500/5 transition-all duration-300 relative overflow-hidden">
                                    <div className={`absolute top-0 left-0 w-1 h-full bg-gradient-to-b ${agent.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                                    <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${agent.gradient} opacity-0 group-hover:opacity-5 rounded-bl-[100px] transition-opacity duration-300 pointer-events-none`} />
                                    
                                    <CardContent className="p-8">
                                        <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${agent.gradient} flex items-center justify-center mb-6 shadow-lg shadow-purple-500/10 group-hover:scale-110 transition-transform duration-300`}>
                                            <Icon className="w-6 h-6 text-white" />
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-700 transition-colors">{agent.title}</h3>
                                        <p className="text-base text-gray-500 leading-relaxed group-hover:text-gray-600">{agent.description}</p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
