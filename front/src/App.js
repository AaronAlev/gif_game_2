import React, {useState} from "react";
import UsernameScreen from "./components/login.js";
import Lobby from "./components/lobby.js";
import "./App.css";


function App() {
  const [hasSubmitted, sethasSubmitted] = useState(false);
  const [username, setUsername] = React.useState("");
  const [lobby_id, setLobbyId] = React.useState("");

  const submitHandler = () => {
    if (username !== '' && lobby_id !== '') {
      sethasSubmitted(true);
    } else {
      alert('Please fill both fields');
    }
  };

  const backToLogin = () => {
    sethasSubmitted(false);
  }

  return (
    <div className="App">
      <div className="App-header">
       {hasSubmitted ? (<Lobby backToLogin={backToLogin} />)
         : <UsernameScreen 
            username={username}
            setUsername={setUsername}
            lobby_id={lobby_id}
            setLobbyId={setLobbyId}
            submitHandler={submitHandler} />}
      </div>
    </div>
  );
}

export default App;