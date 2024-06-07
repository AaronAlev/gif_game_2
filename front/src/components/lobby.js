import React from "react";


const lobby = ({backToLogin}) => {
    return (
        <div className="lobby-container">
            <h2>Lobby</h2>
            <button onClick={backToLogin}>Back to login</button>
        </div>
    )
}

export default lobby;