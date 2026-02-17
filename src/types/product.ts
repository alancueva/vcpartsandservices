export interface ProductItem {
  id: string;
  image: string;
  title: string;
  description: string;
  longDescription: string;
  features: string[];
  category?: string; // opcional por si lo quieres mostrar después
  fichaTecnica?: string;
  // Puedes agregar más campos en el futuro: pdfUrl, videoUrl, specs, etc.
}

export interface CatalogSectionProps {
  products: ProductItem[];
  defaultProductId?: string;
}
