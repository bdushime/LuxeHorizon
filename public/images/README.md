# Site images: where each one is used

Photos supplied by the client, organised by the section of the site they belong to.
All are WebP, resized to at most 2400px wide for fast loading.

To swap a photo, either replace the file and keep the same name (no code change needed),
or change the path in the file listed under "Set in".

Images that appear in more than one place live in the folder of their main section.
The "Also used in" column lists the other places.

## opening-screen/
The full-screen welcome page shown before entering the site.

| File | Used in | Set in |
|---|---|---|
| `opening-screen-team-walk.webp` | Opening screen background ("We Love What We Do...") | `src/components/PortalGate.jsx` |

## home-hero/
The homepage hero. Each item in the bottom bar (Experiences / Destinations / About / Contact)
swaps in its own background photo on hover or tap.

| File | Used in | Also used in | Set in |
|---|---|---|---|
| `home-hero-destinations-giraffe.webp` | Hero: "Destinations" hover | | `src/data/content.js` → `heroSections` |
| `home-hero-contact-lakeside-dinner.webp` | Hero: "Contact" hover | Consultancy page: "Get Inspired" card | `src/data/content.js` → `heroSections`, `consultancyPillars` |

## about/
| File | Used in | Also used in | Set in |
|---|---|---|---|
| `about-hero-team-laughing.webp` | About Us page: opening panel | Homepage hero: "About" hover | `src/pages/AboutReel.jsx` (`PHOTO_HERO`), `src/data/content.js` → `heroSections` |

## experiences/
| File | Used in | Also used in | Set in |
|---|---|---|---|
| `experiences-hero-hiking-boots.webp` | Experiences page: opening banner | Homepage hero: "Experiences" hover | `src/pages/ExperiencesPage.css` (`.exp-hero-bg`), `src/data/content.js` → `heroSections` |

### experiences/&lt;tour-slug&gt;/ (one folder per tour, 18 in total)
The tours are copied from the client's live site (https://luxehorizonsafrica.com/experiences/),
and so are their photos. All paths are set in `src/data/toursData.js`.

| File | Used in |
|---|---|
| `card.webp` | The tour's card on the Experiences page and in "Related Experiences", plus the banner at the top of the tour page (the live site uses one photo for both) |
| `gallery-1.webp` … `gallery-4.webp` | The 4-photo grid in the tour page's Overview tab |

Where the live site repeated the same gallery photo on two tours, the second tour got a different
photo that was already in the project:

| Tour | Live photo that was repeated | Replaced with |
|---|---|---|
| gorillas-in-the-mist | Virunga-Mountains | `/mountain-gorilla-1.webp` |
| rwandas-primates | destination.png | `/Mountain-Gorilla.webp` |
| rwandas-primates | Singita-Kwitonda-Lodge | `/chimpanzee-3.webp` |
| rwandas-primates | Bird-in-Volcanoes-NP | `/weaver-bird-nyungwe.webp` |
| 7-day-rwanda-primates-adventure | The-Ellen-Degeneres-Campus | `/chimpanzee-2.webp` |
| 11-day-rwanda-holiday-experience | Lions | `/leopard-tree.webp` |
| pre-colonial-era-the-big-5-the-city | Rwanda-Cultural-heritage-1 | `/kob-antelope-savannah.webp` |
| the-great-migration-adventure | Food-to-taste-during-Tanzania-Safari | `/Tanzania.webp` |
| the-great-migration-adventure | camp-overlooking-the-masai-mara | `home-hero/home-hero-destinations-giraffe.webp` |

The four homepage "Adventure" cards for Rwanda, Uganda and Tanzania reuse the matching tour's `card.webp`.

### experiences/itinerary-photos/
Lodge and activity photos shown inside the day-by-day "Itinerary" tab (78 photos, named after
the live site's original files). Several tours share the same lodge photos, so they live in one
shared folder. Set in `src/data/toursData.js` (`itinerary[].blocks`).

The older `public/experiences/` folder holds the photos for the previous version of the page,
now archived in `src/archive/experiences-before-live-copy/`. It was kept so that archive can still be restored.

## destinations/
Each country has two photos:
- **main**: homepage "Explore Captivating Destinations" (hover background and card) and the top banner of the country page (`/destinations/<country>`). Set in `src/data/content.js` → `destinations` (`image`).
- **secondary**: the pinned photo beside the text on the country page. Set in `src/data/content.js` → `destinationDetails` (`secondaryPhoto`).

| Country | Main | Secondary |
|---|---|---|
| Rwanda | *(still the older `/experiences/featured/gorillas-in-the-mist.webp`)* | `rwanda-secondary-helicopter-transfer.webp` |
| Uganda | `uganda-main-tree-lion.webp` | `uganda-secondary-landcruiser-giraffes.webp` |
| Tanzania | `tanzania-main-hyenas-vultures.webp` | `tanzania-secondary-giraffe-acacia.webp` |
| Kenya | `kenya-main-lions-zebra.webp` | `kenya-secondary-lion-pair.webp` |

## consultancy/
The three cards on the Consultancy page.

| File | Used in | Set in |
|---|---|---|
| `consultancy-card-giraffe.webp` | "Consultancy" card | `src/data/content.js` → `consultancyPillars` |
| `consultancy-educational-trips-lake-view.webp` | "Incentive and Educational Trips" card | `src/data/content.js` → `consultancyPillars` |

The "Get Inspired" card reuses `home-hero/home-hero-contact-lakeside-dinner.webp`.

---

Older images that were already on the site still sit directly in `public/` and were not moved,
to avoid breaking links (including itinerary data and social-sharing previews in `src/config/seo.js`).
