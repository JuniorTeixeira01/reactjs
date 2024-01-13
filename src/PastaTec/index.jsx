import React from "react";
import "./style.css";

export default function Tecnologias(props){
    return(
        <div className="tecnologias-tec">
            <h3>{props.titulo}</h3>
            <p>{props.texto}</p>
        </div>
    );
};