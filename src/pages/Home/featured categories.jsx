import React from 'react';
import '../../styles/styles'
import NavigationArrows from './Navigation Arrows';
const FeaturedCategories = () => {
    return (
        <div className="Fetured">
            <div className="F_text">
                <span>featured categories</span>
                <NavigationArrows />
            </div>
            <div className="F_iteams">


                <div className="F_product">
                    <div className="image">
                        <img src="/Materials/table/2.png" alt="" />
                    </div>
                    <div className="detiles">
                        <span>side table</span>
                        <p>discover 120 products</p>
                    </div>
                </div>
                <div className="F_product">
                    <div className="image">
                        <img src="/Materials/chair/the modern chair 6.jpg" alt="" />
                    </div>
                    <div className="detiles">
                        <span>arm chair</span>
                        <p>discover 45 products</p>
                    </div>
                </div>
                <div className="F_product">
                    <div className="image">
                        <img src="/Materials/table/3.jpg" alt="" />
                    </div>
                    <div className="detiles">
                        <span>dinner table</span>
                        <p>discover 120 products</p>
                    </div>
                </div>
                <div className="F_product">
                    <div className="image">
                        <img src="/Materials/pilow/5.jpg" alt="" />
                    </div>
                    <div className="detiles">
                        <span>pillow</span>
                        <p>discover 120 products</p>
                    </div>
                </div>

            </div>
            <div className="navigationBar">
                <div className="MotionSlices">
                    <div className="slice"></div>
                    <div className="slice"></div>
                    <div className="slice"></div>
                    <div className="slice"></div>
                    <div className="slice"></div>
                </div>
            </div>











        </div>

    );
}

export default FeaturedCategories;