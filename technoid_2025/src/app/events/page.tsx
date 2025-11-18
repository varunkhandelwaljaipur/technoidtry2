"use client"; 

import { TitleBanner } from "@/components/sections/TitleBanner";
import { Button } from "@/components/ui/button";
import { Camera, Clapperboard, Brain, Palette, Recycle, Puzzle, Gamepad, Bot, Zap, MapPin, Code } from "lucide-react";
import React from "react";
import CyberImage from "@/components/CyberImage"; 
import Link from "next/link"; 

// Helper component for icons based on event title
const EventIcon = ({ title }: { title: string }) => {
  const iconMap: { [key: string]: React.ReactNode } = {
    "Neon Narratives": <Camera className="w-6 h-6 text-neon-pink" />,
    "Reel-o-Tron": <Clapperboard className="w-6 h-6 text-neon-pink" />,
    "Tech Trivia": <Brain className="w-6 h-6 text-neon-cyan" />,
    "Crafted Canvas": <Palette className="w-6 h-6 text-neon-cyan" />,
    "Neon Velocity": <Zap className="w-6 h-6 text-neon-yellow" />,
    "CyberMote": <Puzzle className="w-6 h-6 text-neon-yellow" />,
    "The Neon Trail": <MapPin className="w-6 h-6 text-neon-yellow" />, 
    "LAN Gaming Arena": <Gamepad className="w-6 h-6 text-neon-yellow" />,
    "TechnoRebirth": <Recycle className="w-6 h-6 text-neon-cyan" />,
    "Hack-a-Meme": <Bot className="w-6 h-6 text-neon-cyan" />,
  };
  return iconMap[title] || <Code className="w-6 h-6 text-gray-500" />;
};

// --- Event Data Structure ---
const eventCategories = [
  {
    categoryTitle: "PRE-EVENTS // UPLOAD_INCOMING",
    categoryColor: "text-neon-pink",
    events: [
      {
        title: "Neon Narratives",
        tag: "Photography",
        desc: "A photography event where participants capture visual stories of technology, light, and life in a cyber-inspired world filled with vibrant colours and futuristic reflections.",
        poster: "/images/Neon Narratives.jpg"
      },
      {
        title: "Reel-o-Tron",
        tag: "Reel Making",
        desc: "Short reels (30–60 seconds) on cyberpunk life, AI evolution, or cybersecurity. Judged on storytelling, editing, and innovation.",
        poster: "/images/Reelotron.jpg"
      }
    ]
  },
  {
    categoryTitle: "MAIN EVENT // SYSTEM_ONLINE",
    categoryColor: "text-neon-cyan",
    events: [
      {
        title: "Tech Trivia",
        tag: "Tech Quiz",
        desc: "A fast-paced tech quiz testing knowledge in AI, cybersecurity, coding, and futuristic trends. Two rounds (MCQ + Buzzer) with neon visuals and glitch rounds.",
        poster: "/images/Tech Trivia.jpg"
      },
      {
        title: "Crafted Canvas",
        tag: "Art & Poster",
        desc: "An artistic event where participants express cyberpunk ideas through posters on AI takeover, data ethics, and cyber safety. Displayed in a blacklight ‘Neon Gallery’.",
        poster: "/images/Crafted Canvas.jpg"
      },
      {
        title: "Neon Velocity",
        tag: "Retro Racing",
        desc: "Inspired by Need for Speed and Road Rash, this event puts participants in the driver’s seat of a neon-drenched city where speed meets rebellion.",
        poster: "/images/Retro Recharged.jpg"
      },
      {
        title: "CyberMote",
        tag: "Emoji Sync",
        desc: "Teams will use creativity and coordination to bring emojis (like 🔼, ❤️, 😂, ⚡) to life by acting, posing, or forming shapes together.",
        poster: "/images/Cybermote.jpg"
      },
      {
        title: "The Neon Trail",
        tag: "Treasure Hunt",
        desc: "A campus-wide QR and code-based hunt. Teams decode virtual clues and locate ‘data shards’ to uncover the AI core.",
        poster: "/images/Treasure Hunt.jpg"
      },
      {
        title: "LAN Gaming Arena",
        tag: "Grid Wars",
        desc: "Competitive gaming in a neon-lit arena. Games include Valorant, BGMI and Tekken. Represents AI clans fighting for control of the Neon City.",
        poster: "/images/Lan Gaming.jpg"
      },
      {
        title: "TechnoRebirth",
        tag: "E-Waste Art",
        desc: "Transforming electronic waste into innovative creations. Repurpose discarded components like circuit boards and wires into artistic models.",
        poster: "/images/Techno Rebirth.jpg"
      },
      {
        title: "Hack-a-Meme",
        tag: "Meme Battle",
        desc: "Use AI tools to craft memes inspired by cyberpunk and cybersecurity themes — from AI takeovers to digital glitches.",
        poster: "/images/Hack-a-meme.jpg"
      }
    ]
  }
];

export default function EventsPage() {
  return (
    <main className="min-h-screen bg-cyber-black hologram-background">
      <TitleBanner title="EVENTS_PROTOCOL" subtitle="Loading Event Modules..." />
      
      {/* Increased max-width for bigger cards */}
      <section className="max-w-[1600px] mx-auto py-24 px-6">
        {eventCategories.map((category) => (
          <div key={category.categoryTitle} className="mb-32">
            {/* Category Title */}
            <h2 className={`text-5xl font-orbitron mb-16 border-b-2 pb-6 ${category.categoryColor} border-${category.categoryColor.replace('text-', '')}/30 tracking-widest`}>
              {category.categoryTitle}
            </h2>
            
            {/* Events Grid - Increased Gap */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {category.events.map((event) => (
                // --- THE EVENT CARD CONTAINER ---
                <div 
                  key={event.title} 
                  // aspect-[2/3] ensures tall poster shape. Sizing comes from parent grid.
                  className="clip-tile group relative flex flex-col w-full aspect-[2/3] bg-cyber-black/70 backdrop-blur-sm border border-neon-cyan/30 overflow-hidden transition-all duration-500 hover:border-neon-cyan/100 hover:shadow-[0_0_50px_rgba(0,243,255,0.4)] hover:-translate-y-2"
                >
                  
                  {/* --- 1. FULL POSTER DISPLAY --- */}
                  <div className="absolute inset-0 w-full h-full">
                    <CyberImage
                      src={event.poster}
                      alt={`${event.title} Poster`}
                      // CHANGED: object-fill forces the image to fill the entire container area
                      // This ensures no part of the poster is cut off, although it may stretch slightly if ratios differ.
                      className="w-full h-full object-fill transition-transform duration-700 group-hover:scale-110" 
                    />
                    {/* Subtle bottom gradient to make sure text pops if image is light */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-50" />
                  </div>

                  {/* --- 2. HOVER OVERLAY (Details) --- */}
                  <div className="absolute inset-0 bg-cyber-black/95 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8 translate-y-4 group-hover:translate-y-0">
                    
                    <div className="flex items-center justify-between mb-4">
                      <span className={`font-mono text-sm ${category.categoryColor} uppercase tracking-widest`}>
                        {event.tag}
                      </span>
                      <EventIcon title={event.title} />
                    </div>
                    
                    <h3 className="text-3xl font-orbitron font-bold text-white mb-4 leading-tight">
                      {event.title}
                    </h3>
                    
                    <p className="font-rajdhani text-gray-300 text-base mb-8 line-clamp-6 leading-relaxed">
                      {event.desc}
                    </p>

                    <Button asChild variant="default" className="w-full bg-neon-cyan text-black hover:bg-white font-orbitron font-bold tracking-wider py-6 text-lg">
                        <Link href="#">
                            REGISTER NOW
                        </Link>
                    </Button>
                  </div>
                  
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
