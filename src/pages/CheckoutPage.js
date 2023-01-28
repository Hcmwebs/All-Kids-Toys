import React from 'react'
import styled from 'styled-components'
import { PageHero, StripeCheckout } from '../components'
// extra imports
import { useCartContext } from '../context/cart_context'
import { Link } from 'react-router-dom'

const CheckoutPage = () => {
	const {cart} = useCartContext()
	return (
		<main>
			<PageHero title='Checkout' />
			<Wrapper className='page'>
				<h2>Checkout here</h2>
			</Wrapper>
		</main>
	)
}
const Wrapper = styled.div``
export default CheckoutPage
