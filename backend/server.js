import express from 'express'
import dotenv from 'dotenv'
import { connectDB } from './config/db.js';
import cors from 'cors'
import authRouter from './routes/auth.routes.js';
import userRouter from './routes/user.routes.js';
import cookieParser from 'express'

dotenv.config();

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({extended:false}))

app.use('/api/v1/auth', authRouter)
app.use('/api/v1/users',userRouter)


app.get("/", (req, res) => {
  res.send('server is ready')
})

console.log(process.env.MONGO_URI)


app.listen(5000, () => {
  connectDB();
  console.log('server started at http://localhost:5000')
})