/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        "xxs-mobile": { raw: "(min-height: 780px),(max-height: 819px)" },
        "xs-mobile": { raw: "(min-height: 820px),(max-height: 900px)" },
        "large-mobile": { raw: "(min-height: 840px)" },
        // => @media (max-height: 1234px) { ... }
      },
      height: {
        30: "30vh",
        20: "20vh",
        25: "25vh",
        75: "75vh",
        40: "40vh",
        80: "80vh",
      },
      width: {
        30: "30vw",
        75: "75vw",
        40: "40vw",
        80: "80vw",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        quicksand: ["Quicksand, sans-serif"],
        spacemono: ["Spacemono, sans-serif"],
      },
      backgroundImage: {
        profilePic: "url(../src/images/profilepic.jpeg)",
      },
      keyframes: {
        slideUp: {
          "0%": { transform: "translateY(100%)" },
          "100%": { transform: "translateY(0%)" },
        },
        slideDown: {
          "0%": { transform: "translateY(-50%)" },
          "100%": { transform: "translateY(100%)" },
        },
      },
      animation: {
        slideUp: "slideUp 1s ease-in-out",
        slideDown: "slideDown 1s ease-in-out",
      },
    },
  },
  plugins: [],
};
