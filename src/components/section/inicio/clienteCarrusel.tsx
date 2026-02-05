"use client";
import Image from "next/image";

// --- Datos de Clientes ---
const CLIENT_LOGOS = [
  { src: "/clientes/bd-instruments.png", alt: "Logo BD Instruments" },
  { src: "/clientes/ingemmet.png", alt: "Logo INGEMMET" },
  { src: "/clientes/petroperu.png", alt: "Logo Petroperú" },
  { src: "/clientes/confipetrol.png", alt: "Logo Confipetrol" },
  { src: "/clientes/proinman.png", alt: "Logo PROINMAN S.A.C." },
  { src: "/clientes/copeinca.png", alt: "Logo Copeinca" },
  { src: "/clientes/BCR.jpg", alt: "Logo bcr" },
  // Para garantizar el efecto infinito, duplicamos los logos
  { src: "/clientes/bd-instruments.png", alt: "Logo BD Instruments" },
  { src: "/clientes/ingemmet.png", alt: "Logo INGEMMET" },
  { src: "/clientes/petroperu.png", alt: "Logo Petroperú" },
  { src: "/clientes/confipetrol.png", alt: "Logo Confipetrol" },
  { src: "/clientes/proinman.png", alt: "Logo PROINMAN S.A.C." },
  { src: "/clientes/copeinca.png", alt: "Logo Copeinca" },
  { src: "/clientes/BCR.jpg", alt: "Logo bcr" },
];

const ClientesCarrusel = () => {
  return (
    <section className="py-16 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Título Profesional y Minimalista */}
        <h2 className="text-3xl font-extrabold text-gray-800 tracking-tight sm:text-4xl mb-4">
          Algunos de{" "}
          <span className="text-red-600 italic font-serif">
            Nuestros Clientes
          </span>
        </h2>
        <div className="w-12 h-1 bg-red-600 mx-auto mb-12 rounded"></div>

        {/* --- Carrusel Dinámico (Animación CSS) --- */}
        <div className="relative overflow-hidden w-full max-w-full">
          <style jsx>{`
            @keyframes scroll {
              0% {
                transform: translateX(0);
              }
              100% {
                /* Desplaza el 50% del ancho del contenedor (duplicado) */
                transform: translateX(-50%);
              }
            }
            .logo-track {
              display: flex;
              width: fit-content; /* Asegura que el contenedor sea lo suficientemente ancho para todos los logos */
              animation: scroll 30s linear infinite; /* Animación de deslizamiento */
              /* Pausa la animación al pasar el ratón para ser intuitivo */
              animation-play-state: running;
            }
            .logo-track:hover {
              animation-play-state: paused;
            }
            .logo-item {
              display: flex;
              align-items: center;
              justify-content: center;
              padding: 0 1.5rem; /* Espacio horizontal */
              min-width: 12rem; /* Ancho mínimo por logo */
            }
          `}</style>

          <div className="logo-track">
            {CLIENT_LOGOS.map((logo, index) => (
              <div key={index} className="logo-item">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={150}
                  height={60}
                  className="object-contain filter  transition duration-500"
                />
              </div>
            ))}
          </div>
        </div>
        {/* FIN del Carrusel Dinámico */}
      </div>
    </section>
  );
};

export default ClientesCarrusel;
