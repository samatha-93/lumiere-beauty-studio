import { useState, useEffect, useRef, useCallback } from 'react';
import { ArrowUp } from 'lucide-react';

const MOBILE_OVERLAP_SELECTORS = [
  '#services img',
  '#services p',
  '#services h3',
  '#services a.btn-outline',
  '#contact input',
  '#contact textarea',
  '#contact button[type="submit"]',
  '#contact p',
  '#contact h2',
  '#contact h3',
].join(',');

export default function BackToTop() {
  const [visible, setVisible] = useState(false);
  const [obstructed, setObstructed] = useState(false);
  const buttonRef = useRef(null);

  const checkObstruction = useCallback(() => {
    const isMobile = window.matchMedia('(max-width: 639px)').matches;
    if (!isMobile || !buttonRef.current) {
      setObstructed(false);
      return;
    }

    const btnRect = buttonRef.current.getBoundingClientRect();
    let blocked = false;

    document.querySelectorAll(MOBILE_OVERLAP_SELECTORS).forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.width === 0 || rect.height === 0) return;

      const overlaps = !(
        rect.right < btnRect.left ||
        rect.left > btnRect.right ||
        rect.bottom < btnRect.top ||
        rect.top > btnRect.bottom
      );

      if (overlaps) blocked = true;
    });

    setObstructed(blocked);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 600);
      checkObstruction();
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', checkObstruction);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', checkObstruction);
    };
  }, [checkObstruction]);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const show = visible && !obstructed;

  return (
    <button
      ref={buttonRef}
      onClick={handleClick}
      aria-label="Back to top of page"
      title="Back to top"
      className={`fixed z-40 w-11 h-11 flex items-center justify-center bg-[#2C1810] border border-[#C9A96E] text-[#C9A96E] transition-all duration-300 hover:bg-[#C9A96E] hover:text-white focus-visible:outline-2 focus-visible:outline-[#C9A96E] focus-visible:outline-offset-2 max-sm:bottom-[max(7.5rem,calc(2.25rem+env(safe-area-inset-bottom)))] max-sm:right-3 sm:bottom-8 sm:right-6 ${
        show
          ? 'opacity-100 translate-y-0 pointer-events-auto'
          : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      <ArrowUp size={16} strokeWidth={1.5} aria-hidden="true" />
    </button>
  );
}
