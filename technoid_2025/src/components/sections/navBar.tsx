"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import CyberImage from "@/components/CyberImage"; // Using our safe image component

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [rulesOpen, setRulesOpen] = useState(false); // For mobile dropdown
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Modified order: Rules before Contact
  const navLinks = [
    { name: "HOME", href: "/" },
    { name: "EVENTS", href: "/events" },
    { name: "GALLERY", href: "/gallery" },
    { name: "SPONSORS", href: "/sponsors" },
    // RULES will be inserted here manually in the render logic
    { name: "CONTACT", href: "/contact" },
  ];

  // Registration Link
  const registrationLink = "https://registration.sxcjpr.edu.in/event/technoid-2025/"; // Replace with actual link

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
        scrolled
          ? "bg-black/90 backdrop-blur-xl border-neon-cyan/50 h-20"
          : "bg-transparent border-transparent h-24"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
        
        {/* --- LEFT: COLLEGE LOGO --- */}
        <Link href="/" className="flex items-center gap-3 group">
            {/* Replace src with your actual logo path */}
            <div className="w-12 h-12 relative overflow-hidden rounded-full border-2 border-neon-cyan/50 group-hover:border-neon-cyan transition-colors">
                <CyberImage 
                    src="/images/college-logo.png" 
                    alt="College Logo" 
                    className="w-full h-full object-cover" 
                />
            </div>
            <div className="flex flex-col">
                <span className="text-white font-orbitron font-bold text-lg leading-none tracking-wider">TECHNOID</span>
                <span className="text-neon-cyan font-mono text-xs tracking-widest">2025</span>
            </div>
        </Link>

        {/* --- CENTER: NAVIGATION LINKS --- */}
        <div className="hidden lg:flex items-center gap-8">
          {/* Standard Links (Home, Events, Gallery, Sponsors) */}
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

          {/* Rules Dropdown (Hover) - Inserted before Contact */}
          <div className="relative group">
            <button className="flex items-center gap-1 font-rajdhani font-bold text-lg tracking-widest text-gray-400 group-hover:text-white transition-colors">
              RULES <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
            </button>
            
            {/* Dropdown Menu */}
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

          {/* Contact Link (Last Item) */}
          <Link
              href="/contact"
              className={`relative font-rajdhani font-bold text-lg tracking-widest transition-colors duration-300 ${
                pathname === "/contact" ? "text-neon-yellow" : "text-gray-400 hover:text-white"
              }`}
            >
              {pathname === "/contact" && (
                <span className="absolute -left-3 text-neon-cyan animate-pulse">[</span>
              )}
              CONTACT
              {pathname === "/contact" && (
                <span className="absolute -right-3 text-neon-cyan animate-pulse">]</span>
              )}
            </Link>
        </div>

        {/* --- RIGHT: REGISTER BUTTON --- */}
        <div className="hidden lg:block">
            <Button asChild className="bg-neon-yellow text-black hover:bg-white hover:text-black font-orbitron font-bold tracking-wider clip-path-button shadow-[0_0_15px_rgba(255,238,0,0.4)]">
                <Link href={registrationLink} target="_blank">
                    REGISTER NOW
                </Link>
            </Button>
        </div>

        {/* --- MOBILE MENU TOGGLE --- */}
        <button 
            className="lg:hidden text-neon-cyan"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
            {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* --- MOBILE MENU OVERLAY --- */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-20 bg-black/95 backdrop-blur-xl border-t border-neon-cyan/30 p-6 flex flex-col gap-6 z-40">
            {/* Standard Links (Home -> Sponsors) */}
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

            {/* Contact Link */}
            <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className={`text-xl font-orbitron tracking-widest ${
                    pathname === "/contact" ? "text-neon-yellow" : "text-white"
                }`}
            >
                CONTACT
            </Link>

            <Button asChild className="mt-auto w-full bg-neon-cyan text-black font-bold font-orbitron">
                <Link href={registrationLink} target="_blank">
                    REGISTER NOW
                </Link>
            </Button>
        </div>
      )}
    </nav>
  );
}
