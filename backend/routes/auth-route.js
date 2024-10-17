import { Router } from "express";
import { forgotPassword, login, logout, register, verifyEmail } from "../controllers/auth-controller.js";

const route = Router()

route.post("/register", register)
route.post("/login", login)
route.delete("/logout", logout)

route.post("/verify-email", verifyEmail)
route.post("/forgot-password", forgotPassword)//mengerjakan ini

export default route