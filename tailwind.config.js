/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "nsans-light": "Nsans-Light",
        "nsans-regular": "Nsans-Regular",
        "nsans-medium": "Nsans-Medium",
        "nsans-bold": "Nsans-Bold",
      },
    },
  },
  plugins: [],
};
