-- ========================================================
-- LUXE HORIZONS AFRICA — COMPLETE SEED SCRIPT FOR SUPABASE
-- ========================================================

-- 1. Create the 'posts' table
CREATE TABLE IF NOT EXISTS public.posts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  key TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  category TEXT NOT NULL,
  date TEXT NOT NULL,
  read_time TEXT DEFAULT '5 min read',
  author TEXT NOT NULL,
  author_role TEXT NOT NULL,
  excerpt TEXT NOT NULL,
  image TEXT NOT NULL,
  accent TEXT DEFAULT '#5c6b4f',
  quote TEXT,
  takeaway TEXT,
  paragraphs TEXT[] DEFAULT '{}',
  highlights TEXT[] DEFAULT '{}',
  published BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. Enable Row Level Security (RLS) & Policies
ALTER TABLE public.posts ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Allow public read access" ON public.posts;
CREATE POLICY "Allow public read access" ON public.posts FOR SELECT USING (true);

DROP POLICY IF EXISTS "Allow public insert access" ON public.posts;
CREATE POLICY "Allow public insert access" ON public.posts FOR INSERT WITH CHECK (true);

DROP POLICY IF EXISTS "Allow public update access" ON public.posts;
CREATE POLICY "Allow public update access" ON public.posts FOR UPDATE USING (true);

-- 3. Insert / Seed All 7 Blog Posts
INSERT INTO public.posts (key, category, date, read_time, author, author_role, title, excerpt, image, accent, quote, takeaway, paragraphs, highlights)
VALUES
(
  'gorilla-etiquette',
  'Gorilla Trekking',
  'March 2026',
  '6 min read',
  'Jean-Luc Habimana',
  'Head Safari Specialist & Trek Leader',
  'What Nobody Tells You Before Your First Gorilla Trek',
  'The permit is the easy part. Here is what actually matters on the day — from altitude to the seven-metre rule.',
  '/Mountain-Gorilla.jpg.jpeg',
  '#5c6b4f',
  'The moment you break through the bamboo thicket and lock eyes with a 200-kilogram Silverback, every step up the volcano fades into background noise.',
  'Key Takeaway: Hire a local porter at Kinigi headquarters. Beyond lightening your load, it directly supports the local agricultural community surrounding Volcanoes National Park.',
  ARRAY[
    'Standing at Kinigi headquarters as misty dawn light rolls over the peaks of Mount Sabyinyo, the anticipation is palpable. Most travelers focus on securing their permit months in advance—and rightfully so—but few realize how much the actual experience hinges on preparation during the final 48 hours.',
    'The trail in Volcanoes National Park is rarely a smooth walking path. You are trekking through dense bamboo forests, stinging nettles, and thick volcanic mud at altitudes starting at 2,400 meters. Proper gardening gloves, waterproof gaiters, and layered breathable clothing aren’t just recommended—they transform your trek from an endurance test into a joyful adventure.',
    'Rangers uphold a strict seven-metre observation rule to protect the gorillas from human respiratory illnesses. Yet, habituated gorilla families are curious beings; infants will frequently roll toward your feet or peer through the bamboo. The golden rule is simple: remain completely calm, avoid direct eye contact if a silverback chest-beats, and follow your head ranger’s low guttural vocalizations.'
  ],
  ARRAY[
    'Layer up for temperature shifts between 12°C at dawn to 24°C under jungle canopy.',
    'Pack a waterproof dry bag for camera equipment—mountain showers arrive without warning.',
    'Keep your voice at a quiet whisper; gorillas respond directly to human vocal tones.'
  ]
),
(
  'best-time-safari',
  'Travel Tips',
  'February 2026',
  '5 min read',
  'Claire Mukamana',
  'Lead Itinerary Architect',
  'The Best Time to Visit Rwanda, Uganda and Tanzania',
  'Peak season means peak crowds. We break down what each month actually looks like on the ground.',
  '/story-guide.jpg',
  '#b9772e',
  'Green season is East Africa’s best-kept secret—dramatic skies, newborn wildlife, and empty luxury lodges.',
  'Insider Tip: June through September offers optimal dry conditions for gorilla trekking and the Serengeti river crossings, but November and April offer lush photography and uncrowded parks.',
  ARRAY[
    'When planning an East African itinerary spanning Rwanda, Uganda, and Tanzania, timing is everything. While peak dry season (June to September) draws high demand for good reason, shoulder months offer extraordinary wildlife encounters with intimate luxury.',
    'In Rwanda’s Volcanoes and Nyungwe forests, the short dry spell from December to February brings clear mornings and crisp trekking conditions. In Tanzania, January to March marks the calving season in the Southern Serengeti, where thousands of wildebeest calves are born daily against a backdrop of apex predator action.',
    'If your goal is birdwatching or photographing emerald landscapes, the rains of April and November transform Akagera and Queen Elizabeth National Parks into vibrant ecosystems filled with migratory species.'
  ],
  ARRAY[
    'Dry Season (Jun–Sep): Easiest trekking footings and prime river crossing sightings.',
    'Calving Season (Jan–Mar): High predator activity in Southern Serengeti.',
    'Green Season (Apr–May & Nov): Exceptional value, dramatic light, and solitude.'
  ]
),
(
  'community-conservation',
  'Conservation',
  'January 2026',
  '7 min read',
  'Dr. Emmanuel Ndayisaba',
  'Conservation & Community Liaison',
  'Inside the Community Projects Funded by Your Park Fees',
  'Where the money from your trekking permit actually goes, and the villages you can visit to see it firsthand.',
  '/Bird.jpg.jpeg',
  '#3f6b63',
  'Conservation only succeeds when local communities are its primary beneficiaries and proud custodians.',
  'Impact Notice: 10% of all Rwanda park entry fee revenue is reinvested into community infrastructure, funding over 800 local schools, health clinics, and clean water points.',
  ARRAY[
    'Every gorilla permit purchased for Volcanoes National Park contributes directly to one of Africa’s most successful conservation revenue-sharing models. Ten percent of total revenue goes straight to the revenue-share scheme managed by the Rwanda Development Board.',
    'Visiting the SACOLA community cultural village near Kinigi reveals how former poachers have become celebrated guardians of the forest. Income generated from eco-tourism funds modern healthcare clinics, solar power initiatives, and agricultural co-operatives.',
    'By choosing low-impact, high-value tourism, guests ensure that wild gorilla populations continue to thrive alongside flourishing rural communities.'
  ],
  ARRAY[
    'Over 800 community infrastructure projects built across Rwanda since 2005.',
    'Former poachers retrained as certified park rangers and organic farmers.',
    'Direct guest interactions that honor indigenous culture without commercialization.'
  ]
),
(
  'packing-list',
  'Travel Tips',
  'December 2025',
  '4 min read',
  'Jean-Luc Habimana',
  'Head Safari Specialist',
  'The Only Packing List You Need for a Gorilla Trek',
  'What actually earns a place in your daypack for the trailhead, and what to leave at the lodge.',
  '/exp-primates.jpg',
  '#b9772e',
  'Pack light, pack smart, and remember: neutral tones keep you cool while respecting wild animal instincts.',
  'Must-Have Item: Sturdy leather or suede gardening gloves protect your hands when pulling through thick stinging nettles on steep inclines.',
  ARRAY[
    'Packing for a gorilla safari requires balancing strict bush planes’ weight limits with specialized gear needed for jungle terrain. Luggage allowances on regional flights are strictly 15–20 kg soft duffels.',
    'Focus on technical layering: moisture-wicking base tops, lightweight fleece mid-layers, and a breathable, 100% waterproof shell jacket. Quick-dry trousers tucked into tall socks keep fire ants and nettles at bay.',
    'Leave bright colors and animal prints behind—earth tones (khaki, olive green, beige, taupe) blend seamlessly into the forest aesthetic and avoid drawing unwanted insect attention.'
  ],
  ARRAY[
    'Lightweight waterproof hiking boots with broken-in ankle support.',
    'Gardening gloves for nettle defense & high-energy trail snacks.',
    'Re-usable stainless water flask (single-use plastic is banned in Rwanda).'
  ]
),
(
  'silverback-families',
  'Gorilla Trekking',
  'November 2025',
  '8 min read',
  'Aline Umutoni',
  'Wildlife Researcher & Photographer',
  'Meet the Habituated Families of Volcanoes National Park',
  'A field guide to the named troops you might spend an hour with, and the rangers who know them by name.',
  '/exp-akagera.jpg',
  '#5c6b4f',
  'Each gorilla family possesses a distinct social culture—from gentle playful troops to powerful multi-silverback dynasties.',
  'Family Highlight: The Sabyinyo group is known for Guhonda, one of the largest silverbacks ever recorded in the Virungas.',
  ARRAY[
    'Volcanoes National Park is home to 12 fully habituated gorilla families reserved for eco-tourism. Each group has a unique lineage, led by formidable silverbacks whose individual personalities shape troop dynamics.',
    'The Susa group, famously researched by Dian Fossey, is renowned for its high altitude ranges and historical twin births. Meanwhile, the Amahoro group ("Peace") lives up to its name under the calm leadership of silverback Gahinga.',
    'During your morning briefing at Kinigi, park wardens match your physical fitness and interests with the appropriate family location, ensuring a safe and exhilarating encounter.'
  ],
  ARRAY[
    'Susa Group: Historical troop with rare twin gorilla births.',
    'Amahoro Group: Gentle, peaceful troop residing on Mount Bisoke.',
    'Sabyinyo Group: Easy-access family featuring colossal silverbacks.'
  ]
),
(
  'ranger-diaries',
  'Conservation',
  'October 2025',
  '6 min read',
  'Patrick Bizimana',
  'Senior Park Ranger',
  'A Day With the Rangers Who Guard the Volcanoes',
  'Before dawn patrols, snare removal, and the quiet work that keeps the parks standing for the next generation.',
  '/cta-sunset.jpg',
  '#3f6b63',
  'We don’t just guard animals; we protect our national inheritance and the future of African wilderness.',
  'Daily Duty: Rangers track each gorilla family 365 days a year from sunrise to sunset, recording health metrics and maintaining 24/7 security.',
  ARRAY[
    'Long before safari vehicles arrive at Kinigi, teams of dedicated rangers step into the mist of the Virunga mountains. Armed with GPS units, water flasks, and deep respect for the forest, their dawn patrols ensure total security.',
    'Rangers locate gorilla family nests constructed the previous evening, verifying every individual’s health before guiding guest groups. Snare sweeps along buffer zones have dramatically reduced illegal poaching threats.',
    'Their tireless dedication has enabled mountain gorilla populations to rise above 1,000 individuals—making them the only wild ape species currently increasing in population globally.'
  ],
  ARRAY[
    '365-day tracking ensures 99.9% guest sighting success rate.',
    'Continuous veterinary monitoring by Gorilla Doctors partners.',
    'Decisive anti-poaching operations securing the Virunga Massif.'
  ]
),
(
  'visa-permits',
  'Travel Tips',
  'September 2025',
  '5 min read',
  'Claire Mukamana',
  'Lead Itinerary Architect',
  'Visas, Permits and Paperwork: A No-Stress Guide',
  'Everything to sort before you fly, laid out in the order you actually need to do it.',
  '/story-guide.jpg',
  '#b9772e',
  'Seamless logistics transform travel from a stressful puzzle into a smooth, unforgettable sanctuary experience.',
  'Pro Tip: The East Africa Tourist Visa ($100 USD) permits multi-entry travel between Rwanda, Uganda, and Kenya for up to 90 days.',
  ARRAY[
    'International travel to East Africa is straightforward when guided by expert planning. Securing gorilla permits ($1,500 USD per person in Rwanda) is step number one, as daily permits are strictly capped to prevent environmental impact.',
    'Citizens of all countries receive a 30-day visa on arrival in Rwanda. If your safari spans neighboring borders, the joint East Africa Tourist Visa simplifies entry across Rwanda, Uganda, and Kenya.',
    'Our dedicated concierge team handles permit acquisition, health clearance forms, and seamless private transfers directly from Kigali International Airport to your luxury lodge.'
  ],
  ARRAY[
    'Gorilla permits booked 3–6 months in advance for peak season.',
    'Yellow fever vaccination required when crossing regional land borders.',
    'Complimentary airport meet-and-greet service included in all Luxe itineraries.'
  ]
)
ON CONFLICT (key) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  date = EXCLUDED.date,
  read_time = EXCLUDED.read_time,
  author = EXCLUDED.author,
  author_role = EXCLUDED.author_role,
  excerpt = EXCLUDED.excerpt,
  image = EXCLUDED.image,
  accent = EXCLUDED.accent,
  quote = EXCLUDED.quote,
  takeaway = EXCLUDED.takeaway,
  paragraphs = EXCLUDED.paragraphs,
  highlights = EXCLUDED.highlights;
