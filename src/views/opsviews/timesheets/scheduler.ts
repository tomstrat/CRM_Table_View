import layout from "../../layout"
import opstimenav from "../../components/layout/opstimenav"
import sidebar from "../../components/layout/sidebar"
import schedulecontrols from "../../components/timepage/schedulecontrols"

export default function scheduler(): string {
    return layout(`	
    ${sidebar("Select users", schedulecontrols)}
    ${opstimenav()}
          <div class="table-content-container">
              <h1>Dynamic tables go here</h1>
          </div>
    `)
}