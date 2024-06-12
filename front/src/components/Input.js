import React from "react";
import { useState } from "react";
import "../App.css";

const Input = ( ) => {
    const [prompt, setPrompt] = useState("");

    const handlePrompt = (e) => {
        setPrompt(e.target.value);
    }

    const handleButonPress = (e) => {
        if (e.key === 'Enter') {
            handleEnterPress();
        }
    }

    const handleEnterPress = () => {
        console.log(prompt);
        setPrompt("");
    }

    return (
            <input type="text" value={prompt} onChange={handlePrompt} onKeyDown={handleButonPress} placeholder="input prompt here!" className="input"/>
    )
}

export default Input;