// 로그인 유지
export const localsMiddleware = (req, res, next) => {
    res.locals.loggedIn = Boolean(req.session.loggedIn);
    res.locals.siteName = "Wetube";
    res.locals.loggedInUser = req.session.user || {}; //로그인 안되있어도 edit페이지 갈수있게
    
    console.log("sessionUser : ",req.session.user);
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