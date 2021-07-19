import express from "express";

const PORT = 4000;

const app = express();

const handleHome = (req, res) => {
    return res.end();
};

const handleLogin = (req, res) => {
    return res.send("Login here");
};

app.get("/", handleHome);
app.get("/login", handleLogin);
const handleListening = () => console.log(`Server listnting on http://localhost:${PORT} 🚀`);
 
app.listen(PORT, handleListening); //서버가 만들어졌고, 서버가 port 4000을 리스닝하고있다. 