
import QuienesSomos from "@/components/section/quienesSomos";
import NuestroServicios from "@/components/section/nuestrosServicios";
import ValorOfrecemos from "@/components/section/valorqueOfrecemos";
import HeroCarrusel from "@/components/section/HeroCarrusel"
import ClientesCarrusel from "@/components/section/clienteCarrusel";


export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50">
      <HeroCarrusel/>
      <QuienesSomos/>
      <NuestroServicios/>
      <ValorOfrecemos/>
      <ClientesCarrusel/>
    </div>
  );
}
