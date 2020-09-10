module.exports = function (api) {
  api.cache(true)

  return {
    presets: [
      [
        "@babel/preset-env",
        {
          useBuiltIns: "entry",
          corejs: 2,
        },
      ],
      "@babel/preset-react",
    ],
    plugins: [
      "@babel/plugin-proposal-class-properties",
      "@babel/plugin-proposal-object-rest-spread",
      "@babel/plugin-syntax-dynamic-import",
      "@babel/plugin-proposal-optional-chaining",

      // "@babel/plugin-proposal-export-default-from",
    ],
  }
}
