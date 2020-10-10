import React from "react";
import "../global.css";
import "../reset.css";
import "./input.css"
import "../fonts/type.css"

export default (props) => (
            <>  <div className="inputLine__wrapper">
                    <div className="input__wrapper">
                        <label for="criterion"><h4>{props.criterion}</h4></label>
                        <input className="inputField input--default" type="text" name="criterion" required
                            minlength="1" maxlength="5" placeholder="XXXXX"></input>
                    </div>
                    <div className="input__line">
                    </div>
                </div>
            </>
        );
