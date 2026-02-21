// === 1. CONSTANTES DE ESTILO Y DATOS ===

const ACCENT_COLOR = "bg-red-800";
const ACCENT_TEXT = "text-red-800";
const FONT_SERIF_ITALIC = "italic font-serif";

// Contenido de la sección Quiénes Somos
const ABOUT_TEXT_1 =
  "Somos una empresa 100% peruana conformada por profesionales de amplia experiencia en mantenimiento de equipos industriales, suministrando bienes y servicios con los más altos estándares de calidad, enfocados siempre en mejorar la operatividad y rentabilidad de los clientes que confían en nosotros.";
const ABOUT_TEXT_2 =
  "VC Parts and Services se especializa en el suministro de piezas de repuestos para diferentes equipos mecánicos y eléctricos, como motores de combustión diésel, generadores eléctricos, cajas de engranajes, separadores de aceite y petróleo, compresores, bombas, intercambiadores de calor, filtros, acoplamientos, componentes electrónicos, etc.";
const QUALITY_STATEMENT =
  "Todas nuestras piezas provienen de reconocidos fabricantes OEM ubicados principalmente en EUROPA, los cuales cumplen con los más exigentes estándares de calidad. Estamos comprometidos con el mejoramiento continuo de los procesos.";

export default function QuienesSomos() {
  return (
    <section className="py-4 md:py-8  bg-gray-50 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto px-3 sm:px-5 lg:px-7">
        {/* TÍTULO PRINCIPAL */}
        <header className="text-center mb-10 mt-2">
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

        {/* CONTENIDO PRINCIPAL: Diseño Minimalista de Doble Columna */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          {/* COLUMNA 1: INTRODUCCIÓN Y EXPERIENCIA */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-gray-800 border-l-4 border-red-300 pl-4 mb-4">
              Liderazgo y Experiencia
            </h3>
            <p className="text-gray-600 leading-relaxed">{ABOUT_TEXT_1}</p>
            <p className="text-gray-600 leading-relaxed">{ABOUT_TEXT_2}</p>

            {/* Pequeño Separador Visual */}
            <div className={`w-16 h-0.5 ${ACCENT_COLOR} mt-6`}></div>
          </div>

          {/* COLUMNA 2: CALIDAD Y COMPROMISO (Bloque destacado) */}
          <div className="relative p-6 md:p-10 bg-white border border-gray-200 rounded-xl shadow-lg hover:shadow-xl transition duration-300">
            {/* Etiqueta de Acento Vinotinto */}
            <div
              className={`absolute -top-3 left-4 px-3 py-1 ${ACCENT_COLOR} text-white text-xs font-semibold uppercase tracking-wider rounded-full shadow-md`}
            >
              Calidad Global
            </div>

            <h3 className="text-2xl font-extrabold text-gray-900 mb-4 pt-4">
              Estándares y Suministro
            </h3>
            <p className="text-gray-700 leading-relaxed italic">
              {QUALITY_STATEMENT}
            </p>

            {/* Elemento de diseño serio (opcional) */}
            <div className="flex justify-end mt-6">
              <span className="text-sm font-light text-gray-500">
                VC Parts and Services
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
