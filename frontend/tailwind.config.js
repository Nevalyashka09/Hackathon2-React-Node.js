/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  corePlugins: {
    preflight: false,
  },
  theme: {
    extend: {
      fontFamily: {
        rubik: ["Rubik", "sans-serif"],
      },
      transitionDuration: {
        2000: "2000ms",
      },
      dropShadow: {
        top: "0px -8px 16px rgba(0, 0, 0, 0.10)",
      },
      colors: {
        primary: {
          50: "#CF2E79",
          70: "#454545",
          100: "#A5C444",
          800: "#FAF4FB",
          900: "#EBEBEB",
        },
        secondary: {
          600: "#439BCD",
        },
        chip: {
          blue: "#2196F3",
          orange: "#ED6C02",
          green: "#AFE2B1",
        },
        status: {
          green: "#AFE2B1",
        },
        user: {
          warningRed: "#D32F2F",
        },
      },
    },
  },
  plugins: [],
};
