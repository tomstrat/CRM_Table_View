// // import {useState} from "react"
// // import SideBar from "./SideBar"
// // import React from "react"
// import PropTypes from "prop-types"


// const SideBarSelect = ({component1}) => {
//   // const [clickBool, setClickBool] = useState(false)
//   return ( clickBool == false 
//     ? <>
//       <SideBar title={title1} component={component1}/>
//       <div className="new-user-button-container">
//         <button className="new-user-button" onClick={() => setClickBool(true)}>Add new user</button>
//       </div>
//     </>
//     : <>
//       <SideBar title={title2} component={component2}/>
//       <div className="new-user-button-container">
//         <button className="new-user-button" onClick={() => setClickBool(false)}>Cancel</button>
//       </div>
//     </>
//   )
//   return ({
//     component1
//   })
// }

// SideBarSelect.propTypes = {
//   component1: PropTypes.oneOfType([
//     PropTypes.func,
//     PropTypes.object,
//     PropTypes.node
//   ]),
//   component2: PropTypes.oneOfType([
//     PropTypes.func,
//     PropTypes.object,
//     PropTypes.node
//   ]),
//   title1: PropTypes.string, 
//   title2: PropTypes.string
// }

// export default SideBarSelect