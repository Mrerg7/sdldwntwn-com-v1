import { META, SITE } from "@/lib/site";

export function JsonLd() {
  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${SITE.url}/#website`,
        url: SITE.url,
        name: SITE.domain,
        description: META.description,
        inLanguage: "en-US",
        publisher: { "@id": `${SITE.url}/#organization` },
      },
      {
        "@type": "Organization",
        "@id": `${SITE.url}/#organization`,
        name: SITE.brand,
        url: SITE.url,
        email: SITE.email,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Scottsdale",
          addressRegion: "AZ",
          addressCountry: "US",
        },
      },
      {
        "@type": "WebPage",
        "@id": `${SITE.url}/#webpage`,
        url: SITE.url,
        name: META.title,
        description: META.description,
        isPartOf: { "@id": `${SITE.url}/#website` },
        primaryImageOfPage: SITE.ogImage,
        inLanguage: "en-US",
      },
      {
        "@type": "Product",
        "@id": `${SITE.url}/#product`,
        name: `${SITE.domain} Premium Domain Name`,
        description:
          "The definitive premium .com domain for Downtown Scottsdale and Old Town Scottsdale. Available for acquisition.",
        url: SITE.url,
        image: SITE.ogImage,
        category: "Premium Domain Name",
        brand: { "@type": "Brand", name: SITE.domain },
        sku: SITE.domain,
        offers: {
          "@type": "Offer",
          url: SITE.url,
          availability: "https://schema.org/InStock",
          price: SITE.price.toFixed(2),
          priceCurrency: SITE.currency,
          priceValidUntil: "2027-12-31",
          priceSpecification: {
            "@type": "PriceSpecification",
            price: SITE.price.toFixed(2),
            minPrice: SITE.minPrice,
            maxPrice: SITE.price,
            priceCurrency: SITE.currency,
          },
          seller: { "@id": `${SITE.url}/#organization` },
        },
      },
      {
        "@type": "Place",
        "@id": `${SITE.url}/#place`,
        name: "Downtown Scottsdale (Old Town)",
        description:
          "The historic, walkable cultural and commercial heart of Scottsdale, Arizona.",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Scottsdale",
          addressRegion: "AZ",
          addressCountry: "US",
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
