import { Navbar } from '@/app/components/Navbar';
import { Footer } from '@/app/components/Footer';
import { CheckoutContent } from '@/app/components/CheckoutContent';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Checkout - Elaris Labs',
    description: 'Complete your Elaris Labs plan selection.',
};

export default function CheckoutPage() {
    return (
        <main className="min-h-screen bg-white overflow-x-hidden">
            <Navbar />
            <CheckoutContent />
            <Footer />
        </main>
    );
}
