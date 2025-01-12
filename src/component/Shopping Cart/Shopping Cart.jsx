import React from 'react';
import '../../styles/styles';


const ShoppingCart = () => {



    return (

 

        <div className="cart">
            <div className="product_price">
                <div className="container header_container">
                    <span>product</span>
                    <span>price</span>
                    <span>Quantiy</span>
                    <span>subtotal</span>
                </div>
                <div className="product_summary">
                    <div className="summary container container_list ">
                        <div className="product_img"> 
                            <img src="/Materials/chair/barrel chair 8.jpg" alt="" />
                            <span>Nova Nest Chair</span>
                        </div>
                        <span>$180.99</span>
                        <div className="quantity">
                            <button>-</button>
                            <span>01</span>
                            <button>+</button>
                        </div>
                        <div className="subtotal">
                            <span>$180.99</span>
                            <i className="fa-regular fa-circle-xmark"></i>
                        </div>
                    </div>
                    {/* <!-- icon  "x"  --> */}
                    <div className="summary container container_list ">
                        <div className="product_img">
                            <img src="/Materials/chair/barrel chair 8.jpg" alt="" />
                            <span>Nova Nest Chair</span>
                        </div>
                        <span>$180.99</span>
                        <div className="quantity">
                            <button>-</button>
                            <span>01</span>
                            <button>+</button>
                        </div>
                        <div className="subtotal">
                            <span>$180.99</span>
                            <i className="fa-regular fa-circle-xmark"></i>
                        </div>
                    </div>
                    {/* <!-- icon  "x"  --> */}
                    <div className="summary container container_list ">
                        <div className="product_img"> 
                            <img src="/Materials/chair/barrel chair 8.jpg" alt="" />
                            <span>Nova Nest Chair</span>
                        </div>
                        <span>$180.99</span>
                        <div className="quantity">
                            <button>-</button>
                            <span>01</span>
                            <button>+</button>
                        </div>
                        <div className="subtotal">
                            <span>$180.99</span>
                            <i className="fa-regular fa-circle-xmark"></i>
                        </div>
                    </div>
                    {/* <!-- icon  "x"  --> */}
                    <div className="summary container container_list ">
                        <div className="product_img">
                            <img src="/Materials/chair/barrel chair 8.jpg" alt="" />
                            <span>Nova Nest Chair</span>
                        </div>
                        <span>$180.99</span>
                        <div className="quantity">
                            <button>-</button>
                            <span>01</span>
                            <button>+</button>
                        </div>
                        <div className="subtotal">
                            <span>$180.99</span>
                            <i className="fa-regular fa-circle-xmark"></i>
                        </div>
                    </div>
                    {/* <!-- icon  "x"  --> */}




                </div>
            </div>
            <div className="order_summary">
                <div className="header">
                    <span>Order summary</span>
                </div>
                <div className="contant">
                    <span>subtotal</span>
                    <span>$774.96</span>
                    <span>shipping</span>
                    <span>free</span>
                    <span className="all_column">Add coupon code <i className="fa-solid fa-arrow-right-long"></i> </span>
                    <span className='total'>total</span>
                    <span className='total'>$774.96</span>
                    <button className="all_column btn_chekout">Proceed to Checkout</button>
                </div>
            </div>
        </div>

    );
}

export default ShoppingCart;