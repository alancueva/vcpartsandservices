import DynamicImageGridSection from "@/components/section/inicio/DynamicImageGridSection";

const IMAGENES_DIESEL = [
  { src: "/productos/PRODUCTOS-DIESEL1.png", alt: "Pistones y anillos" },
  { src: "/productos/PRODUCTOS-DIESEL2.png", alt: "Bloque de culata" },
  { src: "/productos/PRODUCTOS-DIESEL3.png", alt: "Cigüeñal y bielas" },
  { src: "/productos/PRODUCTOS-DIESEL4.png", alt: "Válvulas" },
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
