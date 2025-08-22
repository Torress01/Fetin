"use client";

import Link from "next/link";

interface ToolCard {
  title: string;
  description: string;
  icon: string;
  href: string;
  color: string;
  features: string[];
}

const tools: ToolCard[] = [
  {
    title: "Processamento de Imagem",
    description: "Explore algoritmos de processamento e manipulação de imagens",
    icon: "🖼️",
    href: "/image-fft",
    color: "blue",
    features: ["FFT", "Filtros"],
  },
  {
    title: "Anti-Aliasing",
    description: "Entenda e experimente técnicas de suavização de bordas",
    icon: "✨",
    href: "/aliasing",
    color: "green",
    features: ["Análise Visual"],
  },
  {
    title: "Compressão de Dados",
    description: "Aprenda sobre algoritmos de compressão e codificação",
    icon: "🗜️",
    href: "/compress",
    color: "orange",
    features: ["JPEG", "WEBP", "FRACTAL", "DCT"],
  },
  {
    title: "Segmentação de Imagens",
    description: "Ferramenta interativa para segmentação inteligente e manual",
    icon: "🎯",
    href: "/segmentation",
    color: "purple",
    features: ["Seleção inteligente", "Export"],
  },
  {
    title: "Vetorial vs Matricial",
    description: "Compare a qualidade de imagens vetoriais e matriciais",
    icon: "🎨",
    href: "/vector",
    color: "pink",
    features: [
      "Zoom Interativo",
      "Comparação Visual",
      "Qualidade",
    ],
  },
];
const getColorClasses = (color: string) => {
  switch (color) {
    case "purple":
      return "from-purple-500/30 to-purple-500/10 hover:shadow-purple-500/20 hover:border-purple-500/50";
    case "blue":
      return "from-blue-500/30 to-blue-500/10 hover:shadow-blue-500/20 hover:border-blue-500/50";
    case "green":
      return "from-green-500/30 to-green-500/10 hover:shadow-green-500/20 hover:border-green-500/50";
    case "orange":
      return "from-orange-500/30 to-orange-500/10 hover:shadow-orange-500/20 hover:border-orange-500/50";
    case "pink":
      return "from-pink-500/30 to-pink-500/10 hover:shadow-pink-500/20 hover:border-pink-500/50";
    default:
      return "from-purple-500/30 to-purple-500/10 hover:shadow-purple-500/20 hover:border-purple-500/50";
  }
};

export default function SectionsComponent() {
  return (
    <section
      id="section-canvas"
      className="py-24 px-8 bg-gradient-to-b from-slate-900 to-black"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent">
            Multimídia
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            Domine técnicas fundamentais de processamento de imagens,
            compressão, anti-aliasing, segmentação e comparação vetorial vs
            matricial através de demonstrações visuais práticas e interativas.
          </p>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {tools.map((tool, index) => (
            <Link
              key={index}
              href={tool.href}
              className={`group relative overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-white/20 min-h-[400px] flex flex-col ${getColorClasses(
                tool.color
              )}`}
            >
              {/* Gradient overlay on hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${getColorClasses(
                  tool.color
                )}`}
              ></div>

              {/* Header */}
              <div className="relative flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br rounded-2xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300 ${getColorClasses(
                      tool.color
                    )}`}
                  >
                    {tool.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-white transition-colors duration-300">
                      {tool.title}
                    </h3>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="relative text-white/80 mb-6 leading-relaxed flex-grow">
                {tool.description}
              </p>

              {/* Features */}
              <div className="relative flex flex-wrap gap-2 mb-6">
                {tool.features.map((feature) => (
                  <span
                    key={feature}
                    className="bg-white/10 text-white/90 px-3 py-1 rounded-full text-sm border border-white/20 hover:scale-105 transition-transform duration-300"
                  >
                    {feature}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <div className="relative flex items-center justify-between mt-auto">
                <span className="text-white/60 text-sm">
                  Clique para explorar
                </span>
                <span className="text-2xl group-hover:translate-x-2 transition-transform duration-300">
                  →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
