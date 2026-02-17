"use client";
import CabeceraSection from "@/components/section/products/cabecera.section";
import CatalogSection from "@/components/section/products/CatalogSection";

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
    fichaTecnica:
      "https://www.kemet.co.uk/products/cleaning/vacuum-solvent-cleaning-machines",
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
    fichaTecnica:
      "https://www.kemet.co.uk/blog/cleaning/vapour-degreasing-alternative",
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
    fichaTecnica:
      "https://www.kemet.co.uk/products/cleaning/fluorescent-penetrant-inspection",
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
    fichaTecnica: "https://www.kemet.co.uk/products/cleaning",
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
    fichaTecnica: "https://www.kemet.co.uk/products/cleaning/spray-washers",
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
    fichaTecnica:
      "https://www.kemet.co.uk/products/cleaning/passivation-ultrasonic-cleaner-automatic-line",
  },
];

export default function IngenieriaDePrecisionYHerramientas() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <CabeceraSection
        title="Limpieza y NDT"
        subtitle="Tecnologías de limpieza industrial, tratamientos de superficie y ensayos no destructivos."
        backgroundImageUrl="https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?auto=format&fit=crop&q=80&w=2000"
        height="h-[480px] md:h-[560px]"
      />

      <CatalogSection products={KEMET_PRODUCTS} />
    </div>
  );
}
