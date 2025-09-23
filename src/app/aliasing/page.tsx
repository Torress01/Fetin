"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

export default function AliasingPage() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [samplingFrequency, setSamplingFrequency] = useState(5);

  const sineFrequency = 3; // Frequência maior, ex: 6 Hz
  const numPoints = 50; // Fixo para cobrir toda a onda
  const totalTime = 2; // 2 segundos para uma ou duas ondas

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Resize handler
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    let animationId: number;
    const amplitude = canvas.height * 0.3;
    const centerY = canvas.height / 2;

    const animate = () => {
      // Limpa fundo
      ctx.fillStyle = "#1a1a1a";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Grade
      drawGrid(ctx, canvas.width, canvas.height, centerY);

      // Senoide contínua
      drawContinuousSine(
        ctx,
        canvas.width,
        amplitude,
        centerY,
        sineFrequency,
        totalTime
      );

      // Amostragem
      drawSampledPoints(
        ctx,
        canvas.width,
        amplitude,
        centerY,
        sineFrequency,
        samplingFrequency,
        totalTime
      );

      // Legenda
      drawLegend(
        ctx,
        canvas.width,
        canvas.height,
        sineFrequency,
        samplingFrequency
      );

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, [samplingFrequency]);

  const drawGrid = (
    ctx: CanvasRenderingContext2D,
    width: number,
    height: number,
    centerY: number
  ) => {
    ctx.strokeStyle = "#3c3c3c";
    ctx.lineWidth = 1;

    for (let y = 0; y <= height; y += 50) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
      ctx.stroke();
    }

    for (let x = 0; x <= width; x += 50) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, height);
      ctx.stroke();
    }

    ctx.strokeStyle = "#646464";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(0, centerY);
    ctx.lineTo(width, centerY);
    ctx.stroke();
  };

  const drawContinuousSine = (
    ctx: CanvasRenderingContext2D,
    width: number,
    amplitude: number,
    centerY: number,
    frequency: number,
    totalTime: number
  ) => {
    ctx.strokeStyle = "#6496ff";
    ctx.lineWidth = 2;
    ctx.beginPath();

    for (let x = 0; x <= width; x += 2) {
      const t = (x / width) * totalTime;
      const y = centerY + amplitude * Math.sin(2 * Math.PI * frequency * t);
      x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
    }

    ctx.stroke();
  };

  const drawSampledPoints = (
    ctx: CanvasRenderingContext2D,
    width: number,
    amplitude: number,
    centerY: number,
    sineFreq: number,
    samplingFreq: number,
    totalTime: number
  ) => {
    const numPoints = Math.ceil(samplingFreq * totalTime);
    const dt = totalTime / (numPoints - 1);
    const sampledPoints = [];

    for (let i = 0; i < numPoints; i++) {
      const t = i * dt;
      const x = (t / totalTime) * width;
      const y = centerY + amplitude * Math.sin(2 * Math.PI * sineFreq * t);
      sampledPoints.push({ x, y });
    }

    // Conecta pontos
    ctx.strokeStyle = "#ff6b35";
    ctx.lineWidth = 2;
    ctx.beginPath();
    sampledPoints.forEach((p, i) =>
      i === 0 ? ctx.moveTo(p.x, p.y) : ctx.lineTo(p.x, p.y)
    );
    ctx.stroke();

    // Pontos
    ctx.fillStyle = "#ff6b35";
    sampledPoints.forEach((p) => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, 4, 0, 2 * Math.PI);
      ctx.fill();
    });
  };

  const drawLegend = (
    ctx: CanvasRenderingContext2D,
    width: number,
    height: number,
    sineFreq: number,
    samplingFreq: number
  ) => {
    const statusY = height - 120;
    const statusX = width - 300;

    ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
    ctx.font = "14px Segoe UI";
    ctx.textAlign = "left";
    ctx.fillText(`Frequência do Sinal: ${sineFreq} Hz`, statusX, statusY);
    ctx.fillText(
      `Frequência de Amostragem: ${samplingFreq} Hz`,
      statusX,
      statusY + 20
    );
    ctx.fillText(
      `Frequência de Nyquist: ${sineFreq * 2} Hz`,
      statusX,
      statusY + 40
    );

    if (samplingFreq < sineFreq * 2) {
      ctx.fillStyle = "#ff6464";
      ctx.font = "bold 16px Segoe UI";
      ctx.fillText("⚠ ALIASING DETECTADO!", statusX, statusY + 70);
    } else {
      ctx.fillStyle = "#64ff64";
      ctx.font = "bold 16px Segoe UI";
      ctx.fillText("✓ Amostragem adequada", statusX, statusY + 70);
    }
  };

  return (
    <div className="relative w-full h-screen bg-[#1a1a1a] overflow-hidden">
      <Link
        href="/"
        className="fixed top-5 left-5 z-50 text-white px-6 py-3 rounded-full font-semibold hover:-translate-y-0.5 transition"
      >
        ← Menu Principal
      </Link>

      {/* Controles */}
      <div className="fixed top-5 right-5 z-50 bg-gray-800/95 text-white p-5 rounded-2xl backdrop-blur-md border border-white/10 min-w-[280px]">
        <label className="block mb-2 text-sm font-medium text-gray-200">
          Frequência de Amostragem
          <span className="ml-2 px-2 py-1 bg-orange-500/10 text-orange-500 rounded text-xs font-semibold">
            {samplingFrequency} Hz
          </span>
        </label>
        <input
          type="range"
          min="1"
          max={sineFrequency * 40} // 3× frequência do sinal para mostrar aliasing claramente
          step="1"
          value={samplingFrequency}
          onChange={(e) => setSamplingFrequency(Number(e.target.value))}
          className="w-full slider"
        />
      </div>

      {/* Painel info */}
      <div className="fixed bottom-5 left-5 z-50 bg-gray-800/95 text-white p-4 rounded-xl backdrop-blur-md border border-white/10 max-w-[300px] text-sm leading-relaxed">
        <h3 className="text-orange-500 font-semibold mb-2">
          Aliasing em Sinais
        </h3>
        <p className="mb-2">
          A senoide azul tem frequência de <strong>{sineFrequency} Hz</strong>.
          Os pontos laranja mostram a amostragem do sinal.
        </p>
        <p>
          Quando a frequência de amostragem é menor que 2× a frequência do sinal
          ({sineFrequency * 2} Hz), ocorre <strong>aliasing</strong>.
        </p>
        <Link href="/infos/audio">
          <strong>Clique para saber mais →</strong>
        </Link>
      </div>

      <canvas ref={canvasRef} className="w-full h-full" />

      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: #ff6b35;
          cursor: pointer;
        }
        .slider::-moz-range-thumb {
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: #ff6b35;
          border: none;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
}
