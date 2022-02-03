import layout from "../../layout"
import opstimenav from "../../components/layout/opstimenav"
import sidebar from "../../components/layout/sidebar"
import requestscontrols from "../../components/timepage/requestscontrols"

export default function requests(): string {
  return layout(`  
    <div id="default-sidebar" class="visible-sidebar">
        ${sidebar("Requests", requestscontrols)}
      </div>
      
      ${opstimenav()}
      <div class="table-content-container">
            </div>`)
}