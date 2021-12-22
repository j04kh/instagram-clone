import type { NextApiRequest, NextApiResponse } from "next";
import dbconnect from "../../../utils/database";
import User from "../../../models/User";

dbconnect();

export default async (req: NextApiRequest, res: NextApiResponse<any>) => {
  const user_id = req.query.id;

  const user = await User.findById(user_id);

  if (user) {
    res.status(200).json({ user });
  } else {
    res.status(400).json({ error: "User not found" });
  }
};
