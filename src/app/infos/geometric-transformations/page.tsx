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
              className="text-white/60 hover:text-white transition-colors duration-300 flex items-center gap-2 cursor-pointer"
            >
              ← Voltar para material teórico
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
              <h2 className="text-3xl font-bold text-white mb-6">História</h2>
              <div className="mb-6">
                <div className="text-white/80 space-y-4 leading-relaxed">
                  <p>
                    As transformações geométricas têm suas raízes na geometria
                    euclidiana, desenvolvida por{" "}
                    <strong className="text-white">
                      Euclides no século III a.C.
                    </strong>
                    No entanto, sua aplicação em computação gráfica começou a se
                    desenvolver na década de 1960.
                  </p>
                  <p>
                    O desenvolvimento de sistemas CAD (Computer-Aided Design) e
                    a necessidade de manipular objetos 3D em tempo real
                    impulsionaram o estudo das transformações matriciais na
                    computação gráfica.
                  </p>
                  <p>
                    <strong className="text-white">Ivan Sutherland</strong>,
                    considerado o pai da computação gráfica, desenvolveu o
                    Sketchpad em 1963, que foi o primeiro sistema a usar
                    transformações geométricas de forma interativa.
                  </p>
                </div>
              </div>

              {/* Marcos Históricos */}
              <div className="bg-black/20 rounded-lg p-6 border border-white/10">
                <h3 className="text-lg font-semibold text-white mb-4">
                  Marcos Históricos
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span className="text-white font-medium">300 a.C.:</span>
                    <span className="text-white/80">
                      Euclides formaliza os conceitos geométricos fundamentais
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-white font-medium">1637:</span>
                    <span className="text-white/80">
                      René Descartes desenvolve a geometria analítica
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-white font-medium">1963:</span>
                    <span className="text-white/80">
                      Ivan Sutherland cria o Sketchpad, primeiro sistema CAD
                      interativo
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                    <span className="text-white font-medium">1970s:</span>
                    <span className="text-white/80">
                      Desenvolvimento de algoritmos de computação gráfica 3D
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span className="text-white font-medium">Hoje:</span>
                    <span className="text-white/80">
                      Base fundamental de toda computação gráfica moderna
                    </span>
                  </div>
                </div>
              </div>
            </section>

            {/* Teoria */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-3xl font-bold text-white mb-6">
                Teoria Matemática
              </h2>
              <div className="text-white/80 space-y-6">
                <div className="gap-6">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">
                      Matrizes de Transformação 2D
                    </h3>
                    <p className="leading-relaxed mb-4">
                      As transformações são representadas por matrizes que
                      operam sobre coordenadas homogêneas. Cada tipo de
                      transformação possui sua matriz característica:
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-black/30 rounded-lg p-4 border border-white/10">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                      Translação
                    </h4>
                    <div className="font-mono text-sm mb-2">
                      [1 0 tx]
                      <br />
                      [0 1 ty]
                      <br />
                      [0 0 1]
                    </div>
                    <p className="text-xs text-white/60">
                      Move objeto para nova posição
                    </p>
                  </div>

                  <div className="bg-black/30 rounded-lg p-4 border border-white/10">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      Escala
                    </h4>
                    <div className="font-mono text-sm mb-2">
                      [sx 0 0]
                      <br />
                      [ 0 sy 0]
                      <br />[ 0 0 1]
                    </div>
                    <p className="text-xs text-white/60">
                      Altera tamanho do objeto
                    </p>
                  </div>

                  <div className="bg-black/30 rounded-lg p-4 border border-white/10">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                      Rotação
                    </h4>
                    <div className="font-mono text-sm mb-2">
                      [cos(θ) -sin(θ) 0]
                      <br />
                      [sin(θ) cos(θ) 0]
                      <br />[ 0 0 1]
                    </div>
                    <p className="text-xs text-white/60">
                      Gira objeto em torno do origin
                    </p>
                  </div>

                  <div className="bg-black/30 rounded-lg p-4 border border-white/10">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                      Cisalhamento
                    </h4>
                    <div className="font-mono text-sm mb-2">
                      [ 1 shx 0]
                      <br />
                      [shy 1 0]
                      <br />[ 0 0 1]
                    </div>
                    <p className="text-xs text-white/60">
                      Deforma objeto inclinando
                    </p>
                  </div>
                </div>

                <div className="bg-black/20 rounded-lg p-6 border border-white/10">
                  <h3 className="text-xl font-semibold text-white mb-3">
                    Composição de Transformações
                  </h3>
                  <p className="leading-relaxed mb-4">
                    Múltiplas transformações podem ser combinadas através da
                    multiplicação de matrizes. A ordem das transformações é
                    crucial - a multiplicação de matrizes não é comutativa.
                  </p>
                  <div className="bg-black/30 rounded-lg p-4 font-mono text-sm border border-white/10">
                    T_final = T₃ × T₂ × T₁
                    <br />
                    <span className="text-white/60">
                      Aplicada da direita para esquerda: T₁, depois T₂, depois
                      T₃
                    </span>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-black/20 rounded-lg p-4 border border-white/10">
                    <h4 className="text-white font-medium mb-2">
                      Coordenadas Homogêneas
                    </h4>
                    <p className="text-sm text-white/60">
                      Permite representar translação como multiplicação
                      matricial
                    </p>
                  </div>
                  <div className="bg-black/20 rounded-lg p-4 border border-white/10">
                    <h4 className="text-white font-medium mb-2">
                      Transformações Afins
                    </h4>
                    <p className="text-sm text-white/60">
                      Preservam paralelismo e proporções de distâncias
                    </p>
                  </div>
                  <div className="bg-black/20 rounded-lg p-4 border border-white/10">
                    <h4 className="text-white font-medium mb-2">
                      Inversa de Transformação
                    </h4>
                    <p className="text-sm text-white/60">
                      Permite desfazer uma transformação aplicada
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Vídeos Educativos */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-3xl font-bold text-white mb-6">
                Vídeos Educativos
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-black/20 rounded-lg overflow-hidden border border-white/10">
                  <div className="aspect-video bg-gradient-to-br from-purple-500/20 to-blue-600/20 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-4xl mb-2">▶</div>
                      <p className="text-white text-sm">
                        Linear Transformations
                      </p>
                      <a
                        href="https://www.youtube.com/watch?v=kYB8IZa5AuE"
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
                      Excelente visualização das transformações lineares por
                      3Blue1Brown
                    </p>
                  </div>
                </div>

                <div className="bg-black/20 rounded-lg overflow-hidden border border-white/10">
                  <div className="aspect-video bg-gradient-to-br from-green-500/20 to-teal-600/20 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-4xl mb-2">▶</div>
                      <p className="text-white text-sm">
                        Matrix Transformations
                      </p>
                      <a
                        href="https://www.youtube.com/watch?v=P2LTAUO1TdA"
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
                      Tutorial prático sobre implementação de transformações
                      matriciais por 3Blue1Brown
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Curiosidades */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-3xl font-bold text-white mb-6">
                Curiosidades
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-black/20 rounded-lg p-6 border border-white/10">
                  <h3 className="text-lg font-semibold text-white mb-3">
                    Jogos 3D
                  </h3>
                  <p className="text-white/80 text-sm leading-relaxed mb-3">
                    Cada frame de um jogo 3D moderno aplica milhares de
                    transformações matriciais para posicionar objetos, câmeras e
                    efeitos visuais. GPUs modernas são otimizadas
                    especificamente para essas operações.
                  </p>
                  <a
                    href="https://learnopengl.com/Getting-started/Transformations"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 text-xs underline"
                  >
                    Saiba mais →
                  </a>
                </div>

                <div className="bg-black/20 rounded-lg p-6 border border-white/10">
                  <h3 className="text-lg font-semibold text-white mb-3">
                    Filmes de Animação
                  </h3>
                  <p className="text-white/80 text-sm leading-relaxed mb-3">
                    Studios como Pixar e DreamWorks usam transformações
                    geométricas complexas para animar personagens, câmeras e
                    cenários. Um único frame pode conter milhões de
                    transformações.
                  </p>
                  <a
                    href="https://www.youtube.com/watch?v=_IZMVMf4NQ0"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 text-xs underline"
                  >
                    Saiba mais →
                  </a>
                </div>

                <div className="bg-black/20 rounded-lg p-6 border border-white/10">
                  <h3 className="text-lg font-semibold text-white mb-3">
                    Medicina
                  </h3>
                  <p className="text-white/80 text-sm leading-relaxed mb-3">
                    Tomografias e ressonâncias magnéticas usam transformações
                    para alinhar imagens de diferentes ângulos e criar
                    reconstruções 3D precisas do corpo humano.
                  </p>
                  <a
                    href="https://en.wikipedia.org/wiki/Medical_image_computing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 text-xs underline"
                  >
                    Saiba mais →
                  </a>
                </div>
              </div>
            </section>

            {/* Aplicações */}
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
                        Realidade Virtual
                      </h3>
                      <p className="text-white/80 text-sm">
                        Transformação de coordenadas do mundo virtual para
                        coordenadas da tela, tracking de movimento da cabeça e
                        das mãos.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex items-center justify-center"></div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">
                        Interfaces Touch
                      </h3>
                      <p className="text-white/80 text-sm">
                        Mapeamento de gestos de toque para ações na interface,
                        reconhecimento de pinch-to-zoom e rotação.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex items-center justify-center"></div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">
                        Arquitetura
                      </h3>
                      <p className="text-white/80 text-sm">
                        Visualização de projetos em diferentes escalas e
                        perspectivas, renderização em tempo real.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex items-center justify-center"></div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">
                        Design Gráfico
                      </h3>
                      <p className="text-white/80 text-sm">
                        Manipulação de imagens, redimensionamento e rotação de
                        elementos, transformações CSS e SVG.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-black/20 rounded-lg p-6 border border-white/10">
                  <h3 className="text-lg font-semibold text-white mb-4">
                    Tecnologias que Implementam
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-white/80">OpenGL / WebGL</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-white/80">CSS Transform</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-white/80">SVG Transform</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-white/80">Unity/Unreal</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-white/80">DirectX</span>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/10">
                    <h4 className="text-white font-medium mb-3">
                      Bibliotecas Populares
                    </h4>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div className="text-white/60">• GLM (C++)</div>
                      <div className="text-white/60">• NumPy (Python)</div>
                      <div className="text-white/60">• Three.js</div>
                      <div className="text-white/60">• Eigen (C++)</div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Recursos e Referências */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="flex justify-center items-center text-3xl font-bold text-white mb-6">
                Referências
              </h2>
              <div className="flex justify-center items-center gap-6">
                <div>
                  <h3 className="flex justify-center items-center text-lg font-semibold text-white mb-4">
                    Livros e Artigos
                  </h3>
                  <div className="space-y-3">
                    <a
                      href="https://www.mathworks.com/help/images/matrix-representation-of-geometric-transformations.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block bg-black/20 rounded-lg p-4 border border-white/10 hover:border-purple-500/50 transition-colors"
                    >
                      <h4 className="text-white font-medium mb-1">
                        MATLAB - Geometric Transformations
                      </h4>
                      <p className="text-white/60 text-sm">
                        Documentação técnica com exemplos práticos
                      </p>
                    </a>
                  </div>
                </div>
              </div>
            </section>

            {/* Demo Link */}
            <section className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20">
              <h2 className="flex justify-center items-center text-3xl font-bold text-white mb-6">
                Experimente na Prática
              </h2>
              <div className="text-center">
                <p className="text-white/80 mb-6">
                  Teste nossa ferramenta interativa para aplicar e visualizar
                  transformações geométricas em tempo real.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={() => router.push("/canvas")}
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
