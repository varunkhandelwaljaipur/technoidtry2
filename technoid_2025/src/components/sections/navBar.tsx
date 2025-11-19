"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import CyberImage from "@/components/CyberImage"; 

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [rulesOpen, setRulesOpen] = useState(false); 
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "HOME", href: "/" },
    { name: "EVENTS", href: "/events" },
    { name: "GALLERY", href: "/gallery" },
    { name: "SPONSORS", href: "/sponsors" },
    // RULES inserted manually
    { name: "CONTACT", href: "/contact" },
  ];

  const registrationLink = "https://forms.gle/your-registration-link"; 

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
        scrolled
          ? "bg-black/90 backdrop-blur-xl border-neon-cyan/50 h-20"
          : "bg-transparent border-transparent h-24"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 h-full flex items-center justify-between">
        
        {/* --- LEFT: COLLEGE LOGO --- */}
        <Link href="/" className="flex items-center gap-2 md:gap-3 group flex-shrink-0">
            <div className="w-10 h-10 md:w-12 md:h-12 relative overflow-hidden rounded-full border-2 border-neon-cyan/50 group-hover:border-neon-cyan transition-colors">
                <CyberImage 
                    src="/images/college-logo.png" 
                    alt="College Logo" 
                    className="w-full h-full object-cover" 
                />
            </div>
            <div className="flex flex-col">
                <span className="text-white font-orbitron font-bold text-base md:text-lg leading-none tracking-wider">TECHNOID</span>
                <span className="text-neon-cyan font-mono text-[10px] md:text-xs tracking-widest">2025</span>
            </div>
        </Link>

        {/* --- CENTER: NAVIGATION LINKS (Desktop Only) --- */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.slice(0, 4).map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`relative font-rajdhani font-bold text-lg tracking-widest transition-colors duration-300 ${
                pathname === link.href ? "text-neon-yellow" : "text-gray-400 hover:text-white"
              }`}
            >
              {pathname === link.href && (
                <span className="absolute -left-3 text-neon-cyan animate-pulse">[</span>
              )}
              {link.name}
              {pathname === link.href && (
                <span className="absolute -right-3 text-neon-cyan animate-pulse">]</span>
              )}
            </Link>
          ))}

          {/* Rules Dropdown */}
          <div className="relative group">
            <button className="flex items-center gap-1 font-rajdhani font-bold text-lg tracking-widest text-gray-400 group-hover:text-white transition-colors">
              RULES <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
            </button>
            <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
                <div className="bg-cyber-black border border-neon-cyan/50 p-2 w-48 flex flex-col gap-1 clip-tile shadow-[0_0_20px_rgba(0,243,255,0.2)]">
                    <Link href="/rulebook.pdf" target="_blank" className="block px-4 py-2 text-gray-300 hover:bg-neon-cyan/10 hover:text-neon-cyan font-mono text-sm transition-colors">
                        &gt; RULEBOOK_PDF
                    </Link>
                    <Link href="/schedule" className="block px-4 py-2 text-gray-300 hover:bg-neon-cyan/10 hover:text-neon-cyan font-mono text-sm transition-colors">
                        &gt; SCHEDULE_PAGE
                    </Link>
                </div>
            </div>
          </div>

          {/* Contact Link */}
          <Link
              href="/contact"
              className={`relative font-rajdhani font-bold text-lg tracking-widest transition-colors duration-300 ${
                pathname === "/contact" ? "text-neon-yellow" : "text-gray-400 hover:text-white"
              }`}
            >
              {pathname === "/contact" && <span className="absolute -left-3 text-neon-cyan animate-pulse">[</span>}
              CONTACT
              {pathname === "/contact" && <span className="absolute -right-3 text-neon-cyan animate-pulse">]</span>}
            </Link>
        </div>

        {/* --- RIGHT SIDE ACTIONS (Mobile & Desktop) --- */}
        <div className="flex items-center gap-3 md:gap-4">
            
            {/* 1. REGISTER BUTTON (Visible on ALL screens) */}
            {/* Mobile: Small, Compact. Desktop: Full Text. */}
            <Button asChild className="bg-neon-yellow text-black hover:bg-white hover:text-black font-orbitron font-bold tracking-wider shadow-[0_0_15px_rgba(255,238,0,0.4)] h-8 md:h-10 px-3 md:px-6 text-xs md:text-sm clip-path-button">
                <Link href={registrationLink} target="_blank">
                    {/* Desktop Text */}
                    <span className="hidden md:inline">REGISTER NOW</span>
                    {/* Mobile Text + Icon */}
                    <span className="md:hidden flex items-center gap-1">
                        REGISTER <Zap className="w-3 h-3 fill-black" />
                    </span>
                </Link>
            </Button>

            {/* 2. MOBILE MENU TOGGLE */}
            <button 
                className="lg:hidden text-neon-cyan p-1 border border-neon-cyan/30 rounded-md hover:bg-neon-cyan/10 transition-colors"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
        </div>

      </div>

      {/* --- MOBILE MENU OVERLAY --- */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-20 bg-black/95 backdrop-blur-xl border-t border-neon-cyan/30 p-6 flex flex-col gap-6 z-40 h-[calc(100vh-5rem)] overflow-y-auto">
            {navLinks.slice(0, 4).map((link) => (
                <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`text-xl font-orbitron tracking-widest ${
                        pathname === link.href ? "text-neon-yellow" : "text-white"
                    }`}
                >
                    {link.name}
                </Link>
            ))}
            
            {/* Mobile Rules Dropdown */}
            <div className="border-t border-gray-800 pt-4">
                <button 
                    onClick={() => setRulesOpen(!rulesOpen)}
                    className="flex items-center justify-between w-full text-xl font-orbitron text-white tracking-widest"
                >
                    RULES <ChevronDown className={`w-5 h-5 transition-transform ${rulesOpen ? "rotate-180" : ""}`} />
                </button>
                
                {rulesOpen && (
                    <div className="pl-4 mt-4 flex flex-col gap-3 border-l-2 border-neon-cyan/30 ml-1">
                        <Link href="/rulebook.pdf" target="_blank" className="text-gray-400 font-mono text-sm">
                            &gt; DOWNLOAD RULEBOOK
                        </Link>
                        <Link href="/schedule" onClick={() => setMobileMenuOpen(false)} className="text-gray-400 font-mono text-sm">
                            &gt; VIEW SCHEDULE
                        </Link>
                    </div>
                )}
            </div>

            <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className={`text-xl font-orbitron tracking-widest ${
                    pathname === "/contact" ? "text-neon-yellow" : "text-white"
                }`}
            >
                CONTACT
            </Link>
        </div>
      )}
    </nav>
  );
}
