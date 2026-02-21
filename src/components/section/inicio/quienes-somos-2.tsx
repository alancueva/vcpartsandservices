"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  Award,
  CheckCircle2,
  Handshake,
  Maximize2,
  Scale,
  ShieldCheck,
  Target,
  UserCheck,
  X,
  ZoomIn,
  ZoomOut,
} from "lucide-react";

// === 1. CONSTANTES DE ESTILO Y DATOS ===

const ACCENT_COLOR = "bg-red-800";
const ACCENT_TEXT = "text-red-800";
const FONT_SERIF_ITALIC = "italic font-serif";

// === 2. COMPONENTE INTERNO (Bloque de Valor) ===
interface CoreValue {
  id: number;
  label: string;
  icon: React.ElementType;
  desc: string;
}

// Valores fundamentales con sus iconos y descripciones correspondientes
const CORE_VALUES: CoreValue[] = [
  {
    id: 1,
    label: "Seguridad",
    icon: ShieldCheck,
    desc: "Protección integral en cada proceso.",
  },
  {
    id: 2,
    label: "Confianza",
    icon: Handshake,
    desc: "Relaciones sólidas y transparentes.",
  },
  {
    id: 3,
    label: "Excelencia",
    icon: Award,
    desc: "Calidad superior en bienes y servicios.",
  },
  {
    id: 4,
    label: "Integridad",
    icon: Scale,
    desc: "Ética y rectitud en nuestras acciones.",
  },
  {
    id: 5,
    label: "Compromiso",
    icon: Target,
    desc: "Dedicación total con sus objetivos.",
  },
  {
    id: 6,
    label: "Responsabilidad",
    icon: UserCheck,
    desc: "Cumplimiento eficiente y puntual.",
  },
];
interface ValueBlockProps {
  value: CoreValue;
}

/**
 * Componente para mostrar un valor fundamental con un ícono y línea divisoria.
 */
const ValueBlock: React.FC<ValueBlockProps> = ({ value }) => {
  const Icon = value.icon;
  return (
    <div className="flex items-center space-x-4 group">
      <div
        className={`p-2 rounded-lg ${ACCENT_COLOR} bg-opacity-5 group-hover:bg-opacity-10 transition-colors`}
      >
        <Icon className={`w-6 h-6 text-white`} />
      </div>
      <div>
        <h4 className="text-lg font-bold text-gray-900 leading-none mb-1">
          {value.label}
        </h4>
        <p className="text-sm text-gray-500 leading-snug">{value.desc}</p>
        <div
          className={`w-0 group-hover:w-full h-px ${ACCENT_COLOR} opacity-20 transition-all duration-500 mt-2`}
        ></div>
      </div>
    </div>
  );
};

const ISO_CERTIFICATIONS = [
  {
    id: "9001",
    title: "ISO 9001:2015",
    area: "Calidad",
    icon: "/certificacion-iso/iso-9001.jpeg",
    img: "/certificacion-iso/ISO 9001-2015.jpg",
  },
  {
    id: "14001",
    title: "ISO 14001:2015",
    area: "Medio Ambiente",
    icon: "/certificacion-iso/iso-14001.jpeg",
    img: "/certificacion-iso/ISO 14001-2015.jpg",
  },
  {
    id: "37001",
    title: "ISO 37001:2016",
    area: "Antisoborno",
    icon: "/certificacion-iso/iso-37001.jpeg",
    img: "/certificacion-iso/ISO 37001-2016.jpg",
  },
  {
    id: "45001",
    title: "ISO 45001:2018",
    area: "Seguridad y Salud",
    icon: "/certificacion-iso/iso-45001.jpeg",
    img: "/certificacion-iso/ISO 45001-2018.jpg",
  },
];

export default function AboutUsSection() {
  const [selectedCert, setSelectedCert] = useState<null | string>(null);
  const [zoom, setZoom] = useState(0.5);

  // Estados para el arrastre (Pan)
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [startPan, setStartPan] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (selectedCert) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Limpieza al desmontar el componente
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedCert]);

  const openModal = (img: string) => {
    setSelectedCert(img);
    setZoom(0.8);
    setPosition({ x: 0, y: 0 });
  };

  const closeModal = () => {
    setSelectedCert(null);
  };

  const handleZoom = (e: React.MouseEvent, delta: number) => {
    e.stopPropagation(); // Evita que el clic cierre el modal si tuvieras un click en el fondo
    setZoom((prev) => {
      const nextZoom = prev + delta;
      if (nextZoom < 0.2) return 0.2;
      if (nextZoom > 3) return 3;
      return parseFloat(nextZoom.toFixed(2));
    });
  };

  const startDragging = (clientX: number, clientY: number) => {
    setIsDragging(true);
    setStartPan({ x: clientX - position.x, y: clientY - position.y });
  };

  const moveDragging = (clientX: number, clientY: number) => {
    if (!isDragging) return;
    setPosition({
      x: clientX - startPan.x,
      y: clientY - startPan.y,
    });
  };

  const stopDragging = () => {
    setIsDragging(false);
  };

  // Handlers Mouse
  const onMouseDown = (e: React.MouseEvent) => {
    if (e.button !== 0) return; // Solo click izquierdo
    startDragging(e.clientX, e.clientY);
  };

  const onMouseMove = (e: React.MouseEvent) => {
    moveDragging(e.clientX, e.clientY);
  };

  // Handlers Touch
  const onTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 1) {
      startDragging(e.touches[0].clientX, e.touches[0].clientY);
    }
  };

  const onTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length === 1) {
      moveDragging(e.touches[0].clientX, e.touches[0].clientY);
    }
  };

  return (
    <section className="py-0 md:py-5 lg:py-5  bg-white font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start mb-10 md:mb-10 lg:mb-10">
          {/* TÍTULO PRINCIPAL */}

          <div className="lg:col-span-7">
            <header className="text-center mb-10">
              {/*<header className="text-center mb-16">*/}
              <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">
                Quiénes
                <span className={` ${FONT_SERIF_ITALIC} ${ACCENT_TEXT} ml-2`}>
                  Somos
                </span>
              </h2>
              {/* Línea de acento vinotinto */}
              <div
                className={`w-12 h-1 ${ACCENT_COLOR} mx-auto rounded-full mt-2`}
              ></div>
            </header>

            {/* CONTENIDO (Diseño Asimétrico en 2 Columnas) */}
            <div className="text-center space-y-8">
              {/* COLUMNA DERECHA: TEXTO Y VALORES */}
              <div className="space-y-6">
                <h3
                  className={`text-2xl font-bold uppercase tracking-wider ${ACCENT_TEXT}`}
                >
                  La Empresa
                </h3>

                <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
                  Somos una empresa{" "}
                  <span className="font-bold text-gray-800">100% peruana</span>{" "}
                  conformada por profesionales de amplia experiencia en
                  mantenimiento de equipos industriales, suministrando bienes y
                  servicios con los más altos estándares de calidad, enfocados
                  siempre en mejorar la operatividad y rentabilidad de los
                  clientes que confían en nosotros.
                </p>

                <div className="relative py-4">
                  <div
                    className="absolute inset-0 flex items-center"
                    aria-hidden="true"
                  >
                    <div className="w-full border-t border-gray-200"></div>
                  </div>
                  <div className="relative flex justify-center">
                    <span className="bg-white px-3 text-gray-400">
                      <svg
                        className="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M13 6l6 6-6 6M5 6l6 6-6 6" />
                      </svg>
                    </span>
                  </div>
                </div>

                <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto italic">
                  <span className="font-semibold text-gray-800 not-italic">
                    VC Parts and Services
                  </span>{" "}
                  se especializa en el suministro de piezas de repuestos para
                  diferentes equipos mecánicos y eléctricos, como motores de
                  combustión diésel, generadores eléctricos, cajas de
                  engranajes, separadores de aceite y petróleo, compresores,
                  bombas, intercambiadores de calor, filtros, acoplamientos,
                  componentes electrónicos, etc.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            {/*bg-slate-900   shadow-2xl*/}
            <div className=" p-8 rounded-sm ">
              <h3 className="text-md font-bold uppercase tracking-[0.2em] mb-8 text-gray-900 border-b border-red-800 pb-4">
                Nuestras Certificaciones
              </h3>

              <div className="grid grid-cols-2 gap4">
                {ISO_CERTIFICATIONS.map((iso) => (
                  <div
                    key={iso.id}
                    onClick={() => openModal(iso.img)}
                    className="group relative cursor-pointer bg-white/5 border border-white/10 p-4 rounded hover:bg-white/10 transition-all text-center"
                  >
                    {/* Tooltip */}
                    <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-red-800 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-20 pointer-events-none uppercase font-bold tracking-tighter shadow-xl">
                      Abrir certificación
                    </div>

                    <div className="mb-2 flex justify-center">
                      <div className="w-20 h-20 bg-white/10 rounded flex items-center justify-center group-hover:scale-110 transition-transform">
                        {/*<Maximize2 className="w-6 h-6 text-slate-400 group-hover:text-white" />*/}
                        <img
                          src={iso.icon}
                          alt="Certificación ISO"
                          className="w-60 h-auto"
                        />
                      </div>
                    </div>
                    <p className="text-xs font-bold text-gray-800">
                      {iso.title}
                    </p>
                    {/*<p className="text-[9px] text-slate-500 uppercase tracking-widest">
                      {iso.area}
                    </p>*/}
                  </div>
                ))}
              </div>
              <p className="mt-8 text-[10px] text-slate-500 text-center leading-relaxed italic">
                Procesos auditados bajo estándares globales de cumplimiento.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center pt-2">
          <h3 className=" text-xl font-bold text-gray-900 mb-8 border-b-2 border-red-100 inline-block pb-2">
            Nuestros Valores Fundamentales
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-10">
            {CORE_VALUES.map((value) => (
              <ValueBlock key={value.id} value={value} />
            ))}
          </div>
        </div>
        <div className="mt-15 text-center border-t border-gray-100 pt-8 pb-5">
          <p className="text-2xl font-serif italic text-gray-400 max-w-2xl mx-auto leading-snug">
            &ldquo;Estamos comprometidos con el{" "}
            <span className="text-gray-800 font-semibold not-italic">
              mejoramiento continuo
            </span>{" "}
            de cada uno de nuestros procesos para superar sus
            expectativas.&rdquo;
          </p>
        </div>
      </div>

      {/* MODAL DE CERTIFICACIÓN (VISOR CON ZOOM) */}
      {selectedCert && (
        <div className="fixed inset-0 z-[100] bg-black/95 flex flex-col items-center justify-center p-4">
          {/* Controles */}
          <div className="absolute top-6 right-6 flex items-center space-x-4 z-[110]">
            <button
              onClick={(e) => handleZoom(e, 0.05)}
              disabled={zoom >= 3}
              className={`p-3 rounded-full text-white transition-all active:scale-95 ${zoom >= 3 ? "bg-white/5 opacity-20 cursor-not-allowed" : "bg-white/10 hover:bg-white/20"}`}
            >
              <ZoomIn className="w-6 h-6" />
            </button>
            <button
              onClick={(e) => handleZoom(e, -0.05)}
              disabled={zoom <= 0.2}
              className={`p-3 rounded-full text-white transition-all active:scale-95 ${zoom <= 0.2 ? "bg-white/5 opacity-20 cursor-not-allowed" : "bg-white/10 hover:bg-white/20"}`}
            >
              <ZoomOut className="w-6 h-6" />
            </button>
            <button
              onClick={closeModal}
              className="p-3 bg-red-900 hover:bg-red-800 rounded-full text-white shadow-lg"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Área de Visualización con Drag */}
          <div
            ref={containerRef}
            className="w-full h-full flex items-center justify-center overflow-hidden cursor-grab active:cursor-grabbing select-none"
            onMouseDown={onMouseDown}
            onMouseMove={onMouseMove}
            onMouseUp={stopDragging}
            onMouseLeave={stopDragging}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={stopDragging}
            onClick={closeModal}
          >
            <div
              className="relative inline-block transition-transform duration-300 ease-out"
              style={{
                transform: `translate(${position.x}px, ${position.y}px) scale(${zoom})`,
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedCert}
                alt="Documento"
                className="shadow-2xl border border-white/10 pointer-events-none"
                style={{
                  maxHeight: "85vh",
                  maxWidth: "90vw",
                }}
              />
            </div>
          </div>

          {/* Indicador */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2 pointer-events-none">
            <span className="text-white/30 text-[9px] uppercase tracking-[0.3em] font-bold">
              Arrastrar para mover • {Math.round(zoom * 100)}%
            </span>
          </div>
        </div>
      )}
    </section>
  );
}
