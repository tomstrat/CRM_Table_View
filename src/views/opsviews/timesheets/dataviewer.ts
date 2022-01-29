import layout from "../../layout"
import opstimenav from "../../components/layout/opstimenav"
import sidebar from "../../components/layout/sidebar"
import dataviewercontrols from "../../components/timepage/dataviewercontrols"

export default function dataviewer(): string {
    return layout(`	
    <div id="default-sidebar" class="visible-sidebar">
				${sidebar("Data Search", dataviewercontrols)}
			</div>
			
      ${opstimenav()}
			<div class="table-content-container">
            
            </div>`)}