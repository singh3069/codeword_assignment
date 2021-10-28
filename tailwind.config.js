module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        headerHeight: "120px",
        imageOneHeight: "716px",
      },
      fontFamily: {
        Sora: ["Sora", "sans-serif"],
        Josefin: ["Josefin Sans"],
      },

      width: {
        themeWidth: "823.38px",
        textWidth: "772.23px",
        imageOneWidth: "817.17px",
      },

      fontSize: {
        themeFontS: [
          "80px",
          {
            lineHeight: "110%",
          },
        ],

        textFontS: [
          "25px",
          {
            lineHeight: "180%",
          },
        ],

        listFontS: [
          "15px",
          {
            lineHeight: "350%",
          },
        ],

        nextPriceFontS: [
          "12px",
          {
            lineHeight: "350%",
          },
        ],

        CurologyFontSizeNdLineHeight: [
          "24px",
          {
            lineHeight: "130%",
          },
        ],

        priceFontSize: [
          "25px",
          {
            lineHeight: "180%",
          },
        ],

        featuredFontSize: [
          "43px",
          {
            lineHeight: "110%",
          },
        ],
      },

      backgroundColor: {
        backgroundCol: "#FBC761",
        primaryBlack: "#0F101B",
      },

      textColor: {
        checked: "#F3CE85",
        unChecked: "#E0E0E0",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
