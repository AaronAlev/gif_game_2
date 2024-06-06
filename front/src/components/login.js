import React from "react";

const UsernameScreen = ({username, setUsername, lobby_id, setLobbyId, submitHandler}) => {
    return (
        <div className="login-container">
            <h2>Login</h2>
            <form id="set-name">
                <input type="text" autoComplete='off' value={username} placeholder="Username" onChange={(e) => setUsername(e.target.value)}/>
                <input type="text" autoComplete='off' value={lobby_id} placeholder="Lobby id" onChange={(e) => setLobbyId(e.target.value)}/>
                <button type='submit' onClick={submitHandler}>Create lobby</button>
            </form>
        </div>
    )
};

export default UsernameScreen;
