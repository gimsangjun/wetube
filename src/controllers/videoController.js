import Video from "../models/Video";
import Comment from "../models/Comment";
import User from "../models/User";

export const home =  async (req, res) => {
  const videos = await Video.find({})
    .sort({ createdAt: "desc" })
    .populate("owner");
  return res.render("home", { pageTitle: "Home", videos });
};
export const watch = async (req, res) => {
  const { id } = req.params;
  //const video = await Video.findById(id);
  //const owner = await User.findById(video.owner);
  // 윗부분을 줄인게 아래임.
  const video = await Video.findById(id).populate("owner").populate("comments");
  if (!video) {
    return res.render("404", { pagetitle: "Video no found." });
  }
  return res.render("watch", { pageTitle: video.title ,video});
};
export const getEdit = async (req, res) => {
  const { id } = req.params;
  const {
    user: { _id },
  } = req.session;
  const video = await Video.findById(id);
  if (!video) {
    return res.status(404).renser("404", { pagetitle: "Video no found." });
  }
  //video owner만 수정할수있게. 로그인된 사용자와 비디어 오너의 아이디가 같나?
  if (String(video.owner) !== String(_id)) {
    req.flash("error", "You are not the the owner of the video.");
    return res.status(403).redirect("/");
  }
  return res.render("edit", { pageTitle: `Editing ${video.title}`, video });
};

export const postEdit = async (req, res) => {
  const {
    user: { _id },
  } = req.session;
  const { id } = req.params;
  const { title, description, hashtags } = req.body;
  const video = await Video.exists({ _id: id });
  if (!video) {
    return res.status(404).render("404", { pageTitle: "Video not found." });
  }
  if (String(video.owner) !== String(_id)) {
    req.flash("error", "You are not the the owner of the video.");
    return res.status(403).redirect("/");
  }
  await Video.findByIdAndUpdate(id, {
    title,
    description,
    hashtags: Video.formatHashtags(hashtags),
  });
  req.flash("success", "Changes saved.");
  return res.redirect(`/videos/${id}`);
};

export const getUpload = (req, res) => {
  return res.render("upload", { pageTitle: "Upload Video" });
};

export const postUpload = async (req, res) => {
  const { // video의 onwer를 넣어주기위해
    user: { _id },
  } = req.session;
  const { video , thumb } = req.files; // mutler가 req.file을 만들어서 보낸준다. 
  // path: fileurl은 ES6문법인데, 받아온 path를 filePath로 바꾸겟다는 의미이다. ES6 강의가있다
  const { title, description, hashtags } = req.body;
  try {
    const newVideo = await Video.create({
      title,
      description,
      fileUrl: video[0].path,
      thumbUrl: thumb[0].path,
      owner: _id,
      hashtags: Video.formatHashtags(hashtags),
    });
    
    const user = await User.findById(_id);
    // array에 요소를 추가할 때는 push를 이용하면된다.
    user.videos.push(newVideo._id);
    user.save();
    return res.redirect("/");
  }
  catch (error) {
    console.log(error);
    return res.status(400).render("upload",
      {
        pageTitle: "Upload Video",
        errorMessage: error._message,
      });
  }
};

export const deleteVideo = async (req, res) => {
  const { id } = req.params;
  const {
    user: { _id },
  } = req.session;
  const video = await Video.findById(id);
  if (!video) {
    return res.status(404).render("404", { pageTitle: "Video not found." });
  }
  if (String(video.owner) !== String(_id)) {
    return res.status(403).redirect("/");
  }
  await Video.findByIdAndDelete(id);
  return res.redirect("/");
};

export const search = async (req, res) => {
  const { keyword } = req.query;
  let videos = [];
  if (keyword) {
    videos = await Video.find({
      title: {
        $regex: keyword, $options: "i"
      }
    }).populate("owner");
  }
  return res.render("search", { pageTitle: "Search" , videos});
};

export const registerView = async (req, res) => {
  const { id } = req.params;
  const video = await Video.findById(id);
  if (!video) {
    return res.sendStatus(404);
  }
  video.meta.views = video.meta.views + 1;
  await video.save();
  return res.sendStatus(200);
};

export const createComment = async (req, res) => {
  const {
    session: { user },
    body: { text },
    params: { id },
  } = req ;
  const video = await Video.findById(id);
  if (!video) {
    return res.sendStatus(404);
  }
  const comment = await Comment.create({
    text,
    owner: user._id,
    video: id,
  });
  //video에 추가시켜
  video.comments.push(comment._id);
  video.save();
  return res.status(201).json({ newCommentId: comment._id });
};

export const deleteComment = async (req,res) => { 
  const {
  session: { user },
  params: { id },
  } = req;
  const comment = await Comment.findById(id);
  if (user._id == comment.owner) {
    await Comment.findByIdAndDelete(id);
    return res.status(201).json();
  } else {
    return res.status(403).json();
  }
};