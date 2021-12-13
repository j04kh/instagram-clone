import { ObjectID } from "bson";
import { Schema, model, models } from "mongoose";

const storySchema = new Schema(
  {
    _id: { type: ObjectID },
    username: {
      type: String,
      required: true,
    },
    profilePicture: { type: String, trim: true },
    photo: { type: String },
    timeAgo: { type: String, required: true },
  },
  {
    timestamps: true,
    collection: "stories",
  }
);

export default models.Story || model("Story", storySchema);
