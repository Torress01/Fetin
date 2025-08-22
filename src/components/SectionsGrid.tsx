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
    title: "Canvas Interativo",
    description:
      "Desenhe e manipule formas geométricas com ferramentas profissionais",
    icon: "🎨",
    href: "/canvas",
    color: "purple",
    features: [
      "Transformações 2D",
      "Curvas de Bézier",
      "Sistema de cor",
      "Animações",
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
          <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-white to-purple-400 bg-clip-text ">
            Computação Gráfica
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            Aprenda e visualize conceitos de computação gráfica em tempo real
            usando nossa ferramenta interativa para criar e manipular formas,
            animações e transformações.
          </p>
        </div>

        {/* Tools Grid */}

        <div className="flex justify-center gap-8 mb-16 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {tools.map((tool, index) => (
            <Link
              key={index}
              href={tool.href}
              className={`group relative overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl aspect-square flex flex-col items-center justify-center p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-white/20 ${getColorClasses(
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
              <div className="relative flex gap-4 items-center justify-center mb-4 z-10">
                <div
                  className={`w-16 h-16 bg-gradient-to-br rounded-2xl flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300 ${getColorClasses(
                    tool.color
                  )}`}
                >
                  {tool.icon}
                </div>
                <h3 className="mt-2 text-2xl font-bold text-white group-hover:text-white transition-colors duration-300 text-center">
                  {tool.title}
                </h3>
              </div>

              {/* Description */}
              <p className="relative text-white/80 mb-7 leading-relaxed text-center z-10">
                {tool.description}
              </p>

              {/* Features */}
              <div className="relative flex flex-wrap gap-2 mb-4 justify-center z-10">
                {tool.features.map((feature) => (
                  <span
                    key={feature}
                    className="bg-slate-900 text-white/90 px-3 py-1 rounded-full text-sm border border-white/20 hover:scale-105 transition-transform duration-300"
                  >
                    {feature}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <div className="relative flex items-center justify-center gap-2 mt-10 z-10">
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
