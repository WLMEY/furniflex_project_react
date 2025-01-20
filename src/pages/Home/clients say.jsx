import React from 'react';
import NavigationArrows from './Navigation Arrows';


const ClientSay = () => {
    return (
        <div className="clientsay">
            <div className="fristcontiner">
                <span>don't take our word,<br />
                    see what our clients ClientSay
                </span>
                <NavigationArrows />
            </div>
            <div className="secandcontiner">
                <div className="showComent">
                    <div className="imag">
                        <img src="../../../Materials/man/man3.jpg" alt="" />
                    </div>
                    <div className="comm_ditiles">
                        <div className="commant">
                            <p>I recently purchased a beautiful dining set from
                                FurniFlex, and I couldn't be happier! The quality is
                                top-notch, and it looks even better in person than
                                it did online. Plus, the customer service team was
                                incredibly helpful throughout the entire process.
                                Highly recommend</p>
                        </div>
                        <hr />
                        <div className="clientDitils">
                            <span>Mohammed hussein kamel</span>
                            <p>Egypt</p>
                        </div>
                    </div>
                </div>
                <div className="client">
                    <img src="../../../Materials/man/man3.jpg" alt="" />
                </div>
            </div>
        </div>
    );
}

export default ClientSay;