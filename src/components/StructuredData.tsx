import Script from "next/script";

export default function StructuredData() {
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "VC Parts and Services",
    "url": "https://www.vcpartsandservices.com",
    "logo": "https://www.vcpartsandservices.com/logo.png",
    "description": "Empresa peruana especializada en mantenimiento de equipos industriales y suministro de repuestos mecánicos y eléctricos.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Urb. San Rafael J4-16",
      "addressLocality": "Nuevo Chimbote",
      "addressRegion": "Ancash",
      "postalCode": "02711",
      "addressCountry": "PE"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+51 960 785 273",
      "contactType": "customer service",
      "email": "info@vcpartsandservices.com",
      "availableLanguage": ["Spanish"]
    },
    "sameAs": [
      "https://www.facebook.com/vcpartsandservices",
      "https://www.linkedin.com/company/vcpartsandservices"
    ],
    "areaServed": {
      "@type": "Country",
      "name": "Perú"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Servicios y Productos Industriales",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Mantenimiento de Motores Diésel",
            "description": "Servicio completo de mantenimiento y reparación de motores diésel industriales."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Limpieza por Ultrasonido",
            "description": "Servicio profesional de limpieza por ultrasonido para componentes industriales."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Product",
            "name": "Repuestos para Motores Diésel",
            "description": "Repuestos de alta calidad para motores diésel, MDO, HFO y Gas Natural."
          }
        }
      ]
    }
  };

  const websiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "VC Parts and Services",
    "url": "https://www.vcpartsandservices.com",
    "description": "Especialistas en mantenimiento de equipos industriales y suministro de repuestos mecánicos y eléctricos en Perú.",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://www.vcpartsandservices.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    },
    "publisher": {
      "@type": "Organization",
      "name": "VC Parts and Services",
      "url": "https://www.vcpartsandservices.com"
    }
  };

  const localBusinessData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "VC Parts and Services",
    "image": "https://www.vcpartsandservices.com/logo.png",
    "url": "https://www.vcpartsandservices.com",
    "telephone": "+51 960 785 273",
    "email": "info@vcpartsandservices.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Urb. San Rafael J4-16",
      "addressLocality": "Nuevo Chimbote",
      "addressRegion": "Ancash",
      "postalCode": "02711",
      "addressCountry": "PE"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "-9.120966",
      "longitude": "-78.5217974"
    },
    "openingHours": "Mo-Fr 08:00-18:00",
    "priceRange": "$$",
    "servesCuisine": ["Industrial Services"],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "45"
    }
  };

  return (
    <>
      <Script
        id="structured-data-organization"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationData),
        }}
      />
      <Script
        id="structured-data-website"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteData),
        }}
      />
      <Script
        id="structured-data-local-business"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessData),
        }}
      />
    </>
  );
}