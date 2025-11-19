import { TitleBanner } from "@/components/sections/TitleBanner";
import CyberImage from "@/components/CyberImage"; // Using our safe image component
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export default function SchedulePage() {
  // Path to your schedule image
  const scheduleImage = "/images/Schedule.jpg"; 
  // Path to rulebook (keeping this button as a utility)
  const rulebookPath = "/rulebook.pdf";

  return (
    <main className="min-h-screen bg-cyber-black py-24">
      <TitleBanner 
        title="EVENT_SCHEDULE" 
        subtitle="Timeline & Protocols" 
        className="mb-12"
      />
      
      <section className="max-w-6xl mx-auto px-4 md:px-8 text-center">
        
        {/* Schedule Image Container */}
        <div className="relative clip-tile border-2 border-neon-cyan/30 bg-cyber-gray/20 p-2 md:p-4 shadow-[0_0_30px_rgba(0,243,255,0.1)]">
          <CyberImage 
            src={scheduleImage}
            alt="Event Schedule"
            className="w-full h-auto object-contain rounded-sm"
          />
        </div>

        {/* Download Button (Optional Utility) */}
        <div className="mt-12">
            <Button asChild variant="outline" size="lg" className="border-neon-yellow text-neon-yellow hover:bg-neon-yellow hover:text-black font-orbitron tracking-wider">
                <Link href={rulebookPath} target="_blank" rel="noopener noreferrer">
                    RULEBOOK PDF
                </Link>
            </Button>
        </div>

      </section>
    </main>
  );
}
