import React, { useState } from 'react';
import '../../styles/styles';


const Home = () => {

    const [mouse, setMouse] = useState(false);

    const roomClass = mouse ? "room1" : "room2";



    return (



        <div className="HOME">

            <div className="StartHome">
                <div className="Firsthalf">
                    <div className="text">
                        <p className="Field">furniture designe ideas</p>
                        <h1>modern interior <br />design studio</h1>
                        <p className="home_paragraph">Choosing the right furniture for your home online will add <br />elegance
                            and functionslity to
                            your interior while also <br />being cost effective and long lasting.</p>
                    </div>
                    <div className="buttons">
                        {/* 2 line is coment */}
                        {/* <i className="fa-solid fa-arrow-right-long"></i> */}
                        {/* <input type="button" value=" Shop Now ->" />  */}
                        <button className="input tast">
                            {/* onMouseEnter={() => console.log("1")}  */}
                            <span>Shop Now</span> <i className="fa-solid fa-arrow-right-long"></i></button>
                        <a href="https://github.com/WLMEY?tab=overview&from=2025-01-01&to=2025-01-01" target="_blank">Follow github</a>
                    </div>
                    <div className="Statistics">
                        <div className="Statistic">
                            <h3>2500+</h3>
                            <span>Unique Styles</span>
                        </div>
                        <div className="Statistic">
                            <h3>5000+</h3>
                            <span>Happy Customer</span>
                        </div>
                        <div className="Statistic">
                            <h3>300+</h3>
                            <span>Certified Outlets</span>
                        </div>
                    </div>
                </div>

                <div className="Secondhalf">
                    <div className="rooms">
                        <div className={roomClass}
                            id="room"
                            onMouseEnter={() => setMouse(true)}
                            onMouseLeave={() => setMouse(false)}>                  <img src="/Materials/room/1.webp" alt="" />
                            <div className="detils">
                                <span>Bed Room</span>
                                <span>1200+ item</span>
                            </div>
                        </div>
                        <div className={roomClass}
                            id="room"
                            onMouseEnter={() => setMouse(true)}
                            onMouseLeave={() => setMouse(false)}>
                            <img src="/Materials/Bedroom/2.jpg" alt="" />
                            <div className="detils">
                                <span>Bed Room</span>
                            </div>

                        </div>
                        <div className={roomClass}
                            id="room"
                            onMouseEnter={() => setMouse(true)}
                            onMouseLeave={() => setMouse(false)}>
                            <img src="/Materials/Bedroom/5.jpg" alt="" />
                            <div className="detils">
                                <span>Bed Room</span>
                            </div>

                        </div>
                        <div className={roomClass}
                            id="room"
                            onMouseEnter={() => setMouse(true)}
                            onMouseLeave={() => setMouse(false)}>
                            <img src="/Materials/Bedroom/3.jpg" alt="" />
                            <div className="detils">
                                <span>Bed Room</span>
                            </div>

                        </div>

                    </div>
                    <div className="icon">
                        <button> <i className="fa-solid fa-arrow-left-long"></i></button>
                        <button> <i className="fa-solid fa-arrow-right-long"></i></button>
                    </div>

                </div>
            </div>
            <div className="component">#Advertising#</div>

            <div className="items_show">
                <div className="item_1 Items">
                    <div className="texts">
                        <span className="Field">new collection</span>
                        <ul>
                            <li><span>name</span></li>
                            <li>square table</li>
                            <li>round table</li>
                            <li>woodden table</li>
                            <li>glass table</li>
                        </ul>
                        <a href="#">View All <i className="fa-solid fa-arrow-right-long"></i> </a>
                    </div>
                    <div className="image">
                        <img src="/Materials/table/2.png" width="300" height="300" alt="" />
                    </div>
                </div>
                <div className="item_2 Items">
                    <div className="texts">
                        <span className="Field">new collection</span>
                        <ul>
                            <li><span>name</span></li>
                            <li>square table</li>
                            <li>round table</li>
                            <li>woodden table</li>
                            <li>glass table</li>
                        </ul>
                        <a href="#">View All <i className="fa-solid fa-arrow-right-long"></i> </a>
                    </div>
                    <div className="image">
                        <img src="/Materials/table/2.png" width="300" height="300" alt="" />
                    </div>
                </div>
                <div className="item_3 Items">

                </div>
                <div className="item_4 Items">
                    <div className="texts">
                        <span className="Field">new collection</span>
                        <ul>
                            <li><span>name</span></li>
                            <li>square table</li>
                            <li>round table</li>
                            <li>woodden table</li>
                            <li>glass table</li>
                        </ul>
                        <a href="#">View All <i className="fa-solid fa-arrow-right-long"></i> </a>
                    </div>
                    <div className="image">
                        <img src="/Materials/table/2.png" width="300" height="300" alt="" />
                    </div>
                </div>

            </div>




        </div>
    );
}

export default Home;




