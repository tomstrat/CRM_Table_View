import React, {useState, useEffect} from "react"
import PropTypes from "prop-types"
import NameBox from "./NameBox"
import uniqid from "uniqid"

const NameContainer = (props) => {
  const [currNames, setCurrNames] = useState(
    [
      props.name1, 
      props.name2, 
      props.name3
    ]
  )
  
  useEffect(() => {
    if ( 
      props.name1 !== currNames[0] 
      || 
      props.name2 !== currNames[1] 
      || 
      props.name3 !== currNames[2]
    ) 
    {
      props.routeGetNames(currNames)
    }
   
  }), [props.name1, props.name2, props.name3]
  
  function removeName(e) {
    setCurrNames(values => {
      return values.map((value) => {
        if(value == e.target.name){
          return ("")
        }
        else {
          return value
        }
      })
    })
    
  }
  
  function insertNames(name, index){
    if(name !== ""){
      return (
        
        <NameBox 
          toggleState={props.toggleState}
          name={name}
          currNames={currNames}
          index={index}
          key={uniqid("namebox-")}
          removeName={removeName}
          nameWasRemoved={props.nameWasRemoved}
        />
      
      )}
  }

  return(
    <div className="names-container">
      {
        currNames.map((name, index) => {
          return insertNames(name, index)
        })   
      }
    </div>
      
  )

   
}

export default NameContainer

NameContainer.propTypes = {
  toggleState: PropTypes.bool,
  name1: PropTypes.string,
  name2: PropTypes.string,
  name3: PropTypes.string,
  routeGetNames: PropTypes.func,
  nameWasRemoved: PropTypes.func
}