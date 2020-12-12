import React from 'react';
import './CSS/Product.css';
import StarRateIcon from '@material-ui/icons/StarRate';
import { useStateValue } from '../StateProvider';
import { Button } from '@material-ui/core';

function Product({id, title, image, price, rating }) {

    // state is state of rca dispatch is used to shoot data into data layer 
    const [{ basket }, dispatch] = useStateValue();

    // console.log('basket cotains: ', basket); 

    // console.log(basket[0].price)

    const addToBasket = () => {
        // dispatch item into data layer 
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            },
        })
    }

    return (
        <div className='product'>
            <div className='product__info'>
                <p>{title}</p>
                <p className='product__price'>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className='product__rating'>
                    {/* use trick to render out # of rating star   */}
                    {Array(rating)
                    .fill()
                    .map((_, i) => (
                        <p>⭐</p>
                    ))
                    }
                    
                </div>                
            </div> 

            <img src={image} />

            <Button className='add__toBasket' onClick={addToBasket}>
                Add to Basket
            </Button>
        </div>
    )
}

export default Product
