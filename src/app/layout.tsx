import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pixel Forge - Explore Computação Gráfica",
  description:
    "Uma plataforma moderna para aprender e experimentar conceitos de computação gráfica e multimídia através de ferramentas visuais e interativas.",
  icons: {
    icon: "./images/anvil.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
