export const site = {
  name: 'Alphagrid Technology',
  shortName: 'Alphagrid',
  tagline:
    'Free downloads for Android APKs, iOS IPAs, jailbreak utilities, and Windows tools — curated and ready to install.',
  footerTagline: 'Device & desktop tools catalog — free downloads from Colombo, Sri Lanka.',
  email: 'info@alphagridtec.com',
  phone: '+94718628191',
  phoneDisplay: '+94 71 862 8191',
  whatsapp: '94718628191',
  location: 'Colombo, Sri Lanka',
  linkedin: 'https://www.linkedin.com/in/isanka-eranga-0155632a3',
} as const;

export type ToolCategory = 'apk' | 'ipa' | 'jailbreak' | 'exe';

export const categories = [
  {
    id: 'apk' as const,
    num: '01',
    title: 'Android APK',
    blurb: 'Sideload-ready Android packages — utilities, managers, and companion apps for your device.',
    tags: ['Android', 'APK', 'Sideload'],
  },
  {
    id: 'ipa' as const,
    num: '02',
    title: 'iOS IPA',
    blurb: 'IPA packages for sideloading on iPhone and iPad — install via your preferred signing tool.',
    tags: ['iOS', 'IPA', 'Sideload'],
  },
  {
    id: 'jailbreak' as const,
    num: '03',
    title: 'Jailbreak Tools',
    blurb: 'Utilities and helpers for jailbroken devices — tweak managers, package tools, and recovery aids.',
    tags: ['Jailbreak', 'iOS', 'Utilities'],
  },
  {
    id: 'exe' as const,
    num: '04',
    title: 'Windows EXE',
    blurb: 'Desktop utilities and installers for Windows — device managers, flash tools, and system helpers.',
    tags: ['Windows', 'EXE', 'Desktop'],
  },
] as const;

export const techStack = [
  'Android',
  'APK',
  'iOS',
  'IPA',
  'Jailbreak',
  'Windows',
  'EXE',
  'Sideload',
  'Utilities',
  'Free Download',
] as const;

export const engineering = {
  headline: 'Download in four steps.',
  lead: 'Browse the catalog, pick your platform, download the file, and install — no account required.',
  pipeline: [
    {
      step: '01',
      title: 'Browse',
      text: 'Filter by APK, IPA, jailbreak, or Windows and find the tool you need.',
    },
    {
      step: '02',
      title: 'Pick a tool',
      text: 'Open the detail page for version info, platform notes, and install guidance.',
    },
    {
      step: '03',
      title: 'Download',
      text: 'Grab the file directly — free, no checkout, no signup.',
    },
    {
      step: '04',
      title: 'Install',
      text: 'Follow the platform steps (sideload, sign, or run the installer) and you are set.',
    },
  ],
  metrics: [
    { value: '4', label: 'Platform categories' },
    { value: 'Free', label: 'Direct downloads' },
    { value: '24/7', label: 'Catalog always online' },
  ],
} as const;

export const terminalLines = [
  { type: 'cmd', text: '$ alphagrid tools --list' },
  { type: 'out', text: '→ APK · IPA · Jailbreak · EXE' },
  { type: 'out', text: '→ Fetching latest packages...' },
  { type: 'out', text: '→ Ready for download' },
  { type: 'success', text: '✓ Tools catalog online' },
  { type: 'dim', text: '// Pick a tool and install.' },
] as const;

export type Tool = {
  slug: string;
  title: string;
  category: ToolCategory;
  summary: string;
  platform: string;
  version: string;
  size?: string;
  tags: string[];
  /** Empty string = coming soon */
  downloadUrl: string;
  featured?: boolean;
  image?: string;
  features?: string[];
  installSteps?: { step: string; title: string; text: string }[];
};

export const tools: Tool[] = [
  {
    slug: 'mnd-delivery',
    title: 'MND Delivery',
    category: 'apk',
    summary:
      'MND customer app — browse vendors, build a cart, checkout with cash on delivery, and track orders live on the map.',
    platform: 'Android',
    version: '1.0.0',
    size: '65 MB',
    tags: ['APK', 'Delivery', 'Orders'],
    downloadUrl: '/downloads/mnd-delivery-v1.0.0.apk',
    featured: true,
    image: '/images/mnd/app-icon.png',
    features: [
      'Browse vendors, search stores, and build a cart',
      'Guest browsing — sign in required only to place an order',
      'Cash on delivery checkout with map pin address',
      'Order history, detail, and cancellation',
      'Live rider tracking on Google Maps',
      'Phone OTP and Google sign-in via Firebase',
    ],
    installSteps: [
      {
        step: '01',
        title: 'Download the APK',
        text: 'Tap Download below. The file saves to your device Downloads folder.',
      },
      {
        step: '02',
        title: 'Allow install from this source',
        text: 'Open the downloaded file. If Android asks, allow Install unknown apps for your browser or Files app only.',
      },
      {
        step: '03',
        title: 'If Play Protect warns — Install anyway',
        text: 'Play Protect may flag apps not from the Play Store. Tap More details → Install anyway. Leave Play Protect ON.',
      },
    ],
  },
  {
    slug: 'kim',
    title: 'KIM',
    category: 'apk',
    summary:
      'Kitchen Inventory Manager — Flutter Android app for inventory, supplier orders, and IoT load-cell scale sync.',
    platform: 'Android',
    version: '3.0.0',
    size: '65 MB',
    tags: ['APK', 'Inventory', 'IoT'],
    downloadUrl: '/downloads/kim-v3.0.0.apk',
    featured: true,
    image: '/images/kim/app-icon.png',
    features: [
      'Inventory CRUD with reorder levels and low-stock alerts',
      'Link suppliers via invite codes',
      'Create & track orders; confirm delivery to update stock',
      'Reports and CSV export',
      'In-app realtime notifications',
      'IoT load-cell scales — pair ESP32 bins, live weight, auto stock sync',
    ],
    installSteps: [
      {
        step: '01',
        title: 'Download the APK',
        text: 'Tap Download below. The file saves to your device Downloads folder.',
      },
      {
        step: '02',
        title: 'Allow install from this source',
        text: 'Open the downloaded file. If Android asks, allow Install unknown apps for your browser or Files app only.',
      },
      {
        step: '03',
        title: 'If Play Protect warns — Install anyway',
        text: 'Play Protect may flag apps not from the Play Store. Tap More details → Install anyway. Leave Play Protect ON.',
      },
    ],
  },
  {
    slug: 'apk-installer-pro',
    title: 'APK Installer Pro',
    category: 'apk',
    summary: 'Lightweight Android helper for installing and managing sideloaded APK packages with batch support.',
    platform: 'Android',
    version: '2.1.0',
    size: '8 MB',
    tags: ['APK', 'Sideload', 'Utility'],
    downloadUrl: '',
    featured: true,
    features: [
      'One-tap APK install from Downloads',
      'Batch install queue for multiple packages',
      'Package info viewer (version, size, permissions)',
      'Safe uninstall for sideloaded apps',
    ],
    installSteps: [
      {
        step: '01',
        title: 'Download the APK',
        text: 'Save the package to your Android device.',
      },
      {
        step: '02',
        title: 'Allow unknown sources',
        text: 'Permit installs from your browser or file manager for this session only.',
      },
      {
        step: '03',
        title: 'Open and install',
        text: 'Launch the APK and follow the system installer prompts.',
      },
    ],
  },
  {
    slug: 'grid-file-manager',
    title: 'Grid File Manager',
    category: 'apk',
    summary: 'Fast Android file browser with archive support and direct APK share shortcuts.',
    platform: 'Android',
    version: '1.4.2',
    size: '12 MB',
    tags: ['APK', 'Files', 'Utility'],
    downloadUrl: '',
    features: [
      'Dual-pane file browsing',
      'ZIP / RAR preview and extract',
      'Share APKs and IPAs to other devices',
      'Internal storage and SD card access',
    ],
  },
  {
    slug: 'sideload-signer',
    title: 'Sideload Signer',
    category: 'ipa',
    summary: 'Companion IPA for signing and installing packages via AltStore-compatible workflows.',
    platform: 'iOS',
    version: '1.2.0',
    size: '18 MB',
    tags: ['IPA', 'Sideload', 'Signing'],
    downloadUrl: '',
    featured: true,
    features: [
      'Works with common sideload workflows',
      'Certificate status overview',
      'Refresh reminders before expiry',
      'Simple install history log',
    ],
    installSteps: [
      {
        step: '01',
        title: 'Download the IPA',
        text: 'Save the IPA on your Mac or PC used for signing.',
      },
      {
        step: '02',
        title: 'Sign the package',
        text: 'Use your preferred signing tool (AltStore, Sideloadly, or similar) with your Apple ID.',
      },
      {
        step: '03',
        title: 'Install on device',
        text: 'Trust the developer profile in Settings → General → VPN & Device Management if prompted.',
      },
    ],
  },
  {
    slug: 'ipa-deploy',
    title: 'IPA Deploy',
    category: 'ipa',
    summary: 'Streamlined IPA packaging helper for developers testing builds outside the App Store.',
    platform: 'iOS',
    version: '3.0.1',
    size: '22 MB',
    tags: ['IPA', 'Dev Tools', 'Deploy'],
    downloadUrl: '',
    features: [
      'Quick IPA install pipeline',
      'Build metadata display',
      'Compatible with USB and wireless install tools',
      'Clean uninstall of expired builds',
    ],
  },
  {
    slug: 'tweak-loader',
    title: 'Tweak Loader',
    category: 'jailbreak',
    summary: 'Utility for managing jailbreak tweaks and package lists on supported iOS versions.',
    platform: 'iOS (Jailbroken)',
    version: '1.8.0',
    size: '6 MB',
    tags: ['Jailbreak', 'Tweaks', 'Packages'],
    downloadUrl: '',
    featured: true,
    features: [
      'Browse and organize installed tweaks',
      'Export package list for backups',
      'Quick enable / disable helpers',
      'Safe-mode friendly UI',
    ],
    installSteps: [
      {
        step: '01',
        title: 'Confirm jailbreak',
        text: 'Ensure your device is jailbroken on a supported iOS version before installing.',
      },
      {
        step: '02',
        title: 'Download the package',
        text: 'Grab the file from this page and transfer it to the device or install via your package manager.',
      },
      {
        step: '03',
        title: 'Respring if needed',
        text: 'Respring or reboot as directed so the tool loads correctly.',
      },
    ],
  },
  {
    slug: 'jb-recovery-kit',
    title: 'JB Recovery Kit',
    category: 'jailbreak',
    summary: 'Recovery helpers for common jailbreak issues — safe mode tips, cache clear, and bootstrap checks.',
    platform: 'iOS (Jailbroken)',
    version: '2.0.0',
    size: '4 MB',
    tags: ['Jailbreak', 'Recovery', 'Utility'],
    downloadUrl: '',
    features: [
      'Safe mode diagnostic checklist',
      'Cache and preference reset helpers',
      'Bootstrap status overview',
      'Guides for common failure modes',
    ],
  },
  {
    slug: 'unc0ver-helper',
    title: 'JB Prep Helper',
    category: 'jailbreak',
    summary: 'Pre-jailbreak checklist and device prep utility for users about to run a jailbreak tool.',
    platform: 'iOS',
    version: '1.1.0',
    size: '3 MB',
    tags: ['Jailbreak', 'Prep', 'Checklist'],
    downloadUrl: '',
    features: [
      'Device readiness checklist',
      'Backup reminder before jailbreak',
      'Version compatibility notes',
      'Post-install first-steps guide',
    ],
  },
  {
    slug: 'device-bridge',
    title: 'Device Bridge',
    category: 'exe',
    summary: 'Windows desktop bridge for Android / iOS file transfer, APK push, and device logs.',
    platform: 'Windows',
    version: '4.2.0',
    size: '42 MB',
    tags: ['EXE', 'ADB', 'Transfer'],
    downloadUrl: '',
    featured: true,
    features: [
      'USB device detection for Android and iOS',
      'Drag-and-drop APK install via ADB',
      'File pull / push between PC and device',
      'Live logcat viewer for debugging',
    ],
    installSteps: [
      {
        step: '01',
        title: 'Download the installer',
        text: 'Save the .exe to your PC and run it.',
      },
      {
        step: '02',
        title: 'Allow Windows prompts',
        text: 'If SmartScreen appears, choose More info → Run anyway for this trusted utility.',
      },
      {
        step: '03',
        title: 'Connect your device',
        text: 'Enable USB debugging (Android) or trust the computer (iOS), then open Device Bridge.',
      },
    ],
  },
  {
    slug: 'flash-utility',
    title: 'Flash Utility',
    category: 'exe',
    summary: 'Windows flashing helper for supported Android devices — drivers checklist and image select.',
    platform: 'Windows',
    version: '2.5.1',
    size: '28 MB',
    tags: ['EXE', 'Flash', 'Android'],
    downloadUrl: '',
    features: [
      'Driver presence checklist',
      'Image file picker with checksum display',
      'Step-by-step flash wizard',
      'Abort-safe progress UI',
    ],
  },
  {
    slug: 'apk-builder-cli',
    title: 'APK Builder CLI',
    category: 'exe',
    summary: 'Windows command-line toolkit for packaging and signing Android APK builds locally.',
    platform: 'Windows',
    version: '1.0.3',
    size: '15 MB',
    tags: ['EXE', 'CLI', 'APK'],
    downloadUrl: '',
    features: [
      'Local APK package and align',
      'Signing keystore helpers',
      'Batch build scripts',
      'Verbose CLI output for CI use',
    ],
  },
  {
    slug: 'ipa-extractor',
    title: 'IPA Extractor',
    category: 'exe',
    summary: 'Windows utility to inspect IPA contents, entitlements, and embedded provisioning profiles.',
    platform: 'Windows',
    version: '1.3.0',
    size: '9 MB',
    tags: ['EXE', 'IPA', 'Inspect'],
    downloadUrl: '',
    features: [
      'Open and browse IPA archives',
      'Entitlements and Info.plist viewer',
      'Provisioning profile summary',
      'Export payload assets',
    ],
  },
];

export function getToolBySlug(slug: string): Tool | undefined {
  return tools.find((t) => t.slug === slug);
}

export function getToolsByCategory(category: ToolCategory): Tool[] {
  return tools.filter((t) => t.category === category);
}

export function getFeaturedTools(): Tool[] {
  return tools.filter((t) => t.featured);
}

export function categoryLabel(category: ToolCategory): string {
  const map: Record<ToolCategory, string> = {
    apk: 'Android APK',
    ipa: 'iOS IPA',
    jailbreak: 'Jailbreak',
    exe: 'Windows EXE',
  };
  return map[category];
}

export const about = {
  headline: 'A tools hub for devices and desktops.',
  lead: 'Alphagrid Technology hosts a free catalog of Android APKs, iOS IPAs, jailbreak utilities, and Windows tools — curated for people who sideload, tweak, and build.',
  story: [
    'We turned Alphagrid into a tools download hub so you can find platform utilities in one place — APKs for Android, IPAs for iOS sideloading, jailbreak helpers, and Windows EXE utilities.',
    'Every listing includes version info and install guidance. Downloads are free and direct. Need something that is not listed yet? Contact us and request a tool.',
  ],
  stats: [
    { value: '4', label: 'Platform categories' },
    { value: 'Free', label: 'Direct downloads' },
    { value: 'LK', label: 'Based in Colombo' },
  ],
  values: [
    {
      title: 'Clear packaging',
      text: 'Version, size, and platform stated up front — so you know what you are installing.',
    },
    {
      title: 'Direct downloads',
      text: 'No accounts, no checkout. Grab the file and install on your own device.',
    },
    {
      title: 'Practical guidance',
      text: 'Install steps for APK sideload, IPA signing, jailbreak prep, and Windows setup.',
    },
  ],
} as const;
