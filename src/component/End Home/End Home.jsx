import React from 'react';
import '../../styles/styles'
import { NavLink } from 'react-router';

const EndHome = () => {

    return (


        <div className="endHome">
            <div className="start">
                <hr />
                <div className="logo">
                    <span><span style={{ color: '#D09423' }}>F</span> FurniFlex<span style={{ color: '#D09423' }}>.</span> </span>
                </div>
                <hr />
            </div>
            <div className="pages">
                <div className="about ">
                    {/* <NavLink to={'/'}>our Company</NavLink> */}
                    <li style={{ color: 'black' }}>about</li>
                    <li> our Company</li>
                    <li>Our Our story</li>
                    <li>Biog</li>
                </div>
                <div className="information">
                    <li style={{ color: 'black' }} >information</li>
                    <li>Delivery information</li>
                    <li>Privacy Policy</li>
                    <li>Trams & Comditions</li>
                    <li>Return</li>
                </div>
                <div className="support">
                    <li style={{ color: 'black' }} >Support</li>
                    <li>Contact Us</li>
                    <li>Help</li>
                    <li>FAQ</li>
                    <li>Checkout</li>
                </div>

            </div>

            <div className="end">
                <div className="copyright">
                    <span>Copyright @2024 Furniflex. All Rights Reseved</span>
                </div>
                <div className="madia">
                    <i className="fa-brands fa-square-instagram"></i>
                    <i className="fa-brands fa-x-twitter"></i>
                    <i className="fa-brands fa-facebook-f"></i>
                </div>
                <div className="paymant">
                    <i className="fa-brands fa-cc-visa"></i>
                    <i className="fa-brands fa-cc-mastercard"></i>
                    <i className="fa-brands fa-amazon-pay"></i>
                </div>
            </div>

        </div>
    );
}

export default EndHome;