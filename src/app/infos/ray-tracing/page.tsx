"use client";

import { useRouter } from "next/navigation";
import Header from "@/components/Header";

export default function RayTracingPage() {
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
              🎨
            </div>
            <h1 className="text-5xl font-extrabold text-white mb-4">
              Ray Tracing
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Simulando a física da luz para criar imagens fotorrealistas
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
                  O ray tracing foi desenvolvido na década de 1960, com Arthur
                  Appel publicando o primeiro artigo sobre o assunto em 1968.
                  Ele descreveu um algoritmo para renderizar imagens 3D usando
                  "ray casting".
                </p>
                <p>
                  Turner Whitted expandiu o conceito em 1979 com seu artigo "An
                  Improved Illumination Model for Shaded Display", introduzindo
                  reflexões e sombras, criando o que hoje chamamos de ray
                  tracing recursivo.
                </p>
                <p>
                  O ray tracing em tempo real só se tornou viável na década de
                  2010, com o lançamento das GPUs NVIDIA RTX em 2018, que
                  incluíam hardware dedicado para aceleração de ray tracing.
                </p>
              </div>
            </section>

            {/* Teoria */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="text-blue-400">🧮</span>
                Como Funciona
              </h2>
              <div className="text-white/80 space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    O Algoritmo Básico
                  </h3>
                  <p className="leading-relaxed mb-4">
                    O ray tracing simula como a luz viaja do olho (câmera) para
                    os objetos:
                  </p>
                  <div className="bg-black/30 rounded-lg p-4 font-mono text-sm">
                    1. Para cada pixel na tela
                    <br />
                    2. Lançar um raio da câmera
                    <br />
                    3. Encontrar o objeto mais próximo
                    <br />
                    4. Calcular a cor baseada na iluminação
                    <br />
                    5. Se houver reflexão/refração, continuar o raio
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    Tipos de Raios
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-black/20 rounded-lg p-4">
                      <h4 className="text-white font-semibold mb-2">
                        Primary Rays
                      </h4>
                      <p className="text-sm">
                        Raios que saem da câmera para cada pixel.
                      </p>
                    </div>
                    <div className="bg-black/20 rounded-lg p-4">
                      <h4 className="text-white font-semibold mb-2">
                        Shadow Rays
                      </h4>
                      <p className="text-sm">
                        Raios que verificam se um ponto está na sombra.
                      </p>
                    </div>
                    <div className="bg-black/20 rounded-lg p-4">
                      <h4 className="text-white font-semibold mb-2">
                        Reflection Rays
                      </h4>
                      <p className="text-sm">
                        Raios que simulam reflexões em superfícies.
                      </p>
                    </div>
                    <div className="bg-black/20 rounded-lg p-4">
                      <h4 className="text-white font-semibold mb-2">
                        Refraction Rays
                      </h4>
                      <p className="text-sm">
                        Raios que simulam refração através de materiais.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    Modelos de Iluminação
                  </h3>
                  <p className="leading-relaxed">
                    O ray tracing usa modelos físicos como Phong, Blinn-Phong e
                    modelos fisicamente baseados (PBR) para calcular a
                    iluminação de cada ponto na superfície dos objetos.
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
                    🎮 Jogos Modernos
                  </h3>
                  <p className="text-white/80 text-sm leading-relaxed">
                    Jogos como Cyberpunk 2077 e Control usam ray tracing para
                    criar reflexões, sombras e iluminação global realistas.
                  </p>
                </div>

                <div className="bg-black/20 rounded-lg p-6 border border-white/10">
                  <h3 className="text-lg font-semibold text-white mb-3">
                    🎬 Filmes
                  </h3>
                  <p className="text-white/80 text-sm leading-relaxed">
                    Studios como Pixar usam ray tracing para renderizar seus
                    filmes, levando horas para renderizar um único frame.
                  </p>
                </div>

                <div className="bg-black/20 rounded-lg p-6 border border-white/10">
                  <h3 className="text-lg font-semibold text-white mb-3">
                    ⚡ Performance
                  </h3>
                  <p className="text-white/80 text-sm leading-relaxed">
                    Ray tracing é computacionalmente intensivo - um frame pode
                    requerer bilhões de cálculos de interseção de raios.
                  </p>
                </div>

                <div className="bg-black/20 rounded-lg p-6 border border-white/10">
                  <h3 className="text-lg font-semibold text-white mb-3">
                    🔬 Pesquisa
                  </h3>
                  <p className="text-white/80 text-sm leading-relaxed">
                    Pesquisadores usam ray tracing para simular propagação de
                    ondas sonoras e eletromagnéticas em ambientes complexos.
                  </p>
                </div>
              </div>
            </section>

            {/* Aplicações */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="text-yellow-400">🔧</span>
                Aplicações Atuais
              </h2>
              <div className="text-white/80 space-y-4">
                <div className="flex items-start gap-4">
                  <span className="text-2xl">🎮</span>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      Jogos
                    </h3>
                    <p>
                      Reflexões realistas, sombras dinâmicas e iluminação global
                      em tempo real.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="text-2xl">🎬</span>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      Cinema
                    </h3>
                    <p>
                      Renderização de efeitos especiais e animações
                      fotorrealistas.
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
                      Visualização de projetos com iluminação realista e
                      materiais precisos.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="text-2xl">🚗</span>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      Automotivo
                    </h3>
                    <p>
                      Design de faróis e análise de visibilidade em diferentes
                      condições.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="text-2xl">🔬</span>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      Ciência
                    </h3>
                    <p>
                      Simulação de propagação de ondas e análise de campos
                      eletromagnéticos.
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
