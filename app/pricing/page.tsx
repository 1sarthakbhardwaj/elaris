import { Navbar } from '@/app/components/Navbar';
import { Footer } from '@/app/components/Footer';
import { PricingContent } from '@/app/components/PricingContent';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Pricing - Elaris Labs',
    description: 'Simple, transparent pricing for AI-powered ad creative generation. Start free, scale as you grow.',
};

export default function PricingPage() {
    return (
        <main className="min-h-screen bg-white overflow-x-hidden">
            <Navbar />
            <PricingContent />
            <Footer />
        </main>
    );
}
