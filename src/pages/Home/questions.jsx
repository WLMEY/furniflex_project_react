import React, { useState } from 'react';
const Questions = () => {
    const [showAnswer,setshowAnswer]=useState(false);
    const handclicke=()=>{
        setshowAnswer(!showAnswer)
    }
    return (

        <div className="questions">
            <div className="head">
                <span>got questions? we've <br />
                    got answers!
                </span>
            </div>
            <div className="continer_questions">
                <div className={showAnswer?"question":"show"}> {/*question  show */}
                    <div className="question_c">
                        <span className='que'>How do i chosse the right furniture for my space?</span>
                        <i onClick={handclicke} class={showAnswer?"fa-solid fa-arrow-right-long":"fa-solid fa-xmark"}/>
                        {/* <i class=" fa-solid fa-xmark" /> 
                        " fa-solid fa-arrow-right-long" */}

                    </div>
                    <span className={showAnswer?"ansoff":"anson"}>
                        Lorem ipsum dolor sit amet consectetur,<br />
                        adipisicing elit. Dolorum in id sit, Dolorum in id sit,
                        error veritatis soluta labore. Asperiores,<br />
                        quibusdam corrupti? Sapiente! Dolorum in id sit, Dolorum in id sit, Dolorum in id sit, Dolorum in id sit,
                    </span>

                </div>
            </div>
        </div>
    );
}

export default Questions;