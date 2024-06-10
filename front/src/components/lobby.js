import React from "react";
import Chat from "./Chat.js";
import Canvas from "./canvas.js";

const lobby = () => {
    return (
        <Canvas>
            <Chat/>
        </Canvas>
    )
}

export default lobby;