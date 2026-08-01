import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { initHero3D } from './hero3d';

gsap.registerPlugin(ScrollTrigger);

const reduceMotion = () =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const canHover = () =>
  window.matchMedia('(hover: hover) and (pointer: fine)').matches;

export function initMotion() {
  if (reduceMotion()) {
    document.querySelectorAll('.reveal').forEach((el) => el.classList.add('is-visible'));
    return;
  }

  // Hero entrance + 3D scene
  const hero = document.querySelector('[data-hero]');
  if (hero) {
    initHero3D();

    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    tl.from('[data-hero-brand]', {
      y: 60,
      opacity: 0,
      duration: 1.1,
    })
      .from('[data-hero-line]', { y: 40, opacity: 0, duration: 0.8 }, '-=0.6')
      .from('[data-hero-cta]', { y: 24, opacity: 0, duration: 0.7 }, '-=0.45')
      .from('[data-hero-terminal]', { x: 32, opacity: 0, duration: 0.9 }, '-=0.85')
      .from('[data-hero-scene]', { opacity: 0, duration: 1.1 }, '-=1.05');
  }

  // Page hero (inner pages)
  const pageHero = document.querySelector('[data-page-hero]');
  if (pageHero) {
    gsap.from('[data-page-hero] > *', {
      y: 36,
      opacity: 0,
      duration: 0.85,
      stagger: 0.12,
      ease: 'power3.out',
    });
  }

  // Scroll reveals
  document.querySelectorAll('.reveal').forEach((el) => {
    gsap.fromTo(
      el,
      { y: 48, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 88%',
          once: true,
          onEnter: () => el.classList.add('is-visible'),
        },
      }
    );
  });

  // Stagger lists
  document.querySelectorAll('[data-stagger]').forEach((group) => {
    const items = group.querySelectorAll('[data-stagger-item]');
    gsap.from(items, {
      y: 36,
      opacity: 0,
      duration: 0.75,
      stagger: 0.1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: group,
        start: 'top 85%',
        once: true,
      },
    });
  });

  // Work card image reveal
  document.querySelectorAll('.work-card').forEach((card) => {
    gsap.from(card, {
      clipPath: 'inset(12% 12% 12% 12%)',
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: card,
        start: 'top 90%',
        once: true,
      },
    });
  });

  // Magnetic buttons — desktop pointer only
  if (!canHover()) return;

  document.querySelectorAll('[data-magnetic]').forEach((btn) => {
    const el = btn as HTMLElement;
    const strength = 28;

    el.addEventListener('mousemove', (e) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      gsap.to(el, {
        x: x / strength,
        y: y / strength,
        duration: 0.35,
        ease: 'power2.out',
      });
    });

    el.addEventListener('mouseleave', () => {
      gsap.to(el, { x: 0, y: 0, duration: 0.55, ease: 'power3.out' });
    });
  });
}
