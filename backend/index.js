
import express from "express"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"
import connectDB from "./libs/connectDB.js"
import authRoute from "./routes/auth-route.js"

const app = express()

// initialization
dotenv.config()
await connectDB()
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//routes
app.use("/api/auth", authRoute)

const PORT = process.env.PORT || 3001

app.listen(PORT, () => console.log(`Listening on port ${PORT}`))