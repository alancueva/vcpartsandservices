
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
                            Especialistas en mantenimiento de equipos industriales y suministro de repuestos mecánicos y eléctricos.
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
                        <div className="text-xs text-gray-400">
                            <span>Diseño web:</span>
                            <a href="https://alancueva.vercel.app/" target="_blank" rel="noopener noreferrer">
                                <span className="text-gray-300 font-medium"> Alan Cueva</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}