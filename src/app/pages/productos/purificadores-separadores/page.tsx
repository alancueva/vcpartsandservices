
import DynamicImageGridSection from '@/components/section/DynamicImageGridSection';


const IMAGENES = [
    { src: "/productos/PRODUCTOS-PURIFICADORES1.png", alt: "imagen 1" },
    { src: "/productos/PRODUCTOS-PURIFICADORES2.png", alt: "imagen 2" }
];

const Description = [
    "Todos nuestros productos, completamente nuevos, tienen una garantía de 12 meses, o incluso más en algunos casos, y están 100% garantizados por fabricantes OEM (Original Equipment Manufacturer) que cumplen con todas las dimensiones, tolerancias y especificaciones de materiales. Simplemente algo en lo que pueden confiar.",
    // "VC Parts puede ofrecer todas las partes del turbocompresor, desde los componentes del turbocompresor más pequeños, como casquillos de sellado, juntas, juntas tóricas, hasta los componentes más grandes, como carcasas de entrada y salida de gas, rotor completo, cartuchos o incluso un turbocompresor completo.",
    <p key="final" className="font-semibold text-gray-700">¡No hay reemplazos dudosos en cuanto a la calidad!</p>
];


export default function purificadoresSeparadores() {

    return (
        <div className="font-sans space-y-20">

            <DynamicImageGridSection
                title="Purificadores / Separadores de"
                highlightedWord="aceite y petróleo"
                description={Description}
                images={IMAGENES}
            />
        </div>
    );
}