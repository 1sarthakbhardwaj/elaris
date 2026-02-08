'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useState } from 'react';

const platformItems = [
    { label: 'Elaris Creative', description: 'Agentic infrastructure for brand-safe advertising at scale.', href: 'http://studio.elarislabs.ai/', badge: 'LIVE' },
    { label: 'Creator Mode (UGC)', description: 'AI-generated avatars & user-style content', href: '#platform-creator', badge: 'BETA' },
    { label: 'Audio Intelligence', description: 'Text-to-speech & multi-lingual dubbing', href: '#platform-audio', badge: 'COMING SOON' },
    { label: 'The Compliance Engine', description: 'Automated brand safety & guardrails', href: '#platform-compliance', badge: 'COMING SOON' },
];

const navLinks = [
    { label: 'Why Elaris', href: '#why-elaris' },
    { label: 'Showcase', href: '#Showcase' },
];

export function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [platformDropdownOpen, setPlatformDropdownOpen] = useState(false);
    // const [researchDropdownOpen, setResearchDropdownOpen] = useState(false);

    return (
        <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed top-0 left-0 right-0 z-50"
        >
            <div className="mx-auto px-6 py-4">
                <div className="flex items-center justify-between glass rounded-full px-6 py-3 border border-black/8 backdrop-blur-md">
                    {/* Logo */}
                    <a href="#" className="flex items-center gap-2.5 group">
                        <div className="relative">
                            <div className="absolute inset-0 bg-purple-500 rounded-md blur-sm opacity-40 group-hover:opacity-60 transition-opacity" />
                            <div className="relative w-7 h-7 rounded-md bg-gradient-to-br from-purple-600 to-purple-700" />
                        </div>
                        <span className="text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                            Elaris Labs
                        </span>
                    </a>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        {/* Platform Dropdown */}
                        <div 
                            className="relative"
                            onMouseEnter={() => setPlatformDropdownOpen(true)}
                            onMouseLeave={() => setPlatformDropdownOpen(false)}
                        >
                            <button className="text-sm text-gray-600 hover:text-gray-900 transition-colors relative group font-medium flex items-center gap-1">
                                Products
                                <ChevronDown className="w-4 h-4" />
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 group-hover:w-full transition-all duration-300" />
                            </button>
                            
                            <AnimatePresence>
                                {platformDropdownOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 10 }}
                                        transition={{ duration: 0.2 }}
                                        className="absolute top-full left-0 mt-2 w-80 bg-white/95 backdrop-blur-xl rounded-2xl border border-black/8 p-2 shadow-xl"
                                    >
                                        {platformItems.map((item) => (
                                            <a
                                                key={item.label}
                                                href={item.href}
                                                className="block p-3 rounded-xl hover:bg-purple-50/50 transition-colors group"
                                            >
                                                <div className="flex items-start justify-between gap-2">
                                                    <div>
                                                        <div className="text-sm font-semibold text-gray-900 group-hover:text-purple-600 transition-colors">
                                                            {item.label}
                                                        </div>
                                                        <div className="text-xs text-gray-600 mt-0.5">
                                                            {item.description}
                                                        </div>
                                                    </div>
                                                    {item.badge && (
                                                        <Badge 
                                                            variant={item.badge === 'BETA' ? 'default' : item.badge === 'LIVE' ? 'default' : 'secondary'} 
                                                            className={`text-[10px] whitespace-nowrap ${
                                                                item.badge === 'LIVE' 
                                                                    ? 'bg-emerald-500 hover:bg-emerald-600 animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.5)]' 
                                                                    : ''
                                                            }`}
                                                        >
                                                            {item.badge}
                                                        </Badge>
                                                    )}
                                                </div>
                                            </a>
                                        ))}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        {/* Elaris Research Dropdown */}
                        {/* <div 
                            className="relative"
                            onMouseEnter={() => setResearchDropdownOpen(true)}
                            onMouseLeave={() => setResearchDropdownOpen(false)}
                        >
                            <button className="text-sm text-gray-600 hover:text-gray-900 transition-colors relative group font-medium flex items-center gap-1">
                                Elaris Research
                                <ChevronDown className="w-4 h-4" />
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 group-hover:w-full transition-all duration-300" />
                            </button>
                            
                            <AnimatePresence>
                                {researchDropdownOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 10 }}
                                        transition={{ duration: 0.2 }}
                                        className="absolute top-full left-0 mt-2 w-80 bg-white/95 backdrop-blur-xl rounded-2xl border border-black/8 p-2 shadow-xl"
                                    >
                                        {researchItems.map((item) => (
                                            <a
                                                key={item.label}
                                                href={item.href}
                                                className="block p-3 rounded-xl hover:bg-purple-50/50 transition-colors group"
                                            >
                                                <div className="flex items-start justify-between gap-2">
                                                    <div>
                                                        <div className="text-sm font-semibold text-gray-900 group-hover:text-purple-600 transition-colors">
                                                            {item.label}
                                                        </div>
                                                        <div className="text-xs text-gray-600 mt-0.5">
                                                            {item.description}
                                                        </div>
                                                    </div>
                                                    {item.badge && (
                                                        <Badge 
                                                            variant={item.badge === 'LIVE' ? 'default' : 'secondary'} 
                                                            className={`text-[10px] whitespace-nowrap ${
                                                                item.badge === 'LIVE' 
                                                                    ? 'bg-emerald-500 hover:bg-emerald-600 animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.5)]' 
                                                                    : ''
                                                            }`}
                                                        >
                                                            {item.badge}
                                                        </Badge>
                                                    )}
                                                </div>
                                            </a>
                                        ))}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div> */}

                        {/* Regular Nav Links */}
                        {navLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                className="text-sm text-gray-600 hover:text-gray-900 transition-colors relative group font-medium"
                            >
                                {link.label}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 group-hover:w-full transition-all duration-300" />
                            </a>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <div className="hidden md:block">
                        <Button
                            size="sm"
                            asChild
                            className="rounded-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-sm px-5 text-white shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-all"
                        >
                            <a href="https://calendly.com/kk-sharma-elarislabs/30min" target="_blank" rel="noopener noreferrer">
                                Book a Demo
                            </a>
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-gray-900 p-2"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="md:hidden mt-2 glass rounded-2xl border border-black/8 backdrop-blur-md p-4"
                    >
                        <div className="flex flex-col gap-4">
                            {/* Platform Section */}
                            <div>
                                <div className="text-sm font-semibold text-gray-900 mb-2">Platform</div>
                                {platformItems.map((item) => (
                                    <a
                                        key={item.label}
                                        href={item.href}
                                        className="block py-2 pl-3 text-sm text-gray-600 hover:text-gray-900 transition-colors"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        <div className="flex items-center justify-between">
                                            <span>{item.label}</span>
                                            {item.badge && (
                                                <Badge 
                                                    variant={item.badge === 'BETA' ? 'default' : item.badge === 'LIVE' ? 'default' : 'secondary'} 
                                                    className={`text-[9px] ${
                                                        item.badge === 'LIVE' 
                                                            ? 'bg-emerald-500 hover:bg-emerald-600 animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.5)]' 
                                                            : ''
                                                    }`}
                                                >
                                                    {item.badge}
                                                </Badge>
                                            )}
                                        </div>
                                    </a>
                                ))}
                            </div>

                            {/* Research Section */}
                            {/* <div>
                                <div className="text-sm font-semibold text-gray-900 mb-2">Elaris Research</div>
                                {researchItems.map((item) => (
                                    <a
                                        key={item.label}
                                        href={item.href}
                                        className="block py-2 pl-3 text-sm text-gray-600 hover:text-gray-900 transition-colors"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        <div className="flex items-center justify-between">
                                            <span>{item.label}</span>
                                            <Badge 
                                                variant={item.badge === 'LIVE' ? 'default' : 'secondary'} 
                                                className={`text-[9px] ${
                                                    item.badge === 'LIVE' 
                                                        ? 'bg-emerald-500 hover:bg-emerald-600 animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.5)]' 
                                                        : ''
                                                }`}
                                            >
                                                {item.badge}
                                            </Badge>
                                        </div>
                                    </a>
                                ))}
                            </div> */}

                            {/* Regular Links */}
                            {navLinks.map((link) => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    className="text-gray-600 hover:text-gray-900 transition-colors py-2 font-medium"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.label}
                                </a>
                            ))}
                            
                            <Button
                                size="sm"
                                asChild
                                className="w-full rounded-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-lg"
                            >
                                <a href="https://calendly.com/kk-sharma-elarislabs/30min" target="_blank" rel="noopener noreferrer">
                                    Book a Demo
                                </a>
                            </Button>
                        </div>
                    </motion.div>
                )}
            </div>
        </motion.nav>
    );
}
