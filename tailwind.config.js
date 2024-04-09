/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      // 'tra' : {
      //   'tracking-widestmore':  
      // }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

