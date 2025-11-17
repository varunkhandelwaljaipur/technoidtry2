import { Instagram, Linkedin, Github } from "lucide-react";

export default function SocialMediaLinks() {
  // This is the variable we defined
  const linkClass = "w-10 h-10 bg-gray-900/50 border border-gray-700 text-gray-400 flex items-center justify-center hover:border-neon-pink hover:text-neon-pink transition-all";
  
  return (
    <div className="flex flex-col gap-4">
      <a href="#" className={linkClass} target="_blank" rel="noopener noreferrer">
        <Instagram />
      </a>
      {/* THE ERROR WAS HERE. 
        I used 'linkShorthand' by mistake. It is now fixed to 'linkClass'.
      */}
      <a href="#" className={linkClass} target="_blank" rel="noopener noreferrer">
        <Linkedin />
      </a>
      <a href="#" className={linkClass} target="_blank" rel="noopener noreferrer">
        <Github />
      </a>
    </div>
  );
}
