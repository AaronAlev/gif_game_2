import React from "react";
import Gif from "./Gif";
import Input from "./Input";

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
            <div>
                <Input/>   
            </div>
        </div>
    )
}

export default Game;