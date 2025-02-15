/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      transitionProperty: {
        shadow: "box-shadow",
        transform: "transform",
      },
      transitionDuration: {
        300: "300ms",
      },
      colors: {
        slate: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          900: '#0f172a',
        },
        emerald: {
          600: '#059669',
        }
      },
      boxShadow: {
        inner: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
        'sharp-sm': '0 2px 8px rgba(0,0,0,0.08)'
      }
    },
  },
  plugins: [],
};
