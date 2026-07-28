import gsap from 'gsap';

const reduceMotion = () =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export function initHero3D() {
  const hero = document.querySelector('[data-hero]');
  const perspective = document.querySelector('[data-hero-perspective]') as HTMLElement | null;
  const objects = document.querySelector('[data-hero-objects]') as HTMLElement | null;
  const cube = document.querySelector('[data-hero-cube]') as HTMLElement | null;
  const ring = document.querySelector('[data-hero-ring]') as HTMLElement | null;
  const diamond = document.querySelector('[data-hero-diamond]') as HTMLElement | null;
  const nodes = document.querySelectorAll('[data-hero-node]');
  const floor = document.querySelector('[data-hero-floor]') as HTMLElement | null;

  if (!hero || !perspective || !objects) return;

  if (reduceMotion()) {
    gsap.set([perspective, objects, cube, ring, diamond], { clearProps: 'all' });
    return;
  }

  // Entrance
  gsap.from(perspective, {
    opacity: 0,
    scale: 1.06,
    duration: 1.4,
    ease: 'power3.out',
  });

  gsap.from(objects, {
    z: -220,
    opacity: 0,
    duration: 1.2,
    ease: 'power3.out',
    delay: 0.15,
  });

  // Continuous 3D motion
  if (cube) {
    gsap.to(cube, {
      rotateY: '+=360',
      duration: 28,
      ease: 'none',
      repeat: -1,
    });

    gsap.to(cube, {
      y: '+=18',
      duration: 4.5,
      ease: 'sine.inOut',
      yoyo: true,
      repeat: -1,
    });
  }

  if (ring) {
    gsap.to(ring, {
      rotateZ: '+=360',
      duration: 22,
      ease: 'none',
      repeat: -1,
    });

    gsap.to(ring, {
      rotateX: '+=24',
      duration: 9,
      ease: 'sine.inOut',
      yoyo: true,
      repeat: -1,
    });
  }

  if (diamond) {
    gsap.to(diamond, {
      rotateZ: '+=360',
      duration: 16,
      ease: 'none',
      repeat: -1,
    });
  }

  nodes.forEach((node, i) => {
    gsap.to(node, {
      z: `+=${40 + i * 20}`,
      duration: 3 + i * 0.6,
      ease: 'sine.inOut',
      yoyo: true,
      repeat: -1,
      delay: i * 0.4,
    });
  });

  if (floor) {
    gsap.to(floor, {
      rotateX: 80,
      duration: 6,
      ease: 'sine.inOut',
      yoyo: true,
      repeat: -1,
    });
  }

  // Mouse parallax
  const tilt = { x: 0, y: 0 };

  const onMove = (e: MouseEvent) => {
    const rect = hero.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;

    tilt.x = px * 18;
    tilt.y = py * 12;

    gsap.to(perspective, {
      rotateY: tilt.x,
      rotateX: -tilt.y,
      duration: 0.9,
      ease: 'power2.out',
      transformPerspective: 1200,
    });

    gsap.to(objects, {
      x: px * 28,
      y: py * 18,
      duration: 0.9,
      ease: 'power2.out',
    });
  };

  const onLeave = () => {
    gsap.to(perspective, {
      rotateY: 0,
      rotateX: 0,
      duration: 1.1,
      ease: 'power3.out',
    });

    gsap.to(objects, {
      x: 0,
      y: 0,
      duration: 1.1,
      ease: 'power3.out',
    });
  };

  hero.addEventListener('mousemove', onMove);
  hero.addEventListener('mouseleave', onLeave);

  // Subtle scroll depth
  gsap.to(objects, {
    z: -80,
    ease: 'none',
    scrollTrigger: {
      trigger: hero,
      start: 'top top',
      end: 'bottom top',
      scrub: 1.2,
    },
  });
}
