import React from "react"
import PhoneNav from "../../components/Nav/PhoneNav"
import getCurrentDate from "../../../utilities/getCurrentDate"
import "../../styles/Phone_App/Overview.css"

const Overview = () => {
  return (
    <>
      <PhoneNav auth={true}/>
      <div className="phone-page-container">
        <div className="phone-title-container">
          <div>Welcome (Name)</div>
          <div className="phone-day-title">{getCurrentDate("day")}</div>
          <div className="phone-date-title">{getCurrentDate("date")}</div>
        </div>
        <div className="ops-post">
          Next/Current shift
        </div>
        <div className="ops-post">
          Daily Message from Ops
        </div>
        <div className="ops-post">
          Outstanding Tasks Checklist with links, document reviews, add hours on monday etc
        </div>
        <div className="ops-post">
          Current Weekly Roster
        </div>
      </div>
    </>
  )
}

export default Overview