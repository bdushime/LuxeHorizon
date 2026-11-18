// Experiences / tours — copied word-for-word from the client's live site
// (https://luxehorizonsafrica.com/experiences/) on 2026-11-18, at the client's
// request: same 18 tours, same order, same titles, card text and tour text.
//
// Photos are the live site's own, converted to WebP and stored per tour in
// public/images/experiences/<slug>/ (card.webp + gallery-1..4.webp). Photos
// inside the day-by-day plans live in public/images/experiences/itinerary-photos/.
// Where the live site repeated a gallery photo across two tours, the second
// tour uses a different photo already in the project (see public/images/README.md).
//
// Content blocks: {type:'p'|'h', text} | {type:'ul'|'ol', items:[...]} | {type:'img', src, alt}
//
// The previous experience/itinerary data is archived in src/archive/.

export const experiencesIntro = "All our proposed safaris are privately guided and itineraries are tailor made to the finer detail of your most desired safari experience. Our team of expert travel designers will get in touch asking the right questions and come up with a proposal that works for you, whether as a solo traveller, a honeymoon experience, a family trip or even a group adventure."

export const toursData = [
  {
    "slug": "rwanda-discovery",
    "title": "Rwanda Discovery",
    "cardText": "11-Day Rwanda Holiday includes Kigali, Akagera National Park, Nyungwe National Park, Kivu Lake, Musanze/Volcanoes National Park",
    "cardImage": "/images/experiences/rwanda-discovery/card.webp",
    "heroImage": "/images/experiences/rwanda-discovery/card.webp",
    "days": "11",
    "destination": [
      "Rwanda"
    ],
    "gallery": [
      {
        "src": "/images/experiences/rwanda-discovery/gallery-1.webp",
        "alt": "food eating by the lake kivu"
      },
      {
        "src": "/images/experiences/rwanda-discovery/gallery-2.webp",
        "alt": "Activities on Lake-Kivu"
      },
      {
        "src": "/images/experiences/rwanda-discovery/gallery-3.webp",
        "alt": "Bananas market Lake Kivu"
      },
      {
        "src": "/images/experiences/rwanda-discovery/gallery-4.webp",
        "alt": "rwanda lake kivu birds"
      }
    ],
    "overview": [
      {
        "type": "p",
        "text": "11-Day Rwanda Holiday includes: 2 nights in Kigali, 2 nights at Akagera National Park, 2 nights by Nyungwe National Park, 1 night by Kivu Lake, 3 nights in Musanze/Volcanoes National Park at the recommended Luxury hotels and lodges."
      }
    ],
    "itinerary": [],
    "includes": [
      {
        "type": "ul",
        "items": [
          "Gorilla permit",
          "Golden Monkeys permit",
          "Big 5 at Akagera",
          "Game drives",
          "Boat cruise on Akagera’s Lake Ihema",
          "Chimpanzee trekking",
          "Canopy Walk/Nyungwe Waterfall",
          "Tea plantation & Women Tea pickers Community",
          "Boat ride on Lake Kivu",
          "Swimming cows on Kivu",
          "Nyanza King’s Palace guided visit",
          "Private Kigali City tour & Genocide Memorial visit",
          "All on-ground transportation on a 4×4 Vehicle with a Professional Private Guide",
          "In-country and regional flights as well as Helicopter transfers whenever required",
          "All accommodation",
          "Evacuation cover",
          "WiFi",
          "Bottled water on safari."
        ]
      }
    ],
    "excludes": [],
    "related": [
      "gorilla-trekking-golden-monkeys",
      "gorillas-in-the-mist",
      "rwandas-primates",
      "best-of-the-pearl-of-africa"
    ],
    "liveUrl": "https://luxehorizonsafrica.com/tours/rwanda-discovery/"
  },
  {
    "slug": "gorilla-trekking-golden-monkeys",
    "title": "Gorilla Trekking & Golden Monkeys",
    "cardText": "5-Day Volcanoes Experience includes: 1 night in Kigali, 3 nights in Musanze/Volcanoes National Park at the recommended Luxury hotels.",
    "cardImage": "/images/experiences/gorilla-trekking-golden-monkeys/card.webp",
    "heroImage": "/images/experiences/gorilla-trekking-golden-monkeys/card.webp",
    "days": "5",
    "destination": [
      "Rwanda"
    ],
    "gallery": [
      {
        "src": "/images/experiences/gorilla-trekking-golden-monkeys/gallery-1.webp",
        "alt": "Singita Kwitonda Lodge"
      },
      {
        "src": "/images/experiences/gorilla-trekking-golden-monkeys/gallery-2.webp",
        "alt": "Virunga Mountains"
      },
      {
        "src": "/images/experiences/gorilla-trekking-golden-monkeys/gallery-3.webp",
        "alt": "BISATE LODGE"
      },
      {
        "src": "/images/experiences/gorilla-trekking-golden-monkeys/gallery-4.webp",
        "alt": "Bird in Volcanoes NP"
      }
    ],
    "overview": [
      {
        "type": "p",
        "text": "5-Day Volcanoes Experience includes: 1 night in Kigali, 3 nights in Musanze/Volcanoes National Park at the recommended Luxury hotels and lodges."
      }
    ],
    "itinerary": [],
    "includes": [
      {
        "type": "ul",
        "items": [
          "Gorilla permit",
          "Golden Monkeys permit",
          "Private Kigali City tour & Genocide memorial visit",
          "All on-ground transportation on a 4×4 Vehicle with a Professional Private Guide",
          "In-country and regional flights as well as Helicopter transfers whenever required",
          "All accommodation",
          "Evacuation cover",
          "WiFi",
          "Bottled water on safari"
        ]
      }
    ],
    "excludes": [],
    "related": [
      "rwanda-discovery",
      "gorillas-in-the-mist",
      "rwandas-primates",
      "best-of-the-pearl-of-africa"
    ],
    "liveUrl": "https://luxehorizonsafrica.com/tours/gorilla-trekking-golden-monkeys/"
  },
  {
    "slug": "gorillas-in-the-mist",
    "title": "Gorillas in the Mist",
    "cardText": "4-Day Gorilla trekking includes: 1 night in Kigali, 2 nights in Musanze/Volcanoes National Park at the recommended Luxury hotels and lodges.",
    "cardImage": "/images/experiences/gorillas-in-the-mist/card.webp",
    "heroImage": "/images/experiences/gorillas-in-the-mist/card.webp",
    "days": "4",
    "destination": [
      "Rwanda"
    ],
    "gallery": [
      {
        "src": "/images/experiences/gorillas-in-the-mist/gallery-1.webp",
        "alt": "Kigali Convention Center"
      },
      {
        "src": "/images/experiences/gorillas-in-the-mist/gallery-2.webp",
        "alt": "Virunga Mountains"
      },
      {
        "src": "/images/experiences/gorillas-in-the-mist/gallery-3.webp",
        "alt": "Five Volcanoes Boutique Hotel"
      },
      {
        "src": "/images/experiences/gorillas-in-the-mist/gallery-4.webp",
        "alt": "Five volcanoes boutique"
      }
    ],
    "overview": [
      {
        "type": "p",
        "text": "4-Day Gorilla trekking includes: 1 night in Kigali, 2 nights in Musanze/Volcanoes National Park at the recommended Luxury hotels and lodges."
      }
    ],
    "itinerary": [],
    "includes": [
      {
        "type": "ul",
        "items": [
          "Gorilla permit",
          "Private Kigali City tour & Genocide memorial visit",
          "All on-ground transportation on a 4×4 Vehicle with a Professional Private Guide",
          "In-country and regional flights as well as Helicopter transfers whenever required",
          "All accommodation",
          "Evacuation cover",
          "WiFi",
          "Bottled water on safari"
        ]
      }
    ],
    "excludes": [],
    "related": [
      "rwanda-discovery",
      "gorilla-trekking-golden-monkeys",
      "rwandas-primates",
      "best-of-the-pearl-of-africa"
    ],
    "liveUrl": "https://luxehorizonsafrica.com/tours/gorillas-in-the-mist/"
  },
  {
    "slug": "rwandas-primates",
    "title": "Rwanda’s Primates",
    "cardText": "2 nights in Kigali, 2 nights by Nyungwe National Park, 3 nights in Musanze/Volcanoes National Park at the recommended Luxury hotels",
    "cardImage": "/images/experiences/rwandas-primates/card.webp",
    "heroImage": "/images/experiences/rwandas-primates/card.webp",
    "days": "8",
    "destination": [
      "Rwanda"
    ],
    "gallery": [
      {
        "src": "/images/experiences/rwandas-primates/gallery-1.webp",
        "alt": "Kigali Convention Center"
      },
      {
        "src": "/images/experiences/rwandas-primates/gallery-2.webp",
        "alt": "Singita Kwitonda Lodge"
      },
      {
        "src": "/images/experiences/rwandas-primates/gallery-3.webp",
        "alt": "Rwanda Canopy Walk"
      },
      {
        "src": "/images/experiences/rwandas-primates/gallery-4.webp",
        "alt": "Bird in Volcanoes NP"
      }
    ],
    "overview": [
      {
        "type": "p",
        "text": "8-day Rwanda’s Primates Experience includes: 2 nights in Kigali, 2 nights by Nyungwe National Park, 3 nights in Musanze/Volcanoes National Park at the recommended Luxury hotels and lodges."
      }
    ],
    "itinerary": [],
    "includes": [
      {
        "type": "ul",
        "items": [
          "Gorilla permit",
          "Golden Monkeys permit",
          "Chimpanzee trekking",
          "Canopy Walk/Nyungwe Waterfall",
          "Women Tea plantation & Tea pickers Community",
          "Nyanza King’s Palace guided visit",
          "Private Kigali City tour & Genocide memorial visit",
          "All on-ground transportation on a 4×4 Vehicle with a Professional Private Guide",
          "In-country and regional flights as well as Helicopter transfers whenever required",
          "All accommodation",
          "Evacuation cover",
          "WiFi",
          "Bottled water on safari"
        ]
      }
    ],
    "excludes": [],
    "related": [
      "rwanda-discovery",
      "gorilla-trekking-golden-monkeys",
      "gorillas-in-the-mist",
      "best-of-the-pearl-of-africa"
    ],
    "liveUrl": "https://luxehorizonsafrica.com/tours/rwandas-primates/"
  },
  {
    "slug": "best-of-the-pearl-of-africa",
    "title": "Best of the Pearl of Africa",
    "cardText": "10-Day Uganda Wildlife: 1 night Entebbe, 2 nights Bwindi, 2 nights Queen Elizabeth Park, 2 nights Kibale Park, 2 nights Semliki Reserve.",
    "cardImage": "/images/experiences/best-of-the-pearl-of-africa/card.webp",
    "heroImage": "/images/experiences/best-of-the-pearl-of-africa/card.webp",
    "days": "10",
    "destination": [
      "Uganda"
    ],
    "gallery": [
      {
        "src": "/images/experiences/best-of-the-pearl-of-africa/gallery-1.webp",
        "alt": "Ugandan Breakfast"
      },
      {
        "src": "/images/experiences/best-of-the-pearl-of-africa/gallery-2.webp",
        "alt": "Queen Elizabeth National Park elephants"
      },
      {
        "src": "/images/experiences/best-of-the-pearl-of-africa/gallery-3.webp",
        "alt": "Murchison Falls NP"
      },
      {
        "src": "/images/experiences/best-of-the-pearl-of-africa/gallery-4.webp",
        "alt": "Kibale NP Chimpanzee"
      }
    ],
    "overview": [
      {
        "type": "p",
        "text": "10-day Uganda’s Wildlife includes: 1 night in Entebbe, 2 nights in Bwindi, 2 nights at Queen Elizabeth National Park, 2 nights at Kibale National Park, 2 nights at the Semliki Reserve at the recommended Luxury hotels and lodges."
      }
    ],
    "itinerary": [],
    "includes": [
      {
        "type": "ul",
        "items": [
          "Golden Monkeys permit",
          "Chimpanzee trekking",
          "Canopy Walk/Nyungwe Waterfall",
          "Women Tea plantation & Tea pickers Community",
          "Nyanza King’s Palace guided visit",
          "Private Kigali City tour & Genocide Memorial visit",
          "All on-ground transportation on a 4×4 Vehicle with a Professional Private Guide",
          "In-country and regional flights as well as Helicopter transfers whenever required",
          "All accommodation",
          "Evacuation cover",
          "WiFi",
          "Bottled water on safari."
        ]
      }
    ],
    "excludes": [],
    "related": [
      "rwanda-discovery",
      "gorilla-trekking-golden-monkeys",
      "gorillas-in-the-mist",
      "rwandas-primates"
    ],
    "liveUrl": "https://luxehorizonsafrica.com/tours/best-of-the-pearl-of-africa/"
  },
  {
    "slug": "5-day-rwanda-trekking-experience",
    "title": "5 Day Rwanda Trekking Experience",
    "cardText": "5-Day Rwandan Adventure: VIP Airport Meet & Greet, Kigali tour, Volcanoes stay for Golden Monkeys & Gorillas.",
    "cardImage": "/images/experiences/5-day-rwanda-trekking-experience/card.webp",
    "heroImage": "/images/experiences/5-day-rwanda-trekking-experience/card.webp",
    "days": "5",
    "destination": [
      "Rwanda"
    ],
    "gallery": [
      {
        "src": "/images/experiences/5-day-rwanda-trekking-experience/gallery-1.webp",
        "alt": "Rwanda Volcanoes National Park Golden monkey"
      },
      {
        "src": "/images/experiences/5-day-rwanda-trekking-experience/gallery-2.webp",
        "alt": "Resort Kigali"
      },
      {
        "src": "/images/experiences/5-day-rwanda-trekking-experience/gallery-3.webp",
        "alt": "Gorillas"
      },
      {
        "src": "/images/experiences/5-day-rwanda-trekking-experience/gallery-4.webp",
        "alt": "The Ellen Degeneres Campus"
      }
    ],
    "overview": [
      {
        "type": "ul",
        "items": [
          "Day 1 Arrival, VIP Meet & Greet at the Airport, Overnight in Kigali (Retreat, the Marriott or Serena)",
          "Day 2 Morning Kigali City Tour with a Visit to Kigali Genocide Memorial & a scenic drive to the Volcanoes, 3 nights by the Volcanoes",
          "Day 3 Curious Golden Monkeys & Dian Fossey Research Campus",
          "Day 4 Majestic Gorillas & Optional Community Village activities/Spa at the Resort",
          "Day 5 Art & Crafts, Local Markets and Departure"
        ]
      }
    ],
    "itinerary": [
      {
        "day": "1",
        "title": "Arrive in Kigali",
        "blocks": [
          {
            "type": "p",
            "text": "On arrival at Kigali International Airport, you will be welcomed from the tarmac by our Meet & Greet Airport Agent and be assisted with the immigration process, your luggage and escorted through the exit gate where you will be met by your dedicated guide for a short introductory briefing, learn a few key words in our local language as you embark on a short 15min drive to the Retreat by Heaven. Dinner will be on your own arrangement, though we are happy to recommend a nearby restaurant depending on your arrival time."
          },
          {
            "type": "p",
            "text": "Overnight: the Retreat (Bed & Breakfast)"
          },
          {
            "type": "img",
            "src": "/images/experiences/itinerary-photos/resort-kigali.webp",
            "alt": ""
          },
          {
            "type": "img",
            "src": "/images/experiences/itinerary-photos/hotel-kigali.webp",
            "alt": ""
          },
          {
            "type": "p",
            "text": "The Retreat is a 20-room luxury boutique hotel set in the vibrant heart of Kigali, this luxury boutique hotel and spa offers easy access to all that is happening in this dynamic city."
          }
        ]
      },
      {
        "day": "2",
        "title": "Historical Rwanda/Volcanoes National Park",
        "blocks": [
          {
            "type": "p",
            "text": "After breakfast, you will check out and be picked up from your hotel at 9am, and drive to the Genocide Memorial, an important historical component of your trip and have a chance to understand what really happened in 1994 during the Genocide against the Tutsi and the journey of Hope and reconstruction of Rwanda till today."
          },
          {
            "type": "img",
            "src": "/images/experiences/itinerary-photos/kigali-genocide-memorial-1-1.webp",
            "alt": ""
          },
          {
            "type": "img",
            "src": "/images/experiences/itinerary-photos/kigali-genocide-memorial-2.webp",
            "alt": ""
          },
          {
            "type": "p",
            "text": "You will then transfer to a nice recommended restaurant in Kigali for lunch. After lunch you will depart on a 3-hour scenic drive to Musanze, arriving at your Resort in time for check in; your home for the next 3 nights."
          },
          {
            "type": "img",
            "src": "/images/experiences/itinerary-photos/hotel-kigali-1.webp",
            "alt": ""
          },
          {
            "type": "img",
            "src": "/images/experiences/itinerary-photos/resort-kigali-1.webp",
            "alt": ""
          },
          {
            "type": "p",
            "text": "4 Recommended accommodation options among others:"
          },
          {
            "type": "p",
            "text": "Singita Kwitonda Lodge The location is easily the best of the luxury lodges in the area, the property has a border with the wall of Volcanoes National Park. The views of the large volcanoes are breathtaking, which greet you every morning as you awaken.”"
          },
          {
            "type": "p",
            "text": "One & Only Gorilla’s Nest Eye to eye with swaying eucalyptus trees, One & Only Gorilla’s Nest is one of the closest resorts to Volcanoes National Park – a historic rainforest home to a diverse tapestry of wildlife."
          },
          {
            "type": "p",
            "text": "Sabyinyo Silverback Lodge A community-inspired luxurious lodge, located in the foothills of the mist-shrouded Virunga Massif. Sabyinyo is a true spirit of conservation and rehabilitation, surrounded by bountiful organic gardens, upliftment projects in the neighborhood of the Volcanoes National Park."
          },
          {
            "type": "p",
            "text": "The Bishop’s House The colonial style architecture and furnishings of The Bishop’s House sets it apart from others and our nine luxuriously decorated rooms. TBH is a haven of tranquility, surrounded by flora and fauna along with the sights and sounds of nature."
          },
          {
            "type": "img",
            "src": "/images/experiences/itinerary-photos/hotel-kigali-2.webp",
            "alt": ""
          },
          {
            "type": "img",
            "src": "/images/experiences/itinerary-photos/camp-kigali.webp",
            "alt": ""
          }
        ]
      },
      {
        "day": "3",
        "title": "Golden monkey Trek & Rwanda's Conservation story",
        "blocks": [
          {
            "type": "p",
            "text": "Early breakfast at the lodge. At 6:40 in the morning, you will set off on a golden monkey trekking experience, stopping by the park headquarters, a 10-minute drive away, for briefing and assigning a guide. After the golden monkey trek, you will return to the lodge for lunch."
          },
          {
            "type": "img",
            "src": "/images/experiences/itinerary-photos/rwanda-volcanoes-national-park-monkey.webp",
            "alt": ""
          },
          {
            "type": "img",
            "src": "/images/experiences/itinerary-photos/monkey.webp",
            "alt": ""
          },
          {
            "type": "img",
            "src": "/images/experiences/itinerary-photos/rwanda-volcanoes-national-park-monkey-1.webp",
            "alt": ""
          },
          {
            "type": "p",
            "text": "In the afternoon you will have an Optional visit the Research Center & Campus for a Conservation historical background and efforts by the famous Dian Fossey and the Volcanoes National Park safeguarding the endangered Mountain Gorillas."
          },
          {
            "type": "img",
            "src": "/images/experiences/itinerary-photos/rwanda-park.webp",
            "alt": ""
          },
          {
            "type": "img",
            "src": "/images/experiences/itinerary-photos/the-ellen-degeneres-campus.webp",
            "alt": ""
          }
        ]
      },
      {
        "day": "4",
        "title": "Gorilla Trekking experience",
        "blocks": [
          {
            "type": "p",
            "text": "Once again you will have an early breakfast and set off afterwards for your gorilla trekking experience, stopping by the park headquarters, an approximate 10-minute drive away, for briefing and assigning to a gorilla group. After the gorilla trekking experience, you will return to the lodge for lunch. In the afternoon you have an option to enjoy a relaxing massage treatment at the Lodge or you may opt to community village walk, a rewarding experience that gives you a real taste of a typical Rwandan village life."
          },
          {
            "type": "img",
            "src": "/images/experiences/itinerary-photos/gorilla-trekking.webp",
            "alt": ""
          },
          {
            "type": "img",
            "src": "/images/experiences/itinerary-photos/gorillas.webp",
            "alt": ""
          },
          {
            "type": "p",
            "text": "Volcanoes National Park protects the steep slopes of this magnificent mountain range – home of the rare mountain gorilla – and the rich mosaic of montane ecosystems, which embrace evergreen and bamboo forest, open grassland, swamp and heath. The high point of the trek will be spending an hour with the remarkably peaceful gorillas despite their size and appearance, as they go about their daily life: feeding, playing, resting, grooming and raising their young."
          },
          {
            "type": "p",
            "text": "Gorilla Trekking Tips & Rules:"
          },
          {
            "type": "ul",
            "items": [
              "When tracking gorillas, wear sturdier clothing to protect against stinging nettles, and solid walking shoes. A lightweight waterproof jacket may come in handy in the moist mountains.",
              "You will also need a small backpack to carry water and snacks.",
              "Keep a minimum of 10 meters from the Gorillas – this is to protect them.",
              "Do NOT remove anything from the park e.g. flowers, fruit, porcupine quills, etc.",
              "Keep your voices down at all times.",
              "No Flash photography is allowed.",
              "Professional film makers require permission and need to purchase filming permits.",
              "Do NOT eat or drink when close to the gorillas – this is a disease risk.",
              "Do NOT touch the Gorillas – they are wild animals.",
              "The maximum time you can spend with the gorillas is ONE hour",
              "If you are feeling ill, or are carrying a contagious disease, please volunteer to stay behind. An alternative visit will be arranged for you,",
              "Do NOT spit in the park and go to the bathroom only as instructed by your guide.",
              "Do not leave anything in the park, if you pack it in, pack it out!",
              "Obey the local guide instructions at all times, for the safety of the Gorillas and visitors.",
              "Porters are available at a small fee to carry your daypack and help you up the steep slopes when gorilla tracking.",
              "The minimum age for Gorilla trekking is 15 years."
            ]
          }
        ]
      },
      {
        "day": "5",
        "title": "Kigali City/ Depart Rwanda",
        "blocks": [
          {
            "type": "p",
            "text": "After breakfast, you will check out and embark on a 3 hour drive to Kigali. Our driver guide will be at your disposal to offer a city tour for a possible Arts & Crafts souvenir shopping expedition in Kigali and local market visits, should your departure flight allow."
          },
          {
            "type": "img",
            "src": "/images/experiences/itinerary-photos/kigali-city.webp",
            "alt": ""
          },
          {
            "type": "p",
            "text": "Otherwise you will be transferred to the Airport for your departure flight and that will mark the end of your trip to Rwanda."
          },
          {
            "type": "p",
            "text": "The total cost of the tour starts from USD 3,581 per person sharing depending on the property of your choice"
          }
        ]
      }
    ],
    "includes": [
      {
        "type": "ul",
        "items": [
          "Car hire (Luxury 4×4) with professional driver guides",
          "All transport & transfers",
          "All accommodation as per itinerary",
          "All meals as per program",
          "All mentioned activities",
          "Water & Wifi on the vehicle throughout the trip",
          "Evacuation cover",
          "All government taxes"
        ]
      }
    ],
    "excludes": [
      {
        "type": "ul",
        "items": [
          "Gorilla Trekking permits at $1500 per person",
          "International air to/from Rwanda",
          "Gratuities to drivers, guides, lodge/ hotel staff",
          "Items of personal nature"
        ]
      }
    ],
    "related": [
      "kigalis-golf-experience-the-safari-the-city",
      "gorilla-trekking-golden-monkeys",
      "gorillas-in-the-mist",
      "rwandas-primates"
    ],
    "liveUrl": "https://luxehorizonsafrica.com/tours/5-day-rwanda-trekking-experience/"
  },
  {
    "slug": "7-day-rwanda-primates-adventure",
    "title": "7 Day Rwanda primates adventure",
    "cardText": "7-Day Rwandan Odyssey: VIP Arrival, Kigali, Nyungwe, Lake Kivu, Volcanoes – Wildlife wonders await!",
    "cardImage": "/images/experiences/7-day-rwanda-primates-adventure/card.webp",
    "heroImage": "/images/experiences/7-day-rwanda-primates-adventure/card.webp",
    "days": "7",
    "destination": [
      "Rwanda"
    ],
    "gallery": [
      {
        "src": "/images/experiences/7-day-rwanda-primates-adventure/gallery-1.webp",
        "alt": "Hotel Kigali city"
      },
      {
        "src": "/images/experiences/7-day-rwanda-primates-adventure/gallery-2.webp",
        "alt": "Gorilla Trekking"
      },
      {
        "src": "/images/experiences/7-day-rwanda-primates-adventure/gallery-3.webp",
        "alt": "The Ellen Degeneres Campus"
      },
      {
        "src": "/images/experiences/7-day-rwanda-primates-adventure/gallery-4.webp",
        "alt": "Tea Plantation"
      }
    ],
    "overview": [
      {
        "type": "p",
        "text": "7-Day Rwandan Odyssey: VIP Airport Arrival, Kigali night, Nyungwe’s Canopy Walk, Chimpanzee Trek, Lake Kivu’s community experiences, Volcanoes for Golden Monkey and Gorilla Treks, and a final night in Kigali. Your unforgettable journey begins now!"
      }
    ],
    "itinerary": [
      {
        "day": "1",
        "title": "Arrive in Kigali",
        "blocks": [
          {
            "type": "p",
            "text": "On arrival at Kigali International Airport, you will be welcomed from the tarmac by our Meet & Greet Airport Agent and be assisted with the immigration process, your luggage and escorted through the exit gate where you will be met by your dedicated guide for a short introductory briefing, learn a few key words in our local language as you embark on a short 15min drive to the Kigali Marriott. Dinner will be on your own arrangement, though we are happy to recommend a nearby restaurant depending on your arrival time."
          },
          {
            "type": "p",
            "text": "Overnight for two first nights at Kigali Marriott Hotel on Bed & Breakfast basis"
          },
          {
            "type": "img",
            "src": "/images/experiences/itinerary-photos/hotel-marriott-hotel.webp",
            "alt": ""
          },
          {
            "type": "img",
            "src": "/images/experiences/itinerary-photos/marriott-kigali.webp",
            "alt": ""
          },
          {
            "type": "p",
            "text": "Experience Rwanda’s capital from Kigali Marriott Hotel, conveniently located near the Nyarugenge financial district and the Kigali City Hall. This impeccable luxury hotel provides spacious, modern accommodations with deluxe amenities and premium services"
          }
        ]
      },
      {
        "day": "2",
        "title": "Nyungwe National Park",
        "blocks": [
          {
            "type": "p",
            "text": "Next morning, you will have check out and be transferred on a Helicopter (There is an option of 40min morning scheduled commercial Rwandair local flight or an approx 7hrs drive both from Kigali) to Nyungwe national park for afternoon Canopy walk thereafter check in at One & Only Nyungwe House, your home for the next 2 nights."
          },
          {
            "type": "img",
            "src": "/images/experiences/itinerary-photos/air-transportation.webp",
            "alt": ""
          },
          {
            "type": "img",
            "src": "/images/experiences/itinerary-photos/forest-cover.webp",
            "alt": ""
          },
          {
            "type": "p",
            "text": "The 70 meters above the Forest Canopy Walkway consists of three bridges and three towers and one is able to experience unparalleled biodiversity, orchids, monkeys, birds and more from high above the Forest."
          },
          {
            "type": "p",
            "text": "One & Only Nyungwe House: Alongside ancient rainforest, within the lush green expanse of a working tea plantation, One & Only Nyungwe House offers an exclusive window to Africa’s fascinating wildlife and culture. Indigenous open-air spa treatments, awe-inspiring, once-in-a-lifetime moments are sure to amaze you at every turn."
          },
          {
            "type": "p",
            "text": "Alternative accommodation by the Nyungwe Forest can be Kivu Marina Bay by Mantis Collection, by the Lake Kivu Shores. At 5 minutes from the Kamembe Airport, Kivu Marina Bay offers extraordinary Lake views with various water and sports activities from the property)"
          },
          {
            "type": "img",
            "src": "/images/experiences/itinerary-photos/kigali-meals.webp",
            "alt": ""
          },
          {
            "type": "img",
            "src": "/images/experiences/itinerary-photos/hotel-kigali-city-1.webp",
            "alt": ""
          },
          {
            "type": "img",
            "src": "/images/experiences/itinerary-photos/hotel-kigali-city.webp",
            "alt": ""
          }
        ]
      },
      {
        "day": "3",
        "title": "Chimpanzee Trekking/Community experience",
        "blocks": [
          {
            "type": "p",
            "text": "5:00am you will drive to the starting point & thereafter proceed for Chimpanzee trekking. If you are interested in botany, the flora in Nyungwe comes as an added bonus; you will also have a chance to view the other habitants of the forest such as multiple bird species, butterflies, etc"
          },
          {
            "type": "img",
            "src": "/images/experiences/itinerary-photos/volcanoes-national-park-monkey.webp",
            "alt": ""
          },
          {
            "type": "img",
            "src": "/images/experiences/itinerary-photos/tea-plantation-01.webp",
            "alt": ""
          },
          {
            "type": "p",
            "text": "There is approximately 500 Chimpanzee individuals in the entire Park and are grouped in now three troops by forest locations, Gisovu, Kuwinka & Cyamudongo which is a small patch of the forest located in the eastern part of the Park. While visiting the Park, one has high chances of viewing a variety of other attractions such as various orchids and other plant species, multiple bird species as well as other primates such as colobus monkeys or vervet monkeys, etc."
          },
          {
            "type": "p",
            "text": "After trekking you will return to the Hotel for a late breakfast, thereafter you will enjoy either an afternoon Tea Planting – Farm to Cup Experience with local farmers doing the tea picking with an aim tio fill up the 4 Kilo basket of Tea leaves(harvest) or else you opt to go for the Cultural Experience with the local community of the Fisherwomen of Gihaya Island."
          },
          {
            "type": "img",
            "src": "/images/experiences/itinerary-photos/tea-planation.webp",
            "alt": ""
          },
          {
            "type": "img",
            "src": "/images/experiences/itinerary-photos/boat-ride-01.webp",
            "alt": ""
          },
          {
            "type": "p",
            "text": "The Experience starts when you embark on a local boat towards their special Island. On arrival, you are welcomed by special traditional performance with unique songs and a rythm of their traditional music instruments and dancing style. Surely, you won’t resist not joining! By the same Island, you will have a chance to view some of the small farms on the island as well as some remains from the German and Belgian colonial settlements."
          }
        ]
      },
      {
        "day": "4",
        "title": "Scenic transfer along Lake shores to Volcanoes National Park",
        "blocks": [
          {
            "type": "p",
            "text": "After breakfast, you will check out and be transferred to the helipad for a helicopter transfer to the Volcanoes (there is an option of a Scenic 7hr drive along the Lake Kivu Shores with a stop-over lunch by the Lake at Cleo Kivu Hotel ); on arrival, you will check in at your Hotel by the Volcanoes for the next 3 nights"
          },
          {
            "type": "img",
            "src": "/images/experiences/itinerary-photos/kigali-road-trip.webp",
            "alt": ""
          },
          {
            "type": "img",
            "src": "/images/experiences/itinerary-photos/resort-kigali-1.webp",
            "alt": ""
          },
          {
            "type": "p",
            "text": "4 Recommended accommodation options among others:"
          },
          {
            "type": "p",
            "text": "Singita Kwitonda Lodge The location is easily the best of the luxury lodges in the area, the property has a border with the wall of Volcanoes National Park. The views of the large volcanoes are breathtaking, which greet you every morning as you awaken.”"
          },
          {
            "type": "p",
            "text": "One & Only Gorilla’s Nest Eye to eye with swaying eucalyptus trees, One & Only Gorilla’s Nest is one of the closest resorts to Volcanoes National Park – a historic rainforest home to a diverse tapestry of wildlife."
          },
          {
            "type": "p",
            "text": "Sabyinyo Silverback Lodge A community-inspired luxurious lodge, located in the foothills of the mist-shrouded Virunga Massif. Sabyinyo is a true spirit of conservation and rehabilitation, surrounded by bountiful organic gardens, upliftment projects in the neighborhood of the Volcanoes National Park. The Bishop’s House The colonial style architecture and furnishings of The Bishop’s House sets it apart from others and our nine luxuriously decorated rooms. TBH is a haven of tranquility, surrounded by flora and fauna along with the sights and sounds of nature."
          },
          {
            "type": "img",
            "src": "/images/experiences/itinerary-photos/hotel-kigali-2.webp",
            "alt": ""
          },
          {
            "type": "img",
            "src": "/images/experiences/itinerary-photos/camp-kigali.webp",
            "alt": ""
          }
        ]
      },
      {
        "day": "5",
        "title": "Golden monkey Trek & Rwanda's conservation story",
        "blocks": [
          {
            "type": "p",
            "text": "Early breakfast at the lodge. At 6:40 in the morning, you will set off on a golden monkey trekking experience, stopping by the park headquarters, a 10-minute drive away, for briefing and assigning a guide. After the golden monkey trek, you will return to the lodge for lunch."
          },
          {
            "type": "img",
            "src": "/images/experiences/itinerary-photos/rwanda-volcanoes-national-park-monkey-1.webp",
            "alt": ""
          },
          {
            "type": "img",
            "src": "/images/experiences/itinerary-photos/rwanda-volcanoes-national-park-monkey.webp",
            "alt": ""
          },
          {
            "type": "img",
            "src": "/images/experiences/itinerary-photos/monkey.webp",
            "alt": ""
          },
          {
            "type": "p",
            "text": "In the afternoon you will have an Optional visit the Research Center & Campus for a Conservation historical background and efforts by the famous Dian Fossey and the Volcanoes National Park safeguarding the endangered Mountain Gorillas"
          },
          {
            "type": "img",
            "src": "/images/experiences/itinerary-photos/rwanda-park.webp",
            "alt": ""
          },
          {
            "type": "img",
            "src": "/images/experiences/itinerary-photos/the-ellen-degeneres-campus.webp",
            "alt": ""
          }
        ]
      },
      {
        "day": "6",
        "title": "Gorilla Trekking experience",
        "blocks": [
          {
            "type": "p",
            "text": "You will have an early breakfast and set off afterwards for your gorilla trekking experience, stopping by the park headquarters, an approximate 10-minute drive away, for briefing and assigning to a gorilla group. After the gorilla trekking experience, you will return to the lodge for lunch. In the afternoon you have an option to enjoy a relaxing massage treatment at the Lodge or you may opt to community village walk, a rewarding experience that gives you a real taste of a typical Rwandan village life."
          },
          {
            "type": "img",
            "src": "/images/experiences/itinerary-photos/gorilla-trekking.webp",
            "alt": ""
          },
          {
            "type": "img",
            "src": "/images/experiences/itinerary-photos/gorillas.webp",
            "alt": ""
          },
          {
            "type": "p",
            "text": "Volcanoes National Park protects the steep slopes of this magnificent mountain range- home of the rare mountain gorilla – and the rich mosaic of montane ecosystems, which embrace evergreen and bamboo forest, open grassland, swamp and heath. The high point of the trek will be spending an hour with the remarkably peaceful gorillas despite their size and appearance, as they go about their daily life: feeding, playing, resting, grooming and raising their young."
          }
        ]
      },
      {
        "day": "7",
        "title": "Kigali city/Depart Rwanda",
        "blocks": [
          {
            "type": "p",
            "text": "After breakfast, you will check out and embark on a 3 hour drive to Kigali. Our driver guide will be at your disposal to offer a city tour for a possible Arts & Crafts souvenir shopping expedition in Kigali and local market visits, should your departure flight allow."
          },
          {
            "type": "img",
            "src": "/images/experiences/itinerary-photos/kigali-city.webp",
            "alt": ""
          },
          {
            "type": "p",
            "text": "Otherwise you will be transferred to the Airport for your departure flight and that will mark the end of your trip to Rwanda"
          },
          {
            "type": "p",
            "text": "Trekking Tips & Rules:"
          },
          {
            "type": "ul",
            "items": [
              "When tracking gorillas, wear sturdier clothing to protect against stinging nettles, and solid walking shoes. A lightweight waterproof jacket may come in handy in the moist mountains.",
              "You will also need a small backpack to carry water and snacks.",
              "Keep a minimum of 10 meters from the Gorillas – this is to protect them.",
              "Do NOT remove anything from the park e.g. flowers, fruit, porcupine quills, etc.",
              "Keep your voices down at all times.",
              "No Flash photography is allowed.",
              "Professional film makers require permission and need to purchase filming permits.",
              "Do NOT eat or drink when close to the gorillas – this is a disease risk.",
              "Do NOT touch the Gorillas – they are wild animals.",
              "The maximum time you can spend with the gorillas is ONE hour",
              "If you are feeling ill, or are carrying a contagious disease, please volunteer to stay behind. An alternative visit will be arranged for you,",
              "Do NOT spit in the park and go to the bathroom only as instructed by your guide.",
              "Do not leave anything in the park, if you pack it in, pack it out!",
              "Obey the local guide instructions at all times, for the safety of the Gorillas and visitors.",
              "Porters are available at a small fee to carry your daypack and help you up the steep slopes when gorilla tracking.",
              "The minimum age for Gorilla trekking is 15 years."
            ]
          }
        ]
      }
    ],
    "includes": [
      {
        "type": "ul",
        "items": [
          "Car hire (Luxury 4×4) with professional driver guides",
          "All transport & transfers",
          "All accommodation as per itinerary",
          "All meals as per program",
          "All mentioned activities & Park permits",
          "Water & Wifi on the vehicle throughout the trip",
          "Evacuation cover",
          "All government taxes"
        ]
      }
    ],
    "excludes": [
      {
        "type": "ul",
        "items": [
          "Gorilla Trekking permits at $1500 per person",
          "International air to/from Rwanda",
          "Gratuities to drivers, guides, lodge/ hotel staff",
          "Items of personal nature"
        ]
      }
    ],
    "related": [
      "kigalis-golf-experience-the-safari-the-city",
      "gorilla-trekking-golden-monkeys",
      "gorillas-in-the-mist",
      "rwandas-primates"
    ],
    "liveUrl": "https://luxehorizonsafrica.com/tours/7-day-rwanda-primates-adventure/"
  },
  {
    "slug": "7-day-rwandas-big-5-gorillas",
    "title": "7 Day Rwanda’s big 5 & gorillas",
    "cardText": "7-Day Rwandan Adventure: VIP Kigali Arrival, city exploration, Akagera safari, and Gorilla encounter in Volcanoes.",
    "cardImage": "/images/experiences/7-day-rwandas-big-5-gorillas/card.webp",
    "heroImage": "/images/experiences/7-day-rwandas-big-5-gorillas/card.webp",
    "days": "8",
    "destination": [
      "Rwanda"
    ],
    "gallery": [
      {
        "src": "/images/experiences/7-day-rwandas-big-5-gorillas/gallery-1.webp",
        "alt": "Kigali"
      },
      {
        "src": "/images/experiences/7-day-rwandas-big-5-gorillas/gallery-2.webp",
        "alt": "Lions"
      },
      {
        "src": "/images/experiences/7-day-rwandas-big-5-gorillas/gallery-3.webp",
        "alt": "Boat cruize Rwanda"
      },
      {
        "src": "/images/experiences/7-day-rwandas-big-5-gorillas/gallery-4.webp",
        "alt": "Kigali meals"
      }
    ],
    "overview": [
      {
        "type": "p",
        "text": "7 Day Rwanda’s big 5 & gorillas: VIP Arrival in Kigali, explore the city and Genocide Memorial, embark on a thrilling safari in Akagera National Park, and encounter the majestic Gorillas in Volcanoes National Park."
      }
    ],
    "itinerary": [
      {
        "day": "1",
        "title": "Arrive in Kigali",
        "blocks": [
          {
            "type": "p",
            "text": "On arrival at Kigali International Airport, you will be welcomed to a VIP lounge while we clear your luggage through immigration. You will thereafter meet a Luxe Horizons Africa representative for a short briefing and trip introduction and then transfer on an approx 15min drive to Kigali Marriott Hotel for check in. Dinner on own arrangement, though we are happy to recommend a nearby restaurant depending on your arrival time."
          },
          {
            "type": "p",
            "text": "Overnight at The Kigali Marriott Hotel (Bed & Breakfast)"
          },
          {
            "type": "img",
            "src": "/images/experiences/itinerary-photos/hotel-marriott-hotel.webp",
            "alt": ""
          },
          {
            "type": "img",
            "src": "/images/experiences/itinerary-photos/marriott-kigali.webp",
            "alt": ""
          },
          {
            "type": "p",
            "text": "Experience Rwanda’s capital from Kigali Marriott Hotel, conveniently located near the Nyarugenge financial district and the Kigali Convention Center. Set in the vibrant heart of Kigali, our impeccable luxury hotel provides spacious, modern accommodations with deluxe amenities and premium services."
          }
        ]
      },
      {
        "day": "2",
        "title": "Akagera National Park - Game Drives Experience",
        "blocks": [
          {
            "type": "p",
            "text": "The next morning you will embark on an approx 3hrs scenic drive to Akagera National Park where you will spend your next 2 nights with animal sightings in the wild at Magashi Classic Camp or Ruzizi Tented Lodge"
          },
          {
            "type": "img",
            "src": "/images/experiences/itinerary-photos/boat-cruize.webp",
            "alt": ""
          },
          {
            "type": "img",
            "src": "/images/experiences/itinerary-photos/marriott-hotel-kigali-city.webp",
            "alt": ""
          },
          {
            "type": "p",
            "text": "With superb views over Lake Rwanyakazinga set in the idyllic sanctuary of Akagera National Park, Magashi Camp is premium and a one-of-a-kind setting in Rwanda located in its own private concession area. No other camp can be found in this vast expanse of beautiful wilderness teaming with hippo, crocodile, a plethora of birds, etc."
          },
          {
            "type": "img",
            "src": "/images/experiences/itinerary-photos/camp-site.webp",
            "alt": ""
          },
          {
            "type": "img",
            "src": "/images/experiences/itinerary-photos/campsite-rwanda.webp",
            "alt": ""
          },
          {
            "type": "p",
            "text": "Located on the banks of Lake Ihema, Ruzizi Tented Lodge is a luxury eco-lodge approximately 6 km from the park reception. Its nine tents are set back from Ihema’s serene shores and hidden among swaying palms and fruiting fig trees. Outstanding wooden walkways lead to a stunning deck that hangs over the lake and it contains a central fire pit and is the perfect spot for a morning cup of coffee or to capture a perfect sunset view."
          }
        ]
      },
      {
        "day": "3",
        "title": "Akagera more animal viewinf - Game Drives Experience",
        "blocks": [
          {
            "type": "p",
            "text": "Have an early breakfast, after which you embark on a morning game drive in Akagera National Park and other days’ activities by the Camp. For the two full days, you will enjoy viewing many animals such as elephant, buffalo, giraffe, zebra and antelopes that frequent the open plains within the park with chances to view the big cats of the Park."
          },
          {
            "type": "img",
            "src": "/images/experiences/itinerary-photos/wildlife.webp",
            "alt": ""
          },
          {
            "type": "img",
            "src": "/images/experiences/itinerary-photos/lions.webp",
            "alt": ""
          },
          {
            "type": "img",
            "src": "/images/experiences/itinerary-photos/leopard.webp",
            "alt": ""
          },
          {
            "type": "img",
            "src": "/images/experiences/itinerary-photos/elephant.webp",
            "alt": ""
          }
        ]
      },
      {
        "day": "4",
        "title": "The Vibrant Hilly city of beauty & Hope - Kigali",
        "blocks": [
          {
            "type": "p",
            "text": "You will depart the Akagera Park after significant drives through the savanna wetland in search of animals and would be in definite need of some rest and refreshment within Kigali before embarking on the next volcanoes adventure. Experience a Kigali nightlife by visiting some of the most vibrant restaurants and bars providing the most panoramic city views and vibes. Some sightings might make you hardly believe you are in an African Country. You will stay overnight at The Kigali Marriott Hotel."
          },
          {
            "type": "img",
            "src": "/images/experiences/itinerary-photos/kigali-city-1.webp",
            "alt": ""
          },
          {
            "type": "img",
            "src": "/images/experiences/itinerary-photos/kigali-city-trip.webp",
            "alt": ""
          }
        ]
      },
      {
        "day": "5",
        "title": "Dian Fossey's conservation story & Volcanoes National Park",
        "blocks": [
          {
            "type": "p",
            "text": "After breakfast, you will check out and embark on a 3hr scenic drive to the Volcanoes. Stop by the Ellen degeneres Campus and Dian Fossey Research Center, for a basic understanding of Rwanda’s Conservation efforts and safeguarded Mountain Gorillas from Dian Fossey’s Conservation Legacy. The Campus has a 360 theater that provides a glimpse on what a Gorilla day looks like."
          },
          {
            "type": "img",
            "src": "/images/experiences/itinerary-photos/the-ellen-degeneres-campus.webp",
            "alt": ""
          },
          {
            "type": "img",
            "src": "/images/experiences/itinerary-photos/volcanoes-national-park-1.webp",
            "alt": ""
          },
          {
            "type": "p",
            "text": "You will then carry on to your Hotel by the volcanoes, which will be your home for the next 2nights."
          },
          {
            "type": "img",
            "src": "/images/experiences/itinerary-photos/resort-kigali-1.webp",
            "alt": ""
          },
          {
            "type": "img",
            "src": "/images/experiences/itinerary-photos/hotel-kigali-1.webp",
            "alt": ""
          },
          {
            "type": "p",
            "text": "4 Recommended accommodation options among others:"
          },
          {
            "type": "p",
            "text": "Singita Kwitonda Lodge The location is easily the best of the luxury lodges in the area, the property has a border with the wall of Volcanoes National Park. The views of the large volcanoes are breathtaking, which greet you every morning as you awaken.”"
          },
          {
            "type": "p",
            "text": "One & Only Gorilla’s Nest Eye to eye with swaying eucalyptus trees, One & Only Gorilla’s Nest is one of the closest resorts to Volcanoes National Park – a historic rainforest home to a diverse tapestry of wildlife."
          },
          {
            "type": "p",
            "text": "Sabyinyo Silverback Lodge A community-inspired luxurious lodge, located in the foothills of the mist-shrouded Virunga Massif. Sabyinyo is a true spirit of conservation and rehabilitation, surrounded by bountiful organic gardens, upliftment projects in the neighborhood of the Volcanoes NatiPark."
          },
          {
            "type": "p",
            "text": "The Bishop’s House The colonial style architecture and furnishings of The Bishop’s House sets it apart from others and our nine luxuriously decorated rooms. TBH is a haven of tranquility, surrounded by flora and fauna along with the sights and sounds of nature."
          },
          {
            "type": "img",
            "src": "/images/experiences/itinerary-photos/hotel-kigali-2.webp",
            "alt": ""
          },
          {
            "type": "img",
            "src": "/images/experiences/itinerary-photos/camp-kigali.webp",
            "alt": ""
          }
        ]
      },
      {
        "day": "6",
        "title": "Gorilla Trekking Experience",
        "blocks": [
          {
            "type": "p",
            "text": "You will have an early breakfast and set off afterwards for your gorilla trekking experience, stopping by the park headquarters, an approximate 10-minute drive away, for briefing and assigning to a gorilla group. After the gorilla trekking experience, you will return to the lodge for lunch. In the afternoon you have an option to enjoy a relaxing massage treatment at the Lodge or you may opt to community village walk, a rewarding experience that gives you a real taste of a typical Rwandan village life."
          },
          {
            "type": "img",
            "src": "/images/experiences/itinerary-photos/gorilla-trekking.webp",
            "alt": ""
          },
          {
            "type": "img",
            "src": "/images/experiences/itinerary-photos/gorillas.webp",
            "alt": ""
          },
          {
            "type": "p",
            "text": "Volcanoes National Park protects the steep slopes of this magnificent mountain range – home of the rare mountain gorilla – and the rich mosaic of montane ecosystems, which embrace evergreen and bamboo forest, open grassland, swamp and heath. The high point of the trek will be spending an hour with the remarkably peaceful gorillas despite their size and appearance, as they go about their daily life: feeding, playing, resting, grooming and raising their young."
          }
        ]
      },
      {
        "day": "7",
        "title": "Kigali city/ Depart Rwanda",
        "blocks": [
          {
            "type": "p",
            "text": "After breakfast, you will check out and embark on a 3 hour drive to Kigali. Our driver guide will be at your disposal to offer a city tour for a possible Arts & Crafts souvenir shopping expedition in Kigali and local market visits, should your departure flight allow."
          },
          {
            "type": "img",
            "src": "/images/experiences/itinerary-photos/kigali-city.webp",
            "alt": ""
          },
          {
            "type": "p",
            "text": "Otherwise you will be transferred to the Airport for your departure flight and that will mark the end of your trip to Rwanda."
          },
          {
            "type": "p",
            "text": "The total cost of the tour starts from USD 5,530 per person sharing depending on the property of your choice"
          },
          {
            "type": "p",
            "text": "Gorilla Trekking Tips & Rules:"
          },
          {
            "type": "ul",
            "items": [
              "When tracking gorillas, wear sturdier clothing to protect against stinging nettles, and solid walking shoes. A lightweight waterproof jacket may come in handy in the moist mountains. You will also need a small backpack to carry water and snacks.",
              "Keep a minimum of 10 meters from the Gorillas – this is to protect them.",
              "Do NOT remove anything from the park e.g. flowers, fruit, porcupine quills, etc.",
              "Keep your voices down at all times.",
              "No Flash photography is allowed.",
              "Professional film makers require permission and need to purchase filming permits.",
              "Do NOT eat or drink when close to the gorillas – this is a disease risk.",
              "Do NOT touch the Gorillas – they are wild animals.",
              "The maximum time you can spend with the gorillas is ONE hour",
              "If you are feeling ill, or are carrying a contagious disease, please volunteer to stay behind. An alternative visit will be arranged for you,",
              "Do NOT spit in the park and go to the bathroom only as instructed by your guide.",
              "Do not leave anything in the park, if you pack it in, pack it out!",
              "Obey the local guide instructions at all times, for the safety of the Gorillas and visitors.",
              "Porters are available at a small fee to carry your daypack and help you up the steep slopes when gorilla tracking.",
              "The minimum age for Gorilla trekking is 15 years."
            ]
          }
        ]
      }
    ],
    "includes": [
      {
        "type": "ul",
        "items": [
          "Car hire (Luxury 4×4) with professional driver guides",
          "All transport & transfers",
          "All accommodation as per itinerary",
          "All meals as per program",
          "All mentioned activities and Park entry fees",
          "Water & Wifi on the vehicle throughout the trip",
          "Evacuation cover",
          "All government taxes"
        ]
      }
    ],
    "excludes": [
      {
        "type": "ul",
        "items": [
          "Gorilla Trekking permits at $1500 per person",
          "International air to/from Rwanda",
          "Gratuities to drivers, guides, lodge/ hotel staff",
          "Items of personal nature"
        ]
      }
    ],
    "related": [
      "kigalis-golf-experience-the-safari-the-city",
      "gorilla-trekking-golden-monkeys",
      "gorillas-in-the-mist",
      "rwandas-primates"
    ],
    "liveUrl": "https://luxehorizonsafrica.com/tours/7-day-rwandas-big-5-gorillas/"
  },
  {
    "slug": "11-day-rwanda-holiday-experience",
    "title": "11 Day Rwanda Holiday Experience",
    "cardText": "City tour, Genocide Memorial, thrilling Akagera safaris, Nyungwe canopy walk & chimp trek.",
    "cardImage": "/images/experiences/11-day-rwanda-holiday-experience/card.webp",
    "heroImage": "/images/experiences/11-day-rwanda-holiday-experience/card.webp",
    "days": "11",
    "destination": [
      "Rwanda"
    ],
    "gallery": [
      {
        "src": "/images/experiences/11-day-rwanda-holiday-experience/gallery-1.webp",
        "alt": "Gorillas-peaceful"
      },
      {
        "src": "/images/experiences/11-day-rwanda-holiday-experience/gallery-2.webp",
        "alt": "Campsite Rwanda"
      },
      {
        "src": "/images/experiences/11-day-rwanda-holiday-experience/gallery-3.webp",
        "alt": "Lions"
      },
      {
        "src": "/images/experiences/11-day-rwanda-holiday-experience/gallery-4.webp",
        "alt": "Marriott hotel Kigali city"
      }
    ],
    "overview": [
      {
        "type": "p",
        "text": "11-Day Rwandan Expedition: Begin with VIP Airport Welcome and two nights in Kigali. Explore the city and Genocide Memorial, then embark on thrilling safaris in Akagera National Park. Discover Nyungwe with a canopy walk, chimpanzee trek, and community experience. Relax at Lake Kivu and venture to the Volcanoes for Golden Monkey and Gorilla Treks. Your unforgettable journey ends in Kigali. Explore Rwanda’s wonders with us"
      }
    ],
    "itinerary": [
      {
        "day": "1",
        "title": "Arrive in Kigali",
        "blocks": [
          {
            "type": "p",
            "text": "On arrival at Kigali International Airport, you will be welcomed from the tarmac by our Meet & Greet Airport Agent and be assisted with the immigration process, your luggage and escorted through the exit gate where you will be met by your dedicated guide for a short introductory briefing, learn a few key words in our local language as you embark on a short 15min drive to the Kigali Marriott. Dinner will be on your own arrangement, though we are happy to recommend a nearby restaurant depending on your arrival time."
          },
          {
            "type": "p",
            "text": "Overnight for two first nights at Kigali Marriott Hotel on Bed & Breakfast basis"
          },
          {
            "type": "img",
            "src": "/images/experiences/itinerary-photos/hotel-marriott-hotel.webp",
            "alt": ""
          },
          {
            "type": "img",
            "src": "/images/experiences/itinerary-photos/marriott-kigali.webp",
            "alt": ""
          },
          {
            "type": "p",
            "text": "Experience Rwanda’s capital from Kigali Marriott Hotel, conveniently located near the Nyarugenge financial district and the Kigali City Hall. This impeccable luxury hotel provides spacious, modern accommodations with deluxe amenities and premium services."
          }
        ]
      },
      {
        "day": "2",
        "title": "Explore the vibrant fast growing Kigali city",
        "blocks": [
          {
            "type": "p",
            "text": "After your breakfast, you will first visit the Kigali Genocide Memorial as a Historical component of your trip and then carry on Nyamirambo vibrant suburb visit as well as an exploration to local Kigali city markets with varieties of Arts & Crafts."
          },
          {
            "type": "img",
            "src": "/images/experiences/itinerary-photos/kigali.webp",
            "alt": ""
          },
          {
            "type": "img",
            "src": "/images/experiences/itinerary-photos/rwanda-city.webp",
            "alt": ""
          },
          {
            "type": "p",
            "text": "Kigali is one of the friendliest, greenest, cleanest and safest of Africa’s cities attracting numerous visitors and investors to the capital. The rapidly growing City is becoming the biggest MICE and sports hub with signature Conference and sports venues with a track record as the fastest growing in Africa. A culinary experience and a nightlife in Kigali will never disappoint with vibrant and a wide range of various restaurants, bars and nightclubs."
          }
        ]
      },
      {
        "day": "3",
        "title": "Akagera National Park - Game Drives Experience",
        "blocks": [
          {
            "type": "p",
            "text": "The next morning you will embark on an approx 3hrs scenic drive to Akagera National Park where you will spend your next 2 nights with animal sightings in the wild at Magashi Classic Camp or Ruzizi Tented Lodge"
          },
          {
            "type": "img",
            "src": "/images/experiences/itinerary-photos/boat-cruize.webp",
            "alt": ""
          },
          {
            "type": "img",
            "src": "/images/experiences/itinerary-photos/marriott-hotel-kigali-city.webp",
            "alt": ""
          },
          {
            "type": "p",
            "text": "With superb views over Lake Rwanyakazinga set in the idyllic sanctuary of Akagera National Park, Magashi Camp is premium and a one-of-a-kind setting in Rwanda located in its own private concession area. No other camp can be found in this vast expanse of beautiful wilderness teaming with hippo, crocodile, a plethora of birds, etc."
          },
          {
            "type": "img",
            "src": "/images/experiences/itinerary-photos/camp-site.webp",
            "alt": ""
          },
          {
            "type": "img",
            "src": "/images/experiences/itinerary-photos/campsite-rwanda.webp",
            "alt": ""
          },
          {
            "type": "p",
            "text": "Located on the banks of Lake Ihema, Ruzizi Tented Lodge is a luxury eco-lodge approximately 6 km from the park reception. Its nine tents are set back from Ihema’s serene shores and hidden among swaying palms and fruiting fig trees. Outstanding wooden walkways lead to a stunning deck that hangs over the lake and it contains a central fire pit and is the perfect spot for a morning cup of coffee or to capture a perfect sunset view."
          }
        ]
      },
      {
        "day": "4",
        "title": "Akagera more animal viewing - Game Drive Experience",
        "blocks": [
          {
            "type": "p",
            "text": "Have an early breakfast, after which you embark on a morning game drive in Akagera National Park and other days’ activities by the Camp. For the two full days, you will enjoy viewing many animals such as elephant, buffalo, giraffe, zebra and antelopes that frequent the open plains within the park with chances to view the big cats of the Park."
          },
          {
            "type": "img",
            "src": "/images/experiences/itinerary-photos/elephant.webp",
            "alt": ""
          },
          {
            "type": "img",
            "src": "/images/experiences/itinerary-photos/leopard.webp",
            "alt": ""
          },
          {
            "type": "img",
            "src": "/images/experiences/itinerary-photos/lions.webp",
            "alt": ""
          },
          {
            "type": "img",
            "src": "/images/experiences/itinerary-photos/wildlife.webp",
            "alt": ""
          }
        ]
      },
      {
        "day": "5",
        "title": "Nyungwe National Park - Canopy walkway",
        "blocks": [
          {
            "type": "p",
            "text": "Next morning, you will have check out and be transferred on a Helicopter (There is an option of 40min morning scheduled commercial Rwandair local flight or an approx 7hrs drive both from Kigali) to Nyungwe national park for afternoon Canopy walk thereafter check in at One & Only Nyungwe House, your home for the next 2 nights."
          },
          {
            "type": "img",
            "src": "/images/experiences/itinerary-photos/air-transportation.webp",
            "alt": ""
          },
          {
            "type": "img",
            "src": "/images/experiences/itinerary-photos/forest-cover.webp",
            "alt": ""
          },
          {
            "type": "p",
            "text": "The 70 meters above the Forest Canopy Walkway consists of three bridges and three towers and one is able to experience unparalleled biodiversity, orchids, monkeys, birds and more from high above the Forest."
          },
          {
            "type": "p",
            "text": "One & Only Nyungwe House: Alongside ancient rainforest, within the lush green expanse of a working tea plantation, One & Only Nyungwe House offers an exclusive window to Africa’s fascinating wildlife and culture. Indigenous open-air spa treatments, awe-inspiring, once-in-a-lifetime moments are sure to amaze you at every turn."
          },
          {
            "type": "p",
            "text": "Alternative accommodation by the Nyungwe Forest can be Kivu Marina Bay by Mantis Collection, by the Lake Kivu Shores. At 5 minutes from the Kamembe Airport, Kivu Marina Bay offers extraordinary Lake views with various water and sports activities from the property)"
          },
          {
            "type": "img",
            "src": "/images/experiences/itinerary-photos/kigali-meals.webp",
            "alt": ""
          },
          {
            "type": "img",
            "src": "/images/experiences/itinerary-photos/hotel-kigali-city-1.webp",
            "alt": ""
          },
          {
            "type": "img",
            "src": "/images/experiences/itinerary-photos/hotel-kigali-city.webp",
            "alt": ""
          }
        ]
      },
      {
        "day": "6",
        "title": "Chimpanzee Trekking/Community experience",
        "blocks": [
          {
            "type": "p",
            "text": "5:00am you will drive to the starting point & thereafter proceed for Chimpanzee trekking. If you are interested in botany, the flora in Nyungwe comes as an added bonus; you will also have a chance to view the other habitants of the forest such as multiple bird species, butterflies, etc."
          },
          {
            "type": "img",
            "src": "/images/experiences/itinerary-photos/volcanoes-national-park-monkey.webp",
            "alt": ""
          },
          {
            "type": "img",
            "src": "/images/experiences/itinerary-photos/tea-plantation-01.webp",
            "alt": ""
          },
          {
            "type": "p",
            "text": "There is approximately 500 Chimpanzee individuals in the entire Park and are grouped in now three troops by forest locations, Gisovu, Kuwinka & Cyamudongo which is a small patch of the forest located in the eastern part of the Park. While visiting the Park, one has high chances of viewing a variety of other attractions such as various orchids and other plant species, multiple bird species as well as other primates such as colobus monkeys, vervet monkeys among other monkeys species."
          },
          {
            "type": "p",
            "text": "After trekking you will return to the Hotel for a late breakfast, thereafter you will enjoy either an afternoon Tea Planting – Farm to Cup Experience with local farmers doing the tea picking with an aim tio fill up the 4 Kilo basket of Tea leaves(harvest) or else you opt to go for the Cultural Experience with the local community of the Fisherwomen of Gihaya Island."
          },
          {
            "type": "img",
            "src": "/images/experiences/itinerary-photos/tea-planation.webp",
            "alt": ""
          },
          {
            "type": "img",
            "src": "/images/experiences/itinerary-photos/boat-ride-01.webp",
            "alt": ""
          },
          {
            "type": "p",
            "text": "The Experience starts when you embark on a local boat towards their special Island. On arrival, you are welcomed by special traditional performance with unique songs and a rythm of their traditional music instruments and dancing style. Surely, you won’t resist not joining! By the same Island, you will have a chance to view some of the small farms on the island as well as some remains from the German and Belgian colonial settlements."
          }
        ]
      },
      {
        "day": "7",
        "title": "Scenic transfer to the Cleo Lake Kivu",
        "blocks": [
          {
            "type": "p",
            "text": "After breakfast you will checkout then embark on an approx 2.5 hour scenic drive along the Kivu shores to Cleo Kivu Hotel where you will spend a night and two full days enjoying water sports activities and leisure by the Lake."
          },
          {
            "type": "img",
            "src": "/images/experiences/itinerary-photos/roadtrip-rwanda.webp",
            "alt": ""
          },
          {
            "type": "img",
            "src": "/images/experiences/itinerary-photos/kivu-lake-rwanda.webp",
            "alt": ""
          },
          {
            "type": "img",
            "src": "/images/experiences/itinerary-photos/boat-cruize-rwanda.webp",
            "alt": ""
          },
          {
            "type": "p",
            "text": "Multiple options available offered by the property such as, boat ride, Kayaking, Jet skiing, swimming or evwitnessing the famous Rwanda swiming cows, etc."
          }
        ]
      },
      {
        "day": "8",
        "title": "Picturesque transfer to Volcanoes National Park",
        "blocks": [
          {
            "type": "p",
            "text": "After a late breakfast by the Lake, you will embark on a transfer to the Volcanoes (could be by the first 2.5hrs boat to first stop in Rubavu and then do one other hour on road to the Volcanoes or just an approx 4hr road transfer to the volcanoes still). On arrival, you will check in at your Hotel by the Volcanoes for the next 3 nights."
          },
          {
            "type": "img",
            "src": "/images/experiences/itinerary-photos/kigali-road-trip.webp",
            "alt": ""
          },
          {
            "type": "img",
            "src": "/images/experiences/itinerary-photos/resort-kigali-1.webp",
            "alt": ""
          },
          {
            "type": "p",
            "text": "4 Recommended accommodation options among others:"
          },
          {
            "type": "p",
            "text": "Singita Kwitonda Lodge The location is easily the best of the luxury lodges in the area, the property has a border with the wall of Volcanoes National Park. The views of the large volcanoes are breathtaking, which greet you every morning as you awaken.”"
          },
          {
            "type": "p",
            "text": "One & Only Gorilla’s Nest Eye to eye with swaying eucalyptus trees, One & Only Gorilla’s Nest is one of the closest resorts to Volcanoes National Park – a historic rainforest home to a diverse tapestry of wildlife."
          },
          {
            "type": "p",
            "text": "Sabyinyo Silverback Lodge A community-inspired luxurious lodge, located in the foothills of the mist-shrouded Virunga Massif. Sabyinyo is a true spirit of conservation and rehabilitation, surrounded by bountiful organic gardens, upliftment projects in the neighborhood of the Volcanoes National Park."
          },
          {
            "type": "p",
            "text": "The Bishop’s House The colonial style architecture and furnishings of The Bishop’s House sets it apart from others and our nine luxuriously decorated rooms. TBH is a haven of tranquility, surrounded by flora and fauna along with the sights and sounds of nature."
          },
          {
            "type": "img",
            "src": "/images/experiences/itinerary-photos/hotel-kigali-2.webp",
            "alt": ""
          },
          {
            "type": "img",
            "src": "/images/experiences/itinerary-photos/camp-kigali.webp",
            "alt": ""
          }
        ]
      },
      {
        "day": "9",
        "title": "Golden monkey trek & Rwanda's conservation story",
        "blocks": [
          {
            "type": "p",
            "text": "Early breakfast at the lodge. At 6:40 in the morning, you will set off on a golden monkey trekking experience, stopping by the park headquarters, a 10-minute drive away, for briefing and assigning a guide. After the golden monkey trek, you will return to the lodge for lunch."
          },
          {
            "type": "img",
            "src": "/images/experiences/itinerary-photos/monkey.webp",
            "alt": ""
          },
          {
            "type": "img",
            "src": "/images/experiences/itinerary-photos/rwanda-volcanoes-national-park-monkey.webp",
            "alt": ""
          },
          {
            "type": "img",
            "src": "/images/experiences/itinerary-photos/rwanda-volcanoes-national-park-monkey-1.webp",
            "alt": ""
          },
          {
            "type": "p",
            "text": "In the afternoon you will have an Optional visit the Research Center & Campus for a Conservation historical background and efforts by the famous Dian Fossey and the Volcanoes National Park safeguarding the endangered Mountain Gorillas."
          },
          {
            "type": "img",
            "src": "/images/experiences/itinerary-photos/rwanda-park.webp",
            "alt": ""
          },
          {
            "type": "img",
            "src": "/images/experiences/itinerary-photos/the-ellen-degeneres-campus.webp",
            "alt": ""
          },
          {
            "type": "p",
            "text": "There is an option of leaving out Golden Monkeys and then do Two Consecutive Gorilla Trekking"
          }
        ]
      },
      {
        "day": "10",
        "title": "Meet the Legends",
        "blocks": [
          {
            "type": "p",
            "text": "You will have not one but two adventurous treks to meet the Mountain Gorillas; each family has a lot to offer, they will be carrying on with their daily life as you enjoy the visit."
          },
          {
            "type": "p",
            "text": "You will have early breakfast on both days after which you will depart for the park headquarters for briefing and being assigned into Gorilla groups complete with rangers. You will then trek through the Volcanoes National Park for a face to face encounter with the majestic Mountain Gorillas. The high point of the trek will be spending an hour with the remarkably peaceful gorillas despite their size and appearance, as they go about their daily life: feeding, playing, resting, grooming and raising their young."
          },
          {
            "type": "img",
            "src": "/images/experiences/itinerary-photos/gorillas-peaceful.webp",
            "alt": ""
          },
          {
            "type": "img",
            "src": "/images/experiences/itinerary-photos/silverback.webp",
            "alt": ""
          }
        ]
      },
      {
        "day": "11",
        "title": "Kigali city/ Depart Rwanda",
        "blocks": [
          {
            "type": "p",
            "text": "After breakfast, you will check out of the hotel and transfer back to Kigali on a 3hr scenic drive. On arrival in Kigali you have the option to go on a souvenir shopping, see some local markets, visit crafts & Art Galleries among other things in Kigali, depending on your departure flight."
          },
          {
            "type": "img",
            "src": "/images/experiences/itinerary-photos/kigali-city-1.webp",
            "alt": ""
          },
          {
            "type": "img",
            "src": "/images/experiences/itinerary-photos/kigali-city-trip.webp",
            "alt": ""
          },
          {
            "type": "p",
            "text": "Otherwise you will be transferred to the Airport for your departure flight and that will mark the end of your trip to Rwanda."
          },
          {
            "type": "p",
            "text": "The total cost of the tour starts from USD 10,447 per person sharing depending on the property of your choice"
          },
          {
            "type": "p",
            "text": "Gorilla Trekking Tips & Rules:"
          },
          {
            "type": "ul",
            "items": [
              "When tracking gorillas, wear sturdier clothing to protect against stinging nettles, and solid walking shoes. A lightweight waterproof jacket may come in handy in the moist mountains. You will also need a small backpack to carry water and snacks.",
              "Keep a minimum of 10 meters from the Gorillas – this is to protect them.",
              "Do NOT remove anything from the park e.g. flowers, fruit, porcupine quills, etc.",
              "Keep your voices down at all times.",
              "No Flash photography is allowed.",
              "Professional film makers require permission and need to purchase filming permits.",
              "Do NOT eat or drink when close to the gorillas – this is a disease risk.",
              "Do NOT touch the Gorillas – they are wild animals.",
              "The maximum time you can spend with the gorillas is ONE hour",
              "If you are feeling ill, or are carrying a contagious disease, please volunteer to stay behind. An alternative visit will be arranged for you,",
              "Do NOT spit in the park and go to the bathroom only as instructed by your guide.",
              "Do not leave anything in the park, if you pack it in, pack it out!",
              "Obey the local guide instructions at all times, for the safety of the Gorillas and visitors.",
              "Porters are available at a small fee to carry your daypack and help you up the steep slopes when gorilla tracking.",
              "The minimum age for Gorilla trekking is 15 years."
            ]
          }
        ]
      }
    ],
    "includes": [
      {
        "type": "ul",
        "items": [
          "Car hire (Luxury 4×4) with professional driver guides",
          "All transport & transfers",
          "All accommodation as per itinerary",
          "All meals as per program",
          "All mentioned activities and Park entry fees",
          "Water & Wifi on the vehicle throughout the trip",
          "Evacuation cover",
          "All government taxes"
        ]
      }
    ],
    "excludes": [
      {
        "type": "ul",
        "items": [
          "Gorilla Trekking permits at $1500 per person per trek",
          "International air to/from Rwanda",
          "Gratuities to drivers, guides, lodge/ hotel staff",
          "Items of personal nature"
        ]
      }
    ],
    "related": [
      "kigalis-golf-experience-the-safari-the-city",
      "gorilla-trekking-golden-monkeys",
      "gorillas-in-the-mist",
      "rwandas-primates"
    ],
    "liveUrl": "https://luxehorizonsafrica.com/tours/11-day-rwanda-holiday-experience/"
  },
  {
    "slug": "kigalis-golf-experience-the-safari-the-city",
    "title": "Kigali’s Golf Experience, The Safari & The City",
    "cardText": "Explore the city and Genocide Memorial, then embark on thrilling safaris in Akagera National Park for a Game Drive Experience. Play Gold At The Kigali 18 Hole Golf Course and enjoy the land of a thousand hills.",
    "cardImage": "/images/experiences/kigalis-golf-experience-the-safari-the-city/card.webp",
    "heroImage": "/images/experiences/kigalis-golf-experience-the-safari-the-city/card.webp",
    "days": "5",
    "destination": [],
    "gallery": [
      {
        "src": "/images/experiences/kigalis-golf-experience-the-safari-the-city/gallery-1.webp",
        "alt": "golf-course_rwanda"
      },
      {
        "src": "/images/experiences/kigalis-golf-experience-the-safari-the-city/gallery-2.webp",
        "alt": "player at golf course"
      },
      {
        "src": "/images/experiences/kigalis-golf-experience-the-safari-the-city/gallery-3.webp",
        "alt": "tree climbing lions"
      },
      {
        "src": "/images/experiences/kigalis-golf-experience-the-safari-the-city/gallery-4.webp",
        "alt": "rhino"
      }
    ],
    "overview": [
      {
        "type": "p",
        "text": "5 Day Rwanda’s Golf Experience, The Safari & The City: Begin with VIP Airport Welcome and two nights in Kigali. Explore the city and Genocide Memorial, then embark on thrilling safari in Akagera National Park for a Game Drive Experience. Play Gold At The Kigali 18 Hole Golf Course and enjoy the land of a thousand hills."
      },
      {
        "type": "p",
        "text": "Note: The Group Leader is on FOC (only one pax) Optional arrangement of the Gorilla trip extension"
      }
    ],
    "itinerary": [
      {
        "day": "1",
        "title": "Arrive In Kigali (Please advise your flight details)",
        "blocks": [
          {
            "type": "p",
            "text": "On arrival at Kigali International Airport, you will be welcomed upon exit where you will be met by your dedicated guide for a short introductory briefing, learn a few key words in our local language as you embark on a short 20min drive to the Kigali Marriott Hotel."
          },
          {
            "type": "img",
            "src": "/images/experiences/itinerary-photos/hotel-marriott-hotel.webp",
            "alt": ""
          },
          {
            "type": "img",
            "src": "/images/experiences/itinerary-photos/marriott-kigali.webp",
            "alt": ""
          },
          {
            "type": "p",
            "text": "Experience Rwanda’s capital from Kigali Marriott Hotel, conveniently located near the Nyarugenge financial district and the Kigali Convention Center. Set in the vibrant heart of Kigali, our impeccable luxury hotel provides spacious, modern accommodations with deluxe amenities and premium services."
          },
          {
            "type": "img",
            "src": "/images/experiences/itinerary-photos/kigali-city-rwanda.webp",
            "alt": "kigali city rwanda"
          },
          {
            "type": "img",
            "src": "/images/experiences/itinerary-photos/kigali-genocide-memorial.webp",
            "alt": "Kigali-Genocide-Memorial"
          },
          {
            "type": "p",
            "text": "After your lunch at the Hotel, your afternoon you will first visit the Kigali Genocide Memorial as a Historical component of your trip and witness the resilience and rebirth of Rwanda nation. With about 1.3million people on a surface of 730 km square, Kigali City is small but yet one of the friendliest, greenest, cleanest and safest of Africa’s cities attracting numerous visitors and investors to the capital. The rapidly growing City is becoming the biggest MICE and sports hub with signature Conference and sports venues with a track record as the fastest growing in Africa. A culinary experience and a nightlife in Kigali will never disappoint with vibrant and a wide range of various restaurants with India specialties, among others."
          }
        ]
      },
      {
        "day": "2",
        "title": "Day Trip To Akagera National Park - Game Drive Experience",
        "blocks": [
          {
            "type": "p",
            "text": "The next morning you will embark on an approx 2.5hrs scenic drive to Akagera National Park where you will spend your full day on game drives with animal sightings in the wild. You will stop-over for Packed Picnic Bush Lunch in the middle of the Park (please make pre-orders a night before) & carry on with the game drive."
          },
          {
            "type": "img",
            "src": "/images/experiences/itinerary-photos/wild-life-lion-climbing.webp",
            "alt": ""
          },
          {
            "type": "img",
            "src": "/images/experiences/itinerary-photos/rhino.webp",
            "alt": ""
          },
          {
            "type": "img",
            "src": "/images/experiences/itinerary-photos/giraffe.webp",
            "alt": ""
          },
          {
            "type": "img",
            "src": "/images/experiences/itinerary-photos/elephant.webp",
            "alt": ""
          },
          {
            "type": "img",
            "src": "/images/experiences/itinerary-photos/leopard.webp",
            "alt": ""
          }
        ]
      },
      {
        "day": "3",
        "title": "Play Gold At The Kigali 18 Hole Golf Course",
        "blocks": [
          {
            "type": "p",
            "text": "After your breakfast, you will head to the Golf Course where you will play the championship among yourselves and other Kigali Golfers."
          },
          {
            "type": "img",
            "src": "/images/experiences/itinerary-photos/golf-course-rwanda.webp",
            "alt": ""
          },
          {
            "type": "img",
            "src": "/images/experiences/itinerary-photos/rwandas-golf-course.webp",
            "alt": ""
          },
          {
            "type": "p",
            "text": "The most precious gem of Africa, the “Land of Thousand Hills” gave birth to the new challenging and ecologically responsible Kigali Golf Resort and Villas. This design masterpiece is an 18 hole golf course located in the vibrant center of the capital city of Rwanda. And a Golf Club that will incorporate seven Food and Beverage outlets."
          },
          {
            "type": "p",
            "text": "The player truly grasps the meaning of “the land of thousand hills” on the magnificent Kigali Golf Resort & Villas course."
          },
          {
            "type": "p",
            "text": "The 6595m long 18 hole course can be likened to an amphitheater with an elegant panoramic view of rolling hills. The beauty of the course lies in the diverse flora and fauna. The omnipresence of the wildlife transforms the golf into the best nature getaway experience so close to the vibrant city center."
          },
          {
            "type": "img",
            "src": "/images/experiences/itinerary-photos/golf-club.webp",
            "alt": ""
          },
          {
            "type": "img",
            "src": "/images/experiences/itinerary-photos/golf-in-rwanda.webp",
            "alt": ""
          },
          {
            "type": "p",
            "text": "Accessible for the amateur golfer, the course has the superior advantage of challenging even the best golfers amongst us. From the large greens to the strategically placed fairway traps, every shot has its own specific characteristic. The golf adventure is enhanced by the numerous risk-reward shots that allow for a safe strategy and a more “optimistic” style of play"
          }
        ]
      },
      {
        "day": "4",
        "title": "Another Day At The Golf Course",
        "blocks": [
          {
            "type": "p",
            "text": "Next morning after your breakfast at the Hotel, you head back to the Golf Course and complete the game before an evening Clubhouse connection and cocktail with some renowned Rwanda golfers and more."
          },
          {
            "type": "img",
            "src": "/images/experiences/itinerary-photos/player-at-golf-course.webp",
            "alt": ""
          },
          {
            "type": "img",
            "src": "/images/experiences/itinerary-photos/golf-course-rwanda.webp",
            "alt": ""
          }
        ]
      },
      {
        "day": "5",
        "title": "Kigali City/ Depart Rwanda",
        "blocks": [
          {
            "type": "p",
            "text": "No rush, have a morning at leisure, allowing yourselves to rest from a possible previous long night. Go for a late breakfast and enjoy a lazy morning by the hotel’s Swimming Pool & more. The transport & guides will remain at your disposal for any possible souvenir shopping expeditions, City further sightings, enjoy the dedicated Kigali Car-free Zones & Kigali recreational Parks."
          },
          {
            "type": "img",
            "src": "/images/experiences/itinerary-photos/image-018-2.webp",
            "alt": ""
          },
          {
            "type": "img",
            "src": "/images/experiences/itinerary-photos/rwanda-air.webp",
            "alt": ""
          },
          {
            "type": "p",
            "text": "And that will mark the end of your eye-opening & memorable trip to Rwanda!"
          }
        ]
      }
    ],
    "includes": [
      {
        "type": "ul",
        "items": [
          "Car hire with professional drivers & guides",
          "All in-country transport & transfers",
          "All Accommodation on Bed & Breakfast basis as per program",
          "All Kigali Golf Playing fees",
          "All mentioned activities, Park entry fees & Park guides",
          "Water in the vehicle throughout the trip Emergency, Local, Medical Evacuation “from incident scene to nearest medical facility”",
          "All government taxes"
        ]
      }
    ],
    "excludes": [
      {
        "type": "ul",
        "items": [
          "International flight to/from Rwanda",
          "Meals & Drinks NOT included",
          "Extra charges or optional activities self-arranged",
          "Items of personal nature, souvenir shopping, etc.",
          "Gratuities to guides, Lodge/Hotel staff, etc."
        ]
      }
    ],
    "related": [
      "11-day-rwanda-holiday-experience",
      "gorilla-trekking-golden-monkeys",
      "gorillas-in-the-mist",
      "rwandas-primates"
    ],
    "liveUrl": "https://luxehorizonsafrica.com/tours/kigalis-golf-experience-the-safari-the-city/"
  },
  {
    "slug": "pre-post-conference-gorilla-experience",
    "title": "Pre/Post Conference Gorilla Experience",
    "cardText": "The high point of the trek will be spending an hour with the remarkably peaceful Gorillas despite their size and appearance, as they go about their daily life: feeding, playing, resting, grooming and raising their young.",
    "cardImage": "/images/experiences/pre-post-conference-gorilla-experience/card.webp",
    "heroImage": "/images/experiences/pre-post-conference-gorilla-experience/card.webp",
    "days": "1",
    "destination": [],
    "gallery": [
      {
        "src": "/images/experiences/pre-post-conference-gorilla-experience/gallery-1.webp",
        "alt": "Luxe Horizons Africa Gorilla Trekking"
      },
      {
        "src": "/images/experiences/pre-post-conference-gorilla-experience/gallery-2.webp",
        "alt": "Luxe Horizons Africa Gorilla Trekking"
      }
    ],
    "overview": [
      {
        "type": "p",
        "text": "The Gorilla Experience, a must-do for avid travelers, starts with a 4:30 AM pick-up from Kigali. Upon arrival at the Park Headquarters at 7:00 AM, guests receive a briefing from the Park Guide and trackers before embarking on the Gorilla trek. The highlight is spending an hour observing these peaceful giants in their natural habitat, engaging in daily activities like feeding, playing, and caring for their young. Visitors also learn to communicate with the gorillas in their language, ensuring a unique and immersive experience. After the trek, lunch is served at the foothills of the Volcanoes before returning to Kigali."
      }
    ],
    "itinerary": [
      {
        "day": "1",
        "title": "One day Gorilla Experience",
        "blocks": [
          {
            "type": "p",
            "text": "Almost on the Bucket List of every existing Traveller, THE GORILLA EXPERIENCE is indeed a once in a lifetime experience. Pick up is at 4:30AM from Kigali, because you are supposed to arrive at the Park Headquarters at 7:00am for the briefing with the Park Guide and trackers. After which you will be driven to where the hiking point and your Gorilla trek begins. The high point of the trek will be spending an hour with the remarkably peaceful Gorillas despite their size and appearance, as they go about their daily life: feeding, playing, resting, grooming and raising their young."
          },
          {
            "type": "img",
            "src": "/images/experiences/itinerary-photos/d-guide-gorilla-trekking.webp",
            "alt": "D-Guide Gorilla Trekking"
          },
          {
            "type": "img",
            "src": "/images/experiences/itinerary-photos/d-guide-gorilla-trekking-2.webp",
            "alt": "D-Guide Gorilla Trekking"
          },
          {
            "type": "p",
            "text": "You will be taught how to speak in their language for you to communicate with these majestic and giant creatures with whom we share over 98% of proximity. They are habituated and very much used to their human visitors. Please keep at least 10meters distance and Ensure your Selfie Camera works well!"
          },
          {
            "type": "p",
            "text": "After the trek, you will have time for your Lunch by the foothills of the Volcanoes before hitting the road back to Kigali for a drop off."
          },
          {
            "type": "h",
            "text": "Gorilla Trekking Tips & Rules:"
          },
          {
            "type": "ul",
            "items": [
              "When tracking gorillas, wear sturdier clothing to protect against stinging nettles, and solid walking shoes. A lightweight waterproof jacket may come in handy in the moist mountains. You will also need a small backpack to carry water and snacks.",
              "Keep a minimum of 10 meters from the Gorillas – this is to protect them.",
              "Do NOT remove anything from the park e.g. flowers, fruit, porcupine quills, etc.",
              "Keep your voices down at all times.",
              "No Flash photography is allowed.",
              "Professional film makers require permission and need to purchase filming permits.",
              "Do NOT eat or drink when close to the gorillas – this is a disease risk.",
              "Do NOT touch the Gorillas – they are wild animals.",
              "The maximum time you can spend with the gorillas is ONE hour",
              "If you are feeling ill, or are carrying a contagious disease, please volunteer to stay behind. An alternative visit will be arranged for you.",
              "Do NOT spit in the park and go to the bathroom only as instructed by your guide.",
              "Do not leave anything in the park, if you pack it in, pack it out! Obey the local guide instructions at all times, for the safety of the Gorillas and visitors.",
              "Porters are available at a small fee to carry your daypack and help you up the steep slopes when gorilla tracking.",
              "The minimum age for Gorilla trekking is 15 years."
            ]
          }
        ]
      }
    ],
    "includes": [
      {
        "type": "ul",
        "items": [
          "Transport on 4×4 Vehicles with a Professional Driver-Guide",
          "Lunch in Musanze by the Volcanoes",
          "Water and Wi-Fi in the vehicle throughout the trip",
          "Hygiene, sanitization, Evacuation cover & All taxes"
        ]
      }
    ],
    "excludes": [
      {
        "type": "ul",
        "items": [
          "A $1,050 Gorilla Permit per person attending the conference & $1,500 while not attending"
        ]
      }
    ],
    "related": [
      "kigalis-golf-experience-the-safari-the-city",
      "gorilla-trekking-golden-monkeys",
      "gorillas-in-the-mist",
      "rwandas-primates"
    ],
    "liveUrl": "https://luxehorizonsafrica.com/tours/pre-post-conference-gorilla-experience/"
  },
  {
    "slug": "city-tour-vibrant-hopeful-kigali",
    "title": "City tour: Vibrant & Hopeful Kigali",
    "cardText": "This itinerary includes a visit to the Kigali Genocide Memorial, a lunch break at a local restaurant, and an optional half-day Kigali City Tour, offering a blend of historical exploration and cultural experiences.",
    "cardImage": "/images/experiences/city-tour-vibrant-hopeful-kigali/card.webp",
    "heroImage": "/images/experiences/city-tour-vibrant-hopeful-kigali/card.webp",
    "days": "1",
    "destination": [],
    "gallery": [
      {
        "src": "/images/experiences/city-tour-vibrant-hopeful-kigali/gallery-1.webp",
        "alt": "Kigali Genocide Memorial"
      },
      {
        "src": "/images/experiences/city-tour-vibrant-hopeful-kigali/gallery-2.webp",
        "alt": "Kigali"
      }
    ],
    "overview": [
      {
        "type": "p",
        "text": "This itinerary includes a visit to the Kigali Genocide Memorial, a lunch break at a local restaurant, and an optional half-day Kigali City Tour, offering a blend of historical exploration and cultural experiences."
      }
    ],
    "itinerary": [
      {
        "day": "1",
        "title": "A day in today's beautiful Rwanda’s history",
        "blocks": [
          {
            "type": "p",
            "text": "EXCURSION STARTS with a Pick up from the Hotel at 9:30AM & Embark on a 20min drive heading to the Kigali Genocide Memorial for an approx 1.5hrs Guided Tour to be concluded with laying of the Wreath onto the Mass Grave of over 250,000 victims. Don’t miss a Group Photo Opportunity here!"
          },
          {
            "type": "img",
            "src": "/images/experiences/itinerary-photos/kigali-genocide-memorial.webp",
            "alt": "Kigali Genocide Memorial"
          },
          {
            "type": "img",
            "src": "/images/experiences/itinerary-photos/kigali.webp",
            "alt": "Kigali"
          },
          {
            "type": "p",
            "text": "After an almost 2hour journey of Rwanda’s dark history discovery, you would have a moment together for Lunch, an opportunity during which you would digest the just heard stories of disgrace as well as chewing the understanding of Rwanda’s impeccable story of rebirth, resilience and Hope."
          },
          {
            "type": "p",
            "text": "Please do connect, exchange and enjoy your Lunch at the Repub Lounge known on Rwandan Cuisine or the Milles Collines known for the Hotel Rwanda movie (Recommended not included), renowned on their exceptional Rwandan Local cuisine delicacies! After Lunch you have an option of carrying on with another Half day Kigali City Tour, driving through the cleanest, safest but also one of the most Innovative and Digitalized Cities in Africa & then Drop off at the Hotel."
          }
        ]
      }
    ],
    "includes": [
      {
        "type": "ul",
        "items": [
          "Transport on Bus/Van with a Professional Guide",
          "A symbolic Wreath to be laid on the Mass Grave at the Memorial",
          "A dedicated Genocide Memorial Physical Guide",
          "Guided Kigali tour/drive through the City",
          "Water and Wifi in the vehicle throughout the trip",
          "All taxes"
        ]
      }
    ],
    "excludes": [],
    "related": [
      "kigalis-golf-experience-the-safari-the-city",
      "gorilla-trekking-golden-monkeys",
      "gorillas-in-the-mist",
      "rwandas-primates"
    ],
    "liveUrl": "https://luxehorizonsafrica.com/tours/city-tour-vibrant-hopeful-kigali/"
  },
  {
    "slug": "pre-post-conference-safari-experience",
    "title": "Pre/Post Conference Safari Experience",
    "cardText": "Explore Rwanda’s Akagera National Park, home to the big five, on a thrilling full-day adventure. With luck, you may even spot the big five of the park.",
    "cardImage": "/images/experiences/pre-post-conference-safari-experience/card.webp",
    "heroImage": "/images/experiences/pre-post-conference-safari-experience/card.webp",
    "days": "1",
    "destination": [],
    "gallery": [
      {
        "src": "/images/experiences/pre-post-conference-safari-experience/gallery-1.webp",
        "alt": "Akagera National Park"
      },
      {
        "src": "/images/experiences/pre-post-conference-safari-experience/gallery-2.webp",
        "alt": "Akagera National Park"
      },
      {
        "src": "/images/experiences/pre-post-conference-safari-experience/gallery-3.webp",
        "alt": "Akagera National Park"
      },
      {
        "src": "/images/experiences/pre-post-conference-safari-experience/gallery-4.webp",
        "alt": "Akagera National Park"
      }
    ],
    "overview": [
      {
        "type": "p",
        "text": "Explore Rwanda’s Akagera National Park, home to the big five, on a thrilling full-day adventure. The journey begins with a 5:00 AM pick-up from your hotel for a scenic 2.5-hour drive to the park. Upon arrival, you’ll go through the registration process before starting your game drive."
      }
    ],
    "itinerary": [
      {
        "day": "1",
        "title": "Day Trip - Akagera Wildlife Experience",
        "blocks": [
          {
            "type": "p",
            "text": "Akagera National Park, Rwanda’s home of big 5 is located in the East of the country along the border with Tanzania. It is named after the Akagera River that flows along its eastern boundary and feeds into a labyrinth of lakes. The rolling hills of Acacia woodland coupled with scattered grassland and swamp-fringed lakes along the watercourse combine to create a park of breathtaking beauty."
          },
          {
            "type": "img",
            "src": "/images/experiences/itinerary-photos/akagera-np.webp",
            "alt": "Akagera National Park"
          },
          {
            "type": "img",
            "src": "/images/experiences/itinerary-photos/akagera-np-1.webp",
            "alt": "Akagera National Park"
          },
          {
            "type": "p",
            "text": "5:00 AM, you will be picked from your Hotel and start your 2.5hours drive to Akagera National Park where you will first go through the registration process at the reception before embarking on your full day Game Drive."
          },
          {
            "type": "img",
            "src": "/images/experiences/itinerary-photos/akagera-np-3.webp",
            "alt": "Akagera National Park"
          },
          {
            "type": "img",
            "src": "/images/experiences/itinerary-photos/akagera-np-2.webp",
            "alt": "Akagera National Park"
          },
          {
            "type": "p",
            "text": "You will have the opportunity to view many large mammals such as elephant, buffalo, giraffe, zebra and antelope that frequent the open plains within the park with the chance to spot the big 5 of the Park. Picnic snacks and a bush packed lunch will be served on your drives before exiting the Park heading back to Kigali City for a drop off in the evening."
          }
        ]
      }
    ],
    "includes": [
      {
        "type": "ul",
        "items": [
          "Car hire with a professional driver guide on a luxury 4×4 Landcruiser Safari Tourist Vehicle",
          "Park guide on safari",
          "Vehicle entrance fee",
          "Picnic Lunch within the Park",
          "Water/soft drink in the car throughout the trip",
          "All government taxes"
        ]
      }
    ],
    "excludes": [
      {
        "type": "ul",
        "items": [
          "International flight to & from Kigali",
          "All Accommodation",
          "Gratuities to guides, hotel/restaurant staff & things of a personal nature."
        ]
      }
    ],
    "related": [
      "kigalis-golf-experience-the-safari-the-city",
      "gorilla-trekking-golden-monkeys",
      "gorillas-in-the-mist",
      "rwandas-primates"
    ],
    "liveUrl": "https://luxehorizonsafrica.com/tours/pre-post-conference-safari-experience/"
  },
  {
    "slug": "ancient-history-culture",
    "title": "Ancient History & Culture",
    "cardText": "Witness the majestic Inyambo cows and enjoy a live traditional dance performance. Lunch at the Heritage Hotel is included before heading back to Kigali.",
    "cardImage": "/images/experiences/ancient-history-culture/card.webp",
    "heroImage": "/images/experiences/ancient-history-culture/card.webp",
    "days": "1",
    "destination": [],
    "gallery": [
      {
        "src": "/images/experiences/ancient-history-culture/gallery-1.webp",
        "alt": "Rwanda Culture & Heritage"
      },
      {
        "src": "/images/experiences/ancient-history-culture/gallery-2.webp",
        "alt": "Rwanda Culture & Heritage"
      }
    ],
    "overview": [
      {
        "type": "p",
        "text": "Experience Rwanda’s rich culture with a 9:00 AM pick-up from your hotel. Visit the Nyanza King’s Palace Museum to delve into Rwanda’s ancient monarchy and learn about the esteemed role of Rwandan women. Witness the majestic Inyambo cows and enjoy a live traditional dance performance. Lunch at the Heritage Hotel is included before heading back to Kigali."
      }
    ],
    "itinerary": [
      {
        "day": "1",
        "title": "One Day Life Story of Rwanda's king & Queen Mother",
        "blocks": [
          {
            "type": "p",
            "text": "THE CULTURAL EXPERIENCE kicks-off with a Pick up from the Hotel at 9:00AM & Embark on an approx. 2hrs drive to the Nyanza King’s Palace Museum, where you will experience the real daily life of the Rwanda’s Ancient Monarchy, from where you would understand that the Value and Special position of a Rwandan Woman in the society are dated back in History from the very beginning of Rwanda’s Royalty Rules and Practices."
          },
          {
            "type": "img",
            "src": "/images/experiences/itinerary-photos/rwanda-cultural-heritage-1.webp",
            "alt": "Rwanda Culture & Heritage"
          },
          {
            "type": "img",
            "src": "/images/experiences/itinerary-photos/rwanda-cultural-heritage.webp",
            "alt": "Rwanda Culture & Heritage"
          },
          {
            "type": "p",
            "text": "Hard to believe the existence of the most trained parading Royal Cattle breed, also known as “Inyambo” Cows. With magnificent long horns and remarkable elegance, you will enjoy the rhythm of Inyambo Shepherds who sing while padding the cows and the later bend as of hearing and responding to their darling and most caring keepers. Don’t be afraid of posing for a photo with these actually gentle and friendly Royal cows!"
          },
          {
            "type": "p",
            "text": "You will have an occasion with a live performance of the Traditional Dancing Troupe. Don’t shy away, you can join in a dance; it might be difficult for a beginner but worth a try. Your lunch will be served from the Heritage Hotel. After a Cultural busy day in the south, you will head back to Kigali and Drop off."
          }
        ]
      }
    ],
    "includes": [
      {
        "type": "ul",
        "items": [
          "Transport on an Executive Bus/Van with a Professional Guide",
          "Museum entry fees & Inyambo cows visit",
          "Lunch in Nyanza cultural city",
          "Water and Wifi in the vehicle throughout the trip",
          "All taxes"
        ]
      }
    ],
    "excludes": [],
    "related": [
      "kigalis-golf-experience-the-safari-the-city",
      "gorilla-trekking-golden-monkeys",
      "gorillas-in-the-mist",
      "rwandas-primates"
    ],
    "liveUrl": "https://luxehorizonsafrica.com/tours/ancient-history-culture/"
  },
  {
    "slug": "pre-colonial-era-the-big-5-the-city",
    "title": "Pre-colonial era, The Big 5 & The City",
    "cardText": "This 5 day tour of Rwanda offers a combination of city exploration, wildlife viewing, and cultural immersion.",
    "cardImage": "/images/experiences/pre-colonial-era-the-big-5-the-city/card.webp",
    "heroImage": "/images/experiences/pre-colonial-era-the-big-5-the-city/card.webp",
    "days": "5",
    "destination": [],
    "gallery": [
      {
        "src": "/images/experiences/pre-colonial-era-the-big-5-the-city/gallery-1.webp",
        "alt": "giraffe"
      },
      {
        "src": "/images/experiences/pre-colonial-era-the-big-5-the-city/gallery-2.webp",
        "alt": "Rwanda Culture & Heritage"
      },
      {
        "src": "/images/experiences/pre-colonial-era-the-big-5-the-city/gallery-3.webp",
        "alt": "Kigali Night Entertainment"
      },
      {
        "src": "/images/experiences/pre-colonial-era-the-big-5-the-city/gallery-4.webp",
        "alt": "Kigali Marriott Hotel"
      }
    ],
    "overview": [
      {
        "type": "p",
        "text": "This 5 day tour of Rwanda offers a combination of city exploration, wildlife viewing, and cultural immersion."
      },
      {
        "type": "p",
        "text": "Notes: The Group Leader is on FOC (only one pax) Optional arrangement of the Gorilla trip extension"
      }
    ],
    "itinerary": [
      {
        "day": "1",
        "title": "Arrive in Kigali (Please advise flight details)",
        "blocks": [
          {
            "type": "p",
            "text": "On arrival at Kigali International Airport, you will be welcomed upon exit where you will be met by your dedicated guide for a short introductory briefing, learn a few key words in our local language as you embark on a short 20min drive to the Kigali Marriott Hotel."
          },
          {
            "type": "img",
            "src": "/images/experiences/itinerary-photos/kigali-marriott-hotel-1.webp",
            "alt": "Kigali Marriott Hotel"
          },
          {
            "type": "img",
            "src": "/images/experiences/itinerary-photos/kigali-marriott-hotel.webp",
            "alt": "Kigali Marriott Hotel"
          },
          {
            "type": "p",
            "text": "Experience Rwanda’s capital from Kigali Marriott Hotel, conveniently located near the Nyarugenge financial district and the Kigali Convention Center. Set in the vibrant heart of Kigali, our impeccable luxury hotel provides spacious, modern accommodations with deluxe amenities and premium services."
          },
          {
            "type": "img",
            "src": "/images/experiences/itinerary-photos/kigali-marriott-hotel-3.webp",
            "alt": "Kigali Marriott Hotel"
          },
          {
            "type": "img",
            "src": "/images/experiences/itinerary-photos/kigali-marriott-hotel-2.webp",
            "alt": "Kigali Marriott Hotel"
          },
          {
            "type": "p",
            "text": "THAT VERY OR NEXT DAY AFTERNOON MEETING AT THE HOTEL DEPENDING ON YOUR ARRIVAL TIME. Conference room and all facilities, Coffee-break, Lunch & Dinner are included with soft drinks ONLY."
          }
        ]
      },
      {
        "day": "2",
        "title": "City Tour: Explore the Vibrant Fast Growing Kigali City",
        "blocks": [
          {
            "type": "p",
            "text": "After your breakfast, you will first visit the Kigali Genocide Memorial as a Historical component of your trip and then carry on Nyamirambo vibrant suburb visit as well as an exploration to various corners of the city for some of the most panoramic city view points."
          },
          {
            "type": "img",
            "src": "/images/experiences/itinerary-photos/kigali-city.webp",
            "alt": "Kigali City"
          },
          {
            "type": "img",
            "src": "/images/experiences/itinerary-photos/kigali-city-1.webp",
            "alt": "Kigali City"
          },
          {
            "type": "p",
            "text": "With about 1.3million people on a surface of 730 km square, Kigali City is small but yet one of the friendliest, greenest, cleanest and safest of Africa’s cities attracting numerous visitors and investors to the capital. The rapidly growing City is becoming the biggest MICE and sports hub with signature Conference and sports venues with a track record as the fastest growing in Africa. A culinary experience and a nightlife in Kigali will never disappoint with vibrant and a wide range of various restaurants with India specialties, among others. Lunch & Dinner included with soft drinks ONLY"
          }
        ]
      },
      {
        "day": "3",
        "title": "Day trip to Akagera National Park - Game Drives Experience",
        "blocks": [
          {
            "type": "p",
            "text": "The next morning you will embark on an approx 2.5hrs scenic drive to Akagera National Park where you will spend your full day on game drives with animal sightings in the wild. You will stop-over for Included Packed Picnic Bush Lunch in the middle of the Park & carry on with the game drive."
          },
          {
            "type": "img",
            "src": "/images/experiences/itinerary-photos/akagera-np-1.webp",
            "alt": "Akagera National Park"
          },
          {
            "type": "img",
            "src": "/images/experiences/itinerary-photos/rhino.webp",
            "alt": ""
          },
          {
            "type": "img",
            "src": "/images/experiences/itinerary-photos/giraffe.webp",
            "alt": ""
          },
          {
            "type": "img",
            "src": "/images/experiences/itinerary-photos/akagera-np-3.webp",
            "alt": "Akagera National Park"
          },
          {
            "type": "img",
            "src": "/images/experiences/itinerary-photos/akagera-np-2.webp",
            "alt": "Akagera National Park"
          },
          {
            "type": "p",
            "text": "Lunch will be packed to be consumed later in the Park. Dinner (included, with soft drinks ONLY)"
          }
        ]
      },
      {
        "day": "4",
        "title": "Pre-colonial Life Story of Rwanda's Ancient Kings & Queen Mothers",
        "blocks": [
          {
            "type": "p",
            "text": "Next morning after your breakfast at the Hotel, you will check out and embark on a 2.5 hrs cultural drive to Nyanza at the King’s Palace, home of Rwanda’s last Monarch with a rich history on the country’s ancient traditions and practices. You will experience the real daily life of Rwanda’s Ancient Monarchy and Royalty Rules and Practices. Along with trained parading Royal long-horned Cattle breed, also known as “Inyambo” Cows as you enjoy the Shepherds who sing for the parading cows. Don’t be afraid of posing for a photo with these actually gentle and friendly Royal cows!"
          },
          {
            "type": "img",
            "src": "/images/experiences/itinerary-photos/rwanda-cultural-heritage-1.webp",
            "alt": "Rwanda Culture & Heritage"
          },
          {
            "type": "img",
            "src": "/images/experiences/itinerary-photos/rwanda-cultural-heritage.webp",
            "alt": "Rwanda Culture & Heritage"
          },
          {
            "type": "p",
            "text": "You will have an occasion with a live performance of the Traditional Dancing Troupe. Don’t shy away, you can join in a dance; it might be difficult for a beginner but worth a try. Your traditional local lunch will be organized from around the King’s Palace Hotel (dietary requirements put into consideration). Lunch included with soft drinks ONLY."
          },
          {
            "type": "p",
            "text": "After a Cultural & Community busy day in the south, you will head back to Kigali."
          },
          {
            "type": "img",
            "src": "/images/experiences/itinerary-photos/night-entertainment.webp",
            "alt": "Kigali Night Entertainment"
          },
          {
            "type": "img",
            "src": "/images/experiences/itinerary-photos/night-entertainment-1.webp",
            "alt": "Kigali Night Entertainment"
          },
          {
            "type": "p",
            "text": "Go freshen up and come for a Night Entertainment with some of the most prominent Music Mix by renowned DJ’s."
          },
          {
            "type": "p",
            "text": "Dinner at the Venue included; Meals with soft drinks ONLY."
          }
        ]
      },
      {
        "day": "5",
        "title": "Kigali City / Depart Rwanda (Please advise flight details)",
        "blocks": [
          {
            "type": "p",
            "text": "No rush, have a morning at leisure, allowing yourselves to rest from a possible previous long night. Go for a late breakfast and enjoy a lazy morning by the hotel’s Swimming Pool & more. The transport & guides will remain at your disposal for any possible souvenir shopping expeditions, City further sightings, enjoy the dedicated Kigali Car-free Zones & Kigali recreational Parks."
          },
          {
            "type": "p",
            "text": "DEPARTURE FLIGHT DEPENDANT"
          },
          {
            "type": "img",
            "src": "/images/experiences/itinerary-photos/kigali-city.webp",
            "alt": "Kigali City"
          },
          {
            "type": "img",
            "src": "/images/experiences/itinerary-photos/depart-kigali.webp",
            "alt": ""
          },
          {
            "type": "p",
            "text": "And that will mark the end of your eye-opening & memorable trip to Rwanda!"
          }
        ]
      }
    ],
    "includes": [
      {
        "type": "ul",
        "items": [
          "Car hire with professional drivers & guides",
          "All in-country transport & transfers",
          "All Accommodation & All Meals as per program",
          "Meeting/conference room & the Kigali Gala",
          "Dinner with Entertainment",
          "All mentioned activities, Park entry fees & Park guides",
          "Water in the vehicle throughout the trip",
          "Emergency, Local, Medical Evacuation “from incident scene to nearest medical facility”",
          "All government taxes"
        ]
      }
    ],
    "excludes": [
      {
        "type": "ul",
        "items": [
          "International air to/from Rwanda",
          "Alcoholic Drinks NOT included",
          "Extra charges or activities self-arranged with Hotels",
          "Items of personal nature, souvenir shopping, etc.",
          "Gratuities to guides, Lodge/Hotel staff, etc."
        ]
      }
    ],
    "related": [
      "kigalis-golf-experience-the-safari-the-city",
      "gorilla-trekking-golden-monkeys",
      "gorillas-in-the-mist",
      "rwandas-primates"
    ],
    "liveUrl": "https://luxehorizonsafrica.com/tours/pre-colonial-era-the-big-5-the-city/"
  },
  {
    "slug": "tanzania-classic",
    "title": "Tanzania Classic",
    "cardText": "7-Day Tanzanian Safari: Arusha, Tarangire, Ngorongoro, Serengeti – Luxury stays and thrilling game drives.",
    "cardImage": "/images/experiences/tanzania-classic/card.webp",
    "heroImage": "/images/experiences/tanzania-classic/card.webp",
    "days": "7",
    "destination": [
      "Tanzania"
    ],
    "gallery": [
      {
        "src": "/images/experiences/tanzania-classic/gallery-1.webp",
        "alt": "Swala firearea"
      },
      {
        "src": "/images/experiences/tanzania-classic/gallery-2.webp",
        "alt": "Food to taste during Tanzania Safari"
      },
      {
        "src": "/images/experiences/tanzania-classic/gallery-3.webp",
        "alt": "Ngorongoro Crater Lodge"
      },
      {
        "src": "/images/experiences/tanzania-classic/gallery-4.webp",
        "alt": "Serengeti park Tanzania"
      }
    ],
    "overview": [
      {
        "type": "p",
        "text": "7-Day expedition includes: 1 night Arusha, 2 nights Tarangire National Park, 2 Ngorongoro Conservation Area, 2 nights Serengeti National Park, Game drives, recommended Luxury tented camps and lodges."
      }
    ],
    "itinerary": [],
    "includes": [],
    "excludes": [],
    "related": [
      "kigalis-golf-experience-the-safari-the-city",
      "gorilla-trekking-golden-monkeys",
      "gorillas-in-the-mist",
      "rwandas-primates"
    ],
    "liveUrl": "https://luxehorizonsafrica.com/tours/tanzania-classic/"
  },
  {
    "slug": "magical-kenya",
    "title": "Magical Kenya",
    "cardText": "7-Day Kenyan Safari: Karen, Amboseli, Meru, Maasai Mara – Luxury stays, Nairobi tour, and thrilling game drives.",
    "cardImage": "/images/experiences/magical-kenya/card.webp",
    "heroImage": "/images/experiences/magical-kenya/card.webp",
    "days": "",
    "destination": [
      "Kenya"
    ],
    "gallery": [
      {
        "src": "/images/experiences/magical-kenya/gallery-1.webp",
        "alt": "camp overlooking the masai mara"
      },
      {
        "src": "/images/experiences/magical-kenya/gallery-2.webp",
        "alt": "Nairobi National Park"
      },
      {
        "src": "/images/experiences/magical-kenya/gallery-3.webp",
        "alt": "masai mara"
      },
      {
        "src": "/images/experiences/magical-kenya/gallery-4.webp",
        "alt": "maasai mara"
      }
    ],
    "overview": [
      {
        "type": "p",
        "text": "7-Day safari includes: 1 night Karen, 2 nights Amboseli National Park, 2 nights Meru National Park, 2 nights Maasai Mara National Reserve, Nairobi tour, Game drives, recommended Luxury tented camps and lodges."
      }
    ],
    "itinerary": [],
    "includes": [],
    "excludes": [],
    "related": [
      "kigalis-golf-experience-the-safari-the-city",
      "gorilla-trekking-golden-monkeys",
      "gorillas-in-the-mist",
      "rwandas-primates"
    ],
    "liveUrl": "https://luxehorizonsafrica.com/tours/magical-kenya/"
  },
  {
    "slug": "the-great-migration-adventure",
    "title": "The Great Migration Adventure",
    "cardText": "13-Day African Adventure: Nairobi, Serengeti, Ngorongoro Crater, Maasai Mara – Luxury stays in iconic locations.",
    "cardImage": "/images/experiences/the-great-migration-adventure/card.webp",
    "heroImage": "/images/experiences/the-great-migration-adventure/card.webp",
    "days": "13",
    "destination": [
      "Kenya",
      "Tanzania"
    ],
    "gallery": [
      {
        "src": "/images/experiences/the-great-migration-adventure/gallery-1.webp",
        "alt": "East Africa Great Migration"
      },
      {
        "src": "/images/experiences/the-great-migration-adventure/gallery-2.webp",
        "alt": "Great Migration"
      },
      {
        "src": "/images/experiences/the-great-migration-adventure/gallery-3.webp",
        "alt": "camp overlooking the masai mara"
      },
      {
        "src": "/images/experiences/the-great-migration-adventure/gallery-4.webp",
        "alt": "Food to taste during Tanzania Safari"
      }
    ],
    "overview": [
      {
        "type": "p",
        "text": "13-day Adventure includes: 2 night Nairobi, 4 nights Serengeti National Park, 2 nights Ngorongoro Crater, 4 nights Maasai Mara National Reserve at recommended Luxury Tented Camps and Lodges."
      }
    ],
    "itinerary": [],
    "includes": [],
    "excludes": [],
    "related": [
      "kigalis-golf-experience-the-safari-the-city",
      "gorilla-trekking-golden-monkeys",
      "gorillas-in-the-mist",
      "rwandas-primates"
    ],
    "liveUrl": "https://luxehorizonsafrica.com/tours/the-great-migration-adventure/"
  }
]
