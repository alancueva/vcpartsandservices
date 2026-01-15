import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "VC Parts and Services",
  description:
    "VC Parts and Services es una empresa peruana especializada en mantenimiento de equipos industriales y suministro de repuestos mecánicos y eléctricos. Ofrecemos soluciones integrales en motores diésel, generadores, compresores, bombas, separadores de aceite y más, con los más altos estándares de calidad y confiabilidad.",
  keywords: [
    "VC Parts and Services",
    "mantenimiento industrial Perú",
    "repuestos industriales",
    "equipos mecánicos y eléctricos",
    "motores diésel",
    "generadores eléctricos",
    "compresores industriales",
    "bombas",
    "componentes electrónicos",
    "servicios industriales",
    "suministro técnico",
  ],
  authors: [{ name: "VC Parts and Services" }],
  openGraph: {
    title: "VC Parts and Services | Soluciones Industriales en Perú",
    description:
      "Especialistas en mantenimiento de equipos industriales y suministro de repuestos mecánicos y eléctricos. Calidad, experiencia y compromiso con la operatividad de su empresa.",
    url: "https://www.vcpartsandservices.com", // reemplaza con tu dominio real
    siteName: "VC Parts and Services",
    locale: "es_PE",
    type: "website",
  },
  // twitter: {
  //   card: "summary_large_image",
  //   title: "VC Parts and Services | Mantenimiento y Repuestos Industriales",
  //   description:
  //     "Empresa peruana con amplia experiencia en mantenimiento y suministro de equipos industriales. Repuestos para motores diésel, generadores, bombas y más.",
  //   creator: "@vcpartsandservices", // reemplázalo si tienes cuenta de Twitter/X
  // },
  metadataBase: new URL("https://www.vcpartsandservices.com"), // dominio base
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
