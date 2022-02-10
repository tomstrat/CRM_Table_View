// import React, { useState } from "react"
// import PropTypes from "prop-types"

// const TestToggleContainer = ({component: Component, children, title, ...rest}) => {
  
//   const initialState = children.reduce((current, next) => {
//     current[next.name] = next.value 
//     return current
//   }, {})

//   const [ToggleGroup, setToggleGroup] = useState(initialState)
//   const idParsed = title.replace(" ", "").toLowerCase()
  
//   function announceChange(id, state) {

//   }

//   return(
//     <div className="user-button-container">
//       {idParsed}
//       <Component {...rest} />
//     </div>
//   )
// }

// TestToggleContainer.propTypes = {
//   title: PropTypes.string,
//   component: PropTypes.func,
//   children: PropTypes.array
// }