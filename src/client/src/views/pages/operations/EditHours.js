import Nav from "../../components/Nav/Nav"
import React, { useState, useEffect } from "react"
import "../../styles/EditHours.css"
import getCurrentDate from "../../../utilities/getCurrentDate"


const EditHours = () => {

  const [data, setData] = useState({data: [{}], populated: false})
  const [currDay, setCurrday] = useState(-1)

  function increaseDay(){
    setCurrday(currDay + 1)
  }

  function decreaseDay(){
    setCurrday(currDay - 1)
  }


  useEffect(() => {
    const getTimesheets = async () => {
      const result = await fetch("/api/timesheets")
      const parsedResult = await result.json()
      //add formatter
      setData({data: parsedResult, populated: true})
    }
    if(!data.populated) getTimesheets()
  }, [data])
  console.log(data)
  return (
    <
      
    >
      <Nav auth={true}/>
      <div className="edit-hours-page-container">
        <div className="hours-day-select-container">
          <div className="tiny-title">Timesheet for:</div>
          <div className="date-container">
            <button className={"arrow-button"} onClick={decreaseDay}>&#60;</button>
            <div className="day-title">{getCurrentDate("day", currDay)}</div>
            <button className={"arrow-button"} onClick={increaseDay}>&#62;</button>
          </div>
          <div className="date-title">{getCurrentDate("date", currDay)}</div>
         
         
          
        </div>
        <div className="timesheets-contents">
          Table goes here
        </div>
      </div>
      
    </>
  )
}

export default EditHours