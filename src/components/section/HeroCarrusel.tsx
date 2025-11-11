'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Circle } from 'lucide-react'; // Iconos de Lucide React
import Image from 'next/image';

// --- Datos del Carrusel ---
// Usaremos la imagen subida como primer slide y placeholders profesionales para los demás.
const SLIDES = [
    {
        id: 1,
        image: "/index-banner.jpg", // Placeholder para la imagen de tuberías y válvulas
        alt: 'Mantenimiento y Suministro de Equipos Industriales',
        title: 'Mantenimiento y Suministro de Equipos Industriales',
        subtitle: 'Soluciones integrales para la eficiencia de su planta.',
    },
    {
        id: 2,
        image: "/intercambiadores-ionicos.jpg",
        alt: 'Innovación y Tecnología en Repuestos',
        title: 'Innovación y Tecnología',
        subtitle: 'Repuestos de última generación para optimizar su rendimiento.',
    },
    {
        id: 3,
        image: "/control-agua.jpg",
        alt: 'Gran Stock y Logística Rápida',
        title: 'Stock Inmediato y Logística Rápida',
        subtitle: 'Disponibilidad que reduce sus tiempos de inactividad.',
    },
    {
        id: 4,
        image: "/intercambiadores-ionicos.jpg",
        alt: 'Compromiso con la Calidad',
        title: 'Compromiso con la Calidad',
        subtitle: 'Máxima fiabilidad en cada producto que entregamos.',
    },
];

const AUTO_SLIDE_INTERVAL = 5000; // 5 segundos

const HeroCarousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    // Función para pasar al siguiente slide
    const nextSlide = useCallback(() => {
        setCurrentSlide((prev) => (prev === SLIDES.length - 1 ? 0 : prev + 1));
    }, []);

    // Función para ir al slide anterior
    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? SLIDES.length - 1 : prev - 1));
    };

    // Efecto para el cambio automático de slides
    useEffect(() => {
        const slideInterval = setInterval(nextSlide, AUTO_SLIDE_INTERVAL);
        // Limpieza del intervalo al desmontar el componente
        return () => clearInterval(slideInterval);
    }, [nextSlide]);

    return (
        <div className="relative w-full h-screen overflow-hidden">
            {/* --- Contenedor de Slides --- */}
            <div
                className="flex h-full transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
                {SLIDES.map((slide) => (
                    <div key={slide.id} className="w-full flex-shrink-0 relative">
                        {/* Imagen de Fondo (Usando <img> con object-cover para mejor manejo en Next.js, aunque el estilo con div y bg-cover también funciona) */}
                        {/* Nota: Usamos <img> aquí para mayor compatibilidad con Next.js Image Component si decides usarlo luego */}
                        <Image
                            src={slide.image}
                            alt={slide.alt}
                            fill
                            className="w-full h-full object-cover"
                            priority={slide.id === 1} // Prioriza solo la primera imagen
                        />
                        {/* Overlay oscuro para mejorar la legibilidad del texto (profesional y serio) */}
                        <div className="absolute inset-0 bg-black/60"></div>
                        {/* Contenido (Centrado y Minimalista) */}
                        <div className="absolute inset-0 flex items-center justify-center p-8 text-center">
                            <div className="max-w-4xl">
                                {/* <p className="text-xl sm:text-2xl text-red-400 font-light mb-4 uppercase tracking-wider [text-shadow:_0_2px_4px_rgb(0_0_0_/_0.5)]">
                                    {slide.subtitle}
                                </p> */}
                                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight [text-shadow:_0_2px_8px_rgb(0_0_0_/_0.6)]">
                                    {slide.title}
                                </h1>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* --- Controles de Navegación (Flechas) --- */}
            <div className="absolute inset-0 flex items-center justify-between p-4">
                <button
                    onClick={prevSlide}
                    className="p-3 rounded-full bg-black/30 text-white hover:bg-black/50 transition duration-300 focus:outline-none"
                    aria-label="Diapositiva anterior"
                >
                    <ChevronLeft size={28} />
                </button>
                <button
                    onClick={nextSlide}
                    className="p-3 rounded-full bg-black/30 text-white hover:bg-black/50 transition duration-300 focus:outline-none"
                    aria-label="Diapositiva siguiente"
                >
                    <ChevronRight size={28} />
                </button>
            </div>

            {/* --- Indicadores (Puntos) --- */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
                {SLIDES.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`transition duration-300 focus:outline-none`}
                        aria-label={`Ir a diapositiva ${index + 1}`}
                    >
                        <Circle
                            size={12}
                            className={
                                currentSlide === index
                                    ? 'fill-red-600 text-red-600' // Punto activo: relleno rojo
                                    : 'fill-white/50 text-white/50 hover:fill-white hover:text-white' // Punto inactivo: contorno blanco semi-transparente
                            }
                        />
                    </button>
                ))}
            </div>
        </div>
    );
};

export default HeroCarousel;