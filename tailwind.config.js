/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary": "#2525f4",
        "electric-blue": "#2E31FF",
        "background-dark": "#050508",
      },
      fontFamily: {
        "display": ["Space Grotesk", "sans-serif"],
        "mono": ["Fira Code", "monospace"]
      },
      borderRadius: {
        "DEFAULT": "0rem",
        "lg": "0.5rem",
        "xl": "1rem",
        "full": "9999px"
      },
    },
  },
  plugins: [],
}
