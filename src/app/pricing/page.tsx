'use client';

import React from 'react';
import Link from 'next/link';
import { Check, Zap, Music, Building2, Globe, TrendingUp } from 'lucide-react';

const PricingPage = () => {
    return (
        <div className="min-h-screen bg-black text-white font-sans selection:bg-purple-500 pb-20">
            {/* Header Section */}
            <div className="py-24 px-8 text-center bg-zinc-950 border-b border-zinc-900">
                <h1 className="text-6xl font-black uppercase italic tracking-tighter mb-4">
                    Transparent <span className="text-purple-500 text-glow">Pricing</span>
                </h1>
                <p className="text-zinc-400 text-xl max-w-2xl mx-auto">
                    Choose the plan that fits your stage of the journey. No hidden fees, just pure performance.
                </p>
            </div>

            <div className="max-w-7xl mx-auto px-8 mt-20">
                {/* Core Subscription Tiers */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
                    {/* Artist Tier */}
                    <div className="bg-zinc-900 border border-zinc-800 p-8 flex flex-col group hover:border-purple-500 transition-all duration-500">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-3 bg-purple-500/10 border border-purple-500/20 rounded-lg">
                                <Music className="text-purple-500 w-6 h-6" />
                            </div>
                            <h2 className="text-3xl font-black uppercase italic">Artist Tier</h2>
                        </div>
                        <div className="mb-8">
                            <div className="flex items-baseline gap-2">
                                <span className="text-5xl font-black">$9.99</span>
                                <span className="text-zinc-500 uppercase text-sm font-bold">/ month</span>
                            </div>
                            <p className="text-zinc-400 mt-2 italic text-sm">or $99.99 / year</p>
                        </div>
                        <ul className="space-y-4 flex-1">
                            <FeatureItem text="Business Profile and EPK" />
                            <FeatureItem text="Unlimited Gig Submissions" />
                            <FeatureItem text="Automated Calendar Scheduling" />
                            <FeatureItem text="Automated Contacting & I-9 Forms" />
                            <FeatureItem text="Venue & Booking Directory Access" />
                        </ul>
                        <button className="mt-12 w-full bg-purple-600 py-4 font-black uppercase italic hover:bg-purple-500 transition-all">
                            Get Artist Tier
                        </button>
                    </div>

                    {/* Venue Tier */}
                    <div className="bg-zinc-900 border border-zinc-800 p-8 flex flex-col group hover:border-blue-500 transition-all duration-500">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-3 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                                <Building2 className="text-blue-500 w-6 h-6" />
                            </div>
                            <h2 className="text-3xl font-black uppercase italic">Venue Tier</h2>
                        </div>
                        <div className="mb-8">
                            <div className="flex items-baseline gap-2">
                                <span className="text-5xl font-black">$19.99</span>
                                <span className="text-zinc-500 uppercase text-sm font-bold">/ month</span>
                            </div>
                            <p className="text-zinc-400 mt-2 italic text-sm">or $199.99 / year</p>
                        </div>
                        <ul className="space-y-4 flex-1">
                            <FeatureItem text="Venue Profile & Calendar Management" />
                            <FeatureItem text="Email Management" />
                            <FeatureItem text="Automated Payments" />
                            <FeatureItem text="Negotiable Agreements" />
                            <FeatureItem text="Cancellation Fill-ins" />
                            <FeatureItem text="Access to National Band Directory" />
                            <FeatureItem text="Swipe to Book" />
                        </ul>
                        <button className="mt-12 w-full bg-blue-600 py-4 font-black uppercase italic hover:bg-blue-500 transition-all">
                            Get Venue Tier
                        </button>
                    </div>
                </div>

                {/* Specialized Services */}
                <h3 className="text-4xl font-black uppercase italic tracking-tighter mb-12 text-center">
                    Specialized <span className="text-zinc-500">Services</span>
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Help Book a Tour */}
                    <div className="bg-zinc-950 border border-zinc-900 p-8 hover:border-white/20 transition-all">
                        <div className="p-4 bg-zinc-900 rounded-full w-fit mb-6">
                            <Globe className="text-white w-6 h-6" />
                        </div>
                        <h4 className="text-2xl font-black uppercase italic mb-2">Help Book a Tour</h4>
                        <p className="text-zinc-500 text-sm mb-6 leading-relaxed">
                            We coordinate with venues to secure a route that works best for you. (10 shows minimum)
                        </p>
                        <div className="text-3xl font-black mb-8 underline decoration-purple-500 underline-offset-8">$229</div>
                        <button className="w-full border border-white/10 py-3 font-bold uppercase text-sm hover:bg-white hover:text-black transition-all">
                            Enquire Now
                        </button>
                    </div>

                    {/* Media Consultation */}
                    <div className="bg-zinc-950 border border-zinc-900 p-8 hover:border-white/20 transition-all">
                        <div className="p-4 bg-zinc-900 rounded-full w-fit mb-6">
                            <TrendingUp className="text-white w-6 h-6" />
                        </div>
                        <h4 className="text-2xl font-black uppercase italic mb-2">Media Consultation</h4>
                        <p className="text-zinc-500 text-sm mb-6 leading-relaxed">
                            Full media evaluation including website, socials, reviews, and press strategy.
                        </p>
                        <div className="text-3xl font-black mb-8 underline decoration-purple-500 underline-offset-8">$49.99</div>
                        <button className="w-full border border-white/10 py-3 font-bold uppercase text-sm hover:bg-white hover:text-black transition-all">
                            Get Evaluation
                        </button>
                    </div>

                    {/* 30 Day Maximizer */}
                    <div className="bg-zinc-950 border border-zinc-900 p-8 hover:border-white/20 transition-all">
                        <div className="p-4 bg-zinc-900 rounded-full w-fit mb-6">
                            <Zap className="text-white w-6 h-6" />
                        </div>
                        <h4 className="text-2xl font-black uppercase italic mb-2">30 Day Maximizer</h4>
                        <p className="text-zinc-500 text-sm mb-6 leading-relaxed">
                            Automatically filled calendar per presaved parameters prioritizing gigs that fit your needs.
                        </p>
                        <div className="text-3xl font-black mb-8 underline decoration-purple-500 underline-offset-8">$29.99</div>
                        <button className="w-full border border-white/10 py-3 font-bold uppercase text-sm hover:bg-white hover:text-black transition-all">
                            Boost My Gigs
                        </button>
                    </div>
                </div>
            </div>

            {/* Support Bar */}
            <div className="mt-20 p-12 bg-zinc-950 border-t border-zinc-900 text-center">
                <p className="text-zinc-500 italic text-sm">
                    &quot;Transparent tiers. Automated growth. FindABandToday.&quot;
                </p>
                <div className="mt-4">
                    <Link href="/" className="text-zinc-600 hover:text-white transition-colors uppercase text-xs font-bold tracking-widest">Back to Home</Link>
                </div>
            </div>
        </div>
    );
};

const FeatureItem = ({ text }: { text: string }) => (
    <li className="flex gap-4 items-center">
        <div className="p-1 bg-zinc-800 rounded-full">
            <Check className="w-3 h-3 text-zinc-400" />
        </div>
        <span className="text-zinc-300 text-sm font-medium">{text}</span>
    </li>
);

export default PricingPage;
