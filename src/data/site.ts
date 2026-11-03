export const COUNTRY_CODE = '91';

export interface WhatsAppNumber {
  id: string;
  label: string;
  displayNumber: string;
  waNumber: string; // 91XXXXXXXXXX (no plus, for wa.me)
  telNumber: string; // +91XXXXXXXXXX (with plus, for tel:)
  description?: string;
}

export interface ServiceArea {
  name: string;
  status: 'confirmed' | 'confirm with client';
}

export interface ServiceItem {
  id: string;
  name: string;
  slug: string;
  shortDescription: string;
  category: 'railings' | 'windows' | 'canopy' | 'interior' | 'construction';
  detailUrl: string;
  iconName: string;
  heroImage: string;
}

export const siteConfig = {
  name: 'Needs Group',
  legalName: 'Needs Group [CONFIRM OFFICIAL REGISTERED NAME]',
  tagline: 'Built around your needs.',
  shortDescription:
    'Premier specialist in architectural glass, steel & aluminium railings, custom windows, glass canopies, interior fabrication, and construction in Surathkal, Mangaluru, Karnataka.',
  longDescription:
    'Needs Group is a premier architectural metal fabrication and construction specialist based in Surathkal, Mangaluru. With over 15 years of precision engineering experience and 900+ completed railing projects across coastal Karnataka, we deliver custom steel, GI, glass, wood, and aluminium railings, high-grade windows, glass canopies, commercial & residential interiors, and turnkey construction.',
  url: 'https://needs.group',
  domain: 'needs.group',
  locale: 'en_IN',
  language: 'en-IN',
  establishedYear: 2009,
  yearsOfExperience: 15,
  completedProjectsCount: '900+',

  // Contact Info
  email: 'info@needs.group',
  countryCode: COUNTRY_CODE,

  whatsappNumbers: [
    {
      id: 'wa-1',
      label: 'WhatsApp 1 (Sales & Enquiries)',
      displayNumber: '+91 93531 54607',
      waNumber: '919353154607',
      telNumber: '+919353154607',
      description: 'Quick quotes, site inspection & railing queries',
    },
    {
      id: 'wa-2',
      label: 'WhatsApp 2 (Technical & Site Support)',
      displayNumber: '+91 84312 84752',
      waNumber: '918431284752',
      telNumber: '+918431284752',
      description: 'Project consultation, fabrication & updates',
    },
  ] as WhatsAppNumber[],

  // Address and Location
  address: {
    street: '[STREET/LANDMARK]', // PLACEHOLDER: Confirm with client
    locality: 'Surathkal',
    city: 'Mangaluru',
    district: 'Dakshina Kannada',
    state: 'Karnataka',
    pincode: '[PINCODE]', // PLACEHOLDER: Confirm with client (e.g. 575014)
    country: 'IN',
    fullFormatted: '[STREET/LANDMARK], Surathkal, Mangaluru, Karnataka [PINCODE]',
    coordinates: {
      latitude: 12.9833, // Surathkal, Mangaluru
      longitude: 74.8000,
    },
    googleMapsDirectionsUrl:
      'https://www.google.com/maps/dir/?api=1&destination=Surathkal,+Mangaluru,+Karnataka,+India',
    googleMapsEmbedUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.892795123956!2d74.79374!3d12.98188!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba35a0980ef2c8b%3A0x7d6f5ad41a8fa194!2sSurathkal%2C%20Mangaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin',
  },

  // Service Areas (Marked confirm with client)
  serviceAreas: [
    { name: 'Surathkal', status: 'confirmed' },
    { name: 'Mangaluru', status: 'confirmed' },
    { name: 'Mulki', status: 'confirm with client' },
    { name: 'Baikampady', status: 'confirm with client' },
    { name: 'Katipalla', status: 'confirm with client' },
    { name: 'Kulai', status: 'confirm with client' },
    { name: 'Udupi', status: 'confirm with client' },
    { name: 'Surrounding Dakshina Kannada areas', status: 'confirm with client' },
  ] as ServiceArea[],

  // Working Hours
  workingHours: [
    { days: 'Monday – Saturday', hours: '9:00 AM – 7:00 PM' },
    { days: 'Sunday', hours: 'By Prior Appointment / Site Visits Only' },
  ],

  // Legal & Tax Placeholders
  gstin: '[GSTIN - CONFIRM WITH CLIENT]', // PLACEHOLDER
  cin: '[CIN/REGISTRATION NO - OPTIONAL]', // PLACEHOLDER

  // Social Links Placeholders
  socialLinks: {
    facebook: 'https://facebook.com/needsgroup.mangaluru', // PLACEHOLDER
    instagram: 'https://instagram.com/needsgroup.mangaluru', // PLACEHOLDER
    youtube: 'https://youtube.com/@needsgroup', // PLACEHOLDER
    linkedin: 'https://linkedin.com/company/needs-group', // PLACEHOLDER
  },

  // Stats Counters
  stats: [
    { value: 15, suffix: '+', label: 'Years of Experience', sublabel: 'Master fabrication since 2009' },
    { value: 900, suffix: '+', label: 'Railing Projects Completed', sublabel: 'Across coastal Karnataka' },
    { value: 1200, suffix: '+', label: 'Happy Clients', sublabel: '[PLACEHOLDER - Confirm with client]' },
    { value: 8, suffix: '+', label: 'Cities & Regions Served', sublabel: 'Mangaluru, Udupi & surrounding' },
  ],

  // Form endpoint (Static form submission via Formspree or similar)
  formspreeEndpoint: 'https://formspree.io/f/xyzplaceholder', // PLACEHOLDER: Replace with client Formspree ID or web3forms key

  // Services Master Directory
  services: [
    {
      id: 'steel-railing',
      name: 'Steel Railing',
      slug: 'railings',
      sectionId: 'steel-railing',
      category: 'railings',
      shortDescription: 'Grade 304 and 316 stainless steel railings engineered for coastal weather resistance and timeless modern aesthetics.',
      detailUrl: '/services/railings/#steel-railing',
      iconName: 'steel',
      heroImage: '/images/services/steel-railing.webp',
    },
    {
      id: 'gi-railing',
      name: 'GI Railing',
      slug: 'railings',
      sectionId: 'gi-railing',
      category: 'railings',
      shortDescription: 'Heavy-duty galvanized iron railings offering rugged strength, high impact resistance, and powder-coated durability.',
      detailUrl: '/services/railings/#gi-railing',
      iconName: 'gi',
      heroImage: '/images/services/gi-railing.webp',
    },
    {
      id: 'glass-railing',
      name: 'Glass Railing',
      slug: 'railings',
      sectionId: 'glass-railing',
      category: 'railings',
      shortDescription: 'Toughened and laminated safety glass railings with spigot, base-channel, or minimalist point-fixed balustrades.',
      detailUrl: '/services/railings/#glass-railing',
      iconName: 'glass',
      heroImage: '/images/services/glass-railing.webp',
    },
    {
      id: 'wood-railing',
      name: 'Wood Railing',
      slug: 'railings',
      sectionId: 'wood-railing',
      category: 'railings',
      shortDescription: 'Premium seasoned hardwood handrails coupled with steel or glass inserts for warm, luxurious residential staircases.',
      detailUrl: '/services/railings/#wood-railing',
      iconName: 'wood',
      heroImage: '/images/services/wood-railing.webp',
    },
    {
      id: 'aluminium-railing',
      name: 'Aluminium Railing',
      slug: 'railings',
      sectionId: 'aluminium-railing',
      category: 'railings',
      shortDescription: 'Lightweight, 100% corrosion-proof extruded aluminium railings with anodized or architectural powder finishes.',
      detailUrl: '/services/railings/#aluminium-railing',
      iconName: 'aluminium',
      heroImage: '/images/services/aluminium-railing.webp',
    },
    {
      id: 'steel-window',
      name: 'Steel Window',
      slug: 'windows',
      sectionId: 'steel-window',
      category: 'windows',
      shortDescription: 'Robust welded steel window frames and decorative protective grills built for maximum home and industrial security.',
      detailUrl: '/services/windows/#steel-window',
      iconName: 'steel-window',
      heroImage: '/images/services/steel-window.webp',
    },
    {
      id: 'gi-window',
      name: 'GI Window',
      slug: 'windows',
      sectionId: 'gi-window',
      category: 'windows',
      shortDescription: 'Galvanized iron window systems treated with zinc-phosphate rustproofing for long service life against saline air.',
      detailUrl: '/services/windows/#gi-window',
      iconName: 'gi-window',
      heroImage: '/images/services/gi-window.webp',
    },
    {
      id: 'aluminium-window',
      name: 'Aluminium Window',
      slug: 'windows',
      sectionId: 'aluminium-window',
      category: 'windows',
      shortDescription: 'Slim-profile sliding and casement aluminium windows with smooth European roller tracks and acoustic weatherstripping.',
      detailUrl: '/services/windows/#aluminium-window',
      iconName: 'aluminium-window',
      heroImage: '/images/services/aluminium-window.webp',
    },
    {
      id: 'glass-canopy',
      name: 'Glass Canopy',
      slug: 'glass-canopy',
      sectionId: 'glass-canopy',
      category: 'canopy',
      shortDescription: 'Architectural structural glass canopies engineered with laminated safety glass and stainless steel spider fittings.',
      detailUrl: '/services/glass-canopy/',
      iconName: 'canopy',
      heroImage: '/images/services/glass-canopy.webp',
    },
    {
      id: 'interior-work',
      name: 'Interior Work',
      slug: 'interior-work',
      sectionId: 'interior-work',
      category: 'interior',
      shortDescription: 'Custom architectural metal and glass interior partitions, decorative dividers, staircase revamps, and turnkey fitouts.',
      detailUrl: '/services/interior-work/',
      iconName: 'interior',
      heroImage: '/images/services/interior-work.webp',
    },
    {
      id: 'construction',
      name: 'Construction',
      slug: 'construction',
      sectionId: 'construction',
      category: 'construction',
      shortDescription: 'End-to-end residential and commercial structural construction, civil works, elevations, and structural steel framing.',
      detailUrl: '/services/construction/',
      iconName: 'construction',
      heroImage: '/images/services/construction.webp',
    },
  ],

  // Process Steps (About Page & Home Highlights)
  processSteps: [
    {
      step: '01',
      title: 'Enquiry & Consultation',
      description: 'Reach out via WhatsApp or phone with your floor plans, design inspirations, or project requirements.',
    },
    {
      step: '02',
      title: 'Site Visit & Precision Measurement',
      description: 'Our technical specialists visit your site in Surathkal, Mangaluru, or surrounding areas for laser-accurate measurements and structural inspection.',
    },
    {
      step: '03',
      title: 'Design & Transparent Quote',
      description: 'We present 3D/2D structural schematics, material grading options (SS304/316, Toughened Glass, GI), and a transparent line-item quote in Indian Rupees (₹).',
    },
    {
      step: '04',
      title: 'In-House Fabrication',
      description: 'Precision TIG/MIG welding, automated glass cutting, edge polishing, and powder coating in our specialized coastal fabrication facility.',
    },
    {
      step: '05',
      title: 'Professional Installation',
      description: 'Our certified master riggers install your railing, windows, canopy, or structure with anchor fasteners rated for high wind loads.',
    },
    {
      step: '06',
      title: 'Quality Audit & Handover',
      description: 'A comprehensive structural stability inspection, glass cleaning, alignment check, and warranty handover.',
    },
  ],

  // Core Value Pillars
  values: [
    {
      title: 'Coastal Weather Durability',
      description: 'Mangaluru and Surathkal coastal air has high salinity. We use genuine SS304/SS316, marine-grade hardware, and hot-dip GI to ensure rust-free longevity.',
    },
    {
      title: '900+ Proven Installations',
      description: 'Over 15 years, our hands-on fabrication masters have delivered 900+ residential and commercial railing projects across Karnataka.',
    },
    {
      title: 'Tailored Architectural Customization',
      description: 'No generic off-the-shelf compromises. Every railing curve, window reveal, and glass canopy bracket is fabricated precisely to your architectural blueprint.',
    },
    {
      title: 'On-Time Handover Guarantee',
      description: 'We respect your construction schedule with strict milestone timelines and dedicated project managers for every site.',
    },
  ],

  // Testimonials (Placeholders with realistic context)
  testimonials: [
    {
      name: 'Raghavendra Bhat',
      location: 'Surathkal, Mangaluru',
      project: 'Frameless Glass Railing & Steel Windows',
      review: 'Needs Group installed frameless glass railings for our 3-storey villa near Surathkal beach. The quality of SS 316 fittings and 12mm toughened glass has withstood the coastal monsoon without a spot of rust. Highly professional team!',
      rating: 5,
    },
    {
      name: 'Preetham D’Souza',
      location: 'Kulai, Mangaluru',
      project: 'Aluminium Windows & Glass Canopy Entrance',
      review: 'From initial site measurement to final handover, the Needs Group team was punctual and skilled. The modern glass canopy over our commercial entrance looks stunning and provides great rain protection.',
      rating: 5,
    },
    {
      name: 'Suresh Shetty',
      location: 'Baikampady, Mangaluru',
      project: 'Industrial GI Railings & Structural Steel Works',
      review: 'We hired Needs Group for heavy GI balustrades and security windows in our commercial complex. 15 years of fabrication expertise clearly shows in their welding quality and finish.',
      rating: 5,
    },
  ],
};
