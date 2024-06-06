import React from "react";
import { set } from "firebase/database";

const handleUsername = (event, username, lobby_id, playerRef) => {
    event.preventDefault();
    if (username.trim() !== '' || lobby_id.trim() !== '') {
        set(playerRef, {
            username
        });
    }
};

const UsernameScreen = ({username, setUsername, lobby_id, setLobbyId, playerRef}) => {
    return (
        <div>
            <form onSubmit={(e) => handleUsername(e, username, lobby_id, playerRef )} id="set-name">
                <label>Username:</label>
                <input type="text" autoComplete='off' value={username} onChange={(e) => setUsername(e.target.value)}/>
                <label>Enter a lobby id:</label>
                <input type="text" autoComplete='off' value={lobby_id} onChange={(e) => setLobbyId(e.target.value)}/>
                <button type='submit'>submit</button>
            </form>
        </div>
    )
};

export default UsernameScreen;