import express from "express";

let videos = [
    {
      title: "Hello",
      title: "First Video",
      rating: 5,
      comments: 2,
      createdAt: "2 minutes ago",
      views: 59,
      id: 1,
    },
    {
      title: "Video #2",
      title: "Second Video",
      rating: 5,
      comments: 2,
      createdAt: "2 minutes ago",
      views: 59,
      id: 2,
    },
    {
      title: "Whatsup",
      title: "Third Video",
      rating: 5,
      comments: 2,
      createdAt: "2 minutes ago",
      views: 59,
      id: 3,
    },
  ];

export const treding = (req, res) => {
  return  res.render("home", { pageTitle: "Home",videos });
}
export const watch = (req, res) => {
  const { id } = req.params;
  const video = videos[id - 1];
  res.render("watch", { pageTitle: `Waching: ${video.title}` , video });
};
export const getEdit = (req, res) => {
  const { id } = req.params;
  const video = videos[id - 1];
  res.render("edit", { pageTitle: `Editing: ${video.title}`, video});
};
export const postEdit = (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  console.log(req.params);
  console.log(req.body);
  console.log(title);
  const video = videos[id - 1];
  video.title = title;
  return res.redirect(`/videos/${id}`);
};
