// All editable site copy and data lives here, kept separate from presentation.
// Swap image URLs for locally-hosted assets in /public before going live —
// hotlinking a client's WordPress media library can silently fail if their
// host has hotlink protection enabled.

export const navLinks = [
  { key: 'home', label: 'Home', href: '/' },
  { key: 'destinations', label: 'Destinations', href: '/destinations' },
  { key: 'experiences', label: 'Experiences', href: '/experiences' },
  { key: 'about', label: 'About', href: '/about' },
  { key: 'testimonials', label: 'Testimonials', href: '/testimonials' },
  { key: 'blog', label: 'Blog', href: '/blog' },
  { key: 'contact', label: 'Contact', href: '/contact' }
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
    image: '/experiences/featured/gorillas-in-the-mist.jpg',
    accent: '#5c6b4f'
  },
  {
    key: 'uganda',
    eyebrow: '02 — Bwindi & Queen Elizabeth',
    name: 'Uganda',
    image: '/experiences/featured/best-of-the-pearl-of-africa.jpg',
    accent: '#b9772e'
  },
  {
    key: 'tanzania',
    eyebrow: '03 — Serengeti & Ngorongoro',
    name: 'Tanzania',
    image: '/experiences/featured/tanzania-classic.jpg',
    accent: '#3f6b63'
  },
  {
    key: 'kenya',
    eyebrow: '04 — Maasai Mara & Amboseli',
    name: 'Kenya',
    image: '/experiences/featured/magical-kenya.png',
    accent: '#9c4a32'
  }
]

// Long-form per-country content for the individual destination pages
// (/destinations/:key). Rwanda, Uganda and Tanzania are the client's real
// copy carried over from the old WordPress site; Kenya is a placeholder
// (the country itself was already a placeholder — swap in real copy and a
// real photo before launch).
export const destinationDetails = {
  rwanda: {
    paragraphs: [
      "Endless emerald-green hills and soaring mountainsides, Rwanda is the phoenix that has risen from the ashes after great suffering. It is now this peaceful little country that has so much to offer. Also known as the land of a thousand hills, Rwanda's stunning scenery and warm, friendly people offer unique experiences in one of the most remarkable countries in the world. Rwanda is famous for being home to almost a half of the world's mountain gorillas, these amazing animals are greatly endangered and a visit with them will leave an impression on any traveler fortunate enough to snag one of the highly demanded tracking permits dispensed by the Rwanda government each day.",
      "The dramatic rainforested mountains also count volcanoes, several primate species and incredible birdlife among their inhabitants, and all this is easily accessed from the capital, Kigali. In addition to its natural beauty, Rwanda is a country with a rich culture and history that goes beyond the tragic 1994 Genocide against the Tutsi. This tiny but yet ambitious country offers a unique experience with its vibrant cities, villages, and fascinating landmarks."
    ],
    pullQuote: 'Rwanda is famous for being home to almost half of the world\'s mountain gorillas.',
    facts: [
      { label: 'Capital', value: 'Kigali' },
      { label: 'Known As', value: 'Land of a Thousand Hills' },
      { label: 'Signature Wildlife', value: 'Mountain Gorillas' },
      { label: 'Best Known For', value: 'Gorilla Trekking Permits' }
    ],
    secondaryPhoto: '/experiences/featured/gorillas-in-the-mist.jpg'
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
      { label: 'Signature Wildlife', value: 'Bwindi Gorillas' },
      { label: 'Also Notable', value: 'Source of the Nile' }
    ],
    secondaryPhoto: '/experiences/featured/best-of-the-pearl-of-africa.jpg'
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
      { label: 'Also Notable', value: 'Lake Tanganyika' },
      { label: 'Culture', value: 'Maasai Communities' }
    ],
    secondaryPhoto: '/experiences/featured/tanzania-classic.jpg'
  },
  // Placeholder — Kenya was already a placeholder destination (see the note
  // on its image above); replace this copy with the client's real text.
  kenya: {
    paragraphs: [
      "Kenya is where the safari story began — vast golden plains, endless horizons, and the kind of wildlife encounters that first put East Africa on the traveler's map. The Maasai Mara's rolling grasslands host one of the greatest wildlife spectacles on the continent, while Amboseli offers herds of elephant framed against the snows of Kilimanjaro.",
      "Beyond the plains, Kenya's Maasai communities, Rift Valley lakes and coastal reefs add depth to a country that rewards both first-time safari-goers and seasoned travelers alike."
    ],
    pullQuote: "Kenya is where the safari story began.",
    facts: [
      { label: 'Known As', value: 'Cradle of the Safari' },
      { label: 'Signature Wildlife', value: 'Big Five & Migration' },
      { label: 'Key Parks', value: 'Maasai Mara & Amboseli' },
      { label: 'Best Known For', value: 'Classic Savanna Safaris' }
    ],
    secondaryPhoto: '/experiences/featured/magical-kenya.png'
  }
}

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
    readTime: '6 min read',
    author: 'Jean-Luc Habimana',
    authorRole: 'Head Safari Specialist & Trek Leader',
    title: 'What Nobody Tells You Before Your First Gorilla Trek',
    excerpt:
      'The permit is the easy part. Here is what actually matters on the day — from altitude to the seven-metre rule.',
    image: '/Mountain Gorilla.jpg.jpeg',
    accent: '#5c6b4f',
    quote: 'The moment you break through the bamboo thicket and lock eyes with a 200-kilogram Silverback, every step up the volcano fades into background noise.',
    takeaway: 'Key Takeaway: Hire a local porter at Kinigi headquarters. Beyond lightening your load, it directly supports the local agricultural community surrounding Volcanoes National Park.',
    paragraphs: [
      'Standing at Kinigi headquarters as misty dawn light rolls over the peaks of Mount Sabyinyo, the anticipation is palpable. Most travelers focus on securing their permit months in advance—and rightfully so—but few realize how much the actual experience hinges on preparation during the final 48 hours.',
      'The trail in Volcanoes National Park is rarely a smooth walking path. You are trekking through dense bamboo forests, stinging nettles, and thick volcanic mud at altitudes starting at 2,400 meters. Proper gardening gloves, waterproof gaiters, and layered breathable clothing aren’t just recommended—they transform your trek from an endurance test into a joyful adventure.',
      'Rangers uphold a strict seven-metre observation rule to protect the gorillas from human respiratory illnesses. Yet, habituated gorilla families are curious beings; infants will frequently roll toward your feet or peer through the bamboo. The golden rule is simple: remain completely calm, avoid direct eye contact if a silverback chest-beats, and follow your head ranger’s low guttural vocalizations.'
    ],
    highlights: [
      'Layer up for temperature shifts between 12°C at dawn to 24°C under jungle canopy.',
      'Pack a waterproof dry bag for camera equipment—mountain showers arrive without warning.',
      'Keep your voice at a quiet whisper; gorillas respond directly to human vocal tones.'
    ]
  },
  {
    key: 'best-time-safari',
    category: 'Travel Tips',
    date: 'February 2026',
    readTime: '5 min read',
    author: 'Claire Mukamana',
    authorRole: 'Lead Itinerary Architect',
    title: 'The Best Time to Visit Rwanda, Uganda and Tanzania',
    excerpt:
      'Peak season means peak crowds. We break down what each month actually looks like on the ground.',
    image: '/story-guide.jpg',
    accent: '#b9772e',
    quote: 'Green season is East Africa’s best-kept secret—dramatic skies, newborn wildlife, and empty luxury lodges.',
    takeaway: 'Insider Tip: June through September offers optimal dry conditions for gorilla trekking and the Serengeti river crossings, but November and April offer lush photography and uncrowded parks.',
    paragraphs: [
      'When planning an East African itinerary spanning Rwanda, Uganda, and Tanzania, timing is everything. While peak dry season (June to September) draws high demand for good reason, shoulder months offer extraordinary wildlife encounters with intimate luxury.',
      'In Rwanda’s Volcanoes and Nyungwe forests, the short dry spell from December to February brings clear mornings and crisp trekking conditions. In Tanzania, January to March marks the calving season in the Southern Serengeti, where thousands of wildebeest calves are born daily against a backdrop of apex predator action.',
      'If your goal is birdwatching or photographing emerald landscapes, the rains of April and November transform Akagera and Queen Elizabeth National Parks into vibrant ecosystems filled with migratory species.'
    ],
    highlights: [
      'Dry Season (Jun–Sep): Easiest trekking footings and prime river crossing sightings.',
      'Calving Season (Jan–Mar): High predator activity in Southern Serengeti.',
      'Green Season (Apr–May & Nov): Exceptional value, dramatic light, and solitude.'
    ]
  },
  {
    key: 'community-conservation',
    category: 'Conservation',
    date: 'January 2026',
    readTime: '7 min read',
    author: 'Dr. Emmanuel Ndayisaba',
    authorRole: 'Conservation & Community Liaison',
    title: 'Inside the Community Projects Funded by Your Park Fees',
    excerpt:
      'Where the money from your trekking permit actually goes, and the villages you can visit to see it firsthand.',
    image: '/Bird.jpg.jpeg',
    accent: '#3f6b63',
    quote: 'Conservation only succeeds when local communities are its primary beneficiaries and proud custodians.',
    takeaway: 'Impact Notice: 10% of all Rwanda park entry fee revenue is reinvested into community infrastructure, funding over 800 local schools, health clinics, and clean water points.',
    paragraphs: [
      'Every gorilla permit purchased for Volcanoes National Park contributes directly to one of Africa’s most successful conservation revenue-sharing models. Ten percent of total revenue goes straight to the revenue-share scheme managed by the Rwanda Development Board.',
      'Visiting the SACOLA community cultural village near Kinigi reveals how former poachers have become celebrated guardians of the forest. Income generated from eco-tourism funds modern healthcare clinics, solar power initiatives, and agricultural co-operatives.',
      'By choosing low-impact, high-value tourism, guests ensure that wild gorilla populations continue to thrive alongside flourishing rural communities.'
    ],
    highlights: [
      'Over 800 community infrastructure projects built across Rwanda since 2005.',
      'Former poachers retrained as certified park rangers and organic farmers.',
      'Direct guest interactions that honor indigenous culture without commercialization.'
    ]
  },
  {
    key: 'packing-list',
    category: 'Travel Tips',
    date: 'December 2025',
    readTime: '4 min read',
    author: 'Jean-Luc Habimana',
    authorRole: 'Head Safari Specialist',
    title: 'The Only Packing List You Need for a Gorilla Trek',
    excerpt:
      'What actually earns a place in your daypack for the trailhead, and what to leave at the lodge.',
    image: '/exp-primates.jpg',
    accent: '#b9772e',
    quote: 'Pack light, pack smart, and remember: neutral tones keep you cool while respecting wild animal instincts.',
    takeaway: 'Must-Have Item: Sturdy leather or suede gardening gloves protect your hands when pulling through thick stinging nettles on steep inclines.',
    paragraphs: [
      'Packing for a gorilla safari requires balancing strict bush planes’ weight limits with specialized gear needed for jungle terrain. Luggage allowances on regional flights are strictly 15–20 kg soft duffels.',
      'Focus on technical layering: moisture-wicking base tops, lightweight fleece mid-layers, and a breathable, 100% waterproof shell jacket. Quick-dry trousers tucked into tall socks keep fire ants and nettles at bay.',
      'Leave bright colors and animal prints behind—earth tones (khaki, olive green, beige, taupe) blend seamlessly into the forest aesthetic and avoid drawing unwanted insect attention.'
    ],
    highlights: [
      'Lightweight waterproof hiking boots with broken-in ankle support.',
      'Gardening gloves for nettle defense & high-energy trail snacks.',
      'Re-usable stainless water flask (single-use plastic is banned in Rwanda).'
    ]
  },
  {
    key: 'silverback-families',
    category: 'Gorilla Trekking',
    date: 'November 2025',
    readTime: '8 min read',
    author: 'Aline Umutoni',
    authorRole: 'Wildlife Researcher & Photographer',
    title: 'Meet the Habituated Families of Volcanoes National Park',
    excerpt:
      'A field guide to the named troops you might spend an hour with, and the rangers who know them by name.',
    image: '/exp-akagera.jpg',
    accent: '#5c6b4f',
    quote: 'Each gorilla family possesses a distinct social culture—from gentle playful troops to powerful multi-silverback dynasties.',
    takeaway: 'Family Highlight: The Sabyinyo group is known for Guhonda, one of the largest silverbacks ever recorded in the Virungas.',
    paragraphs: [
      'Volcanoes National Park is home to 12 fully habituated gorilla families reserved for eco-tourism. Each group has a unique lineage, led by formidable silverbacks whose individual personalities shape troop dynamics.',
      'The Susa group, famously researched by Dian Fossey, is renowned for its high altitude ranges and historical twin births. Meanwhile, the Amahoro group ("Peace") lives up to its name under the calm leadership of silverback Gahinga.',
      'During your morning briefing at Kinigi, park wardens match your physical fitness and interests with the appropriate family location, ensuring a safe and exhilarating encounter.'
    ],
    highlights: [
      'Susa Group: Historical troop with rare twin gorilla births.',
      'Amahoro Group: Gentle, peaceful troop residing on Mount Bisoke.',
      'Sabyinyo Group: Easy-access family featuring colossal silverbacks.'
    ]
  },
  {
    key: 'ranger-diaries',
    category: 'Conservation',
    date: 'October 2025',
    readTime: '6 min read',
    author: 'Patrick Bizimana',
    authorRole: 'Senior Park Ranger',
    title: 'A Day With the Rangers Who Guard the Volcanoes',
    excerpt:
      'Before dawn patrols, snare removal, and the quiet work that keeps the parks standing for the next generation.',
    image: '/cta-sunset.jpg',
    accent: '#3f6b63',
    quote: 'We don’t just guard animals; we protect our national inheritance and the future of African wilderness.',
    takeaway: 'Daily Duty: Rangers track each gorilla family 365 days a year from sunrise to sunset, recording health metrics and maintaining 24/7 security.',
    paragraphs: [
      'Long before safari vehicles arrive at Kinigi, teams of dedicated rangers step into the mist of the Virunga mountains. Armed with GPS units, water flasks, and deep respect for the forest, their dawn patrols ensure total security.',
      'Rangers locate gorilla family nests constructed the previous evening, verifying every individual’s health before guiding guest groups. Snare sweeps along buffer zones have dramatically reduced illegal poaching threats.',
      'Their tireless dedication has enabled mountain gorilla populations to rise above 1,000 individuals—making them the only wild ape species currently increasing in population globally.'
    ],
    highlights: [
      '365-day tracking ensures 99.9% guest sighting success rate.',
      'Continuous veterinary monitoring by Gorilla Doctors partners.',
      'Decisive anti-poaching operations securing the Virunga Massif.'
    ]
  },
  {
    key: 'visa-permits',
    category: 'Travel Tips',
    date: 'September 2025',
    readTime: '5 min read',
    author: 'Claire Mukamana',
    authorRole: 'Lead Itinerary Architect',
    title: 'Visas, Permits and Paperwork: A No-Stress Guide',
    excerpt:
      'Everything to sort before you fly, laid out in the order you actually need to do it.',
    image: '/story-guide.jpg',
    accent: '#b9772e',
    quote: 'Seamless logistics transform travel from a stressful puzzle into a smooth, unforgettable sanctuary experience.',
    takeaway: 'Pro Tip: The East Africa Tourist Visa ($100 USD) permits multi-entry travel between Rwanda, Uganda, and Kenya for up to 90 days.',
    paragraphs: [
      'International travel to East Africa is straightforward when guided by expert planning. Securing gorilla permits ($1,500 USD per person in Rwanda) is step number one, as daily permits are strictly capped to prevent environmental impact.',
      'Citizens of all countries receive a 30-day visa on arrival in Rwanda. If your safari spans neighboring borders, the joint East Africa Tourist Visa simplifies entry across Rwanda, Uganda, and Kenya.',
      'Our dedicated concierge team handles permit acquisition, health clearance forms, and seamless private transfers directly from Kigali International Airport to your luxury lodge.'
    ],
    highlights: [
      'Gorilla permits booked 3–6 months in advance for peak season.',
      'Yellow fever vaccination required when crossing regional land borders.',
      'Complimentary airport meet-and-greet service included in all Luxe itineraries.'
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