"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
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
    { name: "CONTACT", href: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
        scrolled
          ? "bg-black/90 backdrop-blur-xl border-neon-cyan/50 h-20"
          : "bg-transparent border-transparent h-24"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
        <Link href="/" className="text-3xl font-orbitron font-bold text-white tracking-widest">
          TECHNOID<span className="text-neon-cyan">_25</span>
        </Link>
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`relative font-rajdhani font-bold text-lg tracking-widest transition-colors duration-300 ${
                pathname === link.href ? "text-neon-yellow" : "text-gray-400 hover:text-white"
              }`}
            >
              <span className="opacity-0 hover:opacity-100 absolute -left-3 text-neon-cyan transition-opacity">[</span>
              {link.name}
              <span className="opacity-0 hover:opacity-100 absolute -right-3 text-neon-cyan transition-opacity">]</span>
              {pathname === link.href && (
                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 bg-neon-yellow shadow-[0_0_10px_#ffee00] rounded-full"></span>
              )}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
