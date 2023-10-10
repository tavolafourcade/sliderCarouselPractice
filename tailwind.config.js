/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        customBlue: "#0085CA",
        lightBlue: " #8EEBED",
      },
      width: {
        270: "270px",
        520: "520px",
        548: "548px",
        492: "492px",
      },
    },
  },
  plugins: [],
};
