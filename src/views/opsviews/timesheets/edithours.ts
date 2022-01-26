import layout from "../../layout"
import opstimenav from "../../components/layout/opstimenav"
import sidebar from "../../components/layout/sidebar"
import edithourscontrols from "../../components/timepage/edithourscontrols"

export default function edithours(): string {
    return layout(`
    ${sidebar("Select users", edithourscontrols)}
    ${opstimenav()}
          <div class="table-content-container">
              <h1>Dynamic tables go here</h1>
          </div>
    `)
}