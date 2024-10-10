import jwt from "jsonwebtoken"

export const generateJWTandSetCookie = async (res, userID) => {
    //jwt sign
    const token = jwt.sign({ userID }, process.env.JWT_SECRET, {
        expiresIn: "72h" //3 hari
    })
    res.cookie("token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        maxAge: 1000 * 60 * 60 * 24 * 3 //3 hari
    })
    return token
}