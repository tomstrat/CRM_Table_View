import React, { useState } from "react"
import PhoneNav from "../../components/Nav/PhoneNav"
import getCurrentDate from "../../../utilities/getCurrentDate"

const AddHours = () => {

  const [currDay, setCurrday] = useState(0)
  // eslint-disable-next-line no-unused-vars
  const [hadBreak, setHadBreak] = useState(true)

  function increaseDay(){
    setCurrday(currDay + 1)
  }

  function decreaseDay(){
    setCurrday(currDay - 1)
  }
  return (
    <>
      <PhoneNav auth={true}/>
      <div className="add-hours-page-container">
        <div className="phone-day-select-container">
          <div className="phone-tiny-title">Add hours for:</div>
          <div className="phone-date-container">
            <button className={"phone-arrow-button"} onClick={decreaseDay}>&#60;</button>
            <div className="day-title">{getCurrentDate("day", currDay)}</div>
            <button className={"phone-arrow-button"} onClick={increaseDay}>&#62;</button>
          </div>
          <div className="date-title">{getCurrentDate("date", currDay)}</div>
        </div>
        <form className="add-hours-form">
          <div className="form-section-container">
            <div className="label-box">
              <div className="phone-tiny-title">Start Time</div>
              <div className="time-box">
                <select type="select" name="start-hours" className="start-time-select start-time-hours">
                  <option value="05">05</option>
                  <option value="06">06</option>
                  <option value="07">07</option>
                  <option value="08">08</option>
                  <option value="09">09</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                  <option value="13">13</option>
                  <option value="14">14</option>
                  <option value="15">15</option>
                  <option value="16">16</option>
                  <option value="17">17</option>
                </select>
                <select type="select" name="start-mins" className="start-time-select start-time-minutes">
                  <option value="00">00</option>
                  <option value="15">15</option>
                  <option value="30">30</option>
                  <option value="45">45</option>
                </select>
              </div>
            </div>
            <div className="label-box">
              <div className="phone-tiny-title">End Time</div>
              <div className="time-box">
                <select type="select" name="end-hours" className="start-time-select start-time-hours">
                  <option value="05">05</option>
                  <option value="06">06</option>
                  <option value="07">07</option>
                  <option value="08">08</option>
                  <option value="09">09</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                  <option value="13">13</option>
                  <option value="14">14</option>
                  <option value="15">15</option>
                  <option value="16">16</option>
                  <option value="17">17</option>
                </select>
                <select type="select" name="end-mins" className="start-time-select start-time-minutes">
                  <option value="00">00</option>
                  <option value="15">15</option>
                  <option value="30">30</option>
                  <option value="45">45</option>
                </select>
              </div>
            </div>
          </div>
          <div className={
            hadBreak
              ? "form-section-container" 
              : "hidden"
          }>
            <div className="label-box">
              <div className="phone-tiny-title">Break Start Time</div>
              <div className="time-box">
                <select type="select" name="end-hours" className="start-time-select start-time-hours">
                  <option value="05">05</option>
                  <option value="06">06</option>
                  <option value="07">07</option>
                  <option value="08">08</option>
                  <option value="09">09</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                  <option value="13">13</option>
                  <option value="14">14</option>
                  <option value="15">15</option>
                  <option value="16">16</option>
                  <option value="17">17</option>
                </select>
                <select type="select" name="end-mins" className="start-time-select start-time-minutes">
                  <option value="00">00</option>
                  <option value="15">15</option>
                  <option value="30">30</option>
                  <option value="45">45</option>
                </select>
              </div>
            </div>
          </div>
          <div className="form-section-container">
            <button type="submit" className="submit-button">Submit</button>
          </div>
        </form>
      </div>
    </>
    
  )
}

export default AddHours