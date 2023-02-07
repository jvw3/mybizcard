/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
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
      backgroundImage: {
        profilePic: "url(../src/images/profilepic.jpeg)"
      },
    },
  },
  plugins: [],
};
