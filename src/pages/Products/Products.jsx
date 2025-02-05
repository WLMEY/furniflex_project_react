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


    function changechevron() {
        const chevron = document.getElementById("chevron");
        if (chevron.style.transform === "rotate(180deg)") {
            chevron.style.transform = "rotate(0deg)";
        } else {
            chevron.style.transform = "rotate(180deg)";

        }

    }

    function showandhide() {
        const filters = document.getElementById("filters");

        [...filters.children].forEach(child => {

        });
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



                <div id='filters' className="filters">
                    <span className='filterTitle'>Filter Option</span>
                    <div className="category">
                        <div className="title">
                            <span className="classtitle">category</span>
                            <i id='chevron' onClick={changechevron} class="fa-solid fa-chevron-up"></i>
                        </div>
                        <ul>
                            <li> <input type="radio" name='x' /> bedroom</li>
                            <li><input type="radio" name='x' /> living room </li>
                            <li><input type="radio" name='x' /> office</li>
                            <li><input type="radio" name='x' /> kitchen</li>
                            <li><input type="radio" name='x' /> outdoor</li>

                        </ul>
                    </div>
                    <div className="price">
                        <div className="title">
                            <span className="classtitle">prive</span>
                            <i id='chevron' class="fa-solid fa-chevron-up"></i>
                        </div>
                        <div className="price_value">
                            <span className='money'>10,000$-50,000$</span>
                            <input type="range" name="" id="" />
                        </div>

                    </div>
                    <div className="martial">
                        <div className='title'>
                            <span className="classtitle">martial</span>
                            <i id='chevron' class="fa-solid fa-chevron-up"></i>
                        </div>
                        <ul className='ulMartial'>
                            <li>Glass</li>
                            <li>Wood</li>
                            <li>Metal</li>
                            <li>Plastic</li>
                            <li>Stone</li>
                            <li>Clay</li>
                        </ul>

                    </div>
                    <div className="color">
                        <div className='title'>
                            <span className="classtitle">color</span>
                            <i id='chevron' class="fa-solid fa-chevron-up"></i>
                        </div>
                        <ul>


                            <li>
                                <input type="radio" name="x" id="brown" value="brown" />
                                <label for="brown">Brown</label>
                            </li>
                            <li>
                                <input type="radio" name="x" id="orange" value="orange" />
                                <label for="orange">Orange</label>
                            </li>
                            <li>
                                <input type="radio" name="x" id="grey" value="grey" />
                                <label for="grey">Grey</label>
                            </li>
                            <li>
                                <input type="radio" name="x" id="black" value="black" />
                                <label for="black">Black</label>
                            </li>
                            <li>
                                <input type="radio" name="x" id="blue" value="blue" />
                                <label for="blue">Blue</label>
                            </li>
                            <li>
                                <input type="radio" name="x" id="white" value="white" />
                                <label for="white">White</label>
                            </li>
                            <li>
                                <input type="radio" name="x" id="green" value="green" />
                                <label for="green">Green</label>
                            </li>
                            <li>
                                <input type="radio" name="x" id="red" value="red" />
                                <label for="red">Red</label>
                            </li>

                        </ul>
                    </div>
                    <div className="availability">
                        <div className='title'>
                            <span className="classtitle">availability</span>
                            <i id='chevron' class="fa-solid fa-chevron-up"></i>
                        </div>
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
                            <span >Short by:</span>
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


            <div className="pages">
                <button><i class="fa-solid fa-arrow-left-long"></i> Preview</button>
                <div className="pageNumpers">
                    <ul>
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                        <li>...</li>
                        <li>14</li>
                    </ul>
                </div>
                <button>Next <i class="fa-solid fa-arrow-right-long"></i></button>

            </div>

            <Advertising />
            <EndHome />
        </div>
    );
}

export default Products;





