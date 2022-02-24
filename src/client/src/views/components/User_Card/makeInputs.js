import React from "react"
import uniqid from "uniqid"
import getCurrentDate from "../../../utilities/getCurrentDate"
import * as R from "ramda"


export function makeInputFactory({values, handleOnChange, handleEmpTypeOnChange}) {

  function makeTextInput(name){
    return (
      <input
        type="text"
        value={values[name]}
        onChange={handleOnChange}
        className="edit-user-input"
        placeholder={values[name]}
        name={name}
      />
    )
  }

  function makeDateInput(name){
    const isoDate = new Date(values[name]).toISOString().split("T")[0]
    return (
      <input
        type="date"
        value={isoDate}
        onChange={handleOnChange}
        className="edit-user-input"
        min="2005-01-01"
        max={getCurrentDate()}
        name={name}
      />
    )
  }

  function makeCheckboxInput(name){
    return (
      <input
        type="checkbox"
        checked={(values[name] === "true")}
        onChange={handleOnChange}
        className="edit-user-checkbox"
        name={name}
      />
    )
  }

  function makeEmpTypeInput(name){
    return (
      <input
        type="checkbox"
        checked={R.includes(name, values.employeeType)}
        onChange={handleEmpTypeOnChange}
        className="edit-user-checkbox"
        name={name}
      />
    )
  }

  function makeSelectInput(name, options){
    return (
      <div className="select">
        <select
          type="text"
          value={values[name]}
          onChange={handleOnChange}
          className="edit-user-select"
          name={name}
        >
          {options.map(option => {
            return <option key={uniqid("option-")} value={option.value}>{option.value}</option>
          })}
        </select>
        <span className="focus"></span>
      </div>
    )
  }

  function makeRosterInput(name){
    const options = ["unselected", "working", "notWorking"]
    return (options.map(option => {
      return <input
        type="radio"
        key={uniqid("radio-")}
        checked={(values[name] === option)}
        onChange={handleOnChange}
        className="edit-user-radio"
        value={option}
        name={name}
      />
    })
    )
  }


  return {
    makeTextInput,
    makeDateInput,
    makeCheckboxInput,
    makeEmpTypeInput,
    makeSelectInput,
    makeRosterInput
  }
}