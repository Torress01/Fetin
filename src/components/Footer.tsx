"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-16 px-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">CG Playground</h3>
            <p className="text-white/70 leading-relaxed">
              Uma plataforma educacional para explorar conceitos de computação
              gráfica e multimídia de forma interativa e visual.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Recursos</h3>
            <div className="space-y-2">
              <p>
                <Link
                  href="#"
                  className="text-white/70 hover:text-purple-400 transition-colors"
                >
                  Canvas Interativo
                </Link>
              </p>
              <p>
                <Link
                  href="#"
                  className="text-white/70 hover:text-purple-400 transition-colors"
                >
                  Transformações 2D
                </Link>
              </p>
              <p>
                <Link
                  href="#"
                  className="text-white/70 hover:text-purple-400 transition-colors"
                >
                  Curvas de Bézier
                </Link>
              </p>
              <p>
                <Link
                  href="#"
                  className="text-white/70 hover:text-purple-400 transition-colors"
                >
                  Sistema de Cores
                </Link>
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Aprendizado</h3>
            <div className="space-y-2">
              <p>
                <Link
                  href="#"
                  className="text-white/70 hover:text-purple-400 transition-colors"
                >
                  Tutoriais
                </Link>
              </p>
              <p>
                <Link
                  href="#"
                  className="text-white/70 hover:text-purple-400 transition-colors"
                >
                  Documentação
                </Link>
              </p>
              <p>
                <Link
                  href="#"
                  className="text-white/70 hover:text-purple-400 transition-colors"
                >
                  Exemplos
                </Link>
              </p>
              <p>
                <Link
                  href="#"
                  className="text-white/70 hover:text-purple-400 transition-colors"
                >
                  Exercícios
                </Link>
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Comunidade</h3>
            <div className="space-y-2">
              <p>
                <Link
                  href="#"
                  className="text-white/70 hover:text-purple-400 transition-colors"
                >
                  GitHub
                </Link>
              </p>
              <p>
                <Link
                  href="#"
                  className="text-white/70 hover:text-purple-400 transition-colors"
                >
                  Discord
                </Link>
              </p>
              <p>
                <Link
                  href="#"
                  className="text-white/70 hover:text-purple-400 transition-colors"
                >
                  Fórum
                </Link>
              </p>
              <p>
                <Link
                  href="#"
                  className="text-white/70 hover:text-purple-400 transition-colors"
                >
                  Blog
                </Link>
              </p>
            </div>
          </div>
        </div>

        <div className="text-center pt-8 border-t border-white/10 text-white/60">
          <p>
            &copy; 2024 CG Playground. Feito com ❤️ para educação em computação
            gráfica.
          </p>
        </div>
      </div>
    </footer>
  );
}
