import React from "react";
import "../App.css";

const Button = ({ width, height, back, color, fs, onClick, text }) => {
    return (
        <button type="button" style={
            {width: `${width}`,
            height: `${height}`, 
            background: `${back}`, 
            color: `${color}`, 
            fontSize: `${fs}`, 
            border: "none"}
        } onClick={onClick}>{text}</button>
    )
};

export default Button;