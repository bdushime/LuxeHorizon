/**
 * Centralized SEO & Social Sharing Configuration for Luxe Horizons Africa
 * Production Domain: https://luxehorizonsafrica.com/
 */

export const SITE_URL = 'https://luxehorizonsafrica.com';
export const SITE_NAME = 'Luxe Horizons Africa';
export const DEFAULT_OG_IMAGE = `${SITE_URL}/texp-akagera.jpg`;

export const DEFAULT_SEO = {
  title: 'Luxe Horizons Africa | Luxury Safaris & Gorilla Treks',
  description:
    'Bespoke luxury safaris and private gorilla trekking in Rwanda, Uganda, Tanzania and Kenya, crafted by Kigali-based trip designers.',
  canonical: `${SITE_URL}/`,
  ogType: 'website',
  ogImage: DEFAULT_OG_IMAGE
};

/**
 * Route-specific SEO Metadata Inventory
 * Titles kept to ~60 chars, descriptions to 120-160 chars — the ranges
 * SEOptimer (and most SEO tools) flag outside of, per the client's audit
 * of the current live site.
 */
export const PAGE_SEO = {
  home: {
    title: 'Luxe Horizons Africa | Luxury Safaris & Gorilla Treks',
    description:
      'Bespoke luxury safaris and private gorilla trekking in Rwanda, Uganda, Tanzania and Kenya, crafted by Kigali-based trip designers.',
    canonical: `${SITE_URL}/`,
    ogImage: `${SITE_URL}/texp-akagera.jpg`
  },
  destinations: {
    title: 'East Africa Safari Destinations | Luxe Horizons Africa',
    description:
      "Explore East Africa's top safari destinations, from Rwanda's misty volcanoes to Uganda's Bwindi forest and the Serengeti plains.",
    canonical: `${SITE_URL}/destinations`,
    ogImage: `${SITE_URL}/exp-tanzania.jpg`
  },
  destinationDetail: {
    rwanda: {
      title: 'Rwanda Safaris & Gorilla Trekking Guide | Luxe Horizons',
      description:
        'Mountain gorillas in Volcanoes National Park, chimpanzees in Nyungwe, and Big Five safaris in Akagera. Bespoke Rwandan itineraries.',
      canonical: `${SITE_URL}/destinations/rwanda`,
      ogImage: `${SITE_URL}/Mountain%20Gorilla.jpg.jpeg`
    },
    uganda: {
      title: 'Uganda Safari Guide — Bwindi Gorillas | Luxe Horizons',
      description:
        'Discover the Pearl of Africa: gorilla trekking in Bwindi, tree-climbing lions in Queen Elizabeth, and Kibale chimpanzee tracking.',
      canonical: `${SITE_URL}/destinations/uganda`,
      ogImage: `${SITE_URL}/Bird.jpg.jpeg`
    },
    tanzania: {
      title: 'Tanzania Safari Guide — Serengeti | Luxe Horizons Africa',
      description:
        'Witness the wildebeest Great Migration in the Serengeti and explore Ngorongoro Crater on a tailor-made luxury Tanzanian safari.',
      canonical: `${SITE_URL}/destinations/tanzania`,
      ogImage: `${SITE_URL}/exp-tanzania.jpg`
    },
    kenya: {
      title: 'Kenya Safari Guide — Maasai Mara | Luxe Horizons Africa',
      description:
        'Classic Kenyan safaris across the Maasai Mara and Amboseli, framed by elephants and Mount Kilimanjaro. Tailor-made luxury travel.',
      canonical: `${SITE_URL}/destinations/kenya`,
      ogImage: `${SITE_URL}/exp-akagera.jpg`
    }
  },
  experiences: {
    title: 'Curated Safaris & Experiences | Luxe Horizons Africa',
    description:
      'Handcrafted safari itineraries across Rwanda, Uganda, Tanzania and Kenya — gorilla treks, primate tracking, private expeditions.',
    canonical: `${SITE_URL}/experiences`,
    ogImage: `${SITE_URL}/exp-primates.jpg`
  },
  about: {
    title: 'About Us — Kigali Safari Specialists | Luxe Horizons',
    description:
      'Meet the Kigali-based team of travel designers crafting bespoke African expeditions with unhurried, private, considered luxury.',
    canonical: `${SITE_URL}/about`,
    ogImage: `${SITE_URL}/story-guide.jpg`
  },
  testimonials: {
    title: 'Client Reviews & Field Stories | Luxe Horizons Africa',
    description:
      'Genuine reviews and safari dispatches from travellers who experienced gorilla trekking and East African safaris with us.',
    canonical: `${SITE_URL}/testimonials`,
    ogImage: `${SITE_URL}/cta-sunset.jpg`
  },
  blog: {
    title: 'Safari Journal & Field Notes | Luxe Horizons Africa',
    description:
      'Expert travel tips, gorilla trekking etiquette, conservation insights and seasonal guides for Rwanda, Uganda and Tanzania.',
    canonical: `${SITE_URL}/blog`,
    ogImage: `${SITE_URL}/Mountain%20Gorilla.jpg.jpeg`
  },
  faq: {
    title: 'Safari FAQ & Travel Tips | Luxe Horizons Africa',
    description:
      'Answers for planning an East African safari: best time to travel, packing lists, permits, yellow fever and family travel.',
    canonical: `${SITE_URL}/faq`,
    ogImage: `${SITE_URL}/texp-akagera.jpg`
  },
  contact: {
    title: 'Contact Us — Plan Your Safari | Luxe Horizons Africa',
    description:
      'Get in touch with our Kigali-based trip designers to start planning your custom gorilla trek or luxury East African safari.',
    canonical: `${SITE_URL}/contact`,
    ogImage: `${SITE_URL}/cta-sunset.jpg`
  },
  consultancy: {
    title: 'Consultancy & MICE | Luxe Horizons Africa',
    description:
      'Travel management consultancy, MICE and educational trip planning across Rwanda, Uganda and Tanzania, by Luxe Horizons Africa.',
    canonical: `${SITE_URL}/consultancy`,
    ogImage: `${SITE_URL}/Consultancy.jpeg`
  },
  notFound: {
    title: 'Page Not Found (404) | Luxe Horizons Africa',
    description:
      'The page you requested could not be found. Explore our luxury safari destinations, experiences, or return to the homepage.',
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
