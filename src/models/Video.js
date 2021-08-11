import mongoose from "mongoose";

const videoSchema = new mongoose.Schema({
    title: { type: String, required: true, trim: true, maxLegnth: 80 },
    fileUrl: { type: String, required: true },
    description: { type: String, required: true, trim:true , minLength: 20 },
    createdAt: { type: Date, required: true , default: Date.now },
    hashtags: [{ type: String ,trim: true  }],
    meta: {
        views: { type: Number, default: 0 , required: true},
        rating:  { type: Number, default: 0, required: true},
    },
    //monose에게 objectId가 'model user'에서 온다고 알려줘야한다.  -> ref: "User"
    owner: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "User" },
});

videoSchema.static("formatHashtags", function (hashtags) {
    return hashtags
    .split(",")
    .map((word) => (word.startsWith("#") ? word : `#${word}`));
})

const Video = mongoose.model("Video", videoSchema);

export default Video;