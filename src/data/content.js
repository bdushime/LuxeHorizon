// All editable site copy and data lives here, kept separate from presentation.
// Swap image URLs for locally-hosted assets in /public before going live —
// hotlinking a client's WordPress media library can silently fail if their
// host has hotlink protection enabled.

export const navLinks = [
  { key: 'experiences', label: 'Experiences', href: '/experiences' },
  { key: 'destinations', label: 'Destinations', href: '/destinations' },
  { key: 'blog', label: 'Blog', href: '/blog' },
  { key: 'about', label: 'About', href: '/about' },
  { key: 'testimonials', label: 'Testimonials', href: '/testimonials' },
  { key: 'contact', label: 'Contact', href: '/#contact' }
]

// Each hero section has its own gradient "scene" — self-contained CSS,
// no external image request required. `image`, when set, is used instead of
// the gradient (the gradient becomes a dark overlay for text legibility on
// top of it). All four currently point at the same placeholder photo —
// swap each one individually once more photos are available.
export const heroSections = [
  {
    key: 'experiences',
    eyebrow: 'Explore',
    label: 'EXPERIENCES',
    image: '/exp-primates.jpg',
    gradient:
      'radial-gradient(ellipse 70% 55% at 30% 20%, rgba(139,168,120,0.28), transparent 60%), linear-gradient(160deg, #2E4A38 0%, #142019 100%)'
  },
  {
    key: 'destinations',
    eyebrow: 'Where To',
    label: 'DESTINATIONS',
    image: '/exp-tanzania.jpg',
    gradient:
      'radial-gradient(ellipse 70% 55% at 70% 20%, rgba(201,161,90,0.30), transparent 60%), linear-gradient(160deg, #4A3A22 0%, #1C150D 100%)'
  },
  {
    key: 'about',
    eyebrow: 'Who We Are',
    label: 'ABOUT',
    image: '/story-guide.jpg',
    gradient:
      'radial-gradient(ellipse 70% 55% at 50% 15%, rgba(156,74,50,0.28), transparent 60%), linear-gradient(160deg, #3A2A2A 0%, #16100F 100%)'
  },
  {
    key: 'contact',
    eyebrow: 'Get In Touch',
    label: 'CONTACT',
    image: '/cta-sunset.jpg',
    gradient:
      'radial-gradient(ellipse 70% 55% at 40% 25%, rgba(191,219,214,0.22), transparent 60%), linear-gradient(160deg, #234A44 0%, #0D1F1C 100%)'
  }
]

export const heroBaseImage = '/texp-akagera.jpg'
export const heroBaseGradient =
  "linear-gradient(180deg, rgba(8,16,13,0.12) 0%, rgba(8,16,13,0.28) 100%), url('/texp-akagera.jpg')"

export const adventureCards = [
  {
    key: 'rwanda',
    href: '/experiences?exp=rwandas-primates',
    image: '/experiences/featured/rwandas-primates.jpg',
    badge: '7 Nights',
    title: "Rwanda's Primates",
    route: 'Kigali · Nyungwe · Volcanoes NP',
    price: 'Price on request',
    accent: '#5c6b4f'
  },
  {
    key: 'uganda',
    href: '/experiences?exp=best-of-the-pearl-of-africa',
    image: '/experiences/featured/best-of-the-pearl-of-africa.jpg',
    badge: '10 Days',
    title: 'Pearl of Africa',
    route: 'Bwindi · Queen Elizabeth · Kibale',
    price: 'Price on request',
    accent: '#b9772e'
  },
  {
    key: 'tanzania',
    href: '/experiences?exp=tanzania-classic',
    image: '/experiences/featured/tanzania-classic.jpg',
    badge: '7 Days',
    title: 'Tanzania Classic',
    route: 'Tarangire · Ngorongoro · Serengeti',
    price: 'Price on request',
    accent: '#3f6b63'
  },
  {
    key: 'custom',
    href: '/experiences',
    image: '/experiences/featured/rwanda-discovery.jpg',
    badge: 'Custom',
    title: 'Build Your Own',
    route: 'Rwanda · Uganda · Tanzania',
    price: 'Speak to a designer',
    accent: '#9c4a32'
  }
]

export const destinations = [
  {
    key: 'rwanda',
    eyebrow: '01 — Volcanoes & Nyungwe',
    name: 'Rwanda',
    image:
      'https://luxehorizonsafrica.com/wp-content/uploads/2023/07/Gorilla-Chimp-Trek.jpg',
    accent: '#5c6b4f'
  },
  {
    key: 'uganda',
    eyebrow: '02 — Bwindi & Queen Elizabeth',
    name: 'Uganda',
    image: 'https://luxehorizonsafrica.com/wp-content/uploads/2023/07/Lion-in-Uganda.jpg',
    accent: '#b9772e'
  },
  {
    key: 'tanzania',
    eyebrow: '03 — Serengeti & Ngorongoro',
    name: 'Tanzania',
    image: 'https://luxehorizonsafrica.com/wp-content/uploads/2023/08/Elephants.jpg',
    accent: '#3f6b63'
  },
  {
    key: 'kenya',
    eyebrow: '04 — Maasai Mara & Amboseli',
    name: 'Kenya',
    // Placeholder photo — swap for a real Maasai Mara / Amboseli shot before launch.
    image: '/exp-akagera.jpg',
    accent: '#9c4a32'
  }
]

// ring: 1 (inner) or 2 (outer) — radius for each is defined in partnerRingRadii below
// angle: degrees, 0 = right, 90 = straight up, 180 = left (spread across the top arc)
// Using local /public files here — the previous hotlinked WordPress URLs
// (ILTM, ITB, OTM) were unreliable and rendered tiny/broken. Add those back
// with local files if/when available; for now the orbit uses only the four
// logos that have local, verified-working assets.
export const partners = [
  { name: 'Rwanda Development Board', logo: '/RwandaDevelopmentBoard-removebg-preview.png', ring: 2, angle: 25 },
  { name: 'RTTA', logo: '/RTTA-removebg-preview.png', ring: 1, angle: 60 },
  { name: 'Akagera Aviation', logo: '/AkageraAviation-removebg-preview.png', ring: 1, angle: 120 },
  { name: 'East Africa Tourism Platform', logo: '/EastAfrica-removebg-preview.png', ring: 2, angle: 155 }
]

// Pixel radius for each ring, measured from the center mark at the base of the orbit.
export const partnerRingRadii = { 1: 130, 2: 235 }

export const contact = {
  address: 'KN5, Kigali — Rwanda',
  phone: '+250 78',
  phoneHref: 'tel:+250788615233',
  email: 'info@luxehorizonsafrica.com',
  instagram: 'https://www.instagram.com/luxehorizonsafrica',
  whatsapp: 'https://api.whatsapp.com/send?phone=250788615233',
  youtube: 'https://www.youtube.com/@luxehorizonsafrica'
}

export const videoSection = {
  src: '/luxe-horizons-video.mp4',
  eyebrow: 'Watch Our Story',
  heading: 'Rwanda, the Land of a Thousand Hills',
  subheading:
    'A short look at what it feels like to be here — the full film is on our YouTube channel.'
}

// Placeholder blog posts — swap in real articles, dates and cover photos
// before launch.
export const blogPosts = [
  {
    key: 'gorilla-etiquette',
    category: 'Gorilla Trekking',
    date: 'March 2026',
    title: 'What Nobody Tells You Before Your First Gorilla Trek',
    excerpt:
      'The permit is the easy part. Here is what actually matters on the day — from altitude to the seven-metre rule.',
    image: '/Mountain Gorilla.jpg.jpeg',
    accent: '#5c6b4f'
  },
  {
    key: 'best-time-safari',
    category: 'Travel Tips',
    date: 'February 2026',
    title: 'The Best Time to Visit Rwanda, Uganda and Tanzania',
    excerpt:
      'Peak season means peak crowds. We break down what each month actually looks like on the ground.',
    image: '/story-guide.jpg',
    accent: '#b9772e'
  },
  {
    key: 'community-conservation',
    category: 'Conservation',
    date: 'January 2026',
    title: 'Inside the Community Projects Funded by Your Park Fees',
    excerpt:
      'Where the money from your trekking permit actually goes, and the villages you can visit to see it firsthand.',
    image: '/Bird.jpg.jpeg',
    accent: '#3f6b63'
  },
  {
    key: 'packing-list',
    category: 'Travel Tips',
    date: 'December 2025',
    title: 'The Only Packing List You Need for a Gorilla Trek',
    excerpt:
      'What actually earns a place in your daypack for the trailhead, and what to leave at the lodge.',
    image: '/exp-primates.jpg',
    accent: '#b9772e'
  },
  {
    key: 'silverback-families',
    category: 'Gorilla Trekking',
    date: 'November 2025',
    title: 'Meet the Habituated Families of Volcanoes National Park',
    excerpt:
      'A field guide to the named troops you might spend an hour with, and the rangers who know them by name.',
    image: '/exp-akagera.jpg',
    accent: '#5c6b4f'
  },
  {
    key: 'ranger-diaries',
    category: 'Conservation',
    date: 'October 2025',
    title: 'A Day With the Rangers Who Guard the Volcanoes',
    excerpt:
      'Before dawn patrols, snare removal, and the quiet work that keeps the parks standing for the next generation.',
    image: '/cta-sunset.jpg',
    accent: '#3f6b63'
  },
  {
    key: 'visa-permits',
    category: 'Travel Tips',
    date: 'September 2025',
    title: 'Visas, Permits and Paperwork: A No-Stress Guide',
    excerpt:
      'Everything to sort before you fly, laid out in the order you actually need to do it.',
    image: '/story-guide.jpg',
    accent: '#b9772e'
  }
]

// Placeholder client stories — swap in real guest names, quotes and photos
// (their own trip snapshots, not marketing stock shots) before launch.
export const testimonials = [
  {
    key: 't1',
    name: 'Emily Carter',
    origin: 'Traveled from London',
    quote:
      'We spent forty minutes six feet from a silverback and nobody said a word. Our guide read the family like he’d grown up beside them.',
    rating: 5,
    photo: '/Mountain Gorilla.jpg.jpeg',
    rotate: -6
  },
  {
    key: 't2',
    name: 'James Okoro',
    origin: 'Traveled from Lagos',
    quote:
      'Every lodge, every transfer, every small detail was arranged before we even thought to ask. It felt less like a tour and more like being hosted.',
    rating: 5,
    photo: '/Bird.jpg.jpeg',
    rotate: 5
  },
  {
    key: 't3',
    name: 'Sofia Alvarez',
    origin: 'Traveled from Madrid',
    quote:
      'Our guide noticed I loved birdlife more than the big cats and quietly rebuilt two days of the itinerary around it. Nobody made me feel like an inconvenience.',
    rating: 5,
    photo: '/story-guide.jpg',
    rotate: -3
  },
  {
    key: 't4',
    name: 'Daniel Kim',
    origin: 'Traveled from Seoul',
    quote:
      'The kind of trip you replay in your head for months afterward. Kigali to the volcanoes felt effortless, and every night ended with a view worth the drive.',
    rating: 5,
    photo: '/cta-sunset.jpg',
    rotate: 7
  },
  {
    key: 't5',
    name: 'Amara Diallo',
    origin: 'Traveled from Dakar',
    quote:
      'They designed the whole trip around my grandmother joining us at seventy-eight. Slower mornings, softer roads, and she still talks about the chimps.',
    rating: 5,
    photo: '/exp-primates.jpg',
    rotate: -8
  }
]

export const aboutMethodology = {
  eyebrow: 'Our Approach',
  heading: 'Crafted With Purpose',
  subheading:
    'Three pillars defining every expedition we design.',
  stages: [
    {
      num: '01',
      title: 'Bespoke Design',
      description:
        'Tailored from scratch around your specifications, schedule, and budget.'
    },
    {
      num: '02',
      title: 'Private Guiding',
      description:
        'Dedicated specialist guides managing all daily logistics and wildlife encounters.'
    },
    {
      num: '03',
      title: 'Meaningful Impact',
      description:
        'Direct connection with local conservation and community initiatives.'
    }
  ]
}

export const teamMembers = [
  {
    id: 'david-rutikanga',
    name: 'David Rutikanga',
    title: 'Founder & Managing Director',
    badge: 'Leadership',
    image: '/team/david.jpg',
    summary: '15+ years in luxury East African safaris. Cornell & SITE Africa alumnus.',
    bio: 'Founder of Luxe Horizon with over 15 years in luxury hospitality. Certified by Cornell University and SITE Africa in incentive travel and safari planning.'
  },
  {
    id: 'emile-gashumba',
    name: 'Emile Gashumba',
    title: 'Operations Manager',
    badge: 'Operations',
    image: '/team/emile.jpg',
    summary: 'Master’s in Finance recipient directing daily travel & air logistics.',
    bio: 'Over a decade of operations management. Holds a Master’s degree in Finance and leads daily ground and aerial travel logistics.'
  },
  {
    id: 'honorine-uwase',
    name: 'Honorine Uwase',
    title: 'Accounts Manager',
    badge: 'Finance',
    image: '/team/honorine.jpg',
    summary: 'Senior financial strategist overseeing corporate assets & accounts.',
    bio: 'Former Senior Accountant at Jibu Corporate with over 5 years of experience in corporate asset management and balance sheet precision.'
  },
  {
    id: 'eduige-mbabazi',
    name: 'Eduige Mbabazi',
    title: 'Senior Travel Designer',
    badge: 'Design',
    image: '/team/eduige.jpg',
    summary: 'Decade of hospitality experience crafting custom wilderness journeys.',
    bio: 'Hospitality veteran with a Bachelor’s in Business Management, specializing in warm, nature-centric safari design.'
  },
  {
    id: 'davinah-uwera',
    name: 'Davinah Uwera',
    title: 'Travel Designer',
    badge: 'Design',
    image: '/team/davinah.jpg',
    summary: 'Law graduate delivering precise itinerary execution & consultation.',
    bio: 'Holds a Bachelor of Laws from Université Libre de Kigali. Combines legal precision with swift travel consultancy.'
  },
  {
    id: 'sheila-tuti-mpairwe',
    name: 'Sheila Tuti Mpairwe',
    title: 'Travel & Lifestyle Specialist',
    badge: 'Sustainability',
    image: '/team/sheila.png',
    summary: 'MBA holder advocating sustainable, community-centered travel.',
    bio: 'Holds an MBA from Makerere University. Focuses on responsible tourism, community engagement, and conservation.'
  },
  {
    id: 'tona-lauria-rutayisire',
    name: 'Tona Lauria Rutayisire',
    title: 'Assistant Operations',
    badge: 'Operations',
    image: '/team/tona.jpg',
    summary: 'Field coordinator managing guide communications & supplier liaisons.',
    bio: 'Coordinates real-time field operations, guide communications, and supplier relationships to ensure smooth travel execution.'
  }
]