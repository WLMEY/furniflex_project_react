import React from 'react';
import Header from '../../component/header/header';
import StarterBage from '../../component/starterbage/Starter bage ';
import EndHome from '../../component/End Home/End Home';
import Advertising from '../../component/Advertising/Advertising';
const Blog = () => {
    return ( 
        <div className='Blog'>
            <Header/>
            <StarterBage title="our blog"/>

            <Advertising/>
            <EndHome/>
        </div>
     );
}
 
export default Blog;