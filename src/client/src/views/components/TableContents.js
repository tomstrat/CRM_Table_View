import React from "react"
import { omit } from "ramda"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"

const TableContents = (props) => {
  return (
    <div className="table-content-container">
      <div className="table">
        <div className="theaders">
          {formatHeaders(props.data)}
        </div>
        <div className="tbody">
          {props.data.map(obj => formatRow(obj))}
        </div>
      </div>
    </div>
  )
}

export default TableContents

function formatHeaders(data) {
  const noIdea = omit(["password", "roster"], data[0]) 
	
  return Object.keys(noIdea).map(header => <div key={header} className="column">{header.charAt(0).toUpperCase() + header.slice(1)}</div>).join("")
  
}

function formatRow(obj) {
  let row = []
  for(const prop in obj) {
    row.push(
      <div className="column">{obj[prop]}</div>
    )
  }
  return (
    <Link to={`/ops/users/${obj.id}`} className="row-link">
      {row.join("")}
    </Link>
  )
}

TableContents.propTypes = {
  data: PropTypes.array
}

