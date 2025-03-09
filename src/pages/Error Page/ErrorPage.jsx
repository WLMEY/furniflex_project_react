import React from 'react';
import EndHome from '../../component/End Home/End Home';
import Header from '../../component/header/header';
import { NavLink } from 'react-router-dom';

const ErrorPage = () => {
    return (  <>
    <Header/>
    
    
    <div className="ErrorPage">
            <img src="../../../Materials/Erorr/404.avif" alt="" />
            <h1>page not found</h1>
            <p>sorry, we can not find the page you are looking for.</p>
            <span><i class="fa-solid fa-arrow-left-long"></i> back to home</span>
    </div>
    
    
    <EndHome/>
    </>);
}
 
export default ErrorPage;