
import React from "react"
import TestToggleContainer from "../../components/TestToggleContainer"

const ScheduleBuilder = () => {
  
  
  
  
  return (
    <>
      <TestToggleContainer 
        buttons={
          [
            {name: "button1", loadState: true}, 
            {name: "button2", loadState: false}, 
            {name: "button3", loadState: true}, 
            {name: "button4", loadState: true}
          ]
        }
        groupId={"testgroup"}
      />
        
      
    </>
  )
}

export default ScheduleBuilder

