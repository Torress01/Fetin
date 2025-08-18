import Header from "@/components/Header";
import AnimatedBackground from "@/components/AnimatedBackground";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import DemoSection from "@/components/DemoSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden">
      <AnimatedBackground />
      <HeroSection />
      <FeaturesSection />
      <DemoSection />
      <Footer />
    </main>
  );
}
