/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryBlack: "#000000", // 블랙
        primaryNavy: "#000080", // 네이비 블루
        primaryGreen: "#006400", // 딥 그린
        primaryGray: "#A9A9A9", // 다크 그레이
        primaryBrown: "#8B4513", // 브라운
      },
    },
  },
  plugins: [],
};
