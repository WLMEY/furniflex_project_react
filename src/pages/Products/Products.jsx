import React from 'react';
import Header from '../../component/header/header';
import EndHome from './../../component/End Home/End Home';
import Advertising from './../../component/Advertising/Advertising';
import StarterBage from './../../component/starterbage/Starter bage ';
import '../../assets/data/product list';
import '../../styles/styles';
import productlist from '../../assets/data/product list';
import productlist from './../../assets/data/product list';
 const Products = () => {
   
    
    return ( 
        <div className='products_page'>
        <Header />
        <StarterBage title="Products"/>

        <productlist className="map"></productlist>

        <div className="showproducts">

        </div> 
        



        <Advertising/>
        <EndHome/>
    </div>
     );
 }
  
 export default Products;