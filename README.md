# Needs Group – Official Static Website

Production-ready, multi-page static website for **Needs Group** (domain: `needs.group`), premier architectural railing, window, glass canopy, interior, and construction specialist based in Surathkal, Mangaluru, Karnataka, India.

---

## 1. Hosting Architecture (Hostinger Shared Hosting)

- **100% Static Output:** Zero runtime Node.js, zero SSR, zero databases, and zero paid API dependencies.
- **Production Build:** `npm run build` compiles clean static HTML/CSS/JS and media assets directly into the `dist/` folder.
- **Self-Contained:** All images, videos, fonts, and scripts are local files served directly from the same domain.
- **Web Server Configuration:** `.htaccess` included in `public/` automatically deploys to `dist/.htaccess` with HTTPS enforcement, `www` to non-`www` canonical redirects, trailing slash handling (`/services` and `/services/`), Gzip/Brotli compression, long-term browser caching, and security headers.

---

## 2. Quickstart & Local Development

### Prerequisites
- Node.js 18+ (tested on Node v20/v26)
- npm 9+

### Commands
```bash
# 1. Install dependencies
npm install

# 2. Start local development server (live reloads at http://localhost:4321)
npm run dev

# 3. Build production static bundle
npm run build

# 4. Preview static production build locally
npm run preview
```

---

## 3. How to Deploy to Hostinger

### Option A: Uploading via Hostinger File Manager (Quickest for small updates)
1. Run `npm run build` locally.
2. In your terminal or file manager, open the generated `dist/` folder.
3. Compress the contents of `dist/` into a `.zip` archive (e.g., `dist.zip`).
4. Log in to **Hostinger hPanel** -> **File Manager** -> Open `domains/needs.group/public_html/`.
5. Upload `dist.zip` into `public_html/` and click **Extract**.
6. Ensure files like `index.html`, `.htaccess`, and folders (`about/`, `services/`, `images/`, `videos/`) sit directly inside `public_html/` (not inside a nested `public_html/dist/` subfolder).

### Option B: Uploading via FTP / FileZilla (Recommended for video files)
1. Connect via FTP using your Hostinger credentials:
   - **Host:** `ftp.needs.group` (or your Hostinger server IP)
   - **Port:** `21`
   - **Username:** `[Hostinger FTP user]`
   - **Password:** `[Hostinger FTP password]`
2. Upload the **CONTENTS of `dist/`** directly into `/public_html/`.
3. *Note on videos:* Large video files upload much more reliably over FTP with resume support than through the browser File Manager.

### Option C: Automated GitHub Actions Deployment
An automated workflow is configured at `.github/workflows/deploy.yml`. To enable automatic push-to-deploy:
1. Push your repository to GitHub.
2. Go to **Settings** -> **Secrets and variables** -> **Actions**.
3. Add the following repository secrets:
   - `FTP_HOST`: Your Hostinger FTP server hostname or IP.
   - `FTP_USERNAME`: Your Hostinger FTP account username.
   - `FTP_PASSWORD`: Your Hostinger FTP account password.
4. Any push to `main` will build the site and deploy `dist/` straight into `public_html/`.

---

## 4. How to Edit Business Content

All company details, phone numbers, addresses, stats, and services are centralized in **one single file**:
`src/data/site.ts`

- **Company Name & Tagline:** Edit `siteConfig.name` and `siteConfig.tagline`.
- **WhatsApp & Phone Numbers:** Edit `siteConfig.whatsappNumbers`. Adding or updating an entry here automatically updates all WhatsApp and phone modals across the site.
- **Service Areas:** Edit `siteConfig.serviceAreas`.
- **Stats Counters:** Edit `siteConfig.stats` to adjust experience years, completed project numbers, etc.
- **Formspree Endpoint:** Edit `siteConfig.formspreeEndpoint` with your Formspree form ID or web3forms access key.

---

## 5. How to Edit Media & Add Projects

All site media is centralized in:
`src/data/media.ts`

### Replacing an Existing Image or Video
Simply drop in a replacement file with the exact same name into the respective folder in `public/`.
For example, to update the Home hero video, replace:
- `public/videos/hero/hero-fabrication.mp4`
- `public/videos/hero/hero-fabrication.webm`
- `public/images/hero/hero-poster.webp`

### Adding a New Project to the Portfolio
In `src/data/media.ts`, append a new object to the `mediaManifest.projects` array:
```typescript
{
  id: 'proj-13',
  title: 'Custom Balcony Railing in Kadri',
  category: 'railings', // 'railings' | 'windows' | 'canopy' | 'interior' | 'construction'
  type: 'image',        // 'image' or 'video'
  image: '/images/projects/kadri-railing.webp',
  alt: 'Stainless steel balcony railing in Kadri, Mangaluru',
  location: 'Kadri, Mangaluru',
  description: 'SS 316 satin brush balustrade with 12mm clear safety glass.',
  clientType: 'Residential',
  completionYear: '2025',
}
```

---

## 6. Media Checklist Table

Every image and video slot across the website:

| Asset File Path | Page(s) | Recommended Dimensions | Max File Size | What It Should Show |
| :--- | :--- | :--- | :--- | :--- |
| `public/images/hero/hero-poster.webp` | Home (`/`) | 1280 x 720 px | < 150 KB | High-impact hero poster: precision railing or workshop |
| `public/videos/hero/hero-fabrication.mp4` | Home (`/`) | 1280 x 720 px | < 3 MB | 10-15s silent loop: TIG welding, glass balustrade fitting |
| `public/videos/hero/hero-fabrication.webm` | Home (`/`) | 1280 x 720 px | < 3 MB | WebM version of hero video for Chrome / Firefox |
| `public/images/about/about-poster.webp` | About (`/about/`) | 1280 x 720 px | < 150 KB | Heritage poster: fabrication machinery, team craftsmen |
| `public/videos/services/about-workshop.mp4` | About (`/about/`) | 1280 x 720 px | < 3 MB | 10-15s silent loop: inside Surathkal workshop facility |
| `public/videos/services/about-workshop.webm` | About (`/about/`) | 1280 x 720 px | < 3 MB | WebM format for about video banner |
| `public/images/services/railings-banner-poster.webp` | Railings (`/services/railings/`) | 1280 x 720 px | < 150 KB | Railings banner poster: glass or steel balustrade |
| `public/videos/services/railings-banner.mp4` | Railings (`/services/railings/`) | 1280 x 720 px | < 3 MB | 10-15s silent loop: railing pipe bending & installation |
| `public/videos/services/railings-banner.webm` | Railings (`/services/railings/`) | 1280 x 720 px | < 3 MB | WebM version of railings banner video |
| `public/images/services/windows-banner-poster.webp` | Windows (`/services/windows/`) | 1280 x 720 px | < 150 KB | Windows banner poster: acoustic sliding window |
| `public/videos/services/windows-banner.mp4` | Windows (`/services/windows/`) | 1280 x 720 px | < 3 MB | 10-15s silent loop: aluminium window track assembly |
| `public/videos/services/windows-banner.webm` | Windows (`/services/windows/`) | 1280 x 720 px | < 3 MB | WebM version of windows banner video |
| `public/images/services/canopy-banner-poster.webp` | Canopy (`/services/glass-canopy/`) | 1280 x 720 px | < 150 KB | Canopy banner poster: glass entrance canopy |
| `public/videos/services/canopy-banner.mp4` | Canopy (`/services/glass-canopy/`) | 1280 x 720 px | < 3 MB | 10-15s silent loop: structural glass spider fitting |
| `public/videos/services/canopy-banner.webm` | Canopy (`/services/glass-canopy/`) | 1280 x 720 px | < 3 MB | WebM version of canopy banner video |
| `public/images/services/interior-banner-poster.webp` | Interior (`/services/interior-work/`) | 1280 x 720 px | < 150 KB | Interior banner poster: fluted glass room divider |
| `public/videos/services/interior-banner.mp4` | Interior (`/services/interior-work/`) | 1280 x 720 px | < 3 MB | 10-15s silent loop: metal partition sliding door |
| `public/videos/services/interior-banner.webm` | Interior (`/services/interior-work/`) | 1280 x 720 px | < 3 MB | WebM version of interior banner video |
| `public/images/services/construction-banner-poster.webp`| Construction (`/services/construction/`)| 1280 x 720 px | < 150 KB | Construction banner poster: steel building frame |
| `public/videos/services/construction-banner.mp4` | Construction (`/services/construction/`)| 1280 x 720 px | < 3 MB | 10-15s silent loop: structural steel crane erection |
| `public/videos/services/construction-banner.webm` | Construction (`/services/construction/`)| 1280 x 720 px | < 3 MB | WebM version of construction banner video |
| `public/images/services/steel-railing.webp` | Railings / Services | 800 x 600 px | < 100 KB | Grade 304/316 SS staircase/balcony railing |
| `public/images/services/gi-railing.webp` | Railings / Services | 800 x 600 px | < 100 KB | Powder-coated galvanized iron railing |
| `public/images/services/glass-railing.webp` | Railings / Services | 800 x 600 px | < 100 KB | Frameless toughened glass balcony balustrade |
| `public/images/services/wood-railing.webp` | Railings / Services | 800 x 600 px | < 100 KB | Teak wood handrail with stainless steel insets |
| `public/images/services/aluminium-railing.webp` | Railings / Services | 800 x 600 px | < 100 KB | Extruded modular aluminium balustrade system |
| `public/images/services/steel-window.webp` | Windows / Services | 800 x 600 px | < 100 KB | High-security steel window frame and safety grill |
| `public/images/services/gi-window.webp` | Windows / Services | 800 x 600 px | < 100 KB | Monsoon-proof GI casement window profile |
| `public/images/services/aluminium-window.webp` | Windows / Services | 800 x 600 px | < 100 KB | Acoustic sliding aluminium multi-track window |
| `public/images/services/glass-canopy.webp` | Canopy / Services | 800 x 600 px | < 100 KB | Laminated glass entrance canopy with SS brackets |
| `public/images/services/interior-work.webp` | Interior / Services | 800 x 600 px | < 100 KB | Black steel & fluted glass room partition |
| `public/images/services/construction.webp` | Construction / Services | 800 x 600 px | < 100 KB | Turnkey commercial structural steel frame |
| `public/images/about/workshop-inspection.webp` | About | 800 x 600 px | < 100 KB | Workshop laser inspection and welding quality audit |
| `public/images/about/founder-craftsmanship.webp` | About | 800 x 600 px | < 100 KB | Master fabricator assembling balustrade fittings |
| `public/images/about/installation-team.webp` | About | 800 x 600 px | < 100 KB | Certified riggers fastening balcony balustrades |
| `public/images/projects/*.webp` | Projects Gallery | 800 x 500 px | < 100 KB | Real project photographs across Mangaluru |
| `public/videos/projects/*.mp4 & *.webm` | Projects Gallery / Home | 1280 x 720 px | < 2 MB | Real project demonstration clips for lightbox |

---

## 7. Client Information Placeholders to Confirm

The following values are currently formatted as placeholders in `src/data/site.ts`:

1. **Street Address:** `[STREET/LANDMARK]` in `siteConfig.address.street`
2. **Pincode:** `[PINCODE]` in `siteConfig.address.pincode` (e.g. `575014` for Surathkal)
3. **GSTIN Number:** `[GSTIN]` in `siteConfig.gstin`
4. **Formspree Form Endpoint:** `siteConfig.formspreeEndpoint` (defaults to placeholder `https://formspree.io/f/xyzplaceholder`)
5. **Social Media URLs:** Facebook, Instagram, YouTube, and LinkedIn in `siteConfig.socialLinks`
6. **Confirmed Service Areas:** Confirm whether coverage extends to Mulki, Baikampady, Katipalla, Kulai, Udupi, or additional Dakshina Kannada taluks
7. **Official Legal Name:** `[CONFIRM OFFICIAL REGISTERED NAME]` in `siteConfig.legalName`
