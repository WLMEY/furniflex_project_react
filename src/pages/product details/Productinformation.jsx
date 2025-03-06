import React from 'react';
import '../../styles/styles';

const ProductInformation = () => {
    return (

        <div className="productinformation">

            <div className="fristpart">
                <div className="TechDetails">
                    <span className='title_sup'>technical details</span>
                    <table>
                        <thead>
                            <tr>
                                <th>Features</th>
                                <th>Details</th>
                            </tr>
                        </thead>
                        <tbody>                        <tr>
                            <td>brand</td>
                            <td>KOLLEE</td>
                        </tr>
                            <tr>
                                <td>color</td>
                                <td>black</td>
                            </tr>
                            <tr>
                                <td>product dumemions</td>
                                <td>24^Dx24.4W x35.8*H</td>
                            </tr>
                            <tr>
                                <td>size</td>
                                <td>larg</td>
                            </tr>
                            <tr>
                                <td>back style</td>
                                <td>solid back</td>
                            </tr>
                            <tr>
                                <td>style</td>
                                <td>modern</td>
                            </tr>
                            <tr>
                                <td>unit count</td>
                                <td>1.0 count</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="addiInformation">
                    <span className='title_sup'>additional information</span>
                    <table className='tables'>
                        <thead>
                            <tr >
                                <th>Features</th>
                                <th>information</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>ASIN</td>
                                <td>Boljkh23</td>
                            </tr>
                            <tr>
                                <td>customer Reviews</td>
                                <td>4.0 </td>
                            </tr>
                            <tr>
                                <td>product dumemions</td>
                                <td>24^Dx24.4W x35.8*H</td>
                            </tr>
                            <tr>
                                <td>bost seller Rank </td>
                                <td>#323,653 in Home & kitchen</td>
                            </tr>
                            <tr>
                                <td>Date first Amiable</td>
                                <td> may 03,2025</td>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                            </tr>

                            <tr>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>


            <div className="scandpart">
                <div className="warrSupport">
                    <span className='title_sup'>warranty & support</span>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita cum odio
                        debitis ea ratione, quam sequi. Tenetur quae amet ex commodi,
                        mollitia minima! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere, inventore? Culpa dolorum expedita deserunt quaerat <a href="#" className='yello'>Return details</a></p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum nemo odit itaque
                        hic, aliquid architecto accusamus ullam et quasi odio optio numquam explicabo
                        officiis voluptates inventore nobis. Aut, ipsam quam earum
                        voluptates minima molestias rem fugiat doloremque, <a href="#" className='yello'>CLick here</a> ratione vero. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum, quas!</p>
                </div>
            </div>
        </div>


    );
}

export default ProductInformation;