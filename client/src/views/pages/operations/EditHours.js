/* eslint-disable no-unused-vars */
import Nav from "../../components/Nav/Nav"
import React, { useState, useEffect } from "react"
import "../../styles/EditHours.css"
import getCurrentDate from "../../../utilities/getCurrentDate"
import printDay from "../../../utilities/printDay"
import fixMonth from "../../../utilities/fixMonth"
import getTable from "../../components/EditHours/getTable"
import TableRow from "../../components/EditHours/TableRow"
import TimeCard from "../../components/EditHours/TimeCard"
import useFetch from "../../../hooks/useFetch"

const EditHours = () => {

  const [timeTable, setTimeTable] = useState(null)
  const [timeCardData, setTimeCardData] = useState(null)
  const [currDay, setCurrDay] = useState(getCurrentDate("dateTime", -1))
  const {data, loading, error} = useFetch(`/api/timesheets/${currDay}`)
  
  
  useEffect(() => {
    
    setTimeTable(data)

  }, [data]) 
  

  function toggleRow (targetIndex) {
    setTimeCardData(timeTable[targetIndex])
  }

  function increaseDay(){
    const increDate = new Date(currDay)
    increDate.setDate(increDate.getDate() + 1)
    setCurrDay(increDate)
  }

  function decreaseDay(){
    const decreDate = new Date(currDay)
    decreDate.setDate(decreDate.getDate() - 1)
    setCurrDay(decreDate)
  }

  function startTimeChange (name, newValue) {
    const tempStartDate = new Date(timeCardData.startTime)
    if (name == "start-hours") tempStartDate.setHours(newValue)
    else if (name == "start-mins") tempStartDate.setMinutes(newValue)
    setTimeCardData({...timeCardData, startTime: tempStartDate})
  }

  function endTimeChange (name, newValue) {
    const tempEndDate = new Date(timeCardData.endTime)
    if (name == "start-hours") tempEndDate.setHours(newValue)
    else if (name == "start-mins") tempEndDate.setMinutes(newValue)
    setTimeCardData({...timeCardData, endTime: tempEndDate})
  }

  function breakTimeChange (name, newValue) {
    const tempBreakDate = new Date(timeCardData.breakStart)
    if (name == "start-hours") tempBreakDate.setHours(newValue)
    else if (name == "start-mins") tempBreakDate.setMinutes(newValue)
    setTimeCardData({...timeCardData, breakStart: tempBreakDate})
  }

  function commentsChange ({newValue}) {
    setTimeCardData({...timeCardData, opsComments: newValue})
  }

  function boolChange (name, value) {
    if (name == "sick") setTimeCardData({...timeCardData, sick: value})
    else if (name == "late") setTimeCardData({...timeCardData, late: value})
  }

  function closeTimeCard () {
    setTimeCardData(null)
  }
  function makeRow(rowData, index) {
  
    return (
      <TableRow
        index={index}
        key={"row " + index}
        rowData={rowData}
        toggleRow={toggleRow}
      />
    )
  }

  return (
    <>
      <Nav auth={true}/>
      {
        timeCardData
          ? 
          <div className="time-card-page">
            <TimeCard
              data={timeCardData}
              startTimeChange={startTimeChange}
              endTimeChange={endTimeChange}
              breakTimeChange={breakTimeChange}
              commentsChange={commentsChange}
              boolChange={boolChange}
              closeTimeCard={closeTimeCard}
            />
          </div>
          :
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
            <div className={"time-table-contents"}>
              <div className={
                timeTable
                  ? "table-headers"
                  : "hidden"
              }>
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
                <div className="header-cell">Ops Edit</div>
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
      }
    </>
  )
}

export default EditHours

