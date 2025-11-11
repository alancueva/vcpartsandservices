
import { Target, Eye } from 'lucide-react';

export default function FilosofiaCorporativa() {
    return (
        <section className="bg-slate-50 py-24 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Título */}
                <div className="mb-20">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="h-1 w-16 bg-blue-900"></div>
                        <h2 className="text-4xl md:text-5xl font-light text-slate-900">
                            Filosofía <span className="font-semibold text-blue-900">Corporativa</span>
                        </h2>
                    </div>
                </div>

                {/* Grid Misión y Visión */}
                <div className="grid md:grid-cols-2 gap-12">
                    {/* Misión */}
                    <div className="bg-white border-t-4 border-blue-900 p-10">
                        <div className="flex justify-center mb-8">
                            <div className="w-32 h-32 border-4 border-blue-900 rounded-full flex items-center justify-center relative">
                                <div className="w-20 h-20 border-4 border-blue-600 rounded-full flex items-center justify-center">
                                    <div className="w-12 h-12 border-4 border-blue-400 rounded-full flex items-center justify-center">
                                        <Target className="w-6 h-6 text-blue-900" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <h3 className="text-3xl font-semibold text-slate-900 text-center mb-8 italic">Misión</h3>

                        <div className="space-y-6 text-slate-700 leading-relaxed">
                            <p className="text-justify">
                                Brindar soluciones integrales en el suministro de bienes y servicios según las necesidades de nuestros clientes e incluso
                                superando sus expectativas, bajo un enfoque de calidad y seguridad para nuestros clientes y colaboradores.
                            </p>

                            <p className="text-justify">
                                Estamos comprometidos con el mejoramiento continuo de los procesos, el cuidado y protección del medio ambiente, con el fin
                                de lograr la diferenciación y el desarrollo socioeconómico sostenible de nuestra organización.
                            </p>
                        </div>
                    </div>

                    {/* Visión */}
                    <div className="bg-white border-t-4 border-blue-900 p-10">
                        <div className="flex justify-center mb-8">
                            <div className="w-32 h-32 border-4 border-blue-900 rounded-full flex items-center justify-center relative">
                                <div className="w-24 h-16 border-4 border-blue-600 rounded-full flex items-center justify-center">
                                    <Eye className="w-8 h-8 text-blue-900" />
                                </div>
                            </div>
                        </div>

                        <h3 className="text-3xl font-semibold text-slate-900 text-center mb-8 italic">Visión</h3>

                        <div className="text-slate-700 leading-relaxed">
                            <p className="text-justify">
                                Ser el proveedor líder y de mayor confianza suministrando bienes y brindando servicios en la industria en el Perú.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}