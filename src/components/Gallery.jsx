import gallery1 from '../assets/images/gallery-1.jpg';
import gallery2 from '../assets/images/gallery-2.jpg';
import gallery3 from '../assets/images/gallery-3.jpg';
import gallery4 from '../assets/images/gallery-4.jpg';
import gallery5 from '../assets/images/gallery-5.jpg';

const galleryImages = [
  {
    id: 'salon-interior',
    src: gallery1,
    alt: 'Elegant Lumière salon interior with marble styling stations and warm golden lighting',
  },
  {
    id: 'makeup-station',
    src: gallery2,
    alt: 'Professional makeup station with illuminated mirror and premium beauty products',
  },
  {
    id: 'hair-wash',
    src: gallery3,
    alt: 'Relaxing luxury hair wash and scalp treatment at the salon basin',
  },
  {
    id: 'bridal-prep',
    src: gallery4,
    alt: 'Bridal makeup preparation area with soft natural light and elegant floral accents',
  },
  {
    id: 'hair-colour',
    src: gallery5,
    alt: 'Professional balayage hair colour application by an expert stylist',
  },
];

function GalleryFigure({ image, className = '' }) {
  return (
    <figure
      className={`relative overflow-hidden group min-w-0 w-full bg-[#E8DDD0]/20 ${className}`}
    >
      <img
        src={image.src}
        alt={image.alt}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
        loading="lazy"
      />
    </figure>
  );
}

export default function Gallery() {
  const [main, topRight, midRight, bottomLeft, bottomRight] = galleryImages;

  return (
    <section
      id="gallery"
      className="section-padding bg-[#FEFCF9] overflow-x-clip"
      style={{ paddingTop: '2.75rem', paddingBottom: '3rem' }}
      aria-labelledby="gallery-heading"
    >
      <div className="site-container w-full">
        {/* Header — full-width centered */}
        <header className="w-full text-center mb-6 md:mb-7 lg:mb-8">
          <div className="flex w-full items-center justify-center gap-3 mb-3 md:mb-3.5">
            <span className="w-10 h-px bg-[#C9A96E] shrink-0" aria-hidden="true" />
            <span className="eyebrow">Our Studio</span>
            <span className="w-10 h-px bg-[#C9A96E] shrink-0" aria-hidden="true" />
          </div>
          <div className="flex w-full flex-col items-center text-center">
            <h2
              id="gallery-heading"
              className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] font-medium text-[#2C1810] mb-2 md:mb-3 leading-[1.12] text-pretty text-center max-w-3xl"
            >
              Gallery
            </h2>
            <p className="font-sans text-[0.9375rem] md:text-base text-[#6B5B4E] leading-[1.75] text-balance text-center max-w-2xl">
              A glimpse into the refined spaces and treatments that define the Lumière experience.
            </p>
          </div>
        </header>

        {/* Editorial gallery layout */}
        <div className="flex flex-col gap-4 md:gap-5 min-w-0">
          {/* Top row: feature image left, two stacked supporting images right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 lg:grid-rows-2 gap-4 md:gap-5 min-w-0 lg:min-h-[380px] xl:min-h-[420px] lg:items-stretch">
            <GalleryFigure
              image={main}
              className="aspect-[4/3] sm:aspect-[3/2] lg:col-span-7 lg:row-span-2 lg:aspect-auto lg:h-full lg:min-h-[260px]"
            />
            <GalleryFigure
              image={topRight}
              className="aspect-[4/3] lg:col-span-5 lg:aspect-auto lg:h-full lg:min-h-0"
            />
            <GalleryFigure
              image={midRight}
              className="aspect-[4/3] lg:col-span-5 lg:aspect-auto lg:h-full lg:min-h-0"
            />
          </div>

          {/* Bottom row: two equal supporting images */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5 min-w-0">
            <GalleryFigure image={bottomLeft} className="aspect-[4/3] sm:aspect-[3/2]" />
            <GalleryFigure image={bottomRight} className="aspect-[4/3] sm:aspect-[3/2]" />
          </div>
        </div>
      </div>
    </section>
  );
}
