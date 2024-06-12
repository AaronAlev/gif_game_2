import React from "react";
import Chat from "./Chat.js";
import Canvas from "./canvas.js";
import Leaderboard from "./Leaderboard.js";

const lobby = () => {
    return (
        <Canvas>
            <Chat/>
            <Leaderboard/>
        </Canvas>
    )
}

export default lobby;