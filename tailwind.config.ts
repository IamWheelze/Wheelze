import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Custom high-contrast, non-corporate palette
        'deep-charcoal': '#1a1d29',
        'midnight-navy': '#0f1419',
        'muted-coral': '#ff6b6b',
        'electric-lavender': '#a78bfa',
        'warm-amber': '#fbbf24',
        'soft-sage': '#86efac',
      },
      fontFamily: {
        // Display font for headlines (bold, expressive)
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
        // Body font (highly readable, modern sans-serif)
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'slide-in': 'slideIn 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        slideIn: {
          '0%': { transform: 'translateY(100px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}

export default config
