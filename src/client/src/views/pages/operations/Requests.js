import React, { useState } from "react"
// import "../../styles/Requests.css"
import "../../styles/Phone_App/AddHours.css"
import PhoneNav from "../../components/Nav/PhoneNav"
import getCurrentDate from "../../../utilities/getCurrentDate"

const Requests = () => {
  
  const [currDay, setCurrday] = useState(0)

  function increaseDay(){
    setCurrday(currDay + 1)
  }

  function decreaseDay(){
    setCurrday(currDay - 1)
  }

  return (
    <>
      <PhoneNav auth={true}/>
      <div className="phone-page-container">
        <div className="phone-day-select-container">
          <div className="phone-tiny-title">Add hours for:</div>
          <div className="phone-date-container">
            <button className={"phone-arrow-button"} onClick={decreaseDay}>&#60;</button>
            <div className="day-title">{getCurrentDate("day", currDay)}</div>
            <button className={"phone-arrow-button"} onClick={increaseDay}>&#62;</button>
          </div>
          <div className="date-title">{getCurrentDate("date", currDay)}</div>
        </div>
      </div>
    </>
  )
}

export default Requests


// <>
//   <Nav auth={true}/>
//   <div className="requests-page-container">
//     <h2>Requests</h2>
    
//     <p>This section will be dedicated to attendance communication between TTMs and management. On the TTM phone app, users
//       will be able to make time off and holiday requests. These requests will be viewable on this page, and management can 
//       either approve, approve with amendments, or deny requests.
//     </p>

//     <p>In order to better facilitate this process, we&apos;ll be adding communication features to this part of the app (but also others).
//     </p>
//   </div>
// </>