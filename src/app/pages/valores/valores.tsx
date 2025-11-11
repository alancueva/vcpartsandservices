
import { Shield, Handshake, ThumbsUp, CheckCircle, TrendingUp, Leaf } from 'lucide-react';

export default function NuestrosValores() {
    const valores = [
        {
            icon: Shield,
            titulo: 'Seguridad',
            descripcion: 'Desarrollamos todas nuestras actividades de manera segura.'
        },
        {
            icon: Handshake,
            titulo: 'Confianza',
            descripcion: 'Construimos relaciones de confianza, somos sinceros, auténticos y solidarios.'
        },
        {
            icon: ThumbsUp,
            titulo: 'Excelencia',
            descripcion: 'Buscamos ser los mejores en lo que hacemos.'
        },
        {
            icon: CheckCircle,
            titulo: 'Integridad',
            descripcion: 'Actuamos con absoluta honestidad, transparencia y respeto.'
        },
        {
            icon: TrendingUp,
            titulo: 'Compromiso',
            descripcion: 'Cumplimos con todo aquello en lo que nos comprometemos. Somos perseverantes.'
        },
        {
            icon: Leaf,
            titulo: 'Responsabilidad',
            descripcion: 'Respetamos a todos nuestros grupos de interés y somos social y ambientalmente responsables.'
        }
    ];

    return (
        <section className="bg-white py-24 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Título */}
                <div className="mb-20">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="h-1 w-16 bg-blue-900"></div>
                        <h2 className="text-4xl md:text-5xl font-light text-slate-900">
                            Nuestros <span className="font-semibold text-blue-900">Valores</span>
                        </h2>
                    </div>
                </div>

                {/* Grid de Valores */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {valores.map((valor, index) => {
                        const Icon = valor.icon;
                        return (
                            <div
                                key={valor.titulo}
                                className="border border-slate-200 bg-white p-8 hover:border-blue-900 transition-colors duration-300"
                            >
                                {/* Icono */}
                                <div className="flex justify-center mb-6">
                                    <div className="w-24 h-24 border-4 border-blue-900 rounded-full flex items-center justify-center">
                                        <Icon className="w-12 h-12 text-blue-900" strokeWidth={1.5} />
                                    </div>
                                </div>

                                {/* Título */}
                                <h3 className="text-2xl font-semibold text-slate-900 text-center mb-4 italic">
                                    {valor.titulo}
                                </h3>

                                {/* Descripción */}
                                <p className="text-slate-700 text-center leading-relaxed">
                                    {valor.descripcion}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}