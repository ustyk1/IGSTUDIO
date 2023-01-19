/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{html,js}"],
  theme: {
    // screens: {
    //   mobile: "640px",
    //   tablet: "960px",
    //   desktop: "1280px",
    // }, 
    container: {
      // screens: {
      //   mobile: "600px",
      //   tablet: "900px",
      //   desktop: "1200px",
      // },
      center: true,
      padding: '1rem',
      
    },
    colors: {
      'white-rgba-03': 'rgba(255, 255, 255, 0.1)',
      "black": "#000000",
      "black-dark": "#111111",
      "gray-dark": "#171717",
      "gray-light": "#2E2E2E",
      "gray": "#1D1D1D",
      "yellow": "#E3B748",
      "white": "#fff",
      "silver": "#E6E6E6",
      "transparent": "transparent",
    },
    fontFamily: {
      sans: ["Inter", "sans-serif"],
      body: ['"Inter"'],
    },
    extend: {
      flex: {
        '2': '0 0 360px'
      }
    },
  },
  plugins: [],
}
