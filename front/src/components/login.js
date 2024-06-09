import React, { useContext } from "react";
import { set, ref } from "firebase/database";
import GameContext from "../gameContext.js";

const handleUsername = (event, username, lobby_id, db, uid, setIsLoggedIn) => {
    event.preventDefault();
    setIsLoggedIn(true);
    if (username.trim() !== '' || lobby_id.trim() !== '') {
        const playerRef = ref(db, `lobbies/${lobby_id}/players/${uid}`);
        set(playerRef, {
            username
        });
    }
};

const UsernameScreen = ({/*username, setUsername, lobby_id, setLobbyId, db, uid, setIsLoggedIn*/}) => {
    const [username, setUsername, lobby_id, setLobbyId, db, userUID, setIsLoggedIn] = useContext(GameContext);
    return (
        <div>
            <form onSubmit={(e) => handleUsername(e, username, lobby_id, db, userUID, setIsLoggedIn )} id="set-name">
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
