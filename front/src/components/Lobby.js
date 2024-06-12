import React from "react";
import Chat from "./Chat.js";
import Game from "./Game.js";
import Canvas from "./Canvas.js";
import Leaderboard from "./Leaderboard.js";

const lobby = () => {
    return (
        <Canvas>
            <Chat/>
            <Game/>
            <Leaderboard/>
        </Canvas>
    )
}

export default lobby;