import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import Image from 'next/image';


// === 1. CONSTANTES DE ESTILO Y DATOS ===

const ACCENT_COLOR = 'bg-red-700';
const ACCENT_TEXT = 'text-red-700';
const FONT_SERIF_ITALIC = 'italic font-serif';

// URL de las imágenes proporcionadas:
// 1. Imagen principal del generador/equipo industrial
const IMAGE_URL_1 = "/generador_gas_diesel.jpg"; // Placeholder for the generator image
// 2. Imagen de detalle mecánico
const IMAGE_URL_2 = "/turbo-compresor-1.jpg"; // Placeholder for the mechanical part

// Valores fundamentales de la empresa
const CORE_VALUES = [
    { id: 1, label: 'Seguridad' },
    { id: 2, label: 'Confianza' },
    { id: 3, label: 'Excelencia' },
    { id: 4, label: 'Integridad' },
    { id: 5, label: 'Compromiso' },
    { id: 6, label: 'Responsabilidad' },
];

// === 2. COMPONENTE INTERNO (Bloque de Valor) ===

interface ValueBlockProps {
    value: { id: number; label: string };
}

/**
 * Componente para mostrar un valor fundamental con un ícono y línea divisoria.
 */
const ValueBlock: React.FC<ValueBlockProps> = ({ value }) => (
    <div className="flex items-center space-x-3 py-2 border-b border-gray-200">
        <CheckCircle2 className={`w-5 h-5 ${ACCENT_TEXT} flex-shrink-0`} />
        <span className="text-gray-700 font-medium">{value.label}</span>
    </div>
);


// === 3. COMPONENTE PRINCIPAL ===

const AboutUsSection: React.FC = () => {
    return (
        <section className="py-20 md:py-32 bg-white font-sans overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* TÍTULO PRINCIPAL */}
                <header className="text-center mb-16">
                    <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">
                        Quiénes 
                        <span className={` ${FONT_SERIF_ITALIC} ${ACCENT_TEXT} ml-2`}>Somos</span>
                    </h2>
                    {/* Línea de acento vinotinto */}
                    <div className={`w-12 h-1 ${ACCENT_COLOR} mx-auto rounded-full mt-2`}></div>
                </header>

                {/* CONTENIDO (Diseño Asimétrico en 2 Columnas) */}
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
                    
                    {/* COLUMNA IZQUIERDA: IMÁGENES */}
                    <div className="lg:w-5/12 relative">
                        {/* Contenedor de la primera imagen con efecto de superposición */}
                        <div className="relative z-10 rounded-2xl shadow-2xl overflow-hidden transform transition duration-500 hover:scale-[1.01]">
                            <Image 
                                src={IMAGE_URL_1} 
                                alt="Generador Industrial y Equipos"
                                width={500}
                                height={500}
                                className="w-full h-72 object-cover object-center"
                                // onError={(e) => e.currentTarget.src = IMAGE_URL_1} // Fallback to placeholder
                            />
                        </div>
                        

                        {/* Contenedor de la segunda imagen (superpuesta en escritorio) */}
                        {/* <div className="hidden lg:block absolute -bottom-16 -left-16 w-3/5 h-auto z-0 rounded-2xl shadow-xl overflow-hidden border-4 border-white transform transition duration-500 hover:scale-[1.05]">
                            <Image 
                                src={IMAGE_URL_2} 
                                alt="Detalle de Componentes Mecánicos"
                                width={500}
                                height={500}
                                className="w-full h-auto object-cover"
                                // onError={(e) => e.currentTarget.src = IMAGE_URL_2} // Fallback to placeholder
                            />
                        </div> */}
                    </div>

                    {/* COLUMNA DERECHA: TEXTO Y VALORES */}
                    <div className="lg:w-7/12 mt-16 lg:mt-0">
                        
                        {/* Bloque de Introducción */}
                        <h3 className={`text-2xl font-bold mb-4 ${ACCENT_TEXT}`}>La Empresa</h3>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            Somos una empresa 100% peruana conformada por profesionales de amplia experiencia en mantenimiento de equipos industriales, suministrando bienes y servicios con los más altos estándares de calidad, enfocados siempre en mejorar la operatividad y rentabilidad de los clientes que confían en nosotros.
                        </p>
                        <p className="text-gray-600 mb-8 leading-relaxed border-l-4 border-red-200 pl-4">
                            VC Parts and Services se especializa en el suministro de piezas de repuestos para diferentes equipos mecánicos y eléctricos, como motores de combustión diésel, generadores eléctricos, cajas de engranajes, separadores de aceite y petróleo, compresores, bombas, intercambiadores de calor, filtros, acoplamientos, componentes electrónicos, etc.
                        </p>
                        
                        {/* Bloque de Valores */}
                        <div className="mt-8">
                            <h3 className="text-xl font-bold text-gray-800 mb-4">Nuestros Valores Fundamentales</h3>
                            <div className="grid grid-cols-2 gap-x-8 gap-y-2">
                                {CORE_VALUES.map(value => (
                                    <ValueBlock key={value.id} value={value} />
                                ))}
                            </div>
                        </div>

                        {/* Compromiso final */}
                        <p className="mt-8 text-lg font-semibold text-gray-700">
                            Estamos comprometidos con el mejoramiento continuo de los procesos.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default AboutUsSection;