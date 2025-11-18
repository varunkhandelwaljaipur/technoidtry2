import Link from "next/link";
import { MapPin, Mail, Youtube, Instagram } from "lucide-react";

// Footer navigation links, matching the screenshot
const footerLinks = [
  { name: "Home", href: "/" },
  { name: "Event", href: "/events" },
  { name: "RuleBook", href: "/rulebook" }, // Assuming you will create this page
  { name: "Schedule", href: "/schedule" }, // Assuming you will create this page
  { name: "Gallery", href: "/gallery" },
  // { name: "Organizers", href: "/team" }, // Using /team from our previous structure // REMOVED
  { name: "Contact Us", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="relative w-full border-t border-neon-cyan/20 bg-cyber-black text-gray-400 py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        
        {/* --- LEFT COLUMN: QR SCANNER --- */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="font-orbitron text-lg text-white mb-4 tracking-widest">
            REGISTRATION_SCANNER
          </h3>
          <div className="border-2 border-neon-cyan/50 p-2 bg-cyber-gray">
            <img
              src="https://placehold.co/256x256/050505/00f3ff?text=QR+CODE"
              alt="Registration QR Code"
              width={256}
              height={256}
            />
          </div>
        </div>

        {/* --- CENTER COLUMN: NAV & INFO --- */}
        <div className="flex flex-col items-center text-center">
          {/* Logo Placeholder */}
          <Link href="/" className="text-4xl font-orbitron font-bold text-white tracking-widest mb-8">
            TECHNOID<span className="text-neon-cyan">_25</span>
          </Link>
          
          {/* Footer Nav */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-8 font-rajdhani text-lg">
            {footerLinks.map((link) => (
              <Link key={link.name} href={link.href} className="hover:text-neon-yellow transition-colors">
                {link.name}
              </Link>
            ))}
          </div>

          <div className="w-full border-t border-gray-700 my-4"></div>

          {/* Contact Info */}
          <div className="space-y-4 text-left">
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-neon-pink flex-shrink-0" />
              <span>
                St. Xavier's College Jaipur Nevta<br />
                Mahapura Road, Dam, near Nevta, Jaipur, Rajasthan 302029
              </span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-neon-pink" />
              <a href="mailto:techxclub@sxcjpr.edu.in" className="hover:text-neon-yellow transition-colors">
                techxclub@sxcjpr.edu.in
              </a>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex gap-6 mt-8">
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[#FF0000] transition-colors">
              <Youtube className="w-8 h-8" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[#E1306C] transition-colors">
              <Instagram className="w-8 h-8" />
            </a>
          </div>
        </div>

        {/* --- RIGHT COLUMN: MAP --- */}
        <div className="flex flex-col items-center md:items-end">
          <h3 className="font-orbitron text-lg text-white mb-4 tracking-widest">
            LOCATION_GRID
          </h3>
          <div className="w-full h-80 border-2 border-neon-cyan/50 p-1 bg-cyber-gray">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3561.859600127221!2d75.58809407509503!3d26.84075487672807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c4b2238380771%3A0x1226022c43c33a9a!2sSt.%20Xavier's%20College%2C%20Jaipur!5e0!3m2!1sen!2sus!4v1731904280731!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale-[100%] contrast-[120%] opacity-80"
            ></iframe>
          </div>
        </div>
      </div>

      {/* --- BOTTOM CREDITS --- */}
      <div className="w-full border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 font-mono text-sm space-y-2">
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
