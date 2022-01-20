const path = require('path')
const { mermaidjsPlugin, graphs } = require("./markdownItPlugin")

const vuePressPluginMermaid = (options, app) => {
  return {
    name: "MermaidJSPlugin",
    define: {
      MERMAID_OPTIONS: options,
    },
    extendsMarkdown(md) {
      md.use(mermaidjsPlugin);
    },
    async extendsPage(page) {
      page.data["$graphs"] = graphs[page.filePathRelative];
    },
    clientAppEnhanceFiles: path.resolve(__dirname, "clientAppEnhanceFile.js"),
  };
};

module.exports = vuePressPluginMermaid;