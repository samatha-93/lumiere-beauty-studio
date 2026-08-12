import hairStylingImg from '../assets/images/service-hair-styling.jpg';
import hairColourImg from '../assets/images/service-hair-colour.jpg';
import facialImg from '../assets/images/service-facial.jpg';
import bridalImg from '../assets/images/service-bridal.jpg';
import nailsImg from '../assets/images/service-nails.jpg';
import browsImg from '../assets/images/service-brows.jpg';

const services = [
  {
    id: 'hair-styling',
    name: 'Hair Styling',
    price: 'From A$55',
    description:
      'Bespoke cuts, blow-dries and styling tailored to your features and lifestyle.',
    image: hairStylingImg,
    alt: 'Professional hairstylist performing a precision cut and blow-dry',
  },
  {
    id: 'hair-colour',
    name: 'Hair Colour',
    price: 'From A$75',
    description:
      'Expert colour services including highlights, balayage and refined tonal transformations.',
    image: hairColourImg,
    alt: 'Stylist applying balayage highlights to client hair',
  },
  {
    id: 'facial-skincare',
    name: 'Facial & Skincare',
    price: 'From A$65',
    description:
      'Rejuvenating facial treatments designed to leave your skin fresh, hydrated and radiant.',
    image: facialImg,
    alt: 'Esthetician performing a luxury facial skincare treatment',
  },
  {
    id: 'bridal-makeup',
    name: 'Bridal Makeup',
    price: 'From A$120',
    description:
      'Elegant, long-lasting makeup designed for your most memorable occasions.',
    image: bridalImg,
    alt: 'Makeup artist applying elegant bridal makeup',
  },
  {
    id: 'manicure-pedicure',
    name: 'Manicure & Pedicure',
    price: 'From A$60',
    description:
      'Refined nail care and relaxing treatments with a choice of classic finishes.',
    image: nailsImg,
    alt: 'Professional manicure treatment with champagne toned nails',
  },
  {
    id: 'brows-lashes',
    name: 'Brows & Lashes',
    price: 'From A$45',
    description:
      'Precision brow shaping and lash styling for a polished, defined look.',
    image: browsImg,
    alt: 'Precision eyebrow shaping and lash styling treatment',
  },
];

export default services;
