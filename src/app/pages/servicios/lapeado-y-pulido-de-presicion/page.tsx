
import Image from 'next/image';
import { CheckCircle2, Factory, Layers3, Clock } from 'lucide-react';

// Interfaz para tipificar los beneficios
interface Beneficio {
    id: number;
    icon: React.ElementType; // Tipo para los íconos de Lucide React
    text: string;
}

// Lista de beneficios basada en tu contenido original, simplificada para agilidad visual
const BENEFICIOS: Beneficio[] = [
    { id: 1, icon: Clock, text: "Reducción significativa de costes de lapeado." },
    { id: 2, icon: Factory, text: "Condiciones ambientales más limpias." },
    { id: 3, icon: CheckCircle2, text: "Reducción de requisitos de inspección." },
    { id: 4, icon: Layers3, text: "Una única operación de acabado de superficie." },
    { id: 5, icon: Clock, text: "Funcionamiento semicualificado." },
    { id: 6, icon: CheckCircle2, text: "Eliminación del material más rápida." },
    { id: 7, icon: Factory, text: "Proceso de pulido más rápido y menos rechazos." },
    { id: 8, icon: Layers3, text: "Geometría y acabado de superficies óptimos." },
    { id: 9, icon: CheckCircle2, text: "Limpieza del producto más fácil y optimización del tiempo de máquina." },
];

// Datos para la galería comparativa
interface GaleriaItem {
    id: number;
    src: string;
    description: string;
}

const GALERIA: GaleriaItem[] = [
    { id: 1, src: '/servicios/LAPEADODEPRECISION1.jpg', description: 'Pieza antes del lapeado.' },
    { id: 2, src: '/servicios/LAPEADODEPRECISION2.jpg', description: 'Después de 10 min de lapeado: aún se pueden ver algunas picaduras.' },
    // { id: 3, src: '/images/pieza_despues_lapeado.jpg', description: 'Luego de 20 min: la mayoría de picaduras han desaparecido y se logró una planitud de 2 bandas luz (0.58 μm).' },
];

export default function LapeadoPrecisionPage(){
    return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Título Central */}
        <header className="text-center mb-12">
          <h2 className="text-5xl font-extrabold text-gray-900 tracking-tight mb-2">
            Lapeado y pulido de <span className="text-red-600 italic font-serif">precisión</span>
          </h2>
          <div className="w-16 h-1 bg-red-600 mx-auto rounded"></div>
        </header>

        {/* Bloque de Introducción y Definición */}
        <div className="text-lg text-gray-700 space-y-6 mb-16">
          <p>
            El lapeado es una operación de superacabado con abrasivo, mediante la que se consigue una exactitud dimensional extrema y un acabado superficial muy fino (<span className="font-semibold">Ra 0.16 μm</span>).
          </p>
          <p>
            El lapeado se realiza &quot;frotando&quot; la superficie a terminar con una placa y una fina capa de partículas abrasivas suspendidas (éstas se hallan en un líquido viscoso, aceite soluble, aceite mineral o grasas). Como la eliminación de material es muy pequeña, los trabajos que han de ser lapeados deben terminarse previamente a medidas muy cercanas a las finales (entre <span className="font-semibold">0.020 y 0.005 mm</span>).
          </p>
          <p>
            La lapeadora consta de una mesa rotativa llamada placa de lapear, que es la que se encarga de &quot;frotar&quot; la pasta abrasiva sobre las piezas. Dicha placa puede ser de diferentes materiales en función de la calidad a conseguir: hierro, cobre, cerámica, estaño o estaño/plomo y también dependiendo de que se quiera una calidad más basta o más fina.
          </p>
          <p className="font-semibold text-gray-800 border-l-4 border-red-600 pl-4 py-2 bg-red-50/50">
             Ofrecemos una gama completa de sistemas de lapeado y pulido para la industria, con capacidad de desarrollar máquinas especiales para aplicaciones específicas.
          </p>
        </div>
        
        {/* Bloque de Beneficios (Checklist Ágil) */}
        <div className="mb-16">
            <h3 className="text-3xl font-bold text-gray-800 mb-6 text-center md:text-left">
                Ventajas de la avanzada tecnología de lapeado
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {BENEFICIOS.map((beneficio) => (
                    <div key={beneficio.id} className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition">
                        <beneficio.icon className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                        <p className="text-gray-700 text-sm leading-relaxed">{beneficio.text}</p>
                    </div>
                ))}
            </div>
        </div>

        {/* Galería de Resultados Comparativos (Grid de 3) */}
        <div className="mb-8">
            <h3 className="text-3xl font-bold text-gray-800 mb-6 text-center">
                Resultados de lapeado en acción
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {GALERIA.map((item) => (
                    <div key={item.id} className="bg-white rounded-lg overflow-hidden shadow-xl border border-gray-200">
                         {/* IMPORTANTE PARA NEXT.JS: 
                          Usar el componente <Image /> de Next.js.
                        */}
                        <Image 
                            src={item.src} 
                            alt={item.description}
                            width={600}
                            height={400} 
                            className="w-full h-60 object-cover" 
                            // onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => { 
                            //     const target = e.target as HTMLImageElement;
                            //     target.onerror = null; 
                            //     target.src = 'https://placehold.co/600x400/eeeeee/333333?text=Foto'; 
                            // }}
                        />
                        {/* <div className="p-4 text-center">
                            <p className="text-sm text-gray-600 italic leading-snug">
                                {item.description}
                            </p>
                        </div> */}
                    </div>
                ))}
            </div>
             {/* <p className="text-xs text-right mt-4 text-gray-500">
                *1 banda luz = 11.6 millonésimas de pulgada
            </p> */}
        </div>

      </div>
    </section>
  );
}