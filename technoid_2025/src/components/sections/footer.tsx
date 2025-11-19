import Link from "next/link";
import { MapPin, Mail, Youtube, Instagram, Map } from "lucide-react";
import { Button } from "@/components/ui/button";

const footerLinks = [
  { name: "Home", href: "/" },
  { name: "Event", href: "/events" },
  { name: "RuleBook", href: "/rulebook.pdf" },
  { name: "Schedule", href: "/schedule" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact Us", href: "/contact" },
];

export default function Footer() {
  // The direct link to open in Google Maps App/Website
  const mapDirectLink = "https://maps.app.goo.gl/DWpwowodoe99CAik6";
  
  // NEW STABLE EMBED URL
  const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3561.859600127221!2d75.676916!3d26.80484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db407a0ff3999%3A0x4e104046d66ef7ca!2sSt.%20Xavier's%20College%20Jaipur!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin";

  return (
    <footer className="relative w-full border-t border-neon-cyan/20 bg-cyber-black text-gray-400 py-12 md:py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
  
        <div className="flex flex-col items-center md:items-start">
          <h3 className="font-orbitron text-lg text-white mb-4 tracking-widest">
            REGISTRATION SCANNER
          </h3>
          <div className="border-2 border-neon-cyan/50 p-2 bg-cyber-gray hover:shadow-[0_0_20px_rgba(0,243,255,0.3)] transition-shadow duration-300">
            <img
              src="/images/qrcode.jpg"
              alt="Registration QR Code"
              width={200}
              height={200}
              className="w-48 h-48 md:w-56 md:h-56 object-contain"
            />
          </div>
        </div>


        <div className="flex flex-col items-center text-center">
          <Link href="/" className="text-3xl md:text-4xl font-orbitron font-bold text-white tracking-widest mb-8 hover:text-neon-cyan transition-colors">
            <span className="text-neon-cyan">TECHNOID'25</span>
          </Link>

          <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 mb-8 font-rajdhani text-lg">
            {footerLinks.map((link) => (
              <Link key={link.name} href={link.href} className="hover:text-neon-yellow hover:underline decoration-neon-yellow/50 underline-offset-4 transition-all">
                {link.name}
              </Link>
            ))}
          </div>

          <div className="w-full border-t border-gray-800 my-4"></div>

          <div className="space-y-4 text-center md:text-left w-full max-w-xs">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-3">
              <MapPin className="w-5 h-5 text-neon-pink flex-shrink-0 mt-1" />
              <span>
                <a 
                  href="https://sxcjpr.edu.in/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-neon-cyan hover:underline transition-colors"
                >
                  St. Xavier's College Jaipur Nevta
                </a>
                <br />
                Mahapura Road, Jaipur
              </span>
            </div>
            <div className="flex flex-col md:flex-row items-center md:items-start gap-3">
              <Mail className="w-5 h-5 text-neon-pink" />
              <a href="mailto:techxclub@sxcjpr.edu.in" className="hover:text-neon-yellow transition-colors break-all">
                techxclub@sxcjpr.edu.in
              </a>
            </div>
          </div>

          <div className="flex gap-6 mt-8">
            <a href="https://www.youtube.com/@departmentofcomputerscienc9441" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[#FF0000] transition-transform hover:scale-110">
              <Youtube className="w-8 h-8" />
            </a>
            <a href="https://www.instagram.com/csdept_sxcj/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[#E1306C] transition-transform hover:scale-110">
              <Instagram className="w-8 h-8" />
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center md:items-end w-full">
          <h3 className="font-orbitron text-lg text-white mb-4 tracking-widest">
            LOCATION
          </h3>
          

          <div className="hidden md:block w-full h-64 border-2 border-neon-cyan/50 p-1 bg-cyber-gray relative group overflow-hidden">
            <iframe
              src={mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale-[100%] contrast-[120%] opacity-70 transition-all duration-500 group-hover:grayscale-0 group-hover:opacity-100"
            ></iframe>
            

            <a 
                href={mapDirectLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="absolute inset-0 z-10 flex items-center justify-center bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer"
            >
                <div className="border border-neon-cyan bg-black px-4 py-2 font-orbitron text-neon-cyan tracking-widest hover:bg-neon-cyan hover:text-black transition-colors">
                    OPEN MAPS
                </div>
            </a>
          </div>

          <div className="md:hidden w-full max-w-xs">
            <Button asChild className="w-full h-12 bg-cyber-gray/50 border-2 border-neon-cyan text-neon-cyan hover:bg-neon-cyan hover:text-black font-orbitron tracking-widest transition-all">
                <a href={mapDirectLink} target="_blank" rel="noopener noreferrer">
                    <Map className="w-5 h-5 mr-2" />
                    OPEN IN MAPS
                </a>
            </Button>
          </div>

        </div>
      </div>


      <div className="w-full border-t border-gray-800 mt-16 pt-8 text-center text-gray-500 font-mono text-xs md:text-sm space-y-2">
        <p>
          Designed & Developed by{" "}
          <a
            href="https://www.linkedin.com/in/varun-khandelwal-399005286/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neon-cyan hover:text-neon-yellow hover:underline transition-colors duration-300"
          >
            Varun Khandelwal
          </a>
        </p>
        <p>Department of Computer Science</p>
        <p>© Copyright 2025. All rights reserved.</p>
      </div>
    </footer>
  );
}
