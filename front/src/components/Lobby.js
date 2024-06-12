import React from "react";
import Canvas from "./canvas.js";
import Chat from "./Chat.js";
import Game_Lobby from "./Game_Lobby.js";
import Leaderboard from "./Leaderboard.js";
import "../App.css";

const lobby = () => {
    return (
        <Canvas>
            <Chat/>
            <Game_Lobby/>
            <Leaderboard/>
        </Canvas>
    )
}

export default lobby;