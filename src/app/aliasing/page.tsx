"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

export default function AliasingPage() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [samplingFrequency, setSamplingFrequency] = useState(5);
  const [numPoints, setNumPoints] = useState(20);

  const sineFrequency = 3; // 3 Hz

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Animation variables
    let time = 0;
    const amplitude = canvas.height * 0.2;
    const centerY = canvas.height / 2;

    // Animation loop
    const animate = () => {
      // Clear canvas
      ctx.fillStyle = "#1a1a1a";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw grid
      drawGrid(ctx, canvas.width, canvas.height, centerY);

      // Draw continuous sine wave
      drawContinuousSine(
        ctx,
        canvas.width,
        canvas.height,
        amplitude,
        centerY,
        sineFrequency
      );

      // Draw sampled points
      drawSampledPoints(
        ctx,
        canvas.width,
        canvas.height,
        amplitude,
        centerY,
        sineFrequency,
        samplingFrequency,
        numPoints
      );

      // Draw legend
      drawLegend(
        ctx,
        canvas.width,
        canvas.height,
        sineFrequency,
        samplingFrequency
      );

      time += 0.016; // ~60fps
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [samplingFrequency, numPoints]);

  const drawGrid = (
    ctx: CanvasRenderingContext2D,
    width: number,
    height: number,
    centerY: number
  ) => {
    ctx.strokeStyle = "#3c3c3c";
    ctx.lineWidth = 1;

    // Horizontal lines
    for (let y = 0; y <= height; y += 50) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
      ctx.stroke();
    }

    // Vertical lines
    for (let x = 0; x <= width; x += 50) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, height);
      ctx.stroke();
    }

    // Center line
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
    height: number,
    amplitude: number,
    centerY: number,
    frequency: number
  ) => {
    ctx.strokeStyle = "#6496ff";
    ctx.lineWidth = 3;
    ctx.beginPath();

    for (let x = 0; x <= width; x += 2) {
      const t = (x / width) * 4; // 4 cycles across screen
      const y = centerY + amplitude * Math.sin(2 * Math.PI * frequency * t);

      if (x === 0) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }
    }

    ctx.stroke();
  };

  const drawSampledPoints = (
    ctx: CanvasRenderingContext2D,
    width: number,
    height: number,
    amplitude: number,
    centerY: number,
    sineFreq: number,
    samplingFreq: number,
    points: number
  ) => {
    const totalTime = 4; // 4 seconds worth of signal
    const sampledPoints = [];

    // Calculate sampled points
    for (let i = 0; i < points; i++) {
      const t = (i / (points - 1)) * totalTime;
      const x = (t / totalTime) * width;
      const y = centerY + amplitude * Math.sin(2 * Math.PI * sineFreq * t);
      sampledPoints.push({ x, y, t });
    }

    // Draw connecting lines
    ctx.strokeStyle = "#ff6b35";
    ctx.lineWidth = 2;
    ctx.beginPath();

    for (let i = 0; i < sampledPoints.length; i++) {
      const point = sampledPoints[i];
      if (i === 0) {
        ctx.moveTo(point.x, point.y);
      } else {
        ctx.lineTo(point.x, point.y);
      }
    }

    ctx.stroke();

    // Draw points
    ctx.fillStyle = "#ff6b35";
    for (const point of sampledPoints) {
      ctx.beginPath();
      ctx.arc(point.x, point.y, 4, 0, 2 * Math.PI);
      ctx.fill();
    }

    // Draw sampling visualization
    drawSamplingVisualization(ctx, sampledPoints);
  };

  const drawSamplingVisualization = (
    ctx: CanvasRenderingContext2D,
    points: Array<{ x: number; y: number; t: number }>
  ) => {
    if (points.length > 2) {
      ctx.strokeStyle = "rgba(255, 200, 50, 0.6)";
      ctx.lineWidth = 2;
      ctx.beginPath();

      for (let i = 0; i < points.length - 1; i++) {
        const p1 = points[i];
        const p2 = points[i + 1];

        // Simple linear interpolation
        for (let t = 0; t <= 1; t += 0.1) {
          const x = p1.x + (p2.x - p1.x) * t;
          const y = p1.y + (p2.y - p1.y) * t;

          if (i === 0 && t === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
      }

      ctx.stroke();
    }
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

    // Aliasing warning
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
      {/* Back to main button */}
      <Link
        href="/"
        className="fixed top-5 left-5 z-50 bg-white/90 text-gray-800 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 hover:bg-white hover:-translate-x-1 hover:shadow-lg backdrop-blur-md border border-white/30"
      >
        ← Menu Principal
      </Link>

      {/* Navigation buttons */}
      <div className="fixed top-5 left-1/2 transform -translate-x-1/2 z-50 flex gap-2">
        <Link
          href="/canvas"
          className="bg-purple-500/90 text-white px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 hover:bg-purple-500 hover:-translate-y-1 hover:shadow-lg backdrop-blur-md border border-purple-300/30"
        >
          🎮 Canvas
        </Link>
        <Link
          href="/image-fft"
          className="bg-blue-500/90 text-white px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 hover:bg-blue-500 hover:-translate-y-1 hover:shadow-lg backdrop-blur-md border border-blue-300/30"
        >
          🖼️ FFT
        </Link>
      </div>

      {/* Controls */}
      <div className="fixed top-5 right-5 z-50 bg-gray-800/95 text-white p-5 rounded-2xl backdrop-blur-md border border-white/10 min-w-[280px]">
        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-200">
            Frequência de Amostragem
            <span className="inline-block bg-orange-500/10 text-orange-500 px-2 py-1 rounded text-xs font-semibold ml-2">
              {samplingFrequency} Hz
            </span>
          </label>
          <input
            type="range"
            min="1"
            max="20"
            value={samplingFrequency}
            step="0.5"
            onChange={(e) => setSamplingFrequency(parseFloat(e.target.value))}
            className="w-full h-1.5 bg-gray-600 rounded-full appearance-none cursor-pointer slider"
          />
        </div>

        <div className="mb-0">
          <label className="block mb-2 text-sm font-medium text-gray-200">
            Número de Pontos
            <span className="inline-block bg-orange-500/10 text-orange-500 px-2 py-1 rounded text-xs font-semibold ml-2">
              {numPoints}
            </span>
          </label>
          <input
            type="range"
            min="5"
            max="50"
            value={numPoints}
            step="1"
            onChange={(e) => setNumPoints(parseInt(e.target.value))}
            className="w-full h-1.5 bg-gray-600 rounded-full appearance-none cursor-pointer slider"
          />
        </div>
      </div>

      {/* Info panel */}
      <div className="fixed bottom-5 left-5 z-50 bg-gray-800/95 text-white p-4 rounded-xl backdrop-blur-md border border-white/10 max-w-[300px] text-sm leading-relaxed">
        <h3 className="text-orange-500 font-semibold mb-2">
          Aliasing em Sinais
        </h3>
        <p className="mb-2">
          A senoide azul tem frequência de <strong>3 Hz</strong>. Os pontos
          laranja mostram a amostragem do sinal.
        </p>
        <p>
          Quando a frequência de amostragem é menor que 2× a frequência do sinal
          (6 Hz), ocorre <strong>aliasing</strong>.
        </p>
      </div>

      {/* Canvas */}
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{ display: "block" }}
      />

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
