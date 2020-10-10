import React from "react";
import "../global.css";
import "../reset.css";
import "./hero.css"
import "../fonts/type.css"

class Hero extends React.Component {
    render() {
        return (
    <>
        <nav>
            <h1>Submit Scan</h1>
            <h2>Among Us Diagnostics</h2>
            <button>Enter Data</button>
        </nav>
    </>
  );
}
}

export default Hero
