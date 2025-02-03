import React, { useState } from 'react';
import Header from '../../component/header/header';
import EndHome from './../../component/End Home/End Home';
import Advertising from './../../component/Advertising/Advertising';
import StarterBage from './../../component/starterbage/Starter bage ';
import '../../assets/data/product list';
import '../../styles/styles';
// import productlist from '../../assets/data/product list';
// import productlist from './../../assets/data/product list';
import data from '../../assets/data/product list'
import ClientSay from './../Home/clients say';
const Products = () => {


    const [favorite, setFavorite] = useState(null);
    const clicked = (id) => {
        setFavorite(prevfavorite => (prevfavorite === id ? !favorite : id));
        // setFavorite(!favorite)

    }


    const calcprice = (price, discount) => {
        var newprice = price - (price * (discount / 100))
        // newprice=Math.round(newprice)
        newprice = Number(newprice.toFixed(2))
        return newprice;
    }







    return (
        <div className='products_page'>
            <Header />
            <StarterBage title="Products" />


            <div className="showproducts">
                {/* <ul>
                {
                    data.map((item)=>(
                        <li>{item.name}
                        <br />
                            {item.price}
                            <br />
                            {item.describe}
                            </li>

                    ))
                }
            </ul> */}



                <div className="filters">

                </div>
                <div className="items">
                    <div className="titles">
                        <div className="showresult">
                            <p>showing 1-15 of 300 result</p>
                        </div>
                        <div className="short">
                            <span>Short by:</span>
                            <span className='btn_list'>Default Sorting <i class="fa-solid fa-chevron-down"></i></span>
                            <span className='btn_list'>Size <i class="fa-solid fa-chevron-down"></i></span>
                        </div>
                    </div>
                    <div className="products_show">
                        {
                            data.map((item) => (

                                <div key={item.id} className="product_show">
                                    <div className="image_show">
                                        <img src={item.image} alt="" />
                                        <span className={item.discount ? "discount" : "none"}>{item.discountvalue + "%"}</span>
                                        {/* <i class="fa-solid fa-heart heart_p"></i> */}
                                        <i key={item.id} class={item.favorite ? "fa-solid fa-heart heart_s" : "fa-regular fa-heart heart_r"} onClick={() => (clicked(item.id))}></i>

                                    </div>
                                    <div className="ditils_show">
                                        <div className="text_show">
                                            <h3 className='text1'>{item.name}</h3>
                                            <span className='text1'>${calcprice(item.price, item.discountvalue)} </span>
                                            <span className={item.discount ? "text2" : "none"} ><del> ${item.price}</del></span>
                                        </div>
                                        <i class="fa-solid fa-cart-shopping shop_p"></i>

                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>












            </div>


            <Advertising />
            <EndHome />
        </div>
    );
}

export default Products;





