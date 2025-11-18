"use client";

import { TitleBanner } from "@/components/sections/TitleBanner";
import { motion } from "framer-motion";
// Removed: Maximize2, Share2, Download icons
import CyberImage from "@/components/CyberImage";
import React from "react";

export default function GalleryPage() {
  const images = Array.from({ length: 15 }, (_, i) => `/images/gallery/${i + 1}.JPG`);

  return (
    <main className="min-h-screen bg-cyber-black hologram-background">
      <TitleBanner 
        title="VISUAL_ARCHIVE" 
        subtitle="Decrypted Memory Shards..." 
      />

      <section className="max-w-[1800px] mx-auto py-12 px-4 md:px-8">
        
        {/* Masonry Grid Wrapper via CSS Columns */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8 p-4">
          {images.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: (index % 3) * 0.1 }}
              viewport={{ once: true }}
              className="break-inside-avoid"
            >
              {/* Card Container */}
              <div className="group relative bg-cyber-black border-2 border-transparent rounded-lg overflow-hidden transition-all duration-500 hover:border-neon-pink hover:shadow-[0_0_40px_rgba(255,0,255,0.2)]">
                
                {/* --- IMAGE CONTAINER --- */}
                <div className="relative w-full h-auto">
                   <CyberImage
                    src={src}
                    alt={`Gallery Artifact ${index + 1}`}
                    className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-105"
                  />
                  
                  {/* Overlay for subtle darkening/scanline on hover (optional) */}
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* --- HOVER NEON PINK FRAME --- */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  
                  {/* Cyberpunk Corner Brackets (Neon Pink) */}
                  <div className="absolute top-3 left-3 w-8 h-8 border-t-2 border-l-2 border-neon-pink rounded-tl-md" />
                  <div className="absolute top-3 right-3 w-8 h-8 border-t-2 border-r-2 border-neon-pink rounded-tr-md" />
                  <div className="absolute bottom-3 left-3 w-8 h-8 border-b-2 border-l-2 border-neon-pink rounded-bl-md" />
                  <div className="absolute bottom-3 right-3 w-8 h-8 border-b-2 border-r-2 border-neon-pink rounded-br-md" />
                  
                  {/* Animated Scanline (Subtle, doesn't distort image) */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neon-pink/5 to-transparent animate-scan z-10" />
                  
                </div>

                {/* Removed: File Info, Download, Share, Maximize buttons */}

              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
