import React, { useState } from 'react';
import './CSS/Payment.css';
import { useStateValue } from '../StateProvider';
import  CheckoutProduct from './CheckoutProduct';
import { Link } from 'react-router-dom';
import { useElements, CardElement, useStripe } from '@stripe/react-stripe-js'

const Payment = () => {

    const [{ basket, user }, dispatch] = useStateValue();

    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(null);

    // var necesary for stripe 
    const stripe = useStripe();
    const elements  = useElements();

    // handle card submit 
    const handleSubmit = e => {
        // do stripe function 
    }

    const handleChange = event => {
        // we listen for changes in CardElement
        // and display any errors that may appear 
        setDisabled(event.empty);
        setError(event.error ? event.error.message : '');
    }

    return (
        <div className='payment'>
            <div className='payment__container'>
                <h1>
                    Checkout (
                        <Link to='/checkout'>
                            {basket?.length} items
                        </Link>
                        ) 
                </h1>

                {/* payment section adress  */}
                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Delivery Address</h3>
                    </div>

                    <div className='payment__address'>
                        <p>{user?.email}</p>
                        <p>2524 Flag Staff House</p>
                        <p>Accra, Ghana</p>
                    </div>
                </div>

                {/* payment section review items  */}
                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Review items and delivery</h3>
                    </div>

                    <div className='payment__items'>
                    {/* ruse check out items here again  */}
                        {basket.map(item => (
                            <CheckoutProduct
                            key={item.index}
                            id={item.id}
                            title={item.title}
                            price={item.price}
                            image={item.image}
                            rating={item.rating}
                       />
                        ))}

                    </div>
                </div>

                {/* payment section payment method  */}
                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Payment Method</h3>
                    </div>

                    <div className='payment__details'>
                        {/* stripe stuff  */}

                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange} />
                        </form>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Payment
