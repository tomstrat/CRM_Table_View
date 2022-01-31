import layout from "../../layout"
import opstimenav from "../../components/layout/opstimenav"
import sidebar from "../../components/layout/sidebar"
import schedulecontrols from "../../components/timepage/schedulecontrols"
import scheduletopbar from "../../components/timepage/scheduletopbar"
import routebox from "../../components/timepage/routebox"
import employeeSearchRes from "../../components/timepage/Junkiesearch"

export default function scheduler(): string {
  return layout(`
    

    <div id="default-sidebar" class="visible-sidebar">
				${sidebar("Employee Search", schedulecontrols)}
			</div>
			
      ${opstimenav()}
      <div class="schedule-content-container">
      <div class="junkie-search-container">
      <div>
      </div>
      Dynamic employee search results here (can click on, and add employees to routes from here based on desired search results)
      </div>
			<div class="schedule-planner-container">
        ${scheduletopbar()}
        ${routebox("Everyday routes", "Ask Mike")}
        </form>
        </div>
        <script type="text/javascript" src="/js/scheduler.js"></script>	
        `)
}
