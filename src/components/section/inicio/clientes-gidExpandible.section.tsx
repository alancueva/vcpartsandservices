"use client";
import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const CLIENT_LOGOS = [
  { src: "/clientes/bd-instruments.png", alt: "Logo BD Instruments" },
  { src: "/clientes/ingemmet.png", alt: "Logo INGEMMET" },
  { src: "/clientes/petroperu.png", alt: "Logo Petroperú" },
  { src: "/clientes/confipetrol.png", alt: "Logo Confipetrol" },
  { src: "/clientes/proinman.png", alt: "Logo PROINMAN S.A.C." },
  { src: "/clientes/copeinca.png", alt: "Logo Copeinca" },
  { src: "/clientes/BCR.jpg", alt: "Logo bcr" },
];

export default function ClientesCarrusel() {
  const [isExpanded, setIsExpanded] = useState(false);

  // Definimos cuántos logos se ven inicialmente (ej. 4 u 8 dependiendo del diseño)
  const initialCount = 4;
  const visibleLogos = isExpanded
    ? CLIENT_LOGOS
    : CLIENT_LOGOS.slice(0, initialCount);

  return (
    <section className="py-16 bg-white overflow-hidden transition-all duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Título Profesional y Minimalista (Mantenido) */}
        <h2 className="text-3xl font-extrabold text-gray-800 tracking-tight sm:text-4xl mb-4">
          Algunos de{" "}
          <span className="text-red-600 italic font-serif">
            Nuestros Clientes
          </span>
        </h2>
        <div className="w-12 h-1 bg-red-600 mx-auto mb-12 rounded"></div>

        {/* --- Grid de Clientes --- */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 items-center">
          {visibleLogos.map((logo, idx) => (
            <div
              key={idx}
              className="group relative flex items-center justify-center p-6 bg-gray-50 rounded-xl border border-transparent hover:border-gray-200 hover:bg-white hover:shadow-sm transition-all duration-300 h-32"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="max-w-full max-h-full object-contain opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
              />
            </div>
          ))}
        </div>

        {/* --- Botón de Control (Ver más / Ver menos) --- */}
        {CLIENT_LOGOS.length > initialCount && (
          <div className="mt-12 flex justify-center">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="flex flex-col items-center gap-2 text-gray-400 hover:text-red-600 transition-colors duration-300 group"
            >
              <span className="text-xs uppercase tracking-[0.2em] font-semibold">
                {isExpanded ? "Ver menos" : "Mostrar más"}
              </span>
              <div
                className={`p-2 rounded-full border border-gray-100 group-hover:border-red-100 bg-gray-50 group-hover:bg-red-50 transition-all ${isExpanded ? "rotate-0" : "animate-bounce"}`}
              >
                {isExpanded ? (
                  <ChevronUp size={20} />
                ) : (
                  <ChevronDown size={20} />
                )}
              </div>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
