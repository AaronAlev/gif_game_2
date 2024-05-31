import React from "react";
import data from "./test.json"
import User from "./User.js"
import "../App.css"

const Leaderboard = () => {
    const userData = data;
    return (
        <div className="Leaderboard">
            <h1> Leaderboard </h1>
            {userData.map((user, index) => (
                <User key={index} data={user} />
            ))}
        </div>
    )
};

export default Leaderboard;