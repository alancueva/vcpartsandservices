'use client';
import { Home, ZapOff, ArrowLeft } from 'lucide-react';
import Link from 'next/link';


// === CONSTANTES DE ESTILO ===
const ACCENT_COLOR = 'bg-red-700';
const ACCENT_HOVER = 'hover:bg-red-800';
const ACCENT_TEXT = 'text-red-700';
const ACCENT_BORDER = 'border-red-700';


export default function NotFound() {
    const HOME_PAGE_URL = "/";

    const handleGoBack = () => {
        // En Next.js o un entorno de navegador, esto simula el botón "Atrás" del navegador
        window.history.back();
    };


    return (
        // Contenedor principal: centrado vertical y horizontalmente en la pantalla
        <div className="flex items-center justify-center min-h-screen bg-gray-50 p-4 md:p-8 font-sans">

            <div className="max-w-xl w-full text-center">

                {/* Ícono de Error y Código 404 */}
                <div className="flex flex-col items-center justify-center mb-8">
                    <ZapOff className={`w-16 h-16 ${ACCENT_TEXT} mb-4`} strokeWidth={1.5} />

                    <h1 className="text-9xl font-extrabold tracking-wider text-gray-800 opacity-20 select-none">
                        404
                    </h1>
                </div>

                {/* Mensaje de Error */}
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    Página No Encontrada
                </h2>

                <p className="text-lg text-gray-600 mb-8">
                    Lo sentimos, la página que estás buscando podría haber sido eliminada,
                    su nombre ha cambiado o no está disponible temporalmente.
                </p>
                <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">


                    {/* Botón 1: Volver a la Página Anterior (Secundario) */}
                    <button
                        onClick={handleGoBack}
                        className={`inline-flex items-center px-6 py-3 
                                    border-2 ${ACCENT_BORDER} text-base font-medium rounded-lg 
                                    text-red-700 bg-transparent hover:bg-red-50 
                                    transition duration-300 transform hover:scale-[1.02] shadow-sm`}
                    >
                        <ArrowLeft className="w-5 h-5 mr-2" />
                        Volver Atrás
                    </button>

                    {/* Botón de Redirección */}
                    <Link
                        href={HOME_PAGE_URL}
                        className={`inline-flex items-center px-8 py-3 
                        border border-transparent text-base font-medium rounded-lg 
                        text-white shadow-md ${ACCENT_COLOR} ${ACCENT_HOVER} 
                        transition duration-300 transform hover:scale-[1.02]`}
                    >
                        <Home className="w-5 h-5 mr-2" />
                        Volver a la Página Principal
                    </Link>

                </div>
                {/* Enlace de Soporte Opcional (Minimalista) */}
                <p className="mt-8 text-sm text-gray-400">
                    Si crees que esto es un error, por favor, contacta con soporte.
                </p>

            </div>
        </div>
    );
}