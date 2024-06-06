import React from "react";
import { useState, useEffect } from "react";
import data from "./test.json"

const Podium = ({}) => {
    const [winners, setWinners] = useState([]);

  useEffect(() => {
    const sortedWinners = data
      .sort((a, b) => b.Points - a.Points)
      .slice(0, 3)
      .map((winner, index) => ({
        ...winner,
        position: index + 1
      }));

    setWinners(sortedWinners);
  }, []);
    return (
        <div className="podium">
        {winners.map((winner, index) => (
          <div 
            key={index} 
            className={`podium-step ${winner.position === 1 ? "first" : ""} ${winner.position === 2 ? "second" : ""} ${winner.position === 3 ? "third" : ""}`}
          >
            <div className="podium-step-inner">
              <h1 className="position">{index + 1}</h1>
              <h2 className="name">{winner.Username}</h2>
              <h2 className="score">{winner.Points}</h2>
            </div>
          </div>
        ))}
      </div>
    )
}

export default Podium;