"use client";
import { useState } from "react";
import CabeceraSection from "@/components/section/products/cabecera.section";
import { Info } from "lucide-react";

const KEMET_PRODUCTS = [
  {
    id: "placas-lapeado",
    image:
      "/productos-kemet/Lapeado-de-diamante-y-precision/superfinishing-polishing.webp",
    title: "Placas de lapeado",
    description:
      "Las placas de lapeado Kemet están diseñadas para ofrecer una estabilidad térmica superior y una planicidad excepcional durante el proceso de rectificado.",
    longDescription:
      "Nuestras placas se fabrican en una variedad de materiales, incluyendo hierro fundido, cobre, estaño y materiales compuestos avanzados (XP, ASL). Permiten un control preciso del acabado superficial y la tasa de remoción de material.",
    features: [
      "Alta resistencia al desgaste",
      "Compatibilidad con diversos compuestos",
      "Estabilidad dimensional",
      "Disponibles en múltiples diámetros",
    ],
    category: "Soportes de Proceso",
  },
  {
    id: "compuestos-diamante",
    image:
      "/productos-kemet/Lapeado-de-diamante-y-precision/diamond-compounds.webp",
    title: "Compuestos de diamante",
    description:
      "Pastas y compuestos de diamante de alta calidad para un pulido de precisión controlado.",
    longDescription:
      "Formulados con polvos de diamante graduados con precisión microscópica. Estos compuestos están disponibles en base acuosa o base aceite, garantizando una distribución uniforme del diamante para evitar rayas y asegurar la repetibilidad.",
    features: [
      "Grados micrónicos precisos",
      "Alta concentración de diamante",
      "Fácil limpieza",
      "Bajo consumo por aplicación",
    ],
    category: "Abrasivos",
  },
  {
    id: "suspension-diamante",
    image:
      "/productos-kemet/Lapeado-de-diamante-y-precision/diamond-suspension-for-metallography.webp",
    title: "Suspensión de diamante",
    description:
      "Suspensiones líquidas listas para usar que optimizan la lubricación y el corte.",
    longDescription:
      "Las suspensiones de diamante Kemet combinan partículas abrasivas con vehículos químicos avanzados que mantienen el diamante en suspensión permanente, permitiendo una dosificación automática perfecta en máquinas de producción.",
    features: [
      "Suspensión estable",
      "Ideal para sistemas automáticos",
      "Optimización de tiempos de ciclo",
      "Ecológicamente amigables",
    ],
    category: "Abrasivos Líquidos",
  },
  {
    id: "lodo-diamante",
    image:
      "/productos-kemet/Lapeado-de-diamante-y-precision/0022700_00_02_00Still001.webp",
    title: "Lodo de diamante",
    description:
      "Mezclas abrasivas de alta densidad para aplicaciones de gran volumen y desbaste pesado.",
    longDescription:
      "El lodo de diamante (Slurry) está diseñado para procesos donde la tasa de remoción de material es crítica. Ofrece un equilibrio perfecto entre agresividad de corte y calidad de acabado.",
    features: [
      "Máxima tasa de remoción",
      "Consistencia de lote a lote",
      "Eficaz en materiales duros",
      "Fácil de lavar",
    ],
    category: "Abrasivos Líquidos",
  },
  {
    id: "maquinas-lapeadoras",
    image: "/productos-kemet/Lapeado-de-diamante-y-precision/kemet15.webp",
    title: "Máquinas lapeadoras",
    description:
      "Sistemas completos de lapeado de alta precisión para laboratorios y líneas de producción.",
    longDescription:
      "Desde modelos de banco de 15 pulgadas hasta sistemas industriales de gran escala. Las máquinas Kemet están equipadas con controles digitales de presión, velocidad y tiempo para garantizar resultados micrométricos.",
    features: [
      "Interfaz PLC avanzada",
      "Control de planicidad automático",
      "Construcción robusta",
      "Soporte técnico global",
    ],
    category: "Equipamiento",
  },
  {
    id: "rectificadora-valvulas",
    image:
      "/productos-kemet/Lapeado-de-diamante-y-precision/grinding-gate-check-safety-control-valves-gate-valve-wedges.webp",
    title: "Rectificadora de válvulas portátil",
    description:
      "Soluciones móviles para el mantenimiento in situ de asientos de válvulas.",
    longDescription:
      "Diseñadas para reparaciones rápidas en plantas industriales y barcos. Estas máquinas permiten rectificar y lapear asientos de válvulas sin necesidad de desmontar la tubería, reduciendo drásticamente el tiempo de inactividad.",
    features: [
      "Diseño ligero y modular",
      "Alta precisión en sitio",
      "Fácil configuración",
      "Adaptable a múltiples diámetros",
    ],
    category: "Mantenimiento",
  },
  {
    id: "fluidos-lubricantes",
    image:
      "/productos-kemet/Lapeado-de-diamante-y-precision/lubricating-fluids.webp",
    title: "Fluidos lubricantes",
    description:
      "Fluidos especializados para controlar la fricción y la temperatura en el lapeado.",
    longDescription:
      "Los fluidos de lapeado Kemet prolongan la vida útil del diamante y la placa. Ayudan a eliminar los residuos del corte y a mantener la superficie de trabajo fría para evitar distorsiones térmicas.",
    features: [
      "Propiedades anticorrosivas",
      "Enfriamiento eficiente",
      "Base agua o aceite",
      "Seguridad operativa",
    ],
    category: "Químicos",
  },
];

export default function IngenieriaDePrecisionYHerramientas() {
  const [activeTab, setActiveTab] = useState(KEMET_PRODUCTS[0]);

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <CabeceraSection
        title="Lapeado de diamante y precisión"
        subtitle="Soluciones avanzadas en diamante y tecnología de superficies para la industria global."
        backgroundImageUrl="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2000"
        height="h-[480px] md:h-[560px]"
      />

      <main className="max-w-7xl mx-auto px-6 py-16 flex flex-col lg:flex-row gap-16">
        {/* Sidebar de Categorías (Izquierda) */}
        <aside className="lg:w-1/4">
          <div className="sticky top-28">
            <h2 className="text-sm font-bold text-slate-900 uppercase tracking-widest mb-8 border-l-4 border-slate-900 pl-4">
              Lapeado de Diamante
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
