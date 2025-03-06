import React from 'react';
import '../../styles/styles';

const ProductInformation = () => {
    return (

        <div className="productinformation">

            <div className="fristpart">
                <div className="TechDetails">
                    <span className='title_sup'>technical details</span>
                </div>

                <div className="addiInformation">
                <span className='title_sup'>additional information</span>

                </div>
            </div>


            <div className="scandpart">
                <div className="warrSupport">
                <span className='title_sup'>warranty & support</span>

                </div>
            </div>
        </div>
        

    );
}

export default ProductInformation;