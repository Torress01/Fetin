"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import Header from "@/components/Header";

export default function ColorSpacesPage() {
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
              🌈
            </div>
            <h1 className="text-5xl font-extrabold text-white mb-4">
              Espaços de Cor
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Modelos matemáticos para representar e manipular cores
              digitalmente
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
                    O estudo científico das cores começou com Newton (1672), que
                    demonstrou a decomposição da luz branca por um prisma.
                  </p>
                  <p>
                    Em 1931, a <strong className="text-white">CIE</strong>{" "}
                    definiu o espaço CIE XYZ a partir de experimentos
                    psicofísicos, base para diversos modelos modernos.
                  </p>
                  <p>
                    RGB popularizou-se em displays; CMYK em impressão; HSV foi
                    proposto para ser mais intuitivo a designers.
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
                    <span className="text-white font-medium">1672:</span>
                    <span className="text-white/80">Newton e o prisma</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-white font-medium">1931:</span>
                    <span className="text-white/80">CIE XYZ</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-white font-medium">1950s:</span>
                    <span className="text-white/80">RGB em TV</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span className="text-white font-medium">1996:</span>
                    <span className="text-white/80">sRGB para a web</span>
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
                <div className="flex text-center gap-6">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">
                      Modelos Clássicos
                    </h3>
                    <p className="leading-relaxed mb-4">
                      Modelos de cor representam a cor em bases diferentes:
                      aditiva (RGB), subtrativa (CMYK) e perceptual (HSV/HSB).
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-black/30 rounded-lg p-4 border border-white/10">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                      RGB (aditivo)
                    </h4>
                    <p className="text-sm text-white/60">
                      Combina luz vermelha, verde e azul.
                    </p>
                  </div>

                  <div className="bg-black/30 rounded-lg p-4 border border-white/10">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      CMYK (subtrativo)
                    </h4>
                    <p className="text-sm text-white/60">
                      Define tintas que subtraem luz do branco.
                    </p>
                  </div>

                  <div className="bg-black/30 rounded-lg p-4 border border-white/10">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                      HSV (perceptual)
                    </h4>
                    <p className="text-sm text-white/60">
                      Separa matiz, saturação e valor (brilho).
                    </p>
                  </div>

                  <div className="bg-black/30 rounded-lg p-4 border border-white/10">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                      Gestão de Cor
                    </h4>
                    <p className="text-sm text-white/60">
                      Perfis ICC e calibração de dispositivos.
                    </p>
                  </div>
                </div>

                <div className="bg-black/20 rounded-lg p-6 border border-white/10">
                  <h3 className="text-xl font-semibold text-white mb-3">
                    Conversões
                  </h3>
                  <p className="leading-relaxed mb-4">
                    Exemplo de combinação aditiva em RGB:
                  </p>
                  <div className="bg-black/30 rounded-lg p-4 font-mono text-sm border border-white/10">
                    Cor = R × (255,0,0) + G × (0,255,0) + B × (0,0,255)
                    <br />
                    <span className="text-white/60">R,G,B ∈ [0,255]</span>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-black/20 rounded-lg p-4 border border-white/10">
                    <h4 className="text-white font-medium mb-2">Perfis</h4>
                    <p className="text-sm text-white/60">
                      sRGB, Adobe RGB, DCI-P3
                    </p>
                  </div>
                  <div className="bg-black/20 rounded-lg p-4 border border-white/10">
                    <h4 className="text-white font-medium mb-2">Uso</h4>
                    <p className="text-sm text-white/60">
                      Monitores, impressão, cinema
                    </p>
                  </div>
                  <div className="bg-black/20 rounded-lg p-4 border border-white/10">
                    <h4 className="text-white font-medium mb-2">Ferramentas</h4>
                    <p className="text-sm text-white/60">
                      Color pickers e calibradores
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Vídeo Educativos */}
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
                        Color Models Explained
                      </p>
                      <a
                        href="https://www.youtube.com/watch?v=YqVvQf3R6bw"
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
                      Visão geral de RGB, CMYK e HSV
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
                    Percepção
                  </h3>
                  <p className="text-white/80 text-sm leading-relaxed mb-3">
                    O olho distingue ~10 milhões de cores.
                  </p>
                </div>

                <div className="bg-black/20 rounded-lg p-6 border border-white/10">
                  <h3 className="text-lg font-semibold text-white mb-3">
                    Padrões
                  </h3>
                  <p className="text-white/80 text-sm leading-relaxed mb-3">
                    sRGB (web), DCI-P3 (cinema), Adobe RGB (foto).
                  </p>
                </div>

                <div className="bg-black/20 rounded-lg p-6 border border-white/10">
                  <h3 className="text-lg font-semibold text-white mb-3">
                    Displays
                  </h3>
                  <p className="text-white/80 text-sm leading-relaxed mb-3">
                    Monitores wide-gamut exibem gamas maiores.
                  </p>
                </div>

                <div className="bg-black/20 rounded-lg p-6 border border-white/10">
                  <h3 className="text-lg font-semibold text-white mb-3">
                    Cinema
                  </h3>
                  <p className="text-white/80 text-sm leading-relaxed mb-3">
                    DCI-P3 cobre ~25% a mais que sRGB.
                  </p>
                </div>
              </div>
            </section>

            {/* Aplicações Modernas */}
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
                        Design Gráfico
                      </h3>
                      <p className="text-white/80 text-sm">
                        Identidade visual e consistência de cor.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex items-center justify-center"></div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">
                        Impressão
                      </h3>
                      <p className="text-white/80 text-sm">
                        Conversão de RGB→CMYK com perfis ICC.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex items-center justify-center"></div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">
                        Interfaces
                      </h3>
                      <p className="text-white/80 text-sm">
                        Acessibilidade e contraste WCAG.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className=" flex items-center justify-center"></div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">
                        Cinema
                      </h3>
                      <p className="text-white/80 text-sm">
                        Color grading e exibição em múltiplos gamas.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-black/20 rounded-lg p-6 border border-white/10">
                  <h3 className="text-lg font-semibold text-white mb-4">
                    Ferramentas
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-white/80">Photoshop</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-white/80">DaVinci Resolve</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-white/80">DisplayCAL</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-white/80">ICC Profiler</span>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/10">
                    <h4 className="text-white font-medium mb-3">
                      Perfis Comuns
                    </h4>
                    <div className="grid grid-cols-1 gap-2 text-sm">
                      <div className="text-white/60">• sRGB</div>
                      <div className="text-white/60">• Adobe RGB</div>
                      <div className="text-white/60">• DCI-P3</div>
                      <div className="text-white/60">• Rec.709</div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <ColorConverter />
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
                      href="https://en.wikipedia.org/wiki/Color_space"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block bg-black/20 rounded-lg p-4 border border-white/10 hover:border-purple-500/50 transition-colors"
                    >
                      <h4 className="text-white font-medium mb-1">
                        Wikipedia - Color space
                      </h4>
                      <p className="text-white/60 text-sm">
                        Visão geral de espaços de cor
                      </p>
                    </a>

                    <a
                      href="https://www.w3.org/TR/css-color-4/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block bg-black/20 rounded-lg p-4 border border-white/10 hover:border-purple-500/50 transition-colors"
                    >
                      <h4 className="text-white font-medium mb-1">
                        W3C - CSS Color
                      </h4>
                      <p className="text-white/60 text-sm">
                        Especificações modernas de cor no CSS
                      </p>
                    </a>

                    <a
                      href="https://cie.co.at/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block bg-black/20 rounded-lg p-4 border border-white/10 hover:border-purple-500/50 transition-colors"
                    >
                      <h4 className="text-white font-medium mb-1">CIE</h4>
                      <p className="text-white/60 text-sm">
                        Commission Internationale de l&apos;Éclairage
                      </p>
                    </a>
                  </div>
                </div>
              </div>
            </section>

            {/* Demo Link */}
          </div>
        </div>
      </main>
    </div>
  );
}

// Componente Conversor de Cores
function ColorConverter() {
  const [rgb, setRgb] = useState({ r: 255, g: 100, b: 150 });
  const [hsv, setHsv] = useState({ h: 330, s: 61, v: 100 });
  const [cmyk, setCmyk] = useState({ c: 0, m: 61, y: 41, k: 0 });
  const [activeInput, setActiveInput] = useState<"rgb" | "hsv" | "cmyk">("rgb");

  // Converter RGB para HSV
  const rgbToHsv = (r: number, g: number, b: number) => {
    r /= 255;
    g /= 255;
    b /= 255;

    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    const diff = max - min;

    let h = 0;
    const s = max === 0 ? 0 : diff / max;
    const v = max;

    if (diff !== 0) {
      switch (max) {
        case r:
          h = ((g - b) / diff) % 6;
          break;
        case g:
          h = (b - r) / diff + 2;
          break;
        case b:
          h = (r - g) / diff + 4;
          break;
      }
      h *= 60;
      if (h < 0) h += 360;
    }

    return {
      h: Math.round(h),
      s: Math.round(s * 100),
      v: Math.round(v * 100),
    };
  };

  // Converter RGB para CMYK
  const rgbToCmyk = (r: number, g: number, b: number) => {
    r /= 255;
    g /= 255;
    b /= 255;

    const k = 1 - Math.max(r, g, b);
    const c = (1 - r - k) / (1 - k);
    const m = (1 - g - k) / (1 - k);
    const y = (1 - b - k) / (1 - k);

    return {
      c: Math.round(c * 100) || 0,
      m: Math.round(m * 100) || 0,
      y: Math.round(y * 100) || 0,
      k: Math.round(k * 100) || 0,
    };
  };

  // Converter HSV para RGB
  const hsvToRgb = (h: number, s: number, v: number) => {
    s /= 100;
    v /= 100;

    const c = v * s;
    const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
    const m = v - c;

    let r = 0,
      g = 0,
      b = 0;

    if (h >= 0 && h < 60) {
      r = c;
      g = x;
      b = 0;
    } else if (h >= 60 && h < 120) {
      r = x;
      g = c;
      b = 0;
    } else if (h >= 120 && h < 180) {
      r = 0;
      g = c;
      b = x;
    } else if (h >= 180 && h < 240) {
      r = 0;
      g = x;
      b = c;
    } else if (h >= 240 && h < 300) {
      r = x;
      g = 0;
      b = c;
    } else if (h >= 300 && h < 360) {
      r = c;
      g = 0;
      b = x;
    }

    return {
      r: Math.round((r + m) * 255),
      g: Math.round((g + m) * 255),
      b: Math.round((b + m) * 255),
    };
  };

  // Converter CMYK para RGB
  const cmykToRgb = (c: number, m: number, y: number, k: number) => {
    c /= 100;
    m /= 100;
    y /= 100;
    k /= 100;

    const r = 255 * (1 - c) * (1 - k);
    const g = 255 * (1 - m) * (1 - k);
    const b = 255 * (1 - y) * (1 - k);

    return {
      r: Math.round(r),
      g: Math.round(g),
      b: Math.round(b),
    };
  };

  // Atualizar quando RGB mudar
  useEffect(() => {
    if (activeInput === "rgb") {
      const newHsv = rgbToHsv(rgb.r, rgb.g, rgb.b);
      const newCmyk = rgbToCmyk(rgb.r, rgb.g, rgb.b);
      setHsv(newHsv);
      setCmyk(newCmyk);
    }
  }, [rgb, activeInput]);

  // Atualizar quando HSV mudar
  useEffect(() => {
    if (activeInput === "hsv") {
      const newRgb = hsvToRgb(hsv.h, hsv.s, hsv.v);
      const newCmyk = rgbToCmyk(newRgb.r, newRgb.g, newRgb.b);
      setRgb(newRgb);
      setCmyk(newCmyk);
    }
  }, [hsv, activeInput]);

  // Atualizar quando CMYK mudar
  useEffect(() => {
    if (activeInput === "cmyk") {
      const newRgb = cmykToRgb(cmyk.c, cmyk.m, cmyk.y, cmyk.k);
      const newHsv = rgbToHsv(newRgb.r, newRgb.g, newRgb.b);
      setRgb(newRgb);
      setHsv(newHsv);
    }
  }, [cmyk, activeInput]);

  const rgbColor = `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`;

  return (
    <div className="space-y-6">
      {/* Preview da Cor */}
      <div className="flex items-center gap-4">
        <div
          className="w-16 h-16 rounded-lg border-2 border-white/20 shadow-lg"
          style={{ backgroundColor: rgbColor }}
        />
        <div>
          <h3 className="text-white font-semibold mb-1">Cor Selecionada</h3>
          <p className="text-white/60 text-sm">{rgbColor}</p>
        </div>
      </div>

      {/* Controles RGB */}
      <div className="bg-black/20 rounded-lg p-6 border border-white/10">
        <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
          RGB (Red, Green, Blue)
        </h3>
        <div className="grid md:grid-cols-3 gap-4">
          <div>
            <label className="text-white/80 text-sm mb-2 block">
              Vermelho (R)
            </label>
            <input
              type="range"
              min="0"
              max="255"
              value={rgb.r}
              onChange={(e) => {
                setActiveInput("rgb");
                setRgb((prev) => ({ ...prev, r: parseInt(e.target.value) }));
              }}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
            />
            <input
              type="number"
              min="0"
              max="255"
              value={rgb.r}
              onChange={(e) => {
                setActiveInput("rgb");
                setRgb((prev) => ({
                  ...prev,
                  r: parseInt(e.target.value) || 0,
                }));
              }}
              className="w-full mt-2 px-3 py-2 bg-black/30 border border-white/20 rounded-lg text-white text-center"
            />
          </div>
          <div>
            <label className="text-white/80 text-sm mb-2 block">
              Verde (G)
            </label>
            <input
              type="range"
              min="0"
              max="255"
              value={rgb.g}
              onChange={(e) => {
                setActiveInput("rgb");
                setRgb((prev) => ({ ...prev, g: parseInt(e.target.value) }));
              }}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
            />
            <input
              type="number"
              min="0"
              max="255"
              value={rgb.g}
              onChange={(e) => {
                setActiveInput("rgb");
                setRgb((prev) => ({
                  ...prev,
                  g: parseInt(e.target.value) || 0,
                }));
              }}
              className="w-full mt-2 px-3 py-2 bg-black/30 border border-white/20 rounded-lg text-white text-center"
            />
          </div>
          <div>
            <label className="text-white/80 text-sm mb-2 block">Azul (B)</label>
            <input
              type="range"
              min="0"
              max="255"
              value={rgb.b}
              onChange={(e) => {
                setActiveInput("rgb");
                setRgb((prev) => ({ ...prev, b: parseInt(e.target.value) }));
              }}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
            />
            <input
              type="number"
              min="0"
              max="255"
              value={rgb.b}
              onChange={(e) => {
                setActiveInput("rgb");
                setRgb((prev) => ({
                  ...prev,
                  b: parseInt(e.target.value) || 0,
                }));
              }}
              className="w-full mt-2 px-3 py-2 bg-black/30 border border-white/20 rounded-lg text-white text-center"
            />
          </div>
        </div>
      </div>

      {/* Controles HSV */}
      <div className="bg-black/20 rounded-lg p-6 border border-white/10">
        <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
          HSV (Hue, Saturation, Value)
        </h3>
        <div className="grid md:grid-cols-3 gap-4">
          <div>
            <label className="text-white/80 text-sm mb-2 block">
              Matiz (H)
            </label>
            <input
              type="range"
              min="0"
              max="360"
              value={hsv.h}
              onChange={(e) => {
                setActiveInput("hsv");
                setHsv((prev) => ({ ...prev, h: parseInt(e.target.value) }));
              }}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
            />
            <input
              type="number"
              min="0"
              max="360"
              value={hsv.h}
              onChange={(e) => {
                setActiveInput("hsv");
                setHsv((prev) => ({
                  ...prev,
                  h: parseInt(e.target.value) || 0,
                }));
              }}
              className="w-full mt-2 px-3 py-2 bg-black/30 border border-white/20 rounded-lg text-white text-center"
            />
          </div>
          <div>
            <label className="text-white/80 text-sm mb-2 block">
              Saturação (S)
            </label>
            <input
              type="range"
              min="0"
              max="100"
              value={hsv.s}
              onChange={(e) => {
                setActiveInput("hsv");
                setHsv((prev) => ({ ...prev, s: parseInt(e.target.value) }));
              }}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
            />
            <input
              type="number"
              min="0"
              max="100"
              value={hsv.s}
              onChange={(e) => {
                setActiveInput("hsv");
                setHsv((prev) => ({
                  ...prev,
                  s: parseInt(e.target.value) || 0,
                }));
              }}
              className="w-full mt-2 px-3 py-2 bg-black/30 border border-white/20 rounded-lg text-white text-center"
            />
          </div>
          <div>
            <label className="text-white/80 text-sm mb-2 block">
              Valor (V)
            </label>
            <input
              type="range"
              min="0"
              max="100"
              value={hsv.v}
              onChange={(e) => {
                setActiveInput("hsv");
                setHsv((prev) => ({ ...prev, v: parseInt(e.target.value) }));
              }}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
            />
            <input
              type="number"
              min="0"
              max="100"
              value={hsv.v}
              onChange={(e) => {
                setActiveInput("hsv");
                setHsv((prev) => ({
                  ...prev,
                  v: parseInt(e.target.value) || 0,
                }));
              }}
              className="w-full mt-2 px-3 py-2 bg-black/30 border border-white/20 rounded-lg text-white text-center"
            />
          </div>
        </div>
      </div>

      {/* Controles CMYK */}
      <div className="bg-black/20 rounded-lg p-6 border border-white/10">
        <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
          CMYK (Cyan, Magenta, Yellow, Key)
        </h3>
        <div className="grid md:grid-cols-4 gap-4">
          <div>
            <label className="text-white/80 text-sm mb-2 block">
              Ciano (C)
            </label>
            <input
              type="range"
              min="0"
              max="100"
              value={cmyk.c}
              onChange={(e) => {
                setActiveInput("cmyk");
                setCmyk((prev) => ({ ...prev, c: parseInt(e.target.value) }));
              }}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
            />
            <input
              type="number"
              min="0"
              max="100"
              value={cmyk.c}
              onChange={(e) => {
                setActiveInput("cmyk");
                setCmyk((prev) => ({
                  ...prev,
                  c: parseInt(e.target.value) || 0,
                }));
              }}
              className="w-full mt-2 px-3 py-2 bg-black/30 border border-white/20 rounded-lg text-white text-center"
            />
          </div>
          <div>
            <label className="text-white/80 text-sm mb-2 block">
              Magenta (M)
            </label>
            <input
              type="range"
              min="0"
              max="100"
              value={cmyk.m}
              onChange={(e) => {
                setActiveInput("cmyk");
                setCmyk((prev) => ({ ...prev, m: parseInt(e.target.value) }));
              }}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
            />
            <input
              type="number"
              min="0"
              max="100"
              value={cmyk.m}
              onChange={(e) => {
                setActiveInput("cmyk");
                setCmyk((prev) => ({
                  ...prev,
                  m: parseInt(e.target.value) || 0,
                }));
              }}
              className="w-full mt-2 px-3 py-2 bg-black/30 border border-white/20 rounded-lg text-white text-center"
            />
          </div>
          <div>
            <label className="text-white/80 text-sm mb-2 block">
              Amarelo (Y)
            </label>
            <input
              type="range"
              min="0"
              max="100"
              value={cmyk.y}
              onChange={(e) => {
                setActiveInput("cmyk");
                setCmyk((prev) => ({ ...prev, y: parseInt(e.target.value) }));
              }}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
            />
            <input
              type="number"
              min="0"
              max="100"
              value={cmyk.y}
              onChange={(e) => {
                setActiveInput("cmyk");
                setCmyk((prev) => ({
                  ...prev,
                  y: parseInt(e.target.value) || 0,
                }));
              }}
              className="w-full mt-2 px-3 py-2 bg-black/30 border border-white/20 rounded-lg text-white text-center"
            />
          </div>
          <div>
            <label className="text-white/80 text-sm mb-2 block">
              Preto (K)
            </label>
            <input
              type="range"
              min="0"
              max="100"
              value={cmyk.k}
              onChange={(e) => {
                setActiveInput("cmyk");
                setCmyk((prev) => ({ ...prev, k: parseInt(e.target.value) }));
              }}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
            />
            <input
              type="number"
              min="0"
              max="100"
              value={cmyk.k}
              onChange={(e) => {
                setActiveInput("cmyk");
                setCmyk((prev) => ({
                  ...prev,
                  k: parseInt(e.target.value) || 0,
                }));
              }}
              className="w-full mt-2 px-3 py-2 bg-black/30 border border-white/20 rounded-lg text-white text-center"
            />
          </div>
        </div>
      </div>

      {/* Estilos CSS para os sliders */}
      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #ffffff;
          cursor: pointer;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
        }

        .slider::-moz-range-thumb {
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #ffffff;
          cursor: pointer;
          border: none;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
        }
      `}</style>
    </div>
  );
}
