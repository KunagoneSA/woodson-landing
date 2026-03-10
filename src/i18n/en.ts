export interface Translations {
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
  }
  problem: {
    title: string
    text: string
    subtitle: string
    points: string[]
    outro: string
  }
  solution: {
    title: string
    text: string
    subtitle: string
    points: string[]
    outro: string
  }
  comparison: {
    title: string
    headers: [string, string]
    rows: [string, string][]
    note: string
  }
  wood: {
    title: string
    text: string
    noList: string[]
    subtitle: string
    yesList: string[]
    outro: string
  }
  custom: {
    title: string
    text: string
    points: string[]
    outro: string
  }
  portfolio: {
    title: string
    text: string
    items: string[]
  }
  process: {
    title: string
    steps: { title: string; text: string }[]
  }
  trust: {
    title: string
    text: string
    points: string[]
    outro: string
  }
  cta: {
    title: string
    text: string
    btn: string
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
}

export const en: Translations = {
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
  },
  problem: {
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
  },
  wood: {
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
  custom: {
    title: 'Every display is built for a specific product',
    text: "We don't make universal stands. Every project is based on:",
    points: [
      'Product dimensions',
      'Product weight',
      'Display method',
      'Retail space',
      'Brand visual identity',
    ],
    outro: 'The result is a display that perfectly fits the product and point of sale.',
  },
  portfolio: {
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
    title: 'How the collaboration works',
    steps: [
      { title: 'Project discussion', text: 'We learn about your product and how it should be displayed.' },
      { title: 'Display design', text: 'We propose a construction tailored to your needs.' },
      { title: 'Quote & details', text: 'We finalize the project details and cost.' },
      { title: 'Production', text: 'We build the display in our workshop.' },
      { title: 'Delivery', text: 'The finished display is delivered to your company or directly to the point of sale.' },
    ],
  },
  trust: {
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
    title: 'Have an idea for displaying your product?',
    text: "We'll design and build a wooden display tailored to your brand and product.",
    btn: 'Send inquiry',
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
  },
  faq: {
    title: 'Frequently asked questions',
    items: [
      { q: 'Do you handle international orders?', a: 'Yes, we work with clients from various European countries.' },
      { q: 'Is every display designed individually?', a: 'Yes. We tailor every project to the product, its weight, dimensions, and retail space.' },
      { q: 'How long does a project take?', a: 'The timeline depends on the size and complexity of the project.' },
      { q: 'Do you help with display design?', a: 'Yes. We advise on structural solutions and help refine the project to be functional and durable.' },
    ],
  },
  footer: {
    tagline: 'Custom solid wood displays, designed and manufactured in Poland for clients across Europe.',
    contact: 'Contact',
    links: 'Links',
    rights: '© 2026 Greenfire Sp. z o.o. All rights reserved.',
  },
}
