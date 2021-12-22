import { ObjectID } from "bson";
import { Schema, model, models } from "mongoose";

const userSchema = new Schema(
  {
    _id: { type: ObjectID },
    username: {
      type: String,
      required: true,
      trim: true,
    },
    profilePicture: { type: String, trim: true },
    postsQty: { type: String, required: true, trim: true },
    followersQty: { type: String, required: true, trim: true },
    followingQty: { type: String, required: true, trim: true },
    description: { type: String, trim: true },
    nickname: { type: String, required: true, trim: true },
    user_id: { type: ObjectID },
    posts: { type: [] },
  },
  {
    timestamps: true,
    collection: "users",
  }
);

export default models.User || model("User", userSchema);
