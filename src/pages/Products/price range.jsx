import React from 'react';
import '../../styles/styles';
const PriceRange = () => {



    const start  = document.getElementById("start")
    const end    = document.getElementById("end")
    const valueS = document.getElementById("valueS")
    const valueE = document.getElementById("valueE")
    const slider = document.getElementById("slider")

    function updata() {
        const startValue = parseInt(start.value)
        const endValue = parseInt(end.value)

        const position = (startValue / 100) * 100;
        const width = ((endValue - startValue) / 100) * 100;

        slider.style.left = position + "%";
        slider.style.width = width + "%";

        console.log(position + ":" + width)
    }

    window.onload = () => {
        valueS.innerHTML = start.value;
        valueE.innerHTML = end.value;
        updata();
    }

    start.addEventListener("input", () => {
        if (parseInt(start.value) >= parseInt(end.value)) {
            start.value = parseInt(end.value) - 1;
        }

        valueS.innerHTML = start.value;
        updata();

    });


    end.addEventListener("input", () => {
        if (parseInt(end.value) <= parseInt(start.value)) {
            end.value = parseInt(start.value) + 1;
        }
        valueE.innerHTML = end.value;
        updata();
    });
    start.addEventListener("click", () => {
        start.style.zIndex = 5;
        end.style.zIndex = 4;
    })
    end.addEventListener("click", () => {
        start.style.zIndex = 4;
        end.style.zIndex = 5;
    })
    updata();



    return (

        <div>

            <h1>range</h1>
            <div class="continer">
                <div class="slider2" id="slider2"></div>
                <div id="slider" class="slider"></div>
                <input id="start" type="range" min="0" max="100" name="" value="40" />
                <input id="end" type="range" min="0" max="100" name="" value="70" />
            </div>

            <div class="text">
                <h3>start : <span id="valueS"></span></h3>
                <h3>end : <span id="valueE"></span></h3>
            </div>


        </div >

    )
}



export default PriceRange;