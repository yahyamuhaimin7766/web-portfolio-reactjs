/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        darkBg: "#09090b", // Zinc 950 (Sangat gelap, elegan)
        darkCard: "#18181b", // Zinc 900
        accent: "#a1a1aa", // Zinc 400 (Abu-abu silver)
        accentHover: "#e4e4e7", // Zinc 200 (Putih keabu-abuan untuk hover)
      },
    },
  },
  plugins: [],
};
