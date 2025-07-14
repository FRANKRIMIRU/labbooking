import { Router } from "express";
import Test from "../models/tests.model.js";
import { verifyToken } from "../utils/verifyToken.js";
import { verifyAdmin } from "./verifyAdmin.js";

const testRouter = Router();

testRouter.get('/', async (req, res) => {
  try {
    const tests = await Test.find()
    res.status(200).json(tests)
  } catch (err) {
    res.status(500).json({message:"Failed to fetch test",error:err.message})
  }
});

testRouter.get('/:id', async (req, res) => {
  try {
    const test = await Test.findById(req.params.id);
    if (!test) return res.status(404).json({ message: "Test not found" });
    res.status(200).json(test)
  } catch (err) {
    res.status(500).json({message:"Error fetching test",error:err.message})
  }

});

testRouter.post('/',verifyToken,verifyAdmin, async(req, res) => {
  try {
    const test = await Test.create({ ...req.body, createdBy: req.user._id });
    res.status(201).json(test);
  } catch (err) {
    res.status(400).json({message:"Failed to create test",error:err.message})
  }
});


testRouter.put('/:id',verifyToken, verifyAdmin,async (req, res) => {
  try {
    const updatedTest = await Test.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators:true,
    })
    if (!updatedTest) return res.status(404).json({ message: "Test not found" });
    res.status(200).json(updatedTest)
  } catch (err) {
    res.status(500).json({message:"Update failed:",error:err.message})
  }
});


testRouter.delete('/:id',verifyToken,verifyAdmin, async (req, res) => {
  try {
    const deletedTest = await Test.findByIdAndDelete(req.params.id);
    if (!deletedTest) return res.status(404).json({ message: "Test was not found" });
    res.status(200).json({ message: "Test deleted successfully" });
  } catch (err) {
    res.status(500).json({message:"Delete failed:",error:err.message})
  }
});

export default testRouter;
