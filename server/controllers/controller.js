
const sayHello = (req, res) => {
  res.json({ message: "Hello from server!" });
};

const login = (req, res) => {
    res.json({ message: "Hello from server!" });
    const { username, lobby_id } = req.body;
    if (username.trim() !== '' || lobby_id.trim() !== '') {
        console.log(req.body);
    }
};

const deleteLobby = (req, res) => {
  res.send("Delete request")
}

module.exports = { sayHello, login, deleteLobby };