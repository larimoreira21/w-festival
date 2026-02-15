import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: 'var(--color-background)',
        foreground: 'var(--color-foreground)',
        border: 'var(--color-border)',
        primary: {
          DEFAULT: 'var(--color-primary)',
          foreground: 'var(--color-primary-foreground)',
        },
        accent: 'var(--color-accent)',
        'accent-hover': 'var(--color-accent-hover)',
        card: 'var(--color-card)',
        'card-dark': 'var(--color-card-dark)',
        live: 'var(--color-live)',
        muted: 'var(--color-muted)',
      },
    },
  },
  plugins: [],
} satisfies Config;
