"use client";

import Link from "next/link";

export default function SectionsComponent() {
  return (
    <main className="relative z-10 max-w-6xl mx-auto px-8 mt-2">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Computação Gráfica Card */}
        <Link
          href="#"
          className="group relative overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/20 hover:border-purple-500/50"
        >
          {/* Gradient overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

          {/* Icon */}
          <div className="relative flex items-center justify-center w-20 h-20 mb-6 text-4xl bg-gradient-to-br from-purple-500/30 to-purple-500/10 rounded-2xl group-hover:scale-110 transition-transform duration-300">
            🎮
          </div>

          {/* Title */}
          <h2 className="relative text-2xl font-bold mb-4 text-white group-hover:text-purple-300 transition-colors duration-300">
            Computação Gráfica
          </h2>

          {/* Description */}
          <p className="relative text-white/80 mb-6 leading-relaxed">
            Experimente transformações 2D, curvas de Bézier, algoritmos de
            renderização e muito mais através de um canvas interativo.
          </p>

          {/* Feature Tags */}
          <div className="relative flex flex-wrap gap-2">
            {[
              "Transformações 2D",
              "Curvas de Bézier",
              "Rasterização",
              "Ray Tracing",
            ].map((tag) => (
              <span
                key={tag}
                className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm border border-purple-500/30 hover:scale-105 transition-transform duration-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </Link>

        {/* Multimídia Card */}
        <Link
          href="#"
          className="group relative overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/20 hover:border-blue-500/50"
        >
          {/* Gradient overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

          {/* Icon */}
          <div className="relative flex items-center justify-center w-20 h-20 mb-6 text-4xl bg-gradient-to-br from-blue-500/30 to-blue-500/10 rounded-2xl group-hover:scale-110 transition-transform duration-300">
            🎬
          </div>

          {/* Title */}
          <h2 className="relative text-2xl font-bold mb-4 text-white group-hover:text-blue-300 transition-colors duration-300">
            Multimídia
          </h2>

          {/* Description */}
          <p className="relative text-white/80 mb-6 leading-relaxed">
            Explore processamento de áudio e vídeo, compressão, síntese sonora e
            técnicas de manipulação de mídia digital.
          </p>

          {/* Feature Tags */}
          <div className="relative flex flex-wrap gap-2">
            {[
              "Processamento de Áudio",
              "Compressão",
              "Síntese Sonora",
              "Filtros",
            ].map((tag) => (
              <span
                key={tag}
                className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm border border-blue-500/30 hover:scale-105 transition-transform duration-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </Link>
      </div>
    </main>
  );
}
