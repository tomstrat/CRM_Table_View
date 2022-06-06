import React, {useEffect} from "react"
import PropTypes from "prop-types"


export default function Logout(props) {

  useEffect(() => {
    fetch("/auth/logout")
    props.history.push("/login")
  },[props])

  return (
    <>
    </>
  )
}

Logout.propTypes = {
  history: PropTypes.object
}
