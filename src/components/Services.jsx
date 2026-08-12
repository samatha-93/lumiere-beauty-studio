import services from '../data/services';
import { scrollToSection } from '../utils/scroll';

function ServiceCard({ service }) {
  const handleBookNow = (e) => {
    e.preventDefault();
    scrollToSection('#appointment-form');
  };

  return (
    <article
      className="group flex flex-col h-full w-full bg-[#FEFCF9] border border-[#E8DDD0] overflow-hidden transition-shadow duration-300 hover:shadow-lg min-w-0"
      aria-label={`${service.name} service`}
    >
      {/* Image */}
      <div className="overflow-hidden aspect-[4/3] w-full shrink-0">
        <img
          src={service.image}
          alt={service.alt}
          className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
          loading="lazy"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-7 md:p-8">
        {/* Price tag */}
        <p className="eyebrow text-[0.6rem] text-[#C9A96E] mb-4">{service.price}</p>

        {/* Name */}
        <h3 className="font-serif text-xl font-medium text-[#2C1810] mb-4 leading-snug">
          {service.name}
        </h3>

        {/* Gold divider */}
        <div className="w-8 h-px bg-[#C9A96E] mb-5 shrink-0" aria-hidden="true" />

        {/* Description */}
        <p className="font-sans text-[0.875rem] leading-[1.8] text-[#6B5B4E] flex-1 mb-6">
          {service.description}
        </p>

        {/* CTA */}
        <a
          href="#appointment-form"
          id={`book-${service.id}`}
          onClick={handleBookNow}
          className="btn-outline self-start mt-auto min-w-[10rem]"
          aria-label={`Book ${service.name} appointment`}
        >
          Book Now
        </a>
      </div>
    </article>
  );
}

export default function Services() {
  return (
    <section
      id="services"
      className="section-padding tight-top bg-[#FAF7F2] overflow-x-clip"
      style={{ paddingBottom: '2rem' }}
      aria-labelledby="services-heading"
    >
      <div className="site-container">
        {/* Header */}
        <div className="section-intro">
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="w-10 h-px bg-[#C9A96E]" aria-hidden="true" />
            <span className="eyebrow">What We Offer</span>
            <span className="w-10 h-px bg-[#C9A96E]" aria-hidden="true" />
          </div>
          <h2
            id="services-heading"
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-[#2C1810] mb-4"
          >
            Our Signature Services
          </h2>
          <p className="font-sans text-[0.9375rem] md:text-base text-[#6B5B4E] leading-[1.75]">
            Thoughtfully curated treatments designed to enhance your natural beauty.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8 md:gap-x-7 md:gap-y-9 lg:gap-x-8 lg:gap-y-10 items-stretch min-w-0">
          {services.map((service) => (
            <div key={service.id} className="flex min-w-0 h-full w-full">
              <ServiceCard service={service} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
