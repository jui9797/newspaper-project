
import SectionTitle from '../../shared/SectionTitle';

import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';
import { useParams } from 'react-router-dom';


const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK)

const Payment = () => {
    const {price} = useParams()
    
    return (
        <div className='px-4 lg:px-12 py-4'>
           <div className='mb-6 lg:mb-12'>
           <SectionTitle heading='Payment Here' subHeading='Payment'></SectionTitle>
           </div>
           <Elements stripe={stripePromise}>
            <CheckoutForm price={price}></CheckoutForm>
           </Elements>

        </div>
    );
};

export default Payment;