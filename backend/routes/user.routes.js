import { Router } from "express";
import UserModel from "../models/user.model.js";
//this is for  managing users: CRUD
const userRouter = Router()

userRouter.get('/', (req, res) => res.send({ title: 'GET all users' }));

userRouter.get('/:id', (req, res) => res.send({ title: 'GET user details' }));

userRouter.put('/:id', (req, res) => res.send({ title: 'UPDATE users' }));

userRouter.delete('/:id', (req, res) => res.send({ title: 'DELETE users' }));

export default userRouter;
