import React, { forwardRef } from 'react';
import './CSS/CheckoutProduct.css';
import { useStateValue } from '../StateProvider';
import reducer from '../reducer';
import { Button } from '@material-ui/core';

const CheckoutProduct = forwardRef(({ id, image, title, price, rating}, ref) => {

    const [{ basket }, dispatch] = useStateValue();

    const removeFromBasket = () => {
        //removing items from basket in data layer
        // we have to dispatch the remove functionin th reducer(data layr) 
        dispatch ({
            // ACTION TYPE 
            type: 'REMOVE_FROM_BASKET',
            // PASS IN ITEM ID 
            id: id,
        })
    }

    return (
        <div ref={ref} className='checkout_product'>
            <img className='checkProduct__image'
            src={image} />
            

            <div className='checkProduct__info'>
                <p className='checkProduct__title'>{title}</p>
                <p className='checkProduct__price'>
                <small>$</small>
                <strong>{price}</strong>
                </p>
                <div className='checkProduct__rating'>
                    {/* use trick to render out # of rating star   */}
                    {Array(rating)
                    .fill()
                    .map((_, i) => (
                        <p>⭐</p>
                    ))
                    }
                </div>
                <Button className='remove__fromBasket' onClick={removeFromBasket}>
                    Remove from basket
                </Button>
            </div>
        </div>
    )
});

export default CheckoutProduct
