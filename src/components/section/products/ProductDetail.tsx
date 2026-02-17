import { Info } from "lucide-react";
import { ProductItem } from "@/types/product";
import { generateWhatsAppLink } from "@/utils/whatsappLink";
import { IconoWhatsapp } from "@/components/icono-whatsapp";

interface ProductDetailProps {
  product: ProductItem;
}

export function ProductDetail({ product }: ProductDetailProps) {
  const whatsappPhone = "51960785273";

  const whatsappLink = generateWhatsAppLink(
    whatsappPhone,
    {
      title: product.title,
      description: product.description,
      fichaTecnica: product.fichaTecnica, // debe venir en el objeto product
      category: product.category,
      id: product.id,
    },
    "Me gustaría recibir más información y precios actualizados.",
  );

  return (
    <div className="bg-white">
      {/* Imagen + Título + Descripción corta */}
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-12 mb-14 lg:mb-16">
        {/* Imagen con contenedor bonito */}
        <div className="w-full lg:w-1/2 aspect-square bg-slate-50 rounded-3xl overflow-hidden border border-slate-100 shadow-sm flex items-center justify-center group">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>

        {/* Info principal */}
        <div className="lg:w-1/2">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-5 leading-tight tracking-tight">
            {product.title}
          </h1>

          <p className="text-lg sm:text-xl text-slate-600 leading-relaxed mb-8 italic border-l-4 border-blue-500/70 pl-5 md:pl-6">
            {product.description}
          </p>

          {/* Acciones – descomenta cuando las necesites */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <button className="px-8 py-2 bg-slate-900 text-white font-semibold rounded-xl hover:bg-slate-800 transition shadow-md">
                <IconoWhatsapp className="inline-block mr-2" />
                Solicitar cotización
              </button>
            </a>
            <a
              href={product.fichaTecnica}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <button className="px-8 py-2 border-2 border-slate-800 text-slate-800 font-semibold rounded-xl hover:bg-slate-50 transition">
                Ficha técnica (web)
              </button>
            </a>
          </div>
        </div>
      </div>

      {/* Sección de detalles */}
      <div className="grid md:grid-cols-2 gap-10 lg:gap-16 pt-8 border-t border-slate-100">
        {/* Descripción larga */}
        <div>
          <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
            <Info className="w-6 h-6 text-blue-600" strokeWidth={2.2} />
            Descripción y aplicaciones
          </h3>
          <p className="text-slate-600 leading-relaxed text-base md:text-lg">
            {product.longDescription}
          </p>
        </div>

        {/* Lista de características */}
        <div className="bg-slate-50/70 rounded-3xl p-7 lg:p-9 border border-slate-100">
          <h3 className="text-base md:text-lg font-bold text-slate-900 uppercase tracking-wide mb-6">
            Características clave
          </h3>
          <ul className="space-y-4">
            {product.features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-3 text-slate-700">
                <div className="w-2.5 h-2.5 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                <span className="text-base">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Espacio para futuro: galería, vídeos, tabla técnica, etc. */}
      {/* <div className="mt-16 pt-12 border-t border-slate-100">
        <h3>Galería / Vídeos / Especificaciones técnicas</h3>
      </div> */}
    </div>
  );
}
