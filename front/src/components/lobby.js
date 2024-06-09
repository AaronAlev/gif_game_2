import React from "react";
import Chat from "./Chat.js";
import Canvas from "./canvas.js";

const lobby = ({backToLogin}) => {
    return (
        <Canvas>
            <Chat />
        </Canvas>
    )
}

export default lobby;