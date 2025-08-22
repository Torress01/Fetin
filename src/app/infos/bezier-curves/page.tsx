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
                <span className="text-purple-400">📚</span>
                História
              </h2>
              <div className="text-white/80 space-y-4 leading-relaxed">
                <p>
                  As curvas de Bézier foram desenvolvidas na década de 1960 por
                  Pierre Bézier, um engenheiro francês que trabalhava na
                  Renault. Ele estava buscando uma maneira matemática de
                  descrever curvas suaves para o design de carros.
                </p>
                <p>
                  A Renault precisava de uma forma de digitalizar e manipular
                  curvas complexas para o design automotivo. Bézier desenvolveu
                  um sistema que permitia aos designers criar curvas suaves
                  usando apenas alguns pontos de controle.
                </p>
                <p>
                  O trabalho de Bézier foi tão revolucionário que se tornou
                  fundamental para o desenvolvimento de sistemas CAD
                  (Computer-Aided Design) e posteriormente para toda a
                  computação gráfica moderna.
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
                    Polinômios de Bernstein
                  </h3>
                  <p className="leading-relaxed">
                    As curvas de Bézier são baseadas nos polinômios de
                    Bernstein, que são definidos como:
                  </p>
                  <div className="bg-black/30 rounded-lg p-4 my-4 font-mono text-sm">
                    B<sub>i,n</sub>(t) = C(n,i) × t<sup>i</sup> × (1-t)
                    <sup>n-i</sup>
                  </div>
                  <p className="leading-relaxed">
                    Onde C(n,i) é o coeficiente binomial e t é o parâmetro que
                    varia de 0 a 1.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    Curva de Bézier Cúbica
                  </h3>
                  <p className="leading-relaxed">
                    A forma mais comum é a curva cúbica, que usa 4 pontos de
                    controle:
                  </p>
                  <div className="bg-black/30 rounded-lg p-4 my-4 font-mono text-sm">
                    B(t) = (1-t)³P₀ + 3t(1-t)²P₁ + 3t²(1-t)P₂ + t³P₃
                  </div>
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
                    🎨 Adobe Illustrator
                  </h3>
                  <p className="text-white/80 text-sm leading-relaxed">
                    A ferramenta "Pen Tool" do Adobe Illustrator é baseada
                    inteiramente em curvas de Bézier, permitindo criar qualquer
                    forma imaginável.
                  </p>
                </div>

                <div className="bg-black/20 rounded-lg p-6 border border-white/10">
                  <h3 className="text-lg font-semibold text-white mb-3">
                    🚗 Design Automotivo
                  </h3>
                  <p className="text-white/80 text-sm leading-relaxed">
                    As curvas de Bézier são usadas para modelar as formas
                    aerodinâmicas dos carros modernos, desde o design inicial
                    até a produção.
                  </p>
                </div>

                <div className="bg-black/20 rounded-lg p-6 border border-white/10">
                  <h3 className="text-lg font-semibold text-white mb-3">
                    🎬 Animação
                  </h3>
                  <p className="text-white/80 text-sm leading-relaxed">
                    Sistemas de animação como o Adobe After Effects usam curvas
                    de Bézier para criar movimentos suaves e naturais.
                  </p>
                </div>

                <div className="bg-black/20 rounded-lg p-6 border border-white/10">
                  <h3 className="text-lg font-semibold text-white mb-3">
                    📱 Fontes Digitais
                  </h3>
                  <p className="text-white/80 text-sm leading-relaxed">
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
                <span className="text-yellow-400">🔧</span>
                Aplicações Modernas
              </h2>
              <div className="text-white/80 space-y-4">
                <div className="flex items-start gap-4">
                  <span className="text-2xl">🎯</span>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      Design Gráfico
                    </h3>
                    <p>
                      Logotipos, ícones, ilustrações vetoriais e layouts
                      responsivos.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="text-2xl">🎮</span>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      Jogos
                    </h3>
                    <p>
                      Trajetórias de movimento, animações de personagens e
                      efeitos visuais.
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
                      Modelagem de estruturas curvas, design de interiores e
                      visualização 3D.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="text-2xl">🤖</span>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      Robótica
                    </h3>
                    <p>
                      Planejamento de trajetórias suaves para movimentos de
                      robôs.
                    </p>
                  </div>
                </div>
              </div>
            </section>
            {/* Demo Link */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="text-red-400">🎨</span>
                Experimente na Prática
              </h2>
              <div className="text-center">
                <p className="text-white/80 mb-6">
                  Teste nossa ferramenta interativa.
                </p>
                <button
                  onClick={() => router.push("/canvas")}
                  className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-pink-500/40"
                >
                  🎨 Acessar
                </button>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
