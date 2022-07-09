/* eslint-disable no-unused-vars */
import React from "react"
import PropTypes from "prop-types"
import NewTextBox from "./NewTextBox"

const NewTruckContents = (props) => {

  function makeTruckRow(truck, index) {
    return (
      <>
        <div className="truck-contents-row">
          <div className="truck-contents-name">{truck.name}</div>
          <NewTextBox
            index={index}
            key={"tools" + index}
            currVal={truck.tools}
            name={"tools"}
            valChange={props.truckContentsChange}
            
            
          />
          <NewTextBox
            index={index}
            key={"location" + index}
            currVal={truck.location}
            name={"location"}
            valChange={props.truckContentsChange}
            
          />
          <NewTextBox
            index={index}
            key={"contents" + index}
            currVal={truck.contents}
            name={"contents"}
            valChange={props.truckContentsChange}
            
          />
    
        
        
        </div>
      </>
    )
  }
  return (
    <div>
      <div className="truck-header-container">
        <div className="truck-header-name">Truck</div>
        <div className="truck-header">Tools</div>
        <div className="truck-header">Location</div>
        <div className="truck-header">Contents</div>
      </div>
      {props.truckList.map((truck, index) => {
        return (
          makeTruckRow(truck, index)
        )
      })}
    </div>
  )

}
export default NewTruckContents

NewTruckContents.propTypes = {
  truckList: PropTypes.array,
  truckContentsChange: PropTypes.func
}