import React, { useState } from 'react';
import '../../styles/styles';
import data from '../../assets/data/product list';








const Horizontalscrolling = () => {


    
    const [favorite, setFavorite] = useState(null);
    const clicked = (id) => {
        // console.log(id)
        data.map((item) => {
            if (id === item.id) {
                item.favorite = !item.favorite;
            }
        })
        setFavorite(prevfavorite => (prevfavorite === id ? !favorite : id));
 

    }  


    const calcprice = (price, discount) => {
        var newprice = price - (price * (discount / 100))
        // newprice=Math.round(newprice)
        newprice = Number(newprice.toFixed(2))
        return newprice;
    }


    return (
        <div className="Horizontalscrolling">
                {
                    data.map((item) => (

                        <div key={item.id} className="product_show">
                            <div className="image_show">
                                <img src={item.image} alt="" />
                                <span className={item.discount ? "discount" : "none"}>{item.discountvalue + "%"}</span>
                                {/* <i className="fa-solid fa-heart heart_p"></i> */}
                                <i key={item.id} className={item.favorite ? "fa-solid fa-heart heart_s" : "fa-regular fa-heart heart_r"} onClick={() => (clicked(item.id))}></i>

                            </div>
                            <div className="ditils_show">
                                <div className="text_show">
                                    <h3 className='text1'>{item.name}</h3>
                                    <span className='text1'>${calcprice(item.price, item.discountvalue)} </span>
                                    <span className={item.discount ? "text2" : "none"} ><del> ${item.price}</del></span>
                                </div>
                                <i className="fa-solid fa-cart-shopping shop_p"></i>

                            </div>
                        </div>
                    ))
                }

        </div>
    );
}

export default Horizontalscrolling;



// "use client"

// import { animate, motion, type MotionValue, useMotionValue, useMotionValueEvent, useScroll } from "motion/react"
// import { useRef } from "react"

// export default function ScrollLinked() {
//   const ref = useRef(null)
//   const { scrollXProgress } = useScroll({ container: ref })
//   const maskImage = useScrollOverflowMask(scrollXProgress)

//   return (
//     <div id="example">
//       <svg id="progress" width="80" height="80" viewBox="0 0 100 100">
//         <circle cx="50" cy="50" r="30" pathLength="1" className="bg" />
//         <motion.circle cx="50" cy="50" r="30" className="indicator" style={{ pathLength: scrollXProgress }} />
//       </svg>
//       <motion.ul ref={ref} style={{ maskImage }}>
//         <li style={{ background: "var(--hue-1)" }}></li>
//         <li style={{ background: "var(--hue-2)" }}></li>
//         <li style={{ background: "var(--hue-3)" }}></li>
//         <li style={{ background: "var(--hue-4)" }}></li>
//         <li style={{ background: "var(--hue-5)" }}></li>
//         <li style={{ background: "var(--hue-6)" }}></li>
//       </motion.ul>
//       <StyleSheet />
//     </div>
//   )
// }

// const left = `0%`
// const right = `100%`
// const leftInset = `20%`
// const rightInset = `80%`
// const transparent = `#0000`
// const opaque = `#000`
// function useScrollOverflowMask(scrollXProgress: MotionValue<number>) {
//   const maskImage = useMotionValue(
//     `linear-gradient(90deg, ${opaque}, ${opaque} ${left}, ${opaque} ${rightInset}, ${transparent})`,
//   )

//   useMotionValueEvent(scrollXProgress, "change", (value) => {
//     if (value === 0) {
//       animate(
//         maskImage,
//         `linear-gradient(90deg, ${opaque}, ${opaque} ${left}, ${opaque} ${rightInset}, ${transparent})`,
//       )
//     } else if (value === 1) {
//       animate(
//         maskImage,
//         `linear-gradient(90deg, ${transparent}, ${opaque} ${leftInset}, ${opaque} ${right}, ${opaque})`,
//       )
//     } else if (scrollXProgress.getPrevious() === 0 || scrollXProgress.getPrevious() === 1) {
//       animate(
//         maskImage,
//         `linear-gradient(90deg, ${transparent}, ${opaque} ${leftInset}, ${opaque} ${rightInset}, ${transparent})`,
//       )
//     }
//   })

//   return maskImage
// }

// /**
//  * ==============   Styles   ================
//  */

// function StyleSheet() {
//   return (
//     <style>{`
//             #example {
//               width: 100vw;
//               max-width: 400px;
//               position: relative;
//             }

//             #example #progress {
//                 position: absolute;
//                 top: -65px;
//                 left: -15px;
//                 transform: rotate(-90deg);
//             }

//             #example .bg {
//                 stroke: var(--layer);
//             }

//             #example #progress circle {
//                 stroke-dashoffset: 0;
//                 stroke-width: 10%;
//                 fill: none;
//             }

//             #progress .indicator {
//                 stroke: var(--accent);
//             }

//             #example ul {
//                 display: flex;
//                 list-style: none;
//                 height: 220px;
//                 overflow-x: scroll;
//                 padding: 20px 0;
//                 flex: 0 0 600px;
//                 margin: 0 auto;
//                 gap: 20px;
//             }

//             #example ::-webkit-scrollbar {
//                 height: 5px;
//                 width: 5px;
//                 background: #fff3;
//                 -webkit-border-radius: 1ex;
//             }

//             #example ::-webkit-scrollbar-thumb {
//                 background: var(--accent);
//                 -webkit-border-radius: 1ex;
//             }

//             #example ::-webkit-scrollbar-corner {
//                 background: #fff3;
//             }

//             #example li {
//                 flex: 0 0 200px;
//                 background: var(--accent);
//             }

//     `}</style>
//   )
// }

