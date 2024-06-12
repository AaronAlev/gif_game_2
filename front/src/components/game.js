import React from "react";
import Gif from "./gif";
import Prompt from "./input";

const Game = () => {
    return (
        <div>
            <div className="gif-container">
                <div className="gif-scont">
                    <Gif/>
                    <Gif/>
                </div>
                <div className="gif-scont">
                    <Gif/>
                    <Gif/>
                </div>
            </div>
            <Prompt/>   
        </div>
    )
}

export default Game;