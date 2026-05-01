export interface Translations {
  meta: {
    title: string
    description: string
    ogTitle: string
  }
  nav: {
    products: string
    whyWood: string
    process: string
    contact: string
  }
  hero: {
    headline: string
    intro: string
    subtitle: string
    checks: string[]
    cta: string
    heroWord1: string
    heroWord2: string
    heroWord3: string
    seeProjects: string
  }
  problem: {
    label: string
    title: string
    text: string
    subtitle: string
    points: string[]
    outro: string
  }
  solution: {
    label: string
    title: string
    text: string
    subtitle: string
    points: string[]
    outro: string
  }
  comparison: {
    label: string
    heading: string
    title: string
    headers: [string, string]
    rows: [string, string][]
    note: string
    cardboardTitle: string
    woodTitle: string
    cardboardItems: string[]
    woodItems: string[]
    priceLabel: string
    durabilityLabel: string
    durabilityValue: string
  }
  wood: {
    label: string
    title: string
    text: string
    noList: string[]
    subtitle: string
    yesList: string[]
    outro: string
  }
  b2b: {
    title: string
    text: string
    items: { title: string; text: string }[]
  }
  b2c: {
    label: string
    title: string
    text: string
    items: { title: string; text: string }[]
  }
  custom: {
    label: string
    title: string
    text: string
    basisTitle: string
    points: string[]
    personalization: string
    personalizationItems: string[]
    outro: string
    designCta: string
  }
  portfolio: {
    label: string
    title: string
    text: string
    items: string[]
  }
  process: {
    label: string
    title: string
    description: string
    step: string
    steps: { title: string; text: string }[]
  }
  trust: {
    label: string
    title: string
    text: string
    points: string[]
    outro: string
  }
  cta: {
    label: string
    title: string
    text: string
    btn: string
    location: string
  }
  form: {
    name: string
    company: string
    email: string
    phone: string
    message: string
    submit: string
    success: string
    note: string
    error: string
  }
  faq: {
    title: string
    items: { q: string; a: string }[]
  }
  footer: {
    tagline: string
    contact: string
    links: string
    rights: string
  }
  stats: {
    items: string[]
  }
}

export const en: Translations = {
  meta: {
    title: 'Woodson | Solid Wood POS Displays Built to Last',
    description: 'We design and manufacture solid wood POS displays and shelving units, tailored to your products, retail space, and brand. Made in Poland.',
    ogTitle: 'Woodson — Solid Wood POS Displays',
  },
  nav: {
    products: 'Portfolio',
    whyWood: 'Why Wood',
    process: 'Process',
    contact: 'Contact',
  },
  hero: {
    headline: 'Wooden POS displays and shelving that last years, not weeks',
    intro: 'Your products deserve more than a cardboard stand.',
    subtitle:
      'We design and manufacture wooden displays from solid wood, tailored to your products, retail space, and brand identity.',
    checks: [
      'Custom design',
      'Natural wood',
      'Built to last years',
      'Made in Poland',
    ],
    cta: 'Get a quote',
    heroWord1: 'Wooden',
    heroWord2: 'displays',
    heroWord3: 'for years',
    seeProjects: 'See projects \u2192',
  },
  problem: {
    label: 'Problem',
    title: 'Cardboard displays only look good for a moment',
    text: 'Cardboard POS displays are often treated as a quick, temporary solution. After a few weeks of use, they start to warp, deteriorate, and lose their aesthetic appeal.',
    subtitle: 'For your brand, this means:',
    points: [
      'Frequent replacement of POS materials',
      'Additional production and logistics costs',
      'Displays that stop looking professional',
    ],
    outro: "That's why more and more companies are looking for more durable and visually appealing display solutions.",
  },
  solution: {
    label: 'Solution',
    title: 'Wooden displays tailored to your product',
    text: 'At Woodson, we design and manufacture POS shelving and displays from solid wood, tailored to your products, retail space, and brand character.',
    subtitle: 'Our displays:',
    points: [
      'Are stable and durable',
      'Maintain their aesthetic appearance for years',
      'Highlight the quality of the presented product',
      'Can be perfectly fitted to product dimensions and weight',
    ],
    outro: 'A solution that works in stores, showrooms, and points of sale.',
  },
  comparison: {
    label: 'Comparison',
    heading: 'Cardboard or wood?',
    title: 'Cardboard or wooden display?',
    headers: ['Cardboard display', 'Woodson wooden display'],
    rows: [
      ['Durability: a few weeks', 'Durability: up to several years'],
      ['Prone to damage', 'Stable construction'],
      ['Often single-use', 'Multiple reuse'],
      ['Aesthetics deteriorate quickly', 'Natural wood appearance'],
      ['Limited personalization', 'Design tailored to product'],
    ],
    note: 'The price difference is often around 30–40%, while the durability of a wooden display is many times greater.',
    cardboardTitle: 'Cardboard & plastic',
    woodTitle: 'wood',
    cardboardItems: [
      'Falls apart after weeks',
      'Looks cheap',
      "Doesn't build a premium image",
      'Requires constant replacement',
    ],
    woodItems: [
      'Lasts for years',
      'Builds brand image',
      '100% natural wood',
      'Custom design',
    ],
    priceLabel: 'Price difference',
    durabilityLabel: 'Wood durability',
    durabilityValue: 'many times greater',
  },
  wood: {
    label: 'Natural wood',
    title: 'We work exclusively with natural wood',
    text: 'Our displays are made from solid, raw wood.',
    noList: [
      'Furniture boards',
      'MDF',
      'Materials imitating wood',
    ],
    subtitle: 'That makes our displays:',
    yesList: ['Durable', 'Stable', 'Aesthetic', 'Natural'],
    outro: 'Wood is a timeless material that presents products well and emphasizes brand quality.',
  },
  b2b: {
    title: 'How wooden displays support sales',
    text: 'Wooden displays work on multiple levels — from everyday product presentation to building brand image.',
    items: [
      { title: 'In-store product display', text: 'A wooden shelf replaces the standard store shelf. The client provides their own display that sets their products apart from the competition.' },
      { title: 'Highlighting new products & promotions', text: 'A new wine series, limited edition cosmetics? A dedicated stand designed for a specific product attracts attention and builds interest.' },
      { title: 'Building an eco-friendly image', text: 'A wooden display sends a clear signal to customers — the brand uses natural materials and takes a responsible approach to the environment.' },
      { title: 'Organizing retail space', text: "It's not just manufacturers who order displays. Store chain owners use them to organize space and better present their assortment." },
      { title: 'Impulse purchases', text: 'A small, narrow display by the checkout or in a walkway encourages quick, additional purchases. Compact form, big sales impact.' },
      { title: 'Trade shows & events', text: 'Wooden stands look great at trade fairs, in showrooms, and during promotional events. Premium aesthetics that cardboard and plastic cannot provide.' },
    ],
  },
  b2c: {
    label: 'Not just for business',
    title: 'Displays for private use',
    text: "Wooden displays aren't just for business. More and more people order them for homes, offices, and private events.",
    items: [
      { title: 'Home organizer', text: 'For cosmetics, spices, teas, coffees, candles, perfumes, or small accessories.' },
      { title: 'Collection display shelf', text: 'For figurines, plants, candles, books, vinyl, crafts, or any items you want to beautifully showcase.' },
      { title: 'Interior decorative element', text: 'A wooden display can serve as a decorative feature in the kitchen, living room, bathroom, or hallway.' },
      { title: 'Pantry or kitchen stand', text: 'For organizing jars, bottles, snacks, fruits, or kitchen accessories.' },
      { title: 'Desktop display', text: 'For notebooks, pens, office accessories, small gadgets, or work items.' },
      { title: 'Furniture for private events', text: 'At weddings, communions, birthdays, or parties — as a stand for sweets, gifts, place cards, menus, or decorations.' },
      { title: 'Market & fair stand', text: 'If you sell your crafts occasionally — perfect for fairs, markets, and local events.' },
      { title: 'Seasonal display', text: 'For Christmas, Easter, autumn, or other seasonal decorations.' },
      { title: 'Product photography stand', text: 'Can serve as a backdrop or pedestal for photographing candles, cosmetics, jewelry, or crafts for social media.' },
    ],
  },
  custom: {
    label: 'Custom made',
    title: 'Every display is built for a specific product',
    text: "We don't make universal stands — only ones that meet your business needs 100%",
    basisTitle: 'What we consider:',
    points: [
      'product dimensions',
      'product weight',
      'display method',
      'retail space',
      'brand visual identity',
      'and much, much more',
    ],
    personalization: 'Brand personalization',
    personalizationItems: [
      'Prints on wood',
      'Posters & graphics',
      'Laser burning',
      'Engraving',
      'Painting & staining',
      'and other solutions',
    ],
    outro: 'The result is a display that perfectly fits the product and point of sale.',
    designCta: 'Design your display',
  },
  portfolio: {
    label: 'Portfolio',
    title: 'See example projects',
    text: 'We create displays for various industries and products.',
    items: [
      'Displays for the cosmetics industry',
      'Product shelving in stores',
      'Advertising stands at points of sale',
      'Displays for premium products',
      'Showroom shelving',
      'Branded stands with products',
    ],
  },
  process: {
    label: 'Process',
    title: 'How the collaboration works',
    description: 'From idea to finished display — simple and fast.',
    step: 'Step',
    steps: [
      { title: 'Project discussion', text: 'We learn about your product and how it should be displayed.' },
      { title: 'Display design', text: 'We propose a construction tailored to your needs.' },
      { title: 'Quote & details', text: 'We finalize the project details and cost.' },
      { title: 'Production', text: 'We build the display in our workshop.' },
      { title: 'Delivery', text: 'The finished display is delivered to your company or directly to the point of sale.' },
    ],
  },
  trust: {
    label: 'Trust',
    title: 'Many clients come back with new projects',
    text: 'For years, we have been working with companies looking for durable and aesthetic display solutions.',
    points: [
      'We listen to their needs',
      'We advise the best structural solutions',
      'We care about quality of execution',
      'We create displays that work in everyday use',
    ],
    outro: 'Returning clients are the best confirmation of the quality of our work.',
  },
  cta: {
    label: 'Contact',
    title: 'Have an idea for displaying your product?',
    text: "We'll design and build a wooden display tailored to your brand and product.",
    btn: 'Send inquiry',
    location: 'Chełmek, Poland',
  },
  form: {
    name: 'Full name',
    company: 'Company',
    email: 'Email',
    phone: 'Phone',
    message: 'Project / product description',
    submit: 'Send inquiry',
    success: 'Thank you! We will get back to you shortly.',
    note: 'We respond within 24 hours',
    error: 'Something went wrong. Please try again.',
  },
  faq: {
    title: 'Frequently asked questions',
    items: [
      { q: 'Do you handle international orders?', a: 'Yes, we work with clients from various European countries. We arrange transport across the entire EU.' },
      { q: 'Is every display designed individually?', a: 'Yes. We tailor every project to the product, its weight, dimensions, and retail space.' },
      { q: 'How long does a project take?', a: 'The timeline depends on the size and complexity of the project. Simple displays take a few business days, more complex projects up to a few weeks.' },
      { q: 'Do you help with display design?', a: 'Yes. We advise on structural solutions and help refine the project to be functional and durable.' },
      { q: 'What is the minimum order?', a: "We don't have a strict minimum. We handle both single pieces and series of several hundred displays." },
      { q: 'Can I order a display for private use?', a: 'Absolutely. More and more individual clients order organizers, display shelves, and stands for home, office, or private events.' },
      { q: 'What type of wood do you use?', a: 'We work with solid pine and spruce wood. On request, we can apply staining, painting, or varnishing.' },
      { q: 'Do you offer branding on displays?', a: 'Yes. We offer prints on wood, laser burning, engraving, posters and graphics, and painting. We match the branding to your visual identity.' },
    ],
  },
  footer: {
    tagline: 'Custom solid wood displays, designed and manufactured in Poland for clients across Europe.',
    contact: 'Contact',
    links: 'Links',
    rights: '© 2026 Greenfire Sp. z o.o. All rights reserved.',
  },
  stats: {
    items: ['more durable than cardboard', 'years of durability', 'solid wood'],
  },
}
