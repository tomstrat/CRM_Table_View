import layout from "../../layout"
import opstimenav from "../../components/layout/opstimenav"
import sidebar from "../../components/layout/sidebar"
import schedulecontrols from "../../components/timepage/schedulecontrols"
import scheduletopbar from "../../components/timepage/scheduletopbar"
import routebox from "../../components/timepage/routebox"

export default function scheduler(): string {
    return layout(`	
    <div id="default-sidebar" class="visible-sidebar">
				${sidebar("Employee Search", schedulecontrols)}
			</div>
			
      ${opstimenav()}
			<div class="schedule-planner-container">
        ${scheduletopbar()}
        ${routebox('Everyday routes', 'Ask Mike')}
        </form>
        </div>`)}