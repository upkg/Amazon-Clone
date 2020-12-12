import React from 'react';
import './CSS/Home.css';
import Product from './Product.js';
import Background from './Images/Background.jpg';

function Home() {
    return (
        <div className='home'>
            <div className='home__container'>
                <img className='home__image'
                src={Background} alt='background'
                />

                <div className='home__row'>
                    <Product
                        id='98765'
                        title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses [By ER]-[Paperback]"
                        price={19.99}
                        image='https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg'
                        rating={4}
                     />
                    <Product
                        id='12345'
                        title='PS5 DualSense Wireless Controller'
                        price={69.96}
                        image='https://m.media-amazon.com/images/I/71y+UGuJl5L._AC_UY327_FMwebp_QL65_.jpg'
                        rating={5}
                     />
                    
                </div>

                <div className='home__row'>
                    <Product
                        id='79583'
                        title='Xbox Core Controller - Carbon Black'
                        price={61.22}
                        image='https://m.media-amazon.com/images/I/61z3GQgEPZL._AC_UY327_FMwebp_QL65_.jpg'
                        rating={4}
                     />
                    <Product
                        id='23890930'
                        title='RUNMUS Gaming Headset Xbox One Headset with 7.1 Surround Sound, PS4 Headset with Noise Canceling Mic & LED Light, Compatible with PC, PS4, Xbox One Controller(Adapter Not Included)'
                        price={19.85}
                        image='https://m.media-amazon.com/images/I/61lnzTv2a0L._AC_UY327_FMwebp_QL65_.jpg'
                        rating={4}
                     />
                    <Product
                        id='4567890'
                        title='Seagate Game Drive 2TB External Hard Drive Portable HDD, Designed For Xbox One, Green - 1 year Rescue Service (STEA2000403)'
                        price={79.00}
                        image='https://m.media-amazon.com/images/I/810ojt3yChL._AC_UY327_FMwebp_QL65_.jpg'
                        rating={4}
                     />
                </div>

                <div className='home__row'>
                    <Product
                        id='529243'
                         title='Sceptre 30-inch Curved Gaming Monitor 21:9 2560x1080 Ultra Wide Ultra Slim HDMI DisplayPort up to 200Hz Build-in Speakers, Metal Black (C305B-200UN)'
                         price={278.99}
                         image='https://m.media-amazon.com/images/I/81Wt3h7-V2L._AC_UY327_FMwebp_QL65_.jpg'
                         rating={4}
                    />
                    
                </div>

            </div>
        </div>
    )
}

export default Home
