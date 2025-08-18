"use client";

interface Feature {
  icon: string;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: "🎨",
    title: "Canvas Interativo",
    description:
      "Desenhe e manipule formas geométricas com ferramentas profissionais. Sistema de grid, snap e réguas para precisão máxima.",
  },
  {
    icon: "🔄",
    title: "Transformações 2D",
    description:
      "Experimente rotação, translação, escala e cisalhamento em tempo real. Visualize matrizes de transformação dinamicamente.",
  },
  {
    icon: "〰️",
    title: "Curvas de Bézier",
    description:
      "Crie curvas suaves interativas. Manipule pontos de controle e entenda como funcionam as curvas paramétricas.",
  },
  {
    icon: "🌈",
    title: "Sistema de Cores",
    description:
      "Explore diferentes espaços de cor (RGB, HSV, Lab). Misture cores e entenda teoria das cores na prática.",
  },
  {
    icon: "⚡",
    title: "Animações",
    description:
      "Crie animações fluidas com timeline interativa. Aprenda interpolação e princípios de animação.",
  },
  {
    icon: "📊",
    title: "Visualização de Dados",
    description:
      "Propriedades em tempo real, matrizes de transformação e histórico de operações sempre visíveis.",
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-24 px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent">
          Recursos Poderosos
        </h2>
        <p className="text-xl text-white/70 max-w-2xl mx-auto">
          Tudo que você precisa para dominar computação gráfica em um só lugar
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:border-purple-500/30 hover:shadow-2xl hover:shadow-purple-500/20 group relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <div className="relative z-10">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-6 shadow-lg shadow-purple-500/40">
                {feature.icon}
              </div>

              <h3 className="text-2xl font-bold mb-4 text-white">
                {feature.title}
              </h3>

              <p className="text-white/80 leading-relaxed">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
