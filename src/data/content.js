// All editable site copy and data lives here, kept separate from presentation.
// Swap image URLs for locally-hosted assets in /public before going live —
// hotlinking a client's WordPress media library can silently fail if their
// host has hotlink protection enabled.

export const navLinks = [
  { key: 'experiences', label: 'Experiences', href: '#experiences' },
  { key: 'destinations', label: 'Destinations', href: '#destinations' },
  { key: 'about', label: 'About', href: '#about' },
  { key: 'contact', label: 'Contact', href: '#contact' }
]

// Each hero section has its own gradient "scene" — self-contained CSS,
// no external image request required. Swap `image` in for a url() if/when
// real photography is confirmed to load reliably from the production domain.
export const heroSections = [
  {
    key: 'experiences',
    eyebrow: 'Explore',
    label: 'EXPERIENCES',
    gradient:
      'radial-gradient(ellipse 70% 55% at 30% 20%, rgba(139,168,120,0.28), transparent 60%), linear-gradient(160deg, #2E4A38 0%, #142019 100%)'
  },
  {
    key: 'destinations',
    eyebrow: 'Where To',
    label: 'DESTINATIONS',
    gradient:
      'radial-gradient(ellipse 70% 55% at 70% 20%, rgba(201,161,90,0.30), transparent 60%), linear-gradient(160deg, #4A3A22 0%, #1C150D 100%)'
  },
  {
    key: 'about',
    eyebrow: 'Who We Are',
    label: 'ABOUT',
    gradient:
      'radial-gradient(ellipse 70% 55% at 50% 15%, rgba(156,74,50,0.28), transparent 60%), linear-gradient(160deg, #3A2A2A 0%, #16100F 100%)'
  },
  {
    key: 'contact',
    eyebrow: 'Get In Touch',
    label: 'CONTACT',
    gradient:
      'radial-gradient(ellipse 70% 55% at 40% 25%, rgba(191,219,214,0.22), transparent 60%), linear-gradient(160deg, #234A44 0%, #0D1F1C 100%)'
  }
]

export const heroBaseGradient =
  'radial-gradient(ellipse 80% 60% at 50% 15%, rgba(198,161,91,0.16), transparent 60%), linear-gradient(165deg, #22362B 0%, #0F1B14 60%, #0A130F 100%)'

export const adventureCards = [
  {
    key: 'rwanda',
    href: 'https://luxehorizonsafrica.com/tours/rwandas-primates/',
    image:
      'https://luxehorizonsafrica.com/wp-content/uploads/2023/07/Gorilla-Chimp-Trek.jpg',
    badge: '7 Nights',
    title: "Rwanda's Primates",
    route: 'Kigali · Nyungwe · Volcanoes NP',
    price: 'Price on request'
  },
  {
    key: 'uganda',
    href: 'https://luxehorizonsafrica.com/tours/best-of-the-pearl-of-africa/',
    image: 'https://luxehorizonsafrica.com/wp-content/uploads/2023/07/Lion-in-Uganda.jpg',
    badge: '10 Days',
    title: 'Pearl of Africa',
    route: 'Bwindi · Queen Elizabeth · Kibale',
    price: 'Price on request'
  },
  {
    key: 'tanzania',
    href: 'https://luxehorizonsafrica.com/tours/tanzania-classic/',
    image: 'https://luxehorizonsafrica.com/wp-content/uploads/2023/08/Elephants.jpg',
    badge: '7 Days',
    title: 'Tanzania Classic',
    route: 'Tarangire · Ngorongoro · Serengeti',
    price: 'Price on request'
  },
  {
    key: 'custom',
    href: 'https://luxehorizonsafrica.com/destinations/',
    image:
      'https://luxehorizonsafrica.com/wp-content/uploads/2023/07/Step-into-a-world.jpg',
    badge: 'Custom',
    title: 'Build Your Own',
    route: 'Rwanda · Uganda · Tanzania',
    price: 'Speak to a designer'
  }
]

export const destinations = [
  {
    key: 'rwanda',
    eyebrow: '01 — Volcanoes & Nyungwe',
    name: 'Rwanda',
    image:
      'https://luxehorizonsafrica.com/wp-content/uploads/2023/07/Gorilla-Chimp-Trek.jpg'
  },
  {
    key: 'uganda',
    eyebrow: '02 — Bwindi & Queen Elizabeth',
    name: 'Uganda',
    image: 'https://luxehorizonsafrica.com/wp-content/uploads/2023/07/Lion-in-Uganda.jpg'
  },
  {
    key: 'tanzania',
    eyebrow: '03 — Serengeti & Ngorongoro',
    name: 'Tanzania',
    image: 'https://luxehorizonsafrica.com/wp-content/uploads/2023/08/Elephants.jpg'
  }
]

// ring: 1 (inner) or 2 (outer) — radius for each is defined in partnerRingRadii below
// angle: degrees, 0 = right, 90 = straight up, 180 = left (spread across the top arc)
export const partners = [
  { name: 'Rwanda Development Board', logo: 'https://luxehorizonsafrica.com/wp-content/uploads/2023/07/RDB-logo-1.jpg', ring: 1, angle: 55 },
  { name: 'ILTM', logo: 'https://luxehorizonsafrica.com/wp-content/uploads/2023/07/International-Luxury-Travel-Market-1.png', ring: 1, angle: 125 },
  { name: 'RTTA', logo: 'https://luxehorizonsafrica.com/wp-content/uploads/2023/07/RTTA.jpg', ring: 2, angle: 18 },
  { name: 'East Africa Tourism Platform', logo: 'https://luxehorizonsafrica.com/wp-content/uploads/2023/07/East-Africa-Tourism-Platform-1.jpg', ring: 2, angle: 68 },
  { name: 'ITB', logo: 'https://luxehorizonsafrica.com/wp-content/uploads/2023/07/ITB-Logo.jpg', ring: 2, angle: 112 },
  { name: 'OTM', logo: 'https://luxehorizonsafrica.com/wp-content/uploads/2023/07/OTM-Logo.jpg', ring: 2, angle: 162 }
]

// Pixel radius for each ring, measured from the center mark at the base of the orbit.
export const partnerRingRadii = { 1: 130, 2: 235 }

export const contact = {
  address: 'KN5, Kigali — Rwanda',
  phone: '+250 788 615 233',
  phoneHref: 'tel:+250788615233',
  email: 'info@luxehorizonsafrica.com',
  instagram: 'https://www.instagram.com/luxehorizonsafrica',
  whatsapp: 'https://api.whatsapp.com/send?phone=250788615233'
}