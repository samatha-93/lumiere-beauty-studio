import { Quote } from 'lucide-react';
import testimonials from '../data/testimonials';

function TestimonialCard({ testimonial, className = '' }) {
  return (
    <article
      className={`flex flex-col h-full w-full bg-[#FAF7F2] border border-[#E8DDD0] min-w-0 gap-4 ${className}`}
      style={{ padding: '1.75rem' }}
      aria-label={`Testimonial from ${testimonial.name}`}
    >
      <Quote
        size={24}
        strokeWidth={1}
        className="text-[#C9A96E]/90 shrink-0"
        aria-hidden="true"
      />

      <blockquote className="font-serif text-[0.9375rem] md:text-base lg:text-[1.0625rem] font-normal italic leading-[1.8] text-[#4A2E22] flex-1 text-pretty break-words">
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>

      <div className="w-8 h-px bg-[#C9A96E]/80 shrink-0" aria-hidden="true" />

      <footer className="flex flex-col gap-1.5">
        <p className="font-sans text-[0.875rem] font-500 text-[#2C1810] leading-snug">
          {testimonial.name}
        </p>
        <p className="font-sans text-[0.75rem] text-[#9A8A7D] tracking-wide leading-relaxed">
          {testimonial.service}
        </p>
      </footer>
    </article>
  );
}

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="section-padding bg-[#FEFCF9] overflow-x-clip"
      style={{ paddingTop: '2.75rem', paddingBottom: '3rem' }}
      aria-labelledby="testimonials-heading"
    >
      <div className="site-container w-full flex flex-col gap-6 md:gap-7 lg:gap-8">
        {/* Header — full-width centered */}
        <header className="w-full text-center">
          <div className="flex w-full flex-col items-center gap-3 md:gap-3.5">
            <div className="flex w-full items-center justify-center gap-3">
              <span className="w-10 h-px bg-[#C9A96E] shrink-0" aria-hidden="true" />
              <span className="eyebrow">Experiences</span>
              <span className="w-10 h-px bg-[#C9A96E] shrink-0" aria-hidden="true" />
            </div>
            <h2
              id="testimonials-heading"
              className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] font-medium text-[#2C1810] leading-[1.12] text-pretty text-center max-w-3xl"
            >
              Client Stories
            </h2>
          </div>
        </header>

        {/* Testimonial cards — 1 col mobile, 2 col tablet, 3 col desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7 lg:gap-8 items-stretch min-w-0">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
              className={
                index === 2
                  ? 'md:col-span-2 md:max-w-lg md:justify-self-center lg:col-span-1 lg:max-w-none lg:justify-self-stretch'
                  : ''
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}
