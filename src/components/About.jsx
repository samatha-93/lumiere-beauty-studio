import aboutImg from '../assets/images/about.jpg';

const stats = [
  { value: '10+', label: 'Years of Experience' },
  { value: '5K+', label: 'Client Visits' },
  { value: '15', label: 'Beauty Professionals' },
];

export default function About() {
  return (
    <section
      id="about"
      className="section-padding tight-bottom bg-[#FEFCF9] overflow-x-clip"
      aria-labelledby="about-heading"
    >
      <div className="site-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-start lg:items-center min-w-0">

          {/* Left — Image */}
          <div className="relative order-2 lg:order-1 min-w-0 w-full">
            <div className="relative p-4 sm:p-5 lg:p-6">
              {/* Background accent — contained */}
              <div
                className="absolute bottom-4 left-4 sm:bottom-5 sm:left-5 w-3/4 h-3/4 bg-[#E8DDD0] pointer-events-none"
                aria-hidden="true"
                style={{ zIndex: 0 }}
              />
              <div className="relative overflow-hidden w-full" style={{ aspectRatio: '3/4', zIndex: 1 }}>
                <img
                  src={aboutImg}
                  alt="Professional Lumière Beauty Studio stylist consulting with a client in an elegant salon setting"
                  className="w-full h-full object-cover img-hover-scale"
                  loading="lazy"
                />
              </div>
              {/* Gold accent — inside frame */}
              <div
                className="absolute top-4 right-4 sm:top-5 sm:right-5 w-16 h-16 sm:w-20 sm:h-20 pointer-events-none"
                aria-hidden="true"
                style={{
                  borderTop: '2px solid #C9A96E',
                  borderRight: '2px solid #C9A96E',
                  zIndex: 2,
                }}
              />
            </div>
          </div>

          {/* Right — Content */}
          <div className="order-1 lg:order-2 min-w-0 w-full">
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-5 md:mb-6">
              <span className="w-10 h-px bg-[#C9A96E] shrink-0" aria-hidden="true" />
              <span className="eyebrow">Our Story</span>
            </div>

            <h2
              id="about-heading"
              className="font-serif text-3xl sm:text-4xl lg:text-[2.625rem] font-medium leading-[1.15] text-[#2C1810] mb-6 md:mb-8"
            >
              Beauty, thoughtfully
              <br />
              <em style={{ fontStyle: 'italic' }}>redefined.</em>
            </h2>

            <div className="space-y-5 mb-8 md:mb-10">
              <p className="font-sans text-[0.9375rem] md:text-base leading-[1.8] text-[#6B5B4E]">
                Lumière Beauty Studio is a modern sanctuary created for those who believe beauty should feel personal, effortless and timeless.
              </p>
              <p className="font-sans text-[0.9375rem] md:text-base leading-[1.8] text-[#6B5B4E]">
                Our experienced beauty professionals combine thoughtful consultation, refined techniques and carefully selected products to create results that feel uniquely yours.
              </p>
            </div>

            {/* Gold divider */}
            <div className="gold-divider mb-7 md:mb-8" aria-hidden="true" />

            {/* Stats — stacked on narrow mobile, 3-column from sm+ */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-6 md:gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="min-w-0">
                  <p className="font-serif text-3xl font-medium text-[#2C1810]">{stat.value}</p>
                  <p className="eyebrow text-[0.625rem] text-[#9A8A7D] mt-2 leading-snug">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
