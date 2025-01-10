import React from 'react';
import Header from '../../component/header/header';
import Advertising from '../../component/Advertising/Advertising';
import EndHome from '../../component/End Home/End Home';
import ShoppingCart from '../../component/Shopping Cart/Shopping Cart';
import '../../styles/styles'
import StarterBage from './../../component/starterbage/Starter bage ';



const ShoppingCartMain = () => {



    return ( 
        <div className='ShoppingCartMain'>
            <Header/>
            <StarterBage/>
            <ShoppingCart/>
            <Advertising/>
            <EndHome/>
        </div>
     );
}
 
export default ShoppingCartMain;