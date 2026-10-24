import type { SiteConfigInput } from './lib/config-schema'

/**
 * Every business fact for this site lives here and nowhere else. Source:
 * BRIEF.md. Unknown facts are null. A null field renders nothing. A guessed
 * value is a defect.
 *
 * LAUNCH SWITCHES (see the build report): businessSlug, prelaunch, domain,
 * and theme.logo in theme.ts. The spelling of the business name is unresolved;
 * if it changes, it is displayName and legalName below.
 */
const siteConfig = {
  // Placeholder until the client is on the platform. Swap in the real Business.slug before launch.
  businessSlug: 'replace-before-launch',

  // Legal name not supplied (UNRESOLVED): the display name stands in for the copyright line.
  legalName: 'Shocos Pressure Cleaning',
  displayName: 'Shocos Pressure Cleaning',
  tagline: 'House washing and paver cleaning and sealing on the Treasure Coast and in Palm Beach County.',

  schemaType: 'HomeAndConstructionBusiness',

  phone: '+17726260226',
  email: null,

  // Service-area business: no address is published.
  address: null,

  primaryCity: 'Port St. Lucie',
  primaryState: 'FL',

  serviceAreas: [
    { slug: 'port-st-lucie', name: 'Port St. Lucie', county: 'St. Lucie County' },
    { slug: 'fort-pierce', name: 'Fort Pierce', county: 'St. Lucie County' },
    { slug: 'stuart', name: 'Stuart', county: 'Martin County' },
    { slug: 'palm-city', name: 'Palm City', county: 'Martin County' },
    { slug: 'jensen-beach', name: 'Jensen Beach', county: 'Martin County' },
    { slug: 'hobe-sound', name: 'Hobe Sound', county: 'Martin County' },
    { slug: 'vero-beach', name: 'Vero Beach', county: 'Indian River County' },
    { slug: 'sebastian', name: 'Sebastian', county: 'Indian River County' },
    { slug: 'jupiter', name: 'Jupiter', county: 'Palm Beach County' },
    { slug: 'palm-beach-gardens', name: 'Palm Beach Gardens', county: 'Palm Beach County' },
  ],

  services: [
    {
      slug: 'house-washing',
      name: 'House Washing',
      shortDescription:
        'House pressure washing that removes the green and black algae, mildew and dirt film from stucco, siding, soffits and painted block.',
      priceFrom: null,
      priceNote: null,
      image: 'service-house-washing-2.jpg',
      faqs: [
        {
          q: 'Will pressure washing damage my paint or stucco?',
          a: 'Pressure is matched to the surface. Stucco, painted block, siding and soffits are each cleaned at a pressure suited to that material, which is how a house wash takes off the streaks without harming the finish.',
        },
        {
          q: 'How often should a house be washed in Florida?',
          a: 'Typically about once a year. Humidity, salt air and shade keep growing algae and mildew on exterior walls, and shaded walls tend to turn green first.',
        },
        {
          q: 'Should I wash the house before painting it?',
          a: 'Typically, yes. A clean exterior is what paint and sealers need before they go on, so a house wash is a common first step before a paint job.',
        },
        {
          q: 'Do I need to be home during the wash?',
          a: 'Ask at the quote. Tell us what works for you when you call or send the form, and we will sort it out then.',
        },
        {
          q: 'Do you clean screens and windows?',
          a: 'We do not clean windows. If you have questions about screens on the house, ask at the quote.',
        },
      ],
    },
    {
      slug: 'paver-cleaning-and-sealing',
      name: 'Paver Cleaning and Sealing',
      shortDescription:
        'Paver cleaning, paver sealing, and maintenance for pavers that were sealed before. Dirt, algae and weeds come out of the joints first.',
      priceFrom: null,
      priceNote: null,
      image: 'service-pavers-3.jpg',
      faqs: [
        {
          q: 'How long before I can walk or drive on sealed pavers?',
          a: 'It depends on the sealer. We answer that at the quote, along with how long to keep cars off the driveway after the job.',
        },
        {
          q: 'Will sealing make my pavers slippery?',
          a: 'Ask at the quote. It depends on the surface and the finish, and we will go over it for your pavers before any sealer goes down.',
        },
        {
          q: 'Wet look or natural look?',
          a: 'Ask at the quote. Tell us the look you want and we will talk through the options for your pavers.',
        },
        {
          q: 'How often do pavers need to be resealed?',
          a: 'Typically every few years, depending on sun, traffic and sprinklers. Paver maintenance means periodic cleaning and resealing of pavers that were sealed before.',
        },
        {
          q: 'Can you fix sunken pavers?',
          a: 'Releveling sunken pavers is not a service we offer. We clean, seal, and maintain pavers that are already in place.',
        },
      ],
    },
    {
      slug: 'driveway-cleaning',
      name: 'Driveway Cleaning',
      shortDescription:
        'Driveway cleaning for concrete and paver driveways: tire marks, mildew, algae and the dirt film that builds up in the Florida sun and rain.',
      priceFrom: null,
      priceNote: null,
      image: 'service-driveway-1.jpg',
      faqs: [
        {
          q: 'Will the rust stains come out?',
          a: 'Rust from sprinklers and well water often improves, but not always fully. Some rust and oil stains need spot treatment and may not come out completely.',
        },
        {
          q: 'How long does driveway cleaning take?',
          a: 'A typical driveway takes a few hours. The size of the driveway and how much buildup is on it change that.',
        },
        {
          q: 'Do you clean concrete and paver driveways?',
          a: 'Yes, both. Concrete and paver driveways are cleaned with pressure matched to the surface.',
        },
      ],
    },
    {
      slug: 'pool-deck-cleaning',
      name: 'Pool Deck Cleaning',
      shortDescription:
        'Pool deck cleaning for concrete, pavers, travertine and cool deck coatings, to take off the algae and mildew that make a deck slick.',
      priceFrom: null,
      priceNote: null,
      image: null,
      faqs: [
        {
          q: 'Why does my pool deck get slippery?',
          a: 'Algae and mildew grow on pool decks, especially in shade and where water pools. Cleaning takes that growth off and restores the surface and the grip.',
        },
        {
          q: 'Is it safe for travertine and cool deck?',
          a: 'Pressure is matched to the surface. Concrete, pavers, travertine and cool deck coatings are each cleaned at a pressure suited to that material.',
        },
        {
          q: 'Can you clean the deck while the pool is in use?',
          a: 'Ask at the quote. Tell us how you use the pool and we will work out the timing with you.',
        },
      ],
    },
    {
      slug: 'pool-enclosure-cleaning',
      name: 'Pool Enclosure Cleaning',
      shortDescription:
        'Pool enclosure cleaning for screen cages: mildew, pollen and dirt off the screens and the aluminum frame, with low pressure on the screens.',
      priceFrom: null,
      priceNote: null,
      image: null,
      faqs: [
        {
          q: 'Will cleaning tear my pool screens?',
          a: 'Screens are cleaned with low pressure so they are not damaged. The aluminum frame and the screens get the mildew, pollen and dirt taken off.',
        },
        {
          q: 'What does cleaning the enclosure actually change?',
          a: 'It brightens the frame and lets light back through the screens, which tend to collect mildew and pollen in Florida weather.',
        },
        {
          q: 'Do you clean the inside and the outside of the enclosure?',
          a: 'Ask at the quote. Tell us about your enclosure when you call or send the form.',
        },
      ],
    },
    {
      slug: 'gutter-cleaning',
      name: 'Gutter Cleaning',
      shortDescription:
        'Gutter cleaning that clears leaves and debris so water runs to the downspouts instead of over the fascia, stucco and foundation line.',
      priceFrom: null,
      priceNote: null,
      image: null,
      faqs: [
        {
          q: 'Why clean gutters in Florida?',
          a: 'Clogged gutters overflow onto fascia, stucco and the foundation line, and standing water in them breeds mosquitoes. Cleaning lets water run to the downspouts.',
        },
        {
          q: 'Do you clean the black streaks on the outside of the gutters?',
          a: 'The outside of the gutter is typically washed along with a house wash, which is what removes those black streaks.',
        },
        {
          q: 'How often should gutters be cleaned?',
          a: 'Ask at the quote. It depends on the trees around the house, and we will talk it through for your home.',
        },
      ],
    },
  ],

  hours: [
    { day: 'Monday', open: '06:00', close: '21:00' },
    { day: 'Tuesday', open: '06:00', close: '21:00' },
    { day: 'Wednesday', open: '06:00', close: '21:00' },
    { day: 'Thursday', open: '06:00', close: '21:00' },
    { day: 'Friday', open: '06:00', close: '21:00' },
    { day: 'Saturday', open: '06:00', close: '21:00' },
  ],

  yearsInBusiness: null,
  licenseNumber: null,
  insured: null,

  reviews: [],

  // Google Business Profile exists but no public URL was captured. Nothing else is confirmed.
  profiles: { gbp: null, facebook: null, instagram: null, yelp: null },

  faqs: [
    {
      q: 'What do you clean?',
      a: 'Six things: house washing, paver cleaning and sealing, driveway cleaning, pool deck cleaning, pool enclosure cleaning, and gutter cleaning.',
    },
    {
      q: 'Do you seal pavers?',
      a: 'Yes. We clean pavers, seal them, and maintain pavers that were sealed before with periodic cleaning and resealing.',
    },
    {
      q: 'Will pressure washing damage my house or my pavers?',
      a: 'Pressure is matched to the surface. Stucco, siding, concrete, pavers and screens are each cleaned at a pressure suited to that material.',
    },
    {
      q: 'How often should I have it done?',
      a: 'In Florida a house wash is typically done about once a year, and sealed pavers typically need resealing every few years depending on sun, traffic and sprinklers.',
    },
    {
      q: 'Where do you work?',
      a: 'Martin County, St. Lucie County, Palm Beach County and Indian River County, from Sebastian and Vero Beach down through Port St. Lucie and Stuart to Jupiter and Palm Beach Gardens.',
    },
    {
      q: 'What are your hours?',
      a: 'Monday through Saturday, 6am to 9pm. Closed Sunday.',
    },
    {
      q: 'Do I need to be home?',
      a: 'Ask at the quote. Tell us what works for you when you call or send the form.',
    },
    {
      q: 'How much does it cost?',
      a: 'It depends on the surfaces and their size. You get a quote after you call or send the form and we look at what the job involves.',
    },
    {
      q: 'How do I get started?',
      a: 'Call, or send the quote form with what needs cleaning: house, driveway, pavers, pool deck, enclosure, or gutters.',
    },
  ],

  images: {
    hero: 'hero-pavers-sealed-wide.jpg',
    about: null,
    // The first four show on the homepage gallery band. None of these repeat a
    // photo the homepage already uses, so every image on a page has its own alt.
    gallery: [
      'service-pavers-1.jpg',
      'service-pavers-4.jpg',
      'service-driveway-2.jpg',
      'service-pavers-2.jpg',
      'service-house-washing-1.jpg',
      'service-house-washing-2.jpg',
      'service-driveway-1.jpg',
      'service-pavers-3.jpg',
      'hero-pavers-sealed-wide.jpg',
    ],
    heroVideo: {
      desktop: '/video/video-hero-pavers-desktop.mp4',
      mobile: '/video/video-hero-pavers-mobile.mp4',
    },
  },

  videoBands: [
    {
      desktop: '/video/video-house-wash-desktop.mp4',
      mobile: '/video/video-house-wash-mobile.mp4',
      poster: '/video/video-house-wash-poster.jpg',
      alt: 'Wand rinsing the soffit and stucco of a one-story house',
      eyebrow: 'House washing',
      heading: 'Quality work on every surface',
      body: 'House washing, paver cleaning and sealing, driveways, pool decks, enclosures and gutters, for homes across the Treasure Coast and Palm Beach County.',
    },
    {
      desktop: '/video/video-driveway-desktop.mp4',
      mobile: '/video/video-driveway-mobile.mp4',
      poster: '/video/video-driveway-poster.jpg',
      alt: 'Surface cleaner on a concrete driveway, half cleaned, showing the line',
      eyebrow: 'Driveway cleaning',
      heading: 'See the difference on your driveway',
      body: 'Concrete and paver driveways pick up mildew, algae and tire marks. Cleaning takes the film off and brings the color back.',
    },
  ],

  contactForm: {
    splitName: false,
    address: 'off',
    // Four counties: the ZIP tells the owner whether a lead is in range.
    zip: 'optional',
    // The sealed form lists config.services plus "Not sure yet". A "Several of
    // these" option needs a form change and is not available (see report).
    serviceDropdown: true,
    emailRequired: false,
    timeframe: {
      label: 'When do you want it done?',
      options: ['As soon as possible', 'Within a month', 'Just getting prices'],
      required: false,
    },
    messageLabel: 'Tell us about the job',
    messagePlaceholder:
      'House, driveway, pavers, pool deck, enclosure, gutters. Rough size if you know it, and whether the pavers have been sealed before.',
    submitLabel: 'Request My Quote',
  },

  // Flip to false at launch, then redeploy.
  prelaunch: true,

  copy: {
    trade: 'Pressure Washing',
    region: 'the Treasure Coast and Palm Beach County',
    introPhrase: 'does pressure cleaning and paver sealing for homes',
    footerBlurb: 'We do quality work.',
    home: {
      hero: {
        brandLine: { text: 'Clean house. Sealed pavers. Quality work.', highlight: 'Sealed pavers.' },
        h1Lead: 'Pressure Washing and Paver Sealing',
        lead: 'Driveways, pool decks, pool enclosures and gutters too.',
      },
      trustStrip: [
        { icon: 'phone', text: null },
        { icon: 'pin', text: 'Serving the Treasure Coast and Palm Beach County', href: '/service-areas' },
        { icon: 'clock', text: 'Open six days a week, 6am to 9pm' },
        { icon: 'pavers', text: 'Pavers cleaned and sealed' },
      ],
      serviceAreas: { eyebrow: 'Serving the Treasure Coast and Palm Beach County' },
      whatWeClean: {
        eyebrow: 'What we clean',
        heading: { text: 'Pick a surface.', highlight: null },
        body: 'Tap a service to see a photo from the job and what it is good for.',
        hint: 'Tap a service',
      },
      beforeAfter: {
        eyebrow: 'Before and after',
        heading: 'Same driveway, before and after.',
        body: 'Drag the handle, or use the arrow keys, to compare.',
      },
      benefits: {
        eyebrow: 'Why pressure cleaning',
        heading: 'Florida grows green on every outdoor surface.',
        headingSecondLine: 'Cleaning takes it off.',
        cards: [
          { icon: 'growth', title: 'Algae and mildew off', body: 'Removes the algae, mildew and mold that Florida humidity grows on every outdoor surface.' },
          { icon: 'color', title: 'The color comes back', body: 'Brings back the color of pavers, concrete and stucco.' },
          { icon: 'seal', title: 'Sealed pavers hold up', body: 'Sealed pavers typically resist stains and new growth and hold their joint sand.' },
          { icon: 'pool', title: 'Grip and light by the pool', body: 'A clean pool deck can mean better grip, and a clean enclosure lets more light through.' },
          { icon: 'gutter', title: 'Water where it belongs', body: 'Clean gutters keep water off your fascia and foundation.' },
          { icon: 'list', title: 'One company for all of it', body: 'One company for the house, the driveway, the pavers, the pool area and the gutters.' },
          { icon: 'clock', title: 'Six days a week', body: 'Open six days a week, 6am to 9pm.' },
        ],
      },
      galleryTeaser: {
        heading: 'From the job site.',
        subheading: 'Paver driveways, concrete and siding, photographed on the job.',
        cta: 'See the full gallery',
      },
      process: { heading: 'Four steps, start to finish.', linkLabel: 'See how it works' },
      quote: {
        heading: { text: 'Ready to see your driveway, pavers and house looking new again?', highlight: null },
        subheading: 'Send the form or call. Monday through Saturday, 6am to 9pm.',
        note: null,
      },
    },
    how: {
      display: { text: 'How it works.', highlight: null },
      lead: 'Four steps from the first call to the walkthrough.',
      steps: [
        {
          icon: 'call',
          title: 'Call or send the form',
          body: 'Tell us what needs cleaning: house, driveway, pavers, pool deck, enclosure, or gutters.',
        },
        { icon: 'quote', title: 'Quote', body: 'We look at the surfaces and tell you what the job involves.' },
        { icon: 'clean', title: 'Clean, and seal if you asked for it', body: 'Pressure is matched to each surface.' },
        { icon: 'walk', title: 'Walkthrough', body: 'We look over the finished surfaces with you before we leave.' },
      ],
    },
    gallery: {
      display: { text: 'Gallery.', highlight: null },
      lead: 'Paver driveways, concrete and siding, photographed on the job.',
    },
    why: {
      display: { text: 'Quality work.', highlight: null },
      lead: 'House washing and paver cleaning and sealing are the specialties.',
      sections: [
        {
          heading: 'Our specialties',
          body: 'House pressure washing, and paver cleaning and sealing. In the owner’s words: we do quality work.',
        },
        {
          heading: 'Six services, one company',
          body: 'House washing, paver cleaning and sealing, driveway cleaning, pool deck cleaning, pool enclosure cleaning, and gutter cleaning.',
        },
        {
          heading: 'Four counties',
          body: 'Martin County, St. Lucie County, Palm Beach County and Indian River County.',
        },
        { heading: 'Six days a week', body: 'Monday through Saturday, 6am to 9pm. Closed Sunday.' },
      ],
    },
    serviceAreas: {
      display: { text: 'Where we work.', highlight: null },
      lead: 'Four counties on Florida’s east coast: Martin, St. Lucie, Indian River and Palm Beach.',
      closing: 'Not sure you are in range? Call, or send the form with your ZIP code.',
    },
    faq: { display: { text: 'Questions.', highlight: null }, lead: null },
    quote: {
      display: { text: 'Get a quote.', highlight: null },
      lead: 'Tell us what needs cleaning. We look at the surfaces and tell you what the job involves.',
    },
    services: {
      display: { text: 'Services.', highlight: null },
      lead: 'Six services for the outside of your home, led by house washing and paver cleaning and sealing.',
    },
    contact: {
      display: { text: 'Contact.', highlight: null },
      lead: 'Call or send the form. Monday through Saturday, 6am to 9pm.',
    },
  },

  // One tab per service with a real photo. Pool deck, pool enclosure and gutters have none yet.
  whatWeClean: {
    defaultTab: 'paver-cleaning-and-sealing',
    tabs: [
      {
        service: 'house-washing',
        sentence:
          'Florida humidity, salt air and shade grow algae, mildew and mold on stucco, siding and soffits, and a house wash removes the green and black streaks.',
        goodFor: ['Stucco and painted block', 'Vinyl siding and soffits', 'Prep before painting'],
        image: 'service-house-washing-2.jpg',
      },
      {
        service: 'paver-cleaning-and-sealing',
        sentence:
          'Cleaning lifts the dirt, algae and weeds out of the joints, and a sealer typically deepens the color and locks the joint sand.',
        goodFor: ['Faded paver driveways', 'Weeds and algae in the joints', 'Pavers sealed before and due again'],
        image: 'service-pavers-3.jpg',
      },
      {
        service: 'driveway-cleaning',
        sentence:
          'Concrete and paver driveways pick up tire marks, mildew and algae, and surface cleaning removes the film and most of the marks.',
        goodFor: ['Concrete driveways', 'Mildew and algae film', 'Tire marks'],
        image: 'service-driveway-1.jpg',
      },
    ],
  },

  beforeAfter: [
    {
      before: 'before-pavers-1.jpg',
      after: 'after-pavers-1.jpg',
      alt: 'Paver driveway before and after cleaning and sealing',
      caption: 'The same paver driveway before, and after cleaning and sealing.',
      service: 'paver-cleaning-and-sealing',
    },
    {
      before: 'before-pavers-2.jpg',
      after: 'after-pavers-2.jpg',
      alt: 'Cleaned pavers before sealer, and the same driveway after sealing',
      caption: 'Cleaned and ready for sealer, then the same driveway right after sealing.',
      service: 'paver-cleaning-and-sealing',
    },
  ],

  // One block per Google Business Profile county, in the profile's order. Every town checked against its county.
  coverage: [
    { county: 'Martin County', towns: ['Stuart', 'Palm City', 'Jensen Beach', 'Hobe Sound', 'Port Salerno', 'Indiantown', "Sewall's Point"] },
    { county: 'St. Lucie County', towns: ['Port St. Lucie', 'Fort Pierce', 'St. Lucie West', 'Tradition', 'Lakewood Park', 'Hutchinson Island'] },
    {
      county: 'Palm Beach County',
      towns: ['Jupiter', 'Tequesta', 'Juno Beach', 'Palm Beach Gardens', 'North Palm Beach', 'West Palm Beach', 'Wellington', 'Royal Palm Beach'],
    },
    { county: 'Indian River County', towns: ['Vero Beach', 'Sebastian', 'Fellsmere', 'Gifford', 'Vero Beach South'] },
  ],

  // Placeholder domain. No domain is registered and the name spelling is unresolved.
  domain: 'https://www.shocospressurecleaning.com',
} satisfies SiteConfigInput

export default siteConfig
