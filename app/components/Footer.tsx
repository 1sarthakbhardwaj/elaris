'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const links = {
    Products: [
        { label: 'Elaris Creative', href: 'http://studio.elarislabs.ai/' },
        { label: 'Creator Mode', href: '#' },
        { label: 'Audio Intelligence', href: '#' },
        { label: 'Compliance Engine', href: '#' },
    ],
    Company: [
        { label: 'Features', href: '#features' },
        { label: 'Showcase', href: '#showcase' },
        { label: 'Contact', href: 'mailto:hello@elarislabs.ai' },
    ],
    Legal: [
        { label: 'Privacy', href: '/privacy-policy' },
        { label: 'Terms', href: '/terms' },
    ],
};

export function Footer() {
    return (
        <footer className="border-t border-gray-100 bg-white relative overflow-hidden">
             <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-gradient-to-r from-purple-100/40 via-pink-100/40 to-blue-100/40 blur-[80px] -z-10" />
            
            {/* CTA */}
            <div className="max-w-7xl mx-auto px-6 py-24">
                <div className="text-center max-w-2xl mx-auto">
                    <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 mb-6">
                        Ready to optimize your ad creative?
                    </h2>
                    <p className="text-lg text-gray-500 mb-10 font-light">Join the agencies and brands using Elaris to drive performance.</p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Button size="lg" asChild className="rounded-full bg-gray-900 hover:bg-black text-white px-8 h-12 text-sm font-medium shadow-xl shadow-purple-500/10 hover:shadow-purple-500/30 transition-all">
                            <a href="http://studio.elarislabs.ai/" target="_blank" rel="noopener noreferrer">
                                Get Started <ArrowRight className="w-4 h-4 ml-2" />
                            </a>
                        </Button>
                        <Button size="lg" variant="outline" asChild className="rounded-full border-gray-200 text-gray-600 hover:bg-white hover:text-purple-600 px-8 h-12 text-sm font-medium hover:border-purple-200 hover:shadow-md transition-all">
                            <a href="https://calendly.com/kk-sharma-elarislabs/30min" target="_blank" rel="noopener noreferrer">Talk to Sales</a>
                        </Button>
                    </div>
                </div>
            </div>

            <div className="border-t border-gray-100" />

            {/* Links */}
            <div className="max-w-7xl mx-auto px-6 py-16">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
                    <div className="col-span-2 md:col-span-1">
                        <a href="#" className="flex items-center gap-2 mb-4">
                            <div className="w-8 h-8 rounded-lg bg-black flex items-center justify-center border border-white/20">
                                <span className="text-white text-[10px] font-bold bg-gradient-to-tr from-purple-400 to-pink-400 bg-clip-text text-transparent">EL</span>
                            </div>
                            <span className="text-lg font-bold text-gray-900">Elaris Labs</span>
                        </a>
                        <p className="text-sm text-gray-500 max-w-xs leading-relaxed">
                            AI agents that optimize ad creative for performance at scale. Built for modern growth teams.
                        </p>
                    </div>
                    {Object.entries(links).map(([category, items]) => (
                        <div key={category}>
                            <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4">{category}</h3>
                            <ul className="space-y-3">
                                {items.map((link) => (
                                    <li key={link.label}>
                                        <a href={link.href} className="text-sm text-gray-500 hover:text-purple-600 transition-colors">{link.label}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>

            <div className="border-t border-gray-100 bg-gray-50/50">
                <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
                    <p className="text-xs text-gray-400">&copy; {new Date().getFullYear()} Elaris Labs. All rights reserved.</p>
                    <div className="flex gap-6">
                        {/* Social icons could go here */}
                    </div>
                </div>
            </div>
        </footer>
    );
}
