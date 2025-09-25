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
              className="text-white/60 hover:text-white transition-colors duration-300 flex items-center gap-2 cursor-pointer"
            >
              ← Voltar para material teórico
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
              <h2 className="flex justify-center text-3xl font-bold text-white mb-6">
                História
              </h2>
              <div className="mb-6">
                <div className="lg:col-span-2 text-white/80 space-y-4 leading-relaxed">
                  <p>
                    O ray tracing remonta a{" "}
                    <strong className="text-white">Arthur Appel (1968)</strong>,
                    que introduziu o ray casting para sombreamento e
                    visibilidade.
                  </p>
                  <p>
                    Em 1979,{" "}
                    <strong className="text-white">Turner Whitted</strong>{" "}
                    formalizou o ray tracing recursivo com reflexões e
                    refrações, base do render moderno.
                  </p>
                  <p>
                    A partir de 2018, GPUs com núcleos dedicados (RTX)
                    viabilizaram
                    <strong className="text-white">
                      {" "}
                      ray tracing em tempo real
                    </strong>{" "}
                    em jogos.
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
                    <span className="text-white font-medium">1968:</span>
                    <span className="text-white/80">
                      Appel publica ray casting
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-white font-medium">1979:</span>
                    <span className="text-white/80">
                      Whitted e o ray tracing recursivo
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-white font-medium">2018:</span>
                    <span className="text-white/80">GPUs RTX com RT cores</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span className="text-white font-medium">Hoje:</span>
                    <span className="text-white/80">
                      RT híbrido em tempo real
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
                <div className="flex justify-center text-center gap-6">
                  <div className="">
                    <h3 className="text-xl font-semibold text-white mb-3">
                      O Algoritmo Básico
                    </h3>
                    <p className="leading-relaxed mb-4">
                      Simula caminhos de luz da câmera até as superfícies.
                    </p>
                  </div>
                </div>

                <div className="bg-black/30 rounded-lg p-4 font-mono text-sm border border-white/10">
                  1. Para cada pixel → emitir raio primário
                  <br />
                  2. Encontrar a primeira interseção
                  <br />
                  3. Calcular cor com luzes e material
                  <br />
                  4. Gerar raios de sombra / reflexão / refração conforme
                  material
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-black/30 rounded-lg p-4 border border-white/10">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                      Raios Primários e de Sombra
                    </h4>
                    <p className="text-sm text-white/60">
                      Verificam visibilidade de pontos e iluminação direta.
                    </p>
                  </div>
                  <div className="bg-black/30 rounded-lg p-4 border border-white/10">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      Reflexão e Refração
                    </h4>
                    <p className="text-sm text-white/60">
                      Raios secundários para materiais espelhados e
                      transparentes.
                    </p>
                  </div>
                </div>

                <div className="bg-black/20 rounded-lg p-6 border border-white/10">
                  <h3 className="text-xl font-semibold text-white mb-3">
                    Modelos de Iluminação
                  </h3>
                  <p className="leading-relaxed mb-4">
                    Phong, Blinn-Phong e PBR para luz direta e indireta.
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-black/20 rounded-lg p-4 border border-white/10">
                    <h4 className="text-white font-medium mb-2">Aceleração</h4>
                    <p className="text-sm text-white/60">
                      BVH/KD-Tree para reduzir testes de interseção.
                    </p>
                  </div>
                  <div className="bg-black/20 rounded-lg p-4 border border-white/10">
                    <h4 className="text-white font-medium mb-2">Amostragem</h4>
                    <p className="text-sm text-white/60">
                      Anti-aliasing via multi-sampling.
                    </p>
                  </div>
                  <div className="bg-black/20 rounded-lg p-4 border border-white/10">
                    <h4 className="text-white font-medium mb-2">
                      Path Tracing
                    </h4>
                    <p className="text-sm text-white/60">
                      Integra iluminação global estocástica.
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
                    Jogos Modernos
                  </h3>
                  <p className="text-white/80 text-sm leading-relaxed">
                    Jogos como Cyberpunk 2077 e Control usam ray tracing para
                    criar reflexões, sombras e iluminação global realistas.
                  </p>
                  <a
                    href="https://www.youtube.com/watch?v=iOlehM5kNSk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 text-xs underline"
                  >
                    Saiba mais →
                  </a>
                </div>

                <div className="bg-black/20 rounded-lg p-6 border border-white/10">
                  <h3 className="text-lg font-semibold text-white mb-3">
                    Filmes
                  </h3>
                  <p className="text-white/80 text-sm leading-relaxed">
                    Studios como Pixar usam ray tracing para renderizar seus
                    filmes, levando horas para renderizar um único frame.
                  </p>
                  <a
                    href="https://www.youtube.com/watch?v=iOlehM5kNSk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 text-xs underline"
                  >
                    Saiba mais →
                  </a>
                </div>

                <div className="bg-black/20 rounded-lg p-6 border border-white/10">
                  <h3 className="text-lg font-semibold text-white mb-3">
                    Performance
                  </h3>
                  <p className="text-white/80 text-sm leading-relaxed">
                    Ray tracing é computacionalmente intensivo - um frame pode
                    requerer bilhões de cálculos de interseção de raios.
                  </p>
                </div>

                <div className="bg-black/20 rounded-lg p-6 border border-white/10">
                  <h3 className="text-lg font-semibold text-white mb-3">
                    Pesquisa
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
                Aplicações Atuais
              </h2>
              <div className="text-white/80 space-y-4">
                <div className="flex items-start gap-4">
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

            {/* Recursos e Referências */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                Referências
              </h2>
              <div className="space-y-3">
                <a
                  href="https://raytracing.github.io/books/RayTracingInOneWeekend.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-black/20 rounded-lg p-4 border border-white/10 hover:border-purple-500/50 transition-colors"
                >
                  <h4 className="text-white font-medium mb-1">
                    Ray Tracing in One Weekend
                  </h4>
                  <p className="text-white/60 text-sm">
                    Série gratuita para implementar seu próprio ray tracer
                  </p>
                </a>
                <a
                  href="https://en.wikipedia.org/wiki/Ray_tracing_(graphics)"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-black/20 rounded-lg p-4 border border-white/10 hover:border-purple-500/50 transition-colors"
                >
                  <h4 className="text-white font-medium mb-1">
                    Wikipedia - Ray Tracing
                  </h4>
                  <p className="text-white/60 text-sm">
                    História, teoria e variações do algoritmo
                  </p>
                </a>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
