import React from 'react';
import { Truck, ThumbsUp, BarChart3 } from 'lucide-react';// Iconos sugeridos de Heroicons

const ValorOfrecemos = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Título */}
        <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl mb-2">
          <span className="text-gray-900">Qué</span>{' '}
          <span className="text-red-600 italic font-serif">Valor Ofrecemos</span>
        </h2>
        
        {/* Separador Minimalista */}
        <div className="w-16 h-1 bg-red-600 mx-auto mb-16 rounded"></div>

        {/* Contenido de 3 Columnas */}
        <div className="flex flex-col lg:flex-row justify-between items-center space-y-12 lg:space-y-0 lg:space-x-12">
          
          {/* Columna 1: STOCK */}
          <div className="flex-1 max-w-sm text-left">
            <div className="flex items-start mb-4">
              <Truck className="w-6 h-6 text-red-600 mr-3 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">STOCK</h3>
                <p className="text-gray-600 text-base leading-relaxed">
                  Tenemos una gran cantidad de stock de repuestos, lo que agiliza nuestra respuesta y tiempo de entrega.
                </p>
              </div>
            </div>
          </div>
          
          {/* Columna Central: Ícono Central Minimalista */}
          <div className="hidden lg:flex flex-col items-center justify-center w-40 h-40">
            {/* Sustitución del ícono por un diseño simple y profesional (ejemplo con un círculo de progreso) */}
            <div className="relative w-full h-full">
              <div className="w-40 h-40 border-8 border-gray-200 rounded-full absolute"></div>
              <div className="w-40 h-40 border-8 border-red-600 border-t-transparent rounded-full absolute transform rotate-45 animate-spin-slow"></div>
              <div className="absolute inset-0 flex items-center justify-center text-red-600 text-3xl font-light">
                +
              </div>
            </div>
          </div>
          
          {/* Columna 3: PRECIO */}
          <div className="flex-1 max-w-sm text-right">
            <div className="flex items-start lg:items-end flex-row-reverse mb-4">
              <BarChart3 className="w-6 h-6 text-red-600 ml-3 mt-1 flex-shrink-0" />
              <div className="text-right">
                <h3 className="text-xl font-bold text-gray-900 mb-2">PRECIO</h3>
                <p className="text-gray-600 text-base leading-relaxed">
                  Calidad, precio y confianza siempre de la mano en todos nuestros repuestos y servicios.
                </p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default ValorOfrecemos;