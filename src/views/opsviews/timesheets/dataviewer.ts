import layout from "../../layout"
import opstimenav from "../../components/layout/opstimenav"

export default function dataviewer(): string {
    return layout(`
    ${opstimenav()}
    `)
}