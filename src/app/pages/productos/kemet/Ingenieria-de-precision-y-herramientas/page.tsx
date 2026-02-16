"use client";
import { useState } from "react";
import CabeceraSection from "@/components/section/products/cabecera.section";
import { Info } from "lucide-react";

const KEMET_PRODUCTS = [
  {
    id: "desbarbado-cnc",
    image:
      "/productos-kemet/Ingenieria-de-precision-y-herramientas/cnc-deburring-wheels-after-milling.webp",
    title: "Desbarbado CNC",
    description:
      "Sistemas automatizados para la eliminación de rebabas en procesos de mecanizado.",
    longDescription:
      "Herramientas de desbarbado integrables en centros de mecanizado CNC que permiten automatizar la limpieza de bordes, reduciendo tiempos de ciclo y mejorando la uniformidad.",
    features: [
      "Integración total en CNC",
      "Alta repetibilidad",
      "Compensación de desgaste",
    ],
    category: "Automatización",
  },
  {
    id: "soldadura",
    image:
      "/productos-kemet/Ingenieria-de-precision-y-herramientas/welding-system.webp",
    title: "Soldadura",
    description:
      "Equipos de micro-soldadura para reparación de moldes y troqueles.",
    longDescription:
      "Sistemas de soldadura láser o por arco pulsado especializados en la reparación precisa de superficies dañadas sin afectar la integridad térmica de la pieza.",
    features: ["Bajo aporte de calor", "Precisión quirúrgica", "Fácil manejo"],
    category: "Reparación",
  },
  {
    id: "pulido-ultrasonico",
    image:
      "/productos-kemet/Ingenieria-de-precision-y-herramientas/ultrasonic-grinding.webp",
    title: "Pulido ultrasónico",
    description:
      "Sistemas de pulido asistido por ultrasonidos para cavidades profundas.",
    longDescription:
      "Equipos que combinan la potencia de las ondas ultrasónicas con herramientas abrasivas para pulir áreas de difícil acceso en moldes y piezas de ingeniería.",
    features: [
      "Alta velocidad de acabado",
      "Reduce fatiga del operador",
      "Control digital",
    ],
    category: "Acabado Manual",
  },
  {
    id: "herramientas-nsk",
    image:
      "/productos-kemet/Ingenieria-de-precision-y-herramientas/nsk-hand-tools.webp",
    title: "Herramientas NSK",
    description:
      "Motores y husillos neumáticos y eléctricos de alta velocidad.",
    longDescription:
      "Distribución oficial de sistemas NSK Nakanishi, reconocidos mundialmente por su precisión, mínima vibración y altísimas revoluciones por minuto.",
    features: ["Hasta 160,000 RPM", "Diseño ergonómico", "Alta durabilidad"],
    category: "Sistemas Motrices",
  },
  {
    id: "marcado-laser",
    image:
      "/productos-kemet/Ingenieria-de-precision-y-herramientas/laser-marking-metal.webp",
    title: "Marcado láser",
    description:
      "Sistemas de trazabilidad y grabado permanente mediante fibra láser.",
    longDescription:
      "Soluciones de marcado láser para codificación, logotipos y trazabilidad en todo tipo de metales y polímeros industriales.",
    features: ["Grabado indeleble", "Alta velocidad", "Software intuitivo"],
    category: "Identificación",
  },
  {
    id: "lapeado-helicoidal",
    image:
      "/productos-kemet/Ingenieria-de-precision-y-herramientas/internal-lapping-tools-for-barrel-finishing.webp",
    title: "Lapeado helicoidal",
    description:
      "Sistemas para el lapeado de diámetros interiores con alta precisión.",
    longDescription:
      "Herramientas expansibles y helicoidales diseñadas para lograr tolerancias geométricas extremas en orificios y cilindros.",
    features: ["Control de expansión", "Geometría perfecta", "Larga vida útil"],
    category: "Mecanizado",
  },
  {
    id: "herramientas-diprofil",
    image:
      "/productos-kemet/Ingenieria-de-precision-y-herramientas/diprofil-hand-tools.webp",
    title: "Herramientas Diprofil",
    description:
      "Máquinas limadoras y pulidoras de vaivén para artesanos industriales.",
    longDescription:
      "Sistemas de movimiento alternativo clásicos para el ajuste y pulido de moldes, troqueles y piezas complejas que requieren un toque humano.",
    features: ["Carrera ajustable", "Robustez sueca", "Versatilidad abrasiva"],
    category: "Ajuste Manual",
  },
  {
    id: "piedras-pulido",
    image:
      "/productos-kemet/Ingenieria-de-precision-y-herramientas/gesswein-abrasive-stones.webp",
    title: "Piedras de pulido",
    description: "Amplia gama de piedras abrasivas para acabado de moldes.",
    longDescription:
      "Selección de piedras de óxido de aluminio y carburo de silicio con diferentes aglutinantes para cada tipo de acero o aplicación industrial.",
    features: ["Grano consistente", "Uso seco o con aceite", "Varios perfiles"],
    category: "Consumibles",
  },
];

export default function IngenieriaDePrecisionYHerramientas() {
  const [activeTab, setActiveTab] = useState(KEMET_PRODUCTS[0]);

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <CabeceraSection
        title="Ingeniería de precisión y herramientas"
        subtitle="Herramientas de precisión y sistemas de ingeniería para acabados de alta exigencia."
        backgroundImageUrl="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=2000"
        height="h-[480px] md:h-[560px]"
      />

      <main className="max-w-7xl mx-auto px-6 py-16 flex flex-col lg:flex-row gap-16">
        {/* Sidebar de Categorías (Izquierda) */}
        <aside className="lg:w-1/4">
          <div className="sticky top-28">
            <h2 className="text-sm font-bold text-slate-900 uppercase tracking-widest mb-8 border-l-4 border-slate-900 pl-4">
              Explorar Catálogo
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
