import React from 'react';
import Header from './../../component/header/header';
import StarterBage from '../../component/starterbage/Starter bage ';
import Advertising from '../../component/Advertising/Advertising';
import EndHome from '../../component/End Home/End Home';
const AboutUs = () => {
    return ( 

        <div className='aboutus'>
            <Header/>
            <StarterBage title="about Us"/>

            <Advertising/>
            <EndHome/>
        </div>
     );
}
 
export default AboutUs;