import { MapPin, Phone, Mail } from 'lucide-react';

const socialLinks = [
  {
    label: 'Follow Lumière on Instagram',
    href: 'https://instagram.com/',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: 'Follow Lumière on X',
    href: 'https://twitter.com/',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M13.68 10.62L20.74 3h-1.67l-6.14 6.71L8.04 3H3.2l7.41 10.12L3.2 21h1.67l6.48-7.07L15.96 21h4.84l-7.12-10.38z" />
      </svg>
    ),
  },
  {
    label: 'Follow Lumière on Facebook',
    href: 'https://facebook.com/',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
];

const contactItems = [
  {
    id: 'location',
    icon: MapPin,
    content: (
      <p className="font-sans text-[0.875rem] leading-relaxed text-[#E8DDD0]">
        Sydney, NSW, Australia
      </p>
    ),
  },
  {
    id: 'phone',
    icon: Phone,
    content: (
      <a
        href="tel:+61280001234"
        className="font-sans text-[0.875rem] leading-relaxed text-[#E8DDD0] hover:text-[#C9A96E] transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-[#C9A96E] focus-visible:outline-offset-2 rounded-sm"
      >
        02 8000 1234
      </a>
    ),
  },
  {
    id: 'email',
    icon: Mail,
    content: (
      <a
        href="mailto:hello@lumierebeauty.studio"
        className="font-sans text-[0.875rem] leading-relaxed text-[#E8DDD0] hover:text-[#C9A96E] transition-colors duration-200 break-all focus-visible:outline-2 focus-visible:outline-[#C9A96E] focus-visible:outline-offset-2 rounded-sm"
      >
        hello@lumierebeauty.studio
      </a>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#2C1810] border-t border-[#3D2218]/80 overflow-x-clip" aria-label="Site footer">
      <div
        className="site-container w-full"
        style={{ paddingTop: '3rem', paddingBottom: '2.75rem' }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-10 lg:gap-12 xl:gap-16 min-w-0 items-start">
          {/* Brand */}
          <div className="min-w-0 flex flex-col items-center text-center lg:items-start lg:text-left">
            <p className="font-serif text-[1.375rem] md:text-[1.4rem] font-medium tracking-[0.12em] text-[#FEFCF9] uppercase">
              Lumière
            </p>
            <div
              className="w-10 h-px bg-[#C9A96E]/80 shrink-0"
              style={{ marginTop: '1rem', marginBottom: '1.25rem' }}
              aria-hidden="true"
            />
            <p className="font-sans text-[0.875rem] leading-[1.85] text-[#B8A898] max-w-[18rem]">
              Elevating natural beauty through thoughtful care, refined artistry and timeless style.
            </p>
          </div>

          {/* Follow Us */}
          <div className="min-w-0 flex flex-col items-center text-center">
            <h3 className="eyebrow text-[#C9A96E] text-[0.625rem]">Follow Us</h3>
            <div className="flex items-center justify-center gap-3" style={{ marginTop: '1.25rem' }}>
              {socialLinks.map(({ label, href, icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex items-center justify-center w-10 h-10 border border-[#C9A96E]/35 text-[#9A7A6A] hover:border-[#C9A96E] hover:text-[#C9A96E] transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-[#C9A96E] focus-visible:outline-offset-2"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="min-w-0 flex flex-col items-center text-center md:col-span-2 lg:col-span-1 lg:items-start lg:text-left lg:justify-self-end lg:max-w-[18rem] lg:pr-2 xl:pr-4">
            <h3 className="eyebrow text-[#C9A96E] text-[0.625rem]">Contact</h3>
            <address className="not-italic flex flex-col gap-4 w-full max-w-[18rem]" style={{ marginTop: '1.25rem' }}>
              {contactItems.map(({ id, icon: Icon, content }) => (
                <div key={id} className="flex items-start gap-3 min-w-0 w-full">
                  <span
                    className="inline-flex h-[1.3125rem] w-4 shrink-0 items-center justify-center"
                    aria-hidden="true"
                  >
                    <Icon
                      size={14}
                      strokeWidth={1.5}
                      className="text-[#C9A96E]/90"
                    />
                  </span>
                  <div className="min-w-0 flex-1 text-left">{content}</div>
                </div>
              ))}
            </address>
          </div>
        </div>

        <div
          className="border-t border-[#C9A96E]/15"
          style={{ marginTop: '2.75rem', paddingTop: '1.5rem', paddingRight: 'clamp(0px, 4vw, 3.5rem)' }}
        >
          <p className="font-sans text-[0.6875rem] md:text-[0.75rem] text-[#6B5B4E] text-center leading-relaxed tracking-[0.02em]">
            &copy; 2026 Lumière Beauty Studio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
