import React from "react";
import "../App.css"

const Chat = ({}) => {
    return (
        <div className="Chat">
            <div className="Chat-mbox">
                <div className="Chat-message">
                    <h2> Mr.Ligma: Ravila 31, 1st floor, behind you </h2>
                </div>
                <div className="Chat-message1">
                    <h2> mogus: I am coming </h2>
                </div>
                <div className="Chat-message">
                    <h2> Mr.Ligma: I am waiting </h2>
                </div>
            </div>
            <div className="Chat-input">
                <input type="text" placeholder="Type your message here" />
            </div>
        </div>
    )
};

export default Chat;