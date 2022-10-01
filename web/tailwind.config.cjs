/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
    './index.html'
  ],
  theme: {
    screens: {
      'teste': '300px',
      // => @media (min-width: 300px) { ... } Acima de 300px aplique isso.

      'footerBreakePoint': { 'max': '695px' },
      'formModalBreakePoint': { 'max': '465px' },
      'formModalOverFlowBreakePoint': { 'max': '1015px' },
    },
    fontFamily: {
      sans: ["Inter", "sans-sefif"],
    },
    extend: {
      backgroundImage: {
        galaxy: "url('/fundo.png')",
        "duo-gradient": "linear-gradient(89.86deg, #9572FC 16.08%, #43E7AD 50.94%, #E1D55D 72.57%)",
        "game-gradient": "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 67.08%)",
      },
      width: {
        slideAdjuste: "calc(100% - 54px)",
      },
      fontSize: {
        mainTitleResponsive: "clamp(15px, 10vw, 60px)",
        formTextResponsive: "clamp(5px, 3.5vw, 15px);",
      }
    },
  },
  plugins: [],
}
