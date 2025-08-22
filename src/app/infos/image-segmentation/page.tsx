"use client";

import { useRouter } from "next/navigation";
import Header from "@/components/Header";

export default function ImageSegmentationPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-[#0a0a0f] relative overflow-hidden">
      <Header />

      <main className="pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-5">
          {/* Breadcrumb */}
          <div className="mb-8">
            <button
              onClick={() => router.back()}
              className="text-white/60 hover:text-white transition-colors duration-300 flex items-center gap-2"
            >
              ← Voltar
            </button>
          </div>

          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="w-20 h-20 bg-gradient-to-br from-purple-500/30 to-blue-600/30 backdrop-blur-sm rounded-2xl flex items-center justify-center text-4xl text-white mb-6 shadow-lg border border-white/20 mx-auto">
              🎯
            </div>
            <h1 className="text-5xl font-extrabold text-white mb-4">
              Segmentação de Imagens
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Técnicas para separar e identificar regiões de interesse em
              imagens digitais
            </p>
          </div>

          {/* Content Sections */}
          <div className="space-y-16">
            {/* História */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                História
              </h2>
              <div className="text-white/80 space-y-4 leading-relaxed">
                <p>
                  A segmentação de imagens tem suas origens na década de 1960,
                  quando pesquisadores começaram a desenvolver algoritmos para
                  análise automática de imagens médicas e satelitais.
                </p>
                <p>
                  O algoritmo de flood fill foi desenvolvido por volta de 1979,
                  sendo uma das técnicas mais fundamentais de segmentação. Ele
                  permite preencher regiões conectadas de pixels com a mesma
                  cor.
                </p>
                <p>
                  Na década de 1990, algoritmos mais sofisticados como watershed
                  e region growing foram desenvolvidos, permitindo segmentação
                  mais precisa e robusta para aplicações médicas e industriais.
                </p>
              </div>
            </section>

            {/* Teoria */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                Algoritmos Principais
              </h2>
              <div className="text-white/80 space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    Flood Fill (Preenchimento por Inundação)
                  </h3>
                  <p className="leading-relaxed mb-4">
                    Algoritmo recursivo que preenche uma região conectada:
                  </p>
                  <div className="bg-black/30 rounded-lg p-4 font-mono text-sm">
                    function floodFill(x, y, targetColor, replacementColor):
                    <br />
                    &nbsp;&nbsp;if pixel(x,y) != targetColor: return
                    <br />
                    &nbsp;&nbsp;setPixel(x,y, replacementColor)
                    <br />
                    &nbsp;&nbsp;floodFill(x+1, y, targetColor, replacementColor)
                    <br />
                    &nbsp;&nbsp;floodFill(x-1, y, targetColor, replacementColor)
                    <br />
                    &nbsp;&nbsp;floodFill(x, y+1, targetColor, replacementColor)
                    <br />
                    &nbsp;&nbsp;floodFill(x, y-1, targetColor, replacementColor)
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    Segmentação por Cor
                  </h3>
                  <p className="leading-relaxed mb-4">
                    Baseada na similaridade de cores entre pixels:
                  </p>
                  <div className="bg-black/30 rounded-lg p-4 font-mono text-sm">
                    distance = √[(R₁-R₂)² + (G₁-G₂)² + (B₁-B₂)²]
                    <br />
                    if distance ≤ tolerance:
                    <br />
                    &nbsp;&nbsp;segmentar pixel
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    Watershed (Bacia Hidrográfica)
                  </h3>
                  <p className="leading-relaxed mb-4">
                    Algoritmo que trata a imagem como um mapa topográfico:
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-black/20 rounded-lg p-4">
                      <h4 className="text-white font-semibold mb-2">
                        Marcadores
                      </h4>
                      <p className="text-sm">
                        Pontos de partida para cada região
                      </p>
                    </div>
                    <div className="bg-black/20 rounded-lg p-4">
                      <h4 className="text-white font-semibold mb-2">
                        Inundação
                      </h4>
                      <p className="text-sm">
                        Simulação de água subindo dos marcadores
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Curiosidades */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                Curiosidades
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-black/20 rounded-lg p-6 border border-white/10">
                  <h3 className="text-lg font-semibold text-white mb-3">
                    Photoshop
                  </h3>
                  <p className="text-white/80 text-sm leading-relaxed">
                    A ferramenta "Magic Wand" do Photoshop usa uma variação do
                    flood fill com tolerância de cor para seleção automática.
                  </p>
                </div>

                <div className="bg-black/20 rounded-lg p-6 border border-white/10">
                  <h3 className="text-lg font-semibold text-white mb-3">
                    Medicina
                  </h3>
                  <p className="text-white/80 text-sm leading-relaxed">
                    Segmentação é crucial em tomografia computadorizada para
                    identificar órgãos e detectar anomalias automaticamente.
                  </p>
                </div>

                <div className="bg-black/20 rounded-lg p-6 border border-white/10">
                  <h3 className="text-lg font-semibold text-white mb-3">
                    Visão Computacional
                  </h3>
                  <p className="text-white/80 text-sm leading-relaxed">
                    Carros autônomos usam segmentação para identificar
                    pedestres, outros veículos e obstáculos em tempo real.
                  </p>
                </div>

                <div className="bg-black/20 rounded-lg p-6 border border-white/10">
                  <h3 className="text-lg font-semibold text-white mb-3">
                    Satélites
                  </h3>
                  <p className="text-white/80 text-sm leading-relaxed">
                    Imagens de satélite são segmentadas para mapear uso do solo,
                    monitorar desmatamento e analisar mudanças climáticas.
                  </p>
                </div>
              </div>
            </section>

            {/* Aplicações */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                Aplicações Práticas
              </h2>
              <div className="text-white/80 space-y-4">
                <div className="flex items-start gap-4">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      Diagnóstico Médico
                    </h3>
                    <p>
                      Identificação automática de tumores, análise de raios-X e
                      segmentação de órgãos em exames de imagem.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      Veículos Autônomos
                    </h3>
                    <p>
                      Detecção de objetos, identificação de faixas de trânsito e
                      reconhecimento de sinais de trânsito.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      Controle de Qualidade
                    </h3>
                    <p>
                      Inspeção automática de produtos, detecção de defeitos e
                      classificação de itens em linhas de produção.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      Jogos e Entretenimento
                    </h3>
                    <p>
                      Remoção de fundos em fotos, efeitos especiais e
                      reconhecimento de gestos para realidade virtual.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      Pesquisa Científica
                    </h3>
                    <p>
                      Análise de células em microscopia, contagem de partículas
                      e estudo de padrões em imagens científicas.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Demo Link */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                Experimente na Prática
              </h2>
              <div className="text-center">
                <p className="text-white/80 mb-6">
                  Teste nossa ferramenta interativa de segmentação com flood
                  fill e seleção inteligente por cor.
                </p>
                <button
                  onClick={() => router.push("/segmentation")}
                  className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-500/40"
                >
                  Acessar Ferramenta de Segmentação
                </button>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
