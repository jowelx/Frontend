import React from 'react'
import Formstripe from './formStripe'
import {Elements}from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
const Payment =()=>{
    const stripePromise = loadStripe("pk_test_51JxXURBPMmZ2ecZuPke4ds97Db0A2k1CZhddAAjnqaq8vIjO1gK0fSAoMrufRJc72JG2e8XNiu4bsYW8Y0mcH16W00w59znmdp")

    return(
        <>
        <div>
            <Elements stripe={stripePromise}>
            <Formstripe/> 
            </Elements>
        </div>

        </>
        
    )
}
export default Payment;