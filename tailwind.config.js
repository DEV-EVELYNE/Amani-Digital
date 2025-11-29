/** @type {import(\'tailwindcss\').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        coral: {
          100: "#FFF2EE",
          800: "#B95D4A",
        },
      },
    },
  },
  plugins: [],
}