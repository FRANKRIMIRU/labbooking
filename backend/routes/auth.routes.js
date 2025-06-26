import { Router } from "express";
import UserModel from "../models/user.model.js";
//this is for the logging in and out shenanigans 
const authRouter = Router();

authRouter.post('/sign-up',async (req, res) => {
  try {
    const user = await UserModel.create(req.body)
    res.status(201).json({message:`welcome ${user.name}`})
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
});
  

authRouter.post('/sign-in', async (req, res) =>{
   try {
  const { email, password } = req.body;
  const user = await UserModel.findOne({ email })
  if (!user) {
    return res.status(404).json({message:'User not found'})
  }
  } catch (err) { res.status(500).json({ message: "Servor error", error: err.message }) }
});


authRouter.post('/sign-out', (req, res) => res.send({ title: 'Sign out' }));
export default authRouter;