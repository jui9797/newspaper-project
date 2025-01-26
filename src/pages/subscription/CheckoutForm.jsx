import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useContext, useEffect, useState } from 'react';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { AuthContext } from '../../provider/AuthProvider';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import usePremium from '../../hooks/usePremium';

const CheckoutForm = ({ price }) => {
    const [,,refetch] = usePremium()
    const location = useLocation()
    // console.log(location)
    // console.log(price)
    const [error, setError] = useState('')
    const [clientSecret, setClientSecret] = useState('')
    const [transactionId, setTransactionId] = useState('');
    const { user } = useContext(AuthContext)
    const navigate = useNavigate()

    const stripe = useStripe()
    const elements = useElements()
    const axiosSecure = useAxiosSecure()

    useEffect(() => {
        axiosSecure.post('/create-payment-intent', { price: price })
            .then(res => {
                // console.log(res.data.clientSecret)
                setClientSecret(res.data.clientSecret);
            })
    }, [axiosSecure, price])


    // Given number of days until expiration
    const expiredValue = location.state.expiredDate;

    // Current date
    const currentDate = new Date();
    
    // Determine whether to add as minutes or days
    const expirationDate = new Date(currentDate);
    if (expiredValue === 1) {
      // Add 1 minute
      expirationDate.setMinutes(currentDate.getMinutes() + 1);
    } else if (expiredValue > 1) {
      // Add as days
      expirationDate.setDate(currentDate.getDate() + expiredValue);
    }
    
    console.log("Expiration Date:", expirationDate);
    


    const handleOnSubmit = async (e) => {
        e.preventDefault()

        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement)

        if (card === null) {
            return
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            console.log('Payment error', error)
            setError(error.message)
        }

        else {
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

        else {
            console.log('payment intent', paymentIntent)
            if (paymentIntent.status === 'succeeded') {
                console.log('transaction id', paymentIntent.id);
                setTransactionId(paymentIntent.id);

                // store payment info in the database
                const payment = {
                    email: user.email,
                    amount: parseInt(price),
                    paymentDate: new Date(),
                    transactionId: paymentIntent.id

                }
                const {data} = await axiosSecure.post('/payments', payment)
                // console.log(data)
                if (data?.insertedId){

                // patch for
                const {data} =await axiosSecure.patch(`/premiumTaken/${user?.email}`, {expirationDate})
                console.log(data)
                    refetch()
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'payment successfully.',
                        showConfirmButton: false,
                        timer: 1500
                    });
                    navigate('/')
                }

            }
        }


    }

    return (
        <div>
            <form onSubmit={handleOnSubmit} className='border-2 border-blue-400 p-2 rounded-lg'>
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
                <button className="btn btn-sm bg-blue-400 text-white px-5 my-4" type="submit" disabled={!stripe || !clientSecret}>
                    Pay
                </button>
                <p className='text-red-500'>{error}</p>
                {transactionId && <p className="text-green-600"> Your transaction id: {transactionId}</p>}
            </form>
        </div>
    );
};

export default CheckoutForm;