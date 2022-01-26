import layout from "../../layout"
import opstimenav from "../../components/layout/opstimenav"
import sidebar from "../../components/layout/sidebar"
import usercontrols from "../../components/timepage/usercontrols"
import newuserpanel from "../../components/timepage/newuserpanel"

export default function manageusers(): string {
    return layout(`
			<div class="default-sidebar">
				${sidebar("Select users", usercontrols)}
			</div>
			<div class="secondary-sidebar">
				${sidebar("New user", newuserpanel)}
			</div>
      ${opstimenav()}
			<div class="table-content-container">
				<h1>Dynamic tables go here</h1>
			</div>
			

      
    `)
}