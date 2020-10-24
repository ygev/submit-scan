import React from "react";
import "../global.css";
import "../reset.css";
import "../fonts/type.css"
import "./input.css"

class inputField extends React.component {
    constructor() {
        super(props);
    }
    
    render() {
        return (
            <>
            <div className="inputLine__wrapper">
                <div className="input__wrapper">
                    <label htmlFor="criterion"><h4>{props.criterion}</h4></label>
                    <input onBlur={updatePage} id={props.id} className="inputField input--default" type="number" inputMode="decimal" name="criterion" required
                        minLength="1" maxLength="5" placeholder="EMPTY"></input>
                </div>
                <div className="input__line">
                </div>
            </div>
            </>
        );
    }
}

