"use client";

import { useRouter } from "next/navigation";
import Header from "@/components/Header";

export default function VectorRasterPage() {
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
            <div className="w-20 h-20 bg-gradient-to-br from-pink-500/30 to-purple-600/30 backdrop-blur-sm rounded-2xl flex items-center justify-center text-4xl text-white mb-6 shadow-lg border border-white/20 mx-auto">
              🎨
            </div>
            <h1 className="text-5xl font-extrabold text-white mb-4">
              Vetorial vs Matricial
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Entenda as diferenças fundamentais entre os dois tipos principais
              de imagens digitais
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
                    As imagens matriciais surgiram na década de 1960 com os
                    primeiros displays baseados em pixel. O termo bitmap
                    consolidou a ideia de uma grade de pontos que formam a
                    imagem.
                  </p>
                  <p>
                    As imagens vetoriais ganharam força nos anos 1970-80 com
                    PostScript e sistemas de diagramação. Na web, o
                    <strong className="text-white"> SVG</strong> (2001) tornou
                    gráficos vetoriais escaláveis um padrão.
                  </p>
                  <p>
                    Hoje, ambos os paradigmas coexistem: vetores para formas
                    nítidas e escaláveis; raster para fotos e texturas ricas em
                    detalhe.
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
                    <span className="text-white/80">Displays raster</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-white font-medium">1980s:</span>
                    <span className="text-white/80">PostScript e DTP</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-white font-medium">2001:</span>
                    <span className="text-white/80">W3C padroniza SVG</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span className="text-white font-medium">Hoje:</span>
                    <span className="text-white/80">
                      Coexistência vetorial/raster
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
                      Conceitos-Chave
                    </h3>
                    <p className="leading-relaxed mb-4">
                      O vetor descreve formas por equações; o raster descreve
                      cores em uma grade de pixels. Alguns fundamentos:
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-black/30 rounded-lg p-4 border border-white/10">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                      Resolução & DPI
                    </h4>
                    <p className="text-sm text-white/60">
                      No raster, qualidade depende da densidade de pixels.
                    </p>
                  </div>

                  <div className="bg-black/30 rounded-lg p-4 border border-white/10">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      Escalabilidade
                    </h4>
                    <p className="text-sm text-white/60">
                      Vetores escalam sem perda; raster pixeliza ao ampliar.
                    </p>
                  </div>

                  <div className="bg-black/30 rounded-lg p-4 border border-white/10">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                      Amostragem & Anti-aliasing
                    </h4>
                    <p className="text-sm text-white/60">
                      Suaviza bordas serrilhadas em raster; vetores rendem
                      contornos nítidos.
                    </p>
                  </div>

                  <div className="bg-black/30 rounded-lg p-4 border border-white/10">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                      Interpolação
                    </h4>
                    <p className="text-sm text-white/60">
                      Métodos (nearest, bilinear, bicubic) ao redimensionar
                      raster.
                    </p>
                  </div>
                </div>

                <div className="bg-black/20 rounded-lg p-6 border border-white/10">
                  <h3 className="text-xl font-semibold text-white mb-3">
                    Modelo Raster Simplificado
                  </h3>
                  <p className="leading-relaxed mb-4">
                    Uma imagem raster pode ser vista como uma função amostrada
                    no plano:
                  </p>
                  <div className="bg-black/30 rounded-lg p-4 font-mono text-sm border border-white/10">
                    I(x,y) = cor[pixel(x,y)]
                    <br />
                    <span className="text-white/60">x,y inteiros na grade</span>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-black/20 rounded-lg p-4 border border-white/10">
                    <h4 className="text-white font-medium mb-2">Formatos</h4>
                    <p className="text-sm text-white/60">SVG, PNG, JPEG, PDF</p>
                  </div>
                  <div className="bg-black/20 rounded-lg p-4 border border-white/10">
                    <h4 className="text-white font-medium mb-2">Uso</h4>
                    <p className="text-sm text-white/60">
                      UI, logos, fotos, texturas
                    </p>
                  </div>
                  <div className="bg-black/20 rounded-lg p-4 border border-white/10">
                    <h4 className="text-white font-medium mb-2">Qualidade</h4>
                    <p className="text-sm text-white/60">
                      Depende de escala e resolução
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
                      <p className="text-white text-sm">Vector vs Raster</p>
                      <a
                        href="https://www.youtube.com/watch?v=QCNrL1YV1oQ"
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
                      Explicação visual das diferenças entre imagens vetoriais e
                      matriciais
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
                    Web Moderna
                  </h3>
                  <p className="text-white/80 text-sm leading-relaxed mb-3">
                    SVG possibilita ícones e ilustrações escaláveis em qualquer
                    densidade de tela.
                  </p>
                </div>

                <div className="bg-black/20 rounded-lg p-6 border border-white/10">
                  <h3 className="text-lg font-semibold text-white mb-3">
                    Photoshop
                  </h3>
                  <p className="text-white/80 text-sm leading-relaxed mb-3">
                    Combina raster com vetores via camadas de forma para fluxos
                    híbridos.
                  </p>
                </div>

                <div className="bg-black/20 rounded-lg p-6 border border-white/10">
                  <h3 className="text-lg font-semibold text-white mb-3">
                    Responsividade
                  </h3>
                  <p className="text-white/80 text-sm leading-relaxed mb-3">
                    Vetores mantêm nitidez em dispositivos 1x, 2x, 3x sem
                    múltiplos assets.
                  </p>
                </div>

                <div className="bg-black/20 rounded-lg p-6 border border-white/10">
                  <h3 className="text-lg font-semibold text-white mb-3">
                    Impressão
                  </h3>
                  <p className="text-white/80 text-sm leading-relaxed mb-3">
                    Raster requer DPI adequado; vetores mantêm qualidade em
                    qualquer tamanho.
                  </p>
                </div>
              </div>
            </section>

            {/* Recursos e Referências */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                Referências
              </h2>
              <div className="space-y-3">
                <a
                  href="https://en.wikipedia.org/wiki/Vector_graphics"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-black/20 rounded-lg p-4 border border-white/10 hover:border-purple-500/50 transition-colors"
                >
                  <h4 className="text-white font-medium mb-1">
                    Wikipedia - Vector graphics
                  </h4>
                  <p className="text-white/60 text-sm">
                    Introdução completa a gráficos vetoriais
                  </p>
                </a>

                <a
                  href="https://en.wikipedia.org/wiki/Raster_graphics"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-black/20 rounded-lg p-4 border border-white/10 hover:border-purple-500/50 transition-colors"
                >
                  <h4 className="text-white font-medium mb-1">
                    Wikipedia - Raster graphics
                  </h4>
                  <p className="text-white/60 text-sm">
                    Fundamentos de imagens matriciais
                  </p>
                </a>

                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/SVG"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-black/20 rounded-lg p-4 border border-white/10 hover:border-purple-500/50 transition-colors"
                >
                  <h4 className="text-white font-medium mb-1">MDN - SVG</h4>
                  <p className="text-white/60 text-sm">
                    Documentação do SVG para a Web
                  </p>
                </a>
              </div>
            </section>

            {/* Demo Link */}
            <section className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20">
              <h2 className="text-3xl font-bold text-white mb-6">
                Experimente na Prática
              </h2>
              <div className="text-center">
                <p className="text-white/80 mb-6">
                  Compare vetorial e matricial com diferentes níveis de zoom.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={() => router.push("/vector")}
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
