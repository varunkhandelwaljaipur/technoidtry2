import { TitleBanner } from "@/components/sections/TitleBanner";
import GallerySection from "@/components/GallerySection";
import SocialMediaLinks from "@/components/SocialMediaLinks";
import BackToTop from "@/components/BackToTop";

export default function GalleryPage() {
  return (
    <main className="min-h-screen">
      <TitleBanner title="VISUAL_ARCHIVE" subtitle="Loading Data Logs..." />
      <GallerySection />
    </main>
  );
}
