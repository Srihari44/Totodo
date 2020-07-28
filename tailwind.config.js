module.exports = {
  purge: [
    "src/**/*.js",
    "src/**/*.jsx",
    "src/**/*.ts",
    "src/**/*.tsx",
    "public/**/*.html",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {},
  },
  variants: {
    transitionProperty: ["responsive", "hover", "focus"],
  },
  plugins: [],
};
