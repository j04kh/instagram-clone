import type { NextApiRequest, NextApiResponse } from "next";
import dbconnect from "../../../utils/database";
import Post from "../../../models/Post";

dbconnect();

export default async (req: NextApiRequest, res: NextApiResponse<any>) => {
  const post_id = req.query.id;

  const post = await Post.findById(post_id);

  if (post) {
    res.status(200).json({ post });
  } else {
    res.status(400).json({ error: "Post not found" });
  }
};
