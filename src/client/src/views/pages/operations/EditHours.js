import Nav from "../../components/Nav/Nav"
import React from "react"
import "../../styles/EditHours.css"


const EditHours = () => {
  return (
    <>
      <Nav auth={true}/>
      <div className="page-container">
        <div className="overview-page-container">
          <h2>Edit Hours</h2>
          
          <p>This will be where you&apos;ll be able to edit indiviual TTM start times, end times and breaks after they&apos;ve added them, 
          and will be in an interactive table format, similar to the &apos;manage users&apos; page layout</p>

          <p>The section will also include various search features for ease of use.</p>

          <p>We will also have the option to flag unusual data, such as divergent start times, so that office staff can further investigate.
          Once we add forms to the app, we&apos;ll also show a total risk assessment/truck inspection count per route, per day.</p>

          
        </div>
  )
      </div>
    </>
  )
}

export default EditHours