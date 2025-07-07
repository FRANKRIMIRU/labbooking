import { Router } from "express";

//this is for  managing users: CRUD
const userRouter = Router()

userRouter.get('/', async (req, res) => {
  try {
    const users = await UserModel.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({message:"Server error",error: err.message})
  }
} )

userRouter.get('/:id', async (req, res) => {
  try {
    const users = await UserModel.findById(req.params.id);
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message })
  }

});

userRouter.put('/:id', async (req, res) => {
  try {
    const updatedUser = await UserModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updatedUser) return res.status(404).json({ message: "Usernot found" });
    res.status(200).json(updatedUser)
  } catch (err) {
    res.status(500).json({message:"Server error" ,error:err.message})
  }
});

userRouter.delete('/:id', async (req, res) => {
  try {
    const deletedUser = await UserModel.findByIdAndDelete(req.params.id);
    if (!deletedUser) return res.status(404).json({ message: "User not found" })
    res.status(200).json({message:"user deleted successfully"})
  } catch (err) {
    res.status(500).json({message:"Server error", error:err.message})
  }
});

export default userRouter;
