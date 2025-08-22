"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-8 py-16">
        {/* Bottom Footer */}

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-white/60 text-sm">
            © 2024 Pixel Forge. Desenvolvido para educação em computação
            gráfica.
          </div>
        </div>
      </div>
    </footer>
  );
}
