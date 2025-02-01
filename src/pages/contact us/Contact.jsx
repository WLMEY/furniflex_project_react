import React from 'react';
import Header from './../../component/header/header';
import StarterBage from '../../component/starterbage/Starter bage ';
import ShoppingCart from '../../component/Shopping Cart/Shopping Cart';
import Advertising from '../../component/Advertising/Advertising';
import EndHome from '../../component/End Home/End Home';
const Contact = () => {
    return ( 

        <div className='contactus'>
            <Header/>
            <StarterBage title="Contact Us"/>

            <Advertising/>
            <EndHome/>
        </div>
     );
}
 
export default Contact;