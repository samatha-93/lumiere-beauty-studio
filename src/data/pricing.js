const pricingPackages = [
  {
    id: 'essential',
    name: 'Essential',
    price: 'A$85',
    tagline: 'For everyday beauty maintenance.',
    popular: false,
    includes: [
      'Precision Haircut',
      'Wash & Blow-dry',
      'Basic Manicure',
      'Brow Shaping',
    ],
  },
  {
    id: 'signature',
    name: 'Signature',
    price: 'A$150',
    tagline: 'Our most loved complete experience.',
    popular: true,
    includes: [
      'Advanced Styling & Cut',
      'Gloss / Root Refresh',
      'Spa Manicure & Pedicure',
      'Express Facial',
    ],
  },
  {
    id: 'luxury',
    name: 'Luxury',
    price: 'A$280',
    tagline: 'For a complete indulgent beauty experience.',
    popular: false,
    includes: [
      'Creative Colour & Styling',
      'Deep Conditioning Treatment',
      'Signature Facial',
      '60-minute Relaxation Treatment',
    ],
  },
];

export default pricingPackages;
