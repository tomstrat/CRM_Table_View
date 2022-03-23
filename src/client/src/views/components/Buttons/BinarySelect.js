import React from "react"
import PropTypes from "prop-types"
import "../../styles/BinarySelect.css"

//simple binary radio control button
//props:
//stateBool - Boolean passed in by the parent
//changeState - function to change stateBool
//onName - user displayed title for 'on' button
//offName - user displayed title for 'off' button
//all props are required

const BinarySelect = (props) => {

  const onClickYes = () => {
    props.changeState(true)
  }

  const onClickNo = () => {
    props.changeState(false)
  }

  return (
    <div className="binary-select">
      <div 
        onClick={onClickNo}
        className={
          props.stateBool
            ? "binary-off binary-select-button button-no"
            : "binary-on binary-select-button button-no"
        }>{props.offName}</div>
      <div 
        onClick={onClickYes}
        className={
          props.stateBool
            ? "binary-on binary-select-button button-yes"
            : "binary-off binary-select-button button-yes"
        }>{props.onName}</div>
    </div>
  )
} 

export default BinarySelect

BinarySelect.propTypes = {
  stateBool: PropTypes.bool,
  offName: PropTypes.string,
  onName: PropTypes.string,
  changeState: PropTypes.func
}