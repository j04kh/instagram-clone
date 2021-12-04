import type { NextApiRequest, NextApiResponse } from "next";
import dbconnect from "../../utils/database";
import Post from "../../models/Post";

dbconnect();

export default async (req: NextApiRequest, res: NextApiResponse<any>) => {
  const posts = await Post.find({});
  res.status(200).json({ posts });
};
