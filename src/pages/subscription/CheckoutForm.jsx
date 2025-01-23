import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useContext, useEffect, useState } from 'react';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { AuthContext } from '../../provider/AuthProvider';

const CheckoutForm = ({price}) => {
    console.log(price)
    const [error, setError] = useState('')
    const [clientSecret, setClientSecret] = useState('')
    const [transactionId, setTransactionId] = useState('');
    const {user} =useContext(AuthContext)

const stripe =useStripe()
const elements = useElements()
const axiosSecure = useAxiosSecure()

useEffect(()=>{
    axiosSecure.post('/create-payment-intent', {price:price})
    .then(res=>{
        console.log(res.data.clientSecret)
        setClientSecret(res.data.clientSecret);
    })
},[axiosSecure, price])



const handleOnSubmit= async(e) =>{
    e.preventDefault()

    if(!stripe || !elements){
        return
    }

    const card = elements.getElement(CardElement)

    if(card === null){
        return
    }

    const {error, paymentMethod} = await stripe.createPaymentMethod({
        type: 'card',
        card
    })

    if(error){
        console.log('Payment error', error)
        setError(error.message)
    }

    else{
        console.log('Payment method', paymentMethod)
        setError('')
    }

    // confirmed payment
    const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
            card: card,
            billing_details: {
                email: user?.email || 'anonymous',
                name: user?.displayName || 'anonymous'
            }
        }
    })

    if (confirmError) {
        console.log('confirm error')
    }

    else{
        console.log('payment intent', paymentIntent)
        if (paymentIntent.status === 'succeeded') {
            console.log('transaction id', paymentIntent.id);
            setTransactionId(paymentIntent.id);
    }
}


}

    return (
        <div>
            <form onSubmit={handleOnSubmit}>
                <CardElement options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}></CardElement>
                <button className="btn btn-sm btn-primary my-4" type="submit" disabled={!stripe || !clientSecret}>
                Pay
            </button>
            <p className='text-red-500'>{error}</p>
            {transactionId && <p className="text-green-600"> Your transaction id: {transactionId}</p>}
            </form>
        </div>
    );
};

export default CheckoutForm;