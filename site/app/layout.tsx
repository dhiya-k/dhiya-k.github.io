import type { Metadata } from "next";
import { IBM_Plex_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { InteractiveAvatar } from "@/components/interactive-avatar";
import { MusicPlayer } from "@/components/music-player";
import { CursorGlowTracker } from "@/components/cursor-glow-tracker";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Dhiya K | Frontend Developer",
  description:
    "Frontend developer building AI-powered web applications with modern UI and ML integrations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.variable} ${plexMono.variable} antialiased relative`}
      >
        <CursorGlowTracker />
        <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_14%,rgba(86,56,136,0.55),rgba(16,10,24,0)_58%)]" />
          <div className="cursor-glow-layer absolute inset-0" />
          <div className="absolute inset-0 bg-[radial-gradient(1200px_900px_at_50%_28%,rgba(56,36,100,0.35),rgba(10,8,18,0)_72%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(120%_120%_at_50%_50%,rgba(8,7,14,0)_60%,rgba(4,3,8,0.9)_100%)]" />
        </div>
        <div className="absolute left-4 top-4 z-40 lg:left-6">
          <InteractiveAvatar
            size="lg"
            showPresence
            imageClassName="object-[50%_20%]"
          />
        </div>
        <Header />
        {children}
        <MusicPlayer />
      </body>
    </html>
  );
}
