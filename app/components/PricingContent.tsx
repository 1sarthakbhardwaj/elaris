'use client';

import { motion, useInView, useScroll, useTransform, useSpring } from 'framer-motion';
import { useRef, useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Check, X, Shield, BarChart3, Users, Headphones, ArrowRight, Sparkles, Zap } from 'lucide-react';
import Link from 'next/link';

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const plans = [
    {
        id: 'free',
        name: 'Free',
        price: '$0',
        period: '/mo',
        credits: '200 Credits',
        output: '20 Images or 4 Videos',
        cta: 'Get Started Free',
        ctaHref: 'http://studio.elarislabs.ai/',
        featured: false,
        dark: false,
    },
    {
        id: 'growth',
        name: 'Growth',
        price: '$49',
        period: '/mo',
        credits: '500 Credits',
        output: '50 Images or 10 Videos',
        cta: 'Start Growth',
        ctaHref: 'http://studio.elarislabs.ai/',
        featured: false,
        dark: false,
    },
    {
        id: 'scale',
        name: 'Scale',
        price: '$399',
        period: '/mo',
        credits: '5,000 Credits',
        output: '500 Images or 100 Videos',
        cta: 'Start Scaling',
        ctaHref: 'http://studio.elarislabs.ai/',
        featured: true,
        dark: true,
    },
    {
        id: 'enterprise',
        name: 'Enterprise',
        price: 'Custom',
        period: '',
        credits: '25,000+ Credits',
        output: '2,500+ Images or 500+ Videos',
        cta: 'Talk to Sales',
        ctaHref: 'https://calendly.com/kk-sharma-elarislabs/30min',
        featured: false,
        dark: false,
    },
] as const;

type PlanId = (typeof plans)[number]['id'];

type FeatureValue = boolean | string;

interface Feature {
    name: string;
    values: Record<PlanId, FeatureValue>;
}

interface FeatureCategory {
    title: string;
    icon: React.ElementType;
    features: Feature[];
}

const categories: FeatureCategory[] = [
    {
        title: 'Core AI & Generation',
        icon: Zap,
        features: [
            { name: 'Image Generation', values: { free: '✓ (10 Credits)', growth: '✓ (10 Credits)', scale: '✓ (10 Credits)', enterprise: '✓ (10 Credits)' } },
            { name: 'Video Generation', values: { free: '✓ (50 Credits)', growth: '✓ (50 Credits)', scale: '✓ (50 Credits)', enterprise: '✓ (50 Credits)' } },
            { name: 'Smart Resizing (9:16, 1:1, 4:5)', values: { free: true, growth: true, scale: true, enterprise: true } },
            { name: 'AI-UGC "Creator Mode"', values: { free: 'Coming Soon', growth: 'Coming Soon', scale: 'Coming Soon', enterprise: 'Coming Soon' } },
            { name: 'Multilingual Text-to-Speech', values: { free: 'Coming Soon', growth: 'Coming Soon', scale: 'Coming Soon', enterprise: 'Coming Soon' } },
            { name: 'Rendering Speed', values: { free: 'Basic', growth: 'Standard', scale: 'Priority', enterprise: 'Highest Priority' } },
            { name: 'Watermark-Free Exports', values: { free: true, growth: true, scale: true, enterprise: true } },
        ],
    },
    {
        title: 'Brand Governance',
        icon: Shield,
        features: [
            { name: 'Active Brand Identities', values: { free: '1 Brand', growth: '1 Brand', scale: 'Up to 5', enterprise: 'Unlimited' } },
            { name: 'Basic Guardrails (Colors, Fonts)', values: { free: true, growth: true, scale: true, enterprise: true } },
            { name: 'Persistent Brand Memory', values: { free: true, growth: true, scale: true, enterprise: true } },
            { name: 'Strict Compliance Checks', values: { free: true, growth: true, scale: true, enterprise: true } },
            { name: 'Custom Knowledge Graph', values: { free: false, growth: false, scale: '1st-party data', enterprise: '1st-party data' } },
        ],
    },
    {
        title: 'Campaign Performance',
        icon: BarChart3,
        features: [
            { name: 'Automated A/B Testing Loops', values: { free: false, growth: false, scale: true, enterprise: true } },
            { name: 'Predictive Scoring (Pre-live)', values: { free: false, growth: false, scale: false, enterprise: true } },
            { name: 'Analytics Dashboard', values: { free: false, growth: 'Basic', scale: 'Advanced', enterprise: 'Custom Reporting' } },
        ],
    },
    {
        title: 'Workspace & Security',
        icon: Users,
        features: [
            { name: 'Team Seats', values: { free: '1 Seat', growth: 'Up to 3', scale: 'Up to 10', enterprise: 'Unlimited' } },
            { name: 'Approval Workflows', values: { free: false, growth: false, scale: true, enterprise: 'Multi-tier' } },
            { name: 'Dedicated Workspace', values: { free: true, growth: true, scale: true, enterprise: true } },
            { name: 'Single Sign-On (SSO)', values: { free: false, growth: false, scale: false, enterprise: true } },
            { name: 'Custom API Access', values: { free: false, growth: false, scale: false, enterprise: true } },
        ],
    },
    {
        title: 'Support',
        icon: Headphones,
        features: [
            { name: 'Support Level', values: { free: 'Email', growth: 'Email', scale: 'Priority Email & Chat', enterprise: '24/7 Dedicated CSM' } },
        ],
    },
];

/* ------------------------------------------------------------------ */
/*  Helpers                                                            */
/* ------------------------------------------------------------------ */

function CellValue({ value }: { value: FeatureValue }) {
    if (value === true) return <Check className="w-5 h-5 text-emerald-500 mx-auto" />;
    if (value === false) return <X className="w-5 h-5 text-gray-300 mx-auto" />;
    if (value === 'Coming Soon') return <span className="text-xs text-gray-400 italic">Coming Soon</span>;
    return <span className="text-sm text-gray-700 font-medium">{value}</span>;
}

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export function PricingContent() {
    const heroRef = useRef(null);
    const cardsRef = useRef(null);
    const tableRef = useRef(null);
    const heroInView = useInView(heroRef, { once: true });
    const cardsInView = useInView(cardsRef, { once: true, margin: '-60px' });
    const tableInView = useInView(tableRef, { once: true, margin: '-60px' });

    const [openCategory, setOpenCategory] = useState<string | null>(null);

    const { scrollY } = useScroll();
    const heroOrbY1 = useTransform(scrollY, [0, 600], [0, -80]);
    const heroOrbY2 = useTransform(scrollY, [0, 600], [0, -50]);
    const heroOrbY3 = useTransform(scrollY, [0, 600], [0, -35]);
    const heroTextY = useTransform(scrollY, [0, 400], [0, 40]);
    const heroOpacity = useTransform(scrollY, [0, 350], [1, 0]);

    const smoothHeroOrbY1 = useSpring(heroOrbY1, { stiffness: 100, damping: 30 });
    const smoothHeroOrbY2 = useSpring(heroOrbY2, { stiffness: 100, damping: 30 });
    const smoothHeroOrbY3 = useSpring(heroOrbY3, { stiffness: 100, damping: 30 });
    const smoothHeroTextY = useSpring(heroTextY, { stiffness: 100, damping: 30 });

    const tableOrbY1 = useTransform(scrollY, [600, 1800], [60, -60]);
    const tableOrbY2 = useTransform(scrollY, [600, 1800], [40, -40]);

    return (
        <>
            {/* ── Hero ─────────────────────────────────────────────── */}
            <section ref={heroRef} className="relative pt-36 pb-16 px-6 overflow-hidden">
                <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
                    <motion.div style={{ y: smoothHeroOrbY1 }} className="absolute top-[-10%] left-[10%] w-[500px] h-[500px] bg-purple-200/25 rounded-full blur-[100px] animate-blob" />
                    <motion.div style={{ y: smoothHeroOrbY2 }} className="absolute top-[10%] right-[-5%] w-[400px] h-[400px] bg-pink-200/25 rounded-full blur-[100px] animate-blob animation-delay-2000" />
                    <motion.div style={{ y: smoothHeroOrbY3 }} className="absolute bottom-[10%] left-[40%] w-[350px] h-[350px] bg-blue-100/30 rounded-full blur-[100px] animate-blob animation-delay-4000" />
                </div>

                <motion.div style={{ y: smoothHeroTextY, opacity: heroOpacity }} className="max-w-4xl mx-auto text-center relative z-10">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={heroInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }}>
                        <Link href="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-gray-600 transition-colors mb-8 text-sm group">
                            <span className="group-hover:-translate-x-0.5 transition-transform">&larr;</span> Back to Home
                        </Link>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={heroInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-gray-900 leading-[1.1] mb-6"
                    >
                        Simple, transparent <br className="hidden sm:block" />
                        <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 bg-clip-text text-transparent animate-gradient-x">pricing.</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={heroInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-lg text-gray-500 max-w-xl mx-auto font-light leading-relaxed"
                    >
                        Start free. Pay only for what you generate. Every plan includes brand memory, smart resizing, and watermark-free exports.
                    </motion.p>
                </motion.div>
            </section>

            {/* ── Pricing Cards ────────────────────────────────────── */}
            <section ref={cardsRef} className="px-6 pb-24">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-5">
                    {plans.map((plan, i) => (
                        <motion.div
                            key={plan.id}
                            initial={{ opacity: 0, y: 30 }}
                            animate={cardsInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            whileHover={{ y: -8, scale: 1.02 }}
                            className={`group relative ${plan.featured ? 'lg:scale-[1.04] lg:z-10' : ''}`}
                        >
                            <div className={`relative h-full rounded-3xl border overflow-hidden transition-all duration-500 flex flex-col ${
                                plan.dark
                                    ? 'bg-gray-950 border-white/10 shadow-2xl shadow-purple-500/15'
                                    : 'bg-white border-gray-200 hover:border-gray-300 shadow-lg hover:shadow-xl'
                            }`}>
                                {/* Animated gradient border glow on hover */}
                                {plan.featured && (
                                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-500 via-pink-500 to-indigo-500 opacity-20 group-hover:opacity-30 transition-opacity -z-10 blur-sm" />
                                )}
                                {plan.featured && (
                                    <div className="absolute inset-[1px] rounded-3xl bg-gray-950 z-0" />
                                )}

                                <div className="relative z-10 p-8 flex flex-col h-full">
                                    {/* Header */}
                                    <div className="flex items-center justify-between mb-6">
                                        <h3 className={`text-lg font-bold ${plan.dark ? 'text-white' : 'text-gray-900'}`}>{plan.name}</h3>
                                        {plan.featured && (
                                            <Badge className="bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] px-2.5 py-0.5 shadow-lg">
                                                <span className="bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent font-bold">Most Popular</span>
                                            </Badge>
                                        )}
                                    </div>

                                    {/* Price */}
                                    <div className="mb-6">
                                        <div className="flex items-baseline gap-1">
                                            <span className={`text-5xl font-bold tracking-tight ${plan.dark ? 'text-white' : 'text-gray-900'}`}>{plan.price}</span>
                                            {plan.period && <span className={`text-base ${plan.dark ? 'text-gray-400' : 'text-gray-500'}`}>{plan.period}</span>}
                                        </div>
                                    </div>

                                    {/* Credits & Output */}
                                    <div className={`rounded-xl p-4 mb-8 ${plan.dark ? 'bg-white/5 border border-white/10' : 'bg-gray-50 border border-gray-100'}`}>
                                        <div className="flex items-center gap-2 mb-2">
                                            <Sparkles className={`w-4 h-4 ${plan.dark ? 'text-purple-400' : 'text-purple-500'}`} />
                                            <span className={`text-sm font-semibold ${plan.dark ? 'text-white' : 'text-gray-900'}`}>{plan.credits}</span>
                                        </div>
                                        <p className={`text-xs ${plan.dark ? 'text-gray-400' : 'text-gray-500'}`}>
                                            ~{plan.output}
                                        </p>
                                    </div>

                                    {/* CTA */}
                                    <div className="mt-auto">
                                        <Button
                                            size="lg"
                                            asChild
                                            className={`w-full rounded-xl h-12 text-sm font-semibold transition-all duration-300 ${
                                                plan.featured
                                                    ? 'bg-white text-gray-900 hover:bg-gray-100 shadow-xl'
                                                    : plan.id === 'enterprise'
                                                        ? 'bg-gray-900 text-white hover:bg-black shadow-lg'
                                                        : 'bg-gray-900 text-white hover:bg-black shadow-lg'
                                            }`}
                                        >
                                            <a href={plan.ctaHref} target="_blank" rel="noopener noreferrer">
                                                {plan.cta}
                                                <ArrowRight className="w-4 h-4 ml-2" />
                                            </a>
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* ── Feature Comparison Table ─────────────────────────── */}
            <section ref={tableRef} className="px-6 pb-32 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50/50 to-white pointer-events-none -z-10" />
                <motion.div
                    style={{ y: tableOrbY1 }}
                    className="absolute -top-20 right-0 w-[500px] h-[500px] bg-purple-100/20 rounded-full blur-[100px] pointer-events-none -z-10"
                />
                <motion.div
                    style={{ y: tableOrbY2 }}
                    className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-pink-100/20 rounded-full blur-[100px] pointer-events-none -z-10"
                />

                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={tableInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 mb-4">
                            Compare every feature.
                        </h2>
                        <p className="text-gray-500 max-w-lg mx-auto">Everything you need to know, side by side.</p>
                    </motion.div>

                    {/* Desktop Table */}
                    <div className="hidden lg:block">
                        {/* Sticky Header */}
                        <div className="sticky top-16 z-20 bg-white/80 backdrop-blur-xl border-b border-gray-200 rounded-t-2xl">
                            <div className="grid grid-cols-5 gap-0">
                                <div className="p-5">
                                    <span className="text-sm font-bold text-gray-400 uppercase tracking-wider">Features</span>
                                </div>
                                {plans.map((plan) => (
                                    <div key={plan.id} className={`p-5 text-center ${plan.featured ? 'bg-gray-950 text-white first:rounded-tl-none last:rounded-tr-none' : ''}`}>
                                        <span className={`text-sm font-bold ${plan.featured ? 'text-white' : 'text-gray-900'}`}>{plan.name}</span>
                                        <div className={`text-xs mt-0.5 ${plan.featured ? 'text-gray-400' : 'text-gray-500'}`}>{plan.credits}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Categories */}
                        {categories.map((cat, catIdx) => {
                            const Icon = cat.icon;
                            return (
                                <motion.div
                                    key={cat.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={tableInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.4, delay: catIdx * 0.1 + 0.3 }}
                                >
                                    {/* Category Header */}
                                    <div className="grid grid-cols-5 gap-0 border-b border-gray-100 bg-gray-50/80">
                                        <div className="col-span-5 p-4 flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-sm">
                                                <Icon className="w-4 h-4 text-white" />
                                            </div>
                                            <span className="text-sm font-bold text-gray-900">{cat.title}</span>
                                        </div>
                                    </div>

                                    {/* Feature Rows */}
                                    {cat.features.map((feature, fIdx) => (
                                        <div
                                            key={feature.name}
                                            className={`grid grid-cols-5 gap-0 border-b border-gray-100 hover:bg-gray-50/50 transition-colors ${fIdx % 2 === 0 ? '' : 'bg-gray-50/30'}`}
                                        >
                                            <div className="p-4 flex items-center">
                                                <span className="text-sm text-gray-700">{feature.name}</span>
                                            </div>
                                            {plans.map((plan) => (
                                                <div key={plan.id} className={`p-4 flex items-center justify-center text-center ${plan.featured ? 'bg-gray-950/[0.03]' : ''}`}>
                                                    <CellValue value={feature.values[plan.id]} />
                                                </div>
                                            ))}
                                        </div>
                                    ))}
                                </motion.div>
                            );
                        })}
                    </div>

                    {/* Mobile: Accordion per category */}
                    <div className="lg:hidden space-y-4">
                        {categories.map((cat) => {
                            const Icon = cat.icon;
                            const isOpen = openCategory === cat.title;
                            return (
                                <div key={cat.title} className="border border-gray-200 rounded-2xl overflow-hidden bg-white">
                                    <button
                                        onClick={() => setOpenCategory(isOpen ? null : cat.title)}
                                        className="w-full p-5 flex items-center justify-between gap-3 hover:bg-gray-50 transition-colors"
                                    >
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-sm">
                                                <Icon className="w-4 h-4 text-white" />
                                            </div>
                                            <span className="text-sm font-bold text-gray-900">{cat.title}</span>
                                        </div>
                                        <span className={`text-gray-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                                        </span>
                                    </button>

                                    {isOpen && (
                                        <div className="border-t border-gray-100">
                                            {cat.features.map((feature) => (
                                                <div key={feature.name} className="border-b border-gray-50 last:border-b-0">
                                                    <div className="px-5 pt-4 pb-2">
                                                        <span className="text-sm font-medium text-gray-900">{feature.name}</span>
                                                    </div>
                                                    <div className="grid grid-cols-2 gap-2 px-5 pb-4">
                                                        {plans.map((plan) => (
                                                            <div key={plan.id} className="flex items-center gap-2 text-xs">
                                                                <span className="text-gray-400 font-medium w-16 shrink-0">{plan.name}:</span>
                                                                <CellValue value={feature.values[plan.id]} />
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

        </>
    );
}
