'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import { Factory, Wrench, Car, Rocket } from 'lucide-react'; // Iconos de Lucide React

// --- Interfaz de Datos ---

interface Producto {
    src: string;
    alt: string;
    caption: string; // Título o descripción del producto
}

interface Industria {
    id: string;
    title: string;
    icon: React.ElementType;
    description: string[]; // Lista de productos o aplicaciones
    relatedProducts: Producto[]; // Imágenes de productos relacionados
}

// --- Datos de Contenido ---

const INDUSTRIAS: Industria[] = [
    {
        id: 'moldes',
        title: 'Moldes y Matrices',
        icon: Factory, // Usando Factory como ícono industrial
        description: [
            'Moldes e insertos',
            'Planchas de impresión',
            'Cuchillas de corte',
            'Matrices de extrusión',
        ],
        relatedProducts: [
            { src: '/industrias/kemet/INDUSTRIAS-PLACAMETALICA.jpg', alt: 'Placa metálica pulida', caption: 'Placa metálica' },
            { src: '/industrias/kemet/INDUSTRIAS-SELLOSMECANICOS.jpg', alt: 'Sellos mecánicos en lapeado', caption: 'Sellos Mecánicos' },
            { src: '/industrias/kemet/INDUSTRIAS-MOLDES.jpg', alt: 'Detalle interior de moldes de precisión', caption: 'Moldes de precisión' },
        ],
    },
    {
        id: 'bombas',
        title: 'Bombas y Válvulas',
        icon: Wrench, // Usando Wrench para aplicaciones mecánicas
        description: [
            'Bombas de combustible',
            'Bombas hidráulicas',
            'Cierres mecánicos',
            'Válvulas de compuerta',
        ],
        relatedProducts: [
            { src: '/industrias/kemet/INDUSTRIAS-COMPONENTESHIDRAULICOS.jpg', alt: 'Componentes hidráulicos en reparación', caption: 'Componentes hidráulicos' },
            { src: '/industrias/kemet/INDUSTRIAS-COMPONENTESHIDRAULICOS2.jpg', alt: 'Detalle de uniones hidráulicas', caption: 'Componentes hidráulicos' },
            { src: '/industrias/kemet/INDUSTRIAS-VALVULAS.jpg', alt: 'Válvulas ensambladas de gran tamaño', caption: 'Válvulas' },
        ],
    },
    {
        id: 'automocion',
        title: 'Automoción',
        icon: Car, // Usando Car para automoción
        description: [
            'Inyectores diésel',
            'Iniciadores airbag',
            'Anillos de pistón',
            'Bombas combustible',
        ],
        relatedProducts: [
            { src: '/industrias/kemet/INDUSTRIAS-PIEZA-ANTESDELAPEAR.jpg', alt: 'Pieza antes de lapear', caption: 'Pieza antes de lapear' },
            { src: '/industrias/kemet/INDUSTRIAS-PIEZA-10MIN.jpg', alt: 'Picaduras después de 10 min de lapeado', caption: 'Después de 10 min de lapeado' },
            { src: '/industrias/kemet/INDUSTRIAS-PIEZA-20MIN.jpg', alt: 'Resultado final de lapeado (2 bandas luz)', caption: 'Luego de 20 min (2 bandas luz)' },
        ],
    },
    {
        id: 'aeroespacial',
        title: 'Aeroespacial',
        icon: Rocket, // Usando Rocket para aeroespacial
        description: [
            'Bombas y válvulas',
            'Piezas de turbina',
            'Ensamblado del motor',
            'Espaciadores',
        ],
        relatedProducts: [
            { src: '/industrias/kemet/INDUSTRIAS-MATRICES.jpg', alt: 'Matrices de extrusión', caption: 'Matrices de extrusión' },
            //   { src: '/industrias/kemet/componentes-aeroespacial-2.jpg', alt: 'Matrices lapeadas y pulidas', caption: 'Matrices' },
            // { src: '/industrias/kemet/INDUSTRIAS-VALVULAS.jpg', alt: 'Detalle de piezas mecanizadas', caption: 'Piezas de precisión' },
        ],
    },
];

const IndustriasYProductos: React.FC = () => {
    // Estado para la pestaña activa
    const [activeTab, setActiveTab] = useState<string>(INDUSTRIAS[0].id);

    // Encontrar los datos de la pestaña activa
    const activeData = INDUSTRIAS.find(ind => ind.id === activeTab) || INDUSTRIAS[0];

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

                {/* Título de la Sección */}
                <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl mb-2">
                    Industrias que utilizan los <span className="text-red-600 italic font-serif">productos KEMET</span>
                </h2>

                {/* Separador Minimalista */}
                <div className="w-16 h-1 bg-red-600 mx-auto mb-16 rounded"></div>

                {/* --- 1. Pestañas de Industrias (Responsive) --- */}
                <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4 mb-16">
                    {INDUSTRIAS.map((industria) => (
                        <button
                            key={industria.id}
                            onClick={() => setActiveTab(industria.id)}
                            className={`
                flex flex-col items-center p-4 rounded-xl transition duration-300 w-full md:w-1/4
                ${activeTab === industria.id
                                    ? 'bg-red-600 text-white shadow-lg transform scale-105' // Activo
                                    : 'bg-gray-100 text-gray-700 hover:bg-red-100 hover:text-red-600' // Inactivo
                                }
              `}
                        >
                            <industria.icon size={28} className="mb-2" />
                            <span className="font-bold text-lg">{industria.title}</span>
                        </button>
                    ))}
                </div>

                {/* --- 2. Contenido de la Pestaña Activa --- */}
                <div className="text-left py-8">
                    {/* Contenedor principal con transición sutil */}
                    <div className="bg-white p-6 border border-gray-200 rounded-xl shadow-lg transition-opacity duration-500">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">

                            {/* Columna de Aplicaciones (Lista) */}
                            <div>
                                <h3 className="text-2xl font-bold text-red-600 mb-4 border-b pb-2">
                                    Aplicaciones Clave
                                </h3>
                                <ul className="space-y-3 text-gray-700 list-inside">
                                    {activeData.description.map((item, idx) => (
                                        <li key={idx} className="flex items-start">
                                            {/* Icono discreto de flecha (Lucide) */}
                                            <span className="text-red-500 font-extrabold mr-2">&bull;</span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                                <p className="mt-6 text-sm italic text-gray-500">
                                    Resultados obtenidos con precisiones de hasta 1 banda luz*.
                                </p>
                            </div>

                            {/* Columna de Productos Relacionados (Imágenes/Resultados) */}
                            <div>
                                <h3 className="text-2xl font-bold text-red-600 mb-4 border-b pb-2">
                                    Resultados y Productos
                                </h3>
                                <div className="grid grid-cols-3 gap-4">
                                    {activeData.relatedProducts.map((product, idx) => (
                                        <div key={idx} className="relative group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                                            <Image
                                                src={product.src}
                                                alt={product.alt}
                                                width={500}
                                                height={500}
                                                className="w-full h-32 object-cover"
                                            // onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => { 
                                            //     const target = e.target as HTMLImageElement;
                                            //     target.onerror = null; 
                                            //     target.src = 'https://placehold.co/150x128/999999/FFFFFF?text=No+Img'; 
                                            // }}
                                            />
                                            <div className="absolute inset-0 bg-black/40 bg-opacity-40 flex items-end justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                <p className="text-white text-xs font-semibold p-1.5 text-center">
                                                    {product.caption}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                {/* Leyenda de la Banda Luz */}
                <p className="mt-8 text-sm text-gray-500 text-center">
                    *1 banda luz equivale a 11.6 millonésimas de pulgada.
                </p>

            </div>
        </section>
    );
};

export default IndustriasYProductos;