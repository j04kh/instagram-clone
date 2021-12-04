import { ObjectID } from "bson";
import { Schema, model, models } from "mongoose";

const postSchema = new Schema(
  {
    _id: { type: ObjectID },
    username: {
      type: String,
      required: true,
    },
    profilePicture: { type: String, trim: true },
    location: { type: String, trim: true },
    photo: { type: String, required: true },
    likes: { type: String },
    description: { type: String, trim: true },
    timeAgo: { type: String, required: true },
  },
  {
    timestamps: true,
    collection: "posts",
  }
);

export default models.Post || model("Post", postSchema);
