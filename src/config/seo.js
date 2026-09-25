/**
 * Centralized SEO & Social Sharing Configuration for Luxe Horizons Africa
 * Production Domain: https://luxehorizonsafrica.com/
 */

export const SITE_URL = (import.meta.env.VITE_SITE_URL || import.meta.env.VITE_BASE_URL || import.meta.env.VITE_APP_URL || 'https://luxehorizonsafrica.com').replace(/\/$/, '');
export const SITE_NAME = 'Luxe Horizons Africa';
export const DEFAULT_OG_IMAGE = `${SITE_URL}/texp-akagera.jpg`;

export const DEFAULT_SEO = {
  title: 'Luxe Horizons Africa | Luxury Safaris & Gorilla Trekking East Africa',
  description:
    'Bespoke luxury safaris across Rwanda, Uganda, Tanzania and Kenya. Private mountain gorilla trekking, tailor-made itineraries, and Kigali-based trip specialists.',
  canonical: `${SITE_URL}/`,
  ogType: 'website',
  ogImage: DEFAULT_OG_IMAGE
};

/**
 * Route-specific SEO Metadata Inventory
 */
export const PAGE_SEO = {
  home: {
    title: 'Luxe Horizons Africa | Luxury Safaris & Gorilla Trekking in Rwanda & East Africa',
    description:
      'Bespoke luxury safaris and private gorilla trekking in Rwanda, Uganda, Tanzania, and Kenya. Kigali-based trip designers crafting tailor-made African expeditions.',
    canonical: `${SITE_URL}/`,
    ogImage: `${SITE_URL}/texp-akagera.jpg`
  },
  destinations: {
    title: 'East Africa Safari Destinations — Rwanda, Uganda, Tanzania & Kenya | Luxe Horizons Africa',
    description:
      'Explore East Africa\'s premier safari destinations. From Rwanda\'s misty volcanoes and Akagera plains to Uganda\'s Bwindi forest and the Serengeti.',
    canonical: `${SITE_URL}/destinations`,
    ogImage: `${SITE_URL}/exp-tanzania.jpg`
  },
  destinationDetail: {
    rwanda: {
      title: 'Rwanda Luxury Safaris & Gorilla Trekking Guide | Luxe Horizons Africa',
      description:
        'Experience Rwanda\'s mountain gorillas in Volcanoes National Park, chimpanzees in Nyungwe, and Big Five safaris in Akagera. Bespoke luxury Rwandan itineraries.',
      canonical: `${SITE_URL}/destinations/rwanda`,
      ogImage: `${SITE_URL}/Mountain%20Gorilla.jpg.jpeg`
    },
    uganda: {
      title: 'Uganda Safari Guide — Bwindi Gorillas & Queen Elizabeth NP | Luxe Horizons Africa',
      description:
        'Discover the Pearl of Africa. Private gorilla trekking in Bwindi Impenetrable Forest, tree-climbing lions in Queen Elizabeth, and Kibale chimpanzee tracking.',
      canonical: `${SITE_URL}/destinations/uganda`,
      ogImage: `${SITE_URL}/Bird.jpg.jpeg`
    },
    tanzania: {
      title: 'Tanzania Safari Guide — Great Migration, Serengeti & Ngorongoro | Luxe Horizons Africa',
      description:
        'Witness the Great Migration in the Serengeti and explore Ngorongoro Crater. Tailor-made luxury Tanzanian safaris and private wilderness tented camps.',
      canonical: `${SITE_URL}/destinations/tanzania`,
      ogImage: `${SITE_URL}/exp-tanzania.jpg`
    },
    kenya: {
      title: 'Kenya Luxury Safari Guide — Maasai Mara & Amboseli | Luxe Horizons Africa',
      description:
        'Classic Kenyan safaris across the Maasai Mara grasslands and Amboseli elephants framed against Mount Kilimanjaro. Tailor-made luxury travel.',
      canonical: `${SITE_URL}/destinations/kenya`,
      ogImage: `${SITE_URL}/exp-akagera.jpg`
    }
  },
  experiences: {
    title: 'Curated Safaris & Experiences | Gorilla Treks & Wildlife Expeditions',
    description:
      'Handcrafted safari itineraries across Rwanda, Uganda, Tanzania, and Kenya. Mountain gorilla trekking, primate tracking, and luxury private expeditions.',
    canonical: `${SITE_URL}/experiences`,
    ogImage: `${SITE_URL}/exp-primates.jpg`
  },
  about: {
    title: 'About Us — Kigali Safari Specialists & Team | Luxe Horizons Africa',
    description:
      'Meet the Kigali-based team of travel designers and wildlife specialists crafting bespoke African expeditions with unhurried, private, and considered luxury.',
    canonical: `${SITE_URL}/about`,
    ogImage: `${SITE_URL}/story-guide.jpg`
  },
  testimonials: {
    title: 'Client Reviews & Field Stories | Luxe Horizons Africa Safaris',
    description:
      'Read genuine reviews and safari dispatches from luxury travellers who experienced gorilla trekking and East African safaris with Luxe Horizons Africa.',
    canonical: `${SITE_URL}/testimonials`,
    ogImage: `${SITE_URL}/cta-sunset.jpg`
  },
  blog: {
    title: 'Safari Journal & Field Notes — Gorilla Trekking Tips & Travel Guides',
    description:
      'Expert travel tips, gorilla trekking etiquette, conservation insights, and seasonal guides for Rwanda, Uganda, and Tanzania safaris.',
    canonical: `${SITE_URL}/blog`,
    ogImage: `${SITE_URL}/Mountain%20Gorilla.jpg.jpeg`
  },
  faq: {
    title: 'Safari FAQ & Pre-Departure Travel Tips | Luxe Horizons Africa',
    description:
      'Essential answers for planning an East African safari: best time to travel, packing lists, permits, yellow fever, laundry, and family travel.',
    canonical: `${SITE_URL}/faq`,
    ogImage: `${SITE_URL}/texp-akagera.jpg`
  },
  contact: {
    title: 'Contact Us — Plan Your Bespoke African Safari | Luxe Horizons Africa',
    description:
      'Get in touch with our Kigali trip designers to start planning your custom gorilla trek or luxury East African safari. Phone, WhatsApp, email, or enquiry.',
    canonical: `${SITE_URL}/contact`,
    ogImage: `${SITE_URL}/cta-sunset.jpg`
  },
  notFound: {
    title: 'Page Not Found (404) | Luxe Horizons Africa',
    description:
      'The requested page could not be found. Explore our luxury safari destinations, experiences, or return to the Luxe Horizons homepage.',
    canonical: `${SITE_URL}/404`,
    ogImage: DEFAULT_OG_IMAGE
  }
};

/**
 * Generate Structured Data (JSON-LD)
 */
export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'TravelAgency',
    '@id': `${SITE_URL}/#organization`,
    name: SITE_NAME,
    url: `${SITE_URL}/`,
    logo: `${SITE_URL}/LuxeHorizon-removebg-preview.png`,
    image: DEFAULT_OG_IMAGE,
    description:
      'Bespoke luxury safaris across Rwanda, Uganda, Tanzania and Kenya — private gorilla trekking, tailor-made itineraries, and dedicated Kigali trip designers.',
    telephone: '+250788615233',
    email: 'info@luxehorizonsafrica.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'KN5',
      addressLocality: 'Kigali',
      addressCountry: 'RW'
    },
    areaServed: [
      { '@type': 'Country', name: 'Rwanda' },
      { '@type': 'Country', name: 'Uganda' },
      { '@type': 'Country', name: 'Tanzania' },
      { '@type': 'Country', name: 'Kenya' }
    ],
    sameAs: [
      'https://www.instagram.com/luxehorizonsafrica',
      'https://api.whatsapp.com/send?phone=250788615233',
      'https://www.youtube.com/@luxehorizonsafrica'
    ],
    priceRange: '$$$$'
  };
}

export function generateBreadcrumbSchema(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `${SITE_URL}${item.url}`
    }))
  };
}

export function generateDestinationSchema({ name, description, image, url }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'TouristDestination',
    name,
    description,
    image: image ? (image.startsWith('http') ? image : `${SITE_URL}${image}`) : DEFAULT_OG_IMAGE,
    url: url.startsWith('http') ? url : `${SITE_URL}${url}`,
    includesAttraction: [
      {
        '@type': 'TouristAttraction',
        name: `${name} Wildlife Safaris & Gorilla Trekking`
      }
    ]
  };
}
