import { TitleBanner } from "@/components/sections/TitleBanner";

export default function SponsorsPage() {
  return (
    <main className="min-h-screen">
      <TitleBanner title="ALLIANCE_PARTNERS" subtitle="Our Valued Investors" />
      
      <section className="max-w-7xl mx-auto py-20 px-6 text-center">
        {/* TIER 1 */}
        <div className="mb-20">
          <h2 className="text-3xl font-orbitron text-neon-cyan mb-10 border-b border-neon-cyan/30 inline-block pb-2">
            TITANIUM_TIER
          </h2>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="w-72 h-36 border border-neon-cyan/50 bg-cyber-gray/80 flex items-center justify-center text-gray-400 font-orbitron text-2xl">
              [SPONSOR_LOGO]
            </div>
          </div>
        </div>

        {/* TIER 2 */}
        <div>
          <h2 className="text-3xl font-orbitron text-neon-yellow mb-10 border-b border-neon-yellow/30 inline-block pb-2">
            GOLD_TIER
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
             <div className="w-52 h-28 border border-neon-yellow/30 bg-cyber-gray/60 flex items-center justify-center text-gray-500 font-mono">
               [SPONSOR_LOGO]
             </div>
             <div className="w-52 h-28 border border-neon-yellow/30 bg-cyber-gray/60 flex items-center justify-center text-gray-500 font-mono">
               [SPONSOR_LOGO]
             </div>
          </div>
        </div>
      </section>
    </main>
  );
}
