import React from 'react';
import '../../styles/styles'
import NavigationArrows from './Navigation Arrows';
const FeaturedCategories = () => {
    return ( 
<div className="Fetured">
        <div className="F_text">
            <span>featured categories</span>
        </div>
        <div className="F_iteams">


            <div className="F_product">
                <div className="image">
                    <img src=".../Materials/table/2.png" alt="" />
                </div>
                <div className="detiles">
                    <span>side table</span>
                    <p>discover 120 products</p>
                </div>
            </div>
            <div className="F_product">
                <div className="image">
                    <img src=".../Materials/table/2.png" alt="" />
                </div>
                <div className="detiles">
                    <span>side table</span>
                    <p>discover 120 products</p>
                </div>
            </div>
            <div className="F_product">
                <div className="image">
                    <img src=".../Materials/table/2.png" alt="" />
                </div>
                <div className="detiles">
                    <span>side table</span>
                    <p>discover 120 products</p>
                </div>
            </div>
            <div className="F_product">
                <div className="image">
                    <img src=".../Materials/table/2.png" alt="" />
                </div>
                <div className="detiles">
                    <span>side table</span>
                    <p>discover 120 products</p>
                </div>
            </div>

        </div>
        <div className="navigationBar">
            <NavigationArrows/>
        </div>











</div>

     );
}
 
export default FeaturedCategories;