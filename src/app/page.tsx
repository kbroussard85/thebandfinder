'use client';

import Image from "next/image";
import { useUser } from '@auth0/nextjs-auth0';

export default function Home() {
  const { user, error, isLoading } = useUser();

  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-4xl font-bold tracking-tight">TheBandFinder</h1>
        <p className="text-lg opacity-80">Niche specific Automation and Directory SaaS</p>

        {isLoading && <div className="animate-pulse">Loading...</div>}
        {error && <div className="text-red-500">Error: {error.message}</div>}

        {!isLoading && !user && (
          <div className="flex flex-col gap-4">
            <p>Welcome! Please sign in to explore the directory.</p>
            <a
              className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-auto"
              href="/api/auth/login"
            >
              Sign In
            </a>
          </div>
        )}

        {user && (
          <div className="flex flex-col gap-4 items-center sm:items-start">
            <div className="flex items-center gap-4 p-4 border rounded-xl bg-black/[.02] dark:bg-white/[.02]">
              {user.picture && (
                <Image
                  src={user.picture}
                  alt={user.name || "User profile"}
                  width={48}
                  height={48}
                  className="rounded-full"
                />
              )}
              <div>
                <p className="font-bold">{user.name}</p>
                <p className="text-sm opacity-60">{user.email}</p>
              </div>
            </div>

            <div className="flex gap-4">
              <a
                className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-auto"
                href="/api/auth/logout"
              >
                Sign Out
              </a>
              <a
                className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-auto"
                href="/dashboard"
              >
                Go to Dashboard
              </a>
            </div>
          </div>
        )}
      </main>

      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center opacity-70">
        <p>© 2026 TheBandFinder. All rights reserved.</p>
      </footer>
    </div>
  );
}
