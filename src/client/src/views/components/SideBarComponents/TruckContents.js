// eslint-disable-next-line no-unused-vars
import React, {useState} from "react"
import PropTypes from "prop-types"
import "../../styles/TruckContents.css"
import TextBox from "../TextBox"
const TruckContents = (props) => {

  // eslint-disable-next-line no-unused-vars
  const [trucks, setTrucks] = useState(props.defaultTrucks)
  // eslint-disable-next-line no-unused-vars
  const [editState, setEditState] = useState(false)

  function makeTruckRow(truck) {
    return (
      <>
        <div className="truck-row">
          <div className="truck-name">{truck.name}</div>
     
          <TextBox passedClass={"contents"}/>
          <TextBox passedClass={"location"}/>
          <TextBox passedClass={"tools"}/>
    
        
        
        </div>
      </>
    )
  }

  return <>
    <div className="contents-headers">
      <div className="cont-header contents-head">Contents</div>
      <div className="cont-header location-head">Location</div>
      <div className="cont-header tools-head">Tools</div>
    </div>
    {
      trucks.map((row) => {
        return makeTruckRow(row)
      })
    }
    <button>Save</button>
  </>
}

export default TruckContents

TruckContents.propTypes = {
  defaultTrucks: PropTypes.array
}