/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '0',
      screens: {
        '2xl': '1440px',
      },
    },
    extend: {
      fontFamily: {
        heading: ['var(--font-prompt)'],
        sans: ['var(--font-karla)'],
      },
      colors: {
        dizajer: {
          red: 'var(--dizajer-red-hex)',
          yellow: 'var(--dizajer-yellow-hex)',
          text: 'var(--dizajer-text-hex)',
          green: 'var(--dizajer-green-hex)',
          black: 'var(--dizajer-black-hex)',
          brown: 'var(--dizajer-brown-hex)',
        },

        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      screens: {
        s: '320px',
        m: '375px',
        l: '425px',
        tablet: '768px',
      },
      boxShadow: {
        footer: '0px 2px 10px rgba(37, 33, 88, 0.25)',
        navigation: ' 0px 4px 4px rgba(128, 128, 128, 0.08)',
        icon: '0px -4px 4px 0px rgba(0, 0, 0, 0.25) inset, 0px 4px 4px 0px rgba(255, 255, 255, 0.25) inset',
        'icon-hover':
          '0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset, 0px -4px 4px 0px rgba(255, 255, 255, 0.25) inset',
      },
      borderRadius: {
        12: '12px',
        32: '32px',
        48: '48px',
        64: '64px',
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
