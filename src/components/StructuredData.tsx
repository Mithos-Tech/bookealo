export function StructuredData() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      // Restaurant
      {
        '@type': 'Restaurant',
        '@id': 'https://bookealo.com/#restaurant',
        name: 'Bookéalo',
        alternateName: 'Bookéalo Cevichería',
        description: 'Cevichería contemporánea especializada en comida marina peruana con pescado fresco diario',
        url: 'https://bookealo.com',
        logo: 'https://bookealo.com/logo-512.png',
        image: [
          'https://bookealo.com/og-image.png',
          'https://bookealo.com/hero-image.jpg'
        ],
        priceRange: 'S/. 45 - S/. 85',
        servesCuisine: ['Peruana', 'Mariscos', 'Ceviche'],
        acceptsReservations: true,
        
        // Location
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Av. Conquistadores 456',
          addressLocality: 'San Isidro',
          addressRegion: 'Lima',
          postalCode: '15073',
          addressCountry: 'PE'
        },
        
        // Contact
        telephone: '+51-999-888-777',
        email: 'hola@bookealo.com',
        
        // Hours
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Tuesday', 'Wednesday', 'Thursday'],
            opens: '12:00',
            closes: '23:00'
          },
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Friday', 'Saturday'],
            opens: '12:00',
            closes: '01:00'
          },
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: 'Sunday',
            opens: '12:00',
            closes: '22:00'
          }
        ],
        
        // Ratings
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.9',
          reviewCount: '120',
          bestRating: '5',
          worstRating: '1'
        },
        
        // Social
        sameAs: [
          'https://www.facebook.com/bookealo',
          'https://www.instagram.com/bookealo',
          'https://www.tripadvisor.com/bookealo'
        ],
        
        // Menu
        hasMenu: 'https://bookealo.com/#menu',
        
        // Features
        amenityFeature: [
          {
            '@type': 'LocationFeatureSpecification',
            name: 'Terraza exterior',
            value: true
          },
          {
            '@type': 'LocationFeatureSpecification',
            name: 'Sala privada',
            value: true
          },
          {
            '@type': 'LocationFeatureSpecification',
            name: 'Barra',
            value: true
          }
        ]
      },
      
      // Website
      {
        '@type': 'WebSite',
        '@id': 'https://bookealo.com/#website',
        url: 'https://bookealo.com',
        name: 'Bookéalo',
        description: 'Cevichería Contemporánea en San Isidro, Lima',
        publisher: {
          '@id': 'https://bookealo.com/#organization'
        }
      },
      
      // Organization
      {
        '@type': 'Organization',
        '@id': 'https://bookealo.com/#organization',
        name: 'Bookéalo',
        url: 'https://bookealo.com',
        logo: {
          '@type': 'ImageObject',
          url: 'https://bookealo.com/logo-512.png',
          width: 512,
          height: 512
        },
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: '+51-999-888-777',
          contactType: 'Reservations',
          availableLanguage: 'Spanish',
          areaServed: 'PE'
        }
      },
      
      // Menu Items (Featured Dishes)
      {
        '@type': 'MenuItem',
        name: 'Ceviche Clásico',
        description: 'Pescado fresco del día marinado en limón, ají limo, cebolla morada y cilantro',
        offers: {
          '@type': 'Offer',
          price: '45',
          priceCurrency: 'PEN'
        },
        nutrition: {
          '@type': 'NutritionInformation',
          calories: '250 calories'
        }
      },
      {
        '@type': 'MenuItem',
        name: 'Tiradito Nikkei',
        description: 'Finas láminas de pescado con salsa nikkei, ajonjolí y cebollino',
        offers: {
          '@type': 'Offer',
          price: '48',
          priceCurrency: 'PEN'
        }
      },
      {
        '@type': 'MenuItem',
        name: 'Arroz con Mariscos',
        description: 'Arroz cremoso con mariscos frescos del día, sofrito y ají amarillo',
        offers: {
          '@type': 'Offer',
          price: '52',
          priceCurrency: 'PEN'
        }
      },
      
      // Breadcrumb
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Inicio',
            item: 'https://bookealo.com'
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Menú',
            item: 'https://bookealo.com/#menu'
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'Reservas',
            item: 'https://bookealo.com/#reservation'
          },
          {
            '@type': 'ListItem',
            position: 4,
            name: 'Contacto',
            item: 'https://bookealo.com/#contact'
          }
        ]
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
