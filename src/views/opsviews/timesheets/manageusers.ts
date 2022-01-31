import layout from "../../layout"
import opstimenav from "../../components/layout/opstimenav"
import sidebar from "../../components/layout/sidebar"
import usercontrols from "../../components/timepage/usercontrols"
import newuserpanel from "../../components/timepage/newuserpanel"
import { User } from "../../../database/models/User"
import { getHeaders } from "../../components/table/usertable"
import { Result, ValidationError } from "express-validator"

export default function manageusers({ errors }: { errors?: Result<ValidationError> | undefined }): string {

	// const users = data
	// 	? data.map(user => JSON.stringify(user))
	// 	: "<div>No Users Found</div>"

	return layout(`
			
			<div hidden id="dataLoad">users/new</div>
			<div id="default-sidebar" class="visible-sidebar">
				${sidebar("Select users", usercontrols)}
			</div>
			<div id="secondary-sidebar" class="invisible-sidebar">
				${sidebar("New user", newuserpanel, errors)}
			</div>
      ${opstimenav()}
			<div class="table-content-container" onload="loadPageData('users/new')">
				<div class="table">
					<div class="headers">
						<div class="row">
							${getHeaders()}
						</div>
					</div>
					<div class="tbody">
					</div>
			</div>
			<script type="text/javascript" src="/js/index.js"></script>
			<script type="text/javascript" src="/js/requests.js"></script>
			
			
    `)
}