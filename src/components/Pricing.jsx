import { Check } from 'lucide-react';
import pricingPackages from '../data/pricing';
import { scrollToSection } from '../utils/scroll';

function PricingCard({ pkg }) {
  const handleBookPackage = (e) => {
    e.preventDefault();
    scrollToSection('#appointment-form');
  };

  return (
    <article
      className={`relative flex flex-col h-full w-full border transition-shadow duration-300 min-w-0 overflow-visible ${
        pkg.popular
          ? 'bg-[#2C1810] border-[#2C1810] shadow-md lg:shadow-lg'
          : 'bg-[#FEFCF9] border-[#E8DDD0] hover:shadow-md'
      }`}
      aria-label={`${pkg.name} package at ${pkg.price}`}
    >
      {pkg.popular && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
          <span className="inline-block bg-[#C9A96E] px-3.5 py-1 font-sans text-[0.6rem] font-semibold tracking-[0.16em] uppercase text-white whitespace-nowrap leading-none">
            Most Popular
          </span>
        </div>
      )}

      <div
        className={`flex flex-col flex-1 h-full gap-4 md:gap-5 p-8 md:p-9 ${
          pkg.popular ? 'pt-9 md:pt-10' : ''
        }`}
      >
        <div className="flex flex-col gap-3 md:gap-3.5">
          <h3
            className={`font-sans text-[0.6875rem] font-semibold tracking-[0.2em] uppercase ${
              pkg.popular ? 'text-[#C9A96E]' : 'text-[#9A8A7D]'
            }`}
          >
            {pkg.name}
          </h3>

          <p
            className={`font-serif text-3xl md:text-[2rem] font-medium leading-none ${
              pkg.popular ? 'text-[#FEFCF9]' : 'text-[#2C1810]'
            }`}
          >
            {pkg.price}
          </p>
        </div>

        <p
          className={`font-sans text-[0.8125rem] leading-[1.7] ${
            pkg.popular ? 'text-[#DFC08C]' : 'text-[#6B5B4E]'
          }`}
        >
          {pkg.tagline}
        </p>

        <div
          className={`w-10 h-px shrink-0 ${pkg.popular ? 'bg-[#C9A96E]' : 'bg-[#E8DDD0]'}`}
          aria-hidden="true"
        />

        <ul className="flex flex-col gap-3.5 md:gap-4 flex-1 min-h-0" aria-label="Package includes">
          {pkg.includes.map((item, i) => (
            <li key={i} className="flex items-start gap-3 min-w-0">
              <Check
                size={14}
                strokeWidth={2}
                className="mt-0.5 shrink-0 text-[#C9A96E]"
                aria-hidden="true"
              />
              <span
                className={`font-sans text-[0.875rem] leading-[1.7] ${
                  pkg.popular ? 'text-[#D4C4B0]' : 'text-[#6B5B4E]'
                }`}
              >
                {item}
              </span>
            </li>
          ))}
        </ul>

        <a
          href="#appointment-form"
          id={`book-package-${pkg.id}`}
          onClick={handleBookPackage}
          className={`${
            pkg.popular ? 'btn-champagne' : 'btn-outline'
          } w-full justify-center mt-auto min-h-[2.75rem]`}
          aria-label={`Book the ${pkg.name} package`}
        >
          Book Package
        </a>
      </div>
    </article>
  );
}

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="section-padding bg-[#FAF7F2] overflow-x-clip"
      style={{ paddingTop: '2rem', paddingBottom: '3.5rem' }}
      aria-labelledby="pricing-heading"
    >
      <div className="site-container w-full flex flex-col gap-10 md:gap-12 lg:gap-14">
        <div className="flex flex-col gap-4 md:gap-6 lg:gap-8">
          {/* Header — full container width, centered */}
          <header className="w-full text-center flex flex-col items-center gap-4 md:gap-5">
            <div className="flex w-full items-center justify-center gap-3">
              <span className="w-10 h-px bg-[#C9A96E] shrink-0" aria-hidden="true" />
              <span className="eyebrow">Packages</span>
              <span className="w-10 h-px bg-[#C9A96E] shrink-0" aria-hidden="true" />
            </div>
            <div className="flex w-full flex-col items-center text-center gap-3 md:gap-3.5">
              <h2
                id="pricing-heading"
                className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] font-medium text-[#2C1810] leading-[1.12] text-pretty text-center max-w-3xl"
              >
                Choose Your Experience
              </h2>
              <p className="font-sans text-[0.9375rem] md:text-base text-[#6B5B4E] leading-[1.7] text-balance text-center max-w-2xl">
                Thoughtfully designed packages for every kind of beauty day.
              </p>
            </div>
          </header>

          {/* Cards — constrained width with comfortable column gap */}
          <div
            className="mx-auto grid w-full min-w-0 grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 items-stretch"
            style={{ maxWidth: '75rem' }}
          >
            {pricingPackages.map((pkg) => (
              <div key={pkg.id} className="flex min-w-0 h-full w-full pt-3 md:pt-4">
                <PricingCard pkg={pkg} />
              </div>
            ))}
          </div>
        </div>

        {/* Currency disclaimer */}
        <p className="font-sans text-[0.75rem] text-[#9A8A7D] text-center max-w-2xl mx-auto leading-relaxed">
          All prices are in Australian Dollars (AUD). Prices are indicative. Please enquire for a personalised quote.
        </p>
      </div>
    </section>
  );
}
