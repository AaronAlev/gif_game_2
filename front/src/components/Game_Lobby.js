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
                <Button text="Start" height={'30%'} width={'60%'} margin={'0px 0px 15% 0px'} back={'black'} color={'white'} borderRadius={'1vw'} fs={'3.5vw'} />
                <Button text="Copy lobby id" height={'10%'} width={'17%'} padding={'0.5vw 0.5vw 0.5vw 0.5vw'} back={'#424242'} color={'fff'} fs={'1vw'} onClick={(e) => copyToClipboard(e, lobby_id)} />
           </div>
        </div>
    )
}

export default Game_Lobby;