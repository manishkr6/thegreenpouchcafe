# The Green Pouch Cafe & Personalised Gifting Studio

> **"A little escape in the middle of the city."**  
> An award-level, high-end, responsive single-page web experience created for **The Green Pouch Cafe** (@thegreenpouchcafe) — a specialty cafe and bespoke personalised gifting studio based in Thane, Maharashtra, India.

---

## ✨ Features & Highlights

- **Editorial Luxury Aesthetics**: Custom color palette blending fresh lime green (`#8DC63F`), deep forest green (`#0F1A12`), and warm cream (`#FBF7EA`) with gold accents, grain texture overlays, and modern typography (*Playfair Display* & *Plus Jakarta Sans*).
- **Buttery Smooth Scrolling**: Powered by **Lenis** integrated with **Framer Motion** for effortless inertial scrolling and anchor navigation.
- **Top Scroll Progress Indicator**: Real-time gradient progress bar tracking reading position.
- **Micro-Interactions & Parallax**:
  - Word-by-word headline reveal in the Hero section.
  - 3D interactive tilt cards on cafe menu items.
  - Multi-speed parallax image collage in the Story section.
  - Self-drawing SVG timeline on the 4-step customization process.
  - Infinite horizontal marquee pausing on hover.
  - Rotating circular text badge stamp (*"Happiness Delivered • Fresh Coffee • Custom Gifts"*).
  - Floating WhatsApp chat launcher with unread notification pulse.
  - Desktop custom cursor follower (automatically disabled on touch devices).
- **Integrated Gifting Studio Bento-Grid**:
  - Showcases Personalised Mugs, Tumblers, Photo Frames, Travel Flasks, Gift Hampers, Corporate Bundles, and Botanical Decor.
  - Clicking **"Enquire"** on any category smoothly scrolls to the contact form and **auto-selects** that category.
- **Interactive Lightbox Gallery**:
  - Masonry grid of 9 cafe and gifting moments.
  - Keyboard accessible Lightbox (close with `Esc`, navigate with `←` / `→` arrow keys).
- **Seasonal & Festive Ribbon**:
  - Highlights Indian festivals (Ganesh Chaturthi, Diwali, Raksha Bandhan, Holi, New Year, Women's Day) with advance booking links.
- **Working Contact Form (Web3Forms Backend)**:
  - Validates full name, email, and Indian phone number formats (`+91` or 10-digit).
  - Spam protection with a hidden honeypot (`botcheck`).
  - Animated button loading spinner.
  - Success state with confetti celebration (`canvas-confetti`) and friendly error handling with retry.
- **SEO & Accessibility**:
  - Semantic HTML5 structure.
  - Open Graph, Twitter Cards, and schema.org `CafeOrCoffeeShop` JSON-LD for local Thane SEO.
  - Fallbacks for `prefers-reduced-motion`.

---

## 🛠️ Tech Stack

- **React 18** + **Vite**
- **Tailwind CSS v3** (Custom extended theme)
- **Framer Motion** (Scroll, hover, parallax & entrance animations)
- **Lenis** (Inertial smooth scrolling)
- **Lucide React** (Vector icons)
- **Canvas Confetti** (Interactive celebratory feedback)
- **Web3Forms** (Serverless zero-backend contact form)

---

## 🚀 Quick Start Guide

### 1. Clone & Install Dependencies
```bash
git clone <repository-url>
cd thegreenpouchcafe
npm install
```

### 2. Configure Environment Variables
Copy `.env.example` to `.env`:
```bash
cp .env.example .env
```
Open `.env` and set your **Web3Forms Access Key**:
```env
VITE_WEB3FORMS_ACCESS_KEY=your_key_here
```

#### How to get a free Web3Forms Key (takes 30 seconds):
1. Visit [https://web3forms.com/](https://web3forms.com/).
2. Enter the email address where you want customer inquiries delivered (e.g., `thegreenpouchcafe@gmail.com`).
3. Check your email for the free `access_key` and paste it into `.env`.
> *Note: If no key is set or the default demo key is present, the form operates in demo mode, simulating realistic latency and logging submissions without throwing errors.*

### 3. Run Development Server
```bash
npm run dev
```
Open [http://localhost:5173/](http://localhost:5173/) (or the port specified in terminal) in your browser.

### 4. Build for Production
```bash
npm run build
```
The optimized production bundle will be generated in `dist/`.

---

## 📁 Project Structure

```
thegreenpouchcafe/
├── public/
│   └── favicon.svg               # Brand monogram favicon
├── src/
│   ├── components/
│   │   ├── ui/
│   │   │   ├── Logo.jsx          # Vector leaf/pouch monogram & wordmark
│   │   │   ├── Preloader.jsx     # Under-1.5s intro animation
│   │   │   ├── ScrollProgress.jsx # Top scroll indicator
│   │   │   ├── CustomCursor.jsx  # Desktop cursor follower
│   │   │   ├── FloatingWhatsApp.jsx # Floating chat launcher
│   │   │   └── InstagramIcon.jsx # Vector Instagram icon
│   │   ├── Navbar.jsx            # Sticky glassmorphism nav with scrollspy
│   │   ├── Hero.jsx              # Hero with parallax and rotating badge
│   │   ├── Marquee.jsx           # Infinite scrolling marquee strip
│   │   ├── About.jsx             # Story, parallax collage & count-up stats
│   │   ├── Cafe.jsx              # 3D tilt cards & celebration booking
│   │   ├── Gifting.jsx           # Bento-grid with category routing
│   │   ├── Process.jsx           # Self-drawing timeline on scroll
│   │   ├── Collection.jsx        # Signature mug collection snap scroller
│   │   ├── Corporate.jsx         # B2B perks & bulk inquiry banner
│   │   ├── Gallery.jsx           # Masonry grid & keyboard lightbox
│   │   ├── Festive.jsx           # Seasonal gifting specials
│   │   ├── Testimonials.jsx      # Auto-sliding customer review carousel
│   │   ├── FAQ.jsx               # Expandable accordion
│   │   ├── Contact.jsx           # Split layout with Web3Forms & validation
│   │   └── Footer.jsx            # Large wordmark, hours, and back-to-top
│   ├── data/
│   │   ├── content.js            # Brand info, stats, menu, faqs, corporate perks
│   │   ├── images.js             # Centralized high-res photography URLs
│   │   └── testimonials.js       # Curated customer reviews
│   ├── hooks/
│   │   ├── useLenis.js           # Lenis initialization & anchor scroller
│   │   ├── useScrollSpy.js       # Active section detector for Navbar
│   │   └── useCountUp.js         # Ease-out number counter animation
│   ├── lib/
│   │   ├── validators.js         # Email & Indian phone number validation
│   │   └── web3forms.js          # Web3Forms API POST helper
│   ├── App.jsx                   # Master layout connecting all 15 sections
│   ├── index.css                 # Tailwind layers, custom scrollbars & grain
│   └── main.jsx
├── tailwind.config.js            # Custom brand tokens & typography
├── .env.example
└── README.md
```

---

## 🎨 How to Customize Content & Images

All editable texts, prices, hours, contact numbers, and photography URLs are organized in central files so you never need to edit JSX code:

1. **Images & Photos**: Edit `src/data/images.js` to swap any Unsplash placeholder with your own real cafe photos or product shots.
2. **Text & Menus**: Edit `src/data/content.js` to change prices, hours, address, phone numbers, or FAQs.
3. **Reviews**: Edit `src/data/testimonials.js` to add new customer testimonials from Google or Instagram.

---

## 🌐 Deployment

### Deploying to Vercel (Recommended)
1. Push your repository to GitHub.
2. Go to [vercel.com](https://vercel.com) and click **"Add New Project"**.
3. Import your repository. Vercel automatically detects Vite.
4. Under **Environment Variables**, add `VITE_WEB3FORMS_ACCESS_KEY` with your Web3Forms key.
5. Click **Deploy**.

### Deploying to Netlify
1. Go to [netlify.com](https://netlify.com) and drag & drop the `dist/` folder after running `npm run build`, OR connect your GitHub repository.
2. Build command: `npm run build`
3. Publish directory: `dist`
4. In **Site Configuration > Environment Variables**, add `VITE_WEB3FORMS_ACCESS_KEY`.
