import Nav from "../../components/Nav/Nav"
import React, { useState, useEffect } from "react"
import "../../styles/EditHours.css"
import getCurrentDate from "../../../utilities/getCurrentDate"
import axios from "axios"

const EditHours = () => {

  const [data, setData] = useState({data: [{}], populated: false})
  const [currDay, setCurrday] = useState(-1)

  const timeData = {
    userId: 1,
    route:"Test1",
    plannedStart:"0800",
    opsMessage:"Test message",
    edited: false,
  }
  
  
  function increaseDay(){
    setCurrday(currDay + 1)
  }

  function decreaseDay(){
    setCurrday(currDay - 1)
  }

  async function postOnClick(e) {
    e.preventDefault()
    
    axios.post("/api/timesheets/new", timeData)
      .then(res => {
        console.log(res)
        console.log(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  
  useEffect(() => {
    const getTimesheets = async () => {
      const response = axios.get("/api/timesheets")
        .then(res => {
          console.log(res)
        })
        .catch((err) => {
          console.log(err)
        })
      //maybe move this line into then?
      //would it loop if i do?
      setData({data: response, populated: true})
    }
    if(!data.populated) getTimesheets()
  }, [data])



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
          <button onClick={postOnClick}>Post</button>
        </div>
      </div>
      
    </>
  )
}

export default EditHours

// POSTs correctly to users
// const postData =  {
//   username: "test2",
//   password:"test2",
//   confirmPassword:"test2",
//   contract:"fullTime",
//   role:"user",
//   operations:"true",
//   trainer:"",
//   driver:"true",
//   navigator:"",
//   temp:"",
//   certified:"true",
//   injured:"false",
//   joinDate:"2022-05-04",
//   location:"innerEast",
//   rosterMonday:"working",
//   rosterTuesday:"working",
//   rosterWednesday:"working",
//   rosterThursday:"working",
//   rosterFriday:"working",
//   rosterSaturday:"working",
//   employeeType:"operations,driver" 
// }