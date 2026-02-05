import DynamicImageGridSection from "@/components/section/inicio/DynamicImageGridSection";

const IMAGENES = [
  { src: "/productos/PRODUCTOS-TURBOCOMPRESORES1.png", alt: "imagen 1" },
  { src: "/productos/PRODUCTOS-TURBOCOMPRESORES2.png", alt: "imagen 2" },
  { src: "/productos/PRODUCTOS-TURBOCOMPRESORES3.png", alt: "imagen 3" },
];

const Description = [
  "El turbocompresor es uno de los componentes más importantes del motor y necesita repuestos de calidad para lograr el rendimiento más eficaz y confiable. Todos los componentes que suministramos son verificados exhaustivamente en fábrica; se miden, se verifican y se empaquetan adecuadamente.",
  "VC Parts puede ofrecer todas las partes del turbocompresor, desde los componentes del turbocompresor más pequeños, como casquillos de sellado, juntas, juntas tóricas, hasta los componentes más grandes, como carcasas de entrada y salida de gas, rotor completo, cartuchos o incluso un turbocompresor completo.",
  <p key="final" className="font-semibold text-gray-700">
    Garantizamos ajuste y función óptimos para el máximo rendimiento y
    confiabilidad de sus equipos.
  </p>,
];

export default function turboCompresores() {
  return (
    <div className="font-sans space-y-20">
      <DynamicImageGridSection
        title="Turbocompresores"
        highlightedWord=""
        description={Description}
        images={IMAGENES}
      />
    </div>
  );
}
