import React from "react";
import "../global.css";
import "../reset.css";
import "./input.css"
import "../fonts/type.css"


function colorGreen() {
    for (var i = 0; i < 18; i++) {
        var inputs = document.getElementsByTagName('input')[i];
        if(inputs.checkValidity() === true){
            console.log("onBlur Running")
            document.getElementsByClassName("input__wrapper")[i].classList.add("input__wrapper--filled");
            document.getElementsByClassName("input--default")[i].classList.add("input--filled");
            document.getElementsByClassName("input__line")[i].classList.add("glowOuter");
        }
    }
}

export default (props) => (
            <>  
            <div className="inputLine__wrapper">
                    <div className="input__wrapper">
                        <label for="criterion"><h4>{props.criterion}</h4></label>
                        <input onBlur={colorGreen} className="inputField input--default" type="number" name="criterion" required
                            minLength="1" maxLength="5" placeholder="XXXXX"></input>
                    </div>
                    <div className="input__line">
                    </div>
                </div>
            </>
        );
