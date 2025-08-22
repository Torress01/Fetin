import HeroSection from "@/components/HeroSection";
import SectionsGrid from "@/components/SectionsGrid";

import Footer from "@/components/Footer";
import Multimedia from "@/components/Multimedia";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden">
      <HeroSection />
      <SectionsGrid />
      <Multimedia />
      <Footer />
    </main>
  );
}
