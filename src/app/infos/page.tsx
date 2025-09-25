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
    links: ["Visualizador interativo"],
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
    id: "image-segmentation",
    icon: "🎯",
    title: "Segmentação de Imagens",
    description:
      "Técnicas para separar e identificar regiões de interesse em imagens, incluindo flood fill, watershed e algoritmos baseados em cor.",
    category: "Multimídia",
    links: ["Watershed", "Color-Based"],
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
  {
    id: "audio",
    icon: "🎵",
    title: "Processamento Digital de Áudio",
    description:
      "Fundamentos do áudio digital: digitalização, codecs, formatos de arquivo e aplicações modernas em streaming, jogos e comunicação.",
    category: "Multimídia",
    links: ["Digitalização", "Codecs", "Aplicações"],
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
    <div className="min-h-screen flex flex-col text-center px-4 sm:px-6 lg:px-8 pt-28 sm:pt-36 relative bg-slate-900 overflow-hidden">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="py-16 sm:py-20 text-center text-white relative z-10">
        <div className="max-w-5xl mx-auto px-4">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-6 bg-gradient-to-r from-white via-purple-300 to-blue-400 bg-clip-text text-transparent drop-shadow-2xl leading-tight">
            Explorando Computação Gráfica & Multimídia
          </h1>
          <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto mb-8 sm:mb-10 animate-fade-in delay-200">
            Mergulhe fundo nos conceitos teóricos através de explicações
            interativas, exemplos práticos e recursos complementares
          </p>

          {/* Search Box */}
          <div className="w-full max-w-xl mx-auto relative animate-fade-in delay-400">
            <input
              type="text"
              placeholder="Buscar conceitos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-5 py-3 sm:py-4 rounded-full bg-white/10 backdrop-blur-sm text-white placeholder-white/60 border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/30 focus:-translate-y-0.5 transition-all duration-300 shadow-xl text-sm sm:text-base"
            />
            <button className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/10 px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm text-white cursor-pointer">
              Procurar
            </button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="bg-black/20 rounded-t-3xl relative z-10 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
          {/* Filter Tabs */}
          <div className="mb-8 sm:mb-12 px-2">
            {/* Principais mudanças aqui:
    - Removemos a div com 'overflow-x-auto'.
    - Usamos 'flex flex-wrap' para permitir a quebra de linha.
    - 'justify-center' para centralizar os botões.
    - 'gap-2' para o espaçamento entre eles.
  */}
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 whitespace-nowrap ${
                    activeCategory === category
                      ? "bg-white text-gray-900" // Estilo ativo simplificado para melhor contraste
                      : "text-white/70 bg-white/10 hover:text-white"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Concepts Grid */}
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 sm:gap-8">
            {filteredConcepts.map((concept, index) => (
              <div
                key={index}
                onClick={() => handleConceptClick(concept.id)}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-lg hover:bg-white/10 transition-all duration-300 cursor-pointer group relative overflow-hidden border border-white/10"
              >
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500/70 to-blue-600/70 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />

                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center text-xl sm:text-2xl text-white mb-4 sm:mb-5 border border-white/10">
                  {concept.icon}
                </div>

                <div className="mb-3 sm:mb-4">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-white/10 text-white/80 border border-white/10">
                    {concept.category}
                  </span>
                </div>

                <h3 className="text-lg sm:text-2xl font-bold text-white mb-3 sm:mb-4">
                  {concept.title}
                </h3>

                <p className="text-white/80 leading-relaxed text-sm sm:text-base mb-5 sm:mb-6">
                  {concept.description}
                </p>

                <div className="flex gap-2 sm:gap-3 flex-wrap">
                  {concept.links.map((link, linkIndex) => (
                    <button
                      key={linkIndex}
                      className="bg-white/10 backdrop-blur-sm border border-white/10 text-white/90 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 hover:bg-white/15 relative overflow-hidden group"
                    >
                      <span className="relative z-10">{link}</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500" />
                    </button>
                  ))}
                </div>

                <div className="mt-5 sm:mt-6 text-white/60 text-xs sm:text-sm font-medium">
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
