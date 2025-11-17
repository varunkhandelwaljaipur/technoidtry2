import { Instagram, Linkedin, Github } from "lucide-react";

export default function SocialMediaLinks() {
  const linkClass = "w-10 h-10 bg-gray-900/50 border border-gray-700 text-gray-400 flex items-center justify-center hover:border-neon-pink hover:text-neon-pink transition-all";
  return (
    <div className="flex flex-col gap-4">
      <a href="#" className={linkClass} target="_blank" rel="noopener noreferrer">
        <Instagram />
      </a>
      <a href="#" className={linkShorthand} target="_blank" rel="noopener noreferrer">
        <Linkedin />
      </a>
      <a href="#" className={linkClass} target="_blank" rel="noopener noreferrer">
        <Github />
      </a>
    </div>
  );
}
