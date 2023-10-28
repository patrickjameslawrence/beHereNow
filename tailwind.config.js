/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    extend: {
      backgroundColor: {
        logo: "bg-gradient-to-br from-violet-900 from-10% via-purple-900 via-60% to-purple-900 to-95%",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
