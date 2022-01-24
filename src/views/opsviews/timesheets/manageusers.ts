import layout from "../../layout"
import opstimenav from "../../components/layout/opstimenav"
import sidebar from "../../components/layout/sidebar"
import usercontrols from "../../components/timepage/usercontrols"

export default function manageusers(): string {
    return layout(`
			${sidebar("Select users", usercontrols)}
      ${opstimenav()}
			<div class="users-content-container">
				<h1>Dynamic tables go here</h1>
			</div>
			

      
    `)
}