import layout from "../../layout"
import opstimenav from "../../components/layout/opstimenav"

export default function adduser(): string {
    return layout(`
      ${opstimenav()}
    `)
}