import React from "react";
import Gif from "./gif.js";
import Button from "./Button.js";
import "../App.css";

const Game2 = () => {
    return (
        <div>
            <div className="prompt">
                <h1>PROMPT</h1>
            </div>
            <div className="gif-container">
                <div className="gif-scont">
                    <Gif/>
                    <Gif/>
                </div>
                <div className="gif-scont">
                    <Gif/>
                    <Gif/>
                </div>
                <div className="gif-scont">
                    <Gif/>
                    <Gif/>
                </div>
            </div>
            <Button width={"900px"} height={"150px"} back={"black"} color={"white"} fs={"75px"} text={"Choose"} className="bcenter"/>
        </div>
    )
}

export default Game2;