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
              ← Voltar para material teórico
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
              <h2 className="flex justify-center text-3xl font-bold text-white mb-6">
                História
              </h2>
              <div className="mb-6">
                <div className="lg:col-span-2 text-white/80 space-y-4 leading-relaxed">
                  <p>
                    A animação digital tem suas raízes na animação tradicional,
                    que começou com o
                    <strong className="text-white">
                      {" "}
                      fenacistoscópio de Joseph Plateau
                    </strong>{" "}
                    em 1832. O primeiro filme de animação foi
                    &quot;Fantasmagorie&quot; de Émile Cohl em 1908.
                  </p>
                  <p>
                    A animação por computador começou na década de 1960, com
                    pioneiros como
                    <strong className="text-white">Ivan Sutherland</strong> e
                    seu sistema Sketchpad. O primeiro filme de animação
                    computadorizada foi &quot;Hummingbird&quot; de Charles Csuri
                    em 1967.
                  </p>
                  <p>
                    A <strong className="text-white">Pixar</strong> revolucionou
                    a animação com &quot;Toy Story&quot; em 1995, o primeiro
                    longa-metragem totalmente animado por computador. Desde
                    então, a animação digital se tornou o padrão da indústria.
                  </p>
                </div>
              </div>

              {/* Timeline */}
              <div className="bg-black/20 rounded-lg p-6 border border-white/10">
                <h3 className="text-lg font-semibold text-white mb-4">
                  Marcos da Animação
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span className="text-white font-medium">1832:</span>
                    <span className="text-white/80">
                      Joseph Plateau inventa o fenacistoscópio
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-white font-medium">1908:</span>
                    <span className="text-white/80">
                      &quot;Fantasmagorie&quot; - primeiro filme de animação
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-white font-medium">1937:</span>
                    <span className="text-white/80">
                      &quot;Branca de Neve&quot; - primeiro longa de animação
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                    <span className="text-white font-medium">1967:</span>
                    <span className="text-white/80">
                      &quot;Hummingbird&quot; - primeira animação por computador
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span className="text-white font-medium">1995:</span>
                    <span className="text-white/80">
                      &quot;Toy Story&quot; revoluciona a animação digital
                    </span>
                  </div>
                </div>
              </div>
            </section>

            {/* Teoria */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="flex justify-center text-3xl font-bold text-white mb-6">
                Princípios Fundamentais
              </h2>
              <div className="text-white/80 space-y-6">
                <div className="flex text-center gap-6">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">
                      Os 12 Princípios de Disney
                    </h3>
                    <p className="leading-relaxed mb-4">
                      Criados pelos animadores da Disney, estes princípios são
                      fundamentais para criar animações convincentes e
                      expressivas:
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-black/30 rounded-lg p-4 border border-white/10">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                      Squash and Stretch
                    </h4>
                    <p className="text-sm text-white/60">
                      Deformação para dar sensação de peso e flexibilidade
                    </p>
                  </div>

                  <div className="bg-black/30 rounded-lg p-4 border border-white/10">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      Anticipation
                    </h4>
                    <p className="text-sm text-white/60">
                      Preparação para uma ação principal
                    </p>
                  </div>

                  <div className="bg-black/30 rounded-lg p-4 border border-white/10">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                      Staging
                    </h4>
                    <p className="text-sm text-white/60">
                      Apresentação clara da ideia principal
                    </p>
                  </div>

                  <div className="bg-black/30 rounded-lg p-4 border border-white/10">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                      Timing & Spacing
                    </h4>
                    <p className="text-sm text-white/60">
                      Controle do tempo e espaçamento entre frames
                    </p>
                  </div>
                </div>

                <div className="bg-black/20 rounded-lg p-6 border border-white/10">
                  <h3 className="text-xl font-semibold text-white mb-3">
                    Interpolação Matemática
                  </h3>
                  <p className="leading-relaxed mb-4">
                    A base matemática da animação é a interpolação entre valores
                    ao longo do tempo:
                  </p>
                  <div className="bg-black/30 rounded-lg p-4 font-mono text-sm border border-white/10">
                    valor_atual = valor_inicial + (valor_final - valor_inicial)
                    × progresso
                    <br />
                    <span className="text-white/60">
                      onde progresso varia de 0 a 1
                    </span>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-black/20 rounded-lg p-4 border border-white/10">
                    <h4 className="text-white font-medium mb-2">
                      Easing Functions
                    </h4>
                    <p className="text-sm text-white/60">
                      Controlam aceleração e desaceleração
                    </p>
                  </div>
                  <div className="bg-black/20 rounded-lg p-4 border border-white/10">
                    <h4 className="text-white font-medium mb-2">Keyframes</h4>
                    <p className="text-sm text-white/60">
                      Pontos principais da animação
                    </p>
                  </div>
                  <div className="bg-black/20 rounded-lg p-4 border border-white/10">
                    <h4 className="text-white font-medium mb-2">Frame Rate</h4>
                    <p className="text-sm text-white/60">
                      Frequência de atualização (FPS)
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Vídeos Educativos */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-3xl font-bold text-white mb-6">
                Vídeo Educativos
              </h2>
              <div className="flex justify-center">
                <div className="bg-black/20 rounded-lg overflow-hidden border border-white/10">
                  <div className="aspect-video bg-gradient-to-br from-purple-500/20 to-blue-600/20 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-4xl mb-2">▶</div>
                      <p className="text-white text-sm">
                        12 Principles of Animation
                      </p>
                      <a
                        href="https://www.youtube.com/watch?v=uDqjIdI4bF4"
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
                      Demonstração visual dos 12 princípios fundamentais da
                      animação
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
                    Toy Story
                  </h3>
                  <p className="text-white/80 text-sm leading-relaxed mb-3">
                    O primeiro &quot;Toy Story&quot; levou 4 anos para ser
                    produzido e usou 117 computadores renderizando 24 horas por
                    dia. Cada frame levava entre 45 minutos e 30 horas para ser
                    renderizado.
                  </p>
                  <a
                    href="https://www.pixar.com/toy-story"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 text-xs underline"
                  >
                    Saiba mais →
                  </a>
                </div>

                <div className="bg-black/20 rounded-lg p-6 border border-white/10">
                  <h3 className="text-lg font-semibold text-white mb-3">
                    Jogos Modernos
                  </h3>
                  <p className="text-white/80 text-sm leading-relaxed mb-3">
                    A animação em jogos modernos pode ter até 120 frames por
                    segundo, exigindo otimização extrema para performance em
                    tempo real. Motion capture é usado para capturar movimentos
                    realistas.
                  </p>
                  <a
                    href="https://en.wikipedia.org/wiki/Motion_capture"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 text-xs underline"
                  >
                    Saiba mais →
                  </a>
                </div>

                <div className="bg-black/20 rounded-lg p-6 border border-white/10">
                  <h3 className="text-lg font-semibold text-white mb-3">
                    Material Design
                  </h3>
                  <p className="text-white/80 text-sm leading-relaxed mb-3">
                    O Material Design do Google define padrões específicos de
                    animação para criar interfaces mais intuitivas e
                    responsivas, com duração entre 200ms e 500ms para a maioria
                    das transições.
                  </p>
                  <a
                    href="https://material.io/design/motion"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 text-xs underline"
                  >
                    Saiba mais →
                  </a>
                </div>

                <div className="bg-black/20 rounded-lg p-6 border border-white/10">
                  <h3 className="text-lg font-semibold text-white mb-3">
                    IA Generativa
                  </h3>
                  <p className="text-white/80 text-sm leading-relaxed mb-3">
                    Sistemas de IA estão sendo usados para gerar animações
                    automáticas, incluindo deepfakes, animação procedural e até
                    mesmo roteirização automática de movimentos.
                  </p>
                  <a
                    href="https://en.wikipedia.org/wiki/Procedural_animation"
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
                        Cinema e TV
                      </h3>
                      <p className="text-white/80 text-sm">
                        Filmes de animação, efeitos especiais, motion graphics e
                        visualizações científicas para documentários.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex items-center justify-center"></div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">
                        Jogos Eletrônicos
                      </h3>
                      <p className="text-white/80 text-sm">
                        Animação de personagens, interfaces dinâmicas, efeitos
                        visuais e cinematics em tempo real.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex items-center justify-center"></div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">
                        Apps e Web
                      </h3>
                      <p className="text-white/80 text-sm">
                        Transições de interface, feedback visual,
                        micro-interações e loading animations.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className=" flex items-center justify-center"></div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">
                        Medicina
                      </h3>
                      <p className="text-white/80 text-sm">
                        Simulações cirúrgicas, visualização de procedimentos
                        médicos e treinamento através de realidade virtual.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className=" flex items-center justify-center"></div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">
                        Educação
                      </h3>
                      <p className="text-white/80 text-sm">
                        Conteúdo educacional interativo, simulações científicas
                        e visualizações de conceitos abstratos.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-black/20 rounded-lg p-6 border border-white/10">
                  <h3 className="text-lg font-semibold text-white mb-4">
                    Ferramentas de Animação
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-white/80">Adobe After Effects</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-white/80">Blender</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-white/80">CSS Animations</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-white/80">Lottie</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-white/80">Unity/Unreal</span>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/10">
                    <h4 className="text-white font-medium mb-3">
                      Tipos de Animação
                    </h4>
                    <div className="grid grid-cols-1 gap-2 text-sm">
                      <div className="text-white/60">• Keyframe Animation</div>
                      <div className="text-white/60">• Motion Capture</div>
                      <div className="text-white/60">
                        • Procedural Animation
                      </div>
                      <div className="text-white/60">
                        • Physics-based Animation
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Recursos e Referências */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-3xl font-bold text-white mb-6">
                Referências
              </h2>
              <div className="">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-4">
                    Livros e Artigos
                  </h3>
                  <div className="space-y-3">
                    <a
                      href="https://www.amazon.com/Animators-Survival-Kit-Richard-Williams/dp/086547897X"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block bg-black/20 rounded-lg p-4 border border-white/10 hover:border-purple-500/50 transition-colors"
                    >
                      <h4 className="text-white font-medium mb-1">
                        The Animator&apos;s Survival Kit
                      </h4>
                      <p className="text-white/60 text-sm">
                        Livro clássico de Richard Williams sobre animação
                      </p>
                    </a>

                    <a
                      href="https://en.wikipedia.org/wiki/Computer_animation"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block bg-black/20 rounded-lg p-4 border border-white/10 hover:border-purple-500/50 transition-colors"
                    >
                      <h4 className="text-white font-medium mb-1">
                        Wikipedia - Computer Animation
                      </h4>
                      <p className="text-white/60 text-sm">
                        Artigo abrangente sobre animação por computador
                      </p>
                    </a>

                    <a
                      href="https://www.disneyanimation.com/technology/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block bg-black/20 rounded-lg p-4 border border-white/10 hover:border-purple-500/50 transition-colors"
                    >
                      <h4 className="text-white font-medium mb-1">
                        Disney Animation Technology
                      </h4>
                      <p className="text-white/60 text-sm">
                        Tecnologias usadas pela Disney Animation
                      </p>
                    </a>
                  </div>
                </div>
              </div>
            </section>

            {/* Demo Link */}
            <section className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20">
              <h2 className="text-3xl font-bold text-white mb-6">
                Experimente na Prática
              </h2>
              <div className="text-center">
                <p className="text-white/80 mb-6">
                  Teste nossa ferramenta interativa para criar e visualizar
                  diferentes tipos de animações em tempo real.
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
