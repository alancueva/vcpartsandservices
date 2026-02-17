"use client";
import CabeceraSection from "@/components/section/products/cabecera.section";
import CatalogSection from "@/components/section/products/CatalogSection";

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
    fichaTecnica: "https://www.kemet.co.uk/products/metallography/cutting",
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
    fichaTenica: "https://www.kemet.co.uk/products/metallography/mounting",
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
    fichaTecnica: "https://www.kemet.co.uk/products/metallography/grinding",
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
    fichaTecnica: "https://www.kemet.co.uk/products/metallography/polishing",
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
    fichaTecnica:
      "https://www.kemet.co.uk/products/metallography/portable-grinder-polisher",
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
    fichaTecnica: "https://www.kemet.co.uk/products/geology",
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
    fichaTecnica:
      "https://www.kemet.co.uk/products/spectroscopy-sample-preparation",
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
    fichaTecnica:
      "https://www.kemet.co.uk/products/metallography/hardness-testing-machines",
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
    fichaTecnica: "https://www.kemet.co.uk/products/metallography/microscopes",
  },
];

export default function IngenieriaDePrecisionYHerramientas() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <CabeceraSection
        title="Preparación de muestras metalográficas, geológicas y petrográficas"
        subtitle="Equipamiento especializado para análisis metalográfico, geológico y petrográfico."
        backgroundImageUrl="https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=2000"
        height="h-[480px] md:h-[560px]"
      />

      <CatalogSection products={KEMET_PRODUCTS} />
    </div>
  );
}
