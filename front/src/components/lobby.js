import React from "react";
import Chat from "./Chat.js";
import Canvas from "./canvas.js";

const lobby = (db, lobby_id) => {
    return (
        <Canvas>
            <Chat 
                db={db}
                lobby_id={lobby_id}
            />
        </Canvas>
    )
}

export default lobby;