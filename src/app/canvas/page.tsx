"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function CanvasPage() {
  useEffect(() => {
    // Redirect para o projeto estático
    window.location.href = "/static-project/pages/transform.html";
  }, []);

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-black text-white gap-4">
      <div className="text-xl">Redirecionando para o projeto...</div>
    </div>
  );
}
