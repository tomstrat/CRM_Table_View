import layout from "../../layout"
import opstimenav from "../../components/layout/opstimenav"

export default function manageusers(): string {
    return layout(`
      ${opstimenav()}
      <div class="table-container">
        <div class="ttmtable">
			    <div class="thead">
			  	  <div class="row">
			  	<!-- headers -->
			  	  </div>
			    </div>
			  <div class="tbody">
			  	<!-- data -->
			  </div>
		    </ div>    
      </div>
    `)
}