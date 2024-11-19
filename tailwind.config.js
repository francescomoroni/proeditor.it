/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        //'primary': '#60a5fa',
        'primary': '#111827',
        'text-primary': '#f9fafb',
        'text-secondary': '#525252',
      },
      animation: {
        marquee: 'marquee 15s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
    },
    fontFamily: {
      Dancing: ["Dancing Script", "cursive"],
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
} 