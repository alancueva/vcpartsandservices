import AboutUsSection from "@/components/section/inicio/quienes-somos-2";
import NuestroServicios from "@/components/section/inicio/nuestrosServicios";
import ValorOfrecemos from "@/components/section/inicio/valorqueOfrecemos";
import HeroCarrusel from "@/components/section/inicio/HeroCarrusel";
import ClientesCarrusel from "@/components/section/inicio/clienteCarrusel";
import ProductosMasVendidosSection from "@/components/section/inicio/productosMasVendidos.section";
import CTASection from "@/components/section/inicio/CTA.section";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50">
      <HeroCarrusel />
      <AboutUsSection />
      <ProductosMasVendidosSection />
      {/*<NuestroServicios />*/}
      <ValorOfrecemos />
      <ClientesCarrusel />
      <CTASection />
    </div>
  );
}
