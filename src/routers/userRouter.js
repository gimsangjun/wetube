import express from "express";
import {
    getEdit,
    postEdit,
    logout,
    see,
    startGithubLogin,
    finishGithubLogin,
    getChangePassword,
    postChangePassword
} from "../controllers/userController";
import { protectorMiddleware, publicOnlyMiddleware ,avatarUpload,} from "../middlewares";

const userRouter = express.Router();

userRouter.get("/logout", protectorMiddleware,logout);
userRouter
    .route("/edit")
    .all(protectorMiddleware)
    .get(getEdit)
    .post(avatarUpload.single("avatar"), postEdit); // "avatar"는 보내준 post정보에서 name으로 지정한값이다. edit-profile.pug에서.
    //파일이 업로드 되고 그 파일이 관한 정보를 poseEdit에 전달해준다.(req.file)
userRouter
    .route("/change-password")
    .all(protectorMiddleware)
    .get(getChangePassword)
    .post(postChangePassword);

userRouter.get("/github/start", publicOnlyMiddleware , startGithubLogin);
userRouter.get("/github/finish", publicOnlyMiddleware, finishGithubLogin);

userRouter.get("/:id", see);

export default userRouter;