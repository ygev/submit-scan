import React from "react";
import "../global.css";
import "../reset.css";
import "./input.css"
import "../fonts/type.css"

class inputField extends React.component {

    render() {
        return (
            <>
            <div className="inputLine__wrapper">
                <div className="input__wrapper">
                    <label htmlFor="criterion"><h4>{this.props.criterion}</h4></label>
                    <input id={this.props.id} className="inputField input--default" type="number" name="criterion" required
                        minLength="1" maxLength="5" placeholder="EMPTY"></input>
                </div>
                <div className="input__line">
                </div>
            </div>
            </>
        );
    }
}

export default inputField;

