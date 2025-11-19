"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="h-screen flex flex-col items-center justify-center relative px-4 overflow-hidden">
      
      {/* --- BACKGROUND LAYERS --- */}
      
      {/* 1. Grid Overlay with Animation */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] z-0"></div>

      {/* 2. Video Background (Low opacity for texture) */}
      {/* Ensure you have a video at public/video/teaser.mp4 */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover -z-10 opacity-30 grayscale mix-blend-screen"
      >
        <source src="/video/teaser.mp4" type="video/mp4" />
      </video>

      {/* 3. Vignette Overlay (Darkens edges to focus center) */}
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-black/50 to-black z-0 pointer-events-none" />

      {/* --- CONTENT --- */}
      <div className="z-10 text-center space-y-8">
        
        {/* Status Pill */}
        <div className="inline-block px-4 py-1 border border-neon-cyan/50 rounded-full bg-neon-cyan/10 text-neon-cyan text-sm font-mono mb-4 animate-pulse">
          SYSTEM_STATUS: ONLINE
        </div>

        {/* Main Title: TECHNOID */}
        {/* Using a gradient text fill for a metallic look */}
        <h1 className="text-6xl md:text-9xl font-black font-orbitron tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500 drop-shadow-2xl">
          TECHNOID
        </h1>
        
        {/* Subtitle: THE NEON ASCENT */}
        {/* Using a neon glow effect */}
        <p className="text-2xl md:text-5xl font-rajdhani font-bold text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan via-white to-neon-pink animate-text-shimmer drop-shadow-[0_0_10px_rgba(0,243,255,0.5)] uppercase tracking-[0.2em]">
          THE NEON ASCENT
        </p>
        
        <p className="text-xs md:text-sm font-mono text-neon-yellow mt-2 tracking-[0.5em] opacity-80">
          BEYOND SELF // BEYOND CODE // BEYOND CONTROL
        </p>

        {/* CTA Button */}
        <div className="pt-10">
          <Button asChild size="lg" className="relative overflow-hidden group bg-neon-yellow text-black hover:bg-white font-orbitron font-bold text-lg px-8 py-6 transition-all duration-300 shadow-[0_0_20px_rgba(255,238,0,0.4)]">
            <Link href="/events">
              <span className="relative z-10">INITIALIZE PROTOCOL</span>
              {/* Button Scanline Effect */}
              <div className="absolute inset-0 h-full w-full bg-white/30 -skew-x-12 -translate-x-full group-hover:animate-shine" />
            </Link>
          </Button>
        </div>

      </div>
    </section>
  );
}
