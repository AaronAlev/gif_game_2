import React from "react";
import data from "./test.json"
import Userchat from "./Userchat.js";
import { ref } from "firebase/database";
import "../App.css"

const sendChat = (e, message, db, lobby_id) => {
    e.preventDefault();
    const time = Date.now()
    if (message.trim() !== '') {
        const chatRef = ref(db, `lobbies/${lobby_id}/chat/${time}`);
        chatRef.set({
            sender: "user",
            message: message,
            time: time
        });
    }
}

const Chat = (db, lobby_id) => {
    const [message, setMessage] = React.useState(null);
    const msgData = data;
    return (
        <div className="Chat">
            <div className="Chat-mbox">
                {msgData.map(( user, index ) => (                
                    <Userchat key={index} data={user} classname={`Chat-message${index % 2 === 1 ? 1:""}`} />
            ))}
            </div>
            <div className="Chat-input">
                <form onSubmit={(e) => sendChat(e, message, db, lobby_id)}>
                    <input type="text" autoComplete='off' value={message} onChange={(e) => setMessage(e.target.value)}/>
                </form>
            </div>
        </div>
    )
};

export default Chat;