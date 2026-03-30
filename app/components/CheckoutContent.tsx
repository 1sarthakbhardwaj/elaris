'use client';

import { motion } from 'framer-motion';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Check, MessageSquare, ArrowLeft, Sparkles, Shield, Zap } from 'lucide-react';
import Link from 'next/link';

const planDetails: Record<string, { name: string; monthlyPrice: number; credits: string; features: string[] }> = {
    growth: {
        name: 'Growth',
        monthlyPrice: 49,
        credits: '500 Credits / mo',
        features: [
            '500 Credits per month',
            '~50 Images or 10 Videos',
            '1 Brand Identity',
            'Standard rendering speed',
            'Up to 3 team seats',
            'Email support',
        ],
    },
    scale: {
        name: 'Scale',
        monthlyPrice: 399,
        credits: '5,000 Credits / mo',
        features: [
            '5,000 Credits per month',
            '~500 Images or 100 Videos',
            'Up to 5 Brand Identities',
            'Priority rendering speed',
            'Automated A/B testing',
            'Advanced analytics dashboard',
            'Up to 10 team seats',
            'Approval workflows',
            'Priority email & chat support',
        ],
    },
    enterprise: {
        name: 'Enterprise',
        monthlyPrice: -1,
        credits: '25,000+ Credits / mo',
        features: [
            '25,000+ Credits per month',
            'Unlimited Brand Identities',
            'Highest priority rendering',
            'Predictive scoring (pre-live)',
            'Custom reporting & analytics',
            'Unlimited team seats',
            'Multi-tier approval workflows',
            'SSO & Custom API access',
            '24/7 dedicated CSM',
        ],
    },
};

function CheckoutInner() {
    const searchParams = useSearchParams();
    const planId = searchParams.get('plan') || 'scale';
    const billing = searchParams.get('billing') || 'monthly';
    const isAnnual = billing === 'annual';

    const plan = planDetails[planId] || planDetails.scale;
    const isEnterprise = planId === 'enterprise';

    const displayPrice = isEnterprise
        ? 'Custom'
        : `$${isAnnual ? Math.round(plan.monthlyPrice * 0.8) : plan.monthlyPrice}`;
    const period = isEnterprise ? '' : '/mo';

    return (
        <>
            <section className="relative pt-36 pb-20 px-6 overflow-hidden">
                <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
                    <div className="absolute top-[-10%] left-[20%] w-[500px] h-[500px] bg-purple-200/20 rounded-full blur-[100px] animate-blob" />
                    <div className="absolute top-[20%] right-[-5%] w-[400px] h-[400px] bg-pink-200/20 rounded-full blur-[100px] animate-blob animation-delay-2000" />
                </div>

                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Link href="/pricing" className="inline-flex items-center gap-2 text-gray-400 hover:text-gray-600 transition-colors mb-10 text-sm group">
                            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" /> Back to Pricing
                        </Link>
                    </motion.div>

                    <div className="grid lg:grid-cols-5 gap-10 lg:gap-14">
                        {/* Plan Summary */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="lg:col-span-2"
                        >
                            <div className="sticky top-28">
                                <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-lg">
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-lg shadow-purple-500/20">
                                            <Sparkles className="w-5 h-5 text-white" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-gray-900">{plan.name} Plan</h3>
                                            <p className="text-xs text-gray-500">{plan.credits}</p>
                                        </div>
                                    </div>

                                    <div className="mb-6 pb-6 border-b border-gray-100">
                                        <div className="flex items-baseline gap-1">
                                            <span className="text-4xl font-bold tracking-tight text-gray-900">{displayPrice}</span>
                                            {period && <span className="text-base text-gray-500">{period}</span>}
                                        </div>
                                        {isAnnual && !isEnterprise && (
                                            <p className="text-xs text-gray-400 mt-1.5">
                                                <span className="line-through">${plan.monthlyPrice}/mo</span>
                                                <span className="ml-1.5 text-emerald-500 font-semibold">20% off — billed annually</span>
                                            </p>
                                        )}
                                        {isAnnual && !isEnterprise && (
                                            <p className="text-sm text-gray-600 mt-2 font-medium">
                                                ${Math.round(plan.monthlyPrice * 0.8) * 12}/year total
                                            </p>
                                        )}
                                    </div>

                                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">What&apos;s included</h4>
                                    <ul className="space-y-3">
                                        {plan.features.map((f) => (
                                            <li key={f} className="flex items-start gap-3 text-sm text-gray-700">
                                                <Check className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                                                {f}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </motion.div>

                        {/* Contact Sales CTA */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="lg:col-span-3"
                        >
                            <div className="rounded-2xl border border-gray-200 bg-white p-8 sm:p-10 shadow-lg">
                                <div className="text-center max-w-md mx-auto">
                                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mx-auto mb-6 shadow-xl shadow-purple-500/20">
                                        <MessageSquare className="w-8 h-8 text-white" />
                                    </div>

                                    <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 mb-4">
                                        Let&apos;s get you set up
                                    </h2>
                                    <p className="text-gray-500 mb-8 leading-relaxed">
                                        We&apos;re currently onboarding new customers through our sales team to ensure the best experience. Schedule a quick call and we&apos;ll have you running in no time.
                                    </p>

                                    <div className="space-y-4 mb-10">
                                        <div className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 border border-gray-100 text-left">
                                            <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center shrink-0">
                                                <Zap className="w-5 h-5 text-purple-600" />
                                            </div>
                                            <div>
                                                <p className="text-sm font-semibold text-gray-900">Personalized onboarding</p>
                                                <p className="text-xs text-gray-500">We&apos;ll configure your brand memory and workspace</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 border border-gray-100 text-left">
                                            <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center shrink-0">
                                                <Shield className="w-5 h-5 text-emerald-600" />
                                            </div>
                                            <div>
                                                <p className="text-sm font-semibold text-gray-900">No commitment required</p>
                                                <p className="text-xs text-gray-500">Explore the platform risk-free before you decide</p>
                                            </div>
                                        </div>
                                    </div>

                                    <Button
                                        size="lg"
                                        asChild
                                        className="w-full rounded-xl h-13 text-base font-semibold bg-gray-900 text-white hover:bg-black shadow-xl hover:shadow-2xl transition-all hover:scale-[1.02]"
                                    >
                                        <a href="https://calendly.com/sarthak-bhardwaj-elarislabs/30min" target="_blank" rel="noopener noreferrer">
                                            Schedule a Call
                                            <ArrowRight className="w-5 h-5 ml-2" />
                                        </a>
                                    </Button>

                                    <p className="text-xs text-gray-400 mt-4">
                                        Prefer email? Reach us at{' '}
                                        <a href="mailto:hello@elarislabs.ai" className="text-purple-500 hover:text-purple-600 underline underline-offset-2">
                                            hello@elarislabs.ai
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    );
}

export function CheckoutContent() {
    return (
        <Suspense fallback={
            <div className="pt-36 pb-20 px-6 text-center">
                <div className="w-8 h-8 border-2 border-gray-200 border-t-purple-500 rounded-full animate-spin mx-auto" />
            </div>
        }>
            <CheckoutInner />
        </Suspense>
    );
}
