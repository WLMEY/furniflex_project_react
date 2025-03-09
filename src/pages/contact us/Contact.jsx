import React from 'react';
import Header from './../../component/header/header';
import StarterBage from '../../component/starterbage/Starter bage ';
import ShoppingCart from '../../component/Shopping Cart/Shopping Cart';
import Advertising from '../../component/Advertising/Advertising';
import EndHome from '../../component/End Home/End Home';

const Contact = () => {
    // const bootstrap = require('bootstrap');
    return (

        <>
            <Header />
            <StarterBage title="Contact Us" />


            <div className="contactus " >
                <div className="getintouch">
s
                </div>
                <div className="sendusamessage">
                    <h2>send us a message</h2>
                    <p>your email address will not be pybliahed <br />Reqqured fields are marked</p>

                    <form action="">
                        <span>name</span>
                        <input type="text" />
                        <span>Eamil Address</span>
                        <input type="text" />
                        <span>Phone Number</span>
                        <input type="text" />
                        <span>Messages</span>
                        <input type="text" />  
                        <button className='btn'>submit</button>                      
                    </form>


                </div>
            </div>













            <Advertising />
            <EndHome />
        </>
    );
}

export default Contact;