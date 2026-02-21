import React from "react";
import {
  Shield,
  Handshake,
  ThumbsUp,
  CheckSquare,
  TrendingUp,
  Leaf,
} from "lucide-react";

// === 1. CONSTANTES DE ESTILO Y DATOS ===

const ACCENT_TEXT = "text-red-800"; // Texto de acento vinotinto
const ACCENT_BG_LIGHT = "bg-red-50"; // Fondo muy claro para el efecto de hover
const FONT_SERIF_ITALIC = "italic font-serif";

// Definición de los valores
const VALUES_DATA = [
  {
    icon: Shield,
    title: "Seguridad",
    description:
      "Desarrollamos todas nuestras actividades de manera segura, protegiendo a nuestros colaboradores y activos.",
  },
  {
    icon: Handshake,
    title: "Confianza",
    description:
      "Construimos relaciones de confianza, somos sinceros, auténticos y solidarios con nuestros clientes y equipo.",
  },
  {
    icon: ThumbsUp,
    title: "Excelencia",
    description:
      "Buscamos ser los mejores en lo que hacemos, comprometiéndonos con la mejora continua de la calidad.",
  },
  {
    icon: CheckSquare,
    title: "Integridad",
    description:
      "Actuamos con absoluta honestidad, transparencia y respeto en todas nuestras operaciones comerciales.",
  },
  {
    icon: TrendingUp,
    title: "Compromiso",
    description:
      "Cumplimos con todo aquello en lo que nos comprometemos. Somos perseverantes y dedicados.",
  },
  {
    icon: Leaf,
    title: "Responsabilidad",
    description:
      "Respetamos a todos nuestros grupos de interés y somos social y ambientalmente responsables.",
  },
];

// === 2. COMPONENTE PARA UNA TARJETA DE VALOR ===

interface ValueCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
}

const ValueCard: React.FC<ValueCardProps> = ({
  icon: Icon,
  title,
  description,
}) => (
  // Estilo minimalista: bordes sutiles, hover elegante
  <div
    className={`p-6 md:p-8 border border-gray-200 rounded-xl transition-all duration-300 transform hover:shadow-lg ${ACCENT_BG_LIGHT} text-center h-full`}
  >
    {/* ÍCONO */}
    <div className="flex justify-center mb-4">
      <Icon className={`w-10 h-10 ${ACCENT_TEXT}`} strokeWidth={1.5} />
    </div>

    {/* TÍTULO */}
    <h3 className={`text-xl font-bold text-gray-900 mb-2 ${ACCENT_TEXT}`}>
      {title}
    </h3>

    {/* DESCRIPCIÓN */}
    <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
  </div>
);

export default function NuestrosValores() {
  return (
    <section className="py-10 md:py-12 bg-white font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* TÍTULO PRINCIPAL */}
        <header className="text-center mb-10">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">
            Nuestros
            <span className={`${FONT_SERIF_ITALIC} ${ACCENT_TEXT} ml-2`}>
              Valores
            </span>
          </h2>
          {/* Línea de acento vinotinto */}
          <div className="w-12 h-1 bg-red-700 mx-auto rounded-full mt-2"></div>
        </header>

        {/* CUADRÍCULA DE VALORES (3x2) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {VALUES_DATA.map((value, index) => (
            <ValueCard
              key={index}
              icon={value.icon}
              title={value.title}
              description={value.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
