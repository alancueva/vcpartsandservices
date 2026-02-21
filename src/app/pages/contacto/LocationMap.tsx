import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

// === 1. DEFINICIÓN DE TIPOS ===

interface LocationInfo {
  address: string;
  phone: string;
  email: string;
  // URL del mapa de Google Maps para incrustar (iframe)
  mapIframeUrl: string;
}

interface LocationMapProps {
  info: LocationInfo;
}

// === 2. CONSTANTES DE ESTILO ===

const ACCENT_COLOR = "bg-red-800";
const ACCENT_TEXT = "text-red-800";

// === 3. COMPONENTE PRINCIPAL ===

const LocationMap: React.FC<LocationMapProps> = ({ info }) => {
  return (
    <section className="py-12 md:py-14 bg-gray-50 font-sans min-h-screen flex items-center justify-center">
      <div className="max-w-7xl w-full mx-auto px-3 sm:px-5 lg:px-7  -mt-12">
        {/* TÍTULO PRINCIPAL */}
        <header className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">
            Nuestra Ubicación
            <span className={`italic font-serif ${ACCENT_TEXT} ml-2`}>
              y Contacto
            </span>
          </h2>
          {/* Línea de acento vinotinto */}
          <div
            className={`w-12 h-1 ${ACCENT_COLOR} mx-auto rounded-full mt-2`}
          ></div>
        </header>

        {/* CONTENIDO (Mapa y Datos) */}
        <div className="bg-white rounded-3xl shadow-2xs overflow-hidden border border-gray-100">
          {/* FILA SUPERIOR: CONTACTO RESUMIDO (Estilo de tarjetas) */}
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200">
            {/* 1. Dirección */}
            <div className="p-6 md:p-8 flex flex-col items-center text-center space-y-2">
              <MapPin className={`w-8 h-8 ${ACCENT_TEXT}`} />
              <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mt-2">
                Dirección
              </h4>
              <p className="text-gray-800 text-lg font-medium">
                {info.address}
              </p>
            </div>

            {/* 2. Teléfono */}
            <div className="p-6 md:p-8 flex flex-col items-center text-center space-y-2">
              <Phone className={`w-8 h-8 ${ACCENT_TEXT}`} />
              <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mt-2">
                Teléfono
              </h4>
              <a
                href={`tel:${info.phone.replace(/\s/g, "")}`}
                className="text-gray-800 text-lg font-medium hover:text-red-700 transition duration-150"
              >
                {info.phone}
              </a>
            </div>

            {/* 3. Correo */}
            <div className="p-6 md:p-8 flex flex-col items-center text-center space-y-2">
              <Mail className={`w-8 h-8 ${ACCENT_TEXT}`} />
              <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mt-2">
                Correo Electrónico
              </h4>
              <a
                href={`mailto:${info.email}`}
                className="text-gray-800 text-lg font-medium hover:text-red-700 transition duration-150"
              >
                {info.email}
              </a>
            </div>
          </div>

          {/* FILA INFERIOR: MAPA INTERACTIVO */}
          <div
            className="relative w-full overflow-hidden"
            style={{ paddingTop: "56.25%" /* 16:9 Aspect Ratio */ }}
          >
            <iframe
              src={info.mapIframeUrl}
              className="absolute top-0 left-0 w-full h-full border-0"
              allowFullScreen={false} // Se mantiene en false para no cubrir toda la pantalla
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación de la Empresa"
            ></iframe>
          </div>
        </div>

        {/* Nota para el usuario */}
        <p className="mt-8 text-center text-sm text-gray-500">
          Para obtener una vista interactiva o indicaciones, haga clic en el
          mapa.
        </p>
      </div>
    </section>
  );
};

export default LocationMap;
