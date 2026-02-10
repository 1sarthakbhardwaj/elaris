'use client';

import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const platformItems = [
    { label: 'Elaris Creative', description: 'Agentic infrastructure for brand-safe advertising at scale.', href: 'http://studio.elarislabs.ai/', badge: 'LIVE' },
    { label: 'Creator Mode (UGC)', description: 'AI-generated avatars & user-style content', href: '#', badge: 'BETA' },
    { label: 'Audio Intelligence', description: 'Text-to-speech & multi-lingual dubbing', href: '#', badge: 'COMING SOON' },
    { label: 'The Compliance Engine', description: 'Automated brand safety & guardrails', href: '#', badge: 'COMING SOON' },
];

const navLinks = [
    { label: 'Features', href: '#features' },
    { label: 'Showcase', href: '#showcase' },
];

export function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [platformDropdownOpen, setPlatformDropdownOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const closeTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const openDropdown = useCallback(() => {
        if (closeTimeout.current) { clearTimeout(closeTimeout.current); closeTimeout.current = null; }
        setPlatformDropdownOpen(true);
    }, []);

    const closeDropdown = useCallback(() => {
        closeTimeout.current = setTimeout(() => setPlatformDropdownOpen(false), 150);
    }, []);

    return (
        <motion.nav 
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass' : 'bg-transparent'}`}
        >
            <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                <a href="#" className="flex items-center gap-2 group">
                    <div className="relative w-8 h-8">
                        <div className="absolute inset-0 bg-gradient-to-tr from-purple-600 to-pink-500 rounded-lg opacity-80 blur-[2px] group-hover:blur-[4px] transition-all duration-300"></div>
                        <div className="relative w-full h-full bg-black rounded-lg flex items-center justify-center border border-white/10">
                            <span className="text-white text-[10px] font-bold bg-gradient-to-tr from-purple-400 to-pink-400 bg-clip-text text-transparent">EL</span>
                        </div>
                    </div>
                    <span className="text-[16px] font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">Elaris Labs</span>
                </a>

                <div className="hidden md:flex items-center gap-8">
                    <div className="relative" onMouseEnter={openDropdown} onMouseLeave={closeDropdown}>
                        <button className="text-[14px] text-gray-600 hover:text-gray-900 transition-colors font-medium flex items-center gap-1 group">
                            Products 
                            <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${platformDropdownOpen ? 'rotate-180 text-purple-600' : 'text-gray-400 group-hover:text-purple-600'}`} />
                        </button>
                        <AnimatePresence>
                            {platformDropdownOpen && (
                                <motion.div 
                                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                    transition={{ duration: 0.2 }}
                                    className="absolute top-full left-0 pt-4 w-80 z-50"
                                >
                                    <div className="bg-white/90 backdrop-blur-xl rounded-xl border border-white/20 shadow-2xl shadow-purple-500/10 p-2 overflow-hidden ring-1 ring-black/5">
                                        {platformItems.map((item) => (
                                            <a 
                                                key={item.label} 
                                                href={item.href} 
                                                target={item.href.startsWith('http') ? '_blank' : undefined} 
                                                rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined} 
                                                onClick={() => setPlatformDropdownOpen(false)} 
                                                className="block px-3 py-3 rounded-lg hover:bg-gradient-to-r hover:from-purple-50 hover:to-white transition-all group"
                                            >
                                                <div className="flex items-start justify-between gap-2">
                                                    <div>
                                                        <div className="text-[13px] font-semibold text-gray-900 group-hover:text-purple-600 transition-colors">{item.label}</div>
                                                        <div className="text-[11px] text-gray-500 mt-0.5">{item.description}</div>
                                                    </div>
                                                    {item.badge && (
                                                        <Badge variant="secondary" className={`text-[9px] px-1.5 py-0 h-5 shrink-0 ${
                                                            item.badge === 'LIVE' 
                                                                ? 'bg-emerald-100 text-emerald-700 border-emerald-200 shadow-[0_0_8px_rgba(16,185,129,0.3)]' 
                                                                : 'bg-gray-100 text-gray-500 border-gray-200'
                                                        }`}>
                                                            {item.badge}
                                                        </Badge>
                                                    )}
                                                </div>
                                            </a>
                                        ))}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                    {navLinks.map((link) => (
                        <a key={link.label} href={link.href} className="text-[14px] text-gray-600 hover:text-gray-900 transition-colors font-medium relative group">
                            {link.label}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 group-hover:w-full transition-all duration-300 ease-out" />
                        </a>
                    ))}
                </div>

                <div className="hidden md:block">
                    <Button size="sm" asChild className="h-9 rounded-full bg-gray-900 hover:bg-black text-white text-[13px] px-5 shadow-lg shadow-gray-900/20 hover:shadow-purple-500/20 transition-all duration-300 border border-white/10">
                        <a href="https://calendly.com/kk-sharma-elarislabs/30min" target="_blank" rel="noopener noreferrer">Book a Demo</a>
                    </Button>
                </div>

                <button className="md:hidden text-gray-900 p-1.5" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                    {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="md:hidden bg-white/95 backdrop-blur-xl border-b border-gray-200 overflow-hidden"
                    >
                        <div className="px-6 py-6 flex flex-col gap-4">
                            <div className="text-[11px] font-bold text-purple-600 uppercase tracking-wider">Products</div>
                            {platformItems.map((item) => (
                                <a key={item.label} href={item.href} className="flex items-center justify-between text-[14px] text-gray-700 hover:text-purple-600 py-1" onClick={() => setIsMobileMenuOpen(false)}>
                                    {item.label}
                                    {item.badge && <Badge variant="outline" className="text-[9px] h-4 px-1">{item.badge}</Badge>}
                                </a>
                            ))}
                            <div className="border-t border-gray-100 pt-2 mt-1">
                                {navLinks.map((link) => (
                                    <a key={link.label} href={link.href} className="block text-[14px] text-gray-700 hover:text-gray-900 py-2 font-medium" onClick={() => setIsMobileMenuOpen(false)}>{link.label}</a>
                                ))}
                            </div>
                            <Button size="lg" asChild className="w-full rounded-xl bg-gradient-to-r from-gray-900 to-gray-800 text-white mt-2 shadow-xl">
                                <a href="https://calendly.com/kk-sharma-elarislabs/30min" target="_blank" rel="noopener noreferrer">Book a Demo</a>
                            </Button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
