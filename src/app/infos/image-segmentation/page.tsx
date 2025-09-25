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
              ← Voltar para material teórico
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
              <h2 className="flex justify-center text-3xl font-bold text-white mb-6">
                História
              </h2>
              <div className="mb-6">
                <div className="lg:col-span-2 text-white/80 space-y-4 leading-relaxed">
                  <p>
                    As primeiras técnicas de segmentação surgiram nos anos 1960
                    para analisar imagens médicas e satelitais. Métodos simples
                    como limiarização e crescimento de regiões apareceram cedo.
                  </p>
                  <p>
                    O <strong className="text-white">flood fill</strong> (c.
                    1979) popularizou seleção de regiões conectadas. Na década
                    de 1990,
                    <strong className="text-white"> watershed</strong> tornou-se
                    pilar em visão computacional.
                  </p>
                  <p>
                    Hoje, técnicas clássicas convivem com abordagens modernas
                    baseadas em aprendizado profundo para segmentação semântica.
                  </p>
                </div>
              </div>

              {/* Timeline */}
              <div className="bg-black/20 rounded-lg p-6 border border-white/10">
                <h3 className="text-lg font-semibold text-white mb-4">
                  Marcos
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span className="text-white font-medium">1960s:</span>
                    <span className="text-white/80">
                      Primeiros métodos clássicos
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-white font-medium">1979:</span>
                    <span className="text-white/80">
                      Flood fill popularizado
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-white font-medium">1990s:</span>
                    <span className="text-white/80">
                      Watershed e region growing
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span className="text-white font-medium">Hoje:</span>
                    <span className="text-white/80">
                      Segmentação com deep learning
                    </span>
                  </div>
                </div>
              </div>
            </section>

            {/* Princípios Fundamentais */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="flex justify-center text-3xl font-bold text-white mb-6">
                Princípios Fundamentais
              </h2>
              <div className="text-white/80 space-y-6">
                <div className="flex text-center gap-6">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">
                      Algoritmos-Chave
                    </h3>
                    <p className="leading-relaxed mb-4">
                      Segmentação divide a imagem em regiões coerentes. Métodos
                      variam entre limiarização, conectividade e gradiente.
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-black/30 rounded-lg p-4 border border-white/10">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                      Flood Fill
                    </h4>
                    <p className="text-sm text-white/60">
                      Preenche regiões conectadas por cor.
                    </p>
                  </div>

                  <div className="bg-black/30 rounded-lg p-4 border border-white/10">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      Region Growing
                    </h4>
                    <p className="text-sm text-white/60">
                      Expande regiões por similaridade local.
                    </p>
                  </div>

                  <div className="bg-black/30 rounded-lg p-4 border border-white/10">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                      Watershed
                    </h4>
                    <p className="text-sm text-white/60">
                      Usa topografia do gradiente da imagem.
                    </p>
                  </div>

                  <div className="bg-black/30 rounded-lg p-4 border border-white/10">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                      Limiarização
                    </h4>
                    <p className="text-sm text-white/60">
                      Separa foreground/background por um limiar.
                    </p>
                  </div>
                </div>

                <div className="bg-black/20 rounded-lg p-6 border border-white/10">
                  <h3 className="text-xl font-semibold text-white mb-3">
                    Critério de Similaridade
                  </h3>
                  <p className="leading-relaxed mb-4">
                    Pixels são agrupados pela distância de cor:
                  </p>
                  <div className="bg-black/30 rounded-lg p-4 font-mono text-sm border border-white/10">
                    d = √[(R₁-R₂)² + (G₁-G₂)² + (B₁-B₂)²]
                    <br />
                    <span className="text-white/60">
                      se d ≤ tolerância → mesmo segmento
                    </span>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-black/20 rounded-lg p-4 border border-white/10">
                    <h4 className="text-white font-medium mb-2">
                      Conectividade
                    </h4>
                    <p className="text-sm text-white/60">
                      4-vizinhos vs 8-vizinhos
                    </p>
                  </div>
                  <div className="bg-black/20 rounded-lg p-4 border border-white/10">
                    <h4 className="text-white font-medium mb-2">
                      Pré-processamento
                    </h4>
                    <p className="text-sm text-white/60">
                      Suavização e realce de bordas
                    </p>
                  </div>
                  <div className="bg-black/20 rounded-lg p-4 border border-white/10">
                    <h4 className="text-white font-medium mb-2">
                      Pós-processamento
                    </h4>
                    <p className="text-sm text-white/60">
                      Limpeza de ruído e junção de regiões
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Vídeo Educativos */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-3xl font-bold text-white mb-6">
                Vídeo Educativos
              </h2>
              <div className="flex justify-center">
                <div className="bg-black/20 rounded-lg overflow-hidden border border-white/10">
                  <div className="aspect-video bg-gradient-to-br from-purple-500/20 to-blue-600/20 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-4xl mb-2">▶</div>
                      <p className="text-white text-sm">
                        Image Segmentation Basics
                      </p>
                      <a
                        href="https://www.youtube.com/watch?v=Q8o-7Q9yGgE"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-300 text-xs underline"
                      >
                        Assistir no YouTube
                      </a>
                    </div>
                  </div>
                  <div className="p-4">
                    <p className="text-white/80 text-sm">
                      Introdução visual a técnicas clássicas de segmentação
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Curiosidades */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="flex justify-center text-3xl font-bold text-white mb-6">
                Curiosidades
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-black/20 rounded-lg p-6 border border-white/10">
                  <h3 className="text-lg font-semibold text-white mb-3">
                    Photoshop
                  </h3>
                  <p className="text-white/80 text-sm leading-relaxed mb-3">
                    A ferramenta Magic Wand usa variações de flood fill com
                    tolerância.
                  </p>
                </div>

                <div className="bg-black/20 rounded-lg p-6 border border-white/10">
                  <h3 className="text-lg font-semibold text-white mb-3">
                    Medicina
                  </h3>
                  <p className="text-white/80 text-sm leading-relaxed mb-3">
                    Essencial em TC e RM para delinear órgãos e lesões
                    automaticamente.
                  </p>
                </div>

                <div className="bg-black/20 rounded-lg p-6 border border-white/10">
                  <h3 className="text-lg font-semibold text-white mb-3">
                    Autônomos
                  </h3>
                  <p className="text-white/80 text-sm leading-relaxed mb-3">
                    Segmentação semântica identifica pista, pedestres e
                    veículos.
                  </p>
                </div>

                <div className="bg-black/20 rounded-lg p-6 border border-white/10">
                  <h3 className="text-lg font-semibold text-white mb-3">
                    Satélites
                  </h3>
                  <p className="text-white/80 text-sm leading-relaxed mb-3">
                    Mapeamento de uso do solo e monitoramento ambiental em larga
                    escala.
                  </p>
                </div>
              </div>
            </section>

            {/* Aplicações Modernas */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-3xl font-bold text-white mb-6">
                Aplicações Modernas
              </h2>
              <div className="grid lg:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="flex items-center justify-center"></div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">
                        Saúde
                      </h3>
                      <p className="text-white/80 text-sm">
                        Delimitação de tumores e estruturas anatômicas.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex items-center justify-center"></div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">
                        Indústria
                      </h3>
                      <p className="text-white/80 text-sm">
                        Inspeção visual e controle de qualidade.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex items-center justify-center"></div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">
                        Mapeamento
                      </h3>
                      <p className="text-white/80 text-sm">
                        Análise de imagens aéreas e de satélite.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className=" flex items-center justify-center"></div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">
                        Entretenimento
                      </h3>
                      <p className="text-white/80 text-sm">
                        Efeitos visuais e recorte automático de fundo.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-black/20 rounded-lg p-6 border border-white/10">
                  <h3 className="text-lg font-semibold text-white mb-4">
                    Ferramentas / Libs
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-white/80">OpenCV</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-white/80">scikit-image</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-white/80">
                        TensorFlow / PyTorch
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-white/80">MONAI</span>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/10">
                    <h4 className="text-white font-medium mb-3">Categorias</h4>
                    <div className="grid grid-cols-1 gap-2 text-sm">
                      <div className="text-white/60">• Semântica</div>
                      <div className="text-white/60">• Instância</div>
                      <div className="text-white/60">• Panóptica</div>
                      <div className="text-white/60">• Interativa</div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Recursos e Referências */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-3xl font-bold text-white mb-6">
                Referências
              </h2>
              <div className="">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-4">
                    Livros e Artigos
                  </h3>
                  <div className="space-y-3">
                    <a
                      href="https://en.wikipedia.org/wiki/Image_segmentation"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block bg-black/20 rounded-lg p-4 border border-white/10 hover:border-purple-500/50 transition-colors"
                    >
                      <h4 className="text-white font-medium mb-1">
                        Wikipedia - Image Segmentation
                      </h4>
                      <p className="text-white/60 text-sm">
                        Visão geral de técnicas e aplicações
                      </p>
                    </a>

                    <a
                      href="https://scikit-image.org/docs/stable/auto_examples/segmentation/plot_marked_watershed.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block bg-black/20 rounded-lg p-4 border border-white/10 hover:border-purple-500/50 transition-colors"
                    >
                      <h4 className="text-white font-medium mb-1">
                        scikit-image - Watershed
                      </h4>
                      <p className="text-white/60 text-sm">
                        Exemplo prático do algoritmo watershed
                      </p>
                    </a>
                  </div>
                </div>
              </div>
            </section>

            {/* Demo Link */}
            <section className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20">
              <h2 className="text-3xl font-bold text-white mb-6">
                Experimente na Prática
              </h2>
              <div className="text-center">
                <p className="text-white/80 mb-6">
                  Teste nossa ferramenta interativa de segmentação.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={() => router.push("/segmentation")}
                    className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:opacity-60 cursor-pointer"
                  >
                    Ferramenta Interativa
                  </button>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
