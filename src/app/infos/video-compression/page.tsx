"use client";

import { useRouter } from "next/navigation";
import Header from "@/components/Header";

export default function VideoCompressionPage() {
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
              className="text-white/60 hover:text-white transition-colors duration-300 flex items-center gap-2 cursor-pointer"
            >
              ← Voltar para material teórico
            </button>
          </div>

          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="w-20 h-20 bg-gradient-to-br from-purple-500/30 to-blue-600/30 backdrop-blur-sm rounded-2xl flex items-center justify-center text-4xl text-white mb-6 shadow-lg border border-white/20 mx-auto">
              🎬
            </div>
            <h1 className="text-5xl font-extrabold text-white mb-4">
              Compressão de Vídeo
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Reduzindo o tamanho dos arquivos sem perder qualidade visual
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
                  A compressão de vídeo digital começou na década de 1980, com o
                  desenvolvimento do padrão H.261 pela ITU-T para
                  videoconferência. Este foi o primeiro padrão de compressão de
                  vídeo digital.
                </p>
                <p>
                  O MPEG-1 foi lançado em 1993, permitindo o armazenamento de
                  vídeo em CDs. O MPEG-2 (1995) revolucionou a transmissão de TV
                  digital e DVDs.
                </p>
                <p>
                  O H.264/AVC (2003) se tornou o padrão dominante, usado em
                  Blu-rays, streaming e smartphones. O H.265/HEVC (2013) e AV1
                  (2018) oferecem compressão ainda mais eficiente.
                </p>
              </div>
            </section>

            {/* Teoria */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                Como Funciona
              </h2>
              <div className="text-white/80 space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    Técnicas de Compressão
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-black/20 rounded-lg p-4">
                      <h4 className="text-white font-semibold mb-2">
                        Compressão Espacial
                      </h4>
                      <p className="text-sm">
                        Reduz redundância dentro de um frame usando DCT e
                        quantização.
                      </p>
                    </div>
                    <div className="bg-black/20 rounded-lg p-4">
                      <h4 className="text-white font-semibold mb-2">
                        Compressão Temporal
                      </h4>
                      <p className="text-sm">
                        Reduz redundância entre frames usando motion estimation.
                      </p>
                    </div>
                    <div className="bg-black/20 rounded-lg p-4">
                      <h4 className="text-white font-semibold mb-2">
                        Entropia Coding
                      </h4>
                      <p className="text-sm">
                        Huffman e aritmética para comprimir dados já
                        processados.
                      </p>
                    </div>
                    <div className="bg-black/20 rounded-lg p-4">
                      <h4 className="text-white font-semibold mb-2">
                        Predição
                      </h4>
                      <p className="text-sm">
                        Prevê pixels baseado em pixels vizinhos já codificados.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    Tipos de Frames
                  </h3>
                  <div className="space-y-3">
                    <div className="bg-black/20 rounded-lg p-4">
                      <h4 className="text-white font-semibold mb-2">
                        I-Frames (Intra)
                      </h4>
                      <p className="text-sm">
                        Frames independentes, codificados sem referência a
                        outros frames.
                      </p>
                    </div>
                    <div className="bg-black/20 rounded-lg p-4">
                      <h4 className="text-white font-semibold mb-2">
                        P-Frames (Predicted)
                      </h4>
                      <p className="text-sm">
                        Frames que usam predição de frames anteriores.
                      </p>
                    </div>
                    <div className="bg-black/20 rounded-lg p-4">
                      <h4 className="text-white font-semibold mb-2">
                        B-Frames (Bidirectional)
                      </h4>
                      <p className="text-sm">
                        Frames que usam predição de frames anteriores e
                        posteriores.
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
                    YouTube
                  </h3>
                  <p className="text-white/80 text-sm leading-relaxed">
                    O YouTube processa mais de 500 horas de vídeo por minuto,
                    usando múltiplos codecs para diferentes qualidades.
                  </p>
                </div>

                <div className="bg-black/20 rounded-lg p-6 border border-white/10">
                  <h3 className="text-lg font-semibold text-white mb-3">
                    Netflix
                  </h3>
                  <p className="text-white/80 text-sm leading-relaxed">
                    A Netflix usa algoritmos de IA para otimizar a compressão
                    para cada cena específica do filme.
                  </p>
                </div>

                <div className="bg-black/20 rounded-lg p-6 border border-white/10">
                  <h3 className="text-lg font-semibold text-white mb-3">
                    Hardware
                  </h3>
                  <p className="text-white/80 text-sm leading-relaxed">
                    GPUs modernas têm hardware dedicado para
                    codificação/decodificação de vídeo, acelerando o processo
                    significativamente.
                  </p>
                </div>

                <div className="bg-black/20 rounded-lg p-6 border border-white/10">
                  <h3 className="text-lg font-semibold text-white mb-3">
                    Pesquisa
                  </h3>
                  <p className="text-white/80 text-sm leading-relaxed">
                    Pesquisadores estão desenvolvendo codecs baseados em IA que
                    podem aprender padrões visuais para compressão mais
                    eficiente.
                  </p>
                </div>
              </div>
            </section>

            {/* Aplicações */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                Codecs Modernos
              </h2>
              <div className="text-white/80 space-y-4">
                <div className="flex items-start gap-4">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      H.264/AVC
                    </h3>
                    <p>
                      Padrão dominante usado em Blu-rays, streaming e
                      smartphones.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      H.265/HEVC
                    </h3>
                    <p>Sucessor do H.264, oferece 50% melhor compressão.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      AV1
                    </h3>
                    <p>
                      Codec open-source desenvolvido pela Alliance for Open
                      Media.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      H.266/VVC
                    </h3>
                    <p>
                      Padrão mais recente, oferece compressão 50% melhor que
                      HEVC.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Impacto */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                Impacto Global
              </h2>
              <div className="text-white/80 space-y-4">
                <div className="flex items-start gap-4">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      Armazenamento
                    </h3>
                    <p>
                      Reduz drasticamente o espaço necessário para armazenar
                      vídeos.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      Streaming
                    </h3>
                    <p>
                      Permite transmissão de vídeo em qualidade HD mesmo com
                      conexões lentas.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      Mobile
                    </h3>
                    <p>
                      Permite gravação e reprodução de vídeo em dispositivos
                      móveis.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      Educação
                    </h3>
                    <p>
                      Facilita a criação e distribuição de conteúdo educacional
                      em vídeo.
                    </p>
                  </div>
                </div>
              </div>
            </section>
            {/* Demo Link */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center justify-center gap-3">
                Experimente na Prática
              </h2>
              <div className="text-center">
                <p className="text-white/80 mb-6">
                  Teste nossa ferramenta interativa para compressão de imagens.
                </p>
                <button
                  onClick={() => router.push("/compress")}
                  className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:opacity-80 cursor-pointer"
                >
                  Acessar Ferramenta
                </button>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
