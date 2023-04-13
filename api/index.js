import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import authRoute from "./routes/auth.js"
import usersRoute from "./routes/users.js"
import hotelsRoute from "./routes/hotels.js"
import roomsRoute from "./routes/rooms.js"
import cookieParser from "cookie-parser"
const router = express.Router()
import ServerlessHttp from "serverless-http"
import cors from "cors"

const app = express()

dotenv.config()

// here we will set strict query so it will not throw any error in terminal 
mongoose.set('strictQuery', true);

const connect = async ()=>{
try {
    await mongoose.connect(process.env.MONGO)
    console.log("Backend connected successfully")
} catch (error) {
    throw error
}
};

mongoose.connection.on("disconnected",()=>{
    console.log("mongodb disconnected")
})
// mongoose.connection.on("connected",()=>{
//     console.log("mongodb connected")
// })

//middlewares

app.use(cors())
app.use(cookieParser())
app.use(express.json())

app.use("/api/auth",authRoute)
app.use("/api/users",usersRoute)
app.use("/api/hotels",hotelsRoute)
app.use("/api/rooms",roomsRoute)

app.use((err,req,res,next)=>{
    const errorStatus = err.status || 500
    const errorMessage = err.message || "something went wrong!"
    return res.status(errorStatus).json({
        success : false,
        status:errorStatus,
        message:errorMessage,
        stack:err.stack,
    });
});

app.listen(8800,()=>{
    connect()
    console.log('server started successfully at port 8800')
});

// app.use('/.netlify/functions/api', router);
// module.exports.handler = ServerlessHttp(app)