import DynamicImageGridSection from '@/components/section/DynamicImageGridSection';


const IMAGENES_DIESEL = [
    { src: "/productos/PRODUCTOS-INYECCION1.png", alt: "imagen 1" },
    { src: "/productos/PRODUCTOS-INYECCION2.png", alt: "imagen 2" },
    { src: "/productos/PRODUCTOS-INYECCION3.png", alt: "imagen 3" }
];

const dieselDescription = [
    "Cuando hablamos de inyección de combustible, estamos hablando de altos niveles de precisión, donde las tolerancias se expresan en micrones (1/1,000 milímetros). Las nuevas tecnologías han dado lugar a la introducción de mayores volúmenes de aire de combustión sobrealimentado, mayor relación de compresión y, por supuesto, presiones de inyección más altas y consistentes.",
    "Es por ello que todos nuestros productos provienen de los fabricantes más reconocidos a nivel mundial como: L’ORANGE, BOSCH, WOODWARD, DUAP, OMT, etc.",
    <p key="final" className="font-semibold text-gray-700">Garantizamos ajuste y función óptimos para el máximo rendimiento y confiabilidad de sus equipos.</p>
];


export default function sistemaInyeccion() {
    return (
        <div className="font-sans space-y-20">

            <DynamicImageGridSection
                title="Sistema de"
                highlightedWord="Inyección"
                description={dieselDescription}
                images={IMAGENES_DIESEL}
            /> 
        </div>
    );

}