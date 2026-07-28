export const site = {
  name: 'Alphagrid Technology',
  shortName: 'Alphagrid',
  tagline: 'We engineer web platforms, custom software, and digital products — built to scale, ship, and perform.',
  footerTagline: 'Software engineering & digital product studio — Colombo, Sri Lanka.',
  email: 'info@alphagridtec.com',
  phone: '+94718628191',
  phoneDisplay: '+94 71 862 8191',
  whatsapp: '94718628191',
  location: 'Colombo, Sri Lanka',
  linkedin: 'https://www.linkedin.com/in/isanka-eranga-0155632a3',
} as const;

export const services = [
  {
    num: '01',
    title: 'Web Development',
    blurb: 'High-performance websites and web apps — React, Astro, Laravel, and modern stacks engineered for speed and scale.',
    tags: ['React', 'Astro', 'Laravel', 'API'],
  },
  {
    num: '02',
    title: 'Software Solutions',
    blurb: 'Custom CRMs, dashboards, portals, and internal tools. Architecture-first builds that fit your workflow.',
    tags: ['SaaS', 'CRM', 'Cloud', 'API'],
  },
  {
    num: '03',
    title: 'Branding',
    blurb: 'Product identity and design systems for software companies — sharp, scalable, and built for digital-first brands.',
    tags: ['Identity', 'UI Kit', 'Design System'],
  },
  {
    num: '04',
    title: 'Digital Marketing',
    blurb: 'Growth for tech products — landing pages, funnels, SEO foundations, and campaigns that convert.',
    tags: ['SEO', 'Ads', 'Analytics'],
  },
  {
    num: '05',
    title: 'UI / UX Design',
    blurb: 'Product UI, design systems, and interaction design for apps people actually want to use.',
    tags: ['Figma', 'Prototyping', 'UX Research'],
  },
  {
    num: '06',
    title: 'Automation',
    blurb: 'Workflow automation, integrations, and reporting pipelines — connect your tools and eliminate manual work.',
    tags: ['Integrations', 'Webhooks', 'Scripts'],
  },
] as const;

export const techStack = [
  'React',
  'Next.js',
  'Astro',
  'TypeScript',
  'Node.js',
  'Laravel',
  'PHP',
  'MySQL',
  'REST APIs',
  'GSAP',
  'Figma',
  'AWS',
] as const;

export const engineering = {
  headline: 'Engineering-first delivery.',
  lead: 'We treat every project like a product — clean architecture, tested builds, and code you can maintain long after launch.',
  pipeline: [
    { step: '01', title: 'Scope & Architecture', text: 'Requirements, tech stack, and system design before a line of code.' },
    { step: '02', title: 'Design & Prototype', text: 'UI flows, wireframes, and interactive prototypes aligned to the build.' },
    { step: '03', title: 'Develop & Integrate', text: 'Agile sprints, API integrations, and performance-focused engineering.' },
    { step: '04', title: 'Deploy & Support', text: 'Production launch, monitoring, and ongoing improvements post-ship.' },
  ],
  metrics: [
    { value: '99%', label: 'Uptime-focused builds' },
    { value: '<2s', label: 'Target load performance' },
    { value: 'Agile', label: 'Iterative delivery cycles' },
  ],
} as const;

export const terminalLines = [
  { type: 'cmd', text: '$ alphagrid init --project "your-idea"' },
  { type: 'out', text: '→ Scoping requirements...' },
  { type: 'out', text: '→ Designing architecture...' },
  { type: 'out', text: '→ Building MVP...' },
  { type: 'success', text: '✓ Deployed to production' },
  { type: 'dim', text: '// Ready to scale.' },
] as const;

export type Project = {
  title: string;
  tag: string;
  summary: string;
  image?: string;
  url?: string;
};

export const projects: Project[] = [
  {
    title: 'Gift Sri Lanka',
    tag: 'E-commerce · API',
    summary:
      'Sri Lankan gift marketplace with 370+ products, advanced filters, cart & checkout, payment integration, and REST API-backed admin.',
    image: '/images/work/giftsrilanka.png',
    url: 'https://www.giftsrilanka.com',
  },
  {
    title: 'Pulse Analytics',
    tag: 'SaaS · Dashboard',
    summary: 'Real-time analytics dashboard with role-based access and data visualization.',
  },
  {
    title: 'Meridian Studio',
    tag: 'Web App · CMS',
    summary: 'Headless CMS-powered portfolio platform with custom content workflows.',
  },
  {
    title: 'Orbit Logistics',
    tag: 'Software · API',
    summary: 'Logistics portal with automated reporting, REST API, and third-party integrations.',
  },
  {
    title: 'Cascade Health',
    tag: 'Web · Integration',
    summary: 'Patient-facing portal connected to backend systems and appointment scheduling.',
  },
  {
    title: 'Vertex Finance',
    tag: 'FinTech · Portal',
    summary: 'Secure client portal with document management and onboarding automation.',
  },
] as const;

export const about = {
  headline: 'A software studio that ships real products.',
  lead: 'Alphagrid Technology is a Colombo-based software and digital engineering company. We design, build, and launch web applications, custom software, and digital platforms for businesses that need more than a template.',
  story: [
    'We started Alphagrid because too many businesses get sold websites when they need software. Our team bridges product design and engineering — from MVPs and internal tools to customer-facing platforms and automation systems.',
    'Every build follows a clear engineering process: scope, architect, develop, deploy. We write maintainable code, choose the right stack for the job, and stay involved after launch.',
  ],
  stats: [
    { value: '12+', label: 'Technologies in our stack' },
    { value: 'Agile', label: 'Sprint-based delivery' },
    { value: '24/7', label: 'Support-ready deployments' },
  ],
  values: [
    {
      title: 'Engineering quality',
      text: 'Clean code, solid architecture, and performance benchmarks — not shortcuts that break later.',
    },
    {
      title: 'Ship to production',
      text: 'MVPs, iterations, and full launches. Software only matters when it is live and used.',
    },
    {
      title: 'Transparent process',
      text: 'Clear milestones, regular updates, and honest timelines from kickoff to deployment.',
    },
  ],
} as const;
