import React from 'react';
import { Target, Eye } from 'lucide-react'; // Iconos de Lucide React

// === 1. CONSTANTES DE ESTILO Y DATOS ===

const ACCENT_COLOR = 'bg-red-700';
const ACCENT_TEXT = 'text-red-700';
const ACCENT_TEXT_ICON = 'text-white';
const FONT_SERIF_ITALIC = 'italic font-serif';

// Datos de Misión y Visión
const MISSION_TEXT = "Brindar soluciones integrales en el suministro de bienes y servicios según las necesidades de nuestros clientes e incluso superando sus expectativas, bajo un enfoque de calidad y seguridad para nuestros clientes y colaboradores.";
const VISION_TEXT = "Ser el proveedor líder y de mayor confianza, suministrando bienes y brindando servicios en la industria en el Perú.";
const COMMITMENT_TEXT = "Estamos comprometidos con el mejoramiento continuo de los procesos, el cuidado y protección del medio ambiente, con el fin de lograr la diferenciación y el desarrollo socioeconómico sostenible de nuestra organización.";

interface PhilosophyCardProps {
    icon: React.ElementType; // Tipo para un componente de icono de Lucide
    title: string;
    description: string;
}

const PhilosophyCard: React.FC<PhilosophyCardProps> = ({ icon: Icon, title, description }) => (
    <div className="flex flex-col items-center text-center p-6 md:p-8 bg-white rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
        <div className={`flex items-center justify-center w-24 h-24 rounded-full ${ACCENT_COLOR} bg-opacity-10 mb-6`}>
            <Icon className={`w-12 h-12 ${ACCENT_TEXT_ICON}`} strokeWidth={1.5} />
        </div>
        <h3 className="text-2xl font-bold text-gray-800 mb-3">{title}</h3>
        <p className="text-gray-600 leading-relaxed text-base">{description}</p>
    </div>
);


export default function FilosofiaCorporativa() {
    return (
        <section className="py-20 md:py-32 bg-gray-50 font-sans overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* TÍTULO PRINCIPAL */}
                <header className="text-center mb-16">
                    <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">
                        Filosofía 
                        <span className={`${FONT_SERIF_ITALIC} ${ACCENT_TEXT} ml-2`}>Corporativa</span>
                    </h2>
                    {/* Línea de acento vinotinto */}
                    <div className={`w-12 h-1 ${ACCENT_COLOR} mx-auto rounded-full mt-2`}></div>
                </header>

                {/* CONTENIDO: Misión y Visión */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 mb-16">
                    <PhilosophyCard 
                        icon={Target} // Icono de Lucide para Misión
                        title="Misión"
                        description={MISSION_TEXT}
                    />
                    <PhilosophyCard 
                        icon={Eye} // Icono de Lucide para Visión
                        title="Visión"
                        description={VISION_TEXT}
                    />
                </div>

                {/* DECLARACIÓN DE COMPROMISO FINAL */}
                <div className="max-w-3xl mx-auto text-center p-8 bg-white rounded-xl shadow-inner border border-red-100">
                    <p className="text-lg font-semibold text-gray-700 leading-relaxed">
                        {COMMITMENT_TEXT}
                    </p>
                </div>

            </div>
        </section>
    );
}