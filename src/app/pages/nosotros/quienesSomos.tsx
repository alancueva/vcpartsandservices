'use client';
import { Shield, Award, Target, Users, CheckCircle, TrendingUp } from 'lucide-react';


export default function QuienesSomos() {
    const valores = [
        { icon: Shield, text: 'Seguridad' },
        { icon: Users, text: 'Confianza' },
        { icon: Award, text: 'Excelencia' },
        { icon: Target, text: 'Integridad' },
        { icon: CheckCircle, text: 'Compromiso' },
        { icon: TrendingUp, text: 'Responsabilidad' }
    ];

    return (
        <section className="bg-white py-24 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Título */}
                <div className="mb-20">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="h-1 w-16 bg-blue-900"></div>
                        <h2 className="text-4xl md:text-5xl font-light text-slate-900">
                            Quiénes <span className="font-semibold text-blue-900">Somos</span>
                        </h2>
                    </div>
                </div>

                {/* Grid de dos columnas */}
                <div className="grid md:grid-cols-2 gap-16 mb-20">
                    {/* Columna izquierda - Contenido */}
                    <div className="space-y-8">
                        <div className="border-l-4 border-blue-900 pl-6">
                            <p className="text-slate-700 text-lg leading-relaxed">
                                Somos una empresa 100% peruana conformada por profesionales de amplia experiencia en mantenimiento de equipos industriales,
                                suministrando bienes y servicios de mantenimiento con los más altos estándares de calidad, en el mejor tiempo posible y enfocados
                                siempre en mejorar la operatividad y rentabilidad de los clientes que confían en nosotros.
                            </p>
                        </div>

                        <div className="border-l-4 border-slate-300 pl-6">
                            <p className="text-slate-700 text-lg leading-relaxed">
                                <span className="font-semibold text-slate-900">VC Parts and Services</span> se especializa en el suministro de piezas de repuestos para diferentes equipos mecánicos y eléctricos, como
                                motores de combustión diésel, generadores eléctricos, cajas de engranajes, separadores de aceite y petróleo, compresores, bombas,
                                intercambiadores de calor, filtros, acoplamientos, componentes electrónicos, etc.
                            </p>
                        </div>

                        <div className="bg-slate-50 p-6 border-l-4 border-blue-600">
                            <p className="text-slate-700 text-lg leading-relaxed">
                                Todas nuestras piezas provienen de reconocidos fabricantes OEM ubicados principalmente en EUROPA, los cuales cumplen con los más
                                exigentes estándares de calidad.
                            </p>
                        </div>
                    </div>

                    {/* Columna derecha - Valores */}
                    <div>
                        <h3 className="text-2xl font-semibold text-slate-900 mb-8">Nuestros Valores</h3>
                        <div className="grid grid-cols-1 gap-4">
                            {valores.map((valor, index) => {
                                const Icon = valor.icon;
                                return (
                                    <div
                                        key={valor.text}
                                        className="flex items-center gap-4 p-5 border border-slate-200 hover:border-blue-900 transition-colors duration-300 bg-white"
                                    >
                                        <div className="w-12 h-12 bg-blue-900 flex items-center justify-center flex-shrink-0">
                                            <Icon className="w-6 h-6 text-white" />
                                        </div>
                                        <span className="text-slate-800 font-medium text-lg">{valor.text}</span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Compromiso */}
                <div className="border-t-2 border-slate-200 pt-12">
                    <div className="max-w-4xl mx-auto text-center">
                        <p className="text-xl text-slate-700">
                            Estamos comprometidos con el{' '}
                            <span className="font-semibold text-blue-900 italic">mejoramiento continuo de los procesos</span>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}