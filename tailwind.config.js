module.exports = {
  purge: {
    enable: true,
    content: [
      "./src/**/*.re",
      "./src/**/*.res"
    ],
    defaultExtractor: require("@dylanirlbeck/tailwind-ppx").extractor
  },
  darkMode: false,
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
