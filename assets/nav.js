const mobileNavQuery = window.matchMedia('(max-width: 700px)');
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

function alignActiveNavLink() {
  if (!mobileNavQuery.matches) {
    return;
  }

  const nav = document.querySelector('nav');
  const activeLink = nav?.querySelector('a[aria-current="page"]');

  if (!nav || !activeLink) {
    return;
  }

  const navRect = nav.getBoundingClientRect();
  const linkRect = activeLink.getBoundingClientRect();
  const targetLeft = nav.scrollLeft + (linkRect.left - navRect.left) - ((nav.clientWidth - activeLink.offsetWidth) / 2);
  const maxLeft = nav.scrollWidth - nav.clientWidth;
  const nextLeft = Math.min(Math.max(targetLeft, 0), Math.max(maxLeft, 0));

  nav.scrollTo({
    left: nextLeft,
    behavior: prefersReducedMotion.matches ? 'auto' : 'smooth'
  });
}

function queueNavAlignment() {
  window.requestAnimationFrame(() => {
    window.requestAnimationFrame(alignActiveNavLink);
  });
}

document.addEventListener('DOMContentLoaded', queueNavAlignment);
window.addEventListener('load', queueNavAlignment);
window.addEventListener('pageshow', queueNavAlignment);
window.addEventListener('resize', queueNavAlignment);
window.addEventListener('orientationchange', queueNavAlignment);
