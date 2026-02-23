import type { Metadata } from "next";
import { Montserrat, Geist_Mono } from "next/font/google";
import { Auth0ClientProvider } from '@/components/Auth0ClientProvider';
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TheBandFinder",
  description: "Niche specific Automation and Directory SaaS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${geistMono.variable} antialiased`}
      >
        <Auth0ClientProvider>
          {children}
        </Auth0ClientProvider>
      </body>
    </html>
  );
}
