import React from "react";
import "../App.css";

const Button = ({ width, height, back, color, fs, padding, margin, border, borderRadius, onClick, text }) => {
    return (
        <button type="button" style={
            {width: `${width}`,
             height: `${height}`,
             background: `${back}`,
             margin: `${margin}`,
             padding: `${padding}`,
             color: `${color}`,
             fontSize: `${fs}`,
             border: `${border}`,
             borderRadius: `${borderRadius}`}
            } onClick={onClick}>{text}</button>
    )
};

export default Button;