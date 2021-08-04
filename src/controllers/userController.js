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
  const user = await User.findOne({ username });
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
  const baseUrl = "https://github.com/login/oauth/access_token";
  const config = {
    client_id: process.env.GH_CLIENT,
    client_secret: process.env.GH_SECRET,
    code: req.query.code,
  };
  const params = new URLSearchParams(config).toString();
  const finalUrl = `${baseUrl}?${params}`;
  //데이터 요청후 .json() 변환.
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
    const userRequest = await (
      await fetch("https://api.github.com/user", {
        headers: {
          Authorization: `token ${access_token}`,
        },
      })
    ).json();
    console.log(userRequest);
  }
  // access_token이 없을떄
  else {
    return res.redirect("/login");
  }
};


export const edit = (req, res) => res.send("Edit User");
export const remove = (req, res) => res.send("Remove User");
export const logout = (req, res) => res.send("Log Out");
export const see = (req, res) => res.send("See User");