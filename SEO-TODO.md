# SEO follow-ups

From the SEOptimer audit of the current live site (24 Sep 2026). These are
not code fixes on this new build — either they need a client action
(an account, DNS access) or off-page work that happens after launch, not
inside this repo.

## Needs the client's own accounts/access (I can wire these in once you have them)
- [ ] **Google Analytics / GA4** — client needs to create a GA4 property; I add the tracking snippet once you send the Measurement ID.
- [ ] **Google Business Profile** — separate Google product, client claims/verifies it directly. Nothing to build.
- [ ] **DMARC mail record** — DNS-level, set wherever the domain's DNS is managed (registrar or host), not in this codebase.
- [ ] **SPF mail record** — same, DNS-level.

## Off-page / marketing, not a dev task
- [ ] **Backlinks (audit scored this an F — 0 backlinks/referring domains)** — needs real outreach: tourism board listings, TripAdvisor, partner/press mentions, directory submissions. No code change fixes this.
- [ ] **Facebook Page** — create one and link it from the site (low priority per the audit).

## Worth revisiting later, needs more digging
- [ ] **"Friendly Links" flag** — audit said some URLs aren't human/search-engine friendly (too long, odd characters). Only saw the summary, not the "Show Details" breakdown — need to see specifics before doing anything.
- [ ] **Reduce Total Page File Size** (Medium priority, Performance) — worth a real look at image sizes / bundle size once the site's closer to final content.
- [ ] **Rendered Content / LLM readability** (client-side rendering means non-JS crawlers and social share bots don't see per-page content) — same root cause as the old site's issue. Proper fix is pre-rendering each route to static HTML at build time. Bigger piece of work, not done yet.

## Already fine on the new build (checked, no action needed)
- Title tags — all 13 pages now 41-56 chars (were up to 80 on the audited old site)
- Meta descriptions — all 13 pages now 120-131 chars (old site's was 161, 1 over the limit)
- H1 present on homepage (old site's audit flagged a missing H1 / heading starting at H2)
- Address visible in page text via the footer, not just in schema (old site's audit flagged this as missing)
- Local Business schema present (`TravelAgency` type) — already matches what the audit wants to see
