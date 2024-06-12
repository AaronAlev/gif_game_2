import React from "react";
import data from "./test.json"
import User from "./User.js"
import "../App.css"
import GameContext from "../gameContext.js";

const Leaderboard = () => {
    const { allPlayersRef } = React.useContext(GameContext);
    const userData = allPlayersRef;
    return (
        <div className="Leaderboard">
            <div className="Leaderboard-header">
                <h1> Leaderboard </h1>
            </div>
            {userData.map((user, index) => (
                <User key={index} data={user} />
            ))}
        </div>
    )
};

export default Leaderboard;