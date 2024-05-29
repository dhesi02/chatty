import express from 'express'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser';
import cors from 'cors'

import authRoutes from './Routes/auth.route.js'
import messageRoutes from './Routes/message.route.js'
import userRoutes from './Routes/user.route.js'


import connectToMongoDB from './db/connectToMongoDB.js';




const app=express();
const PORT=process.env.PORT || 5000;

dotenv.config()

app.use(express.json());
app.use(cookieParser());
const corsOptions ={
    origin:'*', 
    credentials:true,            
    optionSuccessStatus:200,
} 
 app.use(cors(corsOptions))


app.use("/api/auth",authRoutes)
app.use("/api/messages",messageRoutes)
app.use("/api/users",userRoutes)

app.get("/",(req,res)=>{
    res.send("hello world");
})


app.listen(PORT,()=>{
    connectToMongoDB();
    console.log(`app listening on port ${PORT}`);
});

