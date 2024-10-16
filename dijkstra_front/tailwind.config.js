/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#00b2ff",

          secondary: "#009dff",

          accent: "#00a800",

          neutral: "#000b03",

          "base-100": "#272c30",

          info: "#5ebbff",

          success: "#5dac00",

          warning: "#ff8200",

          error: "#f10036",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
