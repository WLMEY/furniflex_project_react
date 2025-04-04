
import React from 'react';
import '../../styles/styles';
import Header from '../../component/header/header';
import StarterBage from '../../component/starterbage/Starter bage ';
import Advertising from '../../component/Advertising/Advertising';
import EndHome from '../../component/End Home/End Home';
import Horizontalscrolling from './Horizontal scrolling';
import { motion } from 'motion/react';
import CouponCard from './CouponCard';
import { Navigate, useNavigate } from 'react-router';
import Review from './Review';
import ProductInformation from './Productinformation';


const ProductDetails = () => {
    let review = 4.9, review2 = 170, review3 = 450;
    let img;
    let savemony = 25;
    let name = 'chir';
    let Prce = 125;
    let discount = 26;
    let productId = 516512;
    let textDescription = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur non voluptatem nostrum minima hic natus dolore repellendus, unde optio inventore a, accusantium quaerat suscipit expedita facilis cupiditate aut? Hic deleniti, modi debitis incidunt atque ipsam quaerat qui odit dicta dolor tempore consectetur iure excepturi officia inventore cumque deserunt itaque dolorum aut assumenda aliquam omnis nemo quos fugiat. Perferendis, culpa optio.';


    return (
        <>
            <Header />
            <StarterBage title="Products/chair/procuct Details" />

            <div className='productDetails'>


                <div className="backto">
                    <i className="fa-solid fa-arrow-left-long"></i>
                    <span> Back to procuct </span>
                </div>

                <div className="itemshowdetilse">
                    <div className="imagesDetilse">
                        <div className="mainimage" style={{ img }}>
                            <img src="../../../Materials/chair/chair1.jpg" alt="" />
                            <div className="arrows ">
                                <i className="fa-solid fa-arrow-left-long active_i"></i>
                                <i className="fa-solid fa-arrow-right-long active_i"></i>
                            </div>

                        </div>
                        <motion.div whileHover={{ borderWidth: "1px", }} className="imgdiv">
                            <img src="../../../Materials/chair/chair1.jpg" alt="" />
                        </motion.div>
                        <motion.div whileHover={{ borderWidth: "1px", }} className="imgdiv">
                            <img src="../../../Materials/chair/plastic chair 10.jpg" alt="" />
                        </motion.div>
                        <motion.div whileHover={{ borderWidth: "1px", }} className="imgdiv">
                            <img src="../../../Materials/chair/plastic chair 10.jpg" alt="" />
                        </motion.div>
                    </div>


                    <div className="textshowdeitailse">
                        <div className="saveday">
                            <div className="left_save">
                                <i className="fa-solid fa-arrow-up-right-from-square"></i>
                                <span>Save {savemony}$</span>
                            </div>
                            <div className="right_save">
                                <p >choice Day</p>
                                <i className="fa-solid fa-calendar"></i>
                            </div>
                        </div>

                        <div className="ditilseitem">
                            <span>{name}</span>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi tenetur aliquam accusamus qui assumenda architecto? Numquam doloribus, tempora assumenda in voluptatem laudantium nemo earum et adipisci, vero iusto, nulla id?</p>
                        </div>
                        <div className="productreviews">
                            <div className="prce">
                                <span>${Prce - discount}</span>
                                <span><del>${Prce}</del></span>
                            </div>
                            <div className='stock'>
                                <span className='stock_id'>Product Code : {productId}</span>
                                {/* <i className="fa-regular fa-square"></i> */}
                                <i className="fa-regular fa-square-check"></i>
                                <span className='instock'>in stock</span>
                            </div>
                            <div className="reviews">
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>

                                <span> {review}</span>
                                <span className='Participants'> {review2} Reviews | {review3} sold</span>
                            </div>
                        </div>

                        <div className="buttons">
                            <div className="quantity_product">
                                <button>-</button>
                                <span>01</span>
                                <button>+</button>
                            </div>
                            <div className="buttonbuy">
                                <motion.button style={{ backgroundColor: "var(--btn)" }} whileTap={{ scale: 1.1 }} transition={{ mass: 2, type: "spring", stiffness: 400, }} >Buy Now</motion.button>
                                <motion.button style={{ backgroundColor: "var(--color_main)" }} whileTap={{ scale: 1.1 }} transition={{ mass: 2, type: "spring", stiffness: 400, }} >Add To Cart</motion.button>
                                <i className="fa-regular fa-heart"></i>
                                <i className="fa-solid fa-share-nodes"></i>

                            </div>
                        </div>
                        <div className="coupon">
                            <p>coupon & Discount</p>
                            <CouponCard />
                        </div>






                    </div>
                </div>
                <div className="descriptions">
                    <div className="des">
                    {/* <ProductInformation/>
                    <Review/> */}
                        <span className='spanOn'>Description</span>
                        <span className='spanOff'>Additional information</span>
                        <span className='spanOff'>Review</span>
                    </div>
                    <p className='textDescription'>{textDescription}</p>
                </div>
                <div className="aboutthisitem">
                    <h2>About this item</h2>
                    <div>
                        <i className="fa-regular fa-circle-right"></i>
                        <span>Lorem Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus aliquid eaque aspernatur inventore, adipisci eum. ipsum dolor, sit amet ipsum dolor sit amet consectetur adipisicing elit. Doloribus aliquid eaque aspernatur inventore, adipisci eum. ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos, sapiente.</span>
                    </div>
                    <div>
                        <i className="fa-regular fa-circle-right"></i>
                        <span>Lorem Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus aliquid eaque aspernatur inventore, adipisci eum. ipsum dolor, sit amet ipsum dolor sit amet consectetur adipisicing elit. Doloribus aliquid eaque aspernatur inventore, adipisci eum. ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos, sapiente.</span>
                    </div>
                    <div>
                        <i className="fa-regular fa-circle-right"></i>
                        <span>Lorem Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus aliquid eaque aspernatur inventore, adipisci eum. ipsum dolor, sit amet ipsum dolor sit amet consectetur adipisicing elit. Doloribus aliquid eaque aspernatur inventore, adipisci eum. ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos, sapiente.</span>
                    </div>
                    <div>
                        <i className="fa-regular fa-circle-right"></i>
                        <span>Lorem Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus aliquid eaque aspernatur inventore, adipisci eum. ipsum dolor, sit amet ipsum dolor sit amet consectetur adipisicing elit. Doloribus aliquid eaque aspernatur inventore, adipisci eum. ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos, sapiente.</span>
                    </div>
                    <div>
                        <i className="fa-regular fa-circle-right"></i>
                        <span>Lorem Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus aliquid eaque aspernatur inventore, adipisci eum. ipsum dolor, sit amet ipsum dolor sit amet consectetur adipisicing elit. Doloribus aliquid eaque aspernatur inventore, adipisci eum. ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos, sapiente.</span>
                    </div>
                </div>

                <div className="DiscoverSI HS">
                    <h2>Descover similar items</h2>
                    <Horizontalscrolling />
                </div>
                <div className="customerFV HS">
                    <h2>Customer frequently viewed</h2>
                    <span>Popular products in the last 7 days</span>
                    <Horizontalscrolling />
                </div>












            </div>
            <Advertising />
            <EndHome />
        </>
    );
}

export default ProductDetails; 