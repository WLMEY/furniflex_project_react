import React from 'react';
import Header from '../../component/header/header';
import StarterBage from '../../component/starterbage/Starter bage ';
import EndHome from '../../component/End Home/End Home';
import Advertising from '../../component/Advertising/Advertising';
import ShoppingCart from './../../component/Shopping Cart/Shopping Cart';
const Blog = () => {
    return (

        <>
            <Header />
            <StarterBage title="our blog" />

            <div className='Blog'>
                <span>about our blog</span>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum sint excepturi corporis enim aperiam corrupti optio doloremque omnis nobis aspernatur. Veniam at labore illum, rerum quam ea numquam recusandae, ut, facere magnam enim. Quaerat officia culpa ea sit optio, labore, quisquam cumque, ipsam necessitatibus aut maxime molestias soluta odit. Sed eum, tenetur reprehenderit voluptate, magnam doloremque vel nesciunt consequuntur deleniti eos, animi ex esse praesentium saepe! Dignissimos animi tempora sapiente.</p>

                <div className="products_show">
                    <div className="blog_continer">
                        <div className="img_blog"></div>
                        <span>fist time home owner ideas</span>
                        <p> <span>by</span> Mohammed Husssein <span>on</span> <span style={{ color: '#ffaa00' }}>Apr 19.24</span></p>
                    </div>
                    <div className="blog_continer">
                        <div className="img_blog"></div>
                        <span>fist time home owner ideas</span>
                        <p> <span>by</span> Mohammed Husssein <span>on</span> <span style={{ color: '#ffaa00' }}>Apr 19.24</span></p>
                    </div>
                    <div className="blog_continer">
                        <div className="img_blog"></div>
                        <span>fist time home owner ideas</span>
                        <p> <span>by</span> Mohammed Husssein <span>on</span> <span style={{ color: '#ffaa00' }}>Apr 19.24</span></p>
                    </div>
                    <div className="blog_continer">
                        <div className="img_blog"></div>
                        <span>fist time home owner ideas</span>
                        <p> <span>by</span> Mohammed Husssein <span>on</span> <span style={{ color: '#ffaa00' }}>Apr 19.24</span></p>
                    </div>
                    <div className="blog_continer">
                        <div className="img_blog"></div>
                        <span>fist time home owner ideas</span>
                        <p> <span>by</span> Mohammed Husssein <span>on</span> <span style={{ color: '#ffaa00' }}>Apr 19.24</span></p>
                    </div>
                    <div className="blog_continer">
                        <div className="img_blog"></div>
                        <span>fist time home owner ideas</span>
                        <p> <span>by</span> Mohammed Husssein <span>on</span> <span style={{ color: '#ffaa00' }}>Apr 19.24</span></p>
                    </div>
                    <div className="blog_continer">
                        <div className="img_blog"></div>
                        <span>fist time home owner ideas</span>
                        <p> <span>by</span> Mohammed Husssein <span>on</span> <span style={{ color: '#ffaa00' }}>Apr 19.24</span></p>
                    </div>
                    <div className="blog_continer">
                        <div className="img_blog"></div>
                        <span>fist time home owner ideas</span>
                        <p> <span>by</span> Mohammed Husssein <span>on</span> <span style={{ color: '#ffaa00' }}>Apr 19.24</span></p>
                    </div>
                    <div className="blog_continer">
                        <div className="img_blog"></div>
                        <span>fist time home owner ideas</span>
                        <p> <span>by</span> Mohammed Husssein <span>on</span> <span style={{ color: '#ffaa00' }}>Apr 19.24</span></p>
                    </div>
                </div>

                <div className="pages">
                <button><i className="fa-solid fa-arrow-left-long"></i> Preview</button>
                <div className="pageNumpers">
                    <ul>
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                        <li>...</li>
                        <li>14</li>
                    </ul>
                </div>
                <button>Next <i className="fa-solid fa-arrow-right-long"></i></button>

            </div>



                <div className="share">
                    <div className="share_left sha">
                        <div>
                            <span>share your story</span>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem repellendus deserunt, aliquid inventore architecto quod nihil voluptatem illo ullam repudiandae provident labore dolorum, beatae et perspiciatis voluptates possimus. In, dolorem!Lorem</p>

                        </div>
                        <div>
                            <i class="fa-brands fa-whatsapp"></i>
                            <i class="fa-brands fa-github"></i>
                            <i class="fa-brands fa-facebook-f"></i>
                            <i class="fa-brands fa-x-twitter"></i>
                            <i class="fa-brands fa-linkedin-in"></i>

                        </div>
                    </div>
                    <div className="share_right sha">

                        <div>
                            <span style={{fontSize:'1.5rem'}}>share your story</span>
                            <p style={{color:"var(--text_main2)"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem repellendus deserunt, aliquid inventore architecto quod nihil voluptatem illo ullam repudiandae provident labore dolorum, beatae et perspiciatis voluptates possimus. In, dolorem!Lorem</p>
                            <a href="#">Email: mmm.1919750@gmail.com</a>

                        </div>
                        <div>
                            <p  style={{color:"var(--text_main2)"}}><span style={{color:"#2d777c",fontSize:'1.2em'}}>Thank you</span> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum consectetur maiores similique consequuntur repudiandae quibusdam veniam porro corporis dolorem, molestias impedit. Tempora voluptate ea inventore?</p>
                        </div>
                    </div>
                </div>

            </div>

            <Advertising />
            <EndHome />

        </>

    );
}

export default Blog;