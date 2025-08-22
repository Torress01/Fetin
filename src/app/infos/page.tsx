"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Header from "@/components/Header";

interface Concept {
  id: string;
  icon: string;
  title: string;
  description: string;
  category: string;
  links: string[];
}

const concepts: Concept[] = [
  {
    id: "bezier-curves",
    icon: "📐",
    title: "Curvas de Bézier",
    description:
      "Curvas paramétricas definidas por pontos de controle, amplamente utilizadas em design gráfico, animação e modelagem 3D. Fundamentais para criar formas suaves e orgânicas.",
    category: "Computação Gráfica",
    links: ["Teoria", "Demo Interativa", "Aplicações"],
  },
  {
    id: "geometric-transformations",
    icon: "🔄",
    title: "Transformações Geométricas",
    description:
      "Operações matemáticas para translação, rotação, escala e cisalhamento de objetos em espaços 2D e 3D usando matrizes.",
    category: "Computação Gráfica",
    links: ["Matrizes", "Visualizador", "Exercícios"],
  },
  {
    id: "animations",
    icon: "🕺",
    title: "Animações",
    description:
      "Sequências temporais que criam movimento através da interpolação entre estados, fundamentais em jogos, interfaces e mídia digital. Essenciais para dar vida e fluidez às experiências visuais interativas.",
    category: "Computação Gráfica",
    links: ["Teoria", "História", "Aplicações"],
  },
  {
    id: "ray-tracing",
    icon: "🎨",
    title: "Ray Tracing",
    description:
      "Técnica de renderização que simula o comportamento físico da luz, criando reflexos, refrações e sombras realistas em tempo real.",
    category: "Multimídia",
    links: ["Algoritmo", "Exemplos", "Performance"],
  },
  {
    id: "video-compression",
    icon: "🎬",
    title: "Compressão de Vídeo",
    description:
      "Algoritmos e codecs para reduzir o tamanho de arquivos de vídeo mantendo qualidade visual, incluindo H.264, H.265 e AV1.",
    category: "Multimídia",
    links: ["Codecs", "Comparativo", "Implementação"],
  },
  {
    id: "color-spaces",
    icon: "🌈",
    title: "Espaços de Cor",
    description:
      "Modelos matemáticos para representar cores digitalmente, incluindo RGB, HSV, CMYK e Lab, cada um otimizado para diferentes aplicações.",
    category: "Computação Gráfica",
    links: ["Modelos", "Conversor", "Aplicações"],
  },
  {
    id: "lighting-models",
    icon: "💡",
    title: "Modelos de Iluminação",
    description:
      "Algoritmos para simular como a luz interage com superfícies, incluindo Phong, Blinn-Phong e modelos fisicamente baseados (PBR).",
    category: "Multimídia",
    links: ["Phong", "PBR", "Shaders"],
  },
  {
    id: "image-segmentation",
    icon: "🎯",
    title: "Segmentação de Imagens",
    description:
      "Técnicas para separar e identificar regiões de interesse em imagens, incluindo flood fill, watershed e algoritmos baseados em cor.",
    category: "Multimídia",
    links: ["Flood Fill", "Watershed", "Color-Based"],
  },
  {
    id: "vector-raster",
    icon: "🎨",
    title: "Vetorial vs Matricial",
    description:
      "Diferenças fundamentais entre imagens vetoriais (SVG) e matriciais (JPG/PNG), incluindo escalabilidade, qualidade e aplicações.",
    category: "Multimídia",
    links: ["Comparação", "Zoom Interativo", "Aplicações"],
  },
];

const categories = ["Todos", "Computação Gráfica", "Multimídia"];

export default function InfosPage() {
  const router = useRouter();
  const [activeCategory, setActiveCategory] = useState("Todos");
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredConcepts, setFilteredConcepts] = useState(concepts);

  useEffect(() => {
    let filtered = concepts;

    // Filter by category
    if (activeCategory !== "Todos") {
      filtered = filtered.filter(
        (concept) => concept.category === activeCategory
      );
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(
        (concept) =>
          concept.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          concept.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredConcepts(filtered);
  }, [searchTerm, activeCategory]);

  const handleConceptClick = (conceptId: string) => {
    router.push(`/infos/${conceptId}`);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0f] relative overflow-hidden">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="py-20 text-center text-white relative z-10">
        <div className="max-w-7xl mx-auto px-5 pt-20">
          <h1 className="text-5xl font-extrabold mb-5 drop-shadow-lg animate-fade-in">
            Explorando Computação Gráfica & Multimídia
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-10 animate-fade-in delay-200">
            Mergulhe fundo nos conceitos teóricos através de explicações
            interativas, exemplos práticos e recursos complementares
          </p>

          {/* Search Box */}
          <div className="max-w-2xl mx-auto relative animate-fade-in delay-400">
            <input
              type="text"
              placeholder="Buscar conceitos, algoritmos, técnicas..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-5 py-4 rounded-full bg-white/10 backdrop-blur-sm text-white placeholder-white/60 border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/30 focus:-translate-y-0.5 transition-all duration-300 shadow-xl"
            />
            <button className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-white/10 w-10 h-10 rounded-full text-white hover:scale-110 transition-all duration-300 cursor-pointer">
              🔍
            </button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="bg-black/20 backdrop-blur-sm rounded-t-3xl relative z-10 shadow-2xl border-t border-white/10">
        <div className="max-w-7xl mx-auto px-5 py-16">
          {/* Filter Tabs */}
          <div className="text-center mb-16">
            <div className="inline-flex bg-white/5 backdrop-blur-sm rounded-full p-1 shadow-inner border border-white/10">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 cursor-pointer ${
                    activeCategory === category
                      ? "bg-gradient-to-r from-purple-500 to-blue-600 text-white shadow-lg"
                      : "text-white/70 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Concepts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {filteredConcepts.map((concept, index) => (
              <div
                key={index}
                onClick={() => handleConceptClick(concept.id)}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:-translate-y-2 hover:shadow-2xl hover:bg-white/10 transition-all duration-400 cursor-pointer group relative overflow-hidden border border-white/10"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />

                <div className="w-15 h-15 bg-gradient-to-br from-purple-500/30 to-blue-600/30 backdrop-blur-sm rounded-2xl flex items-center justify-center text-2xl text-white mb-5 shadow-lg border border-white/20">
                  {concept.icon}
                </div>

                <div className="mb-4">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-white/80 border border-white/20">
                    {concept.category}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-4">
                  {concept.title}
                </h3>

                <p className="text-white/80 leading-relaxed mb-6">
                  {concept.description}
                </p>

                <div className="flex gap-3 flex-wrap">
                  {concept.links.map((link, linkIndex) => (
                    <button
                      key={linkIndex}
                      className="bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/20 hover:shadow-lg relative overflow-hidden group"
                    >
                      <span className="relative z-10">{link}</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500" />
                    </button>
                  ))}
                </div>

                <div className="mt-6 text-white/60 text-sm font-medium">
                  Clique para saber mais →
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
