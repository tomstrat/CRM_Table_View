import layout from "../../layout"
import opstimenav from "../../components/layout/opstimenav"

export default function requests(): string {
    return layout(`
    ${opstimenav()}
    `)
}