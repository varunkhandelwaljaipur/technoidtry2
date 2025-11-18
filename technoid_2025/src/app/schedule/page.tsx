import { TitleBanner } from "@/components/sections/TitleBanner";
import Link from "next/link";
import { ArrowDownCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function SchedulePage() {
  // Assuming the Rulebook PDF is placed at /public/rulebook.pdf
  const rulebookPath = "/rulebook.pdf"; 

  return (
    <main className="min-h-screen bg-cyber-black py-24">
      <TitleBanner 
        title="EVENT_SCHEDULE" 
        subtitle="Download Master Document" 
        className="mb-12"
      />
      
      <section className="max-w-4xl mx-auto p-8 bg-cyber-gray/50 border border-neon-cyan/30 text-center clip-tile">
        <h2 className="text-3xl font-orbitron text-neon-yellow mb-4">
          ACCESS DENIED // DOCUMENT ARCHIVE
        </h2>
        <p className="text-lg text-gray-300 mb-8">
          The definitive timetable and rules for all events are contained within the official master file. 
        </p>

        <Button asChild size="lg" className="w-full md:w-auto">
          <Link href={rulebookPath} target="_blank" rel="noopener noreferrer">
            <ArrowDownCircle className="w-5 h-5 mr-2" />
            Download Rulebook & Schedule (PDF)
          </Link>
        </Button>
      </section>

      {/* Placeholder for Schedule Details if you want to add them later */}
      <section className="max-w-7xl mx-auto mt-16 px-6">
          {/* You can paste your schedule details here later if needed */}
      </section>
    </main>
  );
}
