"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={
        "absolute left-0 top-0 w-full px-10 mx-auto h-[70px] bg-transparent flex items-center justify-between "
      }
    >
      <Link href="/" className="flex items-center gap-5 text-xl font-bold">
        <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-blue-600 rounded-xl flex items-center justify-center text-xl shadow-lg shadow-purple-500/40">
          🎨
        </div>
        <div className="bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent">
          Cysneiros Playground
        </div>
      </Link>

      <nav>
        <ul className="flex items-center gap-8">
          <li>
            <Link
              href="/infos"
              className="text-white/80 hover:text-white hover:bg-white/10 px-4 py-2 rounded-lg transition-all duration-300 font-medium"
            >
              Infos
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="text-white/80 hover:text-white hover:bg-white/10 px-4 py-2 rounded-lg transition-all duration-300 font-medium"
            >
              Documentação
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-purple-500/40"
            >
              🚀 Começar
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
