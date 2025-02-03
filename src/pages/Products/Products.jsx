import React from 'react';
import Header from '../../component/header/header';
import EndHome from './../../component/End Home/End Home';
import Advertising from './../../component/Advertising/Advertising';
import StarterBage from './../../component/starterbage/Starter bage ';
import '../../assets/data/product list';
import '../../styles/styles';
// import productlist from '../../assets/data/product list';
// import productlist from './../../assets/data/product list';
import data from '../../assets/data/product list'
 const Products = () => {
   
    
    return ( 
        <div className='products_page'>
        <Header />
        <StarterBage title="Products"/>


        <div className="showproducts">
            {/* <ul>
                {
                    data.map((item)=>(
                        <li>{item.name}
                        <br />
                            {item.price}
                            <br />
                            {item.describe}
                            </li>

                    ))
                }
            </ul> */}



        <div className="filters">

        </div>
        <div className="items">
            <div className="titles">
                <div className="showresult">
                    <p>showing 1-15 of 300 result</p>
                </div>
                <div className="short">
                    <span>short by: </span>
                    <span className='btn_list'>Default Sorting</span>
                    <span className='btn_list'>Size</span>
                </div>
            </div>
        </div>












        </div> 
        



        <Advertising/>
        <EndHome/>
    </div>
     );
 }
  
 export default Products;