
import SectionTitle from '../../shared/SectionTitle';

import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';
import { useParams } from 'react-router-dom';


const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK)

const Payment = () => {
    const {price} = useParams()
    
    return (
        <div>
           <SectionTitle heading='Payment Here' subHeading='Payment'></SectionTitle>
           <Elements stripe={stripePromise}>
            <CheckoutForm price={price}></CheckoutForm>
           </Elements>

        </div>
    );
};

export default Payment;