import heroImg from '../assets/images/hero.jpg';
import { scrollToSection } from '../utils/scroll';

/** Full-width hero variant — swap into App.jsx if you want to try again */
export default function HeroFullwidth() {
  const handleNav = (e, href) => {
    e.preventDefault();
    scrollToSection(href);
  };

  return (
    <section
      id="home"
      className="relative w-full overflow-x-clip"
      aria-labelledby="hero-heading"
    >
      <div
        className="relative flex items-center min-h-[32rem] sm:min-h-[36rem] md:min-h-[40rem] lg:min-h-[calc(100svh-var(--navbar-height))]"
        style={{ marginTop: 'var(--navbar-height)' }}
      >
        <div className="absolute inset-0 z-0" aria-hidden="true">
          <img
            src={heroImg}
            alt=""
            className="w-full h-full object-cover object-center"
            loading="eager"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#2C1810]/90 via-[#2C1810]/65 to-[#2C1810]/25 sm:from-[#2C1810]/88 sm:via-[#2C1810]/55 sm:to-[#2C1810]/15" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#2C1810]/50 via-transparent to-transparent lg:hidden" />
        </div>

        <div className="site-container relative z-10 w-full py-12 sm:py-14 md:py-16 lg:py-20 xl:py-24">
          <div className="max-w-xl lg:max-w-2xl min-w-0">
            <div className="flex items-center gap-3 mb-5 md:mb-6 animate-fade-up">
              <span className="w-10 h-px bg-[#C9A96E] shrink-0" aria-hidden="true" />
              <span className="eyebrow text-[#C9A96E]">Premium Beauty Studio</span>
            </div>

            <h1
              id="hero-heading"
              className="font-serif text-4xl sm:text-5xl lg:text-[3.25rem] xl:text-6xl font-medium leading-[1.08] text-[#FEFCF9] mb-4 md:mb-5 animate-fade-up-delay-1"
            >
              Discover Your
              <br />
              <em className="text-[#DFC08C]">True Elegance</em>
            </h1>

            <p className="font-sans text-base md:text-[1.0625rem] leading-[1.8] text-[#E8DDD0] max-w-lg mb-7 md:mb-9 animate-fade-up-delay-2">
              A refined beauty experience where expert artistry, thoughtful care and timeless style come together.
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 animate-fade-up-delay-3">
              <a
                href="#contact"
                id="hero-book-btn"
                onClick={(e) => handleNav(e, '#contact')}
                className="btn-champagne w-full sm:w-auto sm:min-w-[12.5rem]"
              >
                Book an Appointment
              </a>
              <a
                href="#services"
                id="hero-services-btn"
                onClick={(e) => handleNav(e, '#services')}
                className="inline-flex items-center justify-center px-7 min-h-[2.75rem] w-full sm:w-auto sm:min-w-[12.5rem] font-sans text-[0.6875rem] font-semibold tracking-[0.15em] uppercase border-2 border-[#FEFCF9]/80 text-[#FEFCF9] bg-transparent hover:bg-[#FEFCF9] hover:text-[#2C1810] hover:border-[#FEFCF9] transition-all duration-300 text-center"
              >
                Explore Services
              </a>
            </div>

            <div
              className="mt-8 md:mt-10 pt-7 md:pt-8 border-t border-[#C9A96E]/35 grid grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-md sm:max-w-lg animate-fade-up-delay-3"
              aria-label="Studio highlights"
            >
              <div className="min-w-0">
                <p className="font-serif text-2xl sm:text-3xl font-medium text-[#FEFCF9] leading-none">10+</p>
                <p className="eyebrow text-[0.625rem] text-[#C9A96E] mt-2.5 leading-snug">Years</p>
              </div>
              <div className="min-w-0">
                <p className="font-serif text-2xl sm:text-3xl font-medium text-[#FEFCF9] leading-none">5K+</p>
                <p className="eyebrow text-[0.625rem] text-[#C9A96E] mt-2.5 leading-snug">Clients</p>
              </div>
              <div className="min-w-0">
                <p className="font-serif text-2xl sm:text-3xl font-medium text-[#FEFCF9] leading-none">15</p>
                <p className="eyebrow text-[0.625rem] text-[#C9A96E] mt-2.5 leading-snug">Professionals</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <span className="sr-only">
        Elegant Lumière Beauty Studio interior with premium styling chairs and warm golden lighting
      </span>
    </section>
  );
}
