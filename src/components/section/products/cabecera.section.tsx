interface HeroSectionProps {
  /** Título principal (grande) */
  title: string;

  /** Subtítulo o descripción */
  subtitle: string;

  /** URL de la imagen de fondo */
  backgroundImageUrl: string;

  /** Altura del hero (en píxeles o valor tailwind, ej: 'h-[500px]') */
  height?: string;

  /** Color de fondo fallback si falla la imagen */
  fallbackBgColor?: string;

  /** Clase adicional para personalizar el contenedor */
  className?: string;
}

export default function CabeceraSection({
  title,
  subtitle,
  backgroundImageUrl,
  height = "h-[400px]",
  fallbackBgColor = "bg-slate-900",
  className = "",
}: HeroSectionProps) {
  return (
    <div
      className={`min-h-screen bg-white font-sans text-slate-900 ${className}`}
    >
      <header
        className={`relative ${height} flex items-center justify-center overflow-hidden ${fallbackBgColor}`}
      >
        {/* Imagen de fondo + overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={backgroundImageUrl}
            alt={title}
            className="w-full h-full object-cover opacity-40"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/10"></div>
        </div>

        {/* Contenido principal */}
        <div className="relative z-20 text-center px-5 sm:px-8 md:px-12 max-w-6xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-5 md:mb-6 tracking-tight leading-tight">
            {title}
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-slate-200 max-w-3xl mx-auto leading-relaxed opacity-95">
            {subtitle}
          </p>
        </div>
      </header>
    </div>
  );
}
