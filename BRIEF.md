# Client Brief: Shocos Pressure Cleaning

Anything not in this brief does not appear on the site. Facts marked [gbp] were read from the Google Business Profile on 2026-10-22. Facts marked [jacob] came from Jacob. Facts marked [general] are general pressure washing knowledge any operator could state; write them with "about", "typically", or "can", never as this company's promise. Facts marked [geo] are public geography. There is no client website, no confirmed social profile, and no reviews. Nothing else is a usable fact.

## Business identity

- Name as it appears on the Google Business Profile: Shocos Pressure Cleaning [gbp]. Use this spelling everywhere so the site matches the profile. The spelling is UNRESOLVED (Jacob first wrote it as "Socrates"; a year-old local ad for a "Choco's Pressure Cleaning" in Indian River County may be the same business). If Jacob changes it, it is a single value in site.config.ts plus the H1 and the Why page heading. Legal name: not supplied; use the display name in the copyright line. UNRESOLVED.
- Trade: pressure cleaning and paver sealing. Profile description, the owner's words: "Specialize in house Pressure Washing and Pavers cleaning and Sealing. We do quality work." [gbp]. House washing and paver cleaning and sealing lead everywhere.
- Services listed on the profile [gbp]: driveway cleaning, house pressure wash, paver cleaning and sealing, pool enclosure cleaning, pool deck cleaning, gutter cleaning, pavers maintenance. (The profile also carries Google's default "Deep clean" and "Standard cleaning" entries; those are not services and do not go on the site.)
- Residential and commercial: the profile says "house"; commercial is not claimed. Write "homes" and "properties"; do not write "commercial" as a service line. UNRESOLVED.
- Years in business, owner's name, license, insurance, crew size, equipment: none supplied. Never write any of them.
- Words to avoid everywhere: licensed, certified, insured, bonded, guaranteed, guarantee, 24/7, emergency, cheap, lowest price, best in, #1, top rated, soft wash, soft washing, roof cleaning, window cleaning, any chemical or equipment brand, any competitor name, any lighting word left over from the port.

## Platform

- businessSlug: `replace-before-launch` (placeholder; the human swaps in the real platform slug after the client signs up).
- Domain: `https://www.shocospressurecleaning.com` as a placeholder. No domain is registered and the name spelling is unresolved, so the real domain is UNRESOLVED. The site deploys first on a Vercel URL with prelaunch: true and the domain attaches at launch. www is primary; the apex redirects to www.

## Contact

- Phone: (772) 626-0226, E.164 `+17726260226` [gbp].
- Email: none on the profile. UNRESOLVED. The quote form posts to the platform; no email appears on the site.
- Hours: Monday through Saturday, 6:00 to 21:00, America/New_York. Sunday closed. [jacob; set on the profile 2026-10-22, pending Google review]. Write "Monday through Saturday, 6am to 9pm. Closed Sunday."
- Address: none. Service-area business, "No location; deliveries and home services only" [gbp]. address.street null, no map embed, no street in schema. If the schema requires a city, use the primary city below and flag it.
- Lat/lng: if the schema requires coordinates, use Port St. Lucie city center, 27.2730, -80.3582 [geo], and flag it; otherwise null.
- Service area on the profile [gbp], in this order: Martin County FL, St. Lucie County FL, Palm Beach County FL, Indian River County FL.

## Services (in this order)

General knowledge is allowed on these pages; specific claims about this company are not unless they are in this brief. Which cleaners, pressures, or sealers he uses is UNKNOWN: never name one.

### Service 1: House Washing
- slug: house-washing
- Includes [gbp]: house pressure washing.
- General facts [general]: Florida humidity, salt air and shade grow algae, mildew and mold on stucco, siding, soffits and painted block; a house wash removes the green and black streaks and the dirt film; most exterior surfaces are cleaned with controlled pressure matched to the surface; a clean exterior is also what paint and sealers need before they go on.
- Customer questions: will it damage my paint or stucco (pressure is matched to the surface, general)? how often (typically once a year in Florida, general)? do I need to be home (ask at the quote)? what about screens and windows (ask at the quote; window cleaning is not a service here)?

### Service 2: Paver Cleaning and Sealing
- slug: paver-cleaning-and-sealing
- Includes [gbp]: paver cleaning, paver sealing, paver maintenance.
- General facts [general]: pavers collect dirt, algae and weeds in the joints; cleaning lifts that out; joint sand is typically replaced after cleaning; a sealer typically deepens the color, locks the joint sand, and slows new growth and staining; resealing is typically needed every few years depending on sun, traffic and sprinklers. Maintenance means periodic cleaning and resealing of pavers that were sealed before.
- Customer questions: how long before I can walk or drive on it (depends on the sealer, answered at the quote)? will sealing make it slippery (ask at the quote)? can you fix sunken pavers (not a service here; do not claim it)? wet look or natural look (ask at the quote)?

### Service 3: Driveway Cleaning
- slug: driveway-cleaning
- Includes [gbp]: driveway cleaning.
- General facts [general]: concrete and paver driveways in Florida pick up tire marks, oil, rust from sprinklers and well water, mildew and algae; surface cleaning removes the film and most marks; some rust and oil stains need spot treatment and may not come out completely.
- Customer questions: will the rust come out (often improves, not always fully, general)? how long does it take (a typical driveway is a few hours, general)? concrete and pavers both (yes)?

### Service 4: Pool Deck Cleaning
- slug: pool-deck-cleaning
- Includes [gbp]: pool deck cleaning.
- General facts [general]: pool decks get slick from algae and mildew, especially in shade and where water pools; cleaning restores the surface and the grip; works on concrete, pavers, travertine and cool deck coatings with pressure matched to the surface.
- Customer questions: is it safe for travertine and cool deck (pressure is matched to the surface, general)? can you do it while the pool is in use (ask at the quote)?

### Service 5: Pool Enclosure Cleaning
- slug: pool-enclosure-cleaning
- Includes [gbp]: pool enclosure cleaning.
- General facts [general]: screen enclosures (pool cages) collect mildew, pollen and dirt on the screens and the aluminum frame; cleaning brightens the frame and lets light back through the screens; done with low pressure so the screens are not damaged.
- Customer questions: will it tear the screens (low pressure on screens, general)? do you clean the inside and outside (ask at the quote)?

### Service 6: Gutter Cleaning
- slug: gutter-cleaning
- Includes [gbp]: gutter cleaning.
- General facts [general]: clogged gutters overflow onto fascia, stucco and the foundation line and breed mosquitoes in Florida; cleaning clears leaves and debris so water runs to the downspouts; the outside of the gutter is typically washed with the house to remove the black streaks.
- Customer questions: do you clean the outside streaks too (typically with a house wash, general)? how often (ask at the quote)?

## What We Clean (homepage tabbed component) [gbp for the list, general for the text]

One tab per service above that has at least one real photo from section 3, in the order above. Each tab: the service name, one sentence from that service's general facts, a "Good for" list of three items drawn from that service's section, the photo, and the CTA.

## Why pressure cleaning (homepage benefits) [general unless marked]

- Removes the algae, mildew and mold that Florida humidity grows on every outdoor surface.
- Brings back the color of pavers, concrete and stucco.
- Sealed pavers resist stains and new growth and hold their joint sand.
- A clean pool deck and enclosure mean better grip and more light.
- Clean gutters keep water off your fascia and foundation.
- One company for the house, the driveway, the pavers, the pool area and the gutters [gbp, the service list].
- Open six days a week, 6am to 9pm [jacob].

## How it works (four steps)

Steps 1 and 4 are sourced. Steps 2 and 3 are generic process copy with no timelines, crew sizes, or promises; list them under PROCESS COPY TO CONFIRM in the report and in CLIENT-TODO.
1. Call or send the form. Tell us what needs cleaning: house, driveway, pavers, pool deck, enclosure, or gutters. [gbp: phone; form]
2. Quote. We look at the surfaces and tell you what the job involves. [generic]
3. Clean, and seal if you asked for it. Pressure is matched to each surface. [generic; general]
4. Walkthrough. We look over the finished surfaces with you before we leave. [generic]

## Offer

None sourced. config.offer: null. No promo band.

## Contact form

- Ask for first and last name separately? no
- Ask for the property address? off
- Ask for a ZIP code? optional (four counties; the ZIP tells him whether a lead is in range)
- Show a dropdown of the services above? yes, the six services in order, plus "Several of these" and "Not sure yet"
- Require the email address? no
- Timeframe dropdown: label "When do you want it done?", options "As soon as possible", "Within a month", "Just getting prices", required no
- messageLabel: "Tell us about the job"
- messagePlaceholder: "House, driveway, pavers, pool deck, enclosure, gutters. Rough size if you know it, and whether the pavers have been sealed before."
- submitLabel: "Request My Quote"
- Homepage form section heading: "Ready to see your driveway, pavers and house looking new again?"

## Service areas

- Primary city and state for SEO: Port St. Lucie, FL, the largest city in the 772 area code and in St. Lucie County [geo]. The owner's home base is UNKNOWN; if Jacob names a different city, swap it. Homepage H1: "Pressure Washing and Paver Sealing in Port St. Lucie, FL". Hero paragraph mentions "pressure cleaning" (the local term and the business name) and the four counties by name.
- Area pages (config.serviceAreas, in this order): Port St. Lucie, Fort Pierce, Stuart, Palm City, Jensen Beach, Hobe Sound, Vero Beach, Sebastian, Jupiter, Palm Beach Gardens. Every one is [geo] inside the four profile counties. Write short area pages from true, widely known facts about each place (coastal salt air, humidity, screened pools, paver driveways in newer subdivisions, HOA communities, older concrete in the established neighborhoods, waterfront homes). If you are not confident a sentence is true, cut it. Report any page you consider thin.
- Coverage (config.coverage), one block per profile county, in the profile's order. Before writing it, confirm each town is in that county; cut any that are not and print the cut list.
  - Martin County: Stuart, Palm City, Jensen Beach, Hobe Sound, Port Salerno, Indiantown, Sewall's Point
  - St. Lucie County: Port St. Lucie, Fort Pierce, St. Lucie West, Tradition, Lakewood Park, Hutchinson Island
  - Palm Beach County: Jupiter, Tequesta, Juno Beach, Palm Beach Gardens, North Palm Beach, West Palm Beach, Wellington, Royal Palm Beach
  - Indian River County: Vero Beach, Sebastian, Fellsmere, Gifford, Vero Beach South
- Palm Beach County is large and the profile covers all of it; the list above stops at West Palm Beach and Wellington. Whether he goes south of that (Lake Worth, Boynton, Delray, Boca) is UNRESOLVED.

## Hours

- Monday through Saturday, 6:00 to 21:00, America/New_York. Sunday closed. [jacob]

## Profile URLs

- Google Business Profile: exists, verified, no public URL captured. profiles.gbp null until Jacob supplies the Maps link. UNRESOLVED.
- Facebook, Instagram, Yelp, Nextdoor: none confirmed. Leave off. UNRESOLVED: whether the "Choco's Pressure Cleaning" Facebook ad is this business.

## Testimonials

None available. config.reviews stays []. No testimonials section. No Review or AggregateRating JSON-LD.

## Photos and videos

Filled by section 3 of the build prompt. Real client media only. Hero, service photos, gallery, before-after pairs and videos from the MEDIA.md table. No stock, no generated images.

## Brand notes

- Logo: if section 3 found one, it is the header logo and the palette source. Otherwise theme.logo stays null and the header renders the wordmark. UNRESOLVED either way: a clean transparent PNG or SVG from the owner.
- Palette: if a logo exists, primary and accent come from its two dominant colors (print them). If not, the fallback is a water palette: deep ocean blue as primary, clear aqua as the single accent, cool off-white background. Clean and bright, the opposite of the dirt it removes. No gradients, no water-drop icons, no splash graphics, no cartoon pressure washers.
- Typography, spacing, radius, shadows, motion: exactly as the KA Lights build. Do not restyle.
- Owner's own words [gbp]: "house Pressure Washing", "Pavers cleaning and Sealing", "We do quality work". "Quality work" may be used as a line, never inflated into "the best".
- Competitors: none named. Never name one.

## UNKNOWN (each becomes null or is left out; this is the list to chase)

- The correct spelling of the business name (Shocos / Socrates / Choco's) and the legal name
- Real platform businessSlug (placeholder in use)
- Domain
- Owner's name
- Email address
- Home base city (Port St. Lucie assumed for SEO)
- Years in business
- Whether he takes commercial jobs
- Whether he sands and resands paver joints as part of sealing, and what look (wet or natural) he offers
- Whether "pool enclosure cleaning" covers the inside of the screens
- How far south into Palm Beach County he goes
- Google Maps link for the profile
- Whether the "Choco's Pressure Cleaning" Facebook ad (My Living Magazine, Indian River) is him, and if so the Facebook page URL
- A clean logo file
- Insurance status (not asked, not claimed)
- Whether the profile category should be changed from "Cleaners" to "Pressure washing service" (Jacob's call, not a site fact)
