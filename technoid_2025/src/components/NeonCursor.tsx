"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export default function NeonCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [trail, setTrail] = useState<{ x: number; y: number; id: number }[]>([]);
  const requestRef = useRef<number>();

  // Main cursor spring physics
  const mouseX = useSpring(0, { stiffness: 1000, damping: 40 });
  const mouseY = useSpring(0, { stiffness: 1000, damping: 40 });
  
  // Raw mouse values for the trail
  const rawMouseX = useMotionValue(0);
  const rawMouseY = useMotionValue(0);

  useEffect(() => {
    let counter = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      rawMouseX.set(e.clientX);
      rawMouseY.set(e.clientY);
      setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    // Animation loop for the trail
    const updateTrail = () => {
      setTrail((prevTrail) => {
        const newPoint = { x: rawMouseX.get(), y: rawMouseY.get(), id: counter++ };
        // Keep the last 20 points
        const updatedTrail = [...prevTrail, newPoint].slice(-20); 
        return updatedTrail;
      });
      requestRef.current = requestAnimationFrame(updateTrail);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);
    requestRef.current = requestAnimationFrame(updateTrail);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [mouseX, mouseY, rawMouseX, rawMouseY]);

  if (!isVisible) return null;

  return (
    <>
      {/* --- NEON TRAIL --- */}
      {trail.map((point, index) => {
        // Calculate opacity based on index (fades out for older points)
        const opacity = (index / trail.length) * 0.5;
        return (
          <div
            key={point.id}
            className="fixed top-0 left-0 pointer-events-none z-[9998] hidden md:block"
            style={{
              left: point.x,
              top: point.y,
              transform: "translate(-50%, -50%)",
              width: `${(index / trail.length) * 10}px`, // Gets smaller as it fades
              height: `${(index / trail.length) * 10}px`,
              backgroundColor: "#00f3ff", // Neon Cyan
              borderRadius: "50%",
              opacity: opacity,
              boxShadow: `0 0 ${index}px #00f3ff`, // Glow increases for newer points
            }}
          />
        );
      })}

      {/* --- MAIN CURSOR --- */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] hidden md:block mix-blend-screen"
        style={{ x: mouseX, y: mouseY, translateX: "-50%", translateY: "-50%" }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,1)] z-20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-neon-cyan rounded-full blur-sm opacity-90 z-10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-neon-cyan/40 rounded-full blur-2xl opacity-60 animate-pulse" />
      </motion.div>
    </>
  );
}
