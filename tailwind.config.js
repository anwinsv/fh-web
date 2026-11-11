/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#E5372A',
        link: '#F36F21',
        amber: '#FDA83A',
        canvas: '#141414',
        ink: '#FFF4E8',
        body: '#C2B8AD',
        muted: '#827970',
        faint: '#262220',
        hairline: '#2A2522',
        cream: '#FFF4E8',
        charcoal: '#141414',
      },
      fontFamily: {
        title: ['"LT Wave UI"', 'Lexend', '-apple-system', 'sans-serif'],
        text: ['"LT Wave"', 'Outfit', '-apple-system', 'sans-serif'],
        mono: ['"LT Wave Mono"', '"Space Mono"', '"SF Mono"', 'monospace'],
      },
      boxShadow: {
        glow: '0 0 24px rgba(229, 55, 42, 0.4)',
        amberGlow: '0 0 24px rgba(253, 168, 58, 0.4)',
      },
      borderRadius: {
        none: '0px',
        sharp: '0px',
        pill: '9999px',
      },
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
        'max-w': '1920px',
      }
    },
  },
  plugins: [],
}

