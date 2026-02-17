"use client";

import { useState } from "react";
import { CatalogSectionProps, ProductItem } from "@/types/product";
import { ProductDetail } from "./ProductDetail";

export default function CatalogSection({
  products,
  defaultProductId,
}: CatalogSectionProps) {
  const [activeProduct, setActiveProduct] = useState<ProductItem | null>(() => {
    if (products.length === 0) return null;

    if (defaultProductId) {
      return products.find((p) => p.id === defaultProductId) ?? products[0];
    }

    return products[0];
  });

  if (products.length === 0 || !activeProduct) {
    return <div className="p-12 text-center">No hay productos disponibles</div>;
  }

  const handleWhatsAppContact = () => {
    const phoneNumber = "51960785273"; // Reemplazar con el número real del cliente
    const message = encodeURIComponent(
      "Hola VC Part and Service, estoy interesado en recibir información sobre los productos Kemet y sus servicios de ingeniería.",
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <main className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
          {/* Sidebar – lista de productos */}
          <aside className="lg:w-1/4 lg:min-w-[260px]">
            <div className="sticky top-24 lg:top-28">
              <h2 className="text-xs sm:text-sm font-bold text-slate-900 uppercase tracking-widest mb-6 md:mb-8 border-l-4 border-slate-900 pl-3 md:pl-4">
                Explorar Catálogo
              </h2>

              <div className="space-y-1.5">
                {products.map((product) => (
                  <button
                    key={product.id}
                    onClick={() => setActiveProduct(product)}
                    className={`
                      w-full flex items-center justify-between
                      px-4 py-3.5 rounded-xl text-left transition-all duration-300
                      ${
                        activeProduct.id === product.id
                          ? "bg-slate-100 shadow-sm text-slate-900 font-semibold"
                          : "text-slate-600 hover:bg-slate-50 hover:text-slate-800"
                      }
                    `}
                  >
                    <span className="text-sm md:text-base tracking-tight">
                      {product.title}
                    </span>

                    {activeProduct.id === product.id && (
                      <div className="w-2 h-2 rounded-full bg-blue-600 shrink-0" />
                    )}
                  </button>
                ))}
              </div>

              {/* Caja de contacto / soporte – opcional, puedes quitarla o hacerla prop */}
              {/*<div className="mt-10 p-6 bg-slate-50 rounded-2xl border border-slate-100 hidden lg:block">
                <h3 className="text-sm font-bold mb-3">¿Necesitas ayuda?</h3>
                <p className="text-xs text-slate-500 mb-4 leading-relaxed"></p>
                <button
                  onClick={handleWhatsAppContact}
                  className="w-full py-2.5 bg-slate-900 text-white text-sm font-medium rounded-lg hover:bg-slate-800 transition"
                >
                  Contactar experto
                </button>
              </div>*/}
            </div>
          </aside>

          {/* Área de detalle – mejorada */}
          <section className="lg:w-3/4">
            <ProductDetail product={activeProduct} />
          </section>
        </div>
      </main>
    </div>
  );
}
