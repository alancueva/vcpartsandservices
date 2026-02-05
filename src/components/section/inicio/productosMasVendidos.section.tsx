import { Award, Droplets, Layers, Target } from "lucide-react";
import { JSX } from "react";

const ACCENT_COLOR = "bg-red-700";
const ACCENT_TEXT = "text-red-700";
const FONT_SERIF_ITALIC = "italic font-serif";

interface Product {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  imageUrl: string;
  tag: string;
}

// Datos de los Productos más Vendidos de KEMET (Pulido y Lapeado)
const BEST_SELLING_PRODUCTS = [
  {
    id: 1,
    title: "Lapeado de Precisión",
    subtitle: "Lapeado Consumibles",
    description:
      "Ofrecemos la más amplia selección de consumibles con o sin diamante (abrasivos convencionales), diseñados para procesos de alta exigencia.",
    imageUrl: "/productos-kemet/images_lapping_lapping-consumables.webp",
    tag: "Gama Completa",
  },
  {
    id: 2,
    title: "Productos Diamantados",
    subtitle: "Suspensión de Diamante",
    description:
      "Nuestra gama de diamante líquido está disponible como soluble en aceite, agua o emulsión. Compatibilidad total con discos lapeadores y componentes.",
    imageUrl: "/productos-kemet/images_diamond_diamond-slurries.webp",
    tag: "Química Controlada",
  },
  {
    id: 3,
    title: "Limpieza de Precisión",
    subtitle: "Fluidos de Limpieza",
    description:
      "Detergentes biodegradables (neutros, ácidos y alcalinos) que intensifican la cavitación ultrasónica y disuelven la suciedad desprendida.",
    imageUrl:
      "/productos-kemet/images_cleaning_limpiadores-quimicos-y-liquidos.webp",
    tag: "Biodegradable",
  },
];

const ProductCard = ({ product }: { product: Product }) => (
  <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-2xl group flex flex-col">
    {/* Contenedor de Imagen */}
    <div className="relative h-64 overflow-hidden">
      {/*<img
        src={product.imageUrl}
        alt={product.title}
        //className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"

        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        // Opcional: mejora el loading
        loading="lazy"
        decoding="async"
      />*/}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-50">
        {" "}
        {/* ← aspect-ratio recomendado */}
        <img
          src={product.imageUrl}
          alt={product.title}
          className="absolute inset-0 w-full -h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
          decoding="async"
        />
      </div>
      {/* Etiqueta de Producto */}
      <div className="absolute top-4 left-4">
        <span
          className={`${ACCENT_COLOR} text-white text-[10px] font-bold uppercase tracking-widest py-1 px-3 rounded-full shadow-lg`}
        >
          {product.tag}
        </span>
      </div>
      {/*<div
        className={`absolute top-4 right-4 bg-white/90 backdrop-blur text-red-700 p-2.5 rounded-xl shadow-lg`}
      >
        {product.icon}
      </div>*/}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-6">
        <p className="text-white text-xs font-bold uppercase tracking-[0.2em] opacity-90">
          {product.subtitle}
        </p>
      </div>
    </div>

    {/* Contenido de la tarjeta */}
    <div className="p-8 text-center flex-grow flex flex-col justify-between">
      <div>
        <h3 className="text-2xl font-bold text-gray-900 mb-3">
          {product.title}
        </h3>
        <p className="text-gray-600 leading-relaxed text-sm">
          {product.description}
        </p>
      </div>
      <div
        className={`w-10 h-1 ${ACCENT_COLOR} mx-auto mt-8 rounded-full`}
      ></div>
    </div>
  </div>
);

export default function ProductosMasVendidosSection() {
  return (
    <section className="py-24 md:py-28 bg-gray-50/30 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-20">
          {/*<div className="flex items-center justify-center space-x-2 mb-4">
            <Award className={`w-5 h-5 ${ACCENT_TEXT}`} />
            <span
              className={`text-sm font-bold uppercase tracking-[0.3em] ${ACCENT_TEXT}`}
            >
              Catálogo Destacado
            </span>
          </div>*/}
          <h2 className="text-4xl sm:text-6xl font-extrabold text-gray-900 tracking-tight">
            Productos más
            <span className={` ${FONT_SERIF_ITALIC} ${ACCENT_TEXT} ml-3`}>
              Vendidos
            </span>
          </h2>
          <div
            className={`w-24 h-1.5 ${ACCENT_COLOR} mx-auto rounded-full mt-6`}
          ></div>
          <p className="mt-8 text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed font-medium">
            Nuestras soluciones de mayor rotación para el lapeado y pulido
            industrial de alta precisión <strong>KEMET</strong>.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-28">
          {BEST_SELLING_PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
