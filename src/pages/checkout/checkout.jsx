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

                <div className="par2">
                    <span  className='title_checkout' >How would you like to pay?</span>
                    <div className="grid">

                        <div className="flex">
                            <input type="radio" name="pay" id="1" />
                            <label htmlFor="1">pay with credit card</label>

                        </div>
                        <div className="flex">
                            <input type="radio" name="pay" id="2" />
                            <label htmlFor="2">pay with paypal</label>

                        </div>
                        <div className="flex">
                            <input type="radio" name="pay" id="3" />
                            <label htmlFor="3">UsE gift card</label>

                        </div>
                    </div>
                    <div className="row6">
                        <div>
                            <div className="title_label">
                                <label>Name on card</label>
                                <span className='required'>Required</span>
                            </div>
                            <input className='input' type="text" placeholder='eduard franz' />
                        </div>
                        <div>
                            <div className="title_label">
                                <label>cad number</label>
                                <span className='required'>Required</span>
                            </div>
                            <input className='input' type="text" placeholder='92345792374589' />
                        </div>
                    </div>
                    <div className="row7">
                        <div>
                            <div className="title_label">
                                <label>Exploration</label>
                                <span className='required'>Required</span>
                            </div>
                            <input className='input' type="text" placeholder='5/24' />
                        </div>
                        <div>
                            <div className="title_label">
                                <label>CCV</label>
                                <span className='required'>Required</span>
                            </div>
                            <input className='input' type="text" placeholder='...' />
                        </div>
                    </div>
                    <div className='checkbox'>
                        <div className="checkbox_row">
                            <input type="checkbox" name="" id="9" />
                            <label htmlFor="9">Use shipping address as biling address</label>

                        </div>
                        <div className="checkbox_row">
                            <input type="checkbox" name="" id="8" />
                            <label htmlFor="8">i accept byredo terms & conditions</label>

                        </div>


                    </div>


                </div>














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
                        {/* all_column */}
                        <button className=" btn_chekout">confrm payment</button>
                        <button className=" btn_chekout cans">cancel</button>

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



























