// import React, { useState } from "react"
// import PropTypes from "prop-types"


// const SingleToggleTest = (props) => {
//   const [ToggleButton, setToggleButton] = useState(null)
//   const idParsed = props.title.replace(" ", "").toLowerCase()

//   const handleOnClick = () => {
//     if(ToggleButton){
//       setToggleButton(false)
//     } else {
//       setToggleButton(true)
//     }
//     props.announceChange(idParsed, ToggleButton)
//   }

//   return (
//     <button 
//       className={ToggleButton
//         ? "controls-button-clicked"
//         : "controlsbutton"
//       } 
//       id={idParsed} 
//       onClick={handleOnClick}
//     >
//       {props.title}
//     </button>
//   )
// }
  
// export default SingleToggleTest

// SingleToggleTest.propTypes = {
//   title: PropTypes.string,
//   setToggleButtons: PropTypes.func,
//   ToggleButtons: PropTypes.object,
//   children: PropTypes.bool,
// }

