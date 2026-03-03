import { Metadata } from "next";
import FilosofiaCorporativa from "./FilosofiaCorporativa";
import QuienesSomos from "./quienesSomos";
import NuestrosValores from "../valores/valores";

export const metadata: Metadata = {
  title: "Nosotros | Conozca VC Parts and Services",
  description: "Somos una empresa 100% peruana con profesionales de amplia experiencia en mantenimiento de equipos industriales. Comprometidos con la calidad y el servicio excelencia.",
  keywords: [
    "nosotros",
    "empresa peruana",
    "mantenimiento industrial",
    "repuestos industriales",
    "VC Parts and Services",
    "Chimbote",
    "Ancash",
    "profesionales industriales"
  ],
  openGraph: {
    title: "Nosotros | VC Parts and Services",
    description: "Empresa peruana especializada en mantenimiento industrial y suministro de repuestos.",
    url: "https://www.vcpartsandservices.com/pages/nosotros",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "VC Parts and Services - Nosotros",
      },
    ],
  },
};

export default function NosotrosPage() {

    return (
        <>
            <QuienesSomos />
            <FilosofiaCorporativa />
            <NuestrosValores />

        </>
    );
}