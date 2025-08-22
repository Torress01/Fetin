"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

interface ImageInfo {
  width: number;
  height: number;
  data: ImageData | null;
}

export default function SegmentationPage() {
  const imageCanvasRef = useRef<HTMLCanvasElement>(null);
  const segmentationCanvasRef = useRef<HTMLCanvasElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const uploadAreaRef = useRef<HTMLDivElement>(null);

  const [isDrawing, setIsDrawing] = useState(false);
  const [currentColor, setCurrentColor] = useState("#ff0000");
  const [brushSize, setBrushSize] = useState(15);
  const [opacity, setOpacity] = useState(0.7);
  const [tolerance, setTolerance] = useState(30);
  const [mode, setMode] = useState<"smart" | "paint">("smart");
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [undoStack, setUndoStack] = useState<ImageData[]>([]);
  const [imageInfo, setImageInfo] = useState<ImageInfo>({
    width: 0,
    height: 0,
    data: null,
  });

  useEffect(() => {
    loadDefaultImage();
  }, []);

  const loadDefaultImage = async () => {
    try {
      const response = await fetch("images/Lenna_colored.png");
      const blob = await response.blob();
      const file = new File([blob], "Lenna_colored.png", { type: "image/png" });
      handleFile(file);
    } catch (error) {
      console.error("Erro ao carregar imagem padrão:", error);
    }
  };

  const handleFile = (file: File) => {
    if (!file.type.startsWith("image/")) {
      alert("Por favor, selecione um arquivo de imagem válido.");
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        setupCanvas(img);
        setImageLoaded(true);
      };
      img.src = e.target?.result as string;
    };
    reader.readAsDataURL(file);
  };

  const setupCanvas = (img: HTMLImageElement) => {
    const imageCanvas = imageCanvasRef.current;
    const segmentationCanvas = segmentationCanvasRef.current;

    if (!imageCanvas || !segmentationCanvas) return;

    const imageCtx = imageCanvas.getContext("2d");
    const segCtx = segmentationCanvas.getContext("2d");

    if (!imageCtx || !segCtx) return;

    // Calculate canvas size maintaining aspect ratio
    const maxWidth = 800;
    const maxHeight = 600;

    let { width, height } = img;

    if (width > maxWidth) {
      height = (height * maxWidth) / width;
      width = maxWidth;
    }

    if (height > maxHeight) {
      width = (width * maxHeight) / height;
      height = maxHeight;
    }

    // Set canvas dimensions
    imageCanvas.width = width;
    imageCanvas.height = height;
    segmentationCanvas.width = width;
    segmentationCanvas.height = height;

    // Draw image
    imageCtx.drawImage(img, 0, 0, width, height);

    // Store image data for smart segmentation
    const imageData = imageCtx.getImageData(0, 0, width, height);
    setImageInfo({ width, height, data: imageData });

    // Clear segmentation canvas
    segCtx.clearRect(0, 0, width, height);

    // Clear undo stack and save initial state
    setUndoStack([]);
    saveState();
  };

  const saveState = () => {
    const segmentationCanvas = segmentationCanvasRef.current;
    if (!segmentationCanvas) return;

    const segCtx = segmentationCanvas.getContext("2d");
    if (!segCtx) return;

    const imageData = segCtx.getImageData(
      0,
      0,
      segmentationCanvas.width,
      segmentationCanvas.height
    );
    setUndoStack((prev) => {
      const newStack = [...prev, imageData];
      // Limit undo stack size
      if (newStack.length > 20) {
        return newStack.slice(1);
      }
      return newStack;
    });
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (mode === "smart") {
      smartSegmentation(e);
    } else {
      startDrawing(e);
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (mode === "paint" && isDrawing) {
      draw(e);
    }
  };

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement>) => {
    setIsDrawing(true);
    saveState();
    draw(e);
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const segmentationCanvas = segmentationCanvasRef.current;
    if (!segmentationCanvas) return;

    const segCtx = segmentationCanvas.getContext("2d");
    if (!segCtx) return;

    const rect = segmentationCanvas.getBoundingClientRect();
    const x = (e.clientX - rect.left) * (segmentationCanvas.width / rect.width);
    const y =
      (e.clientY - rect.top) * (segmentationCanvas.height / rect.height);

    segCtx.globalCompositeOperation = "source-over";
    segCtx.fillStyle = currentColor;
    segCtx.beginPath();
    segCtx.arc(x, y, brushSize / 2, 0, Math.PI * 2);
    segCtx.fill();
  };

  const smartSegmentation = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!imageInfo.data) return;

    saveState();

    const segmentationCanvas = segmentationCanvasRef.current;
    if (!segmentationCanvas) return;

    const segCtx = segmentationCanvas.getContext("2d");
    if (!segCtx) return;

    const rect = segmentationCanvas.getBoundingClientRect();
    const x = Math.floor(
      (e.clientX - rect.left) * (segmentationCanvas.width / rect.width)
    );
    const y = Math.floor(
      (e.clientY - rect.top) * (segmentationCanvas.height / rect.height)
    );

    // Get the color at the clicked point
    const targetColor = getPixelColor(x, y);

    // Perform flood fill with tolerance
    floodFill(x, y, targetColor, currentColor);
  };

  const getPixelColor = (x: number, y: number) => {
    if (!imageInfo.data) return { r: 0, g: 0, b: 0, a: 0 };

    const index = (y * imageInfo.width + x) * 4;
    return {
      r: imageInfo.data.data[index],
      g: imageInfo.data.data[index + 1],
      b: imageInfo.data.data[index + 2],
      a: imageInfo.data.data[index + 3],
    };
  };

  const colorDistance = (
    color1: { r: number; g: number; b: number },
    color2: { r: number; g: number; b: number }
  ) => {
    const dr = color1.r - color2.r;
    const dg = color1.g - color2.g;
    const db = color1.b - color2.b;
    return Math.sqrt(dr * dr + dg * dg + db * db);
  };

  const hexToRgb = (hex: string) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
      ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16),
        }
      : null;
  };

  const floodFill = (
    startX: number,
    startY: number,
    targetColor: { r: number; g: number; b: number },
    fillColor: string
  ) => {
    const segmentationCanvas = segmentationCanvasRef.current;
    if (!segmentationCanvas || !imageInfo.data) return;

    const segCtx = segmentationCanvas.getContext("2d");
    if (!segCtx) return;

    const width = imageInfo.width;
    const height = imageInfo.height;
    const visited = new Set<string>();
    const stack = [{ x: startX, y: startY }];

    while (stack.length > 0) {
      const { x, y } = stack.pop()!;

      if (x < 0 || x >= width || y < 0 || y >= height) continue;

      const key = `${x},${y}`;
      if (visited.has(key)) continue;
      visited.add(key);

      const currentColor = getPixelColor(x, y);
      const distance = colorDistance(currentColor, targetColor);

      if (distance <= tolerance) {
        // Fill this pixel
        segCtx.fillStyle = fillColor;
        segCtx.fillRect(x, y, 1, 1);

        // Add neighboring pixels to stack
        stack.push({ x: x + 1, y: y });
        stack.push({ x: x - 1, y: y });
        stack.push({ x: x, y: y + 1 });
        stack.push({ x: x, y: y - 1 });
      }
    }
  };

  const stopDrawing = () => {
    setIsDrawing(false);
  };

  const undo = () => {
    if (undoStack.length > 1) {
      const newStack = [...undoStack];
      newStack.pop(); // Remove current state
      const previousState = newStack[newStack.length - 1];

      const segmentationCanvas = segmentationCanvasRef.current;
      if (!segmentationCanvas) return;

      const segCtx = segmentationCanvas.getContext("2d");
      if (!segCtx) return;

      segCtx.putImageData(previousState, 0, 0);
      setUndoStack(newStack);
    }
  };

  const clearSegmentation = () => {
    const segmentationCanvas = segmentationCanvasRef.current;
    if (!segmentationCanvas) return;

    const segCtx = segmentationCanvas.getContext("2d");
    if (!segCtx) return;

    segCtx.clearRect(0, 0, segmentationCanvas.width, segmentationCanvas.height);
    setUndoStack([]);
    saveState();
  };

  const saveSegmentation = () => {
    const timestamp = new Date().getTime();
    const imageCanvas = imageCanvasRef.current;
    const segmentationCanvas = segmentationCanvasRef.current;

    if (!imageCanvas || !segmentationCanvas) return;

    // 1. Salvar imagem original
    const originalLink = document.createElement("a");
    originalLink.download = `original_${timestamp}.png`;
    originalLink.href = imageCanvas.toDataURL();
    originalLink.click();

    // Aguardar um pouco antes do próximo download
    setTimeout(() => {
      // 2. Salvar apenas a segmentação (com fundo transparente)
      const segmentationLink = document.createElement("a");
      segmentationLink.download = `segmentacao_${timestamp}.png`;
      segmentationLink.href = segmentationCanvas.toDataURL();
      segmentationLink.click();

      setTimeout(() => {
        // 3. Salvar composição (original + segmentação)
        const compositeCanvas = document.createElement("canvas");
        const compositeCtx = compositeCanvas.getContext("2d");

        if (!compositeCtx) return;

        compositeCanvas.width = imageCanvas.width;
        compositeCanvas.height = imageCanvas.height;

        // Draw original image
        compositeCtx.drawImage(imageCanvas, 0, 0);

        // Draw segmentation with opacity
        compositeCtx.globalAlpha = opacity;
        compositeCtx.drawImage(segmentationCanvas, 0, 0);

        const compositeLink = document.createElement("a");
        compositeLink.download = `composicao_${timestamp}.png`;
        compositeLink.href = compositeCanvas.toDataURL();
        compositeLink.click();

        // Mostrar mensagem de sucesso
        alert("3 imagens salvas:\n- Original\n- Segmentação\n- Composição");
      }, 500);
    }, 500);
  };

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      handleFile(file);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      handleFile(files[0]);
    }
  };

  const colors = [
    { hex: "#ff0000", name: "Vermelho" },
    { hex: "#00ff00", name: "Verde" },
    { hex: "#0000ff", name: "Azul" },
    { hex: "#ffff00", name: "Amarelo" },
    { hex: "#ff00ff", name: "Magenta" },
    { hex: "#00ffff", name: "Ciano" },
    { hex: "#ffa500", name: "Laranja" },
    { hex: "#800080", name: "Roxo" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-t from-slate-900 to-gray-700 p-8">
      {/* Back button */}
      <Link
        href="/"
        className="fixed top-5 left-5 z-50 text-white px-6 py-3 rounded-full text-base font-semibold transition-all duration-300 hover:bg-white hover:-translate-y-0.5 hover:shadow-lg"
      >
        ← Voltar
      </Link>

      {/* Navigation buttons */}

      <div className="max-w-7xl mx-auto mt-20">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-white mb-4">
            Segmentação de Imagens
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Ferramenta interativa para segmentação inteligente e manual de
            imagens
          </p>
        </div>

        {/* Upload Section */}
        <div className="flex gap-10">
          <div
            ref={uploadAreaRef}
            className={`bg-white/10 border-2 border-dashed border-white/30 rounded-2xl p-10 text-center mb-8 ${
              isDragging
                ? "border-green-400 bg-green-400/10"
                : "hover:border-white/50 hover:bg-white/15"
            }`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            <div className="text-4xl mb-6 opacity-70">
              {imageLoaded ? "✅" : "📁"}
            </div>
            <div className="text-xl text-white mb-6">
              {imageLoaded
                ? "Imagem carregada com sucesso!"
                : "Arraste uma imagem aqui ou clique para selecionar"}
            </div>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleFileSelect}
              className="hidden"
            />
            <button
              onClick={() => fileInputRef.current?.click()}
              className="bg-gradient-to-r from-green-500 to-green-600 text-white mt-4 px-10 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-green-500/40"
            >
              {imageLoaded ? "Trocar Imagem" : "Escolher Imagem"}
            </button>
          </div>

          {/* Tools Panel */}
          {imageLoaded && (
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 mb-8 border border-white/20">
              {/* Mode Selection */}
              <div className="flex flex-wrap items-center gap-6 mb-6">
                <div className="flex items-center gap-4">
                  <label className="text-white font-semibold">Modo:</label>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setMode("smart")}
                      className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                        mode === "smart"
                          ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white"
                          : "bg-white/10 text-white hover:bg-white/20"
                      }`}
                    >
                      🎯 Segmentação Inteligente
                    </button>
                    <button
                      onClick={() => setMode("paint")}
                      className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                        mode === "paint"
                          ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white"
                          : "bg-white/10 text-white hover:bg-white/20"
                      }`}
                    >
                      🖌️ Pincel Manual
                    </button>
                  </div>
                </div>

                {/* Color Palette */}
                <div className="flex items-center gap-4">
                  <label className="text-white font-semibold">Cores:</label>
                  <div className="flex gap-2">
                    {colors.map((color) => (
                      <button
                        key={color.hex}
                        onClick={() => setCurrentColor(color.hex)}
                        className={`w-10 h-10 rounded-full border-3 transition-all duration-300 hover:scale-110 ${
                          currentColor === color.hex
                            ? "border-white scale-110"
                            : "border-white/30"
                        }`}
                        style={{ backgroundColor: color.hex }}
                        title={color.name}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Controls */}
              <div className="flex flex-wrap items-center gap-6 mb-6">
                <div className="flex items-center gap-4">
                  <label className="text-white font-semibold">
                    Tamanho do Pincel:
                  </label>
                  <input
                    type="range"
                    min="5"
                    max="50"
                    value={brushSize}
                    onChange={(e) => setBrushSize(parseInt(e.target.value))}
                    className="w-32 h-2 bg-gray-600 rounded-lg appearance-none cursor-pointer slider"
                  />
                  <span className="text-white font-bold min-w-[40px]">
                    {brushSize}px
                  </span>
                </div>

                <div className="flex items-center gap-4">
                  <label className="text-white font-semibold">
                    Tolerância:
                  </label>
                  <input
                    type="range"
                    min="5"
                    max="100"
                    value={tolerance}
                    onChange={(e) => setTolerance(parseInt(e.target.value))}
                    className="w-32 h-2 bg-gray-600 rounded-lg appearance-none cursor-pointer slider"
                  />
                  <span className="text-white font-bold min-w-[40px]">
                    {tolerance}
                  </span>
                </div>

                <div className="flex items-center gap-4">
                  <label className="text-white font-semibold">Opacidade:</label>
                  <input
                    type="range"
                    min="0.1"
                    max="1"
                    step="0.1"
                    value={opacity}
                    onChange={(e) => setOpacity(parseFloat(e.target.value))}
                    className="w-32 h-2 bg-gray-600 rounded-lg appearance-none cursor-pointer slider"
                  />
                  <span className="text-white font-bold min-w-[40px]">
                    {Math.round(opacity * 100)}%
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4">
                <button
                  onClick={clearSegmentation}
                  className="bg-gradient-to-r from-red-500 to-red-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-red-500/40"
                >
                  🗑️ Limpar Tudo
                </button>
                <button
                  onClick={undo}
                  className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-orange-500/40"
                >
                  ↶ Desfazer
                </button>
                <button
                  onClick={saveSegmentation}
                  className="bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-green-500/40"
                >
                  💾 Salvar (3 imagens)
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Canvas Container */}
        {imageLoaded && (
          <div className="text-center">
            <div className="inline-block relative border-4 border-white/20 rounded-2xl overflow-hidden shadow-2xl">
              <canvas
                ref={imageCanvasRef}
                className="block max-w-full h-auto"
              />
              <canvas
                ref={segmentationCanvasRef}
                className="absolute top-0 left-0 cursor-crosshair"
                style={{ opacity }}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={stopDrawing}
                onMouseLeave={stopDrawing}
              />
            </div>
          </div>
        )}
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
