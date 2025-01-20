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
                        <img src="" alt="" />

                    </div>
                    <div className="comm_ditiles">
                        <div className="commant">
                            <p></p>
                        </div>
                        <hr />
                        <div className="clientDitils">
                            <span>name</span>
                            <p>locitoin</p>
                        </div>
                    </div>
                </div>
                <div className="client">
                    <img src="" alt="" />
                </div>
            </div>
        </div>
    );
}

export default ClientSay;