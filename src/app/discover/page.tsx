'use client';

import React, { useState } from 'react';
import { Search, MapPin, Filter, Play, Lock } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import Image from 'next/image';

const DiscoverPage = () => {
    const [isPaid] = useState(false);

    return (
        <div className="flex flex-col min-h-screen bg-black text-white selection:bg-purple-500 font-sans">
            <Navbar />

            <div className="flex flex-1">
                {/* SIDEBAR */}
                <aside className="w-80 border-r border-zinc-900 p-8 hidden lg:block sticky top-[80px] h-[calc(100vh-80px)] overflow-y-auto bg-black">
                    <div className="flex items-center gap-3 mb-10 text-purple-500">
                        <Filter size={20} className="drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]" />
                        <h2 className="font-black uppercase tracking-[0.2em] italic text-sm">Route Filter</h2>
                    </div>

                    <div className="space-y-10">
                        {/* Location */}
                        <div>
                            <label className="text-[10px] font-black text-zinc-500 uppercase tracking-[0.2em] block mb-3">Search Origin</label>
                            <div className="relative group">
                                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-600 group-focus-within:text-purple-500 transition-colors" size={16} />
                                <input
                                    type="text"
                                    placeholder="City or Zip..."
                                    className="w-full bg-zinc-900/50 border border-zinc-800 p-3 pl-10 rounded-lg text-xs font-bold focus:border-purple-500/50 outline-none transition-all placeholder:text-zinc-700"
                                />
                            </div>
                        </div>

                        {/* Radius */}
                        <div>
                            <div className="flex justify-between mb-3">
                                <label className="text-[10px] font-black text-zinc-500 uppercase tracking-[0.2em]">Radius</label>
                                <span className="text-[10px] text-purple-500 font-black tracking-widest">500 MILES</span>
                            </div>
                            <input
                                type="range"
                                min="5"
                                max="500"
                                className="w-full h-1 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-purple-600"
                            />
                        </div>

                        {/* Genres */}
                        <div>
                            <label className="text-[10px] font-black text-zinc-500 uppercase tracking-[0.2em] block mb-4">Genre / Style</label>
                            <div className="flex flex-wrap gap-2">
                                {['Rock', 'Jazz', 'Metal', 'Cover Band', 'Acoustic'].map(tag => (
                                    <button
                                        key={tag}
                                        className="text-[9px] px-3 py-1.5 bg-zinc-900 border border-zinc-800 rounded-md hover:border-purple-500/50 hover:bg-purple-500/5 transition-all uppercase font-black tracking-widest text-zinc-500 hover:text-white"
                                    >
                                        {tag}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="pt-8 border-t border-zinc-900">
                            <label className="flex items-center gap-4 cursor-pointer group">
                                <div className="w-12 h-6 bg-zinc-900 border border-zinc-800 rounded-full relative transition-colors group-hover:border-purple-500/30">
                                    <div className="absolute left-1.5 top-1.5 w-3 h-3 bg-zinc-700 rounded-full group-hover:bg-purple-600 transition-colors"></div>
                                </div>
                                <span className="text-[10px] font-black uppercase tracking-[0.1em] text-zinc-500 group-hover:text-zinc-300 transition-colors">Open Dates Only</span>
                            </label>
                        </div>
                    </div>
                </aside>

                {/* MAIN */}
                <main className="flex-1 p-8 lg:p-16 bg-black">
                    <header className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-8">
                        <div>
                            <h1 className="text-5xl lg:text-6xl font-black uppercase italic tracking-tighter leading-none mb-4">
                                Discover <span className="text-purple-500 drop-shadow-[0_0_15px_rgba(168,85,247,0.3)]">Talent</span>
                            </h1>
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse"></div>
                                <p className="text-zinc-500 text-sm font-bold uppercase tracking-widest">Showing bands within 500 miles of Nashville, TN</p>
                            </div>
                        </div>

                        <div className="flex gap-4 w-full md:w-auto">
                            <div className="relative flex-1 md:w-80 group">
                                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-600 group-focus-within:text-purple-500 transition-colors" size={18} />
                                <input
                                    type="text"
                                    placeholder="QUICK SEARCH..."
                                    className="w-full bg-zinc-900/80 border border-zinc-800 p-3 pl-12 rounded-xl text-xs focus:border-purple-500/50 outline-none transition-all uppercase font-black tracking-[0.2em] placeholder:text-zinc-700"
                                />
                            </div>
                        </div>
                    </header>

                    <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-10">
                        {[1, 2, 3, 4, 5, 6].map((i) => (
                            <div key={i} className="group relative bg-zinc-950 border border-zinc-900 rounded-2xl overflow-hidden hover:border-purple-500/40 transition-all duration-700 hover:shadow-[0_0_50px_rgba(168,85,247,0.1)]">
                                <div className="relative aspect-video overflow-hidden">
                                    <Image
                                        src={`https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80&w=800`}
                                        alt="Band Performance"
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-1000 ease-out grayscale-[0.2] group-hover:grayscale-0"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
                                    <button className="absolute bottom-6 left-6 p-5 bg-purple-600 rounded-full shadow-[0_0_30px_rgba(168,85,247,0.5)] hover:bg-purple-500 hover:scale-110 transition-all z-10">
                                        <Play size={24} fill="white" className="ml-1" />
                                    </button>
                                    <div className="absolute top-6 right-6 text-[10px] bg-black/80 backdrop-blur-xl px-4 py-2 rounded-full font-black uppercase tracking-[0.2em] border border-white/5">
                                        0:15 PREVIEW
                                    </div>
                                </div>

                                <div className="p-8">
                                    <div className="flex justify-between items-start mb-4">
                                        <div>
                                            <h3 className="text-2xl font-black uppercase italic tracking-tighter leading-tight group-hover:text-purple-400 transition-colors mb-2">The Neon Rebels</h3>
                                            <div className="flex gap-2">
                                                <span className="text-[9px] font-black text-purple-400 border border-purple-500/20 bg-purple-500/5 px-2.5 py-1 rounded uppercase tracking-widest">Verified</span>
                                                <span className="text-[9px] font-black text-zinc-500 border border-zinc-800 bg-zinc-900 px-2.5 py-1 rounded uppercase tracking-widest">Nashville, TN</span>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="text-zinc-500 text-sm leading-relaxed mb-8 line-clamp-2 font-medium">
                                        Hard-hitting rock from the heart of Nashville. Full stage plot and backline available upon booking.
                                    </p>

                                    <div className="grid grid-cols-2 gap-4">
                                        <button className="bg-zinc-900 py-4 text-[10px] font-black uppercase tracking-[0.2em] italic hover:bg-zinc-800 transition-all border border-zinc-800 hover:border-purple-500/30 rounded-lg">
                                            View Profile
                                        </button>
                                        <button className={`flex items-center justify-center gap-2 py-4 text-[10px] font-black uppercase tracking-[0.2em] italic transition-all rounded-lg ${isPaid ? 'bg-purple-600 hover:bg-purple-500' : 'bg-black border border-zinc-900 text-zinc-600 hover:border-purple-500/20'}`}>
                                            {!isPaid && <Lock size={12} className="text-purple-500" />}
                                            {isPaid ? 'Submit' : 'Calendar'}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </main>
            </div>

            <style jsx global>{`
                input[type='range']::-webkit-slider-thumb {
                    appearance: none;
                    width: 16px;
                    height: 16px;
                    background: #9333ea;
                    border: 3px solid white;
                    border-radius: 50%;
                    cursor: pointer;
                    box-shadow: 0 0 15px rgba(168, 85, 247, 0.4);
                    transition: all 0.2s;
                }
                input[type='range']::-webkit-slider-thumb:hover {
                    transform: scale(1.2);
                }
            `}</style>
        </div>
    );
};

export default DiscoverPage;
