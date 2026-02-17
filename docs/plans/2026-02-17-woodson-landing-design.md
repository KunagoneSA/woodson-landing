# Woodson Landing Page - Design Document

## Overview
Single-page landing page for Woodson (Greenfire Sp. z o.o.) selling custom wooden POS displays and retail shelving to international B2B clients.

## Stack
- Vite + React + TypeScript + Tailwind CSS
- Bilingual: EN/PL with language switcher
- Single-page with smooth scroll navigation

## Color Palette
- Primary: `#1a5c5c` (dark teal from brochure)
- Secondary: `#f5e6d3` (warm beige / natural wood)
- Accent: `#c4913b` (warm gold for CTAs)
- Text: `#1a1a1a` (dark graphite)
- Background: `#faf8f5` (off-white)
- Fonts: Serif headings (premium feel), sans-serif body

## Sections

### 1. Navbar (sticky)
- Logo "Woodson" left
- Nav links: Products | Why Wood | Configurator | Contact
- EN/PL toggle right
- Blur background on scroll

### 2. Hero
- Headline: "Solid Wood Displays That Outlast Cardboard 30x"
- Subtitle: "Custom POS displays & retail shelving crafted from 100% Polish pine. Designed for your brand, built to last years — not weeks."
- CTA: "Get a Free Quote" → scroll to configurator
- Background: full-width product photo placeholder
- Badge: "100% Solid Pine | Eco-Friendly | Made in EU"

### 3. Problem → Solution
- Left: "The Problem with Cardboard Displays" (destroy in 1-2 months, look cheap, not eco)
- Right: "The Woodson Difference" (2-3 year durability, natural premium look, 100% eco, only 30-40% more than cardboard)
- Visual comparison placeholders

### 4. Products Gallery
- 3-column grid: Store Display, 5-Shelf Rack, Carrier, Wooden Display, Crate, Grill Display
- Placeholder images, names, short descriptions
- Hover zoom effect

### 5. Why Choose Woodson (Trust/RTB)
- 4 icon cards:
  - 30x More Durable
  - 100% Solid Pine
  - Custom Designed
  - Eco-Friendly
- Social proof: "Trusted by returning clients for 15+ years"

### 6. Configurator + Contact Form
- 3-step configurator:
  1. Product type: Display, Shelf, Crate, Custom
  2. Approximate dimensions: W × H × D (cm)
  3. Quantity: 1-1000+
- Contact form: Name, Email, Company, Message
- CTA: "Request a Quote"
- Note: "We respond within 24h"

### 7. Footer
- Logo + contact info (Greenfire Sp. z o.o., Chełmek)
- Email: hello@woodson.pl, Phone: +48 882-905-145
- Links: woodson.pl, klejonkanawymiar.pl

## Internationalization
- Language context with EN/PL translations
- All text content in translation files
- URL unchanged, state-based switching

## Images
- Placeholders for now, real product photos to be added later
- Placeholder approach: colored rectangles with product type labels
