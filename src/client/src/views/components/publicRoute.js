import React, {useState, useEffect} from "react"
import { Route, Redirect } from "react-router-dom"
import { checkAuth } from "../../utilities/auth"
import PropTypes from "prop-types"

export default function PublicRoute({ component: Component, ...rest }) {

  const [loading, setLoading] = useState(true)
  const [auth, setAuth] = useState({role: false})
  
  useEffect(() => {
    const fetchData = async () => {
      const result = await checkAuth()

      setAuth(result)
      setLoading(false)
    }
    fetchData()
  }, [])

  return (
    <Route {...rest} 
      render={props => {
        if (auth.role) {
          // authorized so redirect to home
          return <Redirect to={{ pathname: "/", state: { from: props.location } }} />
        } else if(loading){
          //Loading
          return <div>LOADING...</div>
        }
        // not logged in so send to public page with the return url
        return <Component {...props} />
      }} />
  )
}

PublicRoute.propTypes = {
  component: PropTypes.Component,
  location: PropTypes.location
}