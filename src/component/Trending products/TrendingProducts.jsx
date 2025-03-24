import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
 
const TrendingProducts = () => {


    const [solid,setsolid]=useState(false);
    const change=()=>{setsolid(!solid)}
    return ( 
<div className="TrendingProducts">

        <div className="titel">
            <span>trending products <br /> for you!</span>
            <button className='btn'>view all product <i className="fa-solid fa-arrow-right-long"></i></button>
            {/* arrow icon */}
            
        </div> 
<nav>
    <ul>
        
        <li ><NavLink  className={({isActive})=>(isActive?"active_on":"none")} to="stylesheet" href="#" >bed room</NavLink></li>
        <li><NavLink  className={({isActive})=>(isActive?"active_on":"none")} to="stylesheet" href="#" >room</NavLink> </li>
        <li><NavLink  className={({isActive})=>(isActive?"active_on":"none")} to="stylesheet" href="#" >dining room</NavLink></li>
        <li><NavLink  className={({isActive})=>(isActive?"active_on":"none")} to="stylesheet" href="#" >outdoor</NavLink></li>
        <li><NavLink  className={({isActive})=>(isActive?"active_on":"none")} to="stylesheet" href="#" >indoor</NavLink></li>

    </ul>
</nav>
<div className="products">

    <div className="procuct">
        <div className="desconun_like">
            <span>-20%</span>
            {/* hard icon */}
            {/* <i className="fa-solid fa-heart"></i> */}
            {/* <i className="fa-regular fa-heart"></i> */}
            
            {/* change the heard from regular to  soide if clicked */}

            <i className={`fa-${solid?"solid SColor":"regular"} fa-heart`}onClick={change} ></i>

            {/* <i className={({isActive})=>(isActive?"fa-solid fa-heart":"fa-regular fa-heart")}></i> */}
        </div>
        <div className="deitils_shop">
            <div className="deitiles">
                <div className="name">Luxe longe sofa</div>
                <div className="price">$235.99</div>
            </div>
            <div className="shopIcon">
                {/* shop icon */}
                <i className="fa-solid fa-cart-shopping shop_T"></i>
            </div>
        </div>
    </div>
    <div className="procuct">
        <div className="desconun_like">
            <span>-20%</span>
            {/* hard icon */}
            {/* <i className="fa-solid fa-heart"></i> */}
            <i className={`fa-${solid?"solid":"regular"} fa-heart`}onClick={change} ></i>
        </div>
        <div className="deitils_shop">
            <div className="deitiles">
                <div className="name">Luxe longe sofa</div>
                <div className="price">$235.99</div>
            </div>
            <div className="shopIcon">
                {/* shop icon */}
                <i className="fa-solid fa-cart-shopping shop_T"></i>
            </div>
        </div>
    </div>
    <div className="procuct">
        <div className="desconun_like">
            <span>-20%</span>
            {/* hard icon */}
            {/* <i className="fa-solid fa-heart"></i> */}
            <i className={`fa-${solid?"solid":"regular"} fa-heart`}onClick={change} ></i>
        </div>
        <div className="deitils_shop">
            <div className="deitiles">
                <div className="name">Luxe longe sofa</div>
                <div className="price">$235.99</div>
            </div>
            <div className="shopIcon">
                {/* shop icon */}
                <i className="fa-solid fa-cart-shopping shop_T"></i>
            </div>
        </div>
    </div>
    <div className="procuct">
        <div className="desconun_like">
            <span>-20%</span>
            {/* hard icon */}
            {/* <i className="fa-solid fa-heart"></i> */}
            <i className={`fa-${solid?"solid":"regular"} fa-heart`}onClick={change} ></i>
        </div>
        <div className="deitils_shop">
            <div className="deitiles">
                <div className="name">Luxe longe sofa</div>
                <div className="price">$235.99</div>
            </div>
            <div className="shopIcon">
                {/* shop icon */}
                <i className="fa-solid fa-cart-shopping shop_T"></i>
            </div>
        </div>
    </div>
    <div className="procuct">
        <div className="desconun_like">
            <span>-20%</span>
            {/* hard icon */}
            {/* <i className="fa-solid fa-heart"></i> */}
            <i className={`fa-${solid?"solid":"regular"} fa-heart`}onClick={change} ></i>
        </div>
        <div className="deitils_shop">
            <div className="deitiles">
                <div className="name">Luxe longe sofa</div>
                <div className="price">$235.99</div>
            </div>
            <div className="shopIcon">
                {/* shop icon */}
                <i className="fa-solid fa-cart-shopping shop_T"></i>
            </div>
        </div>
    </div>
    <div className="procuct">
        <div className="desconun_like">
            <span>-20%</span>
            {/* hard icon */}
            {/* <i className="fa-solid fa-heart"></i> */}
            <i className={`fa-${solid?"solid":"regular"} fa-heart`}onClick={change} ></i>
        </div>
        <div className="deitils_shop">
            <div className="deitiles">
                <div className="name">Luxe longe sofa</div>
                <div className="price">$235.99</div>
            </div>
            <div className="shopIcon">
                {/* shop icon */}
                <i className="fa-solid fa-cart-shopping shop_T"></i>
            </div>
        </div>
    </div>

</div>

</div>
     );
}
 
export default TrendingProducts;