"use client";

import Hero from "@/components/sections/hero";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import CyberImage from "@/components/CyberImage";

export default function Home() {
  // Paths to your images (Upload these to public/images/)
  const mainPosterImage = "/images/MainPoster.jpg"; 
  const scheduleImage = "/images/EventsList.jpg";

  return (
    <main className="min-h-screen text-white bg-[#050505] overflow-x-hidden">
      
      {/* --- HERO SECTION (Already Responsive) --- */}
      <Hero />

      {/* --- ABOUT SECTION --- */}
      <section className="py-16 md:py-24 px-4 md:px-6 bg-cyber-black relative">
        {/* Decorative Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="border border-neon-cyan/30 bg-cyber-gray/40 backdrop-blur-sm p-6 md:p-12 rounded-lg shadow-[0_0_40px_rgba(0,243,255,0.1)] hover:shadow-[0_0_60px_rgba(0,243,255,0.2)] transition-all duration-500">
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-orbitron text-neon-pink mb-8 text-center glitch-text tracking-wide break-words">
              ABOUT US
            </h2>
            
            <div className="space-y-6 text-center font-rajdhani text-lg md:text-xl leading-relaxed text-gray-300">
              <p>
                <span className="text-neon-yellow font-bold">Technoid 2025</span> initializes a total system override of the Department of Computer Science. We are transforming the campus into a <span className="text-white">Cyberpunk Arena</span>—an electrifying convergence of neon aesthetics, advanced tech, and the raw energy of a digital-first world.
              </p>
              
              <p className="text-base sm:text-lg md:text-lg text-gray-400 font-rajdhani leading-relaxed text-justify md:text-center hidden md:block">
                In a time where digital systems shape every aspect of life, Technoid 2025 explores a world powered by data, networks, AI, and virtual ecosystems. But beyond the glow of futuristic imagination, it emphasizes what truly matters: cybersecurity, ethics, and digital responsibility. This fest invites students to step beyond passive usage and evolve into creators, defenders, and critical thinkers shaping the next era of technology.
              </p>

              <p className="text-base sm:text-lg md:text-lg text-gray-400 font-rajdhani leading-relaxed text-justify md:text-center">
                Engage in high-energy protocols, immersive simulations, and visually striking cyberpunk environments. <span className="text-neon-pink font-bold">Technoid 2025</span> is your gateway to the future—where creativity meets code, and imagination rewrites the system.
              </p>
              
              <div className="w-full border-t border-gray-700 my-6"></div>

              <p className="text-xs sm:text-sm md:text-base text-neon-cyan/80 font-mono tracking-widest">
                HOSTED BY: DEPT. OF COMPUTER SCIENCE<br/>
                ST. XAVIER'S COLLEGE, JAIPUR
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* --- EVENT LOGS (Dual Image Display) --- */}
      <section className="py-20 md:py-32 relative border-t border-gray-800/50 bg-black/40 backdrop-blur-md">
        <div className="container mx-auto px-4 text-center">
          
          <div className="mb-16">
            <h2 className="text-4xl md:text-6xl font-orbitron text-white mb-4">
              <span className="text-neon-cyan">EVENTS</span>
            </h2>

          </div>
          
          {/* Dual Image Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto px-4">
            
            {/* --- CARD 1: SCHEDULE --- */}
            <div className="flex flex-col gap-6 group">
                <div className="relative aspect-[3/4] w-full clip-tile border-2 border-neon-cyan/30 bg-cyber-gray/20 overflow-hidden transition-all duration-500 group-hover:border-neon-cyan group-hover:shadow-[0_0_30px_rgba(0,243,255,0.2)]">
                    <CyberImage 
                        src={scheduleImage}
                        alt="Event Schedule"
                        className="w-full h-full object-contain p-2" 
                    />
                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-8">
                        <p className="text-neon-cyan font-mono tracking-widest text-lg">TIMELINE_DATA</p>
                    </div>
                </div>
                <Button asChild size="lg" className="w-full bg-neon-cyan text-black hover:bg-white font-orbitron font-bold tracking-wider py-6 text-lg shadow-[0_0_15px_rgba(0,243,255,0.3)]">
                    <Link href="/schedule">
                        VIEW FULL SCHEDULE
                    </Link>
                </Button>
            </div>

            {/* --- CARD 2: MAIN POSTER (Gallery Link) --- */}
            <div className="flex flex-col gap-6 group">
                <div className="relative aspect-[3/4] w-full clip-tile border-2 border-neon-pink/30 bg-cyber-gray/20 overflow-hidden transition-all duration-500 group-hover:border-neon-pink group-hover:shadow-[0_0_30px_rgba(255,0,255,0.2)]">
                    <CyberImage 
                        src={mainPosterImage}
                        alt="Main Event Poster"
                        className="w-full h-full object-contain p-2" 
                    />
                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-8">
                        <p className="text-neon-pink font-mono tracking-widest text-lg">VISUAL_ARCHIVE</p>
                    </div>
                </div>
                <Button asChild variant="outline" size="lg" className="w-full border-neon-pink text-neon-pink hover:bg-neon-pink hover:text-black font-orbitron font-bold tracking-wider py-6 text-lg shadow-[0_0_15px_rgba(255,0,255,0.15)]">
                    <Link href="/gallery">
                        VIEW GALLERY
                    </Link>
                </Button>
            </div>

          </div>

        </div>
      </section>
    </main>
  );
}
