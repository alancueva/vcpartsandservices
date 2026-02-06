import React from "react";
import Image from "next/image";

// Interfaz para definir la estructura de cada imagen
interface ImageItem {
  src: string;
  alt: string;
}

// Interfaz para las propiedades del componente reutilizable
interface DynamicImageGridSectionProps {
  title: string;
  highlightedWord: string; // La palabra o frase que se muestra en color diferente/cursiva
  description: (string | React.ReactNode)[]; // Puede ser un array de strings o nodos JSX
  images: ImageItem[];
  highlightColor?: string; // Color de Tailwind para la palabra resaltada (ej: 'text-red-600')
}

const DynamicImageGridSection: React.FC<DynamicImageGridSectionProps> = ({
  title,
  highlightedWord,
  description,
  images,
  highlightColor = "text-red-600", // Color rojo por defecto
}) => {
  // Función para determinar las clases de grid basadas en el número de imágenes
  const getGridClasses = (count: number): string => {
    // Por defecto: 1 columna en móvil
    let classes = "grid grid-cols-1 gap-6 mt-12";

    if (count === 1) {
      // Si solo hay 1, centrarla y limitar ancho
      classes += " max-w-xl mx-auto";
    } else if (count === 2) {
      // 2 imágenes: 2 columnas en md+, y centrar el bloque para mejor estética
      classes += " md:grid-cols-2 lg:max-w-4xl lg:mx-auto";
    } else if (count === 3) {
      // 3 imágenes: 3 columnas en md+
      classes += " md:grid-cols-3";
    } else if (count >= 4) {
      // 4 o más: 4 columnas en lg, 2 en md
      classes += " md:grid-cols-2 lg:grid-cols-4";
    }

    return classes;
  };

  const gridClasses = getGridClasses(images.length);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Título y Subtítulo Dinámicos */}
        <header className="mb-12">
          <h2 className="text-5xl font-extrabold text-gray-900 tracking-tight mb-2">
            {title}{" "}
            <span className={`italic font-serif ${highlightColor}`}>
              {highlightedWord}
            </span>
          </h2>
          {/* Línea decorativa que toma el color del resalte */}
          <div
            className={`w-16 h-1 ${highlightColor.replace("text-", "bg-")} mx-auto rounded`}
          ></div>
        </header>

        {/* Texto Descriptivo Dinámico */}
        <div className="max-w-4xl mx-auto text-lg text-gray-600 space-y-3 mb-12">
          {description.map((paragraph, index) => (
            // Utilizamos React.Fragment ya que paragraph puede ser string o ReactNode
            <React.Fragment key={index}>{paragraph}</React.Fragment>
          ))}
        </div>

        {/* Contenedor de Imágenes Dinámico (Grid Adaptable) */}
        {images.length > 0 ? (
          <div className={gridClasses}>
            {images.map((image, index) => (
              <div
                key={index}
                className="p-3 border-2 border-gray-200 rounded-xl shadow-lg
                                           hover:shadow-2xl hover:border-red-500 transition duration-300 ease-in-out
                                           group overflow-hidden"
              >
                <div className="relative w-full aspect-square overflow-hidden rounded-lg">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={500}
                    height={500}
                    className="object-cover w-full h-full transform transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="mt-8 text-xl text-gray-500 italic">
            No hay elementos visuales para esta sección.
          </p>
        )}
      </div>
    </section>
  );
};

export default DynamicImageGridSection;
