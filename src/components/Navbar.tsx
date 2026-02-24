'use client';

import React from 'react';
import NextImage from "next/image";
import Link from 'next/link';
import { useUser } from '@auth0/nextjs-auth0';

export const Navbar = () => {
    const { user } = useUser();

    return (
        <nav className="flex items-center px-8 py-6 border-b border-zinc-800 bg-black/50 backdrop-blur-md sticky top-0 z-50 gap-12 w-full">
            <div className="flex items-center gap-8 shrink-0">
                <Link href="/" className="text-2xl font-black tracking-tighter uppercase italic hover:scale-105 transition-transform">
                    Find<span className="text-purple-500">A</span>Band<span className="text-purple-500">Today</span>
                </Link>

                {/* Nav Search - Far Left (Right of Logo) */}
                <div className="hidden lg:flex items-center bg-zinc-900/80 border border-zinc-800 px-4 py-2 rounded-full focus-within:border-purple-500/50 transition-all duration-300 w-64 group">
                    <input
                        type="text"
                        placeholder="SEARCH BANDS AND VENUES"
                        className="bg-transparent border-none outline-none text-[10px] font-black italic uppercase tracking-widest w-full placeholder:text-zinc-700"
                    />
                    <div className="text-purple-500 group-hover:text-purple-400 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                    </div>
                </div>
            </div>

            {/* Nav Links - Also Left Aligned */}
            <div className="hidden md:flex gap-8 text-sm font-medium uppercase tracking-widest text-zinc-400 shrink-0">
                <Link href="/discover" className="hover:text-purple-400 transition-colors">Discover</Link>
                <Link href="/features" className="hover:text-blue-400 transition-colors">Features</Link>
                <Link href="/how" className="hover:text-white transition-colors">How it works</Link>
                <Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link>
            </div>

            {/* Auth - Pushed to the Right */}
            <div className="flex items-center gap-4 ml-auto">
                {user ? (
                    <div className="flex items-center gap-4">
                        <div className="hidden sm:flex flex-col items-end">
                            <span className="text-xs font-bold uppercase tracking-tighter">{user.name}</span>
                            {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
                            <a href="/auth/logout" className="text-[10px] text-zinc-500 hover:text-purple-500 uppercase tracking-widest">Logout</a>
                        </div>
                        {user.picture && (
                            <NextImage
                                src={user.picture}
                                alt={user.name || "User"}
                                width={32}
                                height={32}
                                className="rounded-full border border-zinc-700"
                            />
                        )}
                    </div>
                ) : (
                    /* eslint-disable-next-line @next/next/no-html-link-for-pages */
                    <a
                        href="/auth/login"
                        className="bg-white text-black px-6 py-2 text-sm font-bold uppercase tracking-tighter hover:bg-purple-500 hover:text-white transition-all duration-300 shadow-lg shadow-white/5"
                    >
                        Login
                    </a>
                )}
            </div>
        </nav>
    );
};
