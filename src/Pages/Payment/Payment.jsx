import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import React, { useContext } from 'react'
import CheckoutForm from './CheckoutForm'
import { useLocation } from 'react-router-dom'
import { AuthContext } from '../../Context/AuthProvider'


const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK)
const Payment = () => {
    
  return (
    <div>Payment
        <Elements stripe={stripePromise}>
            <CheckoutForm></CheckoutForm>
        </Elements>
    </div>
  )
}

export default Payment