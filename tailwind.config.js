export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'xxss': '450px',
      'xxs': '540px', // min-width
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',


      'xl': '1280px',

    },
    
  },
  plugins: [],
}
