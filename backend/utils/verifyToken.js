import jwt from "jsonwebtoken";
import UserModel from "../models/user.model.js";

export const verifyToken = async (req, res, next) => {
  const token = req.cookies.token;


  if (!token) {
    return res.status(401).json({ message: "Unauthorised" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await UserModel.findById(decoded.id).select("-password");
    next();
  } catch (err) {
    res.status(401).json({ message: "invalid token" });

  }

}