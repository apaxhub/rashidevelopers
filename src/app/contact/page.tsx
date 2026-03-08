import React from 'react';
import ContactHero from '@/components/contact/ContactHero';
import ContactMain from '@/components/contact/ContactMain';

import ContactMap from '@/components/contact/ContactMap';

export const metadata = {
    title: 'Contact Portfolio | Aura Estates',
    description: 'Schedule a private site visit and explore our premium real estate portfolio.',
};

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-bg">
            <ContactHero />
            <ContactMain />
            <ContactMap />
        </main>
    );
}
