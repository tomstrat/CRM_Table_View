import React, { useState } from "react"
import PhoneNav from "../../components/Nav/PhoneNav"
import getCurrentDate from "../../../utilities/getCurrentDate"

const AddHours = () => {

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

export default AddHours