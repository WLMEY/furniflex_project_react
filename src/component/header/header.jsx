import React from 'react';
import '../../styles/styles'

import { NavLink , useLocation ,BrowserRouter} from 'react-router-dom';


const Header = () => {


    return ( 
        
    <div className="header">
    <div className="followUs">
        <div className="f1">
            <span>Follow Us</span>
        
            <a href="https://github.com/WLMEY?tab=overview&from=2024-09-01&to=2024-09-23" target="_blank"><i className="fa-brands fa-github"></i></a>
            <a href="https://www.linkedin.com/in/mohammed-hussein-kamel-4247b4211/" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
            <a href="https://www.facebook.com/WLMEY0/"><i className="fa-brands fa-facebook-f" target="_blank"></i></a>
        </div>
        <div className="f2">
            <span>Sign up get 20% Off for all collection</span>
        </div>
        <div className="f3">
            <li><i className="fa-solid fa-phone"></i></li>
            <li>+20 1033744547</li>
        </div>
    </div>
    <div className="header-main">
        <div className="h1">
            <span><span  style={{color:'#D09423'}}>F</span> FurniFlex<span style={{color:'#D09423'}}>.</span> </span>
        </div>
        <div className="h2">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/Products">Products</NavLink></li>
            <li><NavLink to="/Categories">Categories</NavLink></li>
            <li><NavLink to="About_us">About Us</NavLink></li>
            <li><NavLink to="/Contact_Us">Contact Us</NavLink></li>
            <li><NavLink to="/Blog">Blog</NavLink></li>

        </div>
        <div className="h3">
            <li><i className="fa-solid fa-magnifying-glass"></i></li>
            <li><i className="fa-regular fa-heart"></i></li>
            <li><i className="fa-solid fa-bag-shopping"></i></li>
            <li><i className="fa-regular fa-user"></i></li>
        </div>
        <div className="h4">
            <i className="fa-solid fa-bars"></i>
        </div>
    </div>
</div>



     );
}
 
export default Header;