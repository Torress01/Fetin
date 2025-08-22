"use client";

import { useEffect, useState } from "react";

export default function AnimatedBackground() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      {/* Animated Background */}
      <div
        className="fixed inset-0 -z-20 bg-gradient-radial from-gray-500/30 via-transparent to-transparent animate-pulse"
        style={{
          background: `
               radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
               radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%),
               radial-gradient(circle at 40% 80%, rgba(119, 255, 198, 0.3) 0%, transparent 50%)
             `,
        }}
      />

      {/* Floating Shapes */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div
          className="absolute w-15 h-15 bg-gradient-to-br from-black to-gray-900 rounded-full opacity-10 animate-bounce"
          style={{
            top: "20%",
            left: "10%",
            transform: `translate(${mousePosition.x * 0.02}px, ${
              mousePosition.y * 0.02
            }px)`,
            animationDelay: "0s",
          }}
        />
        <div
          className="absolute w-20 h-20 bg-gradient-to-br from-black to-gray-900 opacity-10 animate-bounce"
          style={{
            top: "60%",
            right: "15%",
            clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
            transform: `translate(${mousePosition.x * 0.03}px, ${
              mousePosition.y * 0.03
            }px)`,
            animationDelay: "2s",
          }}
        />
        <div
          className="absolute w-10 h-10 bg-gradient-to-br from-black to-gray-900 opacity-10 animate-bounce rotate-45"
          style={{
            bottom: "30%",
            left: "20%",
            transform: `translate(${mousePosition.x * 0.04}px, ${
              mousePosition.y * 0.04
            }px)`,
            animationDelay: "4s",
          }}
        />
      </div>
    </>
  );
}
