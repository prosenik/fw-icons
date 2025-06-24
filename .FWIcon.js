module.exports = {
  inputDir: "./dist/iconLibrary/svg", // (required)
  outputDir: "./dist/iconLibrary/font", // (required)
  fontTypes: ["ttf", "woff", "woff2"],
  assetTypes: ["ts", "css", "json", "html"],
  name: "iconLibrary",
  prefix: "fwIcon",
  normalize: true,
  templates: {
    css: "./src/templates/css.hbs",
  },
  formatOptions: {
    json: {
      indent: 2,
    },
    ts: {
      types: ["constant", "literalId"],
      singleQuotes: true,
    },
  },
};
