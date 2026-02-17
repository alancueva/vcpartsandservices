"use client";
import CabeceraSection from "@/components/section/products/cabecera.section";
import CatalogSection from "@/components/section/products/CatalogSection";

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
    fichaTecnica:
      "https://www.kemet.co.uk/products/flatlapping/kemet-lapping-plates",
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
    fichaTecnica:
      "https://www.kemet.co.uk/products/diamond-products/diamond-compound-paste",
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
    fichaTecnica:
      "https://www.kemet.co.uk/products/metallography/diamond-suspension-for-metallography",
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
    fichaTecnica:
      "https://www.kemet.co.uk/products/diamond-products/liquid-diamond-slurry",
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
    fichaTecnica:
      "https://www.kemet.co.uk/products/flatlapping/diamond-lapping-machines",
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
    fichaTecnica: "https://www.kemet.co.uk/products/valve-grinding",
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
    fichaTecnica:
      "https://www.kemet.co.uk/products/diamond-products/lubricating-fluid",
  },
];

export default function IngenieriaDePrecisionYHerramientas() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <CabeceraSection
        title="Lapeado de diamante y precisión"
        subtitle="Soluciones avanzadas en diamante y tecnología de superficies para la industria global."
        backgroundImageUrl="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2000"
        height="h-[480px] md:h-[560px]"
      />

      <CatalogSection products={KEMET_PRODUCTS} />
    </div>
  );
}
