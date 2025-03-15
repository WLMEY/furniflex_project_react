import React from 'react';
import Header from './../../component/header/header';
import StarterBage from '../../component/starterbage/Starter bage ';
import Advertising from '../../component/Advertising/Advertising';
import EndHome from '../../component/End Home/End Home';
import ClientSay from '../Home/clients say';
import Team from '../../component/team/team';
const AboutUs = () => {
    return (
        <>
            <Header />
            <StarterBage title="about Us" />
            <div className='aboutus'>

                <span style={{ textAlign: 'center' }} className='title_blog bigtitle title_aboutus'>discover Furniflex - <br />Wher innovation Meets Design</span>
                <div className="written flexcolumngap">
                    <div style={{ textAlign: 'center' }} className="image_blog image_about">
                        <img src="../../../Materials/woman/woman3.jpg" alt="" />

                    </div>
                </div>

                <div className="title_text_about">
                    <span className='g'>FurniFlex Challenging</span>
                    <span className='bigtitle'>The FurniFlex Journey Story</span>
                    <p className='g'>Lorem ipsum dolor, sit amete tenetur br similique nisi. Architecto sint temporibus possimus ea optio. <br /> Quidem harum itaque provident omnis voluptates!</p>
                </div>

                {/* /////////////////////////////////////////////////////////////////// */}

                <div className="storys">

                    <div className="row_storys">
                        <div className="image_story">
                            <img src="../../../Materials/man/man5.jpg" alt="" />
                        </div>
                        <div className="text_story">
                            <i class="fa-regular fa-hand-point-up"></i>
                            <span className='bigtitle'>from humble beginnings</span>
                            <p className='g'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium quia, ullam inventore dolorum ipsam saepe. Harum architecto repellendus aliquam officiis, temporibus illo dolorum assumenda facere odit pariatur facilis! Accusantium, deleniti?</p>
                        </div>
                    </div>
                    <div className="row_storys">
                        <div className="image_story">
                            <img src="../../../Materials/woman/woman1.webp" alt="" />
                        </div>
                        <div className="text_story">
                            <i class="fa-regular fa-hand-point-up"></i>
                            <span className='bigtitle'>from humble beginnings</span>
                            <p className='g'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium quia, ullam inventore dolorum ipsam saepe. Harum architecto repellendus aliquam officiis, temporibus illo dolorum assumenda facere odit pariatur facilis! Accusantium, deleniti?</p>
                        </div>
                    </div>
                    <div className="row_storys">
                        <div className="image_story">
                            <img src="../../../Materials/man/man6.jpg" alt="" />
                        </div>
                        <div className="text_story">
                            <i class="fa-regular fa-hand-point-up"></i>
                            <span className='bigtitle'>from humble beginnings</span>
                            <p className='g'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium quia, ullam inventore dolorum ipsam saepe. Harum architecto repellendus aliquam officiis, temporibus illo dolorum assumenda facere odit pariatur facilis! Accusantium, deleniti?</p>
                        </div>
                    </div>
                    <div className="row_storys">
                        <div className="image_story">
                            <img src="../../../Materials/woman/woman2.jpg" alt="" />
                        </div>
                        <div className="text_story">
                            <i class="fa-regular fa-hand-point-up"></i>
                            <span className='bigtitle'>from humble beginnings</span>
                            <p className='g'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium quia, ullam inventore dolorum ipsam saepe. Harum architecto repellendus aliquam officiis, temporibus illo dolorum assumenda facere odit pariatur facilis! Accusantium, deleniti?</p>
                        </div>
                    </div>
                    <div className="row_storys">
                        <div className="image_story">
                            <img src="../../../Materials/man/man7.jpg" alt="" />
                        </div>
                        <div className="text_story">
                            <i class="fa-regular fa-hand-point-up"></i>
                            <span className='bigtitle'>from humble beginnings</span>
                            <p className='g'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium quia, ullam inventore dolorum ipsam saepe. Harum architecto repellendus aliquam officiis, temporibus illo dolorum assumenda facere odit pariatur facilis! Accusantium, deleniti?</p>
                        </div>
                    </div>




                </div>





                {/* /////////////////////////////////////////////////////////////////// */}


                <Team />
                <ClientSay />

            </div>
            <Advertising />
            <EndHome />

        </>



    );
}

export default AboutUs;