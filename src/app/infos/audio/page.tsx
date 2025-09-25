"use client";

import { useRouter } from "next/navigation";
import Header from "@/components/Header";
import router from "next/router";

export default function AudioPage() {
  const router = useRouter();
  return (
    <div className="min-h-screen bg-[#0a0a0f] relative overflow-hidden">
      <Header />

      <main className="pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-5">
          <div className="mb-8">
            <button
              onClick={() => router.back()}
              className="text-white/60 hover:text-white transition-colors duration-300 flex items-center gap-2 cursor-pointer"
            >
              ← Voltar para material teórico
            </button>
          </div>
          {/* Hero Section */}
          <div className="text-center mb-12 sm:mb-16 px-2">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-purple-500/30 to-blue-600/30 backdrop-blur-sm rounded-2xl flex items-center justify-center text-3xl sm:text-4xl text-white mb-4 sm:mb-6 shadow-lg border border-white/20 mx-auto">
              🎵
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-3 sm:mb-4">
              Processamento Digital de Áudio
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
              Da captura analógica à reprodução digital: os fundamentos
              matemáticos do áudio
            </p>
          </div>

          {/* Content Sections */}
          <div className="space-y-12 sm:space-y-16">
            {/* Fundamentos */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/10">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">
                Fundamentos do Áudio Digital
              </h2>
              <div className="mb-4 sm:mb-6">
                <div className="text-white/80 space-y-3 sm:space-y-4 leading-relaxed text-sm sm:text-base">
                  <p>
                    O <strong className="text-white">sinal de áudio</strong> é
                    uma representação da pressão da onda sonora no tímpano
                    humano. Para que possamos processar e transmitir áudio
                    digitalmente, precisamos converter sinais analógicos
                    contínuos em dados digitais discretos.
                  </p>
                  <p>
                    A sensibilidade do ouvido humano varia com a frequência,
                    sendo mais sensível às frequências médias (1-4 kHz). A{" "}
                    <strong className="text-white">faixa audível</strong>{" "}
                    considerada é de 20 Hz a 20 kHz.
                  </p>
                </div>
              </div>

              {/* Características do Áudio */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                <div className="bg-black/30 rounded-lg p-3 sm:p-4 border border-white/10">
                  <h4 className="text-white font-semibold mb-2 flex items-center gap-2 text-sm sm:text-base">
                    <div className="w-2 h-2 sm:w-3 sm:h-3 bg-blue-500 rounded-full"></div>
                    Frequência
                  </h4>
                  <p className="text-xs sm:text-sm text-white/70 mb-2">
                    20 Hz - 20 kHz
                  </p>
                  <p className="text-xs text-white/60">
                    Determina a altura do som (grave/agudo)
                  </p>
                </div>

                <div className="bg-black/30 rounded-lg p-3 sm:p-4 border border-white/10">
                  <h4 className="text-white font-semibold mb-2 flex items-center gap-2 text-sm sm:text-base">
                    <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full"></div>
                    Amplitude
                  </h4>
                  <p className="text-xs sm:text-sm text-white/70 mb-2">
                    0 - 120 dB SPL
                  </p>
                  <p className="text-xs text-white/60">
                    Determina o volume do som
                  </p>
                </div>

                <div className="bg-black/30 rounded-lg p-3 sm:p-4 border border-white/10">
                  <h4 className="text-white font-semibold mb-2 flex items-center gap-2 text-sm sm:text-base">
                    <div className="w-2 h-2 sm:w-3 sm:h-3 bg-purple-500 rounded-full"></div>
                    Timbre
                  </h4>
                  <p className="text-xs sm:text-sm text-white/70 mb-2">
                    Harmônicos
                  </p>
                  <p className="text-xs text-white/60">
                    Característica única de cada fonte sonora
                  </p>
                </div>
              </div>
            </section>

            {/* Digitalização */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/10">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">
                Processo de Digitalização
              </h2>

              <div className="text-white/80 space-y-4 sm:space-y-6">
                <p className="leading-relaxed text-sm sm:text-base">
                  A digitalização de áudio envolve três etapas principais:{" "}
                  <strong className="text-white">Amostragem</strong>,{" "}
                  <strong className="text-white">Quantização</strong> e{" "}
                  <strong className="text-white">Codificação</strong>.
                </p>

                {/* Fluxo de Digitalização */}
                <div className="bg-black/20 rounded-lg p-4 sm:p-6 border border-white/10">
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">
                    Fluxo de Digitalização
                  </h3>
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
                    <div className="text-center">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-500/30 to-cyan-500/30 rounded-xl flex items-center justify-center text-xl sm:text-2xl mb-2">
                        🌊
                      </div>
                      <p className="text-white font-medium text-sm sm:text-base">
                        Sinal Analógico
                      </p>
                    </div>
                    <div className="text-xl sm:text-2xl text-white/40">→</div>
                    <div className="text-center">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-green-500/30 to-emerald-500/30 rounded-xl flex items-center justify-center text-xl sm:text-2xl mb-2">
                        ⏱️
                      </div>
                      <p className="text-white font-medium text-sm sm:text-base">
                        Amostragem
                      </p>
                    </div>
                    <div className="text-xl sm:text-2xl text-white/40">→</div>
                    <div className="text-center">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-xl flex items-center justify-center text-xl sm:text-2xl mb-2">
                        📊
                      </div>
                      <p className="flex text-white font-medium text-sm sm:text-base">
                        Quantização
                      </p>
                    </div>
                    <div className="text-xl sm:text-2xl text-white/40">→</div>
                    <div className="text-center">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-orange-500/30 to-red-500/30 rounded-xl flex items-center justify-center text-xl sm:text-2xl mb-2">
                        💾
                      </div>
                      <p className="text-white font-medium text-sm sm:text-base">
                        Codificação
                      </p>
                    </div>
                  </div>
                </div>

                {/* Teorema de Nyquist */}
                <div className="bg-black/20 rounded-lg p-4 sm:p-6 border border-white/10">
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-3">
                    Teorema de Nyquist-Shannon
                  </h3>
                  <div className="mb-4">
                    <p className="text-white/80 leading-relaxed mb-3 text-sm sm:text-base">
                      &ldquo;Um sinal limitado em frequência pode ser
                      perfeitamente representado por suas amostras, desde que
                      estas sejam tomadas a uma taxa maior ou igual a duas vezes
                      a frequência máxima do sinal.&rdquo;
                    </p>
                    <div className="bg-black/30 rounded-lg p-3 sm:p-4 font-mono text-center border border-white/10">
                      <span className="text-green-400">f_s</span> ≥{" "}
                      <span className="text-orange-400">2</span> ×{" "}
                      <span className="text-blue-400">f_max</span>
                      <br />
                      <span className="text-xs text-white/60 mt-2 block">
                        Taxa de Amostragem ≥ 2 × Frequência Máxima
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Formatos de Áudio */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/10">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">
                Formatos de Áudio
              </h2>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                <div className="space-y-3 sm:space-y-4">
                  <h3 className="text-lg sm:text-xl font-semibold text-white">
                    Sem Compressão
                  </h3>

                  <div className="bg-black/20 rounded-lg p-3 sm:p-4 border border-white/10">
                    <div className="flex items-center gap-2 sm:gap-3 mb-2">
                      <div className="w-3 h-3 sm:w-4 sm:h-4 bg-blue-500 rounded"></div>
                      <h4 className="text-white font-semibold text-sm sm:text-base">
                        WAV
                      </h4>
                    </div>
                    <p className="text-white/70 text-xs sm:text-sm mb-2">
                      Formato sem perdas, alta qualidade
                    </p>
                    <div className="text-xs text-white/60">
                      • Tamanho: ~10 MB/min
                      <br />
                      • Qualidade: Máxima
                      <br />• Uso: Estúdios, produção
                    </div>
                  </div>

                  <div className="bg-black/20 rounded-lg p-3 sm:p-4 border border-white/10">
                    <div className="flex items-center gap-2 sm:gap-3 mb-2">
                      <div className="w-3 h-3 sm:w-4 sm:h-4 bg-green-500 rounded"></div>
                      <h4 className="text-white font-semibold text-sm sm:text-base">
                        FLAC
                      </h4>
                    </div>
                    <p className="text-white/70 text-xs sm:text-sm mb-2">
                      Compressão sem perdas
                    </p>
                    <div className="text-xs text-white/60">
                      • Tamanho: ~5 MB/min
                      <br />
                      • Qualidade: Máxima
                      <br />• Uso: Audiofilia, arquivamento
                    </div>
                  </div>
                </div>

                <div className="space-y-3 sm:space-y-4">
                  <h3 className="text-lg sm:text-xl font-semibold text-white">
                    Com Compressão
                  </h3>

                  <div className="bg-black/20 rounded-lg p-3 sm:p-4 border border-white/10">
                    <div className="flex items-center gap-2 sm:gap-3 mb-2">
                      <div className="w-3 h-3 sm:w-4 sm:h-4 bg-purple-500 rounded"></div>
                      <h4 className="text-white font-semibold text-sm sm:text-base">
                        MP3
                      </h4>
                    </div>
                    <p className="text-white/70 text-xs sm:text-sm mb-2">
                      MPEG-1 Layer 3, lossy
                    </p>
                    <div className="text-xs text-white/60">
                      • Tamanho: ~1 MB/min
                      <br />
                      • Qualidade: Boa
                      <br />• Uso: Streaming, portátil
                    </div>
                  </div>

                  <div className="bg-black/20 rounded-lg p-3 sm:p-4 border border-white/10">
                    <div className="flex items-center gap-2 sm:gap-3 mb-2">
                      <div className="w-3 h-3 sm:w-4 sm:h-4 bg-orange-500 rounded"></div>
                      <h4 className="text-white font-semibold text-sm sm:text-base">
                        AAC
                      </h4>
                    </div>
                    <p className="text-white/70 text-xs sm:text-sm mb-2">
                      Advanced Audio Coding
                    </p>
                    <div className="text-xs text-white/60">
                      • Tamanho: ~0.8 MB/min
                      <br />
                      • Qualidade: Muito boa
                      <br />• Uso: iTunes, YouTube, streaming
                    </div>
                  </div>
                </div>
              </div>

              {/* Codificação Multibanda */}
              <div className="mt-4 sm:mt-6 bg-black/20 rounded-lg p-4 sm:p-6 border border-white/10">
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3">
                  Codificação Multibanda
                </h3>
                <p className="text-white/80 leading-relaxed mb-4 text-sm sm:text-base">
                  O ouvido humano não é uniformemente sensível a todas as
                  frequências. Os codificadores modernos exploram essa
                  característica, alocando mais bits para frequências mais
                  perceptíveis e menos bits para frequências menos importantes.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                  <div className="text-center">
                    <div className="text-xl sm:text-2xl mb-2">🎵</div>
                    <p className="text-white font-medium text-sm sm:text-base">
                      Graves
                    </p>
                    <p className="text-xs text-white/60">
                      20-250 Hz
                      <br />
                      Menos sensível
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="text-xl sm:text-2xl mb-2">🔊</div>
                    <p className="text-white font-medium text-sm sm:text-base">
                      Médios
                    </p>
                    <p className="text-xs text-white/60">
                      250-4000 Hz
                      <br />
                      Mais sensível
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="text-xl sm:text-2xl mb-2">✨</div>
                    <p className="text-white font-medium text-sm sm:text-base">
                      Agudos
                    </p>
                    <p className="text-xs text-white/60">
                      4k-20k Hz
                      <br />
                      Sensibilidade variável
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Aplicações Práticas */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/10">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">
                Aplicações Modernas
              </h2>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                <div className="space-y-3 sm:space-y-4">
                  <div className="bg-black/20 rounded-lg p-4 sm:p-6 border border-white/10">
                    <h3 className="text-base sm:text-lg font-semibold text-white mb-3">
                      Streaming de Música
                    </h3>
                    <p className="text-white/80 text-xs sm:text-sm mb-3">
                      Plataformas como Spotify e Apple Music usam codificação
                      adaptativa, ajustando a qualidade baseada na velocidade da
                      conexão.
                    </p>
                    <div className="text-xs text-white/60">
                      • Baixa: 96 kbps AAC
                      <br />
                      • Normal: 160 kbps
                      <br />• Alta: 320 kbps
                    </div>
                  </div>

                  <div className="bg-black/20 rounded-lg p-4 sm:p-6 border border-white/10">
                    <h3 className="text-base sm:text-lg font-semibold text-white mb-3">
                      Jogos
                    </h3>
                    <p className="text-white/80 text-xs sm:text-sm mb-3">
                      Áudio 3D posicional, múltiplas camadas de som, compressão
                      em tempo real para economizar memória.
                    </p>
                    <div className="text-xs text-white/60">
                      • Surround 5.1/7.1
                      <br />
                      • Audio espacial
                      <br />• Compressão adaptativa
                    </div>
                  </div>
                </div>

                <div className="space-y-3 sm:space-y-4">
                  <div className="bg-black/20 rounded-lg p-4 sm:p-6 border border-white/10">
                    <h3 className="text-base sm:text-lg font-semibold text-white mb-3">
                      Videoconferência
                    </h3>
                    <p className="text-white/80 text-xs sm:text-sm mb-3">
                      Cancelamento de ruído, compressão de voz, baixa latência
                      para comunicação em tempo real.
                    </p>
                    <div className="text-xs text-white/60">
                      • Codecs: Opus, G.722
                      <br />
                      • Latência: &lt;20ms
                      <br />• Cancelamento de eco
                    </div>
                  </div>

                  <div className="bg-black/20 rounded-lg p-4 sm:p-6 border border-white/10">
                    <h3 className="text-base sm:text-lg font-semibold text-white mb-3">
                      Assistentes de Voz
                    </h3>
                    <p className="text-white/80 text-xs sm:text-sm mb-3">
                      Reconhecimento de padrões, processamento de linguagem
                      natural, síntese de voz em tempo real.
                    </p>
                    <div className="text-xs text-white/60">
                      • Wake word detection
                      <br />
                      • Noise reduction
                      <br />• Speech-to-text
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Recursos e Referências */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/10">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">
                Recursos e Referências
              </h2>

              <div className="">
                <div>
                  <h3 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">
                    Artigos e Videos
                  </h3>
                  <div className="space-y-3">
                    <a
                      href="https://www.sciencedirect.com/topics/engineering/audio-signal-processing"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block bg-black/20 rounded-lg p-3 sm:p-4 border border-white/10 hover:border-purple-500/50 transition-colors"
                    >
                      <h4 className="text-white font-medium mb-1 text-sm sm:text-base">
                        Processamento de Sinal de Áudio - uma visão geral
                      </h4>
                      <p className="text-white/60 text-xs sm:text-sm">
                        Artigo completo sobre processamento digital de sinais
                      </p>
                    </a>
                  </div>
                </div>
              </div>
            </section>
            <section className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20">
              <h2 className="text-3xl font-bold text-white mb-6">
                Experimente na Prática
              </h2>
              <div className="text-center">
                <p className="text-white/80 mb-6">
                  Teste nossa ferramenta interativa de Aliasing.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={() => router.push("/aliasing")}
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
