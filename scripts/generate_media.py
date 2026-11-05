#!/usr/bin/env python3
import os
import cv2
import numpy as np
from PIL import Image, ImageDraw

os.makedirs('public/images/hero', exist_ok=True)
os.makedirs('public/images/services', exist_ok=True)
os.makedirs('public/images/projects', exist_ok=True)
os.makedirs('public/images/about', exist_ok=True)
os.makedirs('public/videos/hero', exist_ok=True)
os.makedirs('public/videos/services', exist_ok=True)
os.makedirs('public/videos/projects', exist_ok=True)

def create_pure_architectural_backdrop(path, width, height, theme="sky"):
    """Creates a clean, elegant, text-free architectural gradient backdrop for Light Studio mode."""
    # Base porcelain / white architectural canvas
    img = Image.new('RGB', (width, height), color=(248, 250, 252))
    draw = ImageDraw.Draw(img)

    # 1. Subtle, clean daylight vertical gradient
    for y in range(height):
        factor = y / height
        if theme == "sky":
            r = int(248 - 14 * factor)
            g = int(250 - 8 * factor)
            b = int(252 - 2 * factor)
        elif theme == "azure":
            r = int(245 - 18 * factor)
            g = int(248 - 10 * factor)
            b = int(254 - 2 * factor)
        else: # slate / steel
            r = int(246 - 10 * factor)
            g = int(248 - 10 * factor)
            b = int(250 - 8 * factor)
        draw.line([(0, y), (width, y)], fill=(r, g, b))

    # 2. Subtle architectural grid lines (light grey)
    grid_step = 64
    grid_color = (226, 232, 240)
    for x in range(0, width, grid_step):
        draw.line([(x, 0), (x, height)], fill=grid_color, width=1)
    for y in range(0, height, grid_step):
        draw.line([(0, y), (width, y)], fill=grid_color, width=1)

    # ZERO TEXT, NO LABELS, NO WATERMARKS!

    img.save(path, 'WEBP', quality=94)
    return img

def make_cv2_video(pil_img, mp4_path, webm_path, frames=48, fps=24):
    """Renders a smooth, subtle daylight light sweep across the backdrop without any text."""
    base_bgr = cv2.cvtColor(np.array(pil_img), cv2.COLOR_RGB2BGR)
    h, w, _ = base_bgr.shape

    fourcc_mp4 = cv2.VideoWriter_fourcc(*'mp4v')
    out_mp4 = cv2.VideoWriter(mp4_path, fourcc_mp4, fps, (w, h))

    fourcc_webm = cv2.VideoWriter_fourcc(*'VP80')
    out_webm = cv2.VideoWriter(webm_path, fourcc_webm, fps, (w, h))

    for f in range(frames):
        frame = base_bgr.copy()
        # Animated clean daylight beam sweeping cleanly
        beam_x = int((f / frames) * (w + 400)) - 200
        if 0 <= beam_x < w:
            overlay = frame.copy()
            # Clean daylight white sheen with slight sky tint (BGR format)
            cv2.line(overlay, (beam_x, 0), (beam_x + 140, h), (255, 245, 230), 60)
            cv2.addWeighted(overlay, 0.12, frame, 0.88, 0, frame)

        out_mp4.write(frame)
        out_webm.write(frame)

    out_mp4.release()
    out_webm.release()
    print(f"Rendered clean video pair: {mp4_path} & {webm_path}")

print("Regenerating Hero & Posters with NO TEXT in Architectural Light Mode...")
hero_img = create_pure_architectural_backdrop('public/images/hero/hero-poster.webp', 1280, 720, 'sky')
create_pure_architectural_backdrop('public/images/hero/hero-workshop.webp', 1280, 720, 'azure')
make_cv2_video(hero_img, 'public/videos/hero/hero-fabrication.mp4', 'public/videos/hero/hero-fabrication.webm')

print("Regenerating Service Banners with NO TEXT...")
banners = [
    ('public/images/about/about-poster.webp', 'public/videos/services/about-workshop.mp4', 'public/videos/services/about-workshop.webm', 'sky'),
    ('public/images/services/railings-banner-poster.webp', 'public/videos/services/railings-banner.mp4', 'public/videos/services/railings-banner.webm', 'azure'),
    ('public/images/services/windows-banner-poster.webp', 'public/videos/services/windows-banner.mp4', 'public/videos/services/windows-banner.webm', 'sky'),
    ('public/images/services/canopy-banner-poster.webp', 'public/videos/services/canopy-banner.mp4', 'public/videos/services/canopy-banner.webm', 'azure'),
    ('public/images/services/interior-banner-poster.webp', 'public/videos/services/interior-banner.mp4', 'public/videos/services/interior-banner.webm', 'slate'),
    ('public/images/services/construction-banner-poster.webp', 'public/videos/services/construction-banner.mp4', 'public/videos/services/construction-banner.webm', 'sky'),
]

for poster, mp4, webm, theme in banners:
    img = create_pure_architectural_backdrop(poster, 1280, 720, theme)
    make_cv2_video(img, mp4, webm)

print("Regenerating Service Detail Cards with NO TEXT...")
services = [
    ('public/images/services/steel-railing.webp', 'sky'),
    ('public/images/services/glass-railing.webp', 'azure'),
    ('public/images/services/gi-railing.webp', 'slate'),
    ('public/images/services/aluminium-railing.webp', 'sky'),
    ('public/images/services/wood-railing.webp', 'slate'),
    ('public/images/services/steel-window.webp', 'azure'),
    ('public/images/services/aluminium-window.webp', 'sky'),
    ('public/images/services/glass-canopy.webp', 'sky'),
    ('public/images/services/interior-work.webp', 'slate'),
    ('public/images/services/construction.webp', 'azure'),
]

for card, theme in services:
    create_pure_architectural_backdrop(card, 800, 500, theme)

print("Regenerating Project Showcase Thumbnails with NO TEXT...")
projects = [
    ('public/images/projects/project-featured-1.webp', 'public/videos/projects/project-featured-1.mp4', 'public/videos/projects/project-featured-1.webm', 'sky'),
    ('public/images/projects/project-featured-2.webp', 'public/videos/projects/project-featured-2.mp4', 'public/videos/projects/project-featured-2.webm', 'azure'),
    ('public/images/projects/project-featured-3.webp', 'public/videos/projects/project-featured-3.mp4', 'public/videos/projects/project-featured-3.webm', 'slate'),
    ('public/images/projects/project-featured-4.webp', 'public/videos/projects/project-featured-4.mp4', 'public/videos/projects/project-featured-4.webm', 'sky'),
]

for p_poster, p_mp4, p_webm, theme in projects:
    img = create_pure_architectural_backdrop(p_poster, 800, 500, theme)
    make_cv2_video(img, p_mp4, p_webm)

print("SUCCESS: All media regenerated in clean Architectural Light Mode with ZERO text!")
