# NIIT — Nexus Institute of Innovation & Technology

A modern, fully-responsive multi-page static website for **NIIT (Nexus Institute of Innovation & Technology)** — Rwanda's hybrid learning facilitation center for internationally recognized online degree programs.

> **Tagline:** Innovate • Connect • Transform
> **Location:** Kigali, Rwanda
> **Year Established:** 2025

---

## 🎨 Design System

- **Primary Color:** Navy Blue `#0B1F4D` (from your logo)
- **Accent Color:** Gold `#D4A437` (from your logo)
- **Fonts:** Playfair Display (headings) + Inter (body) — via Google Fonts
- **Icons:** Font Awesome 6 (CDN)
- **No build tools required** — pure HTML / CSS / JavaScript

---

## 📁 Project Structure

```
niit-website/
│
├── index.html              ← Home page
├── about.html              ← About NIIT
├── programs.html           ← All 7 program pathways
├── admissions.html         ← Apply (includes Supabase form)
├── how-it-works.html       ← Hybrid learning model
├── ai-lab.html             ← AI Learning Lab
├── student-life.html       ← Student life
├── scholarships.html       ← Scholarships
├── partnerships.html       ← Partners
├── faq.html                ← FAQ (accordion)
├── contact.html            ← Contact (includes Supabase form)
├── README.md               ← This file
│
├── css/
│   └── style.css           ← Master stylesheet (navy + gold theme)
│
├── js/
│   ├── main.js             ← Mobile menu, accordion, animations
│   └── supabase-config.js  ← 🔻 PUT YOUR SUPABASE KEYS HERE 🔻
│
└── images/
    ├── README.txt          ← List of expected images and where they go
    └── (drop your photos here using the filenames in images/README.txt)
```

---

## ✅ How to Use This Code

### 1. Copy to VS Code
- Download / copy all files into a folder on your computer
- Open the folder in **VS Code**
- Install the **Live Server** extension (Ritwick Dey)
- Right-click `index.html` → **"Open with Live Server"**

### 2. Add Your Logo & Images
- Drop your **NIIT logo** into `images/logo.png`
- Drop the rest of your photos into `images/` using the filenames listed in `images/README.txt`
- (Or change any `<img src="...">` path in the HTML to your own image URLs)

### 3. Connect Supabase (your database)
Open **`js/supabase-config.js`** and replace these two placeholders with your credentials:

```javascript
const SUPABASE_URL      = "INSERT_YOUR_SUPABASE_URL_HERE";       // 👈 paste here
const SUPABASE_ANON_KEY = "INSERT_YOUR_SUPABASE_ANON_KEY_HERE"; // 👈 paste here
```

You can find these in your **Supabase dashboard → Project Settings → API**.

### 4. Create the Required Supabase Tables
In your Supabase dashboard, create **two tables**:

#### Table 1: `contact_messages`
| Column      | Type        | Notes                                |
|-------------|-------------|--------------------------------------|
| id          | uuid        | Primary key, default `uuid_generate_v4()` |
| full_name   | text        |                                      |
| email       | text        |                                      |
| phone       | text        |                                      |
| subject     | text        |                                      |
| message     | text        |                                      |
| created_at  | timestamptz | default `now()`                      |

#### Table 2: `admissions_applications`
| Column          | Type        | Notes                                |
|-----------------|-------------|--------------------------------------|
| id              | uuid        | Primary key, default `uuid_generate_v4()` |
| full_name       | text        |                                      |
| email           | text        |                                      |
| phone           | text        |                                      |
| country         | text        |                                      |
| program         | text        |                                      |
| education_level | text        |                                      |
| message         | text        |                                      |
| created_at      | timestamptz | default `now()`                      |

> ⚠️ **Don't forget to enable Row-Level Security policies** in Supabase that allow `INSERT` from the anon/public role for these tables, so the website can submit forms.

---

## 📑 Pages & Sections (matches your spec exactly)

### Home (`index.html`)
- ✅ Hero Section
- ✅ Why NIIT
- ✅ International Degree Pathways
- ✅ AI Learning
- ✅ Admissions CTA
- ✅ Student Success

### About NIIT (`about.html`)
- ✅ Institution Overview
- ✅ Vision & Mission
- ✅ Institutional Model
- ✅ Leadership
- ✅ Core Values

### Programs (`programs.html`)
- ✅ Business & Entrepreneurship
- ✅ Information Technology
- ✅ Public Health
- ✅ Communication & Media
- ✅ Social Work
- ✅ Education
- ✅ AI & Digital Skills

### Admissions (`admissions.html`)
- ✅ How To Apply
- ✅ Enrollment Process
- ✅ Orientation
- ✅ Fees & Scholarships
- ✅ Student Requirements
- ✅ Live application form connected to Supabase

### How It Works (`how-it-works.html`)
- ✅ Hybrid Learning Model
- ✅ Physical Facilitation
- ✅ Digital Learning Systems
- ✅ AI Learning Support
- ✅ Mentorship Structure

### AI Learning Lab (`ai-lab.html`)
- ✅ Prompt Engineering
- ✅ AI Productivity
- ✅ Automation Tools
- ✅ AI Projects
- ✅ Digital Portfolios

### Student Life (`student-life.html`)
- ✅ Study Environment
- ✅ Peer Collaboration
- ✅ Mentorship
- ✅ Events & Workshops
- ✅ Community Activities

### Scholarships (`scholarships.html`)
- ✅ Merit Scholarships
- ✅ Need-Based Support
- ✅ Community Support
- ✅ Financial Accessibility

### Partnerships (`partnerships.html`)
- ✅ Technology Partners
- ✅ Employer Networks
- ✅ Learning Platforms
- ✅ Innovation Collaborations

### FAQ (`faq.html`) — Interactive accordion
- ✅ What is NIIT?
- ✅ How the Facilitation Model Works
- ✅ International Degree Support
- ✅ Learning Schedule
- ✅ Student Support

### Contact (`contact.html`)
- ✅ Admissions Inquiry
- ✅ Campus Location (with Google Maps embed)
- ✅ Live contact form connected to Supabase

---

## 🔧 Where to Customize

### Phone Numbers / Emails
All pages use `+250 XXX XXX XXX` and `info@niit.rw`. **Search and replace** these globally:
- `+250 XXX XXX XXX` → your real phone
- `info@niit.rw` → your real email
- `admissions@niit.rw` → admissions email
- `partners@niit.rw` → partnerships email

### Google Maps
In `contact.html`, replace the `<iframe src="...">` with your real Google Maps embed URL.
(Get one from Google Maps → Share → Embed a map)

### Social Media Links
In each page's footer, the social icons currently link to `"#"`. Replace with your real Facebook / Twitter / LinkedIn / Instagram / YouTube URLs.

### Leadership Team
In `about.html`, replace `[Founder Name]`, `[Academic Lead]`, etc. with real names + photos.

### Pricing
Fees are kept general (no specific amounts) in `admissions.html` and `scholarships.html` — add your actual pricing when ready.

---

## 🌟 Features

✅ Fully responsive (mobile, tablet, desktop)
✅ Sticky navigation with dropdown menus
✅ Animated counters & fade-in scroll effects
✅ Interactive FAQ accordion
✅ Contact & application forms with Supabase integration
✅ Modern card-based design with hover effects
✅ Semantic HTML + accessibility-friendly
✅ Loads fonts and icons via fast CDN
✅ Clean code structure — easy to customize

---

## 📦 No Dependencies to Install

Everything works with just the files in this repo + your browser. All external libraries (Google Fonts, Font Awesome, Supabase) are loaded from CDN, so no `npm install` or build step required.

---

## 🚀 Deployment

When ready to go live:
- Upload all files to any static host (Netlify, Vercel, GitHub Pages, Hostinger, etc.)
- Or push to a domain via cPanel / FTP

---

## 🤝 Credits

- **Design & Code:** Built for NIIT — Nexus Institute of Innovation & Technology
- **Logo:** Provided by NIIT
- **Fonts:** Google Fonts (Playfair Display, Inter)
- **Icons:** Font Awesome 6
- **Database:** Supabase (configure your own project)

---

© 2025 Nexus Institute of Innovation & Technology (NIIT). All rights reserved.
