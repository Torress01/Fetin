"use client";

import { useRouter } from "next/navigation";
import Header from "@/components/Header";

export default function GeometricTransformationsPage() {
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
              🔄
            </div>
            <h1 className="text-5xl font-extrabold text-white mb-4">
              Transformações Geométricas
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              A matemática por trás da manipulação e transformação de objetos
              digitais
            </p>
          </div>

          {/* Content Sections */}
          <div className="space-y-16">
            {/* História */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="text-purple-400">📚</span>
                História
              </h2>
              <div className="text-white/80 space-y-4 leading-relaxed">
                <p>
                  As transformações geométricas têm suas raízes na geometria
                  euclidiana, desenvolvida por Euclides no século III a.C. No
                  entanto, sua aplicação em computação gráfica começou a se
                  desenvolver na década de 1960.
                </p>
                <p>
                  O desenvolvimento de sistemas CAD (Computer-Aided Design) e a
                  necessidade de manipular objetos 3D em tempo real
                  impulsionaram o estudo das transformações matriciais na
                  computação gráfica.
                </p>
                <p>
                  Ivan Sutherland, considerado o "pai da computação gráfica",
                  desenvolveu o Sketchpad em 1963, que foi o primeiro sistema a
                  usar transformações geométricas de forma interativa.
                </p>
              </div>
            </section>

            {/* Teoria */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="text-blue-400">🧮</span>
                Teoria Matemática
              </h2>
              <div className="text-white/80 space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    Matrizes de Transformação 2D
                  </h3>
                  <p className="leading-relaxed mb-4">
                    As transformações são representadas por matrizes que operam
                    sobre coordenadas homogêneas:
                  </p>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-black/30 rounded-lg p-4">
                      <h4 className="text-white font-semibold mb-2">
                        Translação
                      </h4>
                      <div className="font-mono text-sm">
                        [1 0 tx]
                        <br />
                        [0 1 ty]
                        <br />
                        [0 0 1]
                      </div>
                    </div>

                    <div className="bg-black/30 rounded-lg p-4">
                      <h4 className="text-white font-semibold mb-2">Escala</h4>
                      <div className="font-mono text-sm">
                        [sx 0 0]
                        <br />
                        [0 sy 0]
                        <br />
                        [0 0 1]
                      </div>
                    </div>

                    <div className="bg-black/30 rounded-lg p-4">
                      <h4 className="text-white font-semibold mb-2">Rotação</h4>
                      <div className="font-mono text-sm">
                        [cos(θ) -sin(θ) 0]
                        <br />
                        [sin(θ) cos(θ) 0]
                        <br />
                        [0 0 1]
                      </div>
                    </div>

                    <div className="bg-black/30 rounded-lg p-4">
                      <h4 className="text-white font-semibold mb-2">
                        Cisalhamento
                      </h4>
                      <div className="font-mono text-sm">
                        [1 shx 0]
                        <br />
                        [shy 1 0]
                        <br />
                        [0 0 1]
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    Composição de Transformações
                  </h3>
                  <p className="leading-relaxed">
                    Múltiplas transformações podem ser combinadas através da
                    multiplicação de matrizes. A ordem das transformações é
                    crucial - a multiplicação de matrizes não é comutativa.
                  </p>
                </div>
              </div>
            </section>

            {/* Curiosidades */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="text-green-400">💡</span>
                Curiosidades
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-black/20 rounded-lg p-6 border border-white/10">
                  <h3 className="text-lg font-semibold text-white mb-3">
                    🎮 Jogos 3D
                  </h3>
                  <p className="text-white/80 text-sm leading-relaxed">
                    Cada frame de um jogo 3D moderno aplica milhares de
                    transformações matriciais para posicionar objetos, câmeras e
                    efeitos visuais.
                  </p>
                </div>

                <div className="bg-black/20 rounded-lg p-6 border border-white/10">
                  <h3 className="text-lg font-semibold text-white mb-3">
                    🎬 Filmes de Animação
                  </h3>
                  <p className="text-white/80 text-sm leading-relaxed">
                    Studios como Pixar usam transformações geométricas para
                    animar personagens, câmeras e cenários em seus filmes.
                  </p>
                </div>

                <div className="bg-black/20 rounded-lg p-6 border border-white/10">
                  <h3 className="text-lg font-semibold text-white mb-3">
                    🏥 Medicina
                  </h3>
                  <p className="text-white/80 text-sm leading-relaxed">
                    Tomografias e ressonâncias magnéticas usam transformações
                    para alinhar imagens de diferentes ângulos e criar
                    reconstruções 3D.
                  </p>
                </div>

                <div className="bg-black/20 rounded-lg p-6 border border-white/10">
                  <h3 className="text-lg font-semibold text-white mb-3">
                    🚗 Carros Autônomos
                  </h3>
                  <p className="text-white/80 text-sm leading-relaxed">
                    Sistemas de visão computacional usam transformações para
                    mapear coordenadas de câmeras para coordenadas do mundo
                    real.
                  </p>
                </div>
              </div>
            </section>

            {/* Aplicações */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="text-yellow-400">🔧</span>
                Aplicações Práticas
              </h2>
              <div className="text-white/80 space-y-4">
                <div className="flex items-start gap-4">
                  <span className="text-2xl">🎯</span>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      Realidade Virtual
                    </h3>
                    <p>
                      Transformação de coordenadas do mundo virtual para
                      coordenadas da tela.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="text-2xl">📱</span>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      Interfaces Touch
                    </h3>
                    <p>
                      Mapeamento de gestos de toque para ações na interface do
                      usuário.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="text-2xl">🏗️</span>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      Arquitetura
                    </h3>
                    <p>
                      Visualização de projetos em diferentes escalas e
                      perspectivas.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="text-2xl">🎨</span>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      Design Gráfico
                    </h3>
                    <p>
                      Manipulação de imagens, redimensionamento e rotação de
                      elementos.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
