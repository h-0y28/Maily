/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryBackground: "#FFF7E8", // 크림 베이지 (따뜻하고 눈에 편안함)
        primaryBlack: "#2B2B2B", // 소프트 블랙 (딱딱하지 않은 차분한 블랙)
        primaryNavy: "#34495E", // 차분한 딥 네이비 블루
        primaryGreen: "#4CAF50", // 자연스러운 잔디 그린 (안정감 있음)
        primaryGray: "#B0BEC5", // 소프트 그레이 (중립적이고 눈이 편안함)
        primaryBrown: "#A67B5B", // 카멜 브라운 (따뜻한 느낌 강조)
        primaryRed: "#D67D6D", // 소프트 핑크 레드 (부드러운 포인트 컬러)
      },
    },
    fontFamily: {
      sans: ["Pretendard", "system-ui"],
    },
  },
  plugins: [],
};
