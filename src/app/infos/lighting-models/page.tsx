"use client";

import { useRouter } from "next/navigation";
import Header from "@/components/Header";

export default function LightingModelsPage() {
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
              💡
            </div>
            <h1 className="text-5xl font-extrabold text-white mb-4">
              Modelos de Iluminação
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Algoritmos para simular como a luz interage com superfícies
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
                  O primeiro modelo de iluminação computacional foi desenvolvido
                  por Henri Gouraud em 1971, criando a técnica de "Gouraud
                  shading" que interpola cores entre vértices de polígonos.
                </p>
                <p>
                  Bui Tuong Phong desenvolveu o "Phong shading" em 1973, que
                  interpola normais em vez de cores, criando reflexões
                  especulares mais realistas. Jim Blinn melhorou o modelo em
                  1977 com o "Blinn-Phong".
                </p>
                <p>
                  Na década de 1980, modelos fisicamente baseados (PBR)
                  começaram a emergir, culminando com o trabalho de
                  Cook-Torrance em 1982 e posteriormente com o modelo GGX em
                  2007.
                </p>
              </div>
            </section>

            {/* Teoria */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="text-blue-400">🧮</span>
                Modelos Principais
              </h2>
              <div className="text-white/80 space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    Modelo de Iluminação Ambiental
                  </h3>
                  <p className="leading-relaxed mb-4">
                    Simula a iluminação indireta do ambiente:
                  </p>
                  <div className="bg-black/30 rounded-lg p-4 font-mono text-sm">
                    I<sub>ambient</sub> = k<sub>a</sub> × I<sub>a</sub>
                    <br />
                    Onde k<sub>a</sub> é o coeficiente ambiental e I<sub>a</sub>{" "}
                    é a intensidade da luz ambiente
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    Modelo de Iluminação Difusa (Lambert)
                  </h3>
                  <p className="leading-relaxed mb-4">
                    Simula reflexão difusa em superfícies mate:
                  </p>
                  <div className="bg-black/30 rounded-lg p-4 font-mono text-sm">
                    I<sub>diffuse</sub> = k<sub>d</sub> × I<sub>light</sub> ×
                    max(0, N · L)
                    <br />
                    Onde N é a normal da superfície e L é o vetor da luz
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    Modelo de Iluminação Especular (Phong)
                  </h3>
                  <p className="leading-relaxed mb-4">
                    Simula reflexões especulares em superfícies brilhantes:
                  </p>
                  <div className="bg-black/30 rounded-lg p-4 font-mono text-sm">
                    I<sub>specular</sub> = k<sub>s</sub> × I<sub>light</sub> ×
                    (R · V)<sup>n</sup>
                    <br />
                    Onde R é o vetor de reflexão, V é o vetor de visualização e
                    n é o expoente de brilho
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    Modelo Blinn-Phong
                  </h3>
                  <p className="leading-relaxed mb-4">
                    Versão melhorada que usa o vetor half-way:
                  </p>
                  <div className="bg-black/30 rounded-lg p-4 font-mono text-sm">
                    I<sub>specular</sub> = k<sub>s</sub> × I<sub>light</sub> ×
                    (N · H)<sup>n</sup>
                    <br />
                    Onde H = (L + V) / ||L + V|| é o vetor half-way
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
                    🎮 Jogos Antigos
                  </h3>
                  <p className="text-white/80 text-sm leading-relaxed">
                    Jogos dos anos 90 usavam apenas iluminação ambiente e
                    difusa, criando gráficos "flat" característicos da época.
                  </p>
                </div>

                <div className="bg-black/20 rounded-lg p-6 border border-white/10">
                  <h3 className="text-lg font-semibold text-white mb-3">
                    🎬 Filmes
                  </h3>
                  <p className="text-white/80 text-sm leading-relaxed">
                    Studios como Pixar usam modelos PBR avançados que simulam
                    fenômenos físicos como dispersão sub-superfície.
                  </p>
                </div>

                <div className="bg-black/20 rounded-lg p-6 border border-white/10">
                  <h3 className="text-lg font-semibold text-white mb-3">
                    ⚡ Performance
                  </h3>
                  <p className="text-white/80 text-sm leading-relaxed">
                    Modelos de iluminação complexos podem reduzir a performance
                    em 50% ou mais em jogos em tempo real.
                  </p>
                </div>

                <div className="bg-black/20 rounded-lg p-6 border border-white/10">
                  <h3 className="text-lg font-semibold text-white mb-3">
                    🔬 Pesquisa
                  </h3>
                  <p className="text-white/80 text-sm leading-relaxed">
                    Pesquisadores estão desenvolvendo modelos baseados em IA que
                    aprendem a simular iluminação de forma mais eficiente.
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
                  <span className="text-2xl">🎮</span>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      Jogos
                    </h3>
                    <p>
                      Iluminação dinâmica em tempo real com sombras e reflexões.
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
                      Renderização fotorrealista para efeitos especiais e
                      animação.
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
                  <span className="text-2xl">📱</span>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      Realidade Aumentada
                    </h3>
                    <p>
                      Integração de objetos virtuais com iluminação do mundo
                      real.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* PBR */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="text-red-400">🌟</span>
                Modelos Fisicamente Baseados (PBR)
              </h2>
              <div className="text-white/80 space-y-4">
                <div className="bg-black/20 rounded-lg p-4">
                  <h3 className="text-white font-semibold mb-2">
                    Cook-Torrance
                  </h3>
                  <p className="text-sm">
                    Modelo que considera distribuição de microfacetas e
                    geometria de sombreamento.
                  </p>
                </div>

                <div className="bg-black/20 rounded-lg p-4">
                  <h3 className="text-white font-semibold mb-2">
                    GGX/Trowbridge-Reitz
                  </h3>
                  <p className="text-sm">
                    Distribuição de microfacetas que produz reflexões mais
                    realistas.
                  </p>
                </div>

                <div className="bg-black/20 rounded-lg p-4">
                  <h3 className="text-white font-semibold mb-2">
                    Smith Geometry
                  </h3>
                  <p className="text-sm">
                    Função de sombreamento que considera a orientação das
                    microfacetas.
                  </p>
                </div>

                <div className="bg-black/20 rounded-lg p-4">
                  <h3 className="text-white font-semibold mb-2">
                    Fresnel-Schlick
                  </h3>
                  <p className="text-sm">
                    Aproximação da equação de Fresnel para diferentes ângulos de
                    incidência.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
