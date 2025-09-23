"use client";

import { useRouter } from "next/navigation";
import Header from "@/components/Header";

export default function BezierCurvesPage() {
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
              📐
            </div>
            <h1 className="text-5xl font-extrabold text-white mb-4">
              Curvas de Bézier
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              As curvas que revolucionaram o design digital e a computação
              gráfica
            </p>
          </div>

          {/* Content Sections */}
          <div className="space-y-16">
            {/* História */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                História
              </h2>
              <div className="mb-4">
                <div className=" text-white/80 space-y-4 leading-relaxed">
                  <p>
                    As curvas de Bézier foram desenvolvidas na década de 1960
                    por
                    <strong className="text-white"> Pierre Bézier</strong>, um
                    engenheiro francês que trabalhava na Renault. Ele estava
                    buscando uma maneira matemática de descrever curvas suaves
                    para o design de carros.
                  </p>
                  <p>
                    A Renault precisava de uma forma de digitalizar e manipular
                    curvas complexas para o design automotivo. Bézier
                    desenvolveu um sistema que permitia aos designers criar
                    curvas suaves usando apenas alguns pontos de controle.
                  </p>
                  <p>
                    O trabalho de Bézier foi tão revolucionário que se tornou
                    fundamental para o desenvolvimento de sistemas CAD
                    (Computer-Aided Design) e posteriormente para toda a
                    computação gráfica moderna.
                  </p>
                </div>
              </div>

              {/* Linha do tempo */}
              <div className="bg-black/20 rounded-lg p-6 border border-white/10">
                <h3 className="text-lg font-semibold text-white mb-4">
                  Linha do Tempo
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span className="text-white font-medium">1959-1960:</span>
                    <span className="text-white/80">
                      Pierre Bézier desenvolve as curvas na Renault
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-white font-medium">1970s:</span>
                    <span className="text-white/80">
                      Adoção em sistemas CAD industriais
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-white font-medium">1980s:</span>
                    <span className="text-white/80">
                      Integração em softwares de design gráfico
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                    <span className="text-white font-medium">Hoje:</span>
                    <span className="text-white/80">
                      Base de toda computação gráfica moderna
                    </span>
                  </div>
                </div>
              </div>
            </section>

            {/* Teoria */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                Teoria Matemática
              </h2>
              <div className="text-white/80 space-y-6">
                <div className="">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">
                      Polinômios de Bernstein
                    </h3>
                    <p className="leading-relaxed mb-3">
                      As curvas de Bézier são baseadas nos polinômios de
                      Bernstein, que são definidos como:
                    </p>
                    <div className="bg-black/30 rounded-lg p-4 font-mono text-sm border border-white/10">
                      B<sub>i,n</sub>(t) = C(n,i) × t<sup>i</sup> × (1-t)
                      <sup>n-i</sup>
                    </div>
                    <p className="leading-relaxed mt-3 text-sm">
                      Onde C(n,i) é o coeficiente binomial e t é o parâmetro que
                      varia de 0 a 1.
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    Curva de Bézier Cúbica
                  </h3>
                  <p className="leading-relaxed mb-3">
                    A forma mais comum é a curva cúbica, que usa 4 pontos de
                    controle:
                  </p>
                  <div className="bg-black/30 rounded-lg p-4 font-mono text-sm border border-white/10">
                    B(t) = (1-t)³P₀ + 3t(1-t)²P₁ + 3t²(1-t)P₂ + t³P₃
                  </div>

                  <div className="grid md:grid-cols-2 gap-4 mt-4">
                    <div className="bg-black/20 rounded-lg p-4 border border-white/10">
                      <h4 className="text-white font-medium mb-2">
                        Pontos de Controle
                      </h4>
                      <ul className="text-sm space-y-1">
                        <li>
                          <strong>P₀:</strong> Ponto inicial da curva
                        </li>
                        <li>
                          <strong>P₁:</strong> Direção inicial
                        </li>
                        <li>
                          <strong>P₂:</strong> Direção final
                        </li>
                        <li>
                          <strong>P₃:</strong> Ponto final da curva
                        </li>
                      </ul>
                    </div>
                    <div className="bg-black/20 rounded-lg p-4 border border-white/10">
                      <h4 className="text-white font-medium mb-2">
                        Propriedades
                      </h4>
                      <ul className="text-sm space-y-1">
                        <li>• Sempre passa pelos pontos extremos</li>
                        <li>• Tangente aos pontos de controle</li>
                        <li>• Convexa entre os pontos</li>
                        <li>• Suave e contínua</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Vídeos Educativos */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                Vídeos Educativos
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-black/20 rounded-lg overflow-hidden border border-white/10">
                  <div className="aspect-video bg-gradient-to-br from-purple-500/20 to-blue-600/20 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-4xl mb-2">▶️</div>
                      <p className="text-white text-sm">
                        The Beauty of Bézier Curves
                      </p>
                      <a
                        href="https://www.youtube.com/watch?v=aVwxzDHniEw"
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
                      Explicação visual sobre como as curvas de Bézier funcionam
                    </p>
                  </div>
                </div>

                <div className="bg-black/20 rounded-lg overflow-hidden border border-white/10">
                  <div className="aspect-video bg-gradient-to-br from-green-500/20 to-teal-600/20 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-4xl mb-2">▶</div>
                      <p className="text-white text-sm">
                        Bézier Curves Explained
                      </p>
                      <a
                        href="https://www.youtube.com/watch?v=jvPPXbo87ds"
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
                      Tutorial prático sobre implementação e uso de curvas de
                      Bézier
                    </p>
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
                    Adobe Illustrator
                  </h3>
                  <p className="text-white/80 text-sm leading-relaxed mb-3">
                    A ferramenta "Pen Tool" do Adobe Illustrator é baseada
                    inteiramente em curvas de Bézier, permitindo criar qualquer
                    forma imaginável.
                  </p>
                </div>

                <div className="bg-black/20 rounded-lg p-6 border border-white/10">
                  <h3 className="text-lg font-semibold text-white mb-3">
                    Design Automotivo
                  </h3>
                  <p className="text-white/80 text-sm leading-relaxed mb-3">
                    As curvas de Bézier são usadas para modelar as formas
                    aerodinâmicas dos carros modernos, desde o design inicial
                    até a produção.
                  </p>
                </div>

                <div className="bg-black/20 rounded-lg p-6 border border-white/10">
                  <h3 className="text-lg font-semibold text-white mb-3">
                    Animação
                  </h3>
                  <p className="text-white/80 text-sm leading-relaxed mb-3">
                    Sistemas de animação como o Adobe After Effects usam curvas
                    de Bézier para criar movimentos suaves e naturais.
                  </p>
                </div>

                <div className="bg-black/20 rounded-lg p-6 border border-white/10">
                  <h3 className="text-lg font-semibold text-white mb-3">
                    Fontes Digitais
                  </h3>
                  <p className="text-white/80 text-sm leading-relaxed mb-3">
                    As fontes TrueType e PostScript são definidas usando curvas
                    de Bézier, permitindo escalabilidade perfeita em qualquer
                    tamanho.
                  </p>
                </div>
              </div>
            </section>

            {/* Aplicações */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                Aplicações Modernas
              </h2>
              <div className="grid lg:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="flex items-center justify-center text-sm"></div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">
                        Design Gráfico
                      </h3>
                      <p className="text-white/80 text-sm">
                        Logotipos, ícones, ilustrações vetoriais e layouts
                        responsivos.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex items-center justify-center text-sm"></div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">
                        Jogos
                      </h3>
                      <p className="text-white/80 text-sm">
                        Trajetórias de movimento, animações de personagens e
                        efeitos visuais.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex items-center justify-center text-sm"></div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">
                        Arquitetura
                      </h3>
                      <p className="text-white/80 text-sm">
                        Modelagem de estruturas curvas, design de interiores e
                        visualização 3D.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex items-center justify-center text-sm"></div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">
                        Robótica
                      </h3>
                      <p className="text-white/80 text-sm">
                        Planejamento de trajetórias suaves para movimentos de
                        robôs.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-black/20 rounded-lg p-6 border border-white/10">
                  <h3 className="text-lg font-semibold text-white mb-4">
                    Ferramentas que Usam Bézier
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-white/80">Adobe Illustrator</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-white/80">Figma</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-white/80">CSS</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-white/80">SVG</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-white/80">Blender</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Recursos e Referências */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 ">
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center justify-center gap-3">
                Referências
              </h2>
              <div className="flex items-center justify-center">
                <div>
                  <div className="space-y-3">
                    <a
                      href="https://pomax.github.io/bezierinfo/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block bg-black/20 rounded-lg p-4 border border-white/10 hover:border-purple-500/50 transition-colors"
                    >
                      <h4 className="text-white font-medium mb-1">
                        A Primer on Bézier Curves
                      </h4>
                      <p className="text-white/60 text-sm">
                        Guia completo sobre curvas de Bézier por Pomax
                      </p>
                    </a>

                    <a
                      href="https://en.wikipedia.org/wiki/B%C3%A9zier_curve"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block bg-black/20 rounded-lg p-4 border border-white/10 hover:border-purple-500/50 transition-colors"
                    >
                      <h4 className="text-white font-medium mb-1">
                        Wikipedia - Bézier Curve
                      </h4>
                      <p className="text-white/60 text-sm">
                        Artigo detalhado com história e matemática
                      </p>
                    </a>
                  </div>
                </div>
              </div>
            </section>

            {/* Demo Link */}
            <section className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20">
              <h2 className="text-3xl font-bold text-white mb-6 flex justify-center items-center gap-3">
                Experimente na Prática
              </h2>
              <div className="text-center">
                <p className="text-white/80 mb-6">
                  Teste nossa ferramenta interativa para criar e manipular
                  curvas de Bézier em tempo real.
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
