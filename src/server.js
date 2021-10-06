import express from "express";
import morgan from "morgan"
import session from "express-session";
import flash from "express-flash";
import MongoStore from "connect-mongo";
import rootRouter from "./routers/rootRouter";
import videoRouter from "./routers/videoRouter";
import userRouter from "./routers/userRouter";
import apiRouter from "./routers/apiRouter";
import { localsMiddleware } from "./middlewares";


const app = express();
const logger = morgan("dev");

app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");
app.use(logger);
app.use(express.urlencoded({ extended: true }));
// json이 파일을 보냈을때 처리하기
app.use(express.json());

app.use(
  session({
    secret: process.env.COOKIE_SECRET,
    resave: false,
    saveUninitialized: false, // 세션을 수정할때만 세션을 DB에 저장
    store: MongoStore.create({ mongoUrl: process.env.DB_URL}),
  })
);

app.use("/convert", express.static("node_modules/@ffmpeg/core/dist"));

app.use((req, res, next) => {
res.header("Cross-Origin-Embedder-Policy", "require-corp");
res.header("Cross-Origin-Opener-Policy", "same-origin");
next();
});

app.use(flash());

app.use(localsMiddleware);
app.use("/uploads", express.static("uploads")); // 업로드한 비디오에 접근하는 url
// 프론트엔드의 js파일과 scss파일을 연결하기위해, assets폴더에 웹팩으로 처리된 프론트엔드의 js,scss파일등이 있음.
app.use("/static", express.static("assets")); // 앞에있는 인자는 그냥 접근하기위한 것이고, 실제 폴더명은 다를수있다. 
app.use("/", rootRouter);
app.use("/videos", videoRouter);
app.use("/users", userRouter);
app.use("/api", apiRouter);

export default app;