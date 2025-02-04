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
        // console.log(id)
        data.map((item) => {
            if (id === item.id) {
                item.favorite = !item.favorite;
            }
        })
        setFavorite(prevfavorite => (prevfavorite === id ? !favorite : id));


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
                    <h1>Filter Option</h1>
                    <div className="category">
                        <h2>category</h2>
                        <ul>
                            <li> <input type="radio" name='x' /> bedroom</li>
                            <li><input type="radio" name='x'/> living room </li>
                            <li><input type="radio" name='x'/> office</li>
                            <li><input type="radio" name='x'/> kitchen</li>
                            <li><input type="radio"name='x' /> outdoor</li>

                        </ul>
                    </div>
                    <div className="price">
                        <h2>prive</h2>
                        <span>8880000</span>
                        <input type="range" name="" id="" />
                    </div>
                    <div className="martial">
                        <h2>martial</h2>
                        ???????
                    </div>
                    <div className="color">
                        <ul>
                            <form action="">
                                <input type="radio" name="x" id="x" value="" /> <label htmlFor=""> brown</label>
                                <input type="radio" name="x" id="x" value="" /> <label htmlFor=""> orange</label>
                                <input type="radio" name="x" id="x" value="" /> <label htmlFor=""> grey</label>
                                <input type="radio" name="x" id="" value="" /> <label htmlFor=""> black</label>
                                <input type="radio" name="x" id="" value="" /> <label htmlFor=""> blue</label>
                                <input type="radio" name="x" id="" value="" /> <label htmlFor=""> white</label>
                                <input type="radio" name="x" id="" value="" /> <label htmlFor=""> green</label>
                                <input type="radio" name="x" id="" value="" /> <label htmlFor=""> red</label>
                            </form> 


                        </ul>
                    </div>
                    <div className="availability">
                        <h2>availability</h2>
                        <ul>
                            <li><input type="radio" name="z" id="" />in Stock</li>
                            <li><input type="radio" name="z" id="" />Out fo stock</li>
                        </ul>
                    </div>






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





