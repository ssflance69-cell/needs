#!/usr/bin/env python3
import os
import cv2
import numpy as np
from PIL import Image, ImageDraw, ImageFont

os.makedirs('public/images/hero', exist_ok=True)
os.makedirs('public/images/services', exist_ok=True)
os.makedirs('public/images/projects', exist_ok=True)
os.makedirs('public/images/about', exist_ok=True)
os.makedirs('public/videos/hero', exist_ok=True)
os.makedirs('public/videos/services', exist_ok=True)
os.makedirs('public/videos/projects', exist_ok=True)

def create_rich_image(path, width, height, title, subtitle, tag="NEEDS GROUP", theme="amber"):
    img = Image.new('RGB', (width, height), color=(15, 23, 42)) # Slate 900
    draw = ImageDraw.Draw(img)

    # Gradient background
    for y in range(height):
        factor = y / height
        if theme == "amber":
            r = int(11 + 22 * factor)
            g = int(15 + 28 * factor)
            b = int(25 + 40 * factor)
        elif theme == "cyan":
            r = int(10 + 15 * factor)
            g = int(20 + 40 * factor)
            b = int(35 + 60 * factor)
        else: # steel
            r = int(15 + 30 * factor)
            g = int(20 + 35 * factor)
            b = int(28 + 48 * factor)
        draw.line([(0, y), (width, y)], fill=(r, g, b))

    # Architectural grid lines
    step = 40
    for x in range(0, width, step):
        draw.line([(x, 0), (x, height)], fill=(30, 41, 59))
    for y in range(0, height, step):
        draw.line([(0, y), (width, y)], fill=(30, 41, 59))

    # Metallic accent bar
    accent_color = (245, 158, 11) if theme == "amber" else (56, 189, 248) if theme == "cyan" else (148, 163, 184)
    draw.rectangle([(60, 60), (70, height - 60)], fill=accent_color)
    draw.rectangle([(60, 60), (width - 60, 66)], fill=accent_color)

    # Frame corner accents
    draw.line([(width - 60, 60), (width - 60, 120)], fill=accent_color, width=4)
    draw.line([(60, height - 60), (width - 60, height - 60)], fill=accent_color, width=4)
    draw.line([(width - 60, height - 120), (width - 60, height - 60)], fill=accent_color, width=4)

    # Tag badge
    draw.rectangle([(90, 80), (360, 116)], fill=(30, 41, 59))
    draw.rectangle([(90, 80), (360, 116)], outline=accent_color, width=1)

    try:
        font_large = ImageFont.truetype("/System/Library/Fonts/Helvetica.ttc", 40)
        font_sub = ImageFont.truetype("/System/Library/Fonts/Helvetica.ttc", 20)
        font_tag = ImageFont.truetype("/System/Library/Fonts/Helvetica.ttc", 15)
        font_badge = ImageFont.truetype("/System/Library/Fonts/Helvetica.ttc", 16)
    except Exception:
        font_large = ImageFont.load_default()
        font_sub = ImageFont.load_default()
        font_tag = ImageFont.load_default()
        font_badge = ImageFont.load_default()

    draw.text((105, 89), tag, fill=accent_color, font=font_tag)
    draw.text((95, height // 2 - 40), title, fill=(248, 250, 252), font=font_large)
    draw.text((95, height // 2 + 25), subtitle, fill=(203, 213, 225), font=font_sub)
    draw.text((95, height - 100), "Surathkal • Mangaluru • 15 Years Precision Fabrication", fill=(148, 163, 184), font=font_badge)

    # Compass / engineering reticle
    cx, cy = width - 150, height // 2
    draw.ellipse([(cx - 60, cy - 60), (cx + 60, cy + 60)], outline=(51, 65, 85), width=2)
    draw.ellipse([(cx - 40, cy - 40), (cx + 40, cy + 40)], outline=accent_color, width=2)
    draw.line([(cx - 75, cy), (cx + 75, cy)], fill=(51, 65, 85), width=1)
    draw.line([(cx, cy - 75), (cx, cy + 75)], fill=(51, 65, 85), width=1)

    img.save(path, 'WEBP', quality=88)
    return img

def make_cv2_video(pil_img, mp4_path, webm_path, frames=48, fps=24):
    # Convert PIL Image (RGB) to OpenCV format (BGR)
    base_bgr = cv2.cvtColor(np.array(pil_img), cv2.COLOR_RGB2BGR)
    h, w, _ = base_bgr.shape

    # 1. Write MP4 using avc1
    fourcc_mp4 = cv2.VideoWriter_fourcc(*'avc1')
    out_mp4 = cv2.VideoWriter(mp4_path, fourcc_mp4, fps, (w, h))

    # 2. Write WebM using VP80
    fourcc_webm = cv2.VideoWriter_fourcc(*'VP80')
    out_webm = cv2.VideoWriter(webm_path, fourcc_webm, fps, (w, h))

    # Render subtle glowing sweep effect across frames
    for f in range(frames):
        frame = base_bgr.copy()
        # Animated light beam position
        beam_x = int((f / frames) * (w + 400)) - 200
        # Overlay subtle light column
        if 0 <= beam_x < w:
            overlay = frame.copy()
            cv2.line(overlay, (beam_x, 0), (beam_x + 100, h), (255, 255, 255), 40)
            cv2.addWeighted(overlay, 0.08, frame, 0.92, 0, frame)

        out_mp4.write(frame)
        out_webm.write(frame)

    out_mp4.release()
    out_webm.release()
    print(f"Rendered video pair: {mp4_path} & {webm_path}")

print("Generating Hero & Posters...")
hero_img = create_rich_image('public/images/hero/hero-poster.webp', 1280, 720, 'Needs Group Fabrication', 'Railing, Windows, Glass Canopy & Construction', 'SURATHKAL • MANGALURU', 'amber')
create_rich_image('public/images/hero/hero-workshop.webp', 1280, 720, 'Precision Metal Workshop', '15 Years of Master Craftsmanship in Coastal Karnataka', 'FABRICATION FACILITY', 'cyan')
make_cv2_video(hero_img, 'public/videos/hero/hero-fabrication.mp4', 'public/videos/hero/hero-fabrication.webm')

print("Generating Service Banners...")
banners = [
    ('public/images/about/about-poster.webp', 'public/videos/services/about-workshop.mp4', 'public/videos/services/about-workshop.webm', '15 Years of Heritage', 'Engineered for Coastal Resilience', 'ABOUT NEEDS GROUP', 'amber'),
    ('public/images/services/railings-banner-poster.webp', 'public/videos/services/railings-banner.mp4', 'public/videos/services/railings-banner.webm', 'Architectural Railings', 'Steel, GI, Toughened Glass, Wood & Aluminium', 'MASTER BALUSTRADES', 'amber'),
    ('public/images/services/windows-banner-poster.webp', 'public/videos/services/windows-banner.mp4', 'public/videos/services/windows-banner.webm', 'Custom Window Systems', 'Heavy-Duty Steel, GI & Modern Aluminium Sliding', 'WEATHER-SEALED WINDOWS', 'cyan'),
    ('public/images/services/canopy-banner-poster.webp', 'public/videos/services/canopy-banner.mp4', 'public/videos/services/canopy-banner.webm', 'Laminated Glass Canopies', 'Stainless Steel Spider Brackets & Glazing', 'ARCHITECTURAL CANOPIES', 'cyan'),
    ('public/images/services/interior-banner-poster.webp', 'public/videos/services/interior-banner.mp4', 'public/videos/services/interior-banner.webm', 'Interior Metal & Glass', 'Partitions, Dividers & Luxury Staircases', 'BESPOKE INTERIORS', 'steel'),
    ('public/images/services/construction-banner-poster.webp', 'public/videos/services/construction-banner.mp4', 'public/videos/services/construction-banner.webm', 'Turnkey Construction', 'Structural Steel Framing, Civil Works & Elevations', 'COMMERCIAL & RESIDENTIAL', 'amber'),
]

for poster, mp4, webm, title, subtitle, tag, theme in banners:
    img = create_rich_image(poster, 1280, 720, title, subtitle, tag, theme)
    make_cv2_video(img, mp4, webm)

print("Generating Service Detail Cards...")
services = [
    ('public/images/services/steel-railing.webp', 'Steel Railing', 'Grade 304/316 Stainless Steel Balustrades', 'amber'),
    ('public/images/services/gi-railing.webp', 'GI Railing', 'Galvanized Iron Rustproof Railings', 'steel'),
    ('public/images/services/glass-railing.webp', 'Glass Railing', 'Frameless Toughened Glass Balustrades', 'cyan'),
    ('public/images/services/wood-railing.webp', 'Wood Railing', 'Seasoned Hardwood Handrails & Balusters', 'amber'),
    ('public/images/services/aluminium-railing.webp', 'Aluminium Railing', 'Extruded Aluminium Balustrade Systems', 'cyan'),
    ('public/images/services/steel-window.webp', 'Steel Window', 'High-Security Steel Frames & Grills', 'steel'),
    ('public/images/services/gi-window.webp', 'GI Window', 'Galvanized Iron Monsoon-Proof Windows', 'steel'),
    ('public/images/services/aluminium-window.webp', 'Aluminium Window', 'Acoustic Sliding & Casement Aluminium', 'cyan'),
    ('public/images/services/glass-canopy.webp', 'Glass Canopy', 'Laminated Cantilevered Entrance Glazing', 'cyan'),
    ('public/images/services/interior-work.webp', 'Interior Work', 'Architectural Partitions & Metal Dividers', 'steel'),
    ('public/images/services/construction.webp', 'Construction', 'Turnkey Civil & Structural Framing', 'amber'),
]

for path, title, sub, theme in services:
    create_rich_image(path, 800, 600, title, sub, 'NEEDS GROUP SERVICE', theme)

print("Generating About images...")
about_imgs = [
    ('public/images/about/workshop-inspection.webp', 'Workshop QA Audit', 'Structural Laser Alignment & Welding Audit', 'amber'),
    ('public/images/about/founder-craftsmanship.webp', 'Master Craftsmanship', '15 Years of Railing & Glazing Expertise', 'steel'),
    ('public/images/about/installation-team.webp', 'Certified Rigging Team', 'Precision Anchor Fastening & Safety Standards', 'cyan'),
]
for path, title, sub, theme in about_imgs:
    create_rich_image(path, 800, 600, title, sub, 'SURATHKAL WORKSHOP', theme)

print("Generating Showcase Videos...")
project_videos = [
    ('public/images/projects/glass-railing-balcony-poster.webp', 'public/videos/projects/glass-railing-balcony.mp4', 'public/videos/projects/glass-railing-balcony.webm', 'Glass Railing Project', 'Frameless 12mm Balcony Balustrade in Surathkal', 'VIDEO SHOWCASE', 'cyan'),
    ('public/images/projects/steel-staircase-fabrication-poster.webp', 'public/videos/projects/steel-staircase-fabrication.mp4', 'public/videos/projects/steel-staircase-fabrication.webm', 'SS 316 Spiral Railing', 'Seamless TIG Welded Curved Staircase', 'VIDEO SHOWCASE', 'amber'),
    ('public/images/projects/glass-canopy-installation-poster.webp', 'public/videos/projects/glass-canopy-installation.mp4', 'public/videos/projects/glass-canopy-installation.webm', 'Commercial Glass Canopy', 'Stainless Steel Spider Brackets Installation', 'VIDEO SHOWCASE', 'cyan'),
    ('public/images/projects/aluminium-sliding-window-poster.webp', 'public/videos/projects/aluminium-sliding-window.mp4', 'public/videos/projects/aluminium-sliding-window.webm', 'Sliding Window System', 'High Wind Load Testing in Coastal Mangaluru', 'VIDEO SHOWCASE', 'cyan'),
]

for poster, mp4, webm, title, subtitle, tag, theme in project_videos:
    img = create_rich_image(poster, 1280, 720, title, subtitle, tag, theme)
    make_cv2_video(img, mp4, webm)

print("Generating Project Photos...")
project_photos = [
    ('public/images/projects/project-01-glass-balcony.webp', 'Frameless Glass Balcony', 'Surathkal Seaside Residence', 'cyan'),
    ('public/images/projects/project-03-gi-terrace.webp', 'GI Terrace Balustrades', 'Mulki Coastal Villa', 'steel'),
    ('public/images/projects/project-04-wood-glass.webp', 'Teak Wood & Glass Railing', 'Kulai Duplex Staircase', 'amber'),
    ('public/images/projects/project-05-aluminium-railing.webp', 'Aluminium Balustrade', 'Baikampady Commercial Building', 'cyan'),
    ('public/images/projects/project-07-steel-window.webp', 'Steel Security Windows', 'Surathkal Industrial Complex', 'steel'),
    ('public/images/projects/project-08-gi-window.webp', 'GI Casement Windows', 'Katipalla Commercial Complex', 'steel'),
    ('public/images/projects/project-10-villa-canopy.webp', 'Villa Portico Glass Canopy', 'Udupi Residential Entrance', 'cyan'),
    ('public/images/projects/project-11-interior-partition.webp', 'Steel & Fluted Glass Divider', 'Mangaluru Modern Penthouse', 'steel'),
    ('public/images/projects/project-12-construction-frame.webp', 'Structural Steel Frame', 'Surathkal Multi-Level Commercial', 'amber'),
]

for path, title, sub, theme in project_photos:
    create_rich_image(path, 800, 600, title, sub, 'COMPLETED PROJECT', theme)

print("DONE! All placeholder images and videos created!")
