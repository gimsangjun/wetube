import express from "express";
import morgan from "morgan"
import globalRouter from "./routers/globalRouter";
import videoRouter from "./routers/videoRouter";
import userRouter from "./routers/userRouter";


const PORT = 4000;
const app = express();
const logger = morgan("dev");

const globalRouter= e 

const Home = (req, res) => {
    return res.send("I love middlewares");
};

const login = (req, res) => {
  return res.send("login");
};

app.use(logger);
app.use("/", globalRouter);
app.use("/videos", videoRouter);
app.use("/users", userRouter);

const handleListening = () => console.log(`Server listnting on http://localhost:${PORT} 🚀`);
 
app.listen(PORT, handleListening); 