module.exports = {
  plugins: [],
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
        heading: "2.5rem",
        subHeading: "1.25rem",
        simple: "1rem",
      },
      fontWeight: {
        heading: "700",
        subHeading: "600",
        simple: "400",
      },
      fontFamily: {
        heading: ["ES Build TRIAL", "sans-serif"],
        subHeading: ["ES Build TRIAL", "sans-serif"],
        simple: ["ES Build TRIAL", "sans-serif"],
      },
      backgroundImage: {
        Footer: "url('/src/assets/FooterBackground.svg')",
        comment: "url('/src/assets/Comment.svg')",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      // You can define additional screen sizes as needed
    },
    backgroundSize: {
      "auto-100%": "100% 100%",
    },
  },
};
