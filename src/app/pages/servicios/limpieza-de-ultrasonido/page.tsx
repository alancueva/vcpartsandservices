
import { Metadata } from "next";
import { Leaf, Clock, DollarSign, Zap, Settings, ShieldCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: "Limpieza por Ultrasonido",
  description: "Servicio profesional de limpieza por ultrasonido para componentes industriales. Método eficiente que ahorra tiempo y dinero, con limpieza total y sostenibilidad.",
  keywords: [
    "limpieza por ultrasonido",
    "limpieza industrial",
    "limpieza de componentes",
    "sistemas de limpieza",
    "limpieza eficiente",
    "ahorro tiempo limpieza",
    "limpieza sostenible",
    "automatización limpieza",
    "Kemet ultrasonido",
    "servicios industriales Perú",
    "VC Parts and Services"
  ],
  openGraph: {
    title: "Limpieza por Ultrasonido | VC Parts and Services",
    description: "Servicio profesional de limpieza por ultrasonido. Método eficiente que ahorra tiempo y dinero con limpieza total y sostenibilidad.",
    url: "https://www.vcpartsandservices.com/pages/servicios/limpieza-de-ultrasonido",
    images: [
      {
        url: "/servicios/LAPEADODEPRECISION1.jpg",
        width: 1200,
        height: 630,
        alt: "Limpieza por ultrasonido",
      },
    ],
  },
};

// Interfaz para tipificar los beneficios
interface Beneficio {
    id: number;
    icon: React.ElementType; // Tipo para los íconos de Lucide React
    title: string;
    description: string;
}

// Lista de beneficios basada en tu contenido, reestructurada en una cuadrícula compacta
const BENEFICIOS_ULTRASONIDO: Beneficio[] = [
    {
        id: 1,
        icon: Zap,
        title: "Materiales como nuevos",
        description: "La limpieza por ultrasonidos limpia toda la superficie sin dañar y sin dejar rastros de suciedad en ninguna de las posibles cavidades."
    },
    {
        id: 2,
        icon: DollarSign,
        title: "Ahorro de dinero",
        description: "Menor consumo de electricidad y de productos de limpieza, que la forma tradicional."
    },
    {
        id: 3,
        icon: Clock,
        title: "Ahorro de tiempo",
        description: "Se acabó perder el tiempo raspando y cepillando sin conseguir buenos resultados. Los sistemas de limpieza por ultrasonidos son hasta un 80% más rápidos."
    },
    {
        id: 4,
        icon: Leaf,
        title: "Sostenibilidad",
        description: "Utilizamos unos sistemas de limpieza con una menor (pero más eficiente) concentración de detergente que en la limpieza convencional."
    },
    {
        id: 5,
        icon: ShieldCheck,
        title: "Limpieza total",
        description: "La limpieza por ultrasonidos se adapta a todo tipo de superficies geométricas, sin importar su tamaño ni su complejidad, para ser procesadas eficazmente."
    },
    {
        id: 6,
        icon: Settings,
        title: "Automatización del sistema",
        description: "Los ciclos de limpieza pueden ser automatizados, no tendrá que estar pendiente de lograr la máxima eficiencia. Esto será repetitivo y trazable."
    },
];


export default function LimpiezaUltrasonido() {
    return (
        <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Título Central */}
                <header className="text-center mb-12">
                    <h2 className="text-5xl font-extrabold text-gray-900 tracking-tight mb-2">
                        Limpieza por <span className="text-red-600 italic font-serif">ultrasonido</span>
                    </h2>
                    <div className="w-16 h-1 bg-red-600 mx-auto rounded"></div>
                    <p className="max-w-3xl mx-auto mt-4 text-lg text-gray-600">
                        Este método de limpieza aporta una serie de ventajas y beneficios que repercuten directamente en la optimización de la producción.
                    </p>
                </header>

                {/* Bloque de Beneficios (Grid de 3 x 2) */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {BENEFICIOS_ULTRASONIDO.map((beneficio) => (
                        <div
                            key={beneficio.id}
                            className="p-6 bg-white rounded-xl shadow-lg border border-gray-100 
                               hover:shadow-2xl hover:border-red-400 transition duration-300"
                        >
                            <div className="flex flex-col items-center text-center">
                                {/* Ícono Profesional con color corporativo */}
                                <div className="p-4 mb-4 rounded-full bg-red-100 text-red-600">
                                    <beneficio.icon className="w-8 h-8" />
                                </div>

                                {/* Título Conciso */}
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{beneficio.title}</h3>

                                {/* Descripción Ágil */}
                                <p className="text-sm text-gray-600 leading-relaxed">{beneficio.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Sección del Video (opcional, pero mantiene el flujo del contenido original) */}
                <div className="mt-16 text-center">
                    <h3 className="text-3xl font-bold text-gray-800 mb-6">
                        Vea nuestro equipo Kemet en acción
                    </h3>
                    {/* Contenedor responsivo para el iframe del video (simulando YouTube) */}
                    <div className="max-w-3xl mx-auto">
                        <div className="relative" style={{ paddingBottom: '56.25%', height: 0 }}>
                            {/* Placeholder de Iframe para un video embebido (simulación) */}
                            <iframe
                                title="Ultrasonic Cleaners - Kemet Bench-top"
                                src="https://www.youtube.com/embed/UcpacqC7qWs" // URL corregida para incrustar videos
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className="absolute top-0 left-0 w-full h-full rounded-xl shadow-2xl border-4 border-red-600"
                            ></iframe>
                        </div>
                        <p className="mt-4 text-sm text-gray-500">
                            Video de demostración del equipo Ultrasonic Cleaners Kemet Bench-top.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );

}