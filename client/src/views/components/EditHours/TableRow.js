/* eslint-disable no-unused-vars */
import React from "react"
import PropTypes from "prop-types"
import formatHours from "../../components/RoutePlanner/formatHours.js"


const TableRow = (props) => {
  const {
    id, route, routeType, startTime, endTime, 
    breakStart, plannedStart, workingDate,
    ttmComments, opsComments, opsMessage, 
    sick, late, edited, user
  } = props.rowData
  
  const plannedStartObj = new Date(plannedStart)
  const pStartFormatted = formatHours(plannedStartObj)
  return (
    <div className="table-row">
      <div className="table-cell">{user.username}</div>
      <div className="table-cell">{route}</div>
      <div className="table-cell">{`${pStartFormatted[0] + ":" + pStartFormatted[1]}`}</div>
      <div className="table-cell">{
        startTime
          ? startTime
          : "Not set"
      }</div>
      <div className="table-cell">{
        endTime
          ? endTime
          : "Not set"
      }
      </div>
      <div className="table-cell">{
        breakStart
          ? breakStart
          : "Not set"
      }
      </div>
      <div className="table-cell">{
        ttmComments
          ? "True"
          : "False"
      }
      </div>
      <div className="table-cell">{
        opsComments
          ? "True"
          : "False"
      }
      </div>
      <div className="table-cell">{
        sick
          ? sick
          : "False"
      }
      </div>
      <div className="table-cell">{
        late
          ? late
          : "False"}
      </div>
      <div className="table-cell">{
        edited
          ? edited
          : "False"}
      </div>
    </div>
  )

  
   
  
   
}

export default TableRow

TableRow.propTypes = {
  rowData: PropTypes.object
}