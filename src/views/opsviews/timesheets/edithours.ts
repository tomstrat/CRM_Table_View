import layout from "../../layout"
import opstimenav from "../../components/layout/opstimenav"
import sidebar from "../../components/layout/sidebar"
import edithourscontrols from "../../components/timepage/edithourscontrols"

export default function edithours(): string {
    return layout(`	
    <div id="default-sidebar" class="visible-sidebar">
				${sidebar("Edit hours", edithourscontrols)}
			</div>
			
      ${opstimenav()}
			<div class="table-content-container">
            </div>`)}