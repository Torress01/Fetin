"use client";

import Link from "next/link";
import SectionsGrid from "./SectionsGrid";
import Header from "./Header";

export default function HeroSection() {
  return (
    <section className="h-[900px] flex flex-col text-center px-8 pt-36 relative bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 overflow-hidden">
      <Header />
      <div>
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent drop-shadow-lg">
          Pixel Forge
        </h1>

        <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-3xl mx-auto">
          Uma plataforma moderna para aprender e experimentar conceitos de
          computação gráfica e multimídia através de ferramentas visuais e
          interativas.
        </p>
      </div>

      <SectionsGrid />

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white/60 text-sm flex flex-col items-center gap-2 animate-bounce">
        <span>RolA para baixo</span>
        <div>↓</div>
      </div>
    </section>
  );
}
