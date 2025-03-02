import React from 'react';
import '../../styles/styles';
import data from '../../assets/data/product list'

const Horizontalscrolling = () => {

    return (
        <div className="Horizontalscrolling">


            <div className="products_show">
                {
                    data.map((item) => (

                        <div key={item.id} className="product_show">
                            <div className="image_show">
                                <img src={item.image} alt="" />
                                <span className={item.discount ? "discount" : "none"}>{item.discountvalue + "%"}</span>
                                {/* <i className="fa-solid fa-heart heart_p"></i> */}
                                <i key={item.id} className={item.favorite ? "fa-solid fa-heart heart_s" : "fa-regular fa-heart heart_r"} onClick={() => (clicked(item.id))}></i>

                            </div>
                            <div className="ditils_show">
                                <div className="text_show">
                                    <h3 className='text1'>{item.name}</h3>
                                    <span className='text1'>${calcprice(item.price, item.discountvalue)} </span>
                                    <span className={item.discount ? "text2" : "none"} ><del> ${item.price}</del></span>
                                </div>
                                <i className="fa-solid fa-cart-shopping shop_p"></i>

                            </div>
                        </div>
                    ))
                }

            </div>





        </div>
    );
}

export default Horizontalscrolling;