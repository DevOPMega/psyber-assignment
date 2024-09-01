/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "bg-1": "#2a2c38",
        "bg-2": "#ff9021",
        "bg-3": "#22232d",
        "bg-4": "#f5f5f5",
        "logo": "#002f6d",
        "heading": "#2a2c38",
        "text-1": "#585855",
      },
      animation: {
        'zoomOut': 'zoomOut 8s linear infinite alternate'
      },
      keyframes: {
        zoomOut: {
          '0%': {transform: 'scale(1.4)'},
          '25%': {transform: 'scale(1.35)'},
          '50%': {transform: 'scale(1.3)'},
          '75%': {transform: 'scale(1.25)'},
          '100%': {transform: 'scale(1.2)'}
        }
      }
    },
    
  },
  plugins: [],
};
