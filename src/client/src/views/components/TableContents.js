import React from "react"
import { omit } from "ramda"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import "../styles/TableContents.css"

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
              <Link key={obj.id} to={`/ops/users/${obj.id}`} className="row-link">
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
  const formatted = omit(["password", "roster"], data[0]) 
  return Object.keys(formatted).map(header => <div key={header} className="column">{header.charAt(0).toUpperCase() + header.slice(1)}</div>)
}

function formatRow(obj) {
  const formatted = omit(["password", "roster"], obj) 
  return (
    Object.keys(formatted).map((oneKey) => <div key={formatted[oneKey]} className="column">{formatted[oneKey]}</div>)
  )
}

TableContents.propTypes = {
  data: PropTypes.array
}

