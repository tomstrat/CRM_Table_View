import { Route, Redirect } from 'react-router-dom'

export default function PrivateRoute({ auth, component: Component, ...rest }) {
    return (
        <Route {...rest} render={props => {
            if (!auth) {
                // not logged in so redirect to login page with the return url
                return <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
            }
            // authorized so return component
            return <Component {...props} />
        }} />
    )
}