import React from "react";

const User = ({ data }) => {
    return (
        <div className="Leaderboard-user">
            <h2> {data.username} </h2>
            <p> {data.points} points </p>
        </div>
    )
}

export default User;