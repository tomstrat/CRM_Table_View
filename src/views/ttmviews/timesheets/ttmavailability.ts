import layout from "../../layout"
import timenav from "../../components/layout/timenav"

export default function ttmavailability(): string {
    return layout(`
    ${timenav()}
    `)
}