import React from "react";
import { useState } from "react";
import "../App.css";

const Prompt = ( ) => {
    const [prompt, setPrompt] = useState("");

    const handlePrompt = (e) => {
        setPrompt(e.target.value);
    }

    return (
            <input type="text" value={prompt} onChange={handlePrompt} placeholder="input prompt here!" className="prompt"/>
    )
}

export default Prompt;