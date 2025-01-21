import React from 'react';
const Explore = () => {
    return (
        <div className="Explore">
            <div className="titel">
                <span>Explore our latest blog</span>
                <button className='btn'> view all Posts  <i class="fa-solid fa-arrow-right-long"></i></button>
            </div>
            <div className="continer">
                <div className="item">
                    <div className="image">
                        <img src="../../../Materials/room/5.jpg" alt="" />

                    </div>
                    <span className='title'>First time home owner ideas</span>
                    <div className="imagedetiles">
                        <span className='preposition'>by </span>
                        <span className='name'>mohammed</span>
                        <span className='preposition'> on </span>
                        <span className='date'>apr 19:24</span>
                    </div>
                </div>
                <div className="item">
                    <div className="image">
                        <img src="../../../Materials/room/6.jpg" alt="" />

                    </div>
                    <span className='title'>how to keep your furniture clean</span>
                    <div className="imagedetiles">
                        <span className='preposition'>by </span>
                        <span className='name'>mohammed</span>
                        <span className='preposition'> on </span>
                        <span className='date'>apr 19:24</span>
                    </div>
                </div>
                <div className="item">
                    <div className="image">
                        <img src="../../../Materials/room/1.webp" alt="" />

                    </div>
                    <span className='title'>small space furniture apartment ideas</span>
                    <div className="imagedetiles">
                        <span className='preposition'>by </span>
                        <span className='name'>mohammed</span>
                        <span className='preposition'> on </span>
                        <span className='date'>apr 19:24</span>
                    </div>
                </div>
            </div>
        </div>



    );
}

export default Explore;