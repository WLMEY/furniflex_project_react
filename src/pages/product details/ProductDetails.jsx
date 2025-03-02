
import React from 'react';
import '../../styles/styles';
import Header from '../../component/header/header';
import StarterBage from '../../component/starterbage/Starter bage ';
import Advertising from '../../component/Advertising/Advertising';
import EndHome from '../../component/End Home/End Home';
import ShoppingCart from './../../component/Shopping Cart/Shopping Cart';
const ProductDetails = () => {








    let img;
    let savemony = 25;
    let name = 'chir';
    let Prce = 125;
    let discount = 26;
    let productId = 516512;


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
                    {/* img */}
                    {/* <img src="../../../Materials/chair/plastic chair 10.jpg" alt="" /> */}
                    {/* icons */}
                    {/* icons */}e

                </div>
                <div className="imgdiv">e
                    {/* <img src="../../../Materials/chair/plastic chair 10.jpg" alt="" /> */}
                </div>
                <div className="imgdiv"> e
                    {/* <img src="../../../Materials/chair/plastic chair 10.jpg" alt="" /> */}
                </div>
                <div className="imgdiv">e
                    {/* <img src="../../../Materials/chair/plastic chair 10.jpg" alt="" /> */}
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











        <Advertising />
        <EndHome />
    </div>);
}

export default ProductDetails; 