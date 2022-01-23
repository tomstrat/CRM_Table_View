import layout from "../../layout"
import opstimenav from "../../components/layout/opstimenav"

export default function manageusers(): string {
    return layout(`
      ${opstimenav()}
    `)
}