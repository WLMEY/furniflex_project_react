import React from 'react';
import Header from '../../component/header/header';
import EndHome from './../../component/End Home/End Home';
import Advertising from './../../component/Advertising/Advertising';
import StarterBage from './../../component/starterbage/Starter bage ';
import '../../../src/assets/data/product list.json';
import '../../styles/styles'
 const Products = () => {
   
    
    return ( 
        <div className='products_page'>
        <Header />
        <StarterBage title="Products"/>


        <div className="showproducts">

        </div>
        



        <Advertising/>
        <EndHome/>
    </div>
     );
 }
  
 export default Products;