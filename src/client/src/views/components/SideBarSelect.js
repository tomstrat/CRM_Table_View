import {useState} from "react"
import SideBar from "./SideBar"
import React from "react"


export default function SideBarSelect(component1, component2, title1, title2) {
  const [clickBool, setClickBool] = useState(false)
  return ( clickBool == false 
    ? <>
      <SideBar title={title1} component={component1}/>
      <div className="new-user-button-container">
        <button className="new-user-button" onClick={() => setClickBool(true)}>Add new user</button>
      </div>
    </>
    : <>
      <SideBar title={title2} component={component2}/>
      <div className="new-user-button-container">
        <button className="new-user-button" onClick={() => setClickBool(false)}>Cancel</button>
      </div>
    </>
  )
}


