import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  avatarUrl: String,
  socialOnly: { type: Boolean, default: false }, // github로 로그인했는지 확인
  username: { type: String, required: true, unique: true },
  password: { type: String }, // 깃허브로 로그인한경우 password가 필요없음.
  name: { type: String, required: true },
  location: String,
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comment" }],
  // 유저는 여러개의 비디오를 가질수있기때문에
  videos: [{ type: mongoose.Schema.Types.ObjectId, ref: "Video" }],
});

userSchema.pre("save", async function () {
  //버그픽스, video를 올릴때마다 해쉬된 비밀번호가 또 해쉬되서 다시 로그인이 안되기때문
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 5);
  }
});

const User = mongoose.model("User", userSchema);
export default User;