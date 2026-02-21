"use client";
import {
  ChevronLeft,
  ChevronRight,
  Maximize2,
  X,
  ZoomIn,
  ZoomOut,
} from "lucide-react";
import { MouseEvent, useRef, useState, WheelEvent } from "react";

const ACCENT_COLOR = "bg-red-800";
const ACCENT_TEXT = "text-red-800";
const FONT_SERIF_ITALIC = "italic font-serif";

interface Product {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  imageUrl: string;
}

const BEST_SELLING_PRODUCTS = [
  {
    id: 1,
    title: "Máquinas lapeadoras",
    subtitle: "Precisión Industrial",
    description:
      'Varían en diámetros desde 380 mm (15") hasta más de 3,0 m (120"), adaptándose a cualquier necesidad de producción.',
    imageUrl: "/productos-kemet/images_lapping_lapping-machines.webp",
  },
  {
    id: 2,
    title: "Consumibles de lapeado",
    subtitle: "Alto Rendimiento",
    description:
      "La más amplia selección de consumibles diamantados y no diamantados con abrasivos convencionales de alta calidad.",
    imageUrl: "/productos-kemet/images_lapping_lapping-consumables.webp",
  },
  {
    id: 3,
    title: "Accesorios para lapeado",
    subtitle: "Control de Planitud",
    description:
      "Todos los accesorios necesarios para controlar y mantener la planitud perfecta de la placa durante el proceso.",
    imageUrl: "/productos-kemet/lapping-accessories.jpg",
  },
];

interface FullScreenViewerProps {
  imageUrl: string;
  onClose: () => void;
}

const FullScreenViewer: React.FC<FullScreenViewerProps> = ({
  imageUrl,
  onClose,
}) => {
  const [scale, setScale] = useState<number>(1);
  const [position, setPosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [startPan, setStartPan] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });

  const handleWheel = (e: WheelEvent<HTMLDivElement>) => {
    const delta = e.deltaY * -0.01;
    const newScale = Math.min(Math.max(1, scale + delta), 4);
    setScale(newScale);
    if (newScale === 1) setPosition({ x: 0, y: 0 });
  };

  const handleMouseDown = (e: MouseEvent<HTMLDivElement>) => {
    if (scale > 1) {
      setIsDragging(true);
      setStartPan({ x: e.clientX - position.x, y: e.clientY - position.y });
    }
  };

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (isDragging && scale > 1) {
      setPosition({
        x: e.clientX - startPan.x,
        y: e.clientY - startPan.y,
      });
    }
  };

  const handleMouseUp = () => setIsDragging(false);

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center overflow-hidden touch-none"
      onWheel={handleWheel}
    >
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-white bg-white/10 p-3 rounded-full hover:bg-white/20 z-[110] transition-colors"
      >
        <X size={24} />
      </button>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-4 z-[110] bg-black/40 backdrop-blur-md p-2 rounded-full border border-white/10">
        <button
          onClick={() => setScale((prev) => Math.max(prev - 0.5, 1))}
          className="bg-white/10 p-3 rounded-full text-white hover:bg-white/20 transition-colors"
          title="Reducir zoom"
        >
          <ZoomOut size={20} />
        </button>
        <button
          onClick={() => setScale((prev) => Math.min(prev + 0.5, 4))}
          className="bg-white/10 p-3 rounded-full text-white hover:bg-white/20 transition-colors"
          title="Aumentar zoom"
        >
          <ZoomIn size={20} />
        </button>
        <button
          onClick={() => {
            setScale(1);
            setPosition({ x: 0, y: 0 });
          }}
          className="bg-white/10 p-3 rounded-full text-white hover:bg-white/20 transition-colors"
          title="Restablecer"
        >
          <Maximize2 size={20} />
        </button>
      </div>

      <div
        className={`relative transition-transform duration-75 cursor-${scale > 1 ? "move" : "zoom-in"}`}
        style={{
          transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
        }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        <img
          src={imageUrl}
          alt="Vista ampliada"
          className="max-h-screen max-w-screen object-contain select-none pointer-events-none"
        />
      </div>
    </div>
  );
};
// const ProductCard = ({ product }: { product: Product }) => (
//   <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-2xl group flex flex-col">
//     {/* Contenedor de Imagen */}
//     <div className="relative h-64 overflow-hidden">
//       <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-50">
//         <img
//           src={product.imageUrl}
//           alt={product.title}
//           className="absolute inset-0 w-full -h-full object-cover transition-transform duration-500 group-hover:scale-110"
//           loading="lazy"
//           decoding="async"
//         />
//       </div>
//       {/* Etiqueta de Producto */}
//       <div className="absolute top-4 left-4">
//         {/*<span
//           className={`${ACCENT_COLOR} text-white text-[10px] font-bold uppercase tracking-widest py-1 px-3 rounded-full shadow-lg`}
//         >
//           {product.tag}
//         </span>*/}
//       </div>
//       <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-6">
//         <p className="text-white text-xs font-bold uppercase tracking-[0.2em] opacity-90">
//           {product.subtitle}
//         </p>
//       </div>
//     </div>

//     {/* Contenido de la tarjeta */}
//     <div className="p-8 text-center flex-grow flex flex-col justify-between">
//       <div>
//         <h3 className="text-2xl font-bold text-gray-900 mb-3">
//           {product.title}
//         </h3>
//         <p className="text-gray-600 leading-relaxed text-sm">
//           {product.description}
//         </p>
//       </div>
//       <div
//         className={`w-10 h-1 ${ACCENT_COLOR} mx-auto mt-8 rounded-full`}
//       ></div>
//     </div>
//   </div>
// );

interface ProductCardProps {
  product: Product;
  onOpenImage: (url: string) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onOpenImage }) => (
  <div className="min-w-[85vw] md:min-w-0 bg-white rounded-2xl shadow-1xs border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-2xl group flex flex-col h-full">
    <div className="relative h-64 overflow-hidden">
      <div className="relative aspect-[4/3] w-full h-full overflow-hidden bg-gray-50">
        <img
          src={product.imageUrl}
          alt={product.title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <button
          onClick={() => onOpenImage(product.imageUrl)}
          className="absolute bottom-4 right-4 z-20 p-2.5 bg-white/80 hover:bg-white backdrop-blur-sm rounded-lg shadow-sm border border-black/5 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300"
          title="Ver en pantalla completa"
        >
          <Maximize2 size={16} className="text-gray-800" />
        </button>

        {/* Overlay sutil al hacer hover */}
        <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none flex items-end p-6">
        <p className="text-white text-xs font-bold uppercase tracking-[0.2em] opacity-90">
          {product.subtitle}
        </p>
      </div>
    </div>

    <div className="p-8 text-center flex-grow flex flex-col">
      <div className="flex-grow">
        <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-1">
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
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo =
        direction === "left"
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <section className="py-6 md:py-6 bg-gray-50/30 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-10 md:mb-10">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
            Productos más
            <span
              className={` ${FONT_SERIF_ITALIC} ${ACCENT_TEXT} block sm:inline-block sm:ml-3`}
            >
              Vendidos
            </span>
          </h2>
          <div
            className={`w-24 h-1.5 ${ACCENT_COLOR} mx-auto rounded-full mt-6`}
          ></div>
          <p className="mt-8 text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed font-medium">
            Nuestras soluciones de mayor rotación para el lapeado y pulido
            industrial de alta precisión{" "}
            <strong className="text-gray-900">KEMET</strong>.
          </p>
        </header>

        <div className="relative group">
          <button
            onClick={() => scroll("left")}
            className="block md:flex lg:hidden absolute -left-6 top-1/2 -translate-y-1/2 z-10 bg-white shadow-xl rounded-full p-4 text-gray-800 hover:scale-110 transition-transform border border-gray-100"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={() => scroll("right")}
            className="block md:flex lg:hidden absolute -right-6 top-1/2 -translate-y-1/2 z-10 bg-white shadow-xl rounded-full p-4 text-gray-800 hover:scale-110 transition-transform border border-gray-100"
          >
            <ChevronRight size={24} />
          </button>

          <div
            ref={scrollRef}
            className="flex md:grid md:grid-cols-3 gap-6 md:gap-10 overflow-x-auto snap-x snap-mandatory pb-8 no-scrollbar scroll-smooth"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {BEST_SELLING_PRODUCTS.map((product) => (
              <div key={product.id} className="snap-center">
                <ProductCard
                  product={product}
                  onOpenImage={(url) => setSelectedImage(url)}
                />
              </div>
            ))}
          </div>

          <div className="flex md:hidden justify-center gap-2 mt-4">
            {BEST_SELLING_PRODUCTS.map((_, i) => (
              <div key={i} className="w-2 h-2 rounded-full bg-gray-300"></div>
            ))}
          </div>
        </div>
      </div>

      {selectedImage && (
        <FullScreenViewer
          imageUrl={selectedImage}
          onClose={() => setSelectedImage(null)}
        />
      )}

      <style
        dangerouslySetInnerHTML={{
          __html: `
              .no-scrollbar::-webkit-scrollbar { display: none; }
            `,
        }}
      />
    </section>
  );
}
