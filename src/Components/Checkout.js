import React, { forwardRef } from 'react';
import './CSS/Checkout.css';
import  Subtotal from './Subtotal';
import { useStateValue } from '../StateProvider';
import { getBasketTotal } from '../reducer';
import  CheckoutProduct from './CheckoutProduct';
import FlipMove from 'react-flip-move';

const Checkout = () => {

    const [{ basket, user }, dispatch] = useStateValue();

    return (
        <div  className='checkout'>
            <div className='checkout__left'>
                <img className='checkout__ad'
                src='https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg' 
                alt='ad'
                />

                <div className='checkout__title'>
                    <h3>{user?.email}</h3>
                    <h1>Your shopping Basket </h1>
                </div>
                    {/* basket irem  */}
                    <FlipMove>
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
                    </FlipMove>
                
                
            </div>

            <div className='checkout__right'>
                <Subtotal />
            </div>
        </div>
    )
};

export default Checkout
