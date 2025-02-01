import React from 'react';
import Header from '../../component/header/header';
import EndHome from './../../component/End Home/End Home';
import Advertising from './../../component/Advertising/Advertising';
import StarterBage from './../../component/starterbage/Starter bage ';
 const Products = () => {
    return ( 
        <div className='products_page'>
        <Header />
        <StarterBage title="Shopping cart"/>
        <h3>Products</h3>
        <Advertising/>
        <EndHome/>
    </div>
     );
 }
  
 export default Products;