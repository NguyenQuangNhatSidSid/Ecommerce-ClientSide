import mongooseConnect from "@/lib/mongoose";
import mongoose from "mongoose";

export default async function handle(req, res) {
  await mongooseConnect();
  const ids = req.body.ids;
}
