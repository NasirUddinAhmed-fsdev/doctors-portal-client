module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#0FCFEC",
          secondary: "#19D3AE",
          accent: "#3A4256",
          neutral: "#414B63",
          "base-100": "#ffffff",
          info: "#3ABFF8",
          success: "#00A187",
          warning: "#FBBD23",
          error: "#F87272",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
