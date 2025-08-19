"use client";

import Link from "next/link";
import Header from "./Header";

export default function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col text-center px-8 pt-36 relative bg-gradient-to-br from-slate-900 via-purple-900 to-blue-900 overflow-hidden">
      <Header />

      {/* Main Hero Content */}
      <div className="flex-1 flex flex-col justify-center items-center max-w-6xl mx-auto">
        {/* Main Title */}
        <div className="mb-8">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-black mb-6 bg-gradient-to-r from-white via-purple-300 to-blue-400 bg-clip-text text-transparent drop-shadow-2xl leading-tight">
            Pixel Forge
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full mb-6"></div>
        </div>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl lg:text-3xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
          Plataforma educacional interativa para
          <span className="font-semibold text-purple-300">
            {" "}
            Computação Gráfica{" "}
          </span>
          e <span className="font-semibold text-blue-300">Multimídia</span>
        </p>

        {/* Target Audience */}
        <div className="flex flex-col sm:flex-row gap-6 mb-16">
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-8 py-6 hover:bg-white/15 transition-all duration-300">
            <div className="text-3xl mb-3">👨‍🎓</div>
            <h3 className="text-lg font-semibold text-white mb-2">
              Para Alunos
            </h3>
            <p className="text-white/80 text-sm">
              Aprenda através de experimentação visual e interativa
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-8 py-6 hover:bg-white/15 transition-all duration-300">
            <div className="text-3xl mb-3">👨‍🏫</div>
            <h3 className="text-lg font-semibold text-white mb-2">
              Para Professores
            </h3>
            <p className="text-white/80 text-sm">
              Ferramentas didáticas para ensinar conceitos complexos
            </p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 mb-16">
          <Link
            href="/infos"
            className="group bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:bg-white/20 hover:-translate-y-1 flex items-center justify-center gap-3"
          >
            <span>📚 Ver Material Teórico</span>
            <span className="group-hover:translate-x-1 transition-transform duration-300">
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
