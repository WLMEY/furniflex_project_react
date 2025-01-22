// import React, { useState } from 'react';
// const Questions = () => {
//     const [showAnswer,setshowAnswer]=useState(false);
//     const handclicke=()=>{
//         setshowAnswer(!showAnswer)
//     }
//     return (

//         <div className="questions">
//             <div className="head">
//                 <span>got questions? we've <br />
//                     got answers!
//                 </span>
//             </div>
//             <div className="continer_questions">
//                 <div className={showAnswer?"question":"show"}> {/*question  show */}
//                     <div className="question_c">
//                         <span className='que'>How do i chosse the right furniture for my space?</span>
//                         <i onClick={handclicke} class={showAnswer?"fa-solid fa-arrow-right-long":"fa-solid fa-xmark"}/>
//                         {/* <i class=" fa-solid fa-xmark" /> 
//                         " fa-solid fa-arrow-right-long" */}

//                     </div>
//                     <span className={showAnswer?"ansoff":"anson"}>
//                         Lorem ipsum dolor sit amet consectetur,<br />
//                         adipisicing elit. Dolorum in id sit, Dolorum in id sit,
//                         error veritatis soluta labore. Asperiores,<br />
//                         quibusdam corrupti? Sapiente! Dolorum in id sit, Dolorum in id sit, Dolorum in id sit, Dolorum in id sit,
//                     </span>

//                 </div>

//                 <div className={showAnswer?"question":"show"}> {/*question  show */}
//                     <div className="question_c">
//                         <span className='que'>How do i chosse the right furniture for my space?</span>
//                         <i onClick={handclicke} class={showAnswer?"fa-solid fa-arrow-right-long":"fa-solid fa-xmark"}/>
//                         {/* <i class=" fa-solid fa-xmark" /> 
//                         " fa-solid fa-arrow-right-long" */}

//                     </div>
//                     <span className={showAnswer?"ansoff":"anson"}>
//                         Lorem ipsum dolor sit amet consectetur,<br />
//                         adipisicing elit. Dolorum in id sit, Dolorum in id sit,
//                         error veritatis soluta labore. Asperiores,<br />
//                         quibusdam corrupti? Sapiente! Dolorum in id sit, Dolorum in id sit, Dolorum in id sit, Dolorum in id sit,
//                     </span>

//                 </div>
//                 <div className={showAnswer?"question":"show"}> {/*question  show */}
//                     <div className="question_c">
//                         <span className='que'>How do i chosse the right furniture for my space?</span>
//                         <i onClick={handclicke} class={showAnswer?"fa-solid fa-arrow-right-long":"fa-solid fa-xmark"}/>
//                         {/* <i class=" fa-solid fa-xmark" /> 
//                         " fa-solid fa-arrow-right-long" */}

//                     </div>
//                     <span className={showAnswer?"ansoff":"anson"}>
//                         Lorem ipsum dolor sit amet consectetur,<br />
//                         adipisicing elit. Dolorum in id sit, Dolorum in id sit,
//                         error veritatis soluta labore. Asperiores,<br />
//                         quibusdam corrupti? Sapiente! Dolorum in id sit, Dolorum in id sit, Dolorum in id sit, Dolorum in id sit,
//                     </span>

//                 </div>
//                 <div className={showAnswer?"question":"show"}> {/*question  show */}
//                     <div className="question_c">
//                         <span className='que'>How do i chosse the right furniture for my space?</span>
//                         <i onClick={handclicke} class={showAnswer?"fa-solid fa-arrow-right-long":"fa-solid fa-xmark"}/>
//                         {/* <i class=" fa-solid fa-xmark" /> 
//                         " fa-solid fa-arrow-right-long" */}

//                     </div>
//                     <span className={showAnswer?"ansoff":"anson"}>
//                         Lorem ipsum dolor sit amet consectetur,<br />
//                         adipisicing elit. Dolorum in id sit, Dolorum in id sit,
//                         error veritatis soluta labore. Asperiores,<br />
//                         quibusdam corrupti? Sapiente! Dolorum in id sit, Dolorum in id sit, Dolorum in id sit, Dolorum in id sit,
//                     </span>

//                 </div>
//                 <div className={showAnswer?"question":"show"}> {/*question  show */}
//                     <div className="question_c">
//                         <span className='que'>How do i chosse the right furniture for my space?</span>
//                         <i onClick={handclicke} class={showAnswer?"fa-solid fa-arrow-right-long":"fa-solid fa-xmark"}/>
//                         {/* <i class=" fa-solid fa-xmark" /> 
//                         " fa-solid fa-arrow-right-long" */}

//                     </div>
//                     <span className={showAnswer?"ansoff":"anson"}>
//                         Lorem ipsum dolor sit amet consectetur,<br />
//                         adipisicing elit. Dolorum in id sit, Dolorum in id sit,
//                         error veritatis soluta labore. Asperiores,<br />
//                         quibusdam corrupti? Sapiente! Dolorum in id sit, Dolorum in id sit, Dolorum in id sit, Dolorum in id sit,
//                     </span>

//                 </div>











//             </div>
//         </div>
//     );
// }

// export default Questions;










import React, { useState } from 'react';
// import './questions.css';
// import './size_color.css';

const Questions = () => {
    const [targetid, settargetid] = useState(null);  // هذا لتخزين الـ id الذي يتم الضغط عليه

    const handclicke = (id) => {
        // إذا كان الـ id الذي تم الضغط عليه هو نفس الـ id الحالي، نقوم بإخفاء الإجابة
        settargetid(prevTargetId => (prevTargetId === id ? null : id));
    };

    return (
        <div className="questions">
            <div className="head">
                <span>got questions? we've <br />got answers!</span>
            </div>
            <div className="continer_questions">
                {[1, 2, 3, 4, 5].map(id => (
                    <div key={id} className={targetid === id ?"show":"question" }>
                        <div className="question_c">
                            <span className='que'>How do I choose the right furniture for my space?</span>
                            <i 
                                id={id} 
                                onClick={() => handclicke(id)} 
                                className={targetid === id ? "fa-solid fa-xmark" : "fa-solid fa-arrow-right-long"}
                            />
                        </div>
                        {targetid === id && (
                            <span className="anson">
                                Lorem ipsum dolor sit amet consectetur,<br />
                                adipisicing elit. Dolorum in id sit, Dolorum in id sit,
                                error veritatis soluta labore. Asperiores,<br />
                                quibusdam corrupti? Sapiente! Dolorum in id sit, Dolorum in id sit, Dolorum in id sit, Dolorum in id sit,
                            </span>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Questions;
