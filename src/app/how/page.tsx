'use client';

import React from 'react';
import { ShieldCheck, Zap, Calendar, FileText, Smartphone, Users } from 'lucide-react';

const HowItWorks = () => {
    return (
        <div className="min-h-screen bg-black text-white font-sans overflow-x-hidden">
            {/* Header Section */}
            <div className="py-20 px-8 text-center bg-zinc-950 border-b border-zinc-900">
                <h1 className="text-6xl font-black uppercase italic tracking-tighter mb-4">
                    Let us <span className="text-purple-500 text-glow">do the hard work</span> for you
                </h1>
                <p className="text-zinc-400 text-xl max-w-2xl mx-auto">
                    We handle the contracts, compliance, and cash. You focus on the performance.
                </p>
            </div>

            <div className="flex flex-col lg:flex-row">
                {/* FOR BANDS SECTION */}
                <section className="flex-1 p-8 lg:p-16 border-b lg:border-b-0 lg:border-r border-zinc-900 bg-gradient-to-br from-black to-zinc-950">
                    <div className="mb-12">
                        <h2 className="text-4xl font-black uppercase text-purple-500 italic mb-6">For Bands</h2>
                        <p className="text-zinc-400 text-lg mb-8">Do 6 months of booking in 48 hours. Secure your tour routing without the cold-calling nightmare.</p>
                    </div>

                    <div className="grid gap-10">
                        <Feature icon={<Zap className="text-purple-500" />} title="Local or National Matching" desc="Set your scope (Local, Regional, or National). We scan every venue date and match your availability instantly." />
                        <Feature icon={<ShieldCheck className="text-purple-500" />} title="Locked-In Deposits" desc="Commitments are secured via Stripe deposits. Gas money is guaranteed before you load the van." />
                        <Feature icon={<FileText className="text-purple-500" />} title="Automated I-9s & EPKs" desc="One-click tax compliance and professional press kits generated from your performance media." />
                        <Feature icon={<Users className="text-purple-500" />} title="Negotiation Power" desc="Submit offers with Guarantees, Splits, or custom 'Willing to Negotiate' flags." />
                    </div>

                    <button className="mt-16 w-full bg-purple-600 py-6 text-2xl font-black uppercase italic hover:bg-purple-500 transition-all shadow-lg shadow-purple-900/20">
                        Book Your Next Gig ($99/yr)
                    </button>
                </section>

                {/* FOR TALENT BUYERS SECTION */}
                <section className="flex-1 p-8 lg:p-16 bg-gradient-to-bl from-black to-zinc-950">
                    <div className="mb-12">
                        <h2 className="text-4xl font-black uppercase text-blue-500 italic mb-6">For Talent Buyers</h2>
                        <p className="text-zinc-400 text-lg mb-8">The automated agency. Vetted acts, zero paperwork, and strict cancellation protection.</p>
                    </div>

                    <div className="grid gap-10">
                        <Feature icon={<Smartphone className="text-blue-500" />} title="Swipe-to-Book" desc="High-speed submission review. Swipe right on the acts that fit your vibe and date." />
                        <Feature icon={<Calendar className="text-blue-500" />} title="Automated DOS Payments" desc="Day-of-Show payments are handled automatically. No more writing checks in the dark." />
                        <Feature icon={<ShieldCheck className="text-blue-500" />} title="Strict Cancellation Policy" desc="Legally binding automated contracts protect your venue from last-minute no-shows." />
                        <Feature icon={<Zap className="text-blue-500" />} title="Vetted EPK Links" desc="Instant access to full audio, video, and riders. No more dead links or outdated bios." />
                    </div>

                    <button className="mt-16 w-full bg-blue-600 py-6 text-2xl font-black uppercase italic hover:bg-blue-500 transition-all shadow-lg shadow-blue-900/20">
                        Fill Your Calendar ($199/yr)
                    </button>
                </section>
            </div>

            {/* Footer Support Bar */}
            <div className="p-12 bg-zinc-950 border-t border-zinc-900 text-center">
                <p className="text-zinc-500 italic text-sm">
                    &quot;FindABandToday.com: Vetted Acts. Automated Compliance. Guaranteed Professionalism.&quot;
                </p>
            </div>
        </div>
    );
};

const Feature = ({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) => (
    <div className="flex gap-6 items-start group">
        <div className="p-3 bg-zinc-900 border border-zinc-800 rounded-lg group-hover:border-zinc-500 transition-colors">
            {icon}
        </div>
        <div>
            <h3 className="text-xl font-bold uppercase tracking-tight mb-1">{title}</h3>
            <p className="text-zinc-500 leading-relaxed">{desc}</p>
        </div>
    </div>
);

export default HowItWorks;
