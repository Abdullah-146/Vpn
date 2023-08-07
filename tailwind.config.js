module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#092857",
        secondary: "#8D98A9",
        tertiary: "#FAFAFA",
        bluish: "#0A7AF9",
        heading: "#092857",
        subHeading: "#8D98A9",
        simple: "#092857",
        border: "#EFF3FA",
        footer: "#021638",
      },
      fontSize: {
        heading: "2rem",
        subHeading: "1.5rem",
        simple: "1rem",
      },
      fontWeight: {
        heading: "700",
        subHeading: "600",
        simple: "400",
      },
      fontFamily: {
        heading: ["Maven Pro", "sans-serif"],
        subHeading: ["Maven Pro", "sans-serif"],
        simple: ["Maven Pro", "sans-serif"],
      },
      backgroundImage: {
        Footer: "url('/src/assets/FooterBackground.svg')",
      },
    },
  },
  plugins: [],
};
