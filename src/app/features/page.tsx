'use client';

import React from 'react';
import { Navbar } from '@/components/Navbar';
import {
    Zap,
    ShieldCheck,
    Calendar,
    Music,
    Globe,
    FileText,
    Star,
    Smartphone,
    CheckCircle2,
    TrendingUp,
    CreditCard,
    Target
} from 'lucide-react';
import Link from 'next/link';

export default function FeaturesPage() {
    return (
        <div className="min-h-screen bg-black text-white selection:bg-purple-500 pb-20">
            <Navbar />

            {/* Hero Section */}
            <header className="relative py-24 px-8 overflow-hidden text-center border-b border-zinc-900">
                <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 via-black to-black"></div>
                <div className="relative max-w-4xl mx-auto">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-black uppercase tracking-widest mb-8 animate-pulse">
                        <Zap className="w-3 h-3" /> Built for Performance
                    </div>
                    <h1 className="text-6xl md:text-8xl font-black uppercase italic tracking-tighter mb-8 leading-[0.9]">
                        Pure <span className="text-purple-500 drop-shadow-[0_0_15px_rgba(168,85,247,0.4)]">Automation</span><br />
                        Zero <span className="text-zinc-500 italic">Friction</span>
                    </h1>
                    <p className="text-zinc-400 text-xl md:text-2xl font-medium max-w-2xl mx-auto leading-relaxed italic">
                        The world&apos;s first fully automated booking and compliance engine for the touring industry.
                    </p>
                </div>
            </header>

            <main className="max-w-7xl mx-auto px-8 mt-24">
                {/* Core Feature Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <FeatureCard
                        icon={<ShieldCheck className="text-emerald-500" />}
                        title="Automated Compliance"
                        desc="Automated I-9 tax forms and performance contracts for every match."
                        badges={["Compliance", "Legal"]}
                    />
                    <FeatureCard
                        icon={<Globe className="text-blue-500" />}
                        title="Geospatial Routing"
                        desc="Local or National matching ensures your tour stays profitable."
                        badges={["Logistics", "Routing"]}
                    />
                    <FeatureCard
                        icon={<FileText className="text-purple-500" />}
                        title="Verified Tech Riders"
                        desc="Sync stage plots and backline requirements automatically before the load-in."
                        badges={["Technical", "Stage"]}
                    />
                    <FeatureCard
                        icon={<CreditCard className="text-orange-500" />}
                        title="Stripe Payouts"
                        desc="Day-of-show automated payouts. No more waiting by the door at 2 AM. Cash is in your account instantly."
                        badges={["Financial", "Fast"]}
                    />
                    <FeatureCard
                        icon={<Calendar className="text-pink-500" />}
                        title="Live Availability"
                        desc="Sync your external calendar. Venues see exactly when you're open without the email back-and-forth."
                        badges={["Scheduling", "Sync"]}
                    />
                    <FeatureCard
                        icon={<Music className="text-cyan-500" />}
                        title="Digital EPK 2.0"
                        desc="High-fidelity media kits generated from your performance data and social presence."
                        badges={["Marketing", "Press"]}
                    />
                </div>

                {/* Deep Dive Sections */}
                <section className="mt-32 space-y-32">
                    {/* Automation Deep Dive */}
                    <div className="flex flex-col lg:flex-row gap-20 items-center">
                        <div className="flex-1 space-y-8">
                            <h2 className="text-4xl lg:text-5xl font-black uppercase italic tracking-tighter leading-none">
                                The End of <span className="text-purple-500">Manual Booking</span>
                            </h2>
                            <p className="text-zinc-400 text-lg leading-relaxed">
                                Our engine scans thousands of venue dates against your tour parameters. When a match is found, we handle the technical rider submission, I-9 compliance, and contract negotiation automatically. You just confirm the gig.
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-center gap-3 text-zinc-300">
                                    <CheckCircle2 className="text-purple-500 w-5 h-5 shrink-0" />
                                    <span>Instant Technical Rider Verification</span>
                                </li>
                                <li className="flex items-center gap-3 text-zinc-300">
                                    <CheckCircle2 className="text-purple-500 w-5 h-5 shrink-0" />
                                    <span>Secure Deposit Handling via Stripe</span>
                                </li>
                                <li className="flex items-center gap-3 text-zinc-300">
                                    <CheckCircle2 className="text-purple-500 w-5 h-5 shrink-0" />
                                    <span>Automated Cancellation Fill-ins</span>
                                </li>
                            </ul>
                        </div>
                        <div className="flex-1 w-full aspect-square bg-zinc-900 border border-zinc-800 rounded-3xl relative overflow-hidden group">
                            <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 via-transparent to-transparent opacity-50"></div>
                            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black to-transparent"></div>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="p-8 rounded-full bg-purple-500/10 border border-purple-500/20 group-hover:scale-110 transition-transform duration-500">
                                    <Zap className="w-20 h-20 text-purple-500" />
                                </div>
                            </div>
                            <div className="absolute bottom-8 left-8 right-8">
                                <div className="p-4 bg-black/80 backdrop-blur-md border border-zinc-800 rounded-xl space-y-2">
                                    <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest text-zinc-500">
                                        <span>Engine Status</span>
                                        <span className="text-purple-500">Active</span>
                                    </div>
                                    <div className="h-1 bg-zinc-800 rounded-full overflow-hidden">
                                        <div className="h-full bg-purple-500 w-3/4 animate-pulse"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Venue Experience */}
                    <div className="flex flex-col lg:flex-row-reverse gap-20 items-center">
                        <div className="flex-1 space-y-8 text-right lg:text-left">
                            <h2 className="text-4xl lg:text-5xl font-black uppercase italic tracking-tighter leading-none">
                                Built for <span className="text-blue-500 text-glow-blue">Buyers</span>
                            </h2>
                            <p className="text-zinc-400 text-lg leading-relaxed ml-auto">
                                Stop chasing EMAILS. Our Swipe-to-Book interface allows talent buyers to review matched acts, hear their top tracks, and verify their stage plots in seconds. Automated DOS payments ensure you never have to write a check in the dark again.
                            </p>
                            <div className="flex flex-wrap gap-4 justify-end lg:justify-start">
                                <div className="px-6 py-3 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-bold uppercase italic">Zero Paperwork</div>
                                <div className="px-6 py-3 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-bold uppercase italic">Verified Stage Plots</div>
                                <div className="px-6 py-3 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-bold uppercase italic">Automated DOS Payments</div>
                            </div>
                        </div>
                        <div className="flex-1 w-full aspect-square bg-zinc-900 border border-zinc-800 rounded-3xl relative overflow-hidden group">
                            <div className="absolute inset-0 bg-gradient-to-tl from-blue-500/20 via-transparent to-transparent opacity-50"></div>
                            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black to-transparent"></div>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="p-8 rounded-full bg-blue-500/10 border border-blue-500/20 group-hover:scale-110 transition-transform duration-500">
                                    <Smartphone className="w-20 h-20 text-blue-500" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Final CTA */}
                <div className="mt-40 p-12 lg:p-20 rounded-[2.5rem] bg-gradient-to-br from-zinc-900 via-black to-zinc-950 border border-zinc-800 text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 blur-[120px] rounded-full -mr-48 -mt-48"></div>
                    <div className="relative z-10 space-y-8">
                        <TrendingUp className="w-16 h-16 text-white mx-auto" />
                        <h2 className="text-5xl lg:text-7xl font-black uppercase italic tracking-tighter">Ready to <span className="text-purple-500">Scale</span>?</h2>
                        <p className="text-zinc-400 text-xl max-w-xl mx-auto italic">
                            Join the national network of touring artists and verified venues today.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
                            <Link
                                href="/auth/login?targetRole=band"
                                className="bg-purple-600 hover:bg-purple-500 text-white px-10 py-5 text-xl font-black uppercase italic transition-all transform hover:scale-105"
                            >
                                Book Your Next Gig
                            </Link>
                            <Link
                                href="/auth/login?targetRole=venue"
                                className="bg-white text-black hover:bg-zinc-200 px-10 py-5 text-xl font-black uppercase italic transition-all transform hover:scale-105"
                            >
                                Hire Fresh Talent
                            </Link>
                        </div>
                    </div>
                </div>
            </main>

            {/* Footer Support Bar */}
            <footer className="mt-40 py-20 px-8 border-t border-zinc-900 bg-zinc-950 text-center">
                <div className="max-w-7xl mx-auto">
                    <Link href="/" className="text-2xl font-black tracking-tighter uppercase italic block mb-8">
                        Find<span className="text-purple-500">A</span>Band<span className="text-purple-500">Today</span>
                    </Link>
                    <div className="flex justify-center gap-12 text-xs font-bold uppercase tracking-widest text-zinc-600 mb-12">
                        <Link href="/discover" className="hover:text-white transition-colors">Discover</Link>
                        <Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link>
                        <Link href="/how" className="hover:text-white transition-colors">How it works</Link>
                        <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
                    </div>
                    <p className="text-zinc-800 text-[10px] font-black uppercase tracking-[0.2em]">
                        &copy; 2026 THE BAND FINDER // ALL RIGHTS RESERVED // V1.0.0
                    </p>
                </div>
            </footer>
        </div>
    );
}

function FeatureCard({ icon, title, desc, badges }: { icon: React.ReactNode, title: string, desc: string, badges: string[] }) {
    return (
        <div className="p-8 rounded-[2rem] bg-zinc-900/50 border border-zinc-800 hover:border-zinc-700 hover:bg-zinc-900 transition-all duration-500 group hover:scale-[1.03] hover:shadow-2xl hover:shadow-purple-500/5 cursor-default">
            <div className="p-4 bg-black rounded-2xl w-fit mb-6 border border-zinc-800 group-hover:scale-110 group-hover:border-zinc-700 transition-all duration-500">
                {icon}
            </div>
            <h3 className="text-2xl font-black uppercase italic mb-3 tracking-tight group-hover:text-white transition-colors duration-500">{title}</h3>
            <p className="text-zinc-500 group-hover:text-zinc-200 text-sm leading-relaxed mb-6 font-medium italic transition-colors duration-500">
                {desc}
            </p>
            <div className="flex flex-wrap gap-2">
                {badges.map((badge, i) => (
                    <span key={i} className="px-3 py-1 bg-zinc-950 border border-zinc-900 rounded-full text-[9px] font-black uppercase tracking-widest text-zinc-500 group-hover:text-zinc-400 group-hover:border-zinc-800 transition-all duration-500">
                        {badge}
                    </span>
                ))}
            </div>
        </div>
    );
}
