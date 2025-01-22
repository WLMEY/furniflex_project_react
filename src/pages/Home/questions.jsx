import React from 'react';
const Questions = () => {
    return (

        <div className="questions">
            <div className="head">
                <span>got questions? we've <br />
                    got answers!
                </span>
            </div>
            <div className="continer_questions">
                <div className="question "> {/* show */}
                    <div className="question_c">
                        <span className='que'>How do i chosse the right furniture for my space?</span>
                        <i class=" fa-solid fa-arrow-right-long" />
                        {/* <i class=" fa-solid fa-xmark" /> */}

                    </div>
                    <span className='ans'>
                        Lorem ipsum dolor sit amet consectetur,
                        adipisicing elit. Dolorum in id sit,
                        error veritatis soluta labore. Asperiores,
                        quibusdam corrupti? Sapiente!
                    </span>

                </div>
            </div>
        </div>
    );
}

export default Questions;