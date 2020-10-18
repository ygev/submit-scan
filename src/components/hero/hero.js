import React from "react";
import "../global.css";
import "../reset.css";
import "./hero.css"
import "../fonts/type.css"

class Hero extends React.Component {
    render() {
        return (
            <nav>
                <section className="nav__txt">
                    <h1>Submit Scan</h1>
                    <h2>Among Us Diagnostics</h2>
                </section>
                <section className="buttonLine__wrapper">
                    <button type="submit" className="button__default"><h3>Enter Data</h3></button>
                    <div className="buttonLine"></div>
                </section>
            </nav>
        );
    }
}

export default Hero
