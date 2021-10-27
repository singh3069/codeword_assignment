module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        customWidth: "1440px",
      },
      height: {
        headerHeight: "120px",
      },
      // photon:{
      //     position: "absolute",
      //     left: '9.65%',
      //     right: '84.58%',
      //     top: '44.58%',
      //     bottom: '31.25%',
      // }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
