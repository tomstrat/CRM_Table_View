import Nav from "../../components/Nav/Nav"
import React from "react"
import "../../styles/DataViewer.css"


const DataViewer = () => {
  return (
    <>
      <Nav auth={true}/>
      <div className="page-container">
        <div className="dataviewer-page-container">
          <h2>Data Viewer</h2>
          
          <p>Here we plan to provide the tools for office staff to search our entire database for relevant company data,
          and will give you access to customisable search queries.</p>
        </div>
  )
      </div>
    </>
  )
}

export default DataViewer