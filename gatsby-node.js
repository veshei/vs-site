const path = require("path")

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "~components": path.resolve(__dirname, "src/components"),
        "~fonts": path.resolve(__dirname, "src/fonts"),
        "~icons": path.resolve(__dirname, "src/components/icons"),
        "~pages": path.resolve(__dirname, "src/pages"),
        "~styles": path.resolve(__dirname, "src/styles"),
      },
    },
  })
}
