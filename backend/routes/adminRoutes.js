import { Router } from "express";
import UserModel from "../models/user.model.js";
import { verifyToken } from "../utils/verifyToken.js";
import { verifyAdmin } from "./verifyAdmin.js";

const adminRouter = Router();

adminRouter.get("/count", verifyToken, verifyAdmin, async (req, res) => {
  try {
    const count = await UserModel.countDocuments();
    res.status(200).json({ userCount: count });

  } catch (err) {
    res.status(500).json({message:"Failed to count users",error:err.message})
  }
})
export default adminRouter;