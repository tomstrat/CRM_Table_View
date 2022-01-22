import layout from "../../layout"
import opstimenav from "../../components/layout/opstimenav"

export default function opsoverview(): string {
    return layout(`
    ${opstimenav()}
    `)
}