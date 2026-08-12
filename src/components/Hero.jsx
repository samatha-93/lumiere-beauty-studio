import heroImg from '../assets/images/hero.jpg';
import { scrollToSection } from '../utils/scroll';

export default function Hero() {
  const handleNav = (e, href) => {
    e.preventDefault();
    scrollToSection(href);
  };

  return (
    <section
      id="home"
      className="bg-[#FAF7F2] overflow-x-clip"
      style={{ paddingTop: 'var(--navbar-height)' }}
      aria-labelledby="hero-heading"
    >
      <div className="site-container w-full pt-6 pb-9 sm:pt-8 sm:pb-10 md:pt-9 md:pb-11 lg:pt-10 lg:pb-12 xl:pt-11 xl:pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 xl:gap-12 items-center min-w-0">

          {/* Left — Text Content */}
          <div className="order-1 min-w-0 lg:max-w-xl lg:self-center">
            <div className="flex items-center gap-3 mb-3 md:mb-4 animate-fade-up">
              <span className="w-10 h-px bg-[#C9A96E] shrink-0" aria-hidden="true" />
              <span className="eyebrow">Premium Beauty Studio</span>
            </div>

            <h1
              id="hero-heading"
              className="font-serif text-4xl sm:text-[2.75rem] lg:text-[3.125rem] xl:text-[3.375rem] font-medium leading-[1.08] text-[#2C1810] mb-3 md:mb-4 animate-fade-up-delay-1"
            >
              Discover Your
              <br />
              <em>True Elegance</em>
            </h1>

            <p className="font-sans text-base md:text-[1.0625rem] leading-[1.75] text-[#6B5B4E] max-w-lg mb-5 md:mb-6 animate-fade-up-delay-2">
              A refined beauty experience where expert artistry, thoughtful care and timeless style come together.
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-3.5 animate-fade-up-delay-3">
              <a
                href="#appointment-form"
                id="hero-book-btn"
                onClick={(e) => handleNav(e, '#appointment-form')}
                className="btn-primary w-full sm:w-auto sm:min-w-[12.5rem]"
              >
                Book an Appointment
              </a>
              <a
                href="#services"
                id="hero-services-btn"
                onClick={(e) => handleNav(e, '#services')}
                className="btn-outline w-full sm:w-auto sm:min-w-[12.5rem]"
              >
                Explore Services
              </a>
            </div>

            <div
              className="mt-7 md:mt-8 pt-5 md:pt-6 border-t border-[#E8DDD0] inline-grid grid-cols-3 gap-3 sm:gap-4 md:gap-6 w-fit max-w-md self-start animate-fade-up-delay-3"
              aria-label="Studio highlights"
            >
              <div className="min-w-0">
                <p className="font-serif text-2xl sm:text-[1.75rem] font-medium text-[#2C1810] leading-none">10+</p>
                <p className="eyebrow text-[0.625rem] text-[#9A8A7D] mt-2 leading-snug">Years</p>
              </div>
              <div className="min-w-0">
                <p className="font-serif text-2xl sm:text-[1.75rem] font-medium text-[#2C1810] leading-none">5K+</p>
                <p className="eyebrow text-[0.625rem] text-[#9A8A7D] mt-2 leading-snug">Clients</p>
              </div>
              <div className="min-w-0">
                <p className="font-serif text-2xl sm:text-[1.75rem] font-medium text-[#2C1810] leading-none">15</p>
                <p className="eyebrow text-[0.625rem] text-[#9A8A7D] mt-2 leading-snug">Professionals</p>
              </div>
            </div>
          </div>

          {/* Right — Hero Image */}
          <div className="order-2 min-w-0 w-full lg:justify-self-end lg:self-center">
            <div className="relative p-2.5 sm:p-3 lg:p-4 max-w-xl lg:max-w-none mx-auto lg:mx-0 w-full">
              <div
                className="absolute inset-2.5 sm:inset-3 lg:inset-4 rounded-sm"
                aria-hidden="true"
                style={{
                  background: 'linear-gradient(135deg, #E8DDD0 0%, #FAF7F2 65%, #C9A96E18 100%)',
                  zIndex: 0,
                }}
              />
              <div
                className="absolute top-2.5 sm:top-3 lg:top-4 right-2.5 sm:right-3 lg:right-4 w-12 h-12 sm:w-14 sm:h-14 pointer-events-none opacity-80"
                aria-hidden="true"
                style={{
                  borderTop: '1.5px solid #C9A96E',
                  borderRight: '1.5px solid #C9A96E',
                  zIndex: 2,
                }}
              />
              <div
                className="absolute bottom-2.5 sm:bottom-3 lg:bottom-4 left-2.5 sm:left-3 lg:left-4 w-12 h-12 sm:w-14 sm:h-14 pointer-events-none opacity-80"
                aria-hidden="true"
                style={{
                  borderBottom: '1.5px solid #C9A96E',
                  borderLeft: '1.5px solid #C9A96E',
                  zIndex: 2,
                }}
              />

              <div
                className="relative overflow-hidden w-full"
                style={{ aspectRatio: '4/5', zIndex: 1 }}
              >
                <img
                  src={heroImg}
                  alt="Elegant Lumière Beauty Studio interior with premium styling chairs and warm golden lighting"
                  className="w-full h-full object-cover img-hover-scale"
                  loading="eager"
                  fetchPriority="high"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
