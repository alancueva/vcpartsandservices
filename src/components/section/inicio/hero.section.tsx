"use client";
import { IconoWhatsapp } from "@/components/icono-whatsapp";
import { useState, useEffect } from "react";

const ACCENT_COLOR = "bg-red-800";
const ACCENT_HOVER = "hover:bg-red-700";
const ACCENT_TEXT = "text-red-700";

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100); // Un pequeño delay
    return () => clearTimeout(timer);
  }, []);

  const handleWhatsAppContact = () => {
    const phoneNumber = "51960785273"; // Reemplazar con el número real del cliente
    const message = encodeURIComponent(
      "Hola VC Part and Service, estoy interesado en recibir información sobre los productos Kemet y sus servicios de ingeniería.",
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };
  return (
    <div className="bg-white font-sans text-slate-900 overflow-hidden">
      <main className="max-w-[1400px] mx-auto px-12 pt-6 lg:pt-8 pb-10 md:10 lg:10 relative">
        <div className="grid lg:grid-cols-12 gap-12">
          {/* Columna Izquierda: Texto y Selector */}
          <div
            className={`lg:col-span-5 z-10 transition-all duration-1000 transform ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"}`}
          >
            <div className="mb-6">
              <span className="text-[10px] font-black tracking-[0.3em] text-sky-800 uppercase">
                Distribuidor Autorizado Kemet International
              </span>
            </div>

            <h1 className="text-6xl lg:text-7xl font-bold text-red-800 leading-[1.05] mb-8 tracking-tight">
              Expertos en <br />
              <span className="text-sky-800 font-light italic">
                Productos Kemet
              </span>
            </h1>

            <p className="text-lg text-slate-500 mb-12 leading-relaxed max-w-md font-light">
              Soluciones integrales en preparación de muestras, ingeniería de
              precisión y ensayos no destructivos para la industria de alta
              exigencia.
            </p>

            {/* Widget de Búsqueda (Sin Iconos) */}
            <div className="bg-white mb-4 max-w-lg">
              <div className="flex items-center justify-between">
                <button
                  onClick={handleWhatsAppContact}
                  className={`${ACCENT_COLOR} ${ACCENT_HOVER} text-white px-10 py-4 rounded-2xl font-bold flex items-center transition-all transform hover:scale-105 shadow-xl shadow-red-700/20`}
                >
                  <IconoWhatsapp className="inline-block mr-2" />
                  Ponerse en contacto
                </button>
                <div className="text-right">
                  {/*<p className="text-[10px] font-black text-slate-900 uppercase tracking-tighter">
                    850+ Socios
                  </p>
                  <p className="text-[9px] text-slate-400 uppercase tracking-widest">
                    Industriales
                  </p>*/}
                </div>
              </div>
            </div>
          </div>

          {/* Columna Derecha: Visual */}
          <div
            className={`lg:col-span-7 relative transition-all duration-1000 delay-300 transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            <div className="relative">
              {/* Imagen Principal */}
              <div className="bg-slate-100 w-full aspect-[16/16] rounded-tl-[120px] overflow-hidden relative group">
                <div className="absolute inset-0 bg-slate-200">
                  <img
                    src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2070&auto=format&fit=crop"
                    className="w-full h-full object-cover opacity-80 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-[2s]"
                    alt="Maquinaria de lapeado y pulido de precisión"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/20 to-transparent"></div>
                </div>
              </div>

              {/* Cuadro Informativo Superpuesto (Sin Iconos) */}
              {/*<div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[90%] rounded-sm border border-slate-100 bg-white shadow-[0_40px_80px_-20px_rgba(0,0,0,0.15)] overflow-hidden flex lg:w-[70%] lg:left-auto lg:right-0 lg:-bottom-8 lg:translate-x-0">
                <div className="w-1/3 aspect-square bg-slate-900 flex items-center justify-center p-1">
                  <img
                    src="/productos-kemet/images_diamond_diamond-slurries.webp"
                    alt="Detalle técnico"
                    className="w-full h-full object-cover inset-0 rounded-lg"
                  />
                </div>
                <div className="w-2/3 flex flex-col justify-center p-4 lg:p-8">
                  <div className="flex items-center justify-between mb-2 lg:mb-6"></div>
                  <h4 className="text-[11px] font-black uppercase tracking-wider text-slate-900 mb-2 lg:text-[13px] lg:mb-3">
                    Lapeado de Diamante
                  </h4>
                  <p className="text-[10px] font-light leading-relaxed text-slate-500 lg:text-[11px]">
                    Sistemas avanzados de pulido para componentes críticos.
                    Tecnología Kemet para rugosidades nanométricas.
                  </p>
                </div>
              </div>*/}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
