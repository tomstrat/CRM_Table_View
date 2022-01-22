import layout from "../../layout"
import opstimenav from "../../components/layout/opstimenav"

export default function edithours(): string {
    return layout(`
    ${opstimenav()}
    `)
}