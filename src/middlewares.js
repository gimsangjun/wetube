import multer from "multer";

//매번 해야되는거라서 따로 미들웨어로 빼놓은듯

// 로그인 유지
export const localsMiddleware = (req, res, next) => {
    res.locals.loggedIn = Boolean(req.session.loggedIn);
    res.locals.siteName = "Wetube";
    res.locals.loggedInUser = req.session.user || {}; //로그인 안되있어도 edit페이지 갈수있게
    next();
}
// 로그인한 사람만 접근가능.
export const protectorMiddleware = (req, res, next) => {
    if (req.session.loggedIn) {
        return next();
    }
    else {
        return res.redirect("/login");
    }
};
// 누구에게나 공개.
export const publicOnlyMiddleware = (req, res, next) => {
    if (!req.session.loggedIn) {
        return next();
    }
    else {
        return res.redirect("/");
    }
};
// 파일업로드를 위한 미들웨어. 각각 아바타폴더와 비디오폴더에 넣을려고.
export const avatarUpload = multer({
  dest: "uploads/avatars/",
  limits: {
    fileSize: 3000000,
  },
});
export const videoUpload = multer({
  dest: "uploads/videos/",
  limits: {
    fileSize: 10000000,
  },
});