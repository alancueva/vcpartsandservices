"use client";
import { useState } from "react";
import CabeceraSection from "@/components/section/products/cabecera.section";
import { Info } from "lucide-react";

const KEMET_PRODUCTS = [
  {
    id: "corte",
    image:
      "/productos-kemet/Preparacion-de-muestras-metalograficas-geologicas-y-petrograficas/Metallographic-cutting.webp",
    title: "Corte",
    description:
      "Máquinas de corte de precisión para seccionamiento de muestras sin daño térmico.",
    longDescription:
      "Sistemas de corte abrasivo y de precisión diseñados para minimizar la deformación estructural de la muestra durante la etapa inicial de preparación.",
    features: [
      "Corte en frío optimizado",
      "Velocidad variable",
      "Sujeción segura",
    ],
    category: "Preparación Inicial",
  },
  {
    id: "montaje",
    image:
      "/productos-kemet/Preparacion-de-muestras-metalograficas-geologicas-y-petrograficas/Metallographic-mounting.webp",
    title: "Montaje",
    description:
      "Sistemas de montaje en caliente y frío para soporte de muestras.",
    longDescription:
      "Prensas de montaje metalográfico y resinas epóxicas de alta calidad que garantizan una adherencia perfecta para el manejo de muestras pequeñas o irregulares.",
    features: [
      "Resinas de baja contracción",
      "Ciclos rápidos",
      "Claridad óptica",
    ],
    category: "Soporte",
  },
  {
    id: "molienda",
    image:
      "/productos-kemet/Preparacion-de-muestras-metalograficas-geologicas-y-petrograficas/Metallographic-grinding.webp",
    title: "Molienda",
    description: "Papeles abrasivos y discos de molienda de alta durabilidad.",
    longDescription:
      "Gama completa de discos abrasivos de Carburo de Silicio y sistemas de diamante para una nivelación de superficie rápida y uniforme.",
    features: [
      "Granulometría precisa",
      "Resistencia al agua",
      "Larga vida útil",
    ],
    category: "Desbaste",
  },
  {
    id: "pulido",
    image:
      "/productos-kemet/Preparacion-de-muestras-metalograficas-geologicas-y-petrograficas/Metallographic-polishing.webp",
    title: "Pulido",
    description: "Paños de pulido y suspensiones para acabado espejo.",
    longDescription:
      "Paños especializados (textiles, sintéticos, metálicos) que trabajan en conjunto con suspensiones de diamante para revelar la microestructura real.",
    features: [
      "Acabado libre de rayas",
      "Paños autoadhesivos",
      "Alta planicidad",
    ],
    category: "Acabado",
  },
  {
    id: "replicacion",
    image:
      "/productos-kemet/Preparacion-de-muestras-metalograficas-geologicas-y-petrograficas/metallurgical-replication-field-metallographic.webp",
    title: "Replicación",
    description: "Técnicas de réplica no destructivas para inspección in situ.",
    longDescription:
      "Materiales de réplica de alta resolución para capturar la topografía de superficies grandes que no pueden ser llevadas al laboratorio.",
    features: [
      "Resolución micrométrica",
      "Fácil aplicación",
      "Resultados permanentes",
    ],
    category: "Inspección",
  },
  {
    id: "petrografia",
    image:
      "/productos-kemet/Preparacion-de-muestras-metalograficas-geologicas-y-petrograficas/thin-section-polishing.webp",
    title: "Petrografía",
    description:
      "Equipos para la preparación de secciones delgadas de roca y minerales.",
    longDescription:
      "Maquinaria específica para el desbaste y pulido de muestras geológicas hasta alcanzar espesores estándar de 30 micras para análisis por luz transmitida.",
    features: [
      "Precisión micrométrica",
      "Sistemas de vacío",
      "Soportes especializados",
    ],
    category: "Geología",
  },
  {
    id: "espectroscopia",
    image:
      "/productos-kemet/Preparacion-de-muestras-metalograficas-geologicas-y-petrograficas/pendulum-grinders.webp",
    title: "Espectroscopia",
    description: "Preparación de superficies para análisis químico elemental.",
    longDescription:
      "Sistemas de preparación de superficies metálicas para análisis por OES (Espectroscopia de Emisión Óptica) y XRF, asegurando superficies planas y limpias.",
    features: [
      "Resultados repetibles",
      "Limpieza profunda",
      "Rapidez de proceso",
    ],
    category: "Análisis Químico",
  },
  {
    id: "prueba-dureza",
    image:
      "/productos-kemet/Preparacion-de-muestras-metalograficas-geologicas-y-petrograficas/all-in-one-hardness-tester.webp",
    title: "Prueba de dureza",
    description: "Durómetros macro y micro para caracterización de materiales.",
    longDescription:
      "Instrumentos de medición de dureza Vickers, Rockwell y Brinell con sistemas de lectura digital y análisis de indentación por software.",
    features: [
      "Normativas internacionales",
      "Lectura automática",
      "Alta precisión",
    ],
    category: "Caracterización",
  },
  {
    id: "microscopios",
    image:
      "/productos-kemet/Preparacion-de-muestras-metalograficas-geologicas-y-petrograficas/best-upright-materials-microscopes.webp",
    title: "Microscopios",
    description: "Sistemas ópticos avanzados para análisis metalográfico.",
    longDescription:
      "Microscopios invertidos y verticales con iluminación de campo claro, oscuro y luz polarizada, equipados con cámaras digitales de alta resolución.",
    features: ["Óptica infinita", "Software de análisis", "Diseño ergonómico"],
    category: "Observación",
  },
];

export default function IngenieriaDePrecisionYHerramientas() {
  const [activeTab, setActiveTab] = useState(KEMET_PRODUCTS[0]);

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <CabeceraSection
        title="Preparación de muestras metalográficas, geológicas y petrográficas"
        subtitle="Equipamiento especializado para análisis metalográfico, geológico y petrográfico."
        backgroundImageUrl="https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=2000"
        height="h-[480px] md:h-[560px]"
      />

      <main className="max-w-7xl mx-auto px-6 py-16 flex flex-col lg:flex-row gap-16">
        {/* Sidebar de Categorías (Izquierda) */}
        <aside className="lg:w-1/4">
          <div className="sticky top-28">
            <h2 className="text-sm font-bold text-slate-900 uppercase tracking-widest mb-8 border-l-4 border-slate-900 pl-4">
              Categorías de Laboratorio
            </h2>
            <div className="space-y-1">
              {KEMET_PRODUCTS.map((product) => (
                <button
                  key={product.id}
                  onClick={() => setActiveTab(product)}
                  className={`w-full flex items-center justify-between px-4 py-4 rounded-xl transition-all duration-300 group ${
                    activeTab.id === product.id
                      ? "bg-slate-100 text-slate-900 shadow-sm"
                      : "hover:bg-slate-50 text-slate-500"
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    {/*<div className={`${activeTab.id === product.id ? 'text-blue-600 scale-110' : 'text-slate-400 group-hover:text-slate-600'} transition-transform`}>
                            {product.icon}
                          </div>*/}
                    <span
                      className={`text-sm font-semibold ${activeTab.id === product.id ? "translate-x-1" : ""} transition-transform tracking-tight`}
                    >
                      {product.title}
                    </span>
                  </div>
                  {activeTab.id === product.id && (
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-600"></div>
                  )}
                </button>
              ))}
            </div>

            <div className="mt-12 p-8 bg-slate-50 rounded-3xl border border-slate-100">
              {/*<h3 className="font-bold text-slate-900 mb-2">
                Asistencia Kemet
              </h3>
              <p className="text-xs text-slate-500 mb-6 leading-relaxed">
                Expertos en procesos de pulido y lapeado disponibles para
                consultoría técnica.
              </p>
              <button className="w-full py-3 bg-white border border-slate-200 rounded-xl text-xs font-bold text-slate-900 hover:border-blue-500 transition-all">
                Contactar Soporte
              </button>*/}
            </div>
          </div>
        </aside>

        {/* Área de Detalle (Derecha) */}
        <section className="lg:w-3/4">
          <div className="bg-white min-h-[600px]">
            {/* Header del Producto Seleccionado */}
            <div className="flex flex-col md:flex-row items-start gap-12 mb-16">
              <div className="w-full md:w-1/2 bg-slate-50 rounded-[40px] aspect-square flex items-center justify-center p-12 relative group overflow-hidden border border-slate-100">
                {/* Fondo decorativo del icono */}
                <div className="absolute inset-0 bg-blue-500/5 ">
                  <img
                    src={activeTab.image}
                    alt="Icono"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/*<div className="text-slate-900 transition-transform duration-500 group-hover:scale-110">
                        {React.cloneElement(activeTab.icon, { className: "w-32 h-32 md:w-48 md:h-48" })}
                      </div>*/}
                {/*<div className="absolute top-6 left-6 px-4 py-2 bg-white rounded-full shadow-sm text-[10px] font-bold uppercase tracking-widest text-blue-600">
                  {activeTab.category}
                </div>*/}
              </div>

              <div className="w-full md:w-1/2 pt-4">
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight tracking-tighter">
                  {activeTab.title}
                </h2>
                <p className="text-lg text-slate-500 leading-relaxed mb-8 font-medium italic border-l-2 border-blue-500 pl-6">
                  {activeTab.description}
                </p>

                <div className="space-y-4">
                  {/*<button className="w-full md:w-auto px-10 py-4 bg-slate-900 text-white rounded-full font-bold hover:bg-slate-800 transition-all shadow-lg shadow-slate-200">
                    Añadir al Carrito
                  </button>
                  <button className="w-full md:w-auto px-10 py-4 bg-transparent text-slate-900 border-2 border-slate-900 md:ml-4 rounded-full font-bold hover:bg-slate-50 transition-all">
                    Ver Datos Técnicos
                  </button>*/}
                </div>
              </div>
            </div>

            {/* Información Técnica */}
            <div className="grid md:grid-cols-2 gap-16 py-12 border-t border-slate-100">
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                  <Info className="w-5 h-5 text-blue-600" />
                  Aplicaciones y Ventajas
                </h3>
                <p className="text-slate-500 leading-relaxed text-lg mb-6">
                  {activeTab.longDescription}
                </p>
              </div>

              <div className="bg-slate-50 rounded-[32px] p-8">
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-widest mb-6">
                  Características Principales
                </h3>
                <ul className="grid grid-cols-1 gap-4">
                  {activeTab.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center space-x-3 text-slate-600 font-medium"
                    >
                      <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
