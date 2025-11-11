import React from 'react';
import Image from 'next/image';

// Definición de colores base en Tailwind (simulando los tonos vinotintos/corporativos)
const COLOR_PRIMARY = 'text-red-700'; // Color principal para acentos
const BG_ACCENT = 'bg-red-700';       // Fondo para la línea de acento
const BORDER_HOVER = 'border-red-600'; // Borde al pasar el ratón
const TEXT_ACCENT = 'text-red-600';     // Texto resaltado

// Interfaz para un ítem de producto (puede ser equipo o consumible)
interface ProductItem {
    src: string;
    alt: string;
    label: string;
    isTallImage?: boolean; // Para manejar las imágenes de equipos que son más anchas
}

// Datos de la Sección 1: Equipos de Lapeado (Máquinas)
const EQUIPMENT_DATA: ProductItem[] = [
    {
        // Usamos un color corporativo para el placeholder del Equipo (ej: Vinotinto/Rojo oscuro)
        src: `/productos/PRODUCTOS-LAPEADO1.png`,
        alt: "Máquina de Lapeado Plano",
        label: "Lapeado Plano",
        isTallImage: true
    },
    {
        src: `/productos/PRODUCTOS-LAPEADO2.png`,
        alt: "Máquina de Lapeado Esférico",
        label: "Lapeado Esférico",
        isTallImage: true
    },
];

// Datos de la Sección 2: Kits Portátiles
const PORTABLE_KITS_DATA: ProductItem[] = [
    {
        // Usamos un color corporativo diferente para los Kits (ej: Un rojo más brillante)
        src: `/productos/PRODUCTOS-LAPEADOMANUAL1.png`,
        alt: "Kit Portátil para Lapeado Manual 1",
        label: "Lapeado Plano",
        isTallImage: true
    },
    {
        src: `/productos/PRODUCTOS-LAPEADOMANUAL2.png`,
        alt: "Kit Portátil para Lapeado Manual 2",
        label: "Lapeado Esférico",
        isTallImage: true
    },
];

// Datos de la Sección 3: Consumibles de Lapeado
const CONSUMABLES_DATA: ProductItem[] = [
    { src: `/productos/PRODUCTOS-DIAMENTELIQUIDO.jpg`, alt: "Diamante Líquido", label: "Diamante Líquido" },
    { src: `/productos/PRODUCTOS-FLUIDOSLUBRICANTES.jpg`, alt: "Fluidos Lubricantes", label: "Fluidos Lubricantes" },
    { src: `/productos/PRODUCTOS-MATERIALCOMPUESTO.jpg`, alt: "Material Compuesto", label: "Material Compuesto" },
    { src: `/productos/PRODUCTOS-DISCOSDEPULIDO.jpg`, alt: "Discos de Pulido", label: "Discos de Pulido" },
    { src: `/productos/PRODUCTOS-PRODUCTOSABRASIVOS.jpg`, alt: "Productos Abrasivos", label: "Productos Abrasivos" },
    { src: `/productos/PRODUCTOS-PORTAPIEZAS.jpg`, alt: "Film de Lapeado", label: "Film de Lapeado" },
    { src: `/productos/PRODUCTOS-FILMDELAPEADO.jpg`, alt: "Desbaste con Diamante", label: "Desbaste con Diamante" },
    { src: `/productos/PRODUCTOS-DESBASTECONDIAMANTE.jpg`, alt: "Portapiezas y Dispositivos", label: "Portapiezas y Dispositivos" },
];

/**
 * Componente funcional para renderizar una cuadrícula de productos.
 */
const ProductGrid: React.FC<{ items: ProductItem[], title: string, gridCols: string }> = ({ items, title, gridCols }) => {
    return (
        <div className="mt-12">
            <h3 className="text-xl font-semibold text-gray-700 tracking-wider mb-6 text-left border-l-4 border-red-600 pl-3 uppercase">
                {title}
            </h3>
            <div className={`grid grid-cols-2 md:grid-cols-3 ${gridCols} gap-6`}>
                {items.map((item, index) => (
                    <div
                        key={index}
                        className={`flex flex-col items-center justify-start p-3 bg-white rounded-xl 
                                   shadow-lg border border-gray-200 hover:${BORDER_HOVER} 
                                   transition duration-300 ease-in-out cursor-pointer`}
                    >
                        <div
                            className={`w-full ${item.isTallImage ? 'h-48' : 'h-36'} relative overflow-hidden rounded-lg mb-3 border border-gray-300 flex items-center justify-center`}
                        >
                            {/* En un proyecto real de Next.js, usaríamos <Image> */}
                            <Image
                                src={item.src}
                                alt={item.alt}
                                width={500}
                                height={500}
                                className="object-contain w-full h-full  p-2"
                                loading="lazy"
                            />
                        </div>
                        <p className={`text-sm text-center font-bold ${TEXT_ACCENT} mt-2`}>{item.label}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

// Componente Principal
const LappingEquipmentSection: React.FC = () => {
    return (
        <section className="py-20 bg-gray-50 font-sans">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* TÍTULO PRINCIPAL DE LA SECCIÓN (Con acento rojo/vinotinto) */}
                <header className="text-center mb-16">
                    <h2 className="text-5xl font-extrabold text-gray-900 tracking-tight mb-2">
                        Equipos de Lapeado de precisión y
                        <span className={`italic font-serif ${COLOR_PRIMARY}`}> consumibles</span>
                    </h2>
                    {/* Línea de acento vinotinto */}
                    <div className={`w-16 h-1 ${BG_ACCENT} mx-auto rounded-full mt-2`}></div>
                </header>

                {/* TEXTO DESCRIPTIVO */}
                <div className="max-w-4xl mx-auto text-lg text-gray-600 space-y-4 mb-16">
                    <p className="text-center">
                        <span className={`font-bold ${COLOR_PRIMARY}`}>VC PARTS AND SERVICES:</span> SOMOS ESPECIALISTAS EN LAPEADO Y PULIDO DE ALTA PRECISIÓN.
                    </p>
                    <p className="text-center">
                        Gracias a la tecnología avanzada de lapeado de KEMET, se ha desarrollado el método más eficiente y fiable de conseguir una geometría y un acabado precisos de superficies, ya sean éstas planas, contorneadas o esféricas.
                    </p>
                    <p className="text-center">
                        Ya sea en un taller o en campo, los productos KEMET permiten procesos de pulido más rápidos, óptima geometría y acabado de superficie, reducción importante de costes, mejor utilización del tiempo de máquina y operador, y condiciones ambientales más limpias.
                    </p>
                </div>

                {/* CONTENIDO DIVIDIDO EN SUBSECCIONES */}
                <div className="max-w-6xl mx-auto">
                    {/* 1. EQUIPOS DE LAPEADO DE PRECISIÓN (Máquinas) */}
                    <ProductGrid
                        items={EQUIPMENT_DATA}
                        title="EQUIPOS DE LAPEADO DE PRECISIÓN Y CONSUMIBLES"
                        gridCols="lg:grid-cols-2" // 2 columnas en desktop para las máquinas
                    />

                    {/* 2. KITS PORTÁTILES PARA LAPEADO MANUAL */}
                    <ProductGrid
                        items={PORTABLE_KITS_DATA}
                        title="KITS PORTÁTILES PARA LAPEADO MANUAL"
                        gridCols="lg:grid-cols-2" // 2 columnas en desktop para los kits
                    />

                    {/* 3. LAPEADO CONSUMIBLES */}
                    <ProductGrid
                        items={CONSUMABLES_DATA}
                        title="LAPEADO CONSUMIBLES"
                        gridCols="lg:grid-cols-4" // 4 columnas en desktop para los consumibles
                    />
                </div>
            </div>
        </section>
    );
};

export default LappingEquipmentSection;