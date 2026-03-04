import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import StructuredData from "@/components/StructuredData";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "VC Parts and Services",
    template: "%s | VC Parts and Services",
  },
  description:
    "VC Parts and Services es una empresa peruana especializada en mantenimiento de equipos industriales y suministro de repuestos mecánicos y eléctricos. Ofrecemos soluciones integrales en motores diésel, generadores, compresores, bombas, separadores de aceite y más, con los más altos estándares de calidad y confiabilidad.",
  keywords: [
    "VC Parts and Services",
    "mantenimiento industrial Perú",
    "repuestos industriales",
    "repuestos mecánicos",
    "repuestos eléctricos",
    "equipos industriales",
    "motores diésel",
    "motores diesel",
    "MDO",
    "HFO",
    "Gas Natural",
    "generadores eléctricos",
    "compresores industriales",
    "bombas industriales",
    "separadores de aceite",
    "separadores de petróleo",
    "turbocompresores",
    "intercambiadores de calor",
    "purificadores de agua",
    "sistemas de inyección",
    "inyectores diesel",
    "limpieza por ultrasonido",
    "lapeado de precisión",
    "lapeado y pulido",
    "pulido de precisión",
    "KEMET",
    "productos KEMET",
    "ingeniería de precisión",
    "herramientas de precisión",
    "desbarbado CNC",
    "soldadura micro",
    "pulido ultrasónico",
    "herramientas NSK",
    "marcado láser",
    "metalografía",
    "preparación de muestras",
    "servicios industriales",
    "suministro técnico",
    "repuestos OEM",
    "fabricantes originales",
    "Chimbote",
    "Nuevo Chimbote",
    "Ancash",
    "Perú",
    "repuestos para motores",
    "filtros industriales",
    "acoplamientos",
    "componentes electrónicos",
    "rectificadora de válvulas",
    "compuestos de diamante",
    "placas de lapeado",
    "fluidos lubricantes",
    "servicio técnico industrial",
    "mantenimiento de equipos",
    "reparación de motores",
  ],
  authors: [{ name: "VC Parts and Services" }],
  creator: "VC Parts and Services",
  publisher: "VC Parts and Services",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://www.vcpartsandservices.com"),
  alternates: {
    canonical: "https://www.vcpartsandservices.com",
  },
  openGraph: {
    title: "VC Parts and Services | Soluciones Industriales en Perú",
    description:
      "Especialistas en mantenimiento de equipos industriales y suministro de repuestos mecánicos y eléctricos. Calidad, experiencia y compromiso con la operatividad de su empresa.",
    url: "https://www.vcpartsandservices.com",
    siteName: "VC Parts and Services",
    locale: "es_PE",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "VC Parts and Services - Soluciones Industriales",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "VC Parts and Services | Mantenimiento y Repuestos Industriales",
    description:
      "Empresa peruana con amplia experiencia en mantenimiento y suministro de equipos industriales. Repuestos para motores diésel, generadores, bombas y más.",
    creator: "@vcpartsandservices",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "VC Parts and Services - Soluciones Industriales",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "business",
  classification: "Industrial Services",
  verification: {
    google: "YOUR_GOOGLE_VERIFICATION_CODE",
    yandex: "YOUR_YANDEX_VERIFICATION_CODE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <StructuredData />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
