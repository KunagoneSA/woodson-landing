export interface Translations {
  nav: {
    products: string
    whyWood: string
    configurator: string
    contact: string
  }
  hero: {
    headline: string
    subtitle: string
    cta: string
    badge1: string
    badge2: string
    badge3: string
  }
  problem: {
    title: string
    cardboardTitle: string
    cardboardPoints: string[]
    woodTitle: string
    woodPoints: string[]
  }
  products: {
    title: string
    subtitle: string
    items: { name: string; description: string }[]
  }
  why: {
    title: string
    cards: { title: string; description: string }[]
    proof: string
  }
  configurator: {
    title: string
    subtitle: string
    step1: string
    step2: string
    step3: string
    types: string[]
    width: string
    height: string
    depth: string
    quantity: string
    name: string
    email: string
    company: string
    message: string
    submit: string
    note: string
    success: string
  }
  footer: {
    tagline: string
    contact: string
    links: string
    rights: string
  }
}

export const en: Translations = {
  nav: {
    products: 'Products',
    whyWood: 'Why Wood',
    configurator: 'Configurator',
    contact: 'Contact',
  },
  hero: {
    headline: 'Solid Wood Displays That Outlast Cardboard 30x',
    subtitle:
      'Custom POS displays & retail shelving crafted from 100% Polish pine. Designed for your brand, built to last years — not weeks.',
    cta: 'Get a Free Quote',
    badge1: '100% Solid Pine',
    badge2: 'Eco-Friendly',
    badge3: 'Made in EU',
  },
  problem: {
    title: 'Why Switch from Cardboard?',
    cardboardTitle: 'Cardboard Displays',
    cardboardPoints: [
      'Fall apart after 1-2 months',
      'Look cheap and damage your brand',
      'End up in landfill constantly',
      'Need frequent replacements',
    ],
    woodTitle: 'Woodson Wood Displays',
    woodPoints: [
      'Last 2-3 years of daily use',
      'Premium natural look that elevates your brand',
      '100% recyclable & sustainable',
      'Only 30-40% more than cardboard',
    ],
  },
  products: {
    title: 'Our Products',
    subtitle:
      'Every piece custom-made from solid Polish pine to your exact specifications.',
    items: [
      {
        name: 'Store Display',
        description: 'Eye-catching POS display for retail shelves',
      },
      {
        name: '5-Shelf Rack',
        description: 'Versatile multi-tier product showcase',
      },
      {
        name: 'Carrier',
        description: 'Branded product carrier with handle',
      },
      {
        name: 'Wooden Display',
        description: 'Custom branded display cabinet',
      },
      {
        name: 'Crate',
        description: 'Rustic storage and display crate',
      },
      {
        name: 'Grill Display',
        description: 'Specialized display for BBQ products',
      },
    ],
  },
  why: {
    title: 'Why Choose Woodson',
    cards: [
      {
        title: '30x More Durable',
        description:
          'Our displays last 2-3 years vs. weeks for cardboard. One investment, years of use.',
      },
      {
        title: '100% Solid Pine',
        description:
          'No plywood, no MDF, no chipboard. Real solid wood from Polish sustainable forests.',
      },
      {
        title: 'Custom Designed',
        description:
          'Every display built to your exact product dimensions and brand identity.',
      },
      {
        title: 'Eco-Friendly',
        description:
          '100% natural, recyclable, and biodegradable. Zero harmful chemicals.',
      },
    ],
    proof: 'Trusted by returning B2B clients for over 15 years',
  },
  configurator: {
    title: 'Get Your Custom Quote',
    subtitle:
      "Tell us what you need and we'll prepare a tailored offer within 24 hours.",
    step1: 'Product Type',
    step2: 'Dimensions (cm)',
    step3: 'Quantity',
    types: ['Display', 'Shelf', 'Crate', 'Custom'],
    width: 'Width',
    height: 'Height',
    depth: 'Depth',
    quantity: 'Pieces',
    name: 'Full Name',
    email: 'Email',
    company: 'Company Name',
    message: 'Additional Details',
    submit: 'Request a Quote',
    note: 'We respond within 24 hours',
    success: "Thank you! We'll get back to you within 24 hours.",
  },
  footer: {
    tagline: 'Handcrafted wooden displays from the heart of Poland.',
    contact: 'Contact',
    links: 'Links',
    rights: '© 2026 Greenfire Sp. z o.o. All rights reserved.',
  },
}
