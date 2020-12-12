import React from 'react';
import './CSS/Footer.css';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer__topInfo'>
                <div className='footer__top'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="d-block mb-2" role="img" viewBox="0 0 24 24" focusable="false"><title>Product</title><circle cx="12" cy="12" r="10"/><path d="M14.31 8l5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94M9.69 16L3.95 6.06M14.31 16H2.83m13.79-4l-5.74 9.94"/></svg>
                    <small class="d-block mb-3 text-muted">&copy; 2017-2020</small>
                </div>

                <div className='footer__top'>
                    <h2>Get To Know Us</h2>
                    <p>Careers</p>
                    <p>Blog</p>
                    <p>About Amazon</p>
                    <p>Amazon Devices</p>
                </div>

                <div className='footer__top'>
                    <h2>Make Money with Us</h2>
                    <p>Sell on Amazon</p>
                    <p>Sell on Amazon Business</p>
                    <p>Sell your Apps on Amazon</p>
                    <p>Become an Affiliate</p>
                    <p>Advertise your Products</p>
                    <p>Self-Publis with Us</p>
                    <p>Host an Amazon Hub</p>
                </div>

                <div className='footer__top'>
                    <h2>Amazon Payment Products</h2>
                    <p>Amazon Business Card</p>
                    <p>Shop with Points</p>
                    <p>Reload Your Balance</p>
                    <p>Amazon Currency Convertor</p>
                </div>

                <div className='footer__top'>
                    <h2>Contact Us</h2>
                    <p>0558491130</p>
                    <p>georgekrider@gmail.com</p>
                </div>
            </div>
            

            <div className = 'footer__bottom'>
                <p>
                    2020 Amazon Clone! No rights reserved - this is a demo
                </p>
                <p>
                    Privacy . Terms . Sitemap . Company Details
                </p>
            </div>
            
        </div>
    )
}

export default Footer
