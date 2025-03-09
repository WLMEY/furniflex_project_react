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
                    <h2>Get in touch</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum consequatur veritatis numquam atque nulla sapiente vitae quos ducimus neque quaerat totam necessitatibus, ut quasi et aliquam saepe rem asperiores voluptates!</p>
                    <div className="Packet">
                        <i style={{
                            backgroundColor: '#ffffcc',
                            color: '#939300'
                        }} class="fa-solid fa-envelope"></i>                       <div>
                            <span>Mail</span>
                            <span>mmm.191970@gmail.com</span>
                        </div>
                    </div>
                    <div className="Packet">
                        <i style={{
                            backgroundColor: '#ccccff',
                            color: '#5e5efd'
                        }} class="fa-solid fa-phone-volume"></i>                       <div>
                            <span>Phone</span>
                            <span>+20 01033744547</span>
                        </div>
                    </div>
                    <div className="Packet">
                        <i style={{
                            backgroundColor: '#ccffff',
                            color: '#00ffff'
                        }} class="fa-brands fa-whatsapp"></i>                       <div>
                            <span>Whatsapp</span>
                            <span>01033744547</span>
                        </div>
                    </div>
                    <div className="Packet">
                        <i style={{
                            backgroundColor: '#ccffcc',
                            color: '#00ff00'
                        }} class="fa-solid fa-location-dot"></i>                       <div>
                            <span>Location</span>
                            <span>fayoum</span>
                        </div>
                    </div>

                    <h4>Stay Connected</h4>
                    <div className="SocialMedia">
                        <i class="fa-brands fa-facebook-f"></i>
                        <i class="fa-brands fa-whatsapp"></i>
                        <i class="fa-brands fa-instagram"></i>
                        <i class="fa-brands fa-x-twitter"></i>
                        <i class="fa-brands fa-github"></i>



                    </div>







                </div>
                <div className="sendusamessage">
                    <h2>send us a message</h2>
                    <p>your email address will not be pybliahed <br />Reqqured fields are marked</p>

                    <form action="">
                        <span>name</span>
                        <input type="text" />
                        <span>Eamil Address</span>
                        <input type="email" />
                        <span>Phone Number</span>
                        <input type="number" />
                        <span>Messages</span>
                        <textarea></textarea>
                        <button className='btn'>submit</button>
                    </form>


                </div>
            </div>








            <iframe
                width="600"
                height="450"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27837.350990792267!2d30.8218!3d29.3101!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14597f4b4d7e29d5%3A0x6833a9391f1299c7!2z2KfZhNi12YrYqSDYp9mE2LPYsdmK2Kk!5e0!3m2!1sar!2seg!4v1709933604778"
            ></iframe>




            <Advertising />
            <EndHome />
        </>
    );
}

export default Contact;