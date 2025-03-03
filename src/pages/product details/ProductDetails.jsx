
import React from 'react';
import '../../styles/styles';
import Header from '../../component/header/header';
import StarterBage from '../../component/starterbage/Starter bage ';
import Advertising from '../../component/Advertising/Advertising';
import EndHome from '../../component/End Home/End Home';
import ShoppingCart from './../../component/Shopping Cart/Shopping Cart';
import Horizontalscrolling from './Horizontal scrolling';
import { animate, motion } from 'motion/react';

const ProductDetails = () => {

    let img;
    let savemony = 25;
    let name = 'chir';
    let Prce = 125;
    let discount = 26;
    let productId = 516512;
    let textDescription = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur non voluptatem nostrum minima hic natus dolore repellendus, unde optio inventore a, accusantium quaerat suscipit expedita facilis cupiditate aut? Hic deleniti, modi debitis incidunt atque ipsam quaerat qui odit dicta dolor tempore consectetur iure excepturi officia inventore cumque deserunt itaque dolorum aut assumenda aliquam omnis nemo quos fugiat. Perferendis, culpa optio.';


    return (<div className='productDetails'>

        <Header />
        <StarterBage title="Products/chair/procuct Details" />

        <div className="backto">
            <i className="fa-solid fa-arrow-left-long"></i>
            <span> Back to procuct </span>
        </div>

        <div className="itemshowdetilse">
            <div className="imagesDetilse">
                <div className="mainimage" style={{ img }}>
                    <img src="../../../Materials/chair/plastic chair 10.jpg" alt="" />
                    {/* icons */}
                    {/* icons */}
                    <div className="arrows ">
                    <i className="fa-solid fa-arrow-left-long active_i"></i>
                    <i className="fa-solid fa-arrow-right-long active_i"></i>
                    </div>

                </div>
                <motion.div whileTap={{scale:1.1 , borderBlockStyle:1}} className="imgdiv">
                    <img src="../../../Materials/chair/plastic chair 10.jpg" alt="" />
                </motion.div>
                <div className="imgdiv"> 
                    <img src="../../../Materials/chair/plastic chair 10.jpg" alt="" />
                </div>
                <div className="imgdiv">
                    <img src="../../../Materials/chair/plastic chair 10.jpg" alt="" />
                </div>


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
                    <p>ditils</p>
                </div>
                <div className="prce">
                    <span>$ {Prce - discount}</span>
                    <span><del>$ {Prce}</del></span>
                </div>
                <div>
                    <span>Product Code : {productId}</span>
                    {/* <i className="fa-regular fa-square"></i> */}
                    <i className="fa-regular fa-square-check"></i>
                    <span>in stock</span>
                </div>





            </div>
        </div>
        <div className="descriptions">
            <div className="des">
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











        <Advertising />
        <EndHome />
    </div>);
}

export default ProductDetails; 