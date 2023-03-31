/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui:{
    themes: [
      {
        cartheme:{
          primary: '#E91B25',
          secondary: '#313131',
        }
      }
    ]
  },
  theme: {
    extend: {
      fontFamily:{
        'sora' : ["'Sora', sans-serif"]
      }
    },
  },
  plugins: [require("daisyui")],
}
