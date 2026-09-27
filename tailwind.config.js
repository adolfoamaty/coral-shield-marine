/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        coral: '#FF674D',
        teal: '#007A9B',
        navy: '#0F2C4A',
        light: '#F4F6F8'
      },
    },
  },
  plugins: [],
}
