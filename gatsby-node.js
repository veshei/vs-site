const path = require("path")

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "~fonts": path.resolve(__dirname, "src/fonts"),
        "~pages": path.resolve(__dirname, "src/pages"),
        "~styles": path.resolve(__dirname, "src/styles"),
      },
    },
  })
}
