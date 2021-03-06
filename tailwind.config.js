module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    screens: {
      "small-mobile": { max: "390px" },
      "middle-mobile": { min: "391px", max: "550px" },
      "large-mobile": { min: "551px", max: "768px" },
      tablet: { min: "769px", max: "1024px" },
      laptop: { min: "1025px", max: "1280px" },
      desktop: { min: "1281px" },
    },
    extend: {
      colors: {
        white: "white",
        gray: "#F3F4F6",
        purple: "#3730A3",
        black: "black",
      },
      backgroundImage: {
        mainPage: "url('/src/assets/images/linkedin-crawler-image.jpeg')",
      },
    },
  },
  plugins: [],
};
