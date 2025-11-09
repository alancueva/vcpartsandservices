'use client';
import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Phone, Mail, Search, Wrench, Cog, Droplet, Wind, Beaker, Settings, FileText } from 'lucide-react';


export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const productos:any[] = [
        { nombre: 'Repuestos Motores Diesel', icon: Cog, descripcion: 'Piezas originales y alternativas' },
        { nombre: 'Sistema de Inyección', icon: Droplet, descripcion: 'Inyectores y componentes' },
        { nombre: 'Turbocompresores', icon: Wind, descripcion: 'Turbos industriales' },
        { nombre: 'Purificadores de Aceite', icon: Beaker, descripcion: 'Separadores y filtros' },
        { nombre: 'Intercambiadores de Calor', icon: Settings, descripcion: 'Bombas y compresores' },
        { nombre: 'Equipos de Lapeado', icon: Wrench, descripcion: 'Precisión y consumibles' }
    ];

    const servicios:any[] = [
        { nombre: 'Mantenimiento Preventivo', icon: Settings },
        { nombre: 'Reparación de Equipos', icon: Wrench },
        { nombre: 'Limpieza por Ultrasonido', icon: Beaker },
        { nombre: 'Asesoría Técnica', icon: FileText }
    ];

    const navLinks: any[] = [
        { nombre: 'Inicio', href: '#' },
        { nombre: 'Nosotros', href: '#nosotros' },
        { nombre: 'Valores', href: '#valores' },
        { nombre: 'Productos', href: '#productos', dropdown: 'productos' },
        { nombre: 'Servicios', href: '#servicios', dropdown: 'servicios' },
        { nombre: 'Marcas', href: '#marcas' },
        { nombre: 'Industrias', href: '#industrias' },
        { nombre: 'Clientes', href: '#clientes' }
    ];

    return (
        <>
            <div className="bg-gradient-to-r from-red-600 to-red-700 text-white py-2 px-4 text-sm">
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <div className="flex gap-6">
                        <a href="tel:+51960785273" className="flex items-center gap-2 hover:text-red-100 transition">
                            <Phone size={16} />
                            <span className="hidden sm:inline">+51 960 785 273</span>
                        </a>
                        <a href="mailto:info@vcpartsandservices.com" className="flex items-center gap-2 hover:text-red-100 transition">
                            <Mail size={16} />
                            <span className="hidden md:inline">info@vcpartsandservices.com</span>
                        </a>
                    </div>
                    <div className="text-xs hidden md:block">
                        Soluciones industriales de calidad
                    </div>
                </div>
            </div>

            <nav className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled
                ? 'bg-white/95 backdrop-blur-md shadow-lg'
                : 'bg-white shadow-md'
                }`}>
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex justify-between items-center h-20">
                        {/* Logo */}
                        <a href="#" className="flex items-center gap-3 group">
                            <div className="relative">
                                <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-700 rounded-lg flex items-center justify-center transform group-hover:scale-105 transition">
                                    <span className="text-white font-bold text-xl">VC</span>
                                </div>
                            </div>
                            {/* <div className="hidden lg:block">
                                <div className="text-xl font-bold text-gray-800">VC Parts & Services</div>
                                <div className="text-xs text-gray-500">Soluciones Industriales</div>
                            </div> */}
                        </a>

                        {/* Desktop Menu */}
                        <div className="hidden lg:flex items-center gap-1">
                            {navLinks.map((link) => (
                                <div
                                    key={link.nombre}
                                    className="relative"
                                    onMouseEnter={() => link.dropdown && setActiveDropdown(link.dropdown)}
                                    onMouseLeave={() => setActiveDropdown(null)}
                                >
                                    <a
                                        href={link.href}
                                        className="px-4 py-2 text-gray-700 hover:text-red-600 font-medium transition flex items-center gap-1 group"
                                    >
                                        {link.nombre}
                                        {link.dropdown && (
                                            <ChevronDown size={16} className={`transform transition ${activeDropdown === link.dropdown ? 'rotate-180' : ''}`} />
                                        )}
                                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 group-hover:w-full transition-all duration-300"></span>
                                    </a>

                                    {/* Mega Menu Dropdown */}
                                    {link.dropdown && activeDropdown === link.dropdown && (
                                        <div className="absolute top-full left-0 mt-2 w-screen max-w-4xl -ml-32 bg-white rounded-lg shadow-2xl border border-gray-100 p-6 animate-fadeIn">
                                            <div className="grid grid-cols-2 gap-4">
                                                {(link.dropdown === 'productos' ? productos : servicios).map((item) => (
                                                    <a
                                                        key={item.nombre}
                                                        href="#"
                                                        className="flex items-start gap-3 p-3 rounded-lg hover:bg-red-50 transition group"
                                                    >
                                                        <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center text-red-600 group-hover:bg-red-600 group-hover:text-white transition">
                                                            <item.icon size={20} />
                                                        </div>
                                                        <div>
                                                            <div className="font-semibold text-gray-800 group-hover:text-red-600 transition">
                                                                {item.nombre}
                                                            </div>
                                                            {item.descripcion && (
                                                                <div className="text-sm text-gray-500">{item.descripcion}</div>
                                                            )}
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
                            <a
                                href="#contacto"
                                className="px-6 py-2.5 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-lg font-semibold hover:shadow-lg transform hover:-translate-y-0.5 transition"
                            >
                                Contacto
                            </a>
                            <a
                                href="#brochure"
                                className="px-6 py-2.5 bg-blue-600 text-white rounded-lg font-semibold hover:shadow-lg transform hover:-translate-y-0.5 transition"
                            >
                                BROCHURE
                            </a>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition"
                        >
                            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="lg:hidden bg-white border-t border-gray-200 animate-slideDown">
                        <div className="max-w-7xl mx-auto px-4 py-4 space-y-2">
                            {navLinks.map((link) => (
                                <div key={link.nombre}>
                                    <a
                                        href={link.href}
                                        className="block px-4 py-3 text-gray-700 hover:bg-red-50 hover:text-red-600 rounded-lg font-medium transition"
                                        onClick={() => !link.dropdown && setIsMobileMenuOpen(false)}
                                    >
                                        {link.nombre}
                                    </a>
                                    {link.dropdown && (
                                        <div className="ml-4 mt-2 space-y-1">
                                            {(link.dropdown === 'productos' ? productos : servicios).map((item) => (
                                                <a
                                                    key={item.nombre}
                                                    href="#"
                                                    className="flex items-center gap-2 px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-lg"
                                                    onClick={() => setIsMobileMenuOpen(false)}
                                                >
                                                    <item.icon size={16} />
                                                    {item.nombre}
                                                </a>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                            <div className="pt-4 space-y-2">
                                <a
                                    href="#contacto"
                                    className="block w-full px-4 py-3 bg-gradient-to-r from-red-600 to-red-700 text-white text-center rounded-lg font-semibold"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    Contacto
                                </a>
                                <a
                                    href="#brochure"
                                    className="block w-full px-4 py-3 bg-blue-600 text-white text-center rounded-lg font-semibold"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    BROCHURE
                                </a>
                            </div>
                        </div>
                    </div>
                )}
            </nav>
        </>
    );
}