import React from "react";

const User = ({ data }) => {
    return (
        <div className="Leaderboard-user">
            <h2> {data.Username} </h2>
            <p> {data.Points} </p>
        </div>
    )
}

export default User;