/** Matches fixed navbar height — keep in sync with header style */
export const NAVBAR_HEIGHT = 80;

const SCROLL_TARGETS = {
  '#home': null,
  '#about': '#about-heading',
  '#services': '#services-heading',
  '#pricing': '#pricing-heading',
  '#gallery': '#gallery-heading',
  '#contact': '#contact-heading',
  '#appointment-form': '#appointment-form',
};

function getScrollOffset() {
  const value = getComputedStyle(document.documentElement)
    .getPropertyValue('--navbar-height')
    .trim();
  const parsed = parseInt(value, 10);
  return Number.isFinite(parsed) ? parsed : NAVBAR_HEIGHT;
}

/**
 * Smooth-scroll to a section anchor, offset for the fixed navbar.
 */
export function scrollToSection(selector) {
  if (selector === '#home') {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return;
  }

  const mapped = SCROLL_TARGETS[selector] ?? selector;
  const target = document.querySelector(mapped);
  if (!target) return;

  const offset = getScrollOffset();
  const top = target.getBoundingClientRect().top + window.scrollY - offset;
  window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
}
