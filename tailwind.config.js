module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#ef9273",

          secondary: "#fef9f8",

          accent: "#ef9244",

          neutral: "#3D4451",

          "base-100": "#ffffff",

          info: "#3ABFF8",

          success: "#219A19",

          warning: "#FBBD23",

          error: "#f54254",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
