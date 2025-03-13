import React from 'react';
import Header from '../../component/header/header';
import StarterBage from '../../component/starterbage/Starter bage ';
import Subscribe from '../Home/subscribe';
import EndHome from '../../component/End Home/End Home';
import Advertising from '../../component/Advertising/Advertising';


const Blogdetails = () => {
    return (
        <>
            <Header />
            <StarterBage title={"Our Blog Details"} />


            <div className="Blogdetails">

                <div className="welcome flexcolumngap">
                    <span className='title_blog bigtitle'>welcome to our blog!</span>
                    <p className='g'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem dolorum eos provident ad suscipit doloribus a, et, iure quae dolor, pariatur mollitia aliquid recusandae animi voluptas. Ullam nemo dolore ipsum, sint iusto autem sunt quo! Quidem corrupti pariatur, cumque ipsa rem, id aliquam possimus veritatis minus consequuntur unde quis hic?</p>
                    <div className="written flexcolumngap">
                        <div className="image_blog">
                            <img src="" alt="" />

                        </div>
                        <div className="ditils_written ">
                            <div className="left_written">
                                <span className='sub_title'>How to keep your furniture clean</span>
                                <p> <span className='g'>by</span> Robert Fox <span className='g'>On</span> <span className='y'>Apr 2024</span></p>                        </div>
                            <div className="right_written">
                                <img src="../../../Materials/man/man4.jpg" alt="" />
                                <div className="text_written">
                                    <span className='g'>Written by</span>
                                    <span className='name'>Mohammed hussein</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="topdesign flexcolumngap">
                        <span className="bigtitle">
                            Transform your living Room with These  <br />
                            Top 5 Design Tips
                        </span>
                        <p className='g'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae quaerat quibusdam iusto ratione ipsam porro! Itaque doloribus vel magni iure, nemo repudiandae id beatae quidem odit repellendus! Aliquam, minima mollitia. Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti quam expedita laboriosam itaque inventore iusto iste voluptates mollitia enim harum officia, quas incidunt rem esse aperiam perspiciatis perferendis ex voluptatem.lo</p>
                        <span className='sub_title'>1. choose a chohesive color scherme</span>
                        <p className='g'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem soluta, provident molestias, laboriosam culpa a, magnam aspernatur amet sit tenetur repellat ut dolorem quas itaque obcaecati veniam consectetur assumenda. Mollitia! Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus fugiat aspernatur nesciunt earum temporibus iure explicabo? Molestias harum adipisci voluptatibus velit, neque optio excepturi praesentium veniam in animi ad sint.</p>
                       
                        <span className='sub_title'>2. invest in quality seating</span>
                        <p className='g'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem soluta, provident molestias, laboriosam culpa a, magnam aspernatur amet sit tenetur repellat ut dolorem quas itaque obcaecati veniam consectetur assumenda. Mollitia! Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus fugiat aspernatur nesciunt earum temporibus iure explicabo? Molestias harum adipisci voluptatibus velit, neque optio excepturi praesentium veniam in animi ad sint.</p>

                        <span className='sub_title'>3. create a focal point</span>
                        <p className='g'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem soluta, provident molestias, laboriosam culpa a, magnam aspernatur amet sit tenetur repellat ut dolorem quas itaque obcaecati veniam consectetur assumenda. Mollitia! Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus fugiat aspernatur nesciunt earum temporibus iure explicabo? Molestias harum adipisci voluptatibus velit, neque optio excepturi praesentium veniam in animi ad sint.</p>

                        <span className='sub_title'>4. incorporate various testures</span>
                        <p className='g'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem soluta, provident molestias, laboriosam culpa a, magnam aspernatur amet sit tenetur repellat ut dolorem quas itaque obcaecati veniam consectetur assumenda. Mollitia! Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus fugiat aspernatur nesciunt earum temporibus iure explicabo? Molestias harum adipisci voluptatibus velit, neque optio excepturi praesentium veniam in animi ad sint.</p>

                        <span className='sub_title'>5. optimize lighting</span>
                        <p className='g'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem soluta, provident molestias, laboriosam culpa a, magnam aspernatur amet sit tenetur repellat ut dolorem quas itaque obcaecati veniam consectetur assumenda. Mollitia! Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus fugiat aspernatur nesciunt earum temporibus iure explicabo? Molestias harum adipisci voluptatibus velit, neque optio excepturi praesentium veniam in animi ad sint.</p>
                    </div>

            </div>



            <Subscribe />
            <Advertising />
            <EndHome />


        </>

    );
}

export default Blogdetails;