module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FFFFFF",
        secondary: "#3276FA",
        tertiary: "#FAFAFA",
        heading: "#1E1E1E",
        subHeading: "#1E1E1E",
        simple: "#848FAC",
        border: "#EFF3FA",
        footer: "#021638",
      },
      fontSize: {
        heading: "2rem",
        subHeading: "2rem",
        simple: "1rem",
      },
      fontWeight: {
        heading: "700",
        subHeading: "500",
      },
      fontFamily: {
        heading: ["Manrope"],
        subHeading: ["Manrope"],
        simple: ["Manrope"],
      },
      // backgroundImage: {
      //   sign: "url('/src/images/side.png')",
      //   bannerImg: "url('/src/images/BannerImg.png')",
      // },
    },
  },
  plugins: [],
};
