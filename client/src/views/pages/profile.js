import React from "react"
import "../styles/App.css"

function Profile() {
  return (
    <div className="App">
      <header className="App-header">
        
        <p>
          You are logged in :)
        </p>
        <a
          className="App-link"
          href={"/logout"}
        >
          Logout
        </a>
      </header>
    </div>
  )
}

export default Profile