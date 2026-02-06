import { Metadata } from "next";
import DynamicImageGridSection from "@/components/section/inicio/DynamicImageGridSection";

export const metadata: Metadata = {
  title: "Repuestos para Motores Diesel",
  description: "Repuestos de la más alta calidad para motores diésel, MDO, HFO y Gas Natural. Suministramos pistones, culatas, válvulas, asientos y más para el máximo rendimiento de sus equipos.",
  keywords: [
    "repuestos motores diesel",
    "pistones diesel",
    "culatas diesel",
    "válvulas diesel",
    "asientos válvulas",
    "cigüeñal",
    "bielas",
    "motores MDO",
    "motores HFO",
    "motores gas natural",
    "repuestos industriales Perú",
    "VC Parts and Services"
  ],
  openGraph: {
    title: "Repuestos para Motores Diesel | VC Parts and Services",
    description: "Repuestos de alta calidad para motores diésel, MDO, HFO y Gas Natural. Componentes críticos para el máximo rendimiento.",
    url: "https://www.vcpartsandservices.com/pages/productos/repuestos-motores-diesel",
    images: [
      {
        url: "/productos/PRODUCTOS-DIESEL1.png",
        width: 1200,
        height: 630,
        alt: "Repuestos para motores diesel",
      },
    ],
  },
};

const IMAGENES_DIESEL = [
  { src: "/productos/PRODUCTOS-DIESEL1.png", alt: "Pistones y anillos para motores diesel" },
  { src: "/productos/PRODUCTOS-DIESEL2.png", alt: "Bloque de culata para motores diesel" },
  { src: "/productos/PRODUCTOS-DIESEL3.png", alt: "Cigüeñal y bielas para motores diesel" },
  { src: "/productos/PRODUCTOS-DIESEL4.png", alt: "Válvulas para motores diesel" },
];

const dieselDescription = [
  "Repuestos de la más alta calidad para una amplia gama de aplicaciones, incluyendo diésel, MDO, HFO, Gas Natural, etc.",
  "Nuestros clientes pueden confiar en nosotros para suministrarles componentes críticos como pistones, culatas, válvulas, asientos, etc.",
  <p key="final" className="font-semibold text-gray-700">
    Garantizamos ajuste y función óptimos para el máximo rendimiento y
    confiabilidad de sus equipos.
  </p>,
];

export default function repuestosMonotoresDiesel() {
  return (
    <div className="font-sans space-y-20">
      <DynamicImageGridSection
        title="Repuestos para"
        highlightedWord="motores Diesel"
        description={dieselDescription}
        images={IMAGENES_DIESEL}
      />
    </div>
  );
}
