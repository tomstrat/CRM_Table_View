import React, { useState } from "react"
import PropTypes from "prop-types"


const CommentToggle = (props) => {
  const [toggled, setToggled] = useState(false) 


  const onClick = () => {
    setToggled(true)
  }
  

  return (
    <div className={
      props.toggleState
        ? "visible"
        : "hidden"
    }>
      <button onClick={onClick}>{props.commentsName}</button>
      <form
        className={
          toggled
            ? "visible"
            : "hidden"
        }
      >
        <input type="text" />
      </form>
    </div>
  )
}


CommentToggle.propTypes = {
  commentsName: PropTypes.string,
  toggleState: PropTypes.string
}
export default CommentToggle