import React from "react";
import { CheckCircle2 } from "lucide-react";

// === 1. CONSTANTES DE ESTILO Y DATOS ===

const ACCENT_COLOR = "bg-red-700";
const ACCENT_TEXT = "text-red-700";
const FONT_SERIF_ITALIC = "italic font-serif";

// Valores fundamentales de la empresa
const CORE_VALUES = [
  { id: 1, label: "Seguridad" },
  { id: 2, label: "Confianza" },
  { id: 3, label: "Excelencia" },
  { id: 4, label: "Integridad" },
  { id: 5, label: "Compromiso" },
  { id: 6, label: "Responsabilidad" },
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

export default function AboutUsSection() {
  return (
    <section className="py-20 md:py-32 bg-white font-sans overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* TÍTULO PRINCIPAL */}
        <header className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">
            Quiénes
            <span className={` ${FONT_SERIF_ITALIC} ${ACCENT_TEXT} ml-2`}>
              Somos
            </span>
          </h2>
          {/* Línea de acento vinotinto */}
          <div
            className={`w-12 h-1 ${ACCENT_COLOR} mx-auto rounded-full mt-2`}
          ></div>
        </header>

        {/* CONTENIDO (Diseño Asimétrico en 2 Columnas) */}
        <div className="text-center space-y-8">
          {/* COLUMNA DERECHA: TEXTO Y VALORES */}
          <div className="space-y-6">
            <h3
              className={`text-2xl font-bold uppercase tracking-wider ${ACCENT_TEXT}`}
            >
              La Empresa
            </h3>

            <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Somos una empresa{" "}
              <span className="font-bold text-gray-800">100% peruana</span>{" "}
              conformada por profesionales de amplia experiencia en
              mantenimiento de equipos industriales, suministrando bienes y
              servicios con los más altos estándares de calidad, enfocados
              siempre en mejorar la operatividad y rentabilidad de los clientes
              que confían en nosotros.
            </p>

            <div className="relative py-4">
              <div
                className="absolute inset-0 flex items-center"
                aria-hidden="true"
              >
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center">
                <span className="bg-white px-3 text-gray-400">
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M13 6l6 6-6 6M5 6l6 6-6 6" />
                  </svg>
                </span>
              </div>
            </div>

            <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto italic">
              <span className="font-semibold text-gray-800 not-italic">
                VC Parts and Services
              </span>{" "}
              se especializa en el suministro de piezas de repuestos para
              diferentes equipos mecánicos y eléctricos, como motores de
              combustión diésel, generadores eléctricos, cajas de engranajes,
              separadores de aceite y petróleo, compresores, bombas,
              intercambiadores de calor, filtros, acoplamientos, componentes
              electrónicos, etc.
            </p>

            {/* Bloque de Valores */}
            <div className="pt-12">
              <h3 className="text-xl font-bold text-gray-900 mb-8 border-b-2 border-red-100 inline-block pb-2">
                Nuestros Valores Fundamentales
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {CORE_VALUES.map((value) => (
                  <ValueBlock key={value.id} value={value} />
                ))}
              </div>
            </div>

            {/* Compromiso final */}
            <p className="text-xl font-bold text-gray-800 italic">
              &ldquo;Estamos comprometidos con el mejoramiento continuo de los
              procesos.&rdquo;
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
