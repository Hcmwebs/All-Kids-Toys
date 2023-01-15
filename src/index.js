import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { ProductsProvider } from './context/products_context'
import { FilterProvider } from './context/filter_context'
import { CartProvider } from './context/cart_context'
import { UserProvider } from './context/user_context'
import { Auth0Provider } from '@auth0/auth0-react'

//dev-j7ugh2mb.us.auth0.com
//cu9kJp99KpGr8dB8YY6NufKwSru3D6AG

ReactDOM.render(
	<React.StrictMode>
		<Auth0Provider
			domain={`${process.env.REACT_APP_REACTSTORE_DOMAIN}`}
			clientId={`${process.env.REACT_APP_REACTSTORE_CLIENTID}`}
			redirectUri={window.location.origin}
			cacheLocation='localstorage'>
			<ProductsProvider>
				<FilterProvider>
					<CartProvider>
						<App />
					</CartProvider>
				</FilterProvider>
			</ProductsProvider>
		</Auth0Provider>
	</React.StrictMode>,
	document.getElementById('root')
)
