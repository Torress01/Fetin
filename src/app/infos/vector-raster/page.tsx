"use client";

import { useRouter } from "next/navigation";
import Header from "@/components/Header";

export default function VectorRasterPage() {
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
            <div className="w-20 h-20 bg-gradient-to-br from-pink-500/30 to-purple-600/30 backdrop-blur-sm rounded-2xl flex items-center justify-center text-4xl text-white mb-6 shadow-lg border border-white/20 mx-auto">
              🎨
            </div>
            <h1 className="text-5xl font-extrabold text-white mb-4">
              Vetorial vs Matricial
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Entenda as diferenças fundamentais entre os dois tipos principais
              de imagens digitais
            </p>
          </div>

          {/* Content Sections */}
          <div className="space-y-16">
            {/* História */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                História e Evolução
              </h2>
              <div className="text-white/80 space-y-4 leading-relaxed">
                <p>
                  As imagens matriciais (raster) surgiram com os primeiros
                  computadores gráficos na década de 1960, quando a tecnologia
                  de display baseada em pixels se tornou disponível. O formato
                  bitmap foi desenvolvido para representar imagens como uma
                  grade de pixels coloridos.
                </p>
                <p>
                  As imagens vetoriais foram desenvolvidas na década de 1970,
                  com o surgimento de linguagens de descrição de página como
                  PostScript. O formato SVG (Scalable Vector Graphics) foi
                  padronizado pela W3C em 2001, revolucionando a web com
                  gráficos escaláveis.
                </p>
                <p>
                  A evolução dos formatos de imagem tem sido marcada pela busca
                  do equilíbrio entre qualidade, tamanho de arquivo e
                  flexibilidade de uso, resultando em formatos especializados
                  para diferentes aplicações.
                </p>
              </div>
            </section>

            {/* Comparação Técnica */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                Comparação Técnica
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                {/* Vetorial */}
                <div className="bg-green-500/10 rounded-xl p-6 border border-green-500/20">
                  <h3 className="text-2xl font-bold text-green-400 mb-4">
                    Imagens Vetoriais
                  </h3>
                  <div className="space-y-3 text-white/80">
                    <div>
                      <strong className="text-green-300">Formato:</strong>
                      <p>SVG, AI, EPS, PDF</p>
                    </div>
                    <div>
                      <strong className="text-green-300">
                        Base Matemática:
                      </strong>
                      <p>Pontos, linhas, curvas de Bézier</p>
                    </div>
                    <div>
                      <strong className="text-green-300">
                        Escalabilidade:
                      </strong>
                      <p>Infinita sem perda de qualidade</p>
                    </div>
                    <div>
                      <strong className="text-green-300">
                        Tamanho de Arquivo:
                      </strong>
                      <p>Geralmente menor</p>
                    </div>
                    <div>
                      <strong className="text-green-300">Edição:</strong>
                      <p>Modificação de formas e propriedades</p>
                    </div>
                  </div>
                </div>

                {/* Matricial */}
                <div className="bg-blue-500/10 rounded-xl p-6 border border-blue-500/20">
                  <h3 className="text-2xl font-bold text-blue-400 mb-4">
                    Imagens Matriciais
                  </h3>
                  <div className="space-y-3 text-white/80">
                    <div>
                      <strong className="text-blue-300">Formato:</strong>
                      <p>JPG, PNG, GIF, BMP, TIFF</p>
                    </div>
                    <div>
                      <strong className="text-blue-300">
                        Base Matemática:
                      </strong>
                      <p>Grade de pixels coloridos</p>
                    </div>
                    <div>
                      <strong className="text-blue-300">Escalabilidade:</strong>
                      <p>Limitada pela resolução</p>
                    </div>
                    <div>
                      <strong className="text-blue-300">
                        Tamanho de Arquivo:
                      </strong>
                      <p>Geralmente maior</p>
                    </div>
                    <div>
                      <strong className="text-blue-300">Edição:</strong>
                      <p>Modificação pixel por pixel</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Aplicações */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                Aplicações Práticas
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-green-400 mb-4">
                    Quando Usar Vetorial
                  </h3>
                  <div className="space-y-3 text-white/80">
                    <div className="flex items-start gap-3">
                      <div>
                        <strong>Logos e Identidade Visual</strong>
                        <p className="text-sm">
                          Escalabilidade para diferentes tamanhos
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div>
                        <strong>Ícones e UI</strong>
                        <p className="text-sm">
                          Adaptação para diferentes resoluções
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div>
                        <strong>Gráficos e Diagramas</strong>
                        <p className="text-sm">
                          Precisão matemática e edição fácil
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div>
                        <strong>Ilustrações Técnicas</strong>
                        <p className="text-sm">
                          Linhas limpas e formas precisas
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-blue-400 mb-4">
                    Quando Usar Matricial
                  </h3>
                  <div className="space-y-3 text-white/80">
                    <div className="flex items-start gap-3">
                      <div>
                        <strong>Fotografias</strong>
                        <p className="text-sm">
                          Captura de detalhes e texturas
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div>
                        <strong>Arte Digital</strong>
                        <p className="text-sm">Pintura e efeitos artísticos</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div>
                        <strong>Texturas e Materiais</strong>
                        <p className="text-sm">Detalhes realistas para 3D</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div>
                        <strong>Capturas de Tela</strong>
                        <p className="text-sm">
                          Representação exata do que é visto
                        </p>
                      </div>
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
                    Web Moderna
                  </h3>
                  <p className="text-white/80 text-sm leading-relaxed">
                    O SVG revolucionou a web ao permitir gráficos escaláveis que
                    se adaptam a qualquer resolução de tela, desde smartphones
                    até monitores 4K.
                  </p>
                </div>

                <div className="bg-black/20 rounded-lg p-6 border border-white/10">
                  <h3 className="text-lg font-semibold text-white mb-3">
                    Photoshop
                  </h3>
                  <p className="text-white/80 text-sm leading-relaxed">
                    O Photoshop trabalha principalmente com imagens matriciais,
                    mas inclui ferramentas vetoriais como &quot;Shape
                    Layers&quot; para combinar os dois mundos.
                  </p>
                </div>

                <div className="bg-black/20 rounded-lg p-6 border border-white/10">
                  <h3 className="text-lg font-semibold text-white mb-3">
                    Responsividade
                  </h3>
                  <p className="text-white/80 text-sm leading-relaxed">
                    Ícones vetoriais são essenciais para apps modernos, pois se
                    adaptam automaticamente a diferentes densidades de pixel
                    (1x, 2x, 3x).
                  </p>
                </div>

                <div className="bg-black/20 rounded-lg p-6 border border-white/10">
                  <h3 className="text-lg font-semibold text-white mb-3">
                    Impressão
                  </h3>
                  <p className="text-white/80 text-sm leading-relaxed">
                    Para impressão em alta qualidade, imagens matriciais
                    precisam ter resolução adequada (300 DPI), enquanto
                    vetoriais mantêm qualidade independente do tamanho.
                  </p>
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
                  Teste nossa ferramenta interativa para comparar a qualidade de
                  imagens vetoriais e matriciais em diferentes níveis de zoom.
                </p>
                <button
                  onClick={() => router.push("/vector")}
                  className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-pink-500/40"
                >
                  Acessar Comparador Vetorial vs Matricial
                </button>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
