import { Truck, BarChart3, TrendingDown, CheckCircle2 } from "lucide-react";

export default function ValorOfrecemos() {
  const comparativaPrecios = [
    { nombre: "Competidor A", precio: 95, color: "bg-gray-400" },
    { nombre: "Competidor B", precio: 88, color: "bg-gray-300" },
    { nombre: "VC PARTS AND SERVICES", precio: 65, color: "bg-red-800" },
  ];

  return (
    <section className="min-h-screen flex flex-col bg-white overflow-hidden">
      <div className="pt-8 pb-6 text-center bg-white z-10">
        <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl mb-2">
          <span className="text-gray-900">Qué</span>{" "}
          <span className="text-red-800 italic font-serif">
            Valor Ofrecemos
          </span>
        </h2>
        <div className="w-16 h-1 bg-red-800 mx-auto rounded"></div>
      </div>

      <div className="flex-grow flex flex-col lg:flex-row">
        {/* SECCIÓN IZQUIERDA: STOCK E IMAGEN */}
        <div className="relative w-full lg:w-1/2 flex flex-col justify-center items-center p-8 lg:p-16 bg-gray-50 border-r border-gray-100">
          <div className="max-w-md w-full z-10 mb-8">
            <div className="flex items-center mb-5">
              <div className="p-3 bg-red-100 rounded-lg mr-4">
                <Truck className="w-8 h-8 text-red-800" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 tracking-tight">
                STOCK DISPONIBLE
              </h3>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Contamos con el inventario más robusto de productos{" "}
              <span className="font-bold text-red-800">Kemet</span>. Nuestra
              capacidad de almacenamiento nos permite garantizar entregas
              inmediatas y soluciones críticas cuando más las necesita.
            </p>
          </div>

          {/* Representación Visual del Stock (Placeholder de Imagen) */}
          <div className="w-full max-w-lg aspect-video overflow-hidden relative group">
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10"></div>
            <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
              {/* Simulación de imagen de almacén/stock */}
              <img
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1000"
                alt="Almacén de productos Kemet"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="absolute bottom-0 left-0 bg-red-800 text-white px-4 py-2 text-[10px] tracking-widest uppercase font-bold">
              Inventario
            </div>
          </div>
        </div>

        {/* SECCIÓN DERECHA: PRECIO Y ESTADÍSTICA */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center items-center p-8 lg:p-16 bg-white">
          <div className="max-w-md w-full mb-12">
            <div className="flex items-center mb-5">
              <div className="p-3 bg-red-100 rounded-lg mr-4">
                <BarChart3 className="w-8 h-8 text-red-800" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 tracking-tight">
                PRECIO Y CALIDAD
              </h3>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">
              En{" "}
              <span className="font-bold text-red-800">
                VC Parts and Service
              </span>{" "}
              rompemos el mito de que &quot;lo barato sale caro&quot;.
              Optimizamos nuestra cadena de suministro para ofrecerle precios de
              fábrica sin sacrificar ni un ápice de la calidad técnica
              requerida.
            </p>
          </div>

          {/* Gráfico de Comparativa de Precios */}
          <div className="w-full max-w-md p-2">
            <h4 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-8 text-center">
              Comparativa de Costo de Productos
            </h4>

            <div className="space-y-8">
              {comparativaPrecios.map((item, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between text-sm font-medium">
                    <span
                      className={
                        item.precio < 70
                          ? "text-red-800 font-bold"
                          : "text-gray-600"
                      }
                    >
                      {item.nombre}
                    </span>
                    <span className="text-gray-500">
                      {item.precio}% del mercado
                    </span>
                  </div>
                  <div className="w-full h-4 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className={`h-full ${item.color} transition-all duration-1000 ease-out`}
                      style={{ width: `${item.precio}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 pt-6 border-t border-gray-200 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <TrendingDown className="w-4 h-4 text-red-800" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-gray-600">
                  Ahorro del 30%
                </span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-4 h-4 text-red-800" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-gray-600">
                  Calidad Kemet
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
