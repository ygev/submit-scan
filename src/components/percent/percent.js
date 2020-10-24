import React from "react";
import "../global.css";
import "../reset.css";
import "./percent.css"
import "../fonts/type.css"

export default (props) => (
    <>
        <section className="percent__container">
            <div className="percent__circle percent__circle--num">
                <h4 id={props.id} className="percent__num">{props.percentNum}</h4>
            </div>
            <h4 className="percent__txt">{props.percentTxt}</h4>
            <div className="percent__circle">
                <img src={props.percentImg} alt="" className="percent__img"/>
            </div>
        </section>
    </>
);