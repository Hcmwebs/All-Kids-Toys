import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
// will remove later
import { useUserContext } from '../context/user_context'

const PrivateRoute = ({ children, ...rest }) => {
	const { user } = useAuth0()
	const handleRender = () => {
		return user ? children : <Redirect to='/'></Redirect>
	}

	return <Route {...rest} render={handleRender}></Route>
}
export default PrivateRoute
