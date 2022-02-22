import Nav from "../../components/Nav/Nav"
import React from "react"
import "../../styles/Requests.css"

const Requests = () => {
  return (
    <>
      <Nav auth={true}/>
      <div className="requests-page-container">
        <h2>Requests</h2>
        
        <p>This section will be dedicated to attendance communication between TTMs and management. On the TTM phone app, users
          will be able to make time off and holiday requests. These requests will be viewable on this page, and management can 
          either approve, approve with amendments, or deny requests.
        </p>

        <p>In order to better facilitate this process, we&apos;ll be adding communication features to this part of the app (but also others).
        </p>
      </div>
    </>
  )
}

export default Requests