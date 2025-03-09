import React from 'react';
import Horizontalscrolling from './../product details/Horizontal scrolling';
import Header from '../../component/header/header';
import StarterBage from '../../component/starterbage/Starter bage ';
import Advertising from '../../component/Advertising/Advertising';
import EndHome from '../../component/End Home/End Home';

const Ordercompleted = () => {
    return (<>

        <Header />
        <StarterBage title="Order Completed" />


        <div className="ordercompleted">
            <img src="../../../Materials/etc imgaes/order done.jpg" alt="" />
            <h1>Thank you for your purchase!</h1>
            <p>your order has been successfully processed Here are the details</p>

            <div className="Ordercompletedsammary">
                <table>
                    <thead>
                        <tr>
                            <th>order Sammary</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>order namber</td>
                            <td>#393,353</td>
                        </tr>
                        <tr>
                            <td>date</td>
                            <td>2025/3/15</td>
                        </tr>
                        <tr>
                            <td>items purchased</td>
                            <td>4 total items</td>
                        </tr>
                        <tr>
                            <td>total</td>
                            <td>$774.23</td>
                        </tr>
                    </tbody>
                    


                </table>
                <button className='btn_order'>view order details</button>

            </div>








            <div className="ordertextstatus">

                <span>Order Status: </span>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias corrupti autem voluptas quaerat nesciunt ut quis, reiciendis maiores placeat ipsum voluptatibus fuga asperiores? Quam obcaecati laboriosam numquam saepe eius reiciendis recusandae veniam illo ipsum alias quis tempore ex similique repellat ipsam quasi, laborum beatae possimus ducimus quod id optio iusto.</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore, saepe vel! Aperiam illo quod esse quas laborum. Veritatis atque aliquam dolores mollitia eveniet tenetur veniam cumque. Dignissimos harum quasi ratione similique sed architecto voluptate cupiditate nobis ut corporis alias minus doloremque non dolore, voluptatibus provident obcaecati. Nemo accusantium reprehenderit dolor aspernatur fugiat totam deserunt aliquam alias ullam dolorum voluptates aliquid, nihil officia, amet temporibus aperiam. Dignissimos, alias blanditiis! Maxime, eaque!</p>
                <a href='#'> Email: mmm.1919750@gmail.com or</a>
                <br />
                <a href="#"> Phone No +20 01033744547</a>
            </div>

        </div>


        <EndHome />

    </>);
}

export default Ordercompleted;