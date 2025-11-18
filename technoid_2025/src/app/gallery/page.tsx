"use client";

import React from "react";
import { motion } from "framer-motion";
import { Maximize2, Share2, Download } from "lucide-react";
import CyberImage from "@/components/CyberImage";

export default function GallerySection() {
  // Generates an array of 15 images: /images/gallery/1.jpg, /images/gallery/2.jpg, etc.
  // Make sure to create the folder 'public/images/gallery' and number your files.
  const images = Array.from({ length: 15 }, (_, i) => `/images/gallery/${i + 1}.jpg`);

  return (
    <section className="max-w-[1800px] mx-auto py-12 px-4 md:px-8">
      
      {/* Masonry Grid Wrapper */}
      <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8 p-4">
        {images.map((src, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: (index % 3) * 0.1 }} // Staggered entrance
            viewport={{ once: true }}
            className="break-inside-avoid"
          >
            <div className="group relative bg-cyber-black border border-neon-cyan/20 rounded-lg overflow-hidden transition-all duration-500 hover:border-neon-cyan hover:shadow-[0_0_40px_rgba(0,243,255,0.2)]">
              
              {/* --- IMAGE CONTAINER --- */}
              {/* h-auto ensures the image is never cropped or stretched. It shows the full poster. */}
              <div className="relative w-full h-auto">
                 <CyberImage
                  src={src}
                  alt={`Gallery Artifact ${index + 1}`}
                  className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Subtle Gradient Overlay (Bottom only, for text visibility) */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-60" />
              </div>

              {/* --- HOVER HUD OVERLAY --- */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                
                {/* Cyberpunk Corner Brackets */}
                <div className="absolute top-3 left-3 w-8 h-8 border-t-2 border-l-2 border-neon-pink rounded-tl-md" />
                <div className="absolute top-3 right-3 w-8 h-8 border-t-2 border-r-2 border-neon-pink rounded-tr-md" />
                <div className="absolute bottom-3 left-3 w-8 h-8 border-b-2 border-l-2 border-neon-pink rounded-bl-md" />
                <div className="absolute bottom-3 right-3 w-8 h-8 border-b-2 border-r-2 border-neon-pink rounded-br-md" />
                
                {/* Animated Scanline (Purely visual, doesn't distort image) */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neon-cyan/5 to-transparent animate-scan z-10" />
                
                {/* Center Action Buttons */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 z-20 pointer-events-auto">
                    <button className="p-3 bg-black/60 border border-neon-cyan rounded-full text-neon-cyan hover:bg-neon-cyan hover:text-black transition-all transform hover:scale-110 backdrop-blur-md">
                        <Maximize2 className="w-6 h-6" />
                    </button>
                    <button className="p-3 bg-black/60 border border-neon-pink rounded-full text-neon-pink hover:bg-neon-pink hover:text-black transition-all transform hover:scale-110 backdrop-blur-md">
                        <Download className="w-6 h-6" />
                    </button>
                </div>
              </div>

              {/* --- FILE INFO --- */}
              <div className="absolute bottom-0 left-0 w-full p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-black/80 backdrop-blur-md border-t border-gray-800">
                <div className="flex justify-between items-end">
                    <div>
                        <p className="text-neon-cyan font-mono text-[10px] tracking-widest mb-1">FILE_ID: 00{index + 1}</p>
                        <h3 className="text-white font-orbitron text-lg">CYBER_SNAPSHOT_{index + 1}</h3>
                    </div>
                    <div className="flex gap-2 text-gray-400">
                        <Share2 className="w-4 h-4 hover:text-white cursor-pointer" />
                    </div>
                </div>
              </div>

            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
