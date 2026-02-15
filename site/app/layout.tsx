import type { Metadata } from "next";
import { IBM_Plex_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Avatar } from "@/components/ui/avatar";

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
        className={`${spaceGrotesk.variable} ${plexMono.variable} antialiased`}
      >
        <div className="fixed left-4 top-4 z-50 lg:left-6">
          <Avatar src="/profile.jpg" alt="Dhiya K" size="lg" showPresence />
        </div>
        <Header />
        {children}
      </body>
    </html>
  );
}
