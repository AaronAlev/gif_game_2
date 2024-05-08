import React from "react";

const sendUsername = (username, lobby_id) => {
    const data = { username, lobby_id };
    fetch("/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });
};

const UsernameScreen = ({}) => {
    const [username, setUsername] = React.useState("");
    const [lobby_id, setLobbyId] = React.useState("");
    return (
        <div>
            <form onSubmit={(e) => sendUsername( username, lobby_id )} id="set-name">
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