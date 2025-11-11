
import Image from 'next/image';


interface Marca {
    id: number;
    src: string;
    alt: string;
}
const MARCAS_LOGOS: Marca[] = [
    { id: 1, src: '/marcas/MARCAS-1.png', alt: 'Logo Sperre' },
    { id: 2, src: '/marcas/MARCAS-2.png', alt: 'Logo Gardner Denver' },
    { id: 3, src: '/marcas/MARCAS-3.png', alt: 'Logo Hatlapa Marine Equipment' },
    { id: 4, src: '/marcas/MARCAS-4.png', alt: 'Logo Selwood' },
    { id: 5, src: '/marcas/MARCAS-5.png', alt: 'Logo WSK International' },
    { id: 6, src: '/marcas/MARCAS-6.png', alt: 'Logo MaK' },
    { id: 7, src: '/marcas/MARCAS-7.png', alt: 'Logo IMO Pump' },
    { id: 8, src: '/marcas/MARCAS-8.png', alt: 'Logo MANN+HUMMEL' },
    { id: 9, src: '/marcas/MARCAS-9.png', alt: 'Logo Stenflex' },
    { id: 10, src: '/marcas/MARCAS-10.png', alt: 'Logo Kemet' },
    { id: 11, src: '/marcas/MARCAS-11.png', alt: 'Logo BOLLFILTER' },
    { id: 12, src: '/marcas/MARCAS-12.png', alt: 'Logo Ingersoll Rand' },
    { id: 13, src: '/marcas/MARCAS-13.png', alt: 'Logo Basler Electric' },
    { id: 14, src: '/marcas/MARCAS-14.png', alt: 'Logo Mitsubishi Electric' },
    { id: 15, src: '/marcas/MARCAS-15.png', alt: 'Logo Vestas Aircoil' },
    { id: 16, src: '/marcas/MARCAS-16.png', alt: 'Logo ABB' },
    { id: 17, src: '/marcas/MARCAS-17.png', alt: 'Logo DMT' },
    { id: 18, src: '/marcas/MARCAS-18.png', alt: 'Logo Woodward' },
    { id: 19, src: '/marcas/MARCAS-19.png', alt: 'Logo Bollhoff' },
    { id: 20, src: '/marcas/MARCAS-20.png', alt: 'Logo DUAP' },
    { id: 21, src: '/marcas/MARCAS-21.png', alt: 'Logo Bosch' },
    { id: 22, src: '/marcas/MARCAS-22.png', alt: 'Logo Kelvion' },
    { id: 23, src: '/marcas/MARCAS-23.png', alt: 'Logo Barksdale Control Products' },
];
export default function MarcasPage() {

    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

                {/* Título y descripción de la Sección */}
                <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl mb-2">
                    Principales <span className="text-red-600 italic font-serif">Marcas</span>
                </h2>
                <div className="w-16 h-1 bg-red-600 mx-auto mb-6 rounded"></div>
                <p className="max-w-3xl mx-auto text-gray-600 mb-12">
                    EL UNIVERSO DE SOLUCIONES EN SUMINISTROS QUE PODEMOS BRINDAR A NUESTROS CLIENTES ES TAN AMPLIO QUE NO PODRÍAMOS RESUMIRLO EN UNA SOLA LISTA. Sin embargo, aquí le presentamos una selección de las marcas líderes con las que trabajamos, garantizando calidad y disponibilidad en sus repuestos y equipos.
                </p>

                {/* --- Grid de Logos Responsivo y Minimalista --- */}
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6 md:gap-8 justify-items-center">
                    {MARCAS_LOGOS.map((marca) => (
                        <div
                            key={marca.id}
                            className="p-3 w-full h-20 flex items-center justify-center 
                         rounded-lg border border-gray-200 shadow-sm 
                         hover:shadow-md hover:border-red-400 transition duration-300"
                        >
                            {/* Uso de <img> con clases de estilo profesional */}
                            <Image
                                src={marca.src}
                                alt={marca.alt}
                                width={150}
                                height={60}
                                // H-full y object-contain aseguran que el logo quepa bien   grayscale opacity-85
                                className="h-full w-full object-contain filter  hover:grayscale-0 hover:opacity-100 transition duration-500"
                            // Fallback si la imagen no se carga
                            // onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                            //     const target = e.target as HTMLImageElement;
                            //     target.onerror = null;
                            //     target.src = 'https://placehold.co/120x50/cccccc/444444?text=Logo';
                            // }}
                            />
                        </div>
                    ))}
                </div>
                {/* FIN del Grid de Logos */}

                {/* Cierre o llamada a la acción (opcional) */}
                <p className="mt-12 text-lg text-gray-700">
                    Contáctenos para consultar disponibilidad y precios de estas y muchas otras marcas.
                </p>

            </div>
        </section>
    );
}