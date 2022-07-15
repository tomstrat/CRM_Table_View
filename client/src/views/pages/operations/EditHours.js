/* eslint-disable no-unused-vars */
import Nav from "../../components/Nav/Nav"
import React, { useState, useEffect, useRef } from "react"
import "../../styles/EditHours.css"
import getCurrentDate from "../../../utilities/getCurrentDate"
import axios from "axios"
import printDay from "../../../utilities/printDay"
import fixMonth from "../../../utilities/fixMonth"
import getTable from "../../components/RoutePlanner/getTable"
import TableRow from "../../components/EditHours/TableRow"

const EditHours = () => {

  const [timeTable, setTimeTable] = useState(null)
  const [currDay, setCurrDay] = useState(getCurrentDate("dateTime", - 1))
  const dateChange = useRef(true)
  
  useEffect(() => {
    if (dateChange.current == true) {
      dateChange.current = false
      getTable(currDay, setTimeTable)
    }
  }), []
  
  function increaseDay(){
    const increDate = new Date(currDay)
    increDate.setDate(increDate.getDate() + 1)
    dateChange.current = true
    setCurrDay(increDate)
  }

  function decreaseDay(){
    const decreDate = new Date(currDay)
    decreDate.setDate(decreDate.getDate() - 1)
    dateChange.current = true
    setCurrDay(decreDate)
  }

  function makeRow(rowData, index) {
   
    return (
      <TableRow
        index={index}
        key={"row " + index}
        rowData={rowData}
      />
    )
  }

  return (
    <
      
    >
      <Nav auth={true}/>
      <div className="edit-hours-page-container">
        <div className="day-select-container">
          <div className="tiny-title">Timetable for:</div>
          <div className="date-container">
            <button className={"arrow-button"} onClick={decreaseDay}>&#60;</button>
            <div className="day-title">{printDay(currDay.getDay())}</div>
            <button className={"arrow-button"} onClick={increaseDay}>&#62;</button>
          </div>
          <div className="date-title">{currDay.getDate() + "-" + fixMonth(currDay.getMonth()) + "-" + currDay.getFullYear()}</div>
        </div>
        <div className="time-table-contents">
          <div className="table-headers">
            <div className="header-cell">TTM</div>
            <div className="header-cell">Route</div>
            <div className="header-cell">Route Start</div>
            <div className="header-cell">Start</div>
            <div className="header-cell">End</div>
            <div className="header-cell">Break</div>
            <div className="header-cell">TTM Notes</div>
            <div className="header-cell">Ops Notes</div>
            <div className="header-cell">Sick</div>
            <div className="header-cell">Late</div>
            <div className="header-cell">TTM Edit</div>
          </div>
          {
            timeTable
              ? timeTable.map((row, index) => {
                return makeRow(row, index)
              })
              : <div className="no-data-found">No data found for selected day</div>
          }
        </div>
      </div>
     
      
      
    </>
  )
}

export default EditHours

