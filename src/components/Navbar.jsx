import { useState, useEffect, useCallback } from 'react';
import { Menu, X } from 'lucide-react';
import { scrollToSection } from '../utils/scroll';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = useCallback((e, href) => {
    e.preventDefault();
    setMobileOpen(false);
    scrollToSection(href);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-shadow duration-300 bg-[#FEFCF9] ${
          isScrolled
            ? 'shadow-sm border-b border-[#E8DDD0]'
            : 'border-b border-[#FEFCF9]'
        }`}
        style={{ height: 'var(--navbar-height)' }}
      >
        <div className="site-container h-full">
          <div className="h-full grid grid-cols-[1fr_auto] lg:grid-cols-[1fr_auto_1fr] items-center gap-4">
            {/* Logo — hidden while mobile drawer is open to prevent duplicate ghost */}
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, '#home')}
              className={`font-serif text-[1.25rem] sm:text-[1.35rem] font-medium tracking-[0.12em] text-[#2C1810] uppercase transition-opacity duration-200 hover:opacity-75 justify-self-start shrink-0 leading-none py-0.5 ${
                mobileOpen ? 'invisible lg:visible' : ''
              }`}
              aria-label="Lumière Beauty Studio — Return to top"
            >
              Lumière
            </a>

            {/* Desktop Nav — centred */}
            <nav
              className="hidden lg:flex items-center justify-center gap-6 xl:gap-8 self-center"
              aria-label="Main navigation"
            >
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="font-sans text-[0.6875rem] font-500 tracking-[0.14em] uppercase text-[#6B5B4E] hover:text-[#2C1810] transition-colors duration-200 whitespace-nowrap leading-none py-0.5"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex justify-self-end self-center">
              <a
                href="#appointment-form"
                onClick={(e) => handleNavClick(e, '#appointment-form')}
                className="btn-primary text-[0.6875rem]"
              >
                Book Appointment
              </a>
            </div>

            {/* Mobile Hamburger */}
            <button
              className={`lg:hidden p-2 -mr-2 text-[#2C1810] hover:text-[#C9A96E] transition-colors duration-200 justify-self-end ${
                mobileOpen ? 'invisible' : ''
              }`}
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
            >
              <Menu size={22} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-[55] bg-black/30 lg:hidden"
          onClick={() => setMobileOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile Menu Drawer */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-label="Mobile navigation menu"
        aria-modal="true"
        aria-hidden={!mobileOpen}
        className={`fixed top-0 right-0 z-[60] h-full w-72 max-w-[85vw] bg-[#FEFCF9] shadow-2xl flex flex-col lg:hidden transition-transform duration-300 ease-in-out ${
          mobileOpen ? 'translate-x-0' : 'translate-x-full pointer-events-none'
        }`}
      >
        {/* Mobile Menu Header */}
        <div className="flex items-center justify-between px-5 border-b border-[#E8DDD0]" style={{ height: 'var(--navbar-height)' }}>
          <span className="font-serif text-[1.2rem] font-medium tracking-[0.12em] text-[#2C1810] uppercase leading-none">
            Lumière
          </span>
          <button
            onClick={() => setMobileOpen(false)}
            className="p-1 text-[#6B5B4E] hover:text-[#2C1810] transition-colors"
            aria-label="Close menu"
          >
            <X size={20} strokeWidth={1.5} />
          </button>
        </div>

        {/* Mobile Nav Links */}
        <nav className="flex flex-col flex-1 px-5 py-8 gap-1 overflow-y-auto" aria-label="Mobile navigation">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="py-3 font-sans text-[0.8125rem] font-500 tracking-[0.12em] uppercase text-[#6B5B4E] hover:text-[#2C1810] border-b border-[#E8DDD0] transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Mobile CTA */}
        <div className="px-5 pt-4 pb-[max(2.5rem,env(safe-area-inset-bottom))]">
          <a
            href="#appointment-form"
            onClick={(e) => handleNavClick(e, '#appointment-form')}
            className="btn-primary w-full justify-center"
          >
            Book Appointment
          </a>
        </div>
      </div>
    </>
  );
}
