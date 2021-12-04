import { connect, connection } from "mongoose";

const url = process.env.DATABASE_URL || "no url";

const isConnected = false;

export default async function dbconnect() {
  if (isConnected) return;

  const db = await connect(url);
}

connection.on("connected", () => {
  console.log("Database connected!");
});

connection.on("error", (err) => {
  console.error(err);
});
