# Archived: Experiences page before the live-site copy

Archived on 2026-11-18. The client asked for the Experiences page to match their live
website (https://luxehorizonsafrica.com/experiences/) exactly: the same 18 tours, titles,
wording and photos, shown in the new site's design. This folder holds everything that was
replaced, so it can be brought back if needed.

Nothing in this folder is imported by the site, so none of it is bundled.

| File | What it was |
|---|---|
| `experiencesData.js` | 25 experiences (the 18 old-site tours with rewritten copy, plus extra tours such as *15 Day Rwanda - Kenya Classic Trip*, *Rwanda Primates Corner, Premium*, *9 Day Uganda Wildlife Adventure*, *11 Day Tanzania - Rwanda, Premium*, *6 Day Rwanda Incentive Group Trip*, *4 Day Rwanda Experience*). Its photos are still in `public/experiences/`. |
| `itinerariesData.js` | 7 itineraries built from the client's PDF documents, with full day-by-day text. |
| `ExperiencesPage.jsx` / `.css` | The previous Experiences page: a grid of all of the above in one list, with a pop-up article per item. |
| `ItinerariesPage.jsx` / `.css` | An older separate Itineraries page for the PDF itineraries (`/itineraries` already redirected to `/experiences`). |

## How to restore

1. Move `experiencesData.js` and `itinerariesData.js` back to `src/data/`.
2. Move `ExperiencesPage.jsx` and `ExperiencesPage.css` back to `src/pages/`, replacing the
   current ones (keep a copy of the current versions first).
3. In `src/App.jsx`, remove the `/experiences/:slug` route if you no longer want the
   separate tour pages.
4. To restore the Itineraries page too, move `ItinerariesPage.*` back to `src/pages/` and
   route `/itineraries` to it in `src/App.jsx`.

The homepage "Adventure" cards (`adventureCards` in `src/data/content.js`) used to link to
`?exp=rwanda-primates-corner-premium`, `?exp=9day-uganda-adventure` and
`?exp=11-day-tanzania-rwanda-premium`. They now link to the matching live tours.
