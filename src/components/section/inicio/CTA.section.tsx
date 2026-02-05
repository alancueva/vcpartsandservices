import React from "react";
import { Mail, Phone, ArrowRight, MessageSquare, FileText } from "lucide-react";

const ACCENT_COLOR = "bg-red-700";
const ACCENT_HOVER = "hover:bg-red-800";
const ACCENT_TEXT = "text-red-700";

export default function CTASection() {
  const whatsappMessage = encodeURIComponent(
    "Hola, me gustaría recibir más información y asesoría técnica sobre los productos KEMET.",
  );
  const whatsappUrl = `https://wa.me/51960785273?text=${whatsappMessage}`;

  return (
    <section className="relative py-24 bg-white overflow-hidden">
      {/* Elementos decorativos sutiles sobre fondo blanco */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-red-50 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-slate-50 rounded-full blur-3xl opacity-50"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Contenedor principal con sombra pronunciada para resaltar sobre el fondo blanco */}
        <div className="bg-white rounded-[3rem] shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-gray-100 overflow-hidden flex flex-col lg:flex-row items-stretch">
          {/* Lado izquierdo: Mensaje principal */}
          <div className="flex-1 p-10 md:p-16 lg:p-24">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-red-50 mb-8">
              <span
                className={`${ACCENT_TEXT} text-xs font-bold uppercase tracking-widest`}
              >
                Asesoría Técnica Especializada
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-[1.1] mb-8">
              ¿Listo para elevar sus procesos de{" "}
              <span className={ACCENT_TEXT}>precisión?</span>
            </h2>

            <p className="text-gray-600 text-lg mb-12 leading-relaxed max-w-xl">
              Nuestro equipo técnico está preparado para ayudarle a seleccionar
              la combinación perfecta de consumibles y equipos KEMET para sus
              necesidades específicas de lapeado y limpieza.
            </p>

            <div className="flex flex-wrap gap-5">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`${ACCENT_COLOR} ${ACCENT_HOVER} text-white px-10 py-4 rounded-2xl font-bold flex items-center transition-all transform hover:scale-105 shadow-xl shadow-red-700/20`}
              >
                Contactar a un Experto (Whatsapp)
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              {/*<button className="bg-white border-2 border-gray-200 hover:border-red-700 hover:text-red-700 text-gray-800 px-10 py-4 rounded-2xl font-bold flex items-center transition-all">
                <FileText className="mr-2 w-5 h-5" />
                Descargar Catálogo
              </button>*/}
            </div>
          </div>

          {/* Lado derecho: Tarjetas de contacto con diseño limpio */}
          <div className="lg:w-[410px] bg-gray-50/50 p-10 md:p-16 flex flex-col justify-center space-y-5 border-l border-gray-100">
            <h3 className="text-gray-900 font-bold mb-4 px-2">
              Contacto Directo
            </h3>

            <a
              href="tel:+51960785273"
              className="group bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-start space-x-4 transition-all hover:shadow-md hover:border-red-200"
            >
              <div
                className={`p-3 rounded-xl ${ACCENT_COLOR} text-white transition-transform group-hover:scale-110`}
              >
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-sm">Llámenos</h4>
                <p className="text-sm text-gray-500 font-medium">
                  +51 960 785 273
                </p>
              </div>
            </a>

            <a
              href="mailto:info@vcpartsandservices.com"
              className="group bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-start space-x-3 transition-all hover:shadow-md hover:border-red-200"
            >
              <div
                className={`p-3 rounded-xl ${ACCENT_COLOR} text-white transition-transform group-hover:scale-110`}
              >
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-sm">Escríbanos</h4>
                <p className="text-sm text-gray-500 font-medium">
                  info@vcpartsandservices.com
                </p>
              </div>
            </a>

            {/*<div className="group bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-start space-x-4 transition-all hover:shadow-md hover:border-red-200 cursor-pointer">
              <div
                className={`p-3 rounded-xl ${ACCENT_COLOR} text-white transition-transform group-hover:scale-110`}
              >
                <MessageSquare className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-sm">
                  Soporte Chat
                </h4>
                <p className="text-sm text-gray-500 font-medium">
                  Atención inmediata
                </p>
              </div>
            </div>*/}
          </div>
        </div>

        {/* Mención de distribuidor */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-4 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
            <div className="h-px w-12 bg-gray-300"></div>
            <p className="text-gray-500 text-xs font-bold uppercase tracking-[0.4em]">
              Distribuidor Autorizado Kemet International
            </p>
            <div className="h-px w-12 bg-gray-300"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
