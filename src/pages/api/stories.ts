import type { NextApiRequest, NextApiResponse } from "next";
import dbconnect from "../../utils/database";
import Story from "../../models/Story";

dbconnect();

export default async (req: NextApiRequest, res: NextApiResponse<any>) => {
  const stories = await Story.find({});
  res.status(200).json({ stories });
};
