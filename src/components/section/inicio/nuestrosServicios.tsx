import { Truck, Settings } from "lucide-react";
import Image from "next/image";

const ACCENT_COLOR = "bg-red-700";
const ACCENT_TEXT = "text-red-700";
const FONT_SERIF_ITALIC = "italic font-serif";

// Datos para las tarjetas (usaremos placeholders como ejemplo)
const SERVICE_CARDS = [
  {
    title: "Productos",
    subtitle: "Repuestos y Suministros Industriales",
    icon: Truck,
    description:
      "Proveemos repuestos originales y equipos de las principales marcas europeas para motores diésel, sistemas mecánicos y eléctricos, garantizando la máxima calidad y compatibilidad.",
    imageUrl: "/INDEX-PRODUCTOS.jpg", // Azul oscuro para motor
    linkText: "Ver Catálogo",
  },
  {
    title: "Servicios",
    subtitle: "Mantenimiento y Soluciones Técnicas",
    icon: Settings,
    description:
      "Ofrecemos servicios especializados de mantenimiento, lapeado y pulido de alta precisión, garantizando la optimización de sus equipos y la máxima rentabilidad operativa.",
    imageUrl: "/INDEX-SERVICIOS.jpg", // Rojo oscuro para laboratorio
    linkText: "Conocer Servicios",
  },
];

interface ServiceCardProps {
  title: string;
  subtitle: string;
  description: string;
  imageUrl: string;
  linkText: string;
  icon: React.ElementType;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  subtitle,
  description,
  imageUrl,
  linkText,
  icon: Icon,
}) => (
  <div className="flex flex-col rounded-xl overflow-hidden shadow-2xl bg-white border border-gray-100 transition-all duration-300 transform hover:scale-[1.01]">
    {/* IMAGEN / VISUAL */}
    <div className="relative h-64 overflow-hidden">
      <Image
        src={imageUrl}
        alt={`Imagen de ${title}`}
        width={500}
        height={500}
        className="w-full h-full object-cover"
      />
    </div>

    {/* CONTENIDO */}
    <div className="p-6 md:p-8 flex flex-col flex-grow">
      <h3
        className={`text-3xl font-extrabold text-gray-900 mb-1 ${ACCENT_TEXT}`}
      >
        {title}
      </h3>
      <p className="text-sm font-semibold text-gray-500 mb-4 uppercase tracking-wider">
        {subtitle}
      </p>

      <p className="text-gray-700 leading-relaxed flex-grow mb-8">
        {description}
      </p>
    </div>
  </div>
);

export default function NuestroServicios() {
  return (
    <section className="py-20 md:py-32 bg-gray-50 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* TÍTULO PRINCIPAL */}
        <header className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">
            Nuestros
            <span className={`${FONT_SERIF_ITALIC} ${ACCENT_TEXT} ml-2`}>
              Servicios
            </span>
          </h2>
          {/* Línea de acento vinotinto */}
          <div className="w-12 h-1 bg-red-700 mx-auto rounded-full mt-2"></div>
        </header>

        {/* CUADRÍCULA DE TARJETAS (2 COLUMNAS) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12">
          {SERVICE_CARDS.map((card, index) => (
            <ServiceCard
              key={index}
              title={card.title}
              subtitle={card.subtitle}
              description={card.description}
              imageUrl={card.imageUrl}
              linkText={card.linkText}
              icon={card.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
