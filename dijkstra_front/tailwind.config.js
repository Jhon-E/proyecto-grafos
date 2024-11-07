/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        light: {
          primary: "#1E3A8A",
          secondary: "#3B82F6",
          accent: "#10B981",
          neutral: "#F3F4F6",
          "base-100": "#FFFFFF",
          info: "#3B82F6",
          success: "#10B981",
          warning: "#F59E0B",
          error: "#EF4444",
        },
      },
      {
        dark: {
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
