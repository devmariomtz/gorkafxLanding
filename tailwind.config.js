/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero": "url('/src/assets/bg.jpg')",
        "trayectoria": "url('/src/assets/honda.png')"
      },
    },
  },
  plugins: [],
};
