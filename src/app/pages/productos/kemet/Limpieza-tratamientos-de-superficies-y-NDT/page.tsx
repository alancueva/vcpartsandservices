"use client";
import { useState } from "react";
import CabeceraSection from "@/components/section/products/cabecera.section";
import { Info } from "lucide-react";

const KEMET_PRODUCTS = [
  {
    id: "limpieza-disolventes-vacio",
    image:
      "/productos-kemet/Limpieza-tratamientos-de-superficies-y-NDT/Single-Chamber-Cleaning.webp",
    title: "Limpieza con disolventes al vacío",
    description:
      "Sistemas de limpieza herméticos que utilizan tecnología de vacío para una desengrasado profundo.",
    longDescription:
      "Equipos diseñados para la limpieza de piezas complejas donde los disolventes al vacío aseguran la eliminación de contaminantes en cavidades ciegas sin dejar residuos.",
    features: [
      "Cero emisiones al ambiente",
      "Secado ultrarrápido",
      "Bajo consumo de solvente",
    ],
    category: "Limpieza Avanzada",
  },
  {
    id: "limpieza-disolventes-vapor",
    image:
      "/productos-kemet/Limpieza-tratamientos-de-superficies-y-NDT/vapour-cleaning-with-solvents.webp",
    title: "Limpieza con disolventes de vapor",
    description:
      "Desengrasado por vapor de alta eficiencia para eliminar aceites y ceras.",
    longDescription:
      "Proceso de limpieza química donde el vapor del solvente se condensa sobre la pieza fría, arrastrando la suciedad de forma pura y constante.",
    features: [
      "Limpieza de precisión",
      "Eficaz con grasas pesadas",
      "Ciclos cortos",
    ],
    category: "Limpieza Avanzada",
  },
  {
    id: "liquidos-penetrantes",
    image:
      "/productos-kemet/Limpieza-tratamientos-de-superficies-y-NDT/fluorescent-penetrant-inspection-fpi.webp",
    title: "Prueba de líquidos penetrantes",
    description:
      "Ensayos no destructivos (NDT) para detectar discontinuidades superficiales.",
    longDescription:
      "Línea completa de tintes penetrantes, reveladores y limpiadores diseñados para revelar grietas y porosidad en materiales no porosos.",
    features: [
      "Alta sensibilidad",
      "Fácil interpretación",
      "Cumple normas aeroespaciales",
    ],
    category: "NDT",
  },
  {
    id: "limpieza-ultrasonica",
    image:
      "/productos-kemet/Limpieza-tratamientos-de-superficies-y-NDT/mould-die-tool-cleaning.webp",
    title: "Limpieza ultrasónica",
    description:
      "Tanques ultrasónicos de alta potencia para cavitación de precisión.",
    longDescription:
      "Utiliza ondas sonoras de alta frecuencia para crear burbujas microscópicas que implosionan, eliminando suciedad de las superficies más difíciles de alcanzar.",
    features: [
      "Acción de limpieza 360°",
      "Control de temperatura",
      "Tanques de acero inoxidable",
    ],
    category: "Sistemas de Lavado",
  },
  {
    id: "lavadoras-aspersion",
    image:
      "/productos-kemet/Limpieza-tratamientos-de-superficies-y-NDT/spray-washer.webp",
    title: "Lavadoras por aspersión",
    description:
      "Sistemas de lavado acuoso automático mediante chorros a presión.",
    longDescription:
      "Máquinas de lavado por spray diseñadas para piezas voluminosas o grandes lotes de producción, utilizando detergentes biodegradables a base de agua.",
    features: [
      "Alta productividad",
      "Proceso automático",
      "Ecológicamente seguro",
    ],
    category: "Sistemas de Lavado",
  },
  {
    id: "pasivacion",
    image:
      "/productos-kemet/Limpieza-tratamientos-de-superficies-y-NDT/cleaning-mechanical-precision-parts.webp",
    title: "Pasivación",
    description:
      "Tratamientos químicos para aumentar la resistencia a la corrosión del acero inoxidable.",
    longDescription:
      "Procesos diseñados para eliminar el hierro libre de la superficie y formar una capa de óxido protectora, garantizando la longevidad de las piezas metálicas.",
    features: [
      "Mejora de vida útil",
      "Acabado uniforme",
      "Cumple norma ASTM A967",
    ],
    category: "Tratamiento de Superficies",
  },
];

export default function IngenieriaDePrecisionYHerramientas() {
  const [activeTab, setActiveTab] = useState(KEMET_PRODUCTS[0]);

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <CabeceraSection
        title="Limpieza y NDT"
        subtitle="Tecnologías de limpieza industrial, tratamientos de superficie y ensayos no destructivos."
        backgroundImageUrl="https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?auto=format&fit=crop&q=80&w=2000"
        height="h-[480px] md:h-[560px]"
      />

      <main className="max-w-7xl mx-auto px-6 py-16 flex flex-col lg:flex-row gap-16">
        {/* Sidebar de Categorías (Izquierda) */}
        <aside className="lg:w-1/4">
          <div className="sticky top-28">
            <h2 className="text-sm font-bold text-slate-900 uppercase tracking-widest mb-8 border-l-4 border-slate-900 pl-4">
              Sistemas de Limpieza
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
