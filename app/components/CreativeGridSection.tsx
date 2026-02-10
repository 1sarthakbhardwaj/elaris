'use client';

import { Marquee } from '@/components/ui/marquee';
import { motion } from 'framer-motion';

const images = [
    { src: '/images/1.png', alt: 'Ad creative 1' },
    { src: '/images/2.png', alt: 'Ad creative 2' },
    { src: '/images/3.png', alt: 'Ad creative 3' },
    { src: '/images/4.png', alt: 'Ad creative 4' },
    { src: '/images/5.png', alt: 'Ad creative 5' },
    { src: '/images/6.png', alt: 'Ad creative 6' },
    { src: '/images/7.png', alt: 'Ad creative 7' },
    { src: '/images/8.png', alt: 'Ad creative 8' },
    { src: '/images/9.png', alt: 'Ad creative 9' },
    { src: '/images/10.png', alt: 'Ad creative 10' },
];

const row1 = images.slice(0, 5);
const row2 = images.slice(5);

function ImageCard({ src, alt }: { src: string; alt: string }) {
    return (
        <motion.div 
            whileHover={{ scale: 1.05, rotate: 2 }}
            className="shrink-0 rounded-xl overflow-hidden border border-gray-100 bg-white shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer"
        >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={src} alt={alt} loading="lazy" className="h-48 sm:h-56 md:h-64 w-auto object-contain" />
        </motion.div>
    );
}

export function CreativeGridSection() {
    return (
        <section id="showcase" className="pb-24 pt-4 overflow-hidden">
            <div className="relative space-y-6">
                <Marquee pauseOnHover className="[--duration:40s] [--gap:1.5rem] py-4">
                    {row1.map((img) => <ImageCard key={img.src} {...img} />)}
                </Marquee>
                <Marquee pauseOnHover reverse className="[--duration:45s] [--gap:1.5rem] py-4">
                    {row2.map((img) => <ImageCard key={img.src} {...img} />)}
                </Marquee>
                
                {/* Enhanced Gradient Masks */}
                <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white via-white/80 to-transparent z-10" />
                <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white via-white/80 to-transparent z-10" />
            </div>
        </section>
    );
}
