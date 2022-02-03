import sideBar from "../../components/sideBar";
import opsTimeNav from "../../components/opsTimeNav";
import userControls from "../../components/userControls";
import newUserPanel from "../../components/newUserPanel";

export default function manageUsers() {
  return (
    <div class="page-container">
      <div id="default-sidebar" class="visible-sidebar">
        {sideBar("Select users", userControls)}
      </div>
      <div id="secondary-sidebar" class="invisible-sidebar">
        {sideBar("New user", newUserPanel)}
      </div>
      {opsTimeNav()}
      <div class="table-content-container">
        <div class="table">
          <div class="theaders">
          </div>
          <div class="tbody">
          </div>
        </div>
      </div>
    </div>
  )

}