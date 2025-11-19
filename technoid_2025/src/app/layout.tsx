import type { Metadata } from "next";
import { Orbitron, Rajdhani } from "next/font/google";
import "./globals.css"; 
import NavBar from "@/components/sections/navBar";
import Footer from "@/components/sections/footer";
import SmoothScroll from "@/components/SmoothScroll";
import SocialMediaLinks from "@/components/SocialMediaLinks";
import BackToTop from "@/components/BackToTop";
import NeonCursor from "@/components/NeonCursor"; // Import the cursor component

const orbitron = Orbitron({ subsets: ["latin"], variable: "--font-orbitron" });
const rajdhani = Rajdhani({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-rajdhani" });

export const metadata: Metadata = {
  title: "Technoid 2025",
  description: "Cyberpunk Edition",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${orbitron.variable} ${rajdhani.variable} dark`}>
      {/* md:cursor-none -> Hides the default arrow on desktop so the Neon Cursor takes over.
        selection:bg-neon-cyan -> Makes highlighted text look cyberpunk.
      */}
      <body className="font-rajdhani bg-cyber-black antialiased md:cursor-none selection:bg-neon-cyan selection:text-black">
        
        {/* The Glowing Cursor Effect */}
        <NeonCursor />
        
        <NavBar />
        
        <SmoothScroll>
          {children}
        </SmoothScroll>
        
        <Footer />
        
        {/* Fixed UI Elements */}
        <div className="fixed bottom-8 left-8 z-50">
          <SocialMediaLinks />
        </div>
        <div className="fixed bottom-8 right-8 z-50">
          <BackToTop />
        </div>
      </body>
    </html>
  );
}
