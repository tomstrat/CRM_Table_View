import React from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import "../styles/TableContents.css"
import uniqid from "uniqid"
// import * as R from "ramda"






const TableContents = (props) => {
  
  return (
    <div className="table-content-container">
      <div className="table">
        <div className="theaders">
          {formatHeaders(props.data)}
        </div>
        <div className="tbody">
          {props.data.map(obj => {
            return (
              <Link key={uniqid("rowlink-")} to={`/ops/users/${obj.id}`} className="row-link">
                {formatRow(obj)}
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default TableContents

function formatHeaders(data) {
  const formatted = data[0]
  return Object.keys(formatted).map(header => <div key={uniqid("header-")} className="column">{header.charAt(0).toUpperCase() + header.slice(1)}</div>)
}

function formatRow(obj) {
  return (
    Object.keys(obj).map((oneKey) => <div key={uniqid("row-")} className="column">{obj[oneKey]}</div>)
  )
}

TableContents.propTypes = {
  data: PropTypes.array,
  ToggleButtons: PropTypes.object
}

