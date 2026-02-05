'use client';
import { Shield, Award, Target, Users, TrendingUp, CheckCircle } from 'lucide-react';
import Image from 'next/image';

export default function QuienesSomos() {
  const valores = [
    { icon: Shield, text: 'Seguridad' },
    { icon: Award, text: 'Confianza' },
    { icon: Target, text: 'Excelencia' },
    { icon: Users, text: 'Integridad' },
    { icon: TrendingUp, text: 'Compromiso' },
    { icon: CheckCircle, text: 'Responsabilidad' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-slate-900 mb-4">
            Quiénes <span className="text-blue-600">Somos</span>
          </h1>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left Side - Images */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2 aspect-video bg-gradient-to-br from-slate-300 to-slate-400 rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/generador_gas_diesel.jpg"
                  alt="Generador industrial"
                  fill
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="col-span-2  aspect-video bg-gradient-to-br from-slate-300 to-slate-400 rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/miter-gear.jpg"
                  alt="Engranajes mecánicos"
                  fill
                  className="w-full h-full object-cover"
                />
              </div>
              {/* <div className="aspect-square bg-blue-500 rounded-2xl flex items-center justify-center shadow-lg">
                <div className="text-center text-white">
                  <p className="text-4xl font-bold">100%</p>
                  <p className="text-sm font-medium">Peruana</p>
                </div>
              </div> */}
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">La Empresa</h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  Somos una empresa <strong>100% peruana</strong> conformada por profesionales de
                  amplia experiencia en mantenimiento de equipos industriales, suministrando
                  bienes y servicios de mantenimiento con los más altos estándares de calidad,
                  en el mejor tiempo posible y enfocados siempre en mejorar la operatividad y
                  rentabilidad de los clientes que confían en nosotros.
                </p>
                <p>
                  <strong>V/C Parts and Services</strong> se especializa en el suministro de piezas de
                  repuestos para diferentes equipos mecánicos y eléctricos, como motores de
                  combustión diésel, generadores eléctricos, cajas de engranajes, separadores
                  de aceite y petróleo, compresoras, bombas, intercambiadores de calor, filtros,
                  acoplamientos, componentes electrónicos, etc.
                </p>
              </div>
            </div>

            <div className="pt-6">
              <p className="text-lg font-semibold text-slate-900 italic">
                Estamos comprometidos con el mejoramiento continuo de los procesos
              </p>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12">
          <h3 className="text-2xl font-bold text-slate-900 text-center mb-10">
            Nuestros Valores
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {valores.map((valor, index) => {
              const Icon = valor.icon;
              return (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center p-4 rounded-xl hover:bg-slate-50 transition-colors group"
                >
                  <div className="w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center mb-3 group-hover:bg-blue-100 transition-colors">
                    <Icon className="w-7 h-7 text-blue-600" />
                  </div>
                  <p className="text-sm font-medium text-slate-700 text-center">
                    {valor.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}