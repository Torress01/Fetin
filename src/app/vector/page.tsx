"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

export default function VectorPage() {
  const vectorImageRef = useRef<SVGSVGElement>(null);
  const rasterCanvasRef = useRef<HTMLCanvasElement>(null);
  const vectorZoomRef = useRef<HTMLInputElement>(null);
  const rasterZoomRef = useRef<HTMLInputElement>(null);
  const vectorZoomValueRef = useRef<HTMLSpanElement>(null);
  const rasterZoomValueRef = useRef<HTMLSpanElement>(null);

  const [originalImageData, setOriginalImageData] = useState<ImageData | null>(
    null
  );

  useEffect(() => {
    drawRasterImage();
  }, []);

  const drawRasterImage = () => {
    const canvas = rasterCanvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Criar gradiente
    const gradient = ctx.createLinearGradient(0, 0, 150, 150);
    gradient.addColorStop(0, "#4CAF50");
    gradient.addColorStop(1, "#2E7D32");

    // Desenhar círculo
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(75, 75, 60, 0, 2 * Math.PI);
    ctx.fill();

    // Borda do círculo
    ctx.strokeStyle = "#1B5E20";
    ctx.lineWidth = 3;
    ctx.stroke();

    // Desenhar estrela
    ctx.fillStyle = "white";
    ctx.beginPath();
    ctx.moveTo(75, 45);
    ctx.lineTo(85, 65);
    ctx.lineTo(105, 65);
    ctx.lineTo(90, 80);
    ctx.lineTo(95, 100);
    ctx.lineTo(75, 90);
    ctx.lineTo(55, 100);
    ctx.lineTo(60, 80);
    ctx.lineTo(45, 65);
    ctx.lineTo(65, 65);
    ctx.closePath();
    ctx.fill();

    // Salvar dados originais
    if (!originalImageData) {
      setOriginalImageData(ctx.getImageData(0, 0, 150, 150));
    }
  };

  const resetVector = () => {
    if (
      vectorZoomRef.current &&
      vectorImageRef.current &&
      vectorZoomValueRef.current
    ) {
      vectorZoomRef.current.value = "2";
      vectorImageRef.current.style.transform = "scale(2)";
      vectorZoomValueRef.current.textContent = "2.0x";
    }
  };

  const resetRaster = () => {
    if (
      rasterZoomRef.current &&
      rasterCanvasRef.current &&
      rasterZoomValueRef.current
    ) {
      rasterZoomRef.current.value = "2";
      rasterCanvasRef.current.style.transform = "scale(2)";
      rasterZoomValueRef.current.textContent = "2.0x";
    }
  };

  useEffect(() => {
    const vectorZoom = vectorZoomRef.current;
    const vectorImage = vectorImageRef.current;
    const vectorZoomValue = vectorZoomValueRef.current;

    if (vectorZoom && vectorImage && vectorZoomValue) {
      const handleVectorZoom = () => {
        const scale = vectorZoom.value;
        vectorImage.style.transform = `scale(${scale})`;
        vectorZoomValue.textContent = scale + "x";
      };

      vectorZoom.addEventListener("input", handleVectorZoom);
      return () => vectorZoom.removeEventListener("input", handleVectorZoom);
    }
  }, []);

  useEffect(() => {
    const rasterZoom = rasterZoomRef.current;
    const rasterCanvas = rasterCanvasRef.current;
    const rasterZoomValue = rasterZoomValueRef.current;

    if (rasterZoom && rasterCanvas && rasterZoomValue) {
      const handleRasterZoom = () => {
        const scale = rasterZoom.value;
        rasterCanvas.style.transform = `scale(${scale})`;
        rasterZoomValue.textContent = scale + "x";
      };

      rasterZoom.addEventListener("input", handleRasterZoom);
      return () => rasterZoom.removeEventListener("input", handleRasterZoom);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-gray-700 text-white p-8">
      {/* Back button */}
      <Link
        href="/"
        className="fixed top-5 left-5 z-50 tex-white px-6 py-3 rounded-full text-base font-semibold transition-all duration-300 "
      >
        ← Voltar
      </Link>

      <div className="max-w-7xl mx-auto mt-20">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-white mb-4">
            Vetorial x Matricial
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Compare a qualidade de imagens vetoriais e matriciais em diferentes
            níveis de zoom
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Vector Section */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">
              Imagem Vetorial
            </h2>
            <div className="bg-white/5 rounded-xl p-6 mb-6">
              <div className="flex justify-center mb-4">
                <div className="w-[300px] h-[300px] flex items-center justify-center overflow-hidden border-2 border-dashed border-white/30 rounded-lg">
                  <svg
                    ref={vectorImageRef}
                    width="150"
                    height="150"
                    className="transition-transform duration-300 ease-in-out"
                    style={{ transformOrigin: "center center" }}
                  >
                    <defs>
                      <linearGradient
                        id="grad1"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="100%"
                      >
                        <stop
                          offset="0%"
                          style={{ stopColor: "#4CAF50", stopOpacity: 1 }}
                        />
                        <stop
                          offset="100%"
                          style={{ stopColor: "#2E7D32", stopOpacity: 1 }}
                        />
                      </linearGradient>
                    </defs>
                    <circle
                      cx="75"
                      cy="75"
                      r="60"
                      fill="url(#grad1)"
                      stroke="#1B5E20"
                      strokeWidth="3"
                    />
                    <polygon
                      points="75,45 85,65 105,65 90,80 95,100 75,90 55,100 60,80 45,65 65,65"
                      fill="white"
                    />
                  </svg>
                </div>
              </div>

              <div className="text-center">
                <label className="block text-white font-semibold mb-2">
                  Zoom:{" "}
                  <span
                    ref={vectorZoomValueRef}
                    className="text-green-400 font-bold"
                  >
                    2.0x
                  </span>
                </label>
                <input
                  ref={vectorZoomRef}
                  type="range"
                  min="2"
                  max="4"
                  step="0.1"
                  defaultValue="2"
                  className="w-full h-2 bg-gray-600 rounded-lg appearance-none cursor-pointer slider mb-4"
                />
                <button
                  onClick={resetVector}
                  className="bg-gradient-to-r from-red-500 to-red-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-red-500/40"
                >
                  Reset
                </button>
              </div>
            </div>

            <div className="bg-green-500/20 rounded-lg p-4 border border-green-500/30">
              <h3 className="text-green-400 font-semibold mb-2">
                Vantagens Vetorial:
              </h3>
              <ul className="text-white/80 text-sm space-y-1">
                <li>• Escalável sem perda de qualidade</li>
                <li>• Arquivos menores</li>
                <li>• Ideal para logos e ícones</li>
                <li>• Editável matematicamente</li>
              </ul>
            </div>
          </div>

          {/* Raster Section */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">
              Imagem Matricial
            </h2>
            <div className="bg-white/5 rounded-xl p-6 mb-6">
              <div className="flex justify-center mb-4">
                <div className="w-[300px] h-[300px] flex items-center justify-center overflow-hidden border-2 border-dashed border-white/30 rounded-lg">
                  <canvas
                    ref={rasterCanvasRef}
                    width="150"
                    height="150"
                    className="border border-white/30 transition-transform duration-300 ease-in-out"
                    style={{ transformOrigin: "center center" }}
                  />
                </div>
              </div>

              <div className="text-center">
                <label className="block text-white font-semibold mb-2">
                  Zoom:{" "}
                  <span
                    ref={rasterZoomValueRef}
                    className="text-blue-400 font-bold"
                  >
                    2.0x
                  </span>
                </label>
                <input
                  ref={rasterZoomRef}
                  type="range"
                  min="2"
                  max="4"
                  step="0.1"
                  defaultValue="2"
                  className="w-full h-2 bg-gray-600 rounded-lg appearance-none cursor-pointer slider mb-4"
                />
                <button
                  onClick={resetRaster}
                  className="bg-gradient-to-r from-red-500 to-red-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-red-500/40"
                >
                  Reset
                </button>
              </div>
            </div>

            <div className="bg-blue-500/20 rounded-lg p-4 border border-blue-500/30">
              <h3 className="text-blue-400 font-semibold mb-2">
                Limitações Matricial:
              </h3>
              <ul className="text-white/80 text-sm space-y-1">
                <li>• Perde qualidade ao ampliar</li>
                <li>• Arquivos maiores</li>
                <li>• Ideal para fotografias</li>
                <li>• Pixelização visível</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: #ff6b35;
          cursor: pointer;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
        }

        .slider::-moz-range-thumb {
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: #ff6b35;
          cursor: pointer;
          border: none;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
        }
      `}</style>
    </div>
  );
}
