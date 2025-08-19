"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { FFTProcessor, type Complex, type FFTResult } from "@/lib/FFTProcessor";

enum DrawMode {
  ERASE = "erase",
  SMOOTH = "smooth",
  CIRCLE = "circle",
}

export default function ImageFFTPage() {
  const originalCanvasRef = useRef<HTMLCanvasElement>(null);
  const fftCanvasRef = useRef<HTMLCanvasElement>(null);
  const [drawMode, setDrawMode] = useState<DrawMode>(DrawMode.ERASE);
  const [brushSize, setBrushSize] = useState(20);
  const [imageLoaded, setImageLoaded] = useState(false);

  // FFT state
  const fftStateRef = useRef({
    originalImg: null as HTMLImageElement | null,
    imgData: null as ImageData | null,
    fftMagnitudeData: [] as number[],
    fftPhaseData: [] as number[],
    originalFFTMagnitude: [] as number[],
    originalFFTPhase: [] as number[],
    maxFFTValue: 0,
    isDrawing: false,
    drawingCircle: false,
    circleStartX: 0,
    circleStartY: 0,
    tempCircleRadius: 0,
    lastDrawX: -1,
    lastDrawY: -1,
  });

  useEffect(() => {
    const originalCanvas = originalCanvasRef.current;
    const fftCanvas = fftCanvasRef.current;

    if (!originalCanvas || !fftCanvas) return;

    const originalCtx = originalCanvas.getContext("2d");
    const fftCtx = fftCanvas.getContext("2d");

    if (!originalCtx || !fftCtx) return;

    // Setup canvas
    originalCanvas.width = 512;
    originalCanvas.height = 512;
    fftCanvas.width = 512;
    fftCanvas.height = 512;

    // Initialize with a default image or pattern
    initializeDefaultImage(originalCtx);

    // Setup FFT canvas event listeners
    setupFFTCanvas(fftCanvas, fftCtx);
  }, []);

  const initializeDefaultImage = (ctx: CanvasRenderingContext2D) => {
    // Create a simple test pattern
    const gradient = ctx.createLinearGradient(0, 0, 512, 512);
    gradient.addColorStop(0, "#ff6b6b");
    gradient.addColorStop(0.5, "#4ecdc4");
    gradient.addColorStop(1, "#45b7d1");

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 512, 512);

    // Process the default image for FFT
    processImage();
    setImageLoaded(true);
  };

  const processImage = () => {
    const originalCanvas = originalCanvasRef.current;
    const originalCtx = originalCanvas?.getContext("2d");

    if (!originalCtx) return;

    const imgData = originalCtx.getImageData(0, 0, 512, 512);
    fftStateRef.current.imgData = imgData;

    // Convert to grayscale
    const grayData: number[] = [];
    for (let i = 0; i < imgData.data.length; i += 4) {
      const r = imgData.data[i];
      const g = imgData.data[i + 1];
      const b = imgData.data[i + 2];
      const gray = 0.299 * r + 0.587 * g + 0.114 * b;
      grayData.push(gray);
    }

    // Calculate FFT
    const fftResult = FFTProcessor.compute2DFFT(grayData, 512, 512);

    fftStateRef.current.fftMagnitudeData = fftResult.magnitude;
    fftStateRef.current.fftPhaseData = fftResult.phase;
    fftStateRef.current.originalFFTMagnitude = [...fftResult.magnitude];
    fftStateRef.current.originalFFTPhase = [...fftResult.phase];

    // Find max FFT value
    fftStateRef.current.maxFFTValue = 0;
    for (let i = 0; i < fftResult.magnitude.length; i++) {
      if (fftResult.magnitude[i] > fftStateRef.current.maxFFTValue) {
        fftStateRef.current.maxFFTValue = fftResult.magnitude[i];
      }
    }

    displayFFT();
  };

  const displayFFT = (showPreview = false) => {
    const fftCanvas = fftCanvasRef.current;
    const fftCtx = fftCanvas?.getContext("2d");

    if (!fftCtx || fftStateRef.current.fftMagnitudeData.length === 0) return;

    const fftMagnitudeDisplay = [...fftStateRef.current.fftMagnitudeData];
    const maxMag = fftStateRef.current.maxFFTValue;

    const imageData = fftCtx.createImageData(512, 512);

    for (let i = 0; i < fftMagnitudeDisplay.length; i++) {
      const normalizedMag =
        Math.log(1 + fftMagnitudeDisplay[i]) / Math.log(1 + maxMag);
      const value = Math.max(0, Math.min(255, Math.round(normalizedMag * 255)));

      const idx = i * 4;
      imageData.data[idx] = value; // R
      imageData.data[idx + 1] = value; // G
      imageData.data[idx + 2] = value; // B
      imageData.data[idx + 3] = 255; // A
    }

    const shiftedImageData = fftShift(imageData, 512, 512);
    fftCtx.putImageData(shiftedImageData, 0, 0);

    if (showPreview && fftStateRef.current.drawingCircle) {
      fftCtx.beginPath();
      fftCtx.arc(
        fftStateRef.current.circleStartX,
        fftStateRef.current.circleStartY,
        fftStateRef.current.tempCircleRadius,
        0,
        Math.PI * 2
      );
      fftCtx.strokeStyle = "red";
      fftCtx.lineWidth = 2;
      fftCtx.stroke();
    }
  };

  const fftShift = (
    imageData: ImageData,
    width: number,
    height: number
  ): ImageData => {
    const fftCtx = fftCanvasRef.current?.getContext("2d");
    if (!fftCtx) return imageData;

    const shifted = fftCtx.createImageData(width, height);
    const halfW = Math.floor(width / 2);
    const halfH = Math.floor(height / 2);

    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        const srcX = (x + halfW) % width;
        const srcY = (y + halfH) % height;

        const srcIdx = (srcY * width + srcX) * 4;
        const dstIdx = (y * width + x) * 4;

        shifted.data[dstIdx] = imageData.data[srcIdx];
        shifted.data[dstIdx + 1] = imageData.data[srcIdx + 1];
        shifted.data[dstIdx + 2] = imageData.data[srcIdx + 2];
        shifted.data[dstIdx + 3] = imageData.data[srcIdx + 3];
      }
    }

    return shifted;
  };

  const reconstructImage = () => {
    const originalCanvas = originalCanvasRef.current;
    const originalCtx = originalCanvas?.getContext("2d");

    if (!originalCtx || fftStateRef.current.fftMagnitudeData.length === 0)
      return;

    const complexData: Complex[] = [];
    for (let i = 0; i < fftStateRef.current.fftMagnitudeData.length; i++) {
      const mag = fftStateRef.current.fftMagnitudeData[i];
      const phase = fftStateRef.current.fftPhaseData[i];

      const real = mag * Math.cos(phase);
      const imag = mag * Math.sin(phase);

      complexData.push({ real, imag });
    }

    const reconstructed = FFTProcessor.compute2DIFFT(complexData, 512, 512);

    let maxVal = -Infinity;
    let minVal = Infinity;

    for (let i = 0; i < reconstructed.length; i++) {
      if (reconstructed[i] > maxVal) maxVal = reconstructed[i];
      if (reconstructed[i] < minVal) minVal = reconstructed[i];
    }

    const imageData = originalCtx.createImageData(512, 512);

    for (let i = 0; i < reconstructed.length; i++) {
      const normalized = (reconstructed[i] - minVal) / (maxVal - minVal);
      const value = Math.max(0, Math.min(255, Math.round(normalized * 255)));

      const idx = i * 4;
      imageData.data[idx] = value; // R
      imageData.data[idx + 1] = value; // G
      imageData.data[idx + 2] = value; // B
      imageData.data[idx + 3] = 255; // A
    }

    originalCtx.putImageData(imageData, 0, 0);
  };

  const setupFFTCanvas = (
    canvas: HTMLCanvasElement,
    ctx: CanvasRenderingContext2D
  ) => {
    const onMouseDown = (e: MouseEvent) => {
      if (fftStateRef.current.fftMagnitudeData.length > 0) {
        const rect = canvas.getBoundingClientRect();
        const x = Math.floor(((e.clientX - rect.left) * 512) / rect.width);
        const y = Math.floor(((e.clientY - rect.top) * 512) / rect.height);

        fftStateRef.current.lastDrawX = -1;
        fftStateRef.current.lastDrawY = -1;

        if (drawMode === DrawMode.CIRCLE) {
          fftStateRef.current.drawingCircle = true;
          fftStateRef.current.circleStartX = x;
          fftStateRef.current.circleStartY = y;
          fftStateRef.current.tempCircleRadius = 0;
        } else {
          fftStateRef.current.isDrawing = true;
          drawOnFFT(e, false);
        }
      }
    };

    const onMouseMove = (e: MouseEvent) => {
      if (fftStateRef.current.fftMagnitudeData.length > 0) {
        const rect = canvas.getBoundingClientRect();
        const x = Math.floor(((e.clientX - rect.left) * 512) / rect.width);
        const y = Math.floor(((e.clientY - rect.top) * 512) / rect.height);

        if (fftStateRef.current.drawingCircle) {
          const dx = x - fftStateRef.current.circleStartX;
          const dy = y - fftStateRef.current.circleStartY;
          fftStateRef.current.tempCircleRadius = Math.sqrt(dx * dx + dy * dy);

          displayFFT(true);
        } else if (fftStateRef.current.isDrawing) {
          drawOnFFT(e, false);
        }
      }
    };

    const onMouseUp = (e: MouseEvent) => {
      if (
        fftStateRef.current.drawingCircle &&
        fftStateRef.current.fftMagnitudeData.length > 0
      ) {
        const rect = canvas.getBoundingClientRect();
        const x = Math.floor(((e.clientX - rect.left) * 512) / rect.width);
        const y = Math.floor(((e.clientY - rect.top) * 512) / rect.height);

        const dx = x - fftStateRef.current.circleStartX;
        const dy = y - fftStateRef.current.circleStartY;
        const radius = Math.sqrt(dx * dx + dy * dy);

        drawCircleOnFFT(
          fftStateRef.current.circleStartX,
          fftStateRef.current.circleStartY,
          radius
        );

        fftStateRef.current.drawingCircle = false;

        displayFFT();
        reconstructImage();
      } else if (fftStateRef.current.isDrawing) {
        displayFFT();
        reconstructImage();
      }

      fftStateRef.current.isDrawing = false;
      fftStateRef.current.drawingCircle = false;

      fftStateRef.current.lastDrawX = -1;
      fftStateRef.current.lastDrawY = -1;
    };

    const onMouseLeave = () => {
      if (fftStateRef.current.isDrawing) {
        displayFFT();
        reconstructImage();
      }

      fftStateRef.current.isDrawing = false;

      fftStateRef.current.lastDrawX = -1;
      fftStateRef.current.lastDrawY = -1;
    };

    canvas.addEventListener("mousedown", onMouseDown);
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mouseup", onMouseUp);
    canvas.addEventListener("mouseleave", onMouseLeave);
    canvas.addEventListener("contextmenu", (e) => e.preventDefault());

    return () => {
      canvas.removeEventListener("mousedown", onMouseDown);
      canvas.removeEventListener("mousemove", onMouseMove);
      canvas.removeEventListener("mouseup", onMouseUp);
      canvas.removeEventListener("mouseleave", onMouseLeave);
    };
  };

  const drawOnFFT = (event: MouseEvent, updateImage = true) => {
    if (fftStateRef.current.fftMagnitudeData.length === 0) return;

    const rect = fftCanvasRef.current!.getBoundingClientRect();
    const x = Math.floor(((event.clientX - rect.left) * 512) / rect.width);
    const y = Math.floor(((event.clientY - rect.top) * 512) / rect.height);

    if (x < 0 || x >= 512 || y < 0 || y >= 512) return;

    if (
      fftStateRef.current.lastDrawX >= 0 &&
      fftStateRef.current.lastDrawY >= 0 &&
      (fftStateRef.current.lastDrawX !== x ||
        fftStateRef.current.lastDrawY !== y)
    ) {
      const points = getLinePoints(
        fftStateRef.current.lastDrawX,
        fftStateRef.current.lastDrawY,
        x,
        y
      );

      for (const point of points) {
        applyBrushAt(point.x, point.y);
      }
    } else {
      applyBrushAt(x, y);
    }

    fftStateRef.current.lastDrawX = x;
    fftStateRef.current.lastDrawY = y;

    if (updateImage) {
      displayFFT();
      reconstructImage();
    } else {
      displayFFT();
    }
  };

  const getLinePoints = (
    x0: number,
    y0: number,
    x1: number,
    y1: number
  ): Array<{ x: number; y: number }> => {
    const points: Array<{ x: number; y: number }> = [];
    const dx = Math.abs(x1 - x0);
    const dy = Math.abs(y1 - y0);
    const sx = x0 < x1 ? 1 : -1;
    const sy = y0 < y1 ? 1 : -1;
    let err = dx - dy;

    while (true) {
      points.push({ x: x0, y: y0 });

      if (x0 === x1 && y0 === y1) break;

      const e2 = 2 * err;
      if (e2 > -dy) {
        err -= dy;
        x0 += sx;
      }
      if (e2 < dx) {
        err += dx;
        y0 += sy;
      }
    }

    return points;
  };

  const applyBrushAt = (x: number, y: number) => {
    const fftDataCopy = [...fftStateRef.current.fftMagnitudeData];

    const halfW = Math.floor(512 / 2);
    const halfH = Math.floor(512 / 2);
    const shiftedX = (x - halfW + 512) % 512;
    const shiftedY = (y - halfH + 512) % 512;

    for (let dy = -brushSize; dy <= brushSize; dy++) {
      for (let dx = -brushSize; dx <= brushSize; dx++) {
        let px = shiftedX + dx;
        let py = shiftedY + dy;

        px = (px + 512) % 512;
        py = (py + 512) % 512;

        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance <= brushSize) {
          const i = py * 512 + px;
          if (i < fftStateRef.current.fftMagnitudeData.length) {
            const strength = Math.max(0, 1 - distance / brushSize);

            switch (drawMode) {
              case DrawMode.ERASE:
                fftStateRef.current.fftMagnitudeData[i] *= 1 - strength * 0.8;
                break;
              case DrawMode.SMOOTH:
                let avg = 0;
                let count = 0;
                for (let sy = -1; sy <= 1; sy++) {
                  for (let sx = -1; sx <= 1; sx++) {
                    const nx = (px + sx + 512) % 512;
                    const ny = (py + sy + 512) % 512;
                    const ni = ny * 512 + nx;
                    if (ni < fftStateRef.current.fftMagnitudeData.length) {
                      avg += fftDataCopy[ni];
                      count++;
                    }
                  }
                }
                if (count > 0) {
                  const targetValue = avg / count;
                  fftStateRef.current.fftMagnitudeData[i] =
                    fftDataCopy[i] * (1 - strength * 0.3) +
                    targetValue * (strength * 0.3);
                }
                break;
            }
          }
        }
      }
    }
  };

  const drawCircleOnFFT = (
    centerX: number,
    centerY: number,
    radius: number
  ) => {
    if (fftStateRef.current.fftMagnitudeData.length === 0) return;

    const halfW = Math.floor(512 / 2);
    const halfH = Math.floor(512 / 2);

    const startX = Math.max(0, Math.floor(centerX - radius - 1));
    const startY = Math.max(0, Math.floor(centerY - radius - 1));
    const endX = Math.min(512 - 1, Math.ceil(centerX + radius + 1));
    const endY = Math.min(512 - 1, Math.ceil(centerY + radius + 1));

    for (let y = startY; y <= endY; y++) {
      for (let x = startX; x <= endX; x++) {
        const dx = x - centerX;
        const dy = y - centerY;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance <= radius) {
          const shiftedX = (x - halfW + 512) % 512;
          const shiftedY = (y - halfH + 512) % 512;
          const i = shiftedY * 512 + shiftedX;

          if (i >= 0 && i < fftStateRef.current.fftMagnitudeData.length) {
            fftStateRef.current.fftMagnitudeData[i] = 0;
          }
        }
      }
    }
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      alert("Por favor, selecione um arquivo de imagem válido.");
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        const originalCanvas = originalCanvasRef.current;
        if (!originalCanvas) return;

        const ctx = originalCanvas.getContext("2d");
        if (!ctx) return;

        // Clear canvas and draw new image
        ctx.clearRect(0, 0, originalCanvas.width, originalCanvas.height);
        ctx.fillStyle = "#fff";
        ctx.fillRect(0, 0, 512, 512);

        const aspectRatio = img.width / img.height;
        let drawWidth: number, drawHeight: number;

        if (aspectRatio > 1) {
          drawWidth = 512;
          drawHeight = 512 / aspectRatio;
        } else {
          drawWidth = 512 * aspectRatio;
          drawHeight = 512;
        }

        const x = (512 - drawWidth) / 2;
        const y = (512 - drawHeight) / 2;

        ctx.drawImage(img, x, y, drawWidth, drawHeight);

        processImage();
        setImageLoaded(true);
      };
      img.src = e.target?.result as string;
    };
    reader.readAsDataURL(file);
  };

  const resetFFT = () => {
    if (
      fftStateRef.current.originalFFTMagnitude.length > 0 &&
      fftStateRef.current.originalFFTPhase.length > 0
    ) {
      fftStateRef.current.fftMagnitudeData = [
        ...fftStateRef.current.originalFFTMagnitude,
      ];
      fftStateRef.current.fftPhaseData = [
        ...fftStateRef.current.originalFFTPhase,
      ];

      fftStateRef.current.maxFFTValue = 0;
      for (let i = 0; i < fftStateRef.current.fftMagnitudeData.length; i++) {
        if (
          fftStateRef.current.fftMagnitudeData[i] >
          fftStateRef.current.maxFFTValue
        ) {
          fftStateRef.current.maxFFTValue =
            fftStateRef.current.fftMagnitudeData[i];
        }
      }

      displayFFT();
      reconstructImage();
    } else {
      processImage();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-t from-gray-900 to-gray-700 p-8">
      {/* Back button */}
      <Link
        href="/"
        className="fixed top-5 left-5 z-500 text-white px-6 py-3 rounded-full text-base font-semibold transition-all duration-300 hover:-translate-y-0.5"
      >
        ← Voltar
      </Link>

      <div className="max-w-7xl mx-auto bg-white/95 rounded-xl p-10 shadow-2xl backdrop-blur-sm">
        <h1 className="text-4xl font-bold text-center text-gray-700 mb-10 mt-0">
          Editor de Imagens FFT
        </h1>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Original Image Section */}
          <div className="flex-1">
            <div className="bg-white p-5 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold text-gray-700 mb-4 text-center">
                Imagem Original
              </h3>
              <canvas
                ref={originalCanvasRef}
                className="w-full max-w-[512px] h-[512px] border-4 border-blue-100 rounded-lg mx-auto block"
                style={{ cursor: "default" }}
              />
              <div className="mt-4 text-center">
                <label className="relative inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full cursor-pointer font-semibold text-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />
                  📸 Escolha uma Imagem 📸
                </label>
              </div>
            </div>
          </div>

          {/* FFT Domain Section */}
          <div className="flex-1">
            <div className="bg-white p-5 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold text-gray-700 mb-4 text-center">
                Domínio da Frequência
              </h3>
              <canvas
                ref={fftCanvasRef}
                className="w-full max-w-[512px] h-[512px] border-4 border-blue-100 rounded-lg mx-auto block"
                style={{ cursor: "crosshair" }}
              />

              {/* Controls */}
              <div className="mt-4 bg-blue-50 p-4 rounded-lg">
                <div className="flex flex-wrap justify-center gap-4 items-center">
                  <div className="flex items-center gap-2">
                    <label className="font-semibold text-gray-700">
                      Pincel:
                    </label>
                    <select
                      value={drawMode}
                      onChange={(e) => setDrawMode(e.target.value as DrawMode)}
                      className="px-3 py-2 border-2 border-gray-200 rounded-lg bg-white text-sm"
                    >
                      <option value="erase">⚫ Preto</option>
                      <option value="smooth">⚫ Suavizar</option>
                      <option value="circle">⭕ Círculo</option>
                    </select>
                  </div>

                  <div className="flex items-center gap-2">
                    <label className="font-semibold text-gray-700">
                      Tamanho:
                    </label>
                    <input
                      type="range"
                      min="10"
                      max="100"
                      value={brushSize}
                      onChange={(e) => setBrushSize(parseInt(e.target.value))}
                      className="w-24"
                    />
                    <span className="bg-purple-500 text-white px-2 py-1 rounded font-bold text-sm min-w-[30px] text-center">
                      {brushSize}
                    </span>
                  </div>

                  <button
                    onClick={resetFFT}
                    className="bg-gradient-to-r from-green-500 to-green-600 text-white px-5 py-2 rounded-lg font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                  >
                    🔄 Limpar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
