export interface ServiceData {
  id: string
  label: string
  icon: string
  title: string
  description: string
  benefits: string[]
  cta: string
  color: string
  position: {
    top?: string
    bottom?: string
    left?: string
    right?: string
  }
}

export const services: ServiceData[] = [
  {
    id: 'whitening',
    label: 'Teeth Whitening',
    icon: '✨',
    title: 'Professional Teeth Whitening',
    description:
      'Advanced LED whitening technology that removes years of stains in a single session. Our professional-grade formula is safe, effective, and delivers dramatic results that store-bought kits simply cannot match.',
    benefits: [
      'Visible results after 1st session',
      'Up to 8 shades lighter',
      'Safe & completely painless',
      'Long-lasting results (12–18 months)',
    ],
    cta: 'Book Whitening Session',
    color: '#F59E0B',
    position: { top: '8%', left: '-5%' },
  },
  {
    id: 'veneers',
    label: 'Veneers',
    icon: '💎',
    title: 'Porcelain Veneers',
    description:
      'Ultra-thin porcelain shells custom-crafted to perfection. Veneers instantly transform the shape, size, and color of your teeth — giving you the flawless Hollywood smile you have always dreamed of.',
    benefits: [
      'Custom-fit to your smile',
      'Stain-resistant porcelain',
      'Minimally invasive procedure',
      'Lasts 15–20 years with care',
    ],
    cta: 'Explore Veneer Options',
    color: '#8B5CF6',
    position: { top: '8%', right: '-5%' },
  },
  // Braces & Aligners — 3D overlay not yet polished, re-enable when ready
  // {
  //   id: 'braces',
  //   label: 'Braces & Aligners',
  //   icon: '🦷',
  //   title: 'Orthodontic Treatment',
  //   description: 'From traditional metal braces to virtually invisible clear aligners ...',
  //   benefits: ['Invisible aligner options', 'Average treatment: 12–18 months', 'Digital 3D treatment preview', 'Flexible payment plans'],
  //   cta: 'Start Your Smile Journey',
  //   color: '#10B981',
  //   position: { bottom: '20%', left: '-8%' },
  // },
  {
    id: 'implants',
    label: 'Dental Implants',
    icon: '🔩',
    title: 'Permanent Dental Implants',
    description:
      'State-of-the-art titanium implants that look, feel, and function like your natural teeth. Say goodbye to dentures and bridges — dental implants are the permanent solution for missing teeth.',
    benefits: [
      '98% success rate',
      'Looks and feels natural',
      'No adhesives or removals',
      'Lifetime solution with care',
    ],
    cta: 'Get Implant Consultation',
    color: '#2563EB',
    position: { bottom: '20%', right: '-8%' },
  },
  {
    id: 'cleaning',
    label: 'Deep Cleaning',
    icon: '🫧',
    title: 'Professional Dental Cleaning',
    description:
      'Our thorough prophylaxis cleaning removes stubborn tartar, plaque, and bacteria that regular brushing misses. Combined with a fluoride treatment, it is the foundation of excellent oral health.',
    benefits: [
      'Removes 100% of tartar',
      'Prevents gum disease',
      'Fresh breath guaranteed',
      'Includes digital X-rays',
    ],
    cta: 'Schedule a Cleaning',
    color: '#06B6D4',
    position: { top: '50%', left: '-12%' },
  },
]
