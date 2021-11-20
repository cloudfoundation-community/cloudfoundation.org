import mermaidjs from "mermaid";
import Mermaid from "./Mermaid.vue";

/**
 * @type {import("@vuepress/client").ClientAppEnhance}
 */
export default ({ app }) => {
    mermaidjs.initialize({ startOnLoad: false, ...MERMAID_OPTIONS })

    app.component('Mermaid', Mermaid);
}