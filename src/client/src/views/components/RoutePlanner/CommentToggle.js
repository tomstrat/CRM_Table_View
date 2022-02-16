import React, { useState } from "react"
import PropTypes from "prop-types"



const CommentToggle = (props) => {
  const [toggled, setToggled] = useState(false) 
  // eslint-disable-next-line no-unused-vars
  const [commentValue, setCommentValue] = useState(props.routeNotes)
 
  const closeComments = () => {
    
    setToggled(false)
    props.routeGetNotes(commentValue)
  }

  const onClick = () => {
    setToggled(true)
  }

  const onChange = (e) => {
    setCommentValue(e.target.value)
  }

  return (
    <div className={
      props.toggleState
        ? "visible comments-parent"
        : "hidden"
    }>
      <button onClick={onClick}
        className={
          toggled
            ? "hidden"
            : "expand-comments-button"
        }
      >
        {props.commentsName}
      </button>
      <div
        
        className={
          toggled
            ? "visible notes-form"
            : "hidden"
        }
      >
        <textarea ref={props.commentRef} type="text" className="comment-box" onChange={onChange} value={commentValue} placeholder="add route notes..."/>
        <button className="commit-comments-button" onClick={closeComments}>
          Save
        </button>
        
      </div>
    </div>
  )
}


CommentToggle.propTypes = {
  commentsName: PropTypes.string,
  toggleState: PropTypes.bool,
  routeNotes: PropTypes.string,
  commentRef: PropTypes.object,
  parentOnChange: PropTypes.func,
  commentChange: PropTypes.func,
  routeGetNotes: PropTypes.func
}
export default CommentToggle