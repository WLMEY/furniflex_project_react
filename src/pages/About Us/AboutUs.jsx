import React from 'react';
import Header from './../../component/header/header';
import StarterBage from '../../component/starterbage/Starter bage ';
import Advertising from '../../component/Advertising/Advertising';
import EndHome from '../../component/End Home/End Home';
import ClientSay from '../Home/clients say';
const AboutUs = () => {
    return (
        <>
            <Header />
            <StarterBage title="about Us" />
            <div className='aboutus'>

                <span style={{textAlign:'center'}} className='title_blog bigtitle title_aboutus'>discover Furniflex - <br />Wher innovation Meets Design</span>
                <div className="written flexcolumngap">
                    <div style={{textAlign:'center'}} className="image_blog">
                        <img src="" alt="" />
                        ...
                    </div>
                </div>

                <div className="title_text_about">
                    <span className='g'>FurniFlex Challenging</span>
                    <span className='bigtitle'>The FurniFlex Journey Story</span>
                    <p className='g'>Lorem ipsum dolor, sit amete tenetur br similique nisi. Architecto sint temporibus possimus ea optio. <br /> Quidem harum itaque provident omnis voluptates!</p>
                </div>

            {/* /////////////////////////////////////////////////////////////////// */}







            {/* /////////////////////////////////////////////////////////////////// */}


                <ClientSay/>











            </div>
            <Advertising />
            <EndHome />

        </>



    );
}

export default AboutUs;