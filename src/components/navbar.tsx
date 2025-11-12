'use client';
import { useState, useEffect, ElementType } from 'react';
import {
    Menu,
    X,
    ChevronDown,
    Phone,
    Mail,
    Wrench,
    Cog,
    Droplet,
    Wind,
    Beaker,
    Settings,
    Search, // Mantener Search si se usa en otro lugar, si no, se puede quitar.
    Book // Icono para BROCHURE

} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

interface NavLink {
    nombre: string;
    href: string;
    dropdown?: 'productos' | 'servicios';
}

interface Producto {
    nombre: string;
    icon: ElementType;
    descripcion: string;
    href: string;
}

interface Servicio {
    nombre: string;
    icon: ElementType;
    href: string;
}

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const productos: Producto[] = [
        { nombre: 'Repuestos Motores Diesel', icon: Cog, descripcion: 'Piezas originales y alternativas', href: '/pages/productos/repuestos-motores-diesel' },
        { nombre: 'Sistema de Inyección', icon: Droplet, descripcion: 'Inyectores y componentes', href: '/pages/productos/sistema-inyeccion' },
        { nombre: 'Turbocompresores', icon: Wind, descripcion: 'Turbos industriales', href: '/pages/productos/turbocompresores' },
        { nombre: 'Purificadores de Aceite', icon: Beaker, descripcion: 'Separadores y filtros', href: '/pages/productos/purificadores-separadores' },
        { nombre: 'Intercambiadores de Calor', icon: Settings, descripcion: 'Bombas y compresores', href: '/pages/productos/intercambiadores-de-calor' },
        { nombre: 'Equipos de Lapeado', icon: Wrench, descripcion: 'Precisión y consumibles', href: '/pages/productos/equipos-de-lapeado' },
        { nombre: 'Sistema de limpieza por Ultrasonido', icon: Beaker, descripcion: 'Sistema de limpieza por Ultrasonido', href: '/pages/productos/sistemas-de-limpieza' }
    ];

    const servicios: Servicio[] = [
        { nombre: 'Lapeado y pulido de precisión', icon: Wrench, href: '/pages/servicios/lapeado-y-pulido-de-presicion' },
        { nombre: 'Limpieza por Ultrasonido', icon: Beaker, href: '/pages/servicios/limpieza-de-ultrasonido' }
    ];

    const navLinks: NavLink[] = [
        { nombre: 'Inicio', href: '/' },
        { nombre: 'Nosotros', href: '/pages/nosotros' },
        // { nombre: 'Valores', href: '/pages/valores' },
        { nombre: 'Productos', href: '#productos', dropdown: 'productos' },
        { nombre: 'Servicios', href: '#servicios', dropdown: 'servicios' },
        { nombre: 'Marcas', href: '/pages/marcas' },
        { nombre: 'Industrias', href: '/pages/industrias' },
        // { nombre: 'Contacto', href: '#contacto
        // { nombre: 'Clientes', href: '#clientes' }
    ];

    return (
        <>
            <div className="bg-gradient-to-r from-red-600 to-red-700 text-white py-2 px-4 text-sm">
                <div className="max-w-7xl mx-auto flex justify-end items-center">
                    <div className="flex gap-6">
                        <a href="tel:+51960785273" className="flex items-center gap-2 hover:text-red-100 transition-colors duration-200">
                            <Phone size={16} />
                            <span className="hidden sm:inline">+51 960 785 273</span>
                        </a>
                        <a href="mailto:info@vcpartsandservices.com" className="flex items-center gap-2 hover:text-red-100 transition-colors duration-200">
                            <Mail size={16} />
                            <span className="hidden md:inline">info@vcpartsandservices.com</span>
                        </a>
                    </div>
                    {/* <div className="text-xs hidden md:block">
                        Soluciones industriales de calidad
                    </div> */}
                </div>
            </div>

            <nav className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled
                ? 'bg-white/95 backdrop-blur-md shadow-lg'
                : 'bg-white shadow-md'
                }`}>
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex justify-between items-center h-20">
                        {/* Logo */}
                        <Link href="/" className="flex items-center gap-3 group">
                            {/* Logo */}
                            <div className="relative w-18 h-18 lg:w-25 lg:h-25 flex-shrink-0">
                                <Image
                                    src="/logo.png"        // ruta dentro de /public
                                    alt="Logo Parts And Services"
                                    fill
                                    className="object-contain rounded-lg transition-transform duration-200 group-hover:scale-105"
                                    priority
                                />
                            </div>

                            {/* Texto a la derecha    Parts And Services*/}
                            <div className="hidden lg:block text-left">
                                <div className="text-xl font-bold text-gray-800">

                                </div>
                                {/* <div className="text-xs text-gray-500">Soluciones Industriales</div> */}
                            </div>
                        </Link>
                        {/* Desktop Menu */}
                        <div className="hidden lg:flex items-center gap-1">
                            {navLinks.map((link) => (
                                <div
                                    key={link.nombre}
                                    className="relative"
                                    onMouseEnter={() => link.dropdown && setActiveDropdown(link.dropdown)}
                                    onMouseLeave={() => setActiveDropdown(null)}
                                >
                                    <Link
                                        href={link.href}
                                        className="px-4 py-2 text-gray-700 hover:text-red-600 font-medium transition flex items-center gap-1 group"
                                    >
                                        {link.nombre}
                                        {link.dropdown && (
                                            <ChevronDown size={16} className={`transform transition ${activeDropdown === link.dropdown ? 'rotate-180' : ''}`} />
                                        )}
                                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 group-hover:w-full transition-all duration-300"></span>
                                    </Link>

                                    {/* Mega Menu Dropdown */}
                                    {link.dropdown && activeDropdown === link.dropdown && (
                                        <div className="absolute top-full left-0 mt-2 w-screen max-w-4xl -ml-32 bg-white rounded-lg shadow-2xl border border-gray-100 p-6 animate-fadeIn">
                                            <div className="grid grid-cols-2 gap-4">
                                                {(link.dropdown === 'productos' ? productos : servicios).map((item) => (
                                                    <a
                                                        key={item.nombre}
                                                        href={item.href}
                                                        className="flex items-start gap-3 p-3 rounded-lg hover:bg-red-50 transition group"
                                                    >
                                                        <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center text-red-600 group-hover:bg-red-600 group-hover:text-white transition">
                                                            <item.icon size={20} />
                                                        </div>
                                                        <div>
                                                            <div className="font-semibold text-gray-800 group-hover:text-red-600 transition">
                                                                {item.nombre}
                                                            </div>
                                                            {/* {item. && (
                                                                <div className="text-sm text-gray-500">{item.descripcion}</div>
                                                            )} */}
                                                        </div>
                                                    </a>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* CTA Buttons */}
                        <div className="hidden lg:flex items-center gap-3">
                            {/* <button className="p-2 hover:bg-gray-100 rounded-lg transition">
                                <Search size={20} className="text-gray-600" />
                            </button> */}
                            <Link
                                href="/pages/contacto"
                                className="px-6 py-2.5 border border-red-700 text-red-700 rounded-lg font-semibold transition hover:bg-red-700 hover:text-white hover:shadow-lg transform hover:-translate-y-0.5 flex items-center justify-center"
                            >
                                <Mail size={18} className="mr-2" />
                                Contacto
                            </Link>
                            <Link
                                href="/brochure/VC-BROCHURE.pdf" // Ruta al archivo PDF en la carpeta public
                                className="px-6 py-2.5 border border-blue-700 text-blue-700  rounded-lg font-semibold hover:bg-blue-700 hover:text-white hover:shadow-lg transform hover:-translate-y-0.5 transition flex items-center justify-center"
                                target="_blank" // Abre el enlace en una nueva pestaña
                                rel="noopener noreferrer" // Mejora la seguridad al abrir en nueva pestaña
                            >
                                <Book size={18} className="mr-2" />
                                BROCHURE
                            </Link>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="lg:hidden p-2 hover:bg-gray-300 rounded-lg transition"
                        >
                            {isMobileMenuOpen ? <X size={24} className='text-gray-600' /> : <Menu size={24} className='text-gray-600' />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="lg:hidden bg-white border-t border-gray-200 animate-slideDown">
                        <div className="max-w-7xl mx-auto px-4 py-4 space-y-2">
                            <div className="max-h-[80vh] overflow-y-auto max-w-7xl mx-auto px-4 py-4 space-y-2 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
                                {navLinks.map((link) => {
                                    const isDropdownOpen = activeDropdown === link.dropdown;

                                    return (
                                        <div key={link.nombre}>
                                            {link.dropdown ? (
                                                <button
                                                    onClick={() => 
                                                        setActiveDropdown(activeDropdown === link.dropdown ? null : link.dropdown || null)
                                                    }
                                                    className="w-full flex justify-between items-center px-4 py-3 text-gray-700 hover:bg-red-50 hover:text-red-600 rounded-lg font-medium transition"
                                                >
                                                    <span>{link.nombre}</span>
                                                    <ChevronDown
                                                        size={18}
                                                        className={`transform transition-transform duration-200 ${
                                                            isDropdownOpen ? "rotate-180 text-red-600" : "text-gray-500"
                                                        }`}
                                                    />
                                                </button>
                                            ) : (
                                                <Link
                                                    href={link.href}
                                                    onClick={() => setIsMobileMenuOpen(false)}
                                                    className="w-full block px-4 py-3 text-gray-700 hover:bg-red-50 hover:text-red-600 rounded-lg font-medium transition"
                                                >
                                                    {link.nombre}
                                                </Link>
                                            )}

                                            {/* Subitems desplegables */}
                                            {link.dropdown && isDropdownOpen && (
                                                <div className="ml-6 mt-2 space-y-2 border-l-2 border-red-100 pl-3 animate-fadeIn">
                                                    {(link.dropdown === 'productos' ? productos : servicios).map((item) => (
                                                        <Link
                                                            key={item.nombre}
                                                            href={item.href}
                                                            className="flex items-center gap-2 px-2 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-lg"
                                                            onClick={() => setIsMobileMenuOpen(false)}
                                                        >
                                                            <item.icon size={16} className="text-red-500" />
                                                            {item.nombre}
                                                        </Link>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    );
                                })}
                                <div className="pt-4 space-y-2">

                                    <Link
                                        href="/pages/contacto"
                                        className="px-6 py-2.5 border border-red-700 text-red-700 rounded-lg font-semibold transition hover:bg-red-700 hover:text-white hover:shadow-lg transform hover:-translate-y-0.5 flex items-center justify-center"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        <Mail size={18} className="mr-2" />
                                        Contacto
                                    </Link>
                                    <Link
                                        href="/brochure/VC-BROCHURE.pdf" // Ruta al archivo PDF en la carpeta public
                                        className="px-6 py-2.5 border border-blue-700 text-blue-700  rounded-lg font-semibold hover:bg-blue-700 hover:text-white hover:shadow-lg transform hover:-translate-y-0.5 transition flex items-center justify-center"
                                        target="_blank" // Abre el enlace en una nueva pestaña
                                        rel="noopener noreferrer" // Mejora la seguridad al abrir en nueva pestaña
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        <Book size={18} className="mr-2" />
                                        BROCHURE
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </nav>
        </>
    );
}