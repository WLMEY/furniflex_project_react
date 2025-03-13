import React from 'react';
const Subscribe = () => {
    return (
        <div className='Subscribe'>
            <div className="leftcontiner">
                <span>subscribe to our
                    <br />bewsletter</span>
                <p>Subscribe to our email newsletter today to receive update
                    <br />on the lastest news</p>
                <form className="inputEmail">
                <i class="fa-regular fa-envelope"></i>
                    <input type="email" placeholder='Email' id='email'/>
                    <button className='btn btn_sub' form='email'name='email'>subscribe</button>
                </form>
            </div>
            <div className="rightcontiner">
                <img src="../../../Materials/room/3.webp" alt="" />
            </div>



        </div>
    );
}

export default Subscribe;