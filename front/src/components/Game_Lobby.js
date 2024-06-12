import React from "react";
import GameContext from "../gameContext";
import Button from "./Button";

function copyToClipboard(event, lobby_id) {
    event.preventDefault();
    navigator.clipboard.writeText(lobby_id);
}

const Game_Lobby = () => {
    const { lobby_id } = React.useContext(GameContext);


    return (
        <div className="Game_container">
            <div className="lobby_id">
                <p>Lobby ID: {lobby_id}</p>
            </div>
            <div className="Buttons">
                <Button text="Start" height={'30%'} width={'60%'} margin={'0px 0px 15% 0px'} back={'black'} color={'rgb(203, 203, 203)'} fs={'3.5vw'} border={'solid 0.25vw'} borderRadius={'1vw'} />
                <Button text="Copy lobby id" height={'10%'} width={'17%'} padding={'0px 0.5vw'} back={'black'} color={'rgb(203, 203, 203)'} fs={'1vw'} border={'solid 0.25vw'} borderRadius={'0.25vw'} onClick={(e) => copyToClipboard(e, lobby_id)} />
           </div>
        </div>
    )
}

export default Game_Lobby;