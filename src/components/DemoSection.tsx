"use client";

import Link from "next/link";

export default function DemoSection() {
  return (
    <section id="demo" className="py-24 px-8 bg-black/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl font-extrabold mb-6 bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent">
            Veja o CG Playground em Ação
          </h2>
          <p className="text-lg text-white/80 mb-8 leading-relaxed">
            Interface intuitiva e moderna que torna o aprendizado de computação
            gráfica divertido e eficaz. Experimente transformações, cores e
            animações de forma visual e interativa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/canvas"
              className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-4 rounded-2xl text-lg font-semibold flex items-center gap-2 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-500/40"
            >
              🎮 Experimentar Agora
            </Link>
            <Link
              href="/aliasing"
              className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-8 py-4 rounded-2xl text-lg font-semibold flex items-center gap-2 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-orange-500/40"
            >
              📊 Demonstração de Aliasing
            </Link>
            <Link
              href="/image-fft"
              className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-8 py-4 rounded-2xl text-lg font-semibold flex items-center gap-2 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/40"
            >
              🖼️ Editor FFT
            </Link>
            <Link
              href="/compress"
              className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-2xl text-lg font-semibold flex items-center gap-2 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-green-500/40"
            >
              🗜️ Compressão de Imagens
            </Link>
          </div>
        </div>

        <div className="bg-black/80 border border-white/10 rounded-2xl p-8 relative overflow-hidden">
          <div className="w-full h-80 bg-gray-900 rounded-xl relative overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                {/* Demo Circle */}
                <div className="absolute w-15 h-15 bg-gradient-to-br from-purple-500 to-blue-600 rounded-full -top-20 -left-8 animate-bounce" />

                {/* Demo Square */}
                <div
                  className="absolute w-12 h-12 bg-gradient-to-br from-pink-500 to-red-500 rounded-lg -top-6 -right-20 animate-bounce"
                  style={{ animationDelay: "1s" }}
                />

                {/* Demo Triangle */}
                <div
                  className="absolute w-0 h-0 border-l-[25px] border-r-[25px] border-b-[50px] border-l-transparent border-r-transparent border-b-cyan-500 -bottom-20 -left-6 animate-bounce"
                  style={{ animationDelay: "2s" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
