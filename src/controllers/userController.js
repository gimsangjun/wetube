import express from "express";
import User from "../models/User";
import fetch from "node-fetch";
import bcrypt from "bcrypt";

export const getJoin = (req, res) => res.render("join", { pageTitle: "Join" });
export const postJoin = async (req, res) => {
  const { name, username, email, password, password2,location, } = req.body; //post로 보냈으니까.
  const pageTitle = "Join"
  if (password !== password2) {
    return res.status(400).render(
      "join",
      { pageTitle, errorMessage: "Password confirmation does not match", });
  }
  const exists = await User.exists({ $or: [{ username }, { email }] });
  if (exists) {
    return res.status(400).render(
      "join",
      { pageTitle, errorMessage: "This username/email is already taken.", });
  }
   try {
    await User.create({
      name,
      username,
      email,
      password,
      location,
    });
    return res.redirect("/login");
  } catch (error) {
    return res.status(400).render("join", {
      pageTitle: "Upload Video",
      errorMessage: error._message,
    });
  }
};
export const getLogin = (req, res) => res.render("login", { pageTitle: "Login" });
export const postLogin = async (req, res) => {
  const { username, password } = req.body;
  const pageTitle = "Login";
  const user = await User.findOne({ username, socialOnly: false });
  if (!user) { // 중복되는 이름이나 이메일이 있나.
    return res.status(400).render("login", {
      pageTitle,
      errorMessage: "An account with this username does not exists.",
    });
  }
  const ok = await bcrypt.compare(password, user.password);
  if (!ok) { // 패스워드가 맞다면
    return res.status(400).render("login", {
      pageTitle,
      errorMessage: "Wrong password",
    })
  };
  // 오류가없다면
  req.session.loggedIn = true;
  req.session.user = user;
  // 왜 res가 아닐까?
  return res.redirect("/");
};

// loginpug에 계속 긴 URL을 반복적으로 넣어줘야되니까 그것을 없애기 위해서.
export const startGithubLogin = (req, res) => {
  const baseUrl = "https://github.com/login/oauth/authorize";
  const config = {
    client_id: process.env.GH_CLIENT,
    allow_signup: false,
    scope: "read:user user:email",
  };
  const params = new URLSearchParams(config).toString();
  const finalUrl = `${baseUrl}?${params}`;
  console.log(finalUrl);
  return res.redirect(finalUrl);
};

// 여기에는 어떻게 도달하느냐? github.com/settings/applications 에서 callback URL이 있는데 
// 거기에 코드를 받을 URL을 적으면된다. 그러면 이 함수에 도달한다.
export const finishGithubLogin = async (req, res) => {
  // 유저가 승인하면 /github/finish?code=xxxx 라는 덧붙여진 내용을 받을거임
  // 이게 code는 유저가 승인했다고알려주는거임.이 코드를 가지고 엑세스토큰요청.
  const baseUrl = "https://github.com/login/oauth/access_token";
  const config = {
    client_id: process.env.GH_CLIENT,
    client_secret: process.env.GH_SECRET,
    code: req.query.code,
  };
  const params = new URLSearchParams(config).toString();
  const finalUrl = `${baseUrl}?${params}`;
  //엑세서토큰 요청후 .json() 변환. 엑세스 토큰 : github API와 상호작용할때 쓸거임.
  const tokenRequest = await (
    await fetch(finalUrl, {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
    })
  ).json();

  if ("access_token" in tokenRequest) {
    const { access_token } = tokenRequest;
    const apiUrl = "https://api.github.com";
    const userData = await (
      await fetch(`${apiUrl}/user`, {
        headers: {
          Authorization: `token ${access_token}`,
        },
      })
    ).json();
    console.log(userData);
    // private안 경우 보이지 않아서 email데이터 REST API이용해서 요청
    const emailData = await (
      await fetch(`${apiUrl}/user/emails`, {
        headers: {
          Authorization: `token ${access_token}`,
        },
      })
    ).json();
    // emaildata중 primary true것과 verified과 true인 것을 요청

   
    const emailObj = emailData.find(
      (email) => email.primary === true && email.verified === true
    );
    console.log("emailData", emailData);
    // 깃허브로 로그인했따면 password는 필요없다 전에 이메일 패스워드로 그냥 로그인했더라도
    if (!emailObj) {
      return res.redirect("/login");
    }
    let user = await User.findOne({ email: emailObj.email });
    if (!user) {  // 깃허브로 로그인했는데 계정이없다면?
      user = await User.create({
        avatarUrl: userData.avatar_url,
        name: userData.name,
        username: userData.login,
        email: emailObj.email,
        password: "",
        socialOnly: true, //소셜로만 로그인 되게
        location: userData.location,
      });
    }
      req.session.loggedIn = true;
      req.session.user = user;
      return res.redirect("/");
  }
  // access_token이 없을떄
  else {
    return res.redirect("/login");
  }
};

export const logout = (req, res) => {
  req.session.destroy();
  return res.redirect("/");
};
export const edit = (req, res) => res.send("Edit User");
export const see = (req, res) => res.send("See User");