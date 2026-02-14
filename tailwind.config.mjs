/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        cream: '#FAFAF8',
        sage: '#4D6946',
        border: '#4D6946',
        input: '#4D6946',
        ring: '#4D6946',
        background: '#FAFAF8',
        foreground: '#4D6946',
        primary: {
          DEFAULT: '#4D6946',
          foreground: '#FAFAF8',
        },
        secondary: {
          DEFAULT: '#FAFAF8',
          foreground: '#4D6946',
        },
        muted: {
          DEFAULT: '#F5F5F3',
          foreground: '#4D6946',
        },
        accent: {
          DEFAULT: '#E8E8E5',
          foreground: '#4D6946',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['EB Garamond', 'serif'],
      },
      fontSize: {
        base: ['16px', { lineHeight: '1.6' }],
      },
      maxWidth: {
        'reading': '65ch',
        'breakout': '90rem',
      },
      borderRadius: {
        lg: '0.5rem',
        md: '0.375rem',
        sm: '0.25rem',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [],
};
