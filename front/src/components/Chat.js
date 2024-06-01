import React from "react";
import data from "./test.json"
import Userchat from "./Userchat.js";
import "../App.css"

const Chat = ({}) => {
    const msgData = data;
    return (
        <div className="Chat">
            <div className="Chat-mbox">
                {msgData.map(( user, index ) => (                
                    <Userchat key={index} data={user} classname={`Chat-message${index % 2 === 1 ? 1:""}`} />
            ))}
            </div>
            <div className="Chat-input">
                <input type="text" placeholder="Type your message here" />
            </div>
        </div>
    )
};

export default Chat;