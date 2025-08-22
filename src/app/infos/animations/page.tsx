"use client";

import { useRouter } from "next/navigation";
import Header from "@/components/Header";

export default function AnimationsPage() {
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
              🕺
            </div>
            <h1 className="text-5xl font-extrabold text-white mb-4">
              Animações
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              A arte de dar vida ao digital através do movimento e tempo
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
                  A animação digital tem suas raízes na animação tradicional,
                  que começou com o fenacistoscópio de Joseph Plateau em 1832. O
                  primeiro filme de animação foi "Fantasmagorie" de Émile Cohl
                  em 1908.
                </p>
                <p>
                  A animação por computador começou na década de 1960, com
                  pioneiros como Ivan Sutherland e seu sistema Sketchpad. O
                  primeiro filme de animação computadorizada foi "Hummingbird"
                  de Charles Csuri em 1967.
                </p>
                <p>
                  A Pixar revolucionou a animação com "Toy Story" em 1995, o
                  primeiro longa-metragem totalmente animado por computador.
                  Desde então, a animação digital se tornou o padrão da
                  indústria.
                </p>
              </div>
            </section>

            {/* Teoria */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">

                Princípios Fundamentais
              </h2>
              <div className="text-white/80 space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    Os 12 Princípios de Disney
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-black/20 rounded-lg p-4">
                      <h4 className="text-white font-semibold mb-2">
                        1. Squash and Stretch
                      </h4>
                      <p className="text-sm">
                        Deformação para dar sensação de peso e flexibilidade.
                      </p>
                    </div>
                    <div className="bg-black/20 rounded-lg p-4">
                      <h4 className="text-white font-semibold mb-2">
                        2. Anticipation
                      </h4>
                      <p className="text-sm">
                        Preparação para uma ação principal.
                      </p>
                    </div>
                    <div className="bg-black/20 rounded-lg p-4">
                      <h4 className="text-white font-semibold mb-2">
                        3. Staging
                      </h4>
                      <p className="text-sm">
                        Apresentação clara da ideia principal.
                      </p>
                    </div>
                    <div className="bg-black/20 rounded-lg p-4">
                      <h4 className="text-white font-semibold mb-2">
                        4. Straight Ahead & Pose to Pose
                      </h4>
                      <p className="text-sm">
                        Dois métodos de animação: direto e por poses-chave.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    Interpolação
                  </h3>
                  <p className="leading-relaxed mb-4">
                    A base matemática da animação é a interpolação entre
                    valores:
                  </p>
                  <div className="bg-black/30 rounded-lg p-4 font-mono text-sm">
                    valor_atual = valor_inicial + (valor_final - valor_inicial)
                    × progresso
                  </div>
                  <p className="leading-relaxed mt-4">
                    Onde progresso varia de 0 a 1 ao longo do tempo da animação.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    Easing Functions
                  </h3>
                  <p className="leading-relaxed">
                    Funções que controlam a aceleração e desaceleração da
                    animação, criando movimentos mais naturais e expressivos.
                  </p>
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
                    Toy Story
                  </h3>
                  <p className="text-white/80 text-sm leading-relaxed">
                    O primeiro "Toy Story" levou 4 anos para ser produzido e
                    usou 117 computadores renderizando 24 horas por dia.
                  </p>
                </div>

                <div className="bg-black/20 rounded-lg p-6 border border-white/10">
                  <h3 className="text-lg font-semibold text-white mb-3">
                    Jogos
                  </h3>
                  <p className="text-white/80 text-sm leading-relaxed">
                    A animação em jogos modernos pode ter até 60 frames por
                    segundo, exigindo otimização extrema para performance em
                    tempo real.
                  </p>
                </div>

                <div className="bg-black/20 rounded-lg p-6 border border-white/10">
                  <h3 className="text-lg font-semibold text-white mb-3">
                    Interfaces
                  </h3>
                  <p className="text-white/80 text-sm leading-relaxed">
                    O Material Design do Google define padrões específicos de
                    animação para criar interfaces mais intuitivas e
                    responsivas.
                  </p>
                </div>

                <div className="bg-black/20 rounded-lg p-6 border border-white/10">
                  <h3 className="text-lg font-semibold text-white mb-3">
                    IA
                  </h3>
                  <p className="text-white/80 text-sm leading-relaxed">
                    Sistemas de IA estão sendo usados para gerar animações
                    automáticas, como deepfakes e animação procedural.
                  </p>
                </div>
              </div>
            </section>

            {/* Aplicações */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">

                Aplicações Modernas
              </h2>
              <div className="text-white/80 space-y-4">
                <div className="flex items-start gap-4">

                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      Cinema e TV
                    </h3>
                    <p>
                      Filmes de animação, efeitos especiais e motion graphics.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">

                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      Jogos
                    </h3>
                    <p>
                      Animação de personagens, interfaces e efeitos visuais.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">

                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      Apps e Web
                    </h3>
                    <p>
                      Transições de interface, feedback visual e
                      micro-interações.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">

                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      Medicina
                    </h3>
                    <p>
                      Simulações cirúrgicas e visualização de procedimentos
                      médicos.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">

                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      Educação
                    </h3>
                    <p>
                      Conteúdo educacional interativo e simulações científicas.
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
                  Teste nossa ferramenta interativa .
                </p>
                <button
                  onClick={() => router.push("/canvas")}
                  className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-pink-500/40"
                >
                  Acessar
                </button>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
