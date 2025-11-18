import { TitleBanner } from "@/components/sections/TitleBanner";
import { Button } from "@/components/ui/button";
import { Camera, Clapperboard, Brain, Palette, Recycle, Puzzle, Gamepad, Bot, Zap, MapPin, Code } from "lucide-react";
import React from "react";

// Helper component for icons based on event title
const EventIcon = ({ title }: { title: string }) => {
  const iconMap: { [key: string]: React.ReactNode } = {
    "Neon Narratives": <Camera className="w-5 h-5 text-neon-pink" />,
    "Reel-o-Tron": <Clapperboard className="w-5 h-5 text-neon-pink" />,
    "Tech Trivia": <Brain className="w-5 h-5 text-neon-cyan" />,
    "Crafted Canvas": <Palette className="w-5 h-5 text-neon-cyan" />,
    "Neon Velocity": <Zap className="w-5 h-5 text-neon-yellow" />,
    "CyberMote": <Puzzle className="w-5 h-5 text-neon-yellow" />,
    "The Neon Trail": <MapPin className="w-5 h-5 text-neon-yellow" />, 
    "LAN Gaming Arena": <Gamepad className="w-5 h-5 text-neon-yellow" />,
    "TechnoRebirth": <Recycle className="w-5 h-5 text-neon-cyan" />,
    "Hack-a-Meme": <Bot className="w-5 h-5 text-neon-cyan" />,
  };
  return iconMap[title] || <Code className="w-5 h-5 text-gray-500" />;
};

// --- Event Data Structure with Image Paths ---
const eventCategories = [
  {
    categoryTitle: "PRE-EVENTS // UPLOAD_INCOMING",
    categoryColor: "text-neon-pink",
    events: [
      {
        title: "Neon Narratives",
        tag: "Pre-Event / Photography",
        desc: "A photography event where participants capture visual stories of technology, light, and life in a cyber-inspired world filled with vibrant colours and futuristic reflections.",
        poster: "/images/Neon Narratives.jpg" 
      },
      {
        title: "Reel-o-Tron",
        tag: "Pre-Event / Reel Making",
        desc: "Short reels (30–60 seconds) on cyberpunk life, AI evolution, or cybersecurity. Judged on storytelling, editing, and innovation.",
        poster: "/images/Reelotron.jpg" 
      }
    ]
  },
  {
    categoryTitle: "CREATIVE & TECHNICAL // MAIN_FRAME",
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
        tag: "Art / Poster Making",
        desc: "An artistic event where participants express cyberpunk ideas through posters on AI takeover, data ethics, and cyber safety. Displayed in a blacklight ‘Neon Gallery’.",
        poster: "/images/Crafted Canvas.jpg" 
      },
      {
        title: "TechnoRebirth",
        tag: "E-Waste / Creative",
        desc: "Focuses on transforming electronic waste into innovative and sustainable creations, repurposing components like circuit boards and wires into useful or artistic models.",
        poster: "/images/Techno Rebirth.jpg" 
      },
      {
        title: "Hack-a-Meme",
        tag: "AI / Creative",
        desc: "Unleash your wit in the AI Meme Battle! Participants will use AI tools to craft memes inspired by cyberpunk and cybersecurity themes.",
        poster: "/images/Hack-a-meme.jpg" 
      }
    ]
  },
  {
    categoryTitle: "GAMING & TEAM-EVENTS // GRID_WARS",
    categoryColor: "text-neon-yellow",
    events: [
      {
        title: "Neon Velocity",
        tag: "Gaming / Racing",
        desc: "Inspired by Need for Speed and Road Rash, compete head-to-head in a neon-drenched city where speed meets rebellion.",
        poster: "/images/Retro Recharged.jpg" 
      },
      {
        title: "CyberMote",
        tag: "Team Event / Fun",
        desc: "Teams will use creativity and coordination to bring emojis (like 🔼, ❤️, 😂, ⚡) to life by acting, posing, or forming shapes together.",
        poster: "/images/Cybermote.jpg" 
      },
      {
        title: "The Neon Trail",
        tag: "Team Event / Treasure Hunt",
        desc: "A campus-wide QR and code-based hunt. Teams decode virtual clues and locate ‘data shards’ to uncover the AI core.",
        poster: "/images/Treasure Hunt.jpg" 
      },
      {
        title: "LAN Gaming Arena",
        tag: "Gaming / E-Sports",
        desc: "Competitive gaming in a neon-lit arena. Games include Valorant, BGMI and Tekken, representing AI clans fighting for control of the Neon City.",
        poster: "/images/Lan Gaming.jpg" 
      }
    ]
  }
];

export default function EventsPage() {
  return (
    
    <main className="min-h-screen bg-cyber-black hologram-background">
      <TitleBanner title="EVENTS_PROTOCOL" subtitle="Accessing Mainframe..." />
      
      <section className="max-w-7xl mx-auto py-20 px-6">
        {eventCategories.map((category) => (
          <div key={category.categoryTitle} className="mb-20">
            {/* Category Title */}
            <h2 className={`text-4xl font-orbitron mb-10 border-b-2 pb-4 ${category.categoryColor} border-${category.categoryColor.replace('text-', '')}/30`}>
              {category.categoryTitle}
            </h2>
            
            {/* Events Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.events.map((event) => (
                <div 
                  key={event.title} 
                  // Apply clip-tile for cut corners and glassmorphism for transparency
                  className="clip-tile group flex flex-col bg-cyber-black/70 backdrop-blur-sm border border-neon-cyan/30 overflow-hidden transition-all duration-300 hover:border-neon-cyan/100 hover:shadow-[0_0_30px_rgba(0,243,255,0.3)]"
                >
                  {/* Event Poster Image */}
                  <img
                    src={event.poster}
                    alt={`${event.title} Poster`}
                    width={600}
                    height={400}
                    // Styles for cyberpunk image effect (desaturated until hover)
                    className="w-full h-48 object-cover mix-blend-luminosity group-hover:mix-blend-normal opacity-60 group-hover:opacity-100 transition-all duration-300"
                    // Fallback in case you haven't uploaded images yet
                    onError={(e) => (e.currentTarget.src = "https://placehold.co/600x400/050505/ffffff?text=LOADING_IMAGE...")}
                  />
                  
                  <div className="p-6 flex flex-col flex-grow">
                    {/* Tag & Icon */}
                    <div className="flex items-center justify-between mb-3">
                      <span className={`font-mono text-sm ${category.categoryColor} opacity-80`}>
                        {event.tag}
                      </span>
                      <EventIcon title={event.title} />
                    </div>
                    
                    {/* Title */}
                    <h3 className={`text-2xl font-orbitron font-bold text-white mb-3`}>
                      {event.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="font-rajdhani text-gray-300 text-lg leading-relaxed flex-grow">
                      {event.desc}
                    </p>
                    
                    {/* Register Button */}
                    <Button variant="outline" className="mt-6 w-full">
                      Register Now
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
