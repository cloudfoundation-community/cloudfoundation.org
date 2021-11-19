import Loading from './Loading.vue'
import { h, reactive, watchEffect } from "vue";

import mermaidjs from "mermaid";

export const Mermaid = {
    name: 'Mermaid',
    props: {
        id: {
            type: String,
            required: true
        },
        graph: {
            type: String,
            required: true
        }
    },
    setup(props) {
        const state = reactive({
            svg: undefined
        })

        watchEffect(() => {
            console.log("mm watchEffect")
            if (props.graph) {
                console.log("mm watchEffect - rendering")
                mermaidjs.render(
                    props.id,
                    props.graph,
                    (svg) => {
                        state.svg = svg
                    },
                )
            }
        })

        return () => {
            console.log("mm - setup, hasSvg", !!state.svg);
            return state.svg ? h('div', {
                innerHTML: state.svg,
                style: 'width: 100%'
            }) : h(Loading)
        }
    },
}
