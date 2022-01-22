import layout from "../../layout"
import opstimenav from "../../components/layout/opstimenav"

export default function scheduler(): string {
    return layout(`
    ${opstimenav()}
    `)
}