import axios from 'axios';

async function delete_lobby(lobby_id) {
    try {
      await axios.post('http://localhost:3001/lobby/delete_lobby', {
        lobby: lobby_id
      }, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
      } catch (error) {
        console.error('Error posting data:', error);
}}
  
export default delete_lobby;