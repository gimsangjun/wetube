import express from "express";
import morgan from "morgan"


const PORT = 4000;
const app = express();
const logger = morgan("dev");

const Home = (req, res) => {
    return res.send("I love middlewares");
};

const login = (req, res) => {
  return res.send("login");
};

app.use(logger);
app.get("/", Home);
app.get("/login", login);

const handleListening = () => console.log(`Server listnting on http://localhost:${PORT} 🚀`);
 
app.listen(PORT, handleListening); 