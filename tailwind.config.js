/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'bg-color': 'rgb(62 64 84)',
        'font-color': '#FFE4CE',
        'fill': '#FFF6EF'
      },
      backgroundImage: {
        'bg-Img': 'url(/img/bg.png)',
        'opacity': '0.39'
      },

    },
  },
  plugins: [],
}