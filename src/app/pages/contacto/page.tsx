import { Metadata } from "next";
import Contacto from "./contacto";
import LocationMap from "./LocationMap";

export const metadata: Metadata = {
  title: "Contacto",
  description: "Contacte con VC Parts and Services. Ubicados en Urb. San Rafael J4-16, Nuevo Chimbote, Ancash, Perú. Llámenos al +51 960 785 273 o escríbanos a info@vcpartsandservices.com.",
  keywords: [
    "contacto VC Parts and Services",
    "información contacto",
    "Chimbote Ancash Perú",
    "servicios industriales contacto",
    "repuestos industriales contacto",
    "teléfono VC Parts",
    "email VC Parts",
    "dirección VC Parts",
    "mapa ubicación",
    "formulario contacto"
  ],
  openGraph: {
    title: "Contacto | VC Parts and Services",
    description: "Contacte con nosotros. Ubicados en Chimbote, Ancash, Perú. Expertos en mantenimiento industrial y repuestos.",
    url: "https://www.vcpartsandservices.com/pages/contacto",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "VC Parts and Services - Contacto",
      },
    ],
  },
};

interface LocationInfo {
    address: string;
    phone: string;
    email: string;
    // URL del mapa de Google Maps para incrustar (iframe)
    mapIframeUrl: string;
}
// Datos de ejemplo
// NOTA: Debes reemplazar 'YOUR_EMBED_MAP_URL' con la URL real de incrustación de Google Maps.
// Para obtener la URL, busca tu empresa en Google Maps, haz clic en "Compartir",
// selecciona "Insertar mapa" y copia el contenido del atributo 'src' del <iframe>.
const DEFAULT_LOCATION_INFO: LocationInfo = {
    address: 'Urb. San Rafael J4-16, Nuevo Chimbote, Ancash, Perú',
    phone: '+51 960 785 273',
    email: 'info@vcpartsandservices.com',
    mapIframeUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3943.036579942371!2d-78.5217974!3d-9.120966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91ab85b4e09d8efd%3A0xe1232f727bcbe18a!2sUrb.%20San%20Rafael%2C%20Chimbote%2002711!5e0!3m2!1ses-419!2spe!4v1731341510000!5m2!1ses-419!2spe",
};

export default function ContactoPage(){

    return(
        <>
            <Contacto/>
            <LocationMap info={DEFAULT_LOCATION_INFO}/>
        </>

    );
}