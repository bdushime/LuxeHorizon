// All editable site copy and data lives here, kept separate from presentation.
// Swap image URLs for locally-hosted assets in /public before going live —
// hotlinking a client's WordPress media library can silently fail if their
// host has hotlink protection enabled.

export const navLinks = [
  { key: 'home', label: 'Home', href: '/' },
  { key: 'destinations', label: 'Destinations', href: '/destinations' },
  { key: 'experiences', label: 'Experiences', href: '/experiences' },
  { key: 'blog', label: 'Blog', href: '/blog' },
  { key: 'about', label: 'About Us', href: '/about' },
  { key: 'testimonials', label: 'Testimonials', href: '/testimonials' },
  { key: 'faq', label: 'FAQ', href: '/faq' },
  { key: 'consultancy', label: 'Consultancy & Incentive Travel', href: '/consultancy' },
  { key: 'contact', label: 'Contact Us', href: '/contact' }
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
    image: '/exp-primates.webp',
    gradient:
      'radial-gradient(ellipse 70% 55% at 30% 20%, rgba(139,168,120,0.28), transparent 60%), linear-gradient(160deg, #2E4A38 0%, #142019 100%)'
  },
  {
    key: 'destinations',
    eyebrow: 'Where To',
    label: 'DESTINATIONS',
    image: '/exp-tanzania.webp',
    gradient:
      'radial-gradient(ellipse 70% 55% at 70% 20%, rgba(201,161,90,0.30), transparent 60%), linear-gradient(160deg, #4A3A22 0%, #1C150D 100%)'
  },
  {
    key: 'about',
    eyebrow: 'Who We Are',
    label: 'ABOUT',
    image: '/story-guide.webp',
    gradient:
      'radial-gradient(ellipse 70% 55% at 50% 15%, rgba(156,74,50,0.28), transparent 60%), linear-gradient(160deg, #3A2A2A 0%, #16100F 100%)'
  },
  {
    key: 'contact',
    eyebrow: 'Get In Touch',
    label: 'CONTACT',
    image: '/cta-sunset.webp',
    gradient:
      'radial-gradient(ellipse 70% 55% at 40% 25%, rgba(191,219,214,0.22), transparent 60%), linear-gradient(160deg, #234A44 0%, #0D1F1C 100%)'
  }
]

export const heroBaseImage = '/Travel.webp'
export const heroBaseGradient =
  "linear-gradient(180deg, rgba(8,16,13,0.12) 0%, rgba(8,16,13,0.28) 100%), url('/Travel.webp')"

export const adventureCards = [
  {
    key: 'rwanda',
    href: '/experiences?exp=rwanda-primates-corner-premium',
    image: '/mountain-gorilla-1.webp',
    badge: '6 Days',
    title: 'Rwanda Primates Corner, Premium',
    route: 'Kigali · Nyungwe · Volcanoes NP',
    price: 'Price on request',
    accent: '#5c6b4f'
  },
  {
    key: 'uganda',
    href: '/experiences?exp=9day-uganda-adventure',
    image: '/experiences/featured/best-of-the-pearl-of-africa.webp',
    badge: '9 Days',
    title: 'Uganda Wildlife Adventure',
    route: 'Bwindi · Queen Elizabeth · Murchison Falls',
    price: 'Price on request',
    accent: '#b9772e'
  },
  {
    key: 'tanzania',
    href: '/experiences?exp=11-day-tanzania-rwanda-premium',
    image: '/experiences/featured/the-great-migration-adventure.webp',
    badge: '11 Days',
    title: 'Tanzania & Rwanda, Premium',
    route: 'Serengeti · Ngorongoro · Volcanoes NP',
    price: 'Price on request',
    accent: '#3f6b63'
  },
  {
    key: 'custom',
    href: '/contact',
    image: '/experiences/featured/rwanda-discovery.webp',
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
    image: '/experiences/featured/gorillas-in-the-mist.webp',
    accent: '#5c6b4f'
  },
  {
    key: 'uganda',
    eyebrow: '02 — Bwindi & Queen Elizabeth',
    name: 'Uganda',
    image: '/experiences/featured/best-of-the-pearl-of-africa.webp',
    accent: '#b9772e'
  },
  {
    key: 'tanzania',
    eyebrow: '03 — Serengeti & Ngorongoro',
    name: 'Tanzania',
    image: '/Tanzania.webp',
    accent: '#3f6b63'
  },
  {
    key: 'kenya',
    eyebrow: '04 — Maasai Mara & Amboseli',
    name: 'Kenya',
    image: '/Kenya.webp',
    accent: '#9c4a32'
  }
]

// Long-form per-country content for the individual destination pages
// (/destinations/:key). All four countries now use the client's real copy.
// Kenya, Tanzania and Uganda use the client's real photos. Rwanda's client
// photo was supplied as a .HEIC file, which browsers can't render, so it's
// still on the old placeholder until a JPG/PNG version is provided.
export const destinationDetails = {
  rwanda: {
    paragraphs: [
      "‘Murakaza neza’ Welcome to Rwanda, a breathtaking landscape of a thousand hills with a million smiling faces. With 26,388Km2 of size, 14 million people of which 70% are below 35 years of age, this small young and yet ambitious country would give you a shock of life. Etched into global consciousness by the brutality of the 1994 genocide, the social and economic repair that has occurred since is nothing short of miraculous, the country is stable, with a track record as the fastest growing in Africa and tourism once again a key contributor to the economy. Primate safaris may be the primary drawcard for the country, but it’s not all monkey business – go beyond the gorillas, step into an adventure playground waiting to be discovered by the active traveler and experience a country breathtaking in its beauty and graced by a people generous in their welcome."
    ],
    pullQuote: 'Rwanda is famous for being home to almost half of the world\'s mountain gorillas.',
    facts: [
      { label: 'Capital', value: 'Kigali' },
      { label: 'Known As', value: 'Land of a Thousand Hills' },
      { label: 'Signature Wildlife', value: 'Mountain Gorillas' },
      {
        label: 'Best Known For',
        value: [
          'Akagera National Park (home to Big5)',
          'Volcanoes National Park (home to Gorillas & Golden Monkeys)',
          'Nyungwe National Park (home to Chimps and Canopy walkway)',
          'Lake Kivu (Boat Cruise, watersports & fishing Community)'
        ]
      }
    ],
    secondaryPhoto: '/experiences/featured/gorillas-in-the-mist.webp'
  },
  uganda: {
    paragraphs: [
      "Also known as the pearl of Africa, Uganda is a unique experience with a culture that is remarkably diverse. Outside the Uganda gorilla safaris in Bwindi, other major draws of Uganda include birding, trekking the forest reserves, and visiting the Nile's source at Lake Victoria in the southern part of the country. Other areas which are famous are the Queen Elizabeth National Park and the Ruwenzori mountain ranges.",
      'The main access point is Kampala/Entebbe overlooking Lake Victoria. The smoky urban bustle of Kampala bursts at the seams then gives way to lush subsistence farming and small villages full of friendly locals.'
    ],
    pullQuote: 'Also known as the Pearl of Africa, Uganda is a unique experience with a culture that is remarkably diverse.',
    facts: [
      { label: 'Known As', value: 'Pearl of Africa' },
      { label: 'Gateway', value: 'Kampala / Entebbe' },
      { label: 'Signature Highlight', value: 'Murchison Falls' },
      {
        label: 'Best Known For',
        value: [
          'Bwindi Gorillas',
          "Queen Elizabeth and Ishasha's Tree Climbing lions",
          "Kibale's chimps",
          'Nile Cruise of Murchison National Park'
        ]
      }
    ],
    secondaryPhoto: '/experiences/featured/best-of-the-pearl-of-africa.webp'
  },
  tanzania: {
    paragraphs: [
      'A country that deserves a number of visits to even begin to appreciate it. Some say Tanzania is one of the last great places left on earth. The spectacle of the migration in the Serengeti and enigmatic places such as Lake Manyara and the Ngorongoro Crater are complimented by the vast wildlife packed wilderness areas of the south and the shores of Lake Tanganyika.',
      'The famous Great Migration happens between July and September, and it is up to date the biggest wildlife migration in the world hence attracting a huge number of travellers from all around the world as they witness huger herds of wildebeest and zebras crossing the Mara River in full panic mode as they escape falling prey to crocodiles and other predators in the river. The best time to visit Tanzania is majorly dependent on the activities you are interested in. For travellers who love wildlife, game drives and safaris are done all year round.',
      "Tanzania's varied cultures define the country, with tribal influences playing a vital role in its essential flavor. There is nothing quite like joining in song and dance with the red-cloaked Maasai."
    ],
    pullQuote: 'Some say Tanzania is one of the last great places left on earth.',
    facts: [
      { label: 'Great Migration', value: 'July – September' },
      { label: 'Key Parks', value: 'Serengeti & Ngorongoro' },
      { label: 'Also Notable', value: 'Combination with Zanzibar Beach' },
      { label: 'Culture', value: 'Maasai Communities' }
    ],
    secondaryPhoto: '/Tanzania.webp'
  },
  kenya: {
    paragraphs: [
      "Located on the equator, Kenya offers plains teeming with game, cultures as old as time and unchanged by the modern world, and vast African horizons stretching into eternity. Kenya remains one of the premier East African safari destinations, most notably because of its iconic 56 national parks and reserves endowed with incredible natural beauty. The capital city of Nairobi plays host to famous hotels like Giraffe House and Hemingways, and famous restaurants like the Carnivore. This hub serves as the feeder to a host of national parks and private reserves. The most famous is the Maasai Mara, home to the Kenyan side of the great migration, which reaches its peak in this park between August and October — it's certainly the biggest name on the Kenyan safari circuit.",
      "Kenya is also home to Amboseli and the giant elephant families roaming through the shadows of Mt. Kilimanjaro. It boasts vast stretches of savannah plains dotted with singular acacia trees. It also clings tightly to the Great Rift Valley, where pink flamingos flock to its many lakes. To the southeast, Kenya's palm-fringed coastline along the Indian Ocean is an unsung paradise, starkly contrasting the game-rich plains. Meanwhile, Hemingway's beloved \"Green Hills of Africa\" extend through the volcanic craters of the Chyulu Hills."
    ],
    pullQuote: 'The Maasai Mara is home to the Kenyan side of the great migration.',
    facts: [
      { label: 'Capital', value: 'Nairobi' },
      { label: 'National Parks', value: '56 Parks & Reserves' },
      { label: 'Key Parks', value: 'Maasai Mara & Amboseli' },
      { label: 'Great Migration', value: 'Peaks August – October' }
    ],
    secondaryPhoto: '/Kenya.webp'
  }
}

// Consultancy & Incentive Travel homepage content — real copy carried over from the old
// WordPress site's Consultancy division. Photos are existing site placeholders
// (no real conference/office photography is in the asset library yet).
export const consultancyIntro =
  "We make it possible through innovation by leveraging our extended network of contacts, being mindful of our local communities and paying attention to detail. It's all done as sustainably as possible and it begins with you telling us what you want!"

export const consultancyPillars = [
  {
    key: 'advisory',
    title: 'Consultancy and Incentives',
    tagline: 'Strategic guidance from a team who knows the region.',
    description:
      "We believe that each trip is as unique as each client, we will therefore guide you every step of the way as we craft together one-of-a-kind experiences that will bring your specific travel dreams to life and make your memories last a lifetime.",
    image: '/Consultancy-Advisory.png',
    accent: '#5c6b4f'
  },
  {
    key: 'mice',
    title: 'Incentives and Educational Trips',
    tagline: 'Full-service MICE planning, from Kigali and beyond.',
    description:
      "What are you traveling for? Is it a business trip or do you want to meet in Rwanda? Whether it's a conference space to brainstorm from, an Incentive trip designed to re-energize and motivate the team or even a travel initiative to educate and inspire, we'll organise something that's guaranteed to exactly respond to your wishes.",
    image: '/Conferences-Incentives.png',
    accent: '#b9772e'
  },
  {
    key: 'inspire',
    title: 'Get Inspired',
    tagline: 'Ideas and case studies from journeys we have designed.',
    description:
      'Not sure where to start? Explore ideas and case studies from journeys we have designed for past clients — a starting point for shaping the trip or event that is right for you.',
    image: '/Get-Inspired.png',
    accent: '#9c4a32'
  }
]

// Using local /public files here — the previous hotlinked WordPress URLs
// (ITB, OTM) were unreliable and rendered tiny/broken. Add those back
// with local files if/when available.
export const partners = [
  { name: 'Rwanda Development Board', logo: '/RwandaDevelopmentBoard-removebg-preview.webp' },
  { name: 'RTTA', logo: '/RTTA-removebg-preview.webp' },
  { name: 'International Luxury Travel Market', logo: '/International-Luxury-Travel-Market-1.png' },
  { name: 'Akagera Aviation', logo: '/AkageraAviation-removebg-preview.webp' },
  { name: 'East Africa Tourism Platform', logo: '/EastAfrica-removebg-preview.webp' }
]

export const contact = {
  address: 'KN5, Kigali — Rwanda',
  phone: '+250 788 615 233',
  phoneHref: 'tel:+250788615233',
  email: 'info@luxehorizonsafrica.com',
  instagram: 'https://www.instagram.com/luxehorizonsafrica',
  whatsapp: 'https://api.whatsapp.com/send?phone=250788615233',
  youtube: 'https://www.youtube.com/@luxehorizonsafrica'
}

export const videoSection = {
  src: '/IMG_6548.mp4',
  eyebrow: 'Watch Our Story',
  heading: 'Rwanda, the Land of a Thousand Hills',
  subheading:
    'A short look at what it feels like to be here — the full film is on our YouTube channel.'
}

// Fallback blog posts array used if Supabase is offline or unreachable.
export const blogPosts = [
  {
    key: 'akagera-savanna-at-the-edge',
    category: 'Wildlife & Safari',
    date: 'October 2026',
    readTime: '5 min read',
    author: 'Luxe Horizons Africa',
    authorRole: 'Travel Editorial Team',
    title: 'Akagera National Park: Savanna at the Edge',
    excerpt:
      "Rwanda's only Big Five park is nearly 1,200 square kilometers of savanna, woodland and wetland — and one of Africa's great conservation comebacks.",
    image: '/leopard-tree.webp',
    accent: '#9c4a32',
    quote: "Below, a pod of hippos wallows in the shallows while a family of elephants moves along the lake's far shore.",
    takeaway: "Key Takeaway: Combine a boat safari on Lake Ihema with a night drive — together they cover Akagera's hippos, crocodiles and shoebill storks by day, and hyenas, bush babies and better leopard odds after dark.",
    paragraphs: [
      "This is Akagera, Rwanda's only Big Five park: nearly 1,200 square kilometers of savanna, woodland and wetland, worlds away from the misty volcanoes two hundred kilometers northwest. The Land Cruiser stops on a rise above Lake Ihema. Below, a pod of hippos wallows in the shallows while a family of elephants moves along the lake's far shore.",
      "Akagera is one of Africa's great conservation comebacks, recently named among National Geographic's best places to visit in 2026 for its wide-open, uncrowded terrain.",
      "Game drives across grassland and woodland bring chances at lions, elephants, leopards and more. A boat safari on Lake Ihema offers close views of hippos, crocodiles, and the elusive shoebill stork, while night drives bring out hyenas, bush babies, and better odds of spotting leopards."
    ],
    highlights: [
      'Where to sleep: from the ultra-exclusive Wilderness Magashi camp to mid-range Mantis Akagera Game Lodge and Ruzizi Tented Camp, the renovated Karenge Bush Camp, or budget campsites.',
      'A boat safari on Lake Ihema is the best way to see hippos, crocodiles and the elusive shoebill stork up close.',
      'Night drives bring out hyenas, bush babies and better odds of spotting leopards.'
    ]
  },
  {
    key: 'nyungwe-forest-canopy-calls',
    category: 'Wildlife & Safari',
    date: 'October 2026',
    readTime: '5 min read',
    author: 'Luxe Horizons Africa',
    authorRole: 'Travel Editorial Team',
    title: 'Nyungwe Forest: Forest & Canopy Calls',
    excerpt:
      "One of Africa's oldest montane rainforests holds thirteen primate species and over three hundred bird species, reached by a swaying canopy walkway sixty meters above the forest floor.",
    image: '/colobus-monkey-baby.webp',
    accent: '#3f6b63',
    quote: 'A troop of black-and-white colobus monkeys leaps silently through the upper branches nearby.',
    takeaway: "Key Takeaway: Pair the canopy walk with chimpanzee trekking on the same visit — the walkway is the signature view, but the early-morning chimp search is where Nyungwe's thirteen primate species actually reveal themselves.",
    paragraphs: [
      "You're sixty meters above the forest floor on a swaying metal walkway, rainforest spread beneath you in every shade of green. A troop of black-and-white colobus monkeys leaps silently through the upper branches nearby. This is Nyungwe, one of Africa's oldest montane rainforests, tucked into Rwanda's southwest along the Congo-Nile watershed.",
      'It holds thirteen primate species, including chimpanzees, and over three hundred bird species, many found nowhere else.',
      'The canopy walk, a suspended bridge unique in East Africa, is the park\'s signature activity, and can be paired with the nearby rope course and zipline for more treetop thrills. Add chimpanzee trekking — an early, sometimes strenuous search rewarded by close encounters with a wild community — colobus and primate tracking, guided birding for Albertine Rift endemics, and waterfall or ridge hikes.',
      'One&Only Nyungwe House sits above a working tea plantation for real luxury; Munazi Lodge, a mid-range ecolodge, offers A-frame cabins deep in the forest.'
    ],
    highlights: [
      'One of Africa\'s oldest rainforests, estimated at over 25,000 years old, having survived past ice ages.',
      'Sits on the Congo-Nile Divide, splitting rainfall between the Atlantic and Mediterranean-bound river systems, and home to one of the deepest sources of the Nile.',
      'East Africa\'s first canopy walkway, built in 2010 using repurposed tea-industry cable technology.',
      'Hosts thirteen primate species, including Angolan colobus troops of up to 300 — among the largest arboreal primate groups on Earth — and is a UNESCO World Heritage Site.'
    ]
  },
  {
    key: 'kigali-city-of-a-thousand-hills',
    category: 'Travel Tips',
    date: 'October 2026',
    readTime: '5 min read',
    author: 'Luxe Horizons Africa',
    authorRole: 'Travel Editorial Team',
    title: 'Kigali: A City of a Thousand Hills',
    excerpt:
      'Clean, safe to walk at night, and home to a growing food and art scene — Rwanda\'s capital carries real historical weight too, felt most directly at the Genocide Memorial.',
    image: '/experiences/featured/city-tour-vibrant-hopeful-kigali.webp',
    accent: '#b9772e',
    quote: "A moto-taxi winds through the hills as golden afternoon light spills over Kigali's rooftops, glass towers, red-roofed neighborhoods, and roadside markets, each hill with its own character.",
    takeaway: "Key Takeaway: Build in at least one full day in Kigali rather than treating it as an airport layover — it's the start and end point for nearly every itinerary, and the city itself, plus the Genocide Memorial, deserves real time.",
    paragraphs: [
      "A moto-taxi winds through the hills as golden afternoon light spills over Kigali's rooftops, glass towers, red-roofed neighborhoods, and roadside markets, each hill with its own character. Kigali has become one of Africa's most talked-about capitals: clean, safe to walk at night, and home to a growing food and art scene. But it also carries real historical weight, felt most directly at the Kigali Genocide Memorial, where a visit is less sightseeing than an act of witness.",
      "Begin at the Kigali Genocide Memorial for essential context on the country's history. Then wander Kimironko Market for fabric, coffee, and produce, or spend an afternoon at Inema Arts Center, a gallery and studio space for contemporary Rwandan artists. Kigali's café culture is a highlight of this coffee country, and local roasteries take real pride in their craft. In the evening, Repub Lounge and the rooftop bars along KG streets are favorites for sundowners with hillside views.",
      "As Rwanda's transport hub, Kigali is the start and end point for nearly every itinerary — gorilla trekking, Akagera, Nyungwe, Lake Kivu — so it's worth building in at least one full day rather than treating it as just an airport layover.",
      'Where to stay: Kigali spans the full range, from the Kigali Marriott and Radisson Blu for business-standard comfort, to the ultra-luxury Pinnacle Kigali, boutique picks like The Retreat by Hemingways for something more personal, and a growing number of well-reviewed, more affordable boutique hotels such as The Nest Kigali.'
    ],
    highlights: [
      'Visa on arrival is available to all nationalities — citizens of African Union, Commonwealth and La Francophonie member states get it fee-free for 30 days, and East African Community citizens enter visa-free for up to 6 months.',
      'Yellow fever vaccination is required if arriving from a country with risk of transmission (carry your certificate) — otherwise a good idea regardless.',
      'Where to stay ranges from the Kigali Marriott and Radisson Blu to the ultra-luxury Pinnacle Kigali and boutique picks like The Retreat by Hemingways.'
    ]
  },
  {
    key: 'kwita-izina-gorilla-naming-ceremony',
    category: 'Wildlife & Safari',
    date: 'October 2026',
    readTime: '5 min read',
    author: 'Luxe Horizons Africa',
    authorRole: 'Travel Editorial Team',
    title: "Kwita Izina: Rwanda's Gorilla Naming Ceremony",
    excerpt:
      "Mist clings to Kinigi as drums signal the start of Rwanda's gorilla naming ceremony — thousands gather to name newborn mountain gorillas, a tradition that has helped the Virunga population steadily grow since 2005.",
    image: '/mountain-gorilla-1.webp',
    accent: '#5c6b4f',
    quote: 'Thousands of farmers, schoolchildren, diplomats, and photographers gather at a bamboo structure shaped like a silverback.',
    takeaway: 'Key Takeaway: Kwita Izina falls in early September, and rooms near Kinigi and Musanze book out months in advance — plan your gorilla trek and lodge around it if you want to witness the ceremony itself.',
    paragraphs: [
      "Mist clings to Kinigi as drums signal the start of Kwita Izina, Rwanda's gorilla naming ceremony. Thousands of farmers, schoolchildren, diplomats, and photographers gather at a bamboo structure shaped like a silverback. This 21st edition names 22 newborn mountain gorillas from Volcanoes National Park, each name reflecting a hope, birth story, place, or tribute to a conservationist.",
      "The tradition borrows from Rwandan custom — elders naming a newborn child — extended to a species the country has pulled back from near-extinction. Since 2005, over 438 gorillas have been named, part of conservation efforts that have steadily grown the Virunga population.",
      "Volcanoes National Park offers more than gorilla trekking (book permits months ahead): golden monkey tracking, hikes up Bisoke or Karisimbi for crater views, or a relaxing boat ride on the Twin Lakes. Round it out with the Dian Fossey Gorilla Fund's Ellen DeGeneres Campus or a cultural village dance performance."
    ],
    highlights: [
      "Where to sleep: lodges cluster around Kinigi and Musanze, from the ultra-luxe Bisate Lodge, Singita Kwitonda and One&Only Gorilla's Nest to comfortable mid-range options closer to town.",
      'Because Kwita Izina draws a crowd, rooms near the park book out months in advance of early September.',
      'Beyond gorilla trekking, golden monkey tracking and hikes up Bisoke or Karisimbi for crater views round out a Volcanoes visit.'
    ]
  }
]

export const faqCategories = [
  { key: 'before-you-go', label: 'Before You Go' },
  { key: 'trip-design', label: 'Trip Design' },
  { key: 'families-groups', label: 'Families & Groups' },
  { key: 'health-logistics', label: 'Health & Logistics' }
]

// FAQ copy — "When is the best time to travel?" is the real answer carried
// over from the client's existing WordPress FAQ page. Every other answer is
// a reasonable placeholder and should be swapped for the client's actual
// wording before launch.
export const faqs = [
  {
    key: 'best-time',
    category: 'before-you-go',
    question: 'When is the best time to travel?',
    answer:
      'Ideally, the best time to visit Africa should consider more than just the weather. Your journey could be culture-focused or to partake in a specific traditional festival. You might be looking for a particular occasion to see the savannah animals, tracking gorillas, hiking a mountain or chimpanzee trekking in the rainforest. Whatever the "why" of your safari, Luxe Horizons Africa will guide you through every step of the way.\n\nGenerally speaking, an East African safari can be enjoyed all year round. There are, however, distinct seasons that suit some travelers more than others — we will always share specific weather conditions by month for the areas or country you wish to visit.'
  },
  {
    key: 'luggage',
    category: 'before-you-go',
    question: 'What luggage should I take?',
    answer:
      'A soft-sided duffel packs down easier than a hard-shell case, especially for light-aircraft transfers between parks where hold space is limited. We will confirm the exact weight allowance for your itinerary once internal flights are booked.'
  },
  {
    key: 'essentials',
    category: 'before-you-go',
    question: 'What are essential items and clothes for a safari?',
    answer:
      'Neutral-toned clothing, a warm layer for early morning game drives, sturdy closed shoes for forest treks, and a good pair of binoculars. We send every guest a tailored packing list once their itinerary is confirmed.'
  },
  {
    key: 'laundry',
    category: 'before-you-go',
    question: 'Will I have laundry facilities?',
    answer:
      'Most of our partner lodges offer same-day or next-day laundry, which means you can comfortably pack lighter than you might expect for a multi-day trip.'
  },
  {
    key: 'private-guided',
    category: 'trip-design',
    question: 'What is a Private Guided Tour?',
    answer:
      'Your own vehicle, driver-guide and pace — no joining a shared group. Every stop, detour and late start is entirely up to you and whoever you are traveling with.'
  },
  {
    key: 'why-luxe-horizons',
    category: 'trip-design',
    question: 'Why choose to travel with Luxe Horizons Africa?',
    answer:
      'Every itinerary is designed from scratch around you, not chosen from a catalogue, and a dedicated specialist guide stays with you throughout — not a rotating cast of drivers.'
  },
  {
    key: 'families',
    category: 'families-groups',
    question: 'Is Rwanda / East Africa a good destination for families and how old must children be?',
    answer:
      'Yes — with the right itinerary. Gorilla trekking permits require a minimum age of 15, but plenty of other experiences (game drives, cultural visits, lake excursions) suit younger children. We will help you build a trip around your family\'s ages and pace.'
  },
  {
    key: 'insurance',
    category: 'health-logistics',
    question: 'Do I need travel insurance or vaccinations?',
    answer:
      'Comprehensive travel insurance covering medical evacuation is required for all our itineraries, and Yellow Fever vaccination is mandatory for entry to Rwanda, Uganda and Tanzania. We will send a full pre-departure health checklist once your trip is booked.'
  },
  {
    key: 'wifi',
    category: 'health-logistics',
    question: 'Is Wi-Fi available at the lodges?',
    answer:
      'Most lodges offer Wi-Fi in communal areas, though it can be slow or intermittent in more remote locations — part of what makes a safari a genuine break.'
  }
]

// Placeholder client stories — swap in real guest names, quotes and photos
// (their own trip snapshots, not marketing stock shots) before launch.
export const testimonials = [
  {
    key: 't1',
    name: 'Verified Explorer',
    origin: 'Mountain Gorilla Expedition',
    quote:
      'David was incredibly helpful in quickly securing a permit so that I could have the once in a lifetime experience of trekking to the mountain gorillas while in Rwanda. Him and the team were very responsive and dedicated to ensuring that his clients are able to experience Rwanda to the fullest!',
    rating: 5,
    photo: '/Mountain-Gorilla.webp',
    rotate: -4
  },
  {
    key: 't2',
    name: 'Verified Explorer',
    origin: 'Akagera & Volcanoes Safari',
    quote:
      'I highly recommend Luxe Horizons Africa. They took me to Akagera National Park and also to the mountains to see the gorillas. Both were unforgettable experiences. Rwanda is a wonderful country and David is the nicest person you could meet!',
    rating: 5,
    photo: '/exp-akagera.webp',
    rotate: 4
  },
  {
    key: 't3',
    name: 'Verified Explorer',
    origin: '30-Day Rwanda Odyssey',
    quote:
      'Wow! What a wonderful time, I enjoyed in Rwanda these past 30days. Everyday was an adventure and a real treat to my soul. I will never forget how David and his team masterfully put together my stimulating itinerary along with recommendations for the month. I truly experienced all of Rwanda.',
    rating: 5,
    photo: '/story-guide.webp',
    rotate: -3
  },
  {
    key: 't4',
    name: 'Verified Explorer',
    origin: '10-Day Private Guided Experience',
    quote:
      'I had the most amazing 10-day private guided experience in Rwanda including trekking to see gorillas, game safari and golden monkeys. Our Rwandan travel expert was Luxe Horizons Africa. Highly recommended.',
    rating: 5,
    photo: '/experiences/featured/gorillas-in-the-mist.webp',
    rotate: 5
  },
  {
    key: 't5',
    name: 'Verified Explorer',
    origin: 'Rwanda Discovery Journey',
    quote:
      'An absolute pleasure to travel and discover beautiful Rwanda under Luxe Horizons Africa-experienced guides, personalised curated tours, seamless travel, vip treatment. The best!',
    rating: 5,
    photo: '/cta-sunset.webp',
    rotate: -5
  },
  {
    key: 't6',
    name: 'Verified Explorer',
    origin: 'Private Curated Tour',
    quote:
      "David is extremely knowledgeable, very personable, and the perfect person to organize and accompany you on a Rwanda trip. The few days we spent with him were highly memorable as he ensured we saw all the most important and interesting sights with perfect explanations. And we didn't ask a single question he couldn't answer! We recommend Luxe Horizons Africa, 100%",
    rating: 5,
    photo: '/team/david.webp',
    rotate: 3
  },
  {
    key: 't7',
    name: 'Verified Explorer',
    origin: 'Rwanda Wilderness Journey',
    quote:
      "David and his team planned a wonderful trip in Rwanda for us. He is very informative and answers any questions we had. Super friendly and I couldn't wait to tell him about my daily adventures that he had arranged. I learned so much from David and had the experience of a lifetime and that was in part to Luxe Horizons Africa’ team and their knowledge of Rwanda.",
    rating: 5,
    photo: '/experiences/featured/rwandas-primates.webp',
    rotate: -4
  },
  {
    key: 't8',
    name: 'Verified Explorer',
    origin: 'Gorilla & Golden Monkey Expedition',
    quote:
      "In the run up to my trip to Kigali, David & the team were absolutely super. They took my calls and helped me arrange a wonderful, albeit very last minute gorilla expedition. They also accommodated one of my colleagues once we were in Kigali, seamlessly accommodating us between seminar breaks. The drive through the Rwandan countryside and the magnificent sunrise was spectacular. Seeing the gorillas and the golden monkeys was magnificent. The whole experience, including the hike and the drive was unforgettable. I’ll be back. Thank you Luxe Horizons Africa!",
    rating: 5,
    photo: '/mountain-gorilla-1.webp',
    rotate: 4
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
    image: '/team/david.webp',
    summary: '15+ years in luxury East African safaris. Cornell & SITE Africa alumnus.',
    bio: 'David boasts a comprehensive background in tourism and hospitality, accumulating over 15 years of invaluable experience in the field. Certified by Cornell University and SITE Africa in incentive travel and safari planning.',
    fullBio: [
      'David boasts a comprehensive background in tourism and hospitality, accumulating over 15 years of invaluable experience in the field. His dedication to excellence is underscored by a Special Honors Certificate of Master Class in Incentive Travel Planning and Operations from SITE Africa, a distinguished South African organization specializing in Incentive Travel Excellence. Furthermore, he holds a Diploma in Hospitality Management, with a focus on Tourism and Service Excellence, earned from Cornell University in the United States.',
      'Renowned for his travel expertise and captivating personality, David has garnered the trust and recognition of prestigious local and international tourism brands and organizations. His standing in the industry was further solidified when he was invited to participate at the esteemed ‘We Are Africa’ Live Webinars in August 2021, as a Panelist in discussions about new tourism trends, sustainable tourism, and the industry\'s response during and post COVID-19.',
      'David\'s unique skill set shines, particularly in East Africa\'s safaris. Proficient in French, English, and Swahili, and as a well-traveled and experienced Tour Guide, he not only possesses extensive knowledge about African wildlife and cultures but also a delightful sense of humor. His storytelling abilities are remarkably captivating, ensuring that embarking on a safari with David is a guaranteed inspiration for a lifetime. For David, travel planning is not just a job; it is a way of life. His exceptional skills extend beyond his love for travel, enabling him to establish a vital network and lasting business relationships throughout his illustrious career.',
      'With outstanding know-how, David excels in recommending tailor-made itineraries meticulously curated to suit your specific needs and interests. His commitment to delivering unparalleled travel experiences makes him a true maestro in the art of travel planning.'
    ]
  },
  {
    id: 'emile-gashumba',
    name: 'Emile Gashumba',
    title: 'Operations Manager',
    badge: 'Operations',
    image: '/team/emile.webp',
    summary: 'Master’s in Finance recipient directing daily travel & air logistics.',
    bio: 'Emile, with over a decade of experience in banking operations and finances, has a remarkable journey that echoes resilience and triumph over adversity.',
    fullBio: [
      'Emile, with over a decade of experience in banking operations and finances, has a remarkable journey that echoes resilience and triumph over adversity. Born and raised in Rwanda, his life took a tragic turn in 1994 when he had to flee to Tanzania, surviving a genocide that claimed both of his parents and five of his siblings. Despite this harrowing past, Emile returned to Rwanda 20 years ago, determined to overcome the wounds of his dark history. His past sorrow has only fueled his relentless pursuit of inner peace and authentic joy, a journey that led him to discover his passion for travel.',
      'Married to Esther Gashumba, with whom he shares four children, Emile\'s transformative journey began seven years ago when he started exploring Rwanda and East Africa, especially Tanzania. What began as an adventure has evolved into a profound passion. With a Master\'s degree in Finance, Emile has served as the head of operations at various banks in Rwanda before joining the Luxe Horizons Africa team. Currently, he oversees the company\'s daily travel operations and logistics.',
      'Emile\'s attention to detail and mastery of travel logistics set him apart, making him an invaluable treasure to the team and a significant asset for any client.'
    ]
  },
  {
    id: 'honorine-uwase',
    name: 'Honorine Uwase',
    title: 'Accounts Manager',
    badge: 'Finance',
    image: '/team/honorine.webp',
    summary: 'Senior financial strategist overseeing corporate assets & accounts.',
    bio: 'A mother of two, Honorine Uwase has always harbored a passion for numbers, ensuring accounts are meticulously balanced and transparent.',
    fullBio: [
      'A mother of two, Honorine Uwase, has always harbored a passion for numbers, ensuring that accounts are not only meticulously balanced but also presented in an easily comprehensible manner for all of us. Her primary focus revolves around managing the company\'s assets & finances and meticulously handling balance sheets, a task she undertakes with dedication when she\'s not busy raising her children. In her precious moments of free time, she delights in beach outings with her husband, David, and close friends.',
      'With a commendable track record, she has served as the Senior Accountant at the esteemed global firm, Jibu Corporate, for over five years. While Honorine may not frequently grace the halls of Luxe Horizons Africa\' offices, her occasional visits never fail to elicit smiles from everyone. Her infectious warmth and sense of humor create a positive atmosphere, making her a cherished presence.',
      'She is a repository of intriguing stories, and everyone eagerly shares their latest office updates with her. Even Deo, our watchman and gatekeeper, knows the drill – a bag of chocolate or biscuits is the customary entry pass for Honorine.'
    ]
  },
  {
    id: 'eduige-mbabazi',
    name: 'Eduige Mbabazi',
    title: 'Senior Travel Designer',
    badge: 'Design',
    image: '/team/eduige.webp',
    summary: 'Decade of hospitality experience crafting custom wilderness journeys.',
    bio: 'Meet Eduige, the heart and soul of our social activities and the epitome of kindness at the Luxe Horizons Africa family.',
    fullBio: [
      'Meet Eduige, the heart and soul of our social activities and the epitome of kindness at the Luxe Horizons Africa family. Renowned as the kindest person around, Eduige has an unparalleled ability to make you consider a tour package solely through the remarkable warmth in her emails or, better yet, the cheerful resonance of her voice during a phone call. Her infectious laughter and radiant smile speak volumes about her personality.',
      'Interestingly, Eduige finds solace in solo travel, considering it her best way to connect with nature. Her love for people and nurturing spirit make her an exceptional travel designer. With almost a decade of experience in hospitality, Eduige\'s caring approach and exceptional handling of trip details make her a cherished treasure, not just within the Luxe Horizons Africa family but for every guest seeking a once-in-a-lifetime travel experience.',
      'Armed with a Bachelor\'s degree in Business Management and Entrepreneurship, Eduige\'s expertise goes beyond creating memorable journeys – she crafts personalized experiences that linger in the hearts of our guests. So, if you\'re fortunate enough to have Eduige design your travel, be prepared for an adventure infused with warmth, care, and excellence.'
    ]
  },
  {
    id: 'davinah-uwera',
    name: 'Davinah Uwera',
    title: 'Travel Designer',
    badge: 'Design',
    image: '/team/davinah.webp',
    summary: 'Law graduate delivering precise itinerary execution & consultation.',
    bio: 'Meet Davinah, the epitome of boundless energy in the realm of travel consultancy and designated proofreader for travel itineraries.',
    fullBio: [
      'Meet Davinah, the epitome of boundless energy in the realm of travel consultancy. A dynamo in her field, she takes pride in providing swift and precise responses to your inquiries, offering the most accurate information for all your travel needs. Davinah\'s meticulous attention to detail has not only garnered trust within the office but has also positioned her as the designated proofreader for most travel documents and itinerary descriptions before they are shared.',
      'She possesses the uncanny ability to read between the lines, effortlessly spotting even the minutest errors that might escape notice, ensuring a flawlessly crafted travel experience. Davinah’s dedication to perfection is unmatched.',
      'She discovered her passion for the travel business at a young age. During her time as a Front Desk Coordinator in a city hotel, she concurrently engaged in travel consultancy for a renowned tour company. Both roles not only fueled her love for travel but also provided the means to finance her education in Law School at the Université Libre de Kigali from where she obtained a Bachelor’s Degree. Davinah\'s unique blend of legal acumen and travel expertise makes her an invaluable asset to the Luxe Horizons Africa team.'
    ]
  },
  {
    id: 'sheila-tuti-mpairwe',
    name: 'Sheila Tuti Mpairwe',
    title: 'Travel & Lifestyle Specialist',
    badge: 'Sustainability',
    image: '/team/sheila.webp',
    summary: 'MBA holder advocating sustainable, community-centered travel.',
    bio: 'Also known as "Doctor," Sheila has an extraordinary ability to turn the seemingly impossible into a reality with a focus on responsible travel.',
    fullBio: [
      'Also known as "Doctor," Sheila has an extraordinary ability to turn the seemingly impossible into a reality in ways that few could conceive. She possesses a unique talent for weaving captivating stories around travel experiences, adding her own special blend of spices, as she likes to call them. For Sheila, an itinerary is not truly complete unless it incorporates a community engagement aspect. "Each of our guests should become a part of our community\'s lifestyle; it must inspire both the guest and our people," she emphasizes. Sheila is the embodiment of responsible travel and sustainability within the Luxe Horizons Africa family.',
      'Armed with an MBA from Makerere University, Uganda, Sheila dedicates the majority of her time to fam trips, capturing moments through photography, documenting insights, and developing new tourism products. She is equally committed to enhancing the quality of our existing travel experiences. Sheila\'s intellectual curiosity knows no bounds, and her extensive knowledge is reflected in her impressive reading repertoire. If you ask her about any book, chances are she has either read it or knows its core message.'
    ]
  },
  {
    id: 'tona-lauria-rutayisire',
    name: 'Tona Lauria Rutayisire',
    title: 'Assistant Operations',
    badge: 'Operations',
    image: '/team/tona.webp',
    summary: 'Field coordinator managing guide communications & supplier liaisons.',
    bio: 'We call her, baby girl! Always after a soft life, Tona loves to travel and connects effortlessly with people and nature everywhere she goes.',
    fullBio: [
      'We call her, baby girl! Always after a soft life as she claims, Tona loves to travel and everywhere she goes, she enjoys connecting with people and nature! With an exceptional warmth and an ever smiling face, Tona is an invaluable member of the team.',
      'Naturally the planner of office events and social gatherings, her remarkable planning skills are spiced by her love for people and attention to detail. Always liaising with guides on field and in constant communication with the suppliers, she would never rest until she’s aware every ongoing trip is happening as per plan.',
      'Very resourceful, she would have all the necessary contacts on her fingertips and once she reaches out to any of our suppliers for any query, it’s almost impossible to say no to Tona.'
    ]
  }
]