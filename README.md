# Wheelze - Custom Development Agency Portfolio

A high-performance, visually stunning portfolio website built with cutting-edge web technologies. This project showcases advanced interactive features, smooth animations, and a sophisticated design system.

## Features

### Design & UX
- **Tone Progression**: Professional → Warm/Friendly → Experimental aesthetic journey
- **Unique Color Palette**: Non-corporate, high-contrast colors (deep charcoal, electric lavender, muted coral, warm amber)
- **Dual Typography System**: Expressive display font + highly readable body font
- **Asymmetrical Layouts**: Broken grid design for visual interest

### Interactive Elements
- **Custom Cursor**: Dynamic cursor that changes state on hover (links, projects, buttons)
- **Portfolio Filtering**: Smooth filtering for Websites, Web Apps, and ML projects
- **Bold Hover Effects**: 3D tilt, layer reveals, and color displacement on project tiles
- **Scroll-Triggered Animations**: GSAP-powered parallax and morphing effects
- **Physics-Based Micro-interactions**: Spring animations using Framer Motion
- **Smooth Scrolling**: Lenis integration for buttery-smooth scroll experience

## Tech Stack

### Core Framework
- **Next.js 14+** (App Router) - Server-side rendering, optimal performance
- **TypeScript** - Type-safe development
- **React 18** - Latest React features

### Styling
- **Tailwind CSS** - Utility-first CSS with custom design tokens
- **Custom CSS** - Advanced effects and animations

### Animation & Interaction
- **Framer Motion** - Physics-based animations and micro-interactions
- **GSAP + ScrollTrigger** - Advanced scroll effects and timelines
- **Lenis** - Smooth scroll implementation

### Advanced Features
- **React Three Fiber** - 3D graphics capability (optional use)
- **@react-three/drei** - React Three.js helpers

## Project Structure

```
wheelze/
├── app/
│   ├── about/page.tsx          # About page with stats animation
│   ├── blog/page.tsx            # Blog listing page
│   ├── contact/page.tsx         # Contact form with warm design
│   ├── portfolio/page.tsx       # Portfolio with filtering system
│   ├── services/page.tsx        # Services with value pricing
│   ├── layout.tsx               # Root layout with fonts
│   ├── page.tsx                 # Home page with tone progression
│   └── globals.css              # Global styles and utilities
├── components/
│   ├── portfolio/
│   │   ├── PortfolioFilters.tsx # Filtering UI component
│   │   ├── PortfolioGrid.tsx    # Project grid with animation
│   │   └── ProjectTile.tsx      # Individual project card with 3D effects
│   ├── CustomCursor.tsx         # Custom cursor implementation
│   ├── Navigation.tsx           # Responsive navigation
│   └── SmoothScroll.tsx         # Lenis smooth scroll wrapper
├── public/                      # Static assets
├── tailwind.config.ts           # Tailwind configuration
├── tsconfig.json                # TypeScript configuration
└── package.json                 # Dependencies

```

## Getting Started

### Prerequisites
- Node.js 18+ and npm

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Key Pages

### Home (`/`)
Three-section layout with tone progression:
1. **Hero**: Professional & established
2. **Services**: Warm & friendly with asymmetrical grid
3. **CTA**: Experimental with floating shapes

### Portfolio (`/portfolio`)
Most interactive section featuring:
- Prominent filtering (All, Websites, Web Apps, ML)
- 3D tilt effects on project tiles
- Unique hover states with layer reveals
- Color-coded categories

### Services (`/services`)
Value-driven approach with:
- Detailed service descriptions
- Asymmetrical layout alternating sides
- Custom consultation CTA (no fixed pricing)

### Contact (`/contact`)
Warm contact experience:
- Friendly form design
- Process timeline
- Multiple contact methods

## Design System

### Colors
```css
--deep-charcoal: #1a1d29
--midnight-navy: #0f1419
--muted-coral: #ff6b6b
--electric-lavender: #a78bfa
--warm-amber: #fbbf24
--soft-sage: #86efac
```

### Typography
- **Display Font**: Space Grotesk (bold, expressive headlines)
- **Body Font**: Inter (readable, modern)

### Animation Philosophy
- Physics-based springs for natural feel
- Smooth, subtle transitions (not jarring)
- Performance-first (GPU-accelerated)
- Scroll-triggered reveals

## Performance Optimizations

- Next.js automatic code splitting
- Image optimization
- Font optimization with `next/font`
- Lazy loading for heavy components
- GSAP performance best practices
- Smooth scroll with RAF optimization

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## Future Enhancements

- [ ] Add actual project images
- [ ] Implement blog CMS integration
- [ ] Add form backend for contact submissions
- [ ] Enhance with more Three.js 3D elements
- [ ] Add page transitions
- [ ] Implement horizontal scroll sections
- [ ] Add dark/light mode toggle
- [ ] Integrate analytics

## License

Proprietary - Wheelze Development Agency

## Credits

Built with passion by the Wheelze team.
