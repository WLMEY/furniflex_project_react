import React from 'react';
import Advertising from '../../component/Advertising/Advertising';
import EndHome from '../../component/End Home/End Home';
import Header from '../../component/header/header';
import StarterBage from '../../component/starterbage/Starter bage ';
import ShoppingCartMain from './../Shopping Cart/Shopping Cart main';

const Checkout = () => {
    return (<>
        <Header />
        <StarterBage title="SHopping Cart/Checkout" />

        <div className="checkout">
            {/* <h2>billing details</h2> */}
            <div className="checkout_left">
                <form className='form_information' action="">

                    <div className="row1">
                        <div>
                            <div className="title_label">
                                <label>frist Name</label>
                                <span className='required'>Required</span>
                            </div>
                            <input type="text" placeholder='Mohammed' />
                        </div>
                        <div>
                            <div className="title_label">
                                <label>Last Name</label>
                                <span className='required'>Required</span>
                            </div>
                            <input type="text" placeholder='Hussein' />
                        </div>
                    </div>
                    <div className="row2">
                        <div>
                            <div className="title_label">
                                <label>Phone Number</label>
                                <span className='required'>Required</span>
                            </div>
                            <input type="number" placeholder='01--------' />
                        </div>
                        <div>
                            <div className="title_label">
                                <label>Email Address</label>
                                <span className='required'>Required</span>
                            </div>
                            <input type="email" placeholder='Email Address' />
                        </div>
                    </div>
                    <div className='row3'>
                        <div className="title_label">
                            <label>company Name (optional)</label>
                            <span className='required'>Required</span>
                        </div>
                        <input type="text" placeholder='Company Name' />
                    </div>
                    <div className='row4'>
                        <div className="title_label">
                            <label>country</label>
                            <span className='required'>Required</span>
                        </div>
                        <input type="text" placeholder='Egypt' />
                    </div>
                    <div className="row5">
                        <div>
                            <div className="title_label">
                                <label>city</label>
                                <span className='required' cv>Required</span>
                            </div>
                            <input type="text" placeholder='fayoum' />
                        </div>
                        <div>
                            <div className="title_label">
                                <label>address</label>
                                <span className='required'>Required</span>
                            </div>
                            <input type="text" placeholder='fayoum' />
                        </div>
                        <div>
                            <div className="title_label">
                                <label>ZIP code</label>
                                <span className='required'>Required</span>
                            </div>
                            <input type="number" placeholder='65431' />
                        </div>
                    </div>

























                </form>











            </div>
            <div className="checkout_right">

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
        </div>

        <Advertising />
        <EndHome />

    </>
    );
}

export default Checkout;



























