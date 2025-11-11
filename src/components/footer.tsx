
import { MapPin, Phone, Mail, Globe } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const enlaces_rapidas = [
    {
        id: 1,
        nombre: "Inicio",
        href: "/"
    },
    {
        id: 2,
        nombre: "Nosotros",
        href: "/pages/nosotros"
    },
    {
        id: 3,
        nombre: "Marcas",
        href: "/pages/marcas"
    },
    {
        id: 4,
        nombre: "Industrias",
        href: "/pages/industrias"
    },
    {
        id: 5,
        nombre: "Contacto",
        href: "/pages/contacto"
    }
]


export default function Footer() {
    return (
        <footer className="bg-gradient-to-b from-gray-900 to-black text-gray-300">
            {/* Main Footer Content */}
            <div className="max-w-7xl mx-auto px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

                    <div className="space-y-1 items-center md:items-center">
                        {/* Logo + Texto */}
                        <div className="flex items-center">
                            <div className="relative w-20 h-20 md:w-40 md:h-40 flex-shrink-0">
                                <Image
                                    src="/logo.png"
                                    alt="Logo VC Parts"
                                    fill
                                    className="object-contain rounded-lg transition-transform duration-200 hover:scale-105"
                                    priority
                                />
                            </div>

                        </div>

                        {/* Descripción */}
                        <p className="text-sm text-gray-400 leading-relaxed">
                            Soluciones integrales en repuestos y servicios automotrices con calidad garantizada.
                        </p>
                    </div>

                    {/* Contacto */}
                    <div className="space-y-6">
                        <h4 className="text-white font-semibold text-lg mb-4 flex items-center">
                            <div className="w-1 h-6 bg-red-600 mr-3"></div>
                            Contacto
                        </h4>
                        <div className="space-y-4">
                            <div className="flex items-start space-x-3 group">
                                <MapPin className="w-5 h-5 text-red-600 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
                                <div>
                                    <p className="text-sm font-medium text-gray-300">Oficina</p>
                                    <p className="text-sm text-gray-400">Urb. San Rafael J4-16</p>
                                    <p className="text-sm text-gray-400">Nuevo Chimbote</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-3 group">
                                <Phone className="w-5 h-5 text-red-600 flex-shrink-0 group-hover:scale-110 transition-transform" />
                                <a href="tel:+51960785273" className="text-sm hover:text-white transition-colors">
                                    +51 960 785 273
                                </a>
                            </div>
                            <div className="flex items-center space-x-3 group">
                                <Mail className="w-5 h-5 text-red-600 flex-shrink-0 group-hover:scale-110 transition-transform" />
                                <a href="mailto:info@vcpartsandservices.com" className="text-sm hover:text-white transition-colors break-all">
                                    info@vcpartsandservices.com
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Enlaces Rápidos */}
                    <div className="space-y-6">
                        <h4 className="text-white font-semibold text-lg mb-4 flex items-center">
                            <div className="w-1 h-6 bg-red-600 mr-3"></div>
                            Enlaces
                        </h4>
                        <ul className="space-y-3">
                            {enlaces_rapidas.map((item) => (
                                <li key={item.id}>
                                    <Link
                                        href={item.href}
                                        className="text-sm hover:text-white hover:translate-x-1 inline-block transition-all duration-200"
                                    >
                                        {item.nombre}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Horarios */}
                    <div className="space-y-6">
                        <h4 className="text-white font-semibold text-lg mb-4 flex items-center">
                            <div className="w-1 h-6 bg-red-600 mr-3"></div>
                            Horarios
                        </h4>
                        <div className="space-y-3 text-sm">
                            <div className="flex justify-between">
                                <span className="text-gray-400">Lun - Vie:</span>
                                <span className="text-gray-300 font-medium">8:00 - 18:00</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-400">Sábados:</span>
                                <span className="text-gray-300 font-medium">Cerrado</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-400">Domingos:</span>
                                <span className="text-gray-300 font-medium">Cerrado</span>
                            </div>
                        </div>
                        <div className="pt-4">
                            <a
                                href="https://vcpartsandservices.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center space-x-2 text-sm hover:text-white transition-colors group"
                            >
                                <Globe className="w-5 h-5 text-red-600 group-hover:scale-110 transition-transform" />
                                <span>vcpartsandservices.com</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-800">
                <div className="max-w-7xl mx-auto px-6 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <div className="text-sm text-gray-400">
                            © {new Date().getFullYear()} VC Parts and Services. Todos los derechos reservados.
                        </div>
                        <div className="flex items-center space-x-4 text-sm text-gray-400">
                            <span>Persona de contacto:</span>
                            <span className="text-gray-300 font-medium">Ing. Jacques López Ortega</span>
                        </div>
                        {/* <div className="text-xs text-gray-500">
                            Elaborado por: <span className="text-gray-400">publimagenperu</span>
                        </div> */}
                    </div>
                </div>
            </div>

            {/* WhatsApp Floating Button */}
            {/* <a
        href="https://wa.me/51960785273"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-2xl hover:scale-110 transition-all duration-300 z-50 group"
        aria-label="Contactar por WhatsApp"
      >
        <svg 
          className="w-7 h-7" 
          fill="currentColor" 
          viewBox="0 0 24 24"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
        <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center animate-pulse">
          !
        </span>
      </a> */}
        </footer>
    );
}