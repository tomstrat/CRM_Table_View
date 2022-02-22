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
          
          <p>Here we&apos;ll provide the tools needed for office staff to search our entire database for relevant user data,
          and will give you access to customisable search queries.</p>

          <p>In essence, in the early days this will be individual and group TTM statistics over adjustable time periods, 
          mainly for the purposes of data analytics.</p>

          <p>In the words of Neo:</p>

          <p>&#34;Graphs, <i>lots</i> of graphs.&#34;</p>
        </div>
  )
      </div>
    </>
  )
}

export default DataViewer