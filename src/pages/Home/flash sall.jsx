import React from 'react';

const FlashSale = () => {
    return (
        <div className="flashSale">
            <div className="fs1">
                <div className="title">
                    <h2>fleas sale!</h2>
                    <p>Act fast to grab inceedible deals on select <br />
                    furniture pieces in our limited-time flash sale.
                    </p>
                </div>
                <div className="endtime">
                    <div className="texttime">
                    <i class="fa-regular fa-clock"></i>
                    <span> End time</span>
                    </div>

                    <div className="times">
                        <div className="box">12 H</div>
                        <div className="box">36 M</div>
                        <div className="box">57 S</div>
                    </div>
                </div>
                <div className="image1">
                    <img src="../../../Materials/sofa/4.png" alt="" />
                    <div className="span1">
                    <span>$599</span>
                    <span className='span2'><del>$799</del></span>
                
                    </div>
                </div>
                <div className="ditilesitem">
                        <h2>vintage leather armchai</h2>
                        <p>bring a touch of retro charm to your home <br />
                         with this vintage learher armchair. sturdy <br />
                        constrcuction ensures durability
                        </p>
                        <button className="btn"> Shop Now<i class="fa-solid fa-arrow-right-long  "></i></button>
                </div>
            </div>
            <div className="fs2">
                <img src="../../../Materials/table/2.png" alt="" />
                <div className="itemname">
                    <span>Rustic Coffee Table</span>
                    <i class="fa-solid fa-arrow-right-long arrowissingle "></i>
                </div>
            </div>
            <div className="fs3">
                <img src="../../../Materials/bookShelf/4.png" alt="" />
                <div className="itemname">
                    <span>Rustic Coffee Table</span>
                    <i class="fa-solid fa-arrow-right-long arrowissingle"></i>
                </div>
            </div>







        </div>


    );
}

export default FlashSale;