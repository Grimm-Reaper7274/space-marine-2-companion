import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import Navbar from "../components/layout/Navbar";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Space Marine 2 Companion",
  description: "Build. Customize. Dominate.",
};

type RootLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-screen bg-gray-950 text-white">
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1">
            <div className="mx-auto max-w-7xl px-4 py-6">{children}</div>
          </main>
        </div>
      </body>
    </html>
  );
}
