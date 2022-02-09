import React, {useState, useEffect} from "react"
import { Route, Redirect } from "react-router-dom"
import { checkAuth } from "../../utilities/auth"
import PropTypes from "prop-types"

export default function PrivateRoute(props) {

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

  return auth.role ? (
    <Route {...props} />
  ) : loading ? (
    <div>LOADING...</div>
  ) : <Redirect to='/login' />

  // return (
  //   <Route {...rest} 
  //     render={props => {
  //       if (auth.role) {
  //         // authorized so return component
  //         return <Component {...props} />
  //       } else if(loading){
  //         //Loading
  //         return <div>LOADING...</div>
  //       }
  //       // not logged in so redirect to login page with the return url
  //       return <Redirect to={{ pathname: "/login", state: { from: props.location } }} />
  //     }} />
  // )
}

PrivateRoute.propTypes = {
  component: PropTypes.func,
  location: PropTypes.object
}