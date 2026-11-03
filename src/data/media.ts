export interface MediaVideoSource {
  mp4: string;
  webm: string;
  poster: string;
  title: string;
  description: string;
  duration?: string;
  uploadDate?: string;
}

export interface ProjectMediaItem {
  id: string;
  title: string;
  category: 'railings' | 'windows' | 'canopy' | 'interior' | 'construction';
  type: 'image' | 'video';
  image: string; // Used as image or video poster
  videoSources?: {
    mp4: string;
    webm: string;
  };
  alt: string;
  location: string;
  description: string;
  clientType: 'Residential' | 'Commercial' | 'Industrial';
  completionYear: string;
}

export interface MediaManifest {
  hero: {
    video: MediaVideoSource;
    poster: string;
    alt: string;
  };
  banners: {
    about: MediaVideoSource;
    railings: MediaVideoSource;
    windows: MediaVideoSource;
    glassCanopy: MediaVideoSource;
    interiorWork: MediaVideoSource;
    construction: MediaVideoSource;
  };
  serviceCards: Record<string, { image: string; alt: string; caption: string }>;
  featuredVideos: ProjectMediaItem[];
  projects: ProjectMediaItem[];
  about: {
    workshop: { image: string; alt: string };
    craftsmanship: { image: string; alt: string };
    installation: { image: string; alt: string };
  };
  ogImage: string;
}

export const mediaManifest: MediaManifest = {
  ogImage: '/images/hero/hero-poster.webp',

  hero: {
    video: {
      mp4: '/videos/hero/hero-fabrication.mp4',
      webm: '/videos/hero/hero-fabrication.webm',
      poster: '/images/hero/hero-poster.webp',
      title: 'Needs Group Precision Railing, Window & Glass Fabrication in Mangaluru',
      description: 'Precision stainless steel, glass balustrade, and structural canopy fabrication at Needs Group workshop in Surathkal, Mangaluru.',
      duration: 'PT0M12S',
      uploadDate: '2024-01-15',
    },
    poster: '/images/hero/hero-poster.webp',
    alt: 'Needs Group architectural metal fabrication workshop and glass railing installation in Surathkal, Mangaluru',
  },

  banners: {
    about: {
      mp4: '/videos/services/about-workshop.mp4',
      webm: '/videos/services/about-workshop.webm',
      poster: '/images/about/about-poster.webp',
      title: 'Needs Group Workshop & Engineering Heritage',
      description: 'Inside the 15-year master fabrication facility of Needs Group in Surathkal, Mangaluru.',
      duration: 'PT0M10S',
      uploadDate: '2024-01-15',
    },
    railings: {
      mp4: '/videos/services/railings-banner.mp4',
      webm: '/videos/services/railings-banner.webm',
      poster: '/images/services/railings-banner-poster.webp',
      title: 'Architectural Steel, Glass and Aluminium Railings',
      description: 'Precision welding and installation of custom balcony and staircase railings across Mangaluru.',
      duration: 'PT0M10S',
      uploadDate: '2024-01-15',
    },
    windows: {
      mp4: '/videos/services/windows-banner.mp4',
      webm: '/videos/services/windows-banner.webm',
      poster: '/images/services/windows-banner-poster.webp',
      title: 'Custom Steel, GI and Aluminium Window Systems',
      description: 'High-precision fabrication of weather-sealed windows for coastal Karnataka weather.',
      duration: 'PT0M10S',
      uploadDate: '2024-01-15',
    },
    glassCanopy: {
      mp4: '/videos/services/canopy-banner.mp4',
      webm: '/videos/services/canopy-banner.webm',
      poster: '/images/services/canopy-banner-poster.webp',
      title: 'Laminated Architectural Glass Canopies',
      description: 'Structural glass entrance canopies with stainless steel spider fittings in Surathkal.',
      duration: 'PT0M10S',
      uploadDate: '2024-01-15',
    },
    interiorWork: {
      mp4: '/videos/services/interior-banner.mp4',
      webm: '/videos/services/interior-banner.webm',
      poster: '/images/services/interior-banner-poster.webp',
      title: 'Turnkey Architectural Interior Metal & Glass Fitouts',
      description: 'Custom metal partitions, acoustic dividers, and luxury staircases in Mangaluru homes.',
      duration: 'PT0M10S',
      uploadDate: '2024-01-15',
    },
    construction: {
      mp4: '/videos/services/construction-banner.mp4',
      webm: '/videos/services/construction-banner.webm',
      poster: '/images/services/construction-banner-poster.webp',
      title: 'Turnkey Structural Construction and Elevation Fabrication',
      description: 'Heavy structural steel framing and modern building elevations across coastal Karnataka.',
      duration: 'PT0M10S',
      uploadDate: '2024-01-15',
    },
  },

  serviceCards: {
    'steel-railing': {
      image: '/images/services/steel-railing.webp',
      alt: 'Grade 304 and 316 stainless steel railing fabricated in Surathkal, Mangaluru',
      caption: 'Marine-grade SS railings engineered for coastal climate longevity.',
    },
    'gi-railing': {
      image: '/images/services/gi-railing.webp',
      alt: 'Galvanized iron GI railing with industrial powder coating in Mangaluru',
      caption: 'Heavy-duty rustproof GI railings for balconies and boundary walls.',
    },
    'glass-railing': {
      image: '/images/services/glass-railing.webp',
      alt: 'Frameless toughened safety glass railing installed in Surathkal home',
      caption: 'Panoramic frameless glass railings with base-channel systems.',
    },
    'wood-railing': {
      image: '/images/services/wood-railing.webp',
      alt: 'Handcrafted teak wood handrail with stainless steel balusters in Mangaluru',
      caption: 'Luxury hardwood handrails paired with modern metal accents.',
    },
    'aluminium-railing': {
      image: '/images/services/aluminium-railing.webp',
      alt: 'Modular extruded aluminium railing installed in coastal Karnataka villa',
      caption: '100% rustproof lightweight extruded aluminium balcony balustrades.',
    },
    'steel-window': {
      image: '/images/services/steel-window.webp',
      alt: 'Custom welded steel window frame and safety grill in Surathkal, Mangaluru',
      caption: 'High-security welded steel window frames and decorative grills.',
    },
    'gi-window': {
      image: '/images/services/gi-window.webp',
      alt: 'Zinc-coated GI window profiles for coastal weather in Mangaluru',
      caption: 'Anti-corrosive GI windows designed to withstand heavy monsoon rain.',
    },
    'aluminium-window': {
      image: '/images/services/aluminium-window.webp',
      alt: 'Slim-line sliding aluminium window system installed in Mangaluru apartment',
      caption: 'Precision sliding and casement aluminium windows with acoustic seals.',
    },
    'glass-canopy': {
      image: '/images/services/glass-canopy.webp',
      alt: 'Architectural structural glass canopy over entrance in Surathkal, Mangaluru',
      caption: 'Sleek laminated glass canopies with SS 316 spider brackets.',
    },
    'interior-work': {
      image: '/images/services/interior-work.webp',
      alt: 'Modern steel and glass interior room divider fabricated in Mangaluru',
      caption: 'Bespoke metal partitions, decorative screens, and staircase remodels.',
    },
    'construction': {
      image: '/images/services/construction.webp',
      alt: 'Turnkey residential and commercial structural steel construction in Mangaluru',
      caption: 'Turnkey structural civil works, elevation frames, and commercial additions.',
    },
  },

  about: {
    workshop: {
      image: '/images/about/workshop-inspection.webp',
      alt: 'Needs Group 15-year precision metal fabrication workshop in Surathkal, Mangaluru',
    },
    craftsmanship: {
      image: '/images/about/founder-craftsmanship.webp',
      alt: 'Master craftsman assembling architectural glass railing brackets in Mangaluru',
    },
    installation: {
      image: '/images/about/installation-team.webp',
      alt: 'Needs Group certified installation team mounting glass balcony balustrades',
    },
  },

  // Featured video showcase on Home page
  featuredVideos: [
    {
      id: 'video-glass-railing',
      title: 'Frameless Glass Balcony Balustrade Installation',
      category: 'railings',
      type: 'video',
      image: '/images/projects/glass-railing-balcony-poster.webp',
      videoSources: {
        mp4: '/videos/projects/glass-railing-balcony.mp4',
        webm: '/videos/projects/glass-railing-balcony.webm',
      },
      alt: 'Video showcase of frameless glass balcony railing installation in Surathkal villa',
      location: 'Surathkal, Mangaluru',
      description: 'Watch our technicians align 12mm heat-strengthened laminated glass panels with concealed aluminum base shoe channels.',
      clientType: 'Residential',
      completionYear: '2024',
    },
    {
      id: 'video-steel-staircase',
      title: 'SS 316 Spiral Staircase Railing Fabrication',
      category: 'railings',
      type: 'video',
      image: '/images/projects/steel-staircase-fabrication-poster.webp',
      videoSources: {
        mp4: '/videos/projects/steel-staircase-fabrication.mp4',
        webm: '/videos/projects/steel-staircase-fabrication.webm',
      },
      alt: 'Video of stainless steel spiral staircase railing TIG welding and polishing in Mangaluru',
      location: 'Kadri, Mangaluru',
      description: 'Precision pipe bending, mirror-finish buffing, and seamless TIG welding for a luxury residential duplex staircase.',
      clientType: 'Residential',
      completionYear: '2024',
    },
    {
      id: 'video-canopy-install',
      title: 'Commercial Entrance Glass Canopy Installation',
      category: 'canopy',
      type: 'video',
      image: '/images/projects/glass-canopy-installation-poster.webp',
      videoSources: {
        mp4: '/videos/projects/glass-canopy-installation.mp4',
        webm: '/videos/projects/glass-canopy-installation.webm',
      },
      alt: 'Video of structural glass canopy installation with SS spider fittings in Mangaluru',
      location: 'Kottara Chowki, Mangaluru',
      description: 'Lifting and securing 13.52mm laminated glass panels onto heavy-duty cantilevered steel I-beam brackets.',
      clientType: 'Commercial',
      completionYear: '2023',
    },
    {
      id: 'video-window-system',
      title: 'Acoustic Aluminium Sliding Window Assembly',
      category: 'windows',
      type: 'video',
      image: '/images/projects/aluminium-sliding-window-poster.webp',
      videoSources: {
        mp4: '/videos/projects/aluminium-sliding-window.mp4',
        webm: '/videos/projects/aluminium-sliding-window.webm',
      },
      alt: 'Video demonstrating smooth gliding aluminium window system in coastal Mangaluru',
      location: 'Bejai, Mangaluru',
      description: 'Heavy duty multi-point locking mechanisms and double-glazed acoustic weatherstripping tested for high wind resistance.',
      clientType: 'Commercial',
      completionYear: '2024',
    },
  ],

  // Projects Gallery combining photos and video tiles
  projects: [
    {
      id: 'proj-01',
      title: 'Frameless Toughened Glass Balcony Railing',
      category: 'railings',
      type: 'image',
      image: '/images/projects/project-01-glass-balcony.webp',
      alt: 'Frameless toughened safety glass railing installed on seaside villa in Surathkal, Mangaluru',
      location: 'Surathkal Beach Road, Mangaluru',
      description: '12mm clear toughened glass panels fitted with marine-grade SS 316 spigots offering unobstructed Arabian Sea views.',
      clientType: 'Residential',
      completionYear: '2024',
    },
    {
      id: 'proj-02',
      title: 'SS 316 Spiral Staircase Balustrade',
      category: 'railings',
      type: 'video',
      image: '/images/projects/steel-staircase-fabrication-poster.webp',
      videoSources: {
        mp4: '/videos/projects/steel-staircase-fabrication.mp4',
        webm: '/videos/projects/steel-staircase-fabrication.webm',
      },
      alt: 'Video of stainless steel spiral staircase railing installation in Mangaluru villa',
      location: 'Kadri Hills, Mangaluru',
      description: 'Custom curved stainless steel railing with satin brush finish and continuous circular handrail.',
      clientType: 'Residential',
      completionYear: '2024',
    },
    {
      id: 'proj-03',
      title: 'Galvanized Iron Boundary & Terrace Railing',
      category: 'railings',
      type: 'image',
      image: '/images/projects/project-03-gi-terrace.webp',
      alt: 'Hot-dip galvanized iron terrace railing with matte black finish in Mulki',
      location: 'Mulki, Karnataka',
      description: 'High-tensile GI square hollow balustrades treated with zinc primer and UV-resistant architectural powder coating.',
      clientType: 'Residential',
      completionYear: '2023',
    },
    {
      id: 'proj-04',
      title: 'Teak Wood Handrail with Glass Infill Balustrade',
      category: 'railings',
      type: 'image',
      image: '/images/projects/project-04-wood-glass.webp',
      alt: 'Seasoned teak wood top rail with toughened glass balustrade in Mangaluru interior',
      location: 'Kulai, Mangaluru',
      description: 'Warm natural polished teak handrail securely integrated with 10mm frosted glass panels for private luxury.',
      clientType: 'Residential',
      completionYear: '2024',
    },
    {
      id: 'proj-05',
      title: 'Coastal Aluminium Balustrade System',
      category: 'railings',
      type: 'image',
      image: '/images/projects/project-05-aluminium-railing.webp',
      alt: 'Extruded aluminium modular railing installed on apartment balcony in Baikampady',
      location: 'Baikampady, Mangaluru',
      description: 'Extruded architectural aluminium with 25-micron anodic oxidation, 100% immune to salt-spray corrosion.',
      clientType: 'Commercial',
      completionYear: '2023',
    },
    {
      id: 'proj-06',
      title: 'High-Acoustic Aluminium Sliding Windows',
      category: 'windows',
      type: 'video',
      image: '/images/projects/aluminium-sliding-window-poster.webp',
      videoSources: {
        mp4: '/videos/projects/aluminium-sliding-window.mp4',
        webm: '/videos/projects/aluminium-sliding-window.webm',
      },
      alt: 'Video demonstration of smooth sliding acoustic aluminium window in Mangaluru',
      location: 'Bejai, Mangaluru',
      description: 'Triple-track sliding window system with integrated stainless steel anti-mosquito mesh and EPDM acoustic gaskets.',
      clientType: 'Residential',
      completionYear: '2024',
    },
    {
      id: 'proj-07',
      title: 'Industrial Heavy-Duty Steel Security Windows',
      category: 'windows',
      type: 'image',
      image: '/images/projects/project-07-steel-window.webp',
      alt: 'Fabricated steel window frame and heavy security grill in industrial facility Surathkal',
      location: 'Surathkal Industrial Zone',
      description: 'Laser-cut welded mild steel frames reinforced with internal security rebar and epoxy anti-corrosion coating.',
      clientType: 'Industrial',
      completionYear: '2023',
    },
    {
      id: 'proj-08',
      title: 'Zinc-Treated GI Casement Window Profiles',
      category: 'windows',
      type: 'image',
      image: '/images/projects/project-08-gi-window.webp',
      alt: 'Corrosion resistant GI casement windows installed in coastal Katipalla building',
      location: 'Katipalla, Mangaluru',
      description: 'Galvanized iron hollow section frames custom manufactured for cyclone-prone coastal wind loads.',
      clientType: 'Commercial',
      completionYear: '2024',
    },
    {
      id: 'proj-09',
      title: 'Commercial Cantilevered Glass Canopy',
      category: 'canopy',
      type: 'video',
      image: '/images/projects/glass-canopy-installation-poster.webp',
      videoSources: {
        mp4: '/videos/projects/glass-canopy-installation.mp4',
        webm: '/videos/projects/glass-canopy-installation.webm',
      },
      alt: 'Video of glass canopy installation on commercial complex entrance in Mangaluru',
      location: 'Kottara Chowki, Mangaluru',
      description: '13.52mm PVB laminated safety glass suspended by marine-grade SS 316 spider brackets and tie-rod tension trusses.',
      clientType: 'Commercial',
      completionYear: '2023',
    },
    {
      id: 'proj-10',
      title: 'Villa Portico Architectural Glass Canopy',
      category: 'canopy',
      type: 'image',
      image: '/images/projects/project-10-villa-canopy.webp',
      alt: 'Architectural tinted glass canopy protecting front entrance of modern home in Udupi',
      location: 'Udupi, Karnataka',
      description: 'Solar control tinted laminated glass canopy fitted over dark charcoal powder-coated structural steel beams.',
      clientType: 'Residential',
      completionYear: '2024',
    },
    {
      id: 'proj-11',
      title: 'Steel & Fluted Glass Interior Partition Divider',
      category: 'interior',
      type: 'image',
      image: '/images/projects/project-11-interior-partition.webp',
      alt: 'Bespoke steel and fluted glass room partition wall inside luxury apartment in Mangaluru',
      location: 'Mangaladevi, Mangaluru',
      description: 'Slim-profile matte black steel grid frames with acoustic fluted privacy glass for modern open-plan homes.',
      clientType: 'Residential',
      completionYear: '2024',
    },
    {
      id: 'proj-12',
      title: 'Commercial Multi-Level Structural Steel Frame',
      category: 'construction',
      type: 'image',
      image: '/images/projects/project-12-construction-frame.webp',
      alt: 'Structural steel framing and civil construction erection in Surathkal',
      location: 'Surathkal, Mangaluru',
      description: 'Heavy structural steel columns, composite decking, and precision foundation anchoring for a commercial retail showroom.',
      clientType: 'Commercial',
      completionYear: '2023',
    },
  ],
};
