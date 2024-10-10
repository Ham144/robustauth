import User from "../models/user-model.js"
import bcrypt from "bcryptjs"
import { generateVerificationCode } from "../utils/generateVerificationCode.js"
import { generateJWTandSetCookie } from "../utils/generateJWTandSetCookie.js"
import { sendVerificationCode } from "../mailtrap/sendVerificationEmail.js"
import { sendWelcomeEmailVerified } from "../mailtrap/sendWelcomeEmailVerified.js"

export const register = async (req, res) => {
    try {
        const { email, name, password } = req.body

        //check apakah sudah ada semuanya
        if (!email || !name || !password) {
            return res.status(400).json({ success: false, message: "tolong masukkan semua yg diperlukan" })
        }
        //coba cari didatabase apakah email duplikat
        const duplicateEmail = await User.findOne({ email });
        if (duplicateEmail) {
            return res.status(409).json({ success: false, message: "Email sudah ada" })
        }
        //coba cek password lengthnya > 6
        if (password.length < 6) {
            return res.status(400).json({ success: false, message: "Password harus lebih dari 6 karakter" })
        }
        //kalau lolos, bcryt passwordnya dengan bcrypt
        const hashedPassword = await bcrypt.hash(password, 10)
        //lalu buat token
        const verificatioCode = generateVerificationCode()
        //lalu buat cookie
        const user = new User({
            email,
            name,
            password: hashedPassword,
            verificationToken: verificatioCode,
            verificationTokenExpire: Date.now() + 60 * 60 * 1000
        })
        generateJWTandSetCookie(res, user._id)
        await user.save()
        //sending email verification code
        await sendVerificationCode(email, user.verificationToken)
        return res.status(201).json({
            success: true, message: "Akun berhasil dibuat",
            user: {
                ...user._doc,
                password: undefined
            }
        })
    } catch (error) {
        res.status(401).json({ success: false, message: error.message })
    }
}

export const verifyEmail = async (req, res) => {
    try {
        const { code } = req.body
        const user = await User.findOne({
            verificationToken: code,
            verificationTokenExpire: { $gt: Date.now() }//bandingkan dengan date.now
        })
        if (!user) {
            return res.status(401).json({ success: false, message: "Kode verifikasi tidak valid atau sudah kadaluarsa" })
        }
        user.isVerified = true;
        user.verificationToken = undefined;
        user.verificationTokenExpire = undefined;
        await user.save();
        //terakhir kirim welcome template ke email user
        await sendWelcomeEmailVerified(user.email, user.name)
        return res.status(200).json({
            success: true, message: "Email terverifikasi", user: {
                ...user._doc,
                password: undefined
            }
        })
    } catch (error) {
        res.status(401).json({ success: false, message: error.message })
    }
}

export const login = async (req, res) => {
    try {
        //ambil variabel yg perlu: email, password
        const { email, password } = req.body
        //cek apakah email ada didatabase
        const userDB = await User.findOne({ email })
        if (!userDB) {
            return res.status(401).json({ success: false, message: "Email tidak ditemukan" })
        }
        //jika ada, bandingkan passwordnya
        const cocok = await bcrypt.compare(password, userDB.password)
        if (!cocok) {
            return res.status(401).json({ success: false, message: "gagal mencoba login, credential salah" })
        }
        //kalau cocok, buat token dengan fungsi generateJWTandSetCookie
        await generateJWTandSetCookie(res, userDB._id)
        //jangan lupa ganti last login date
        userDB.lastLogin = Date.now()
        await userDB.save();
        return res.status(200).json({
            success: true, message: "Login berhasil", user: {
                ...userDB._doc,
                password: undefined
            }
        })
    } catch (error) {
        console.log(`error dalam login ${error}`)
        return res.status(401).json({ success: false, message: error.message })
    }
}

export const logout = (req, res) => {
    try {
        res.clearCookie("token")
        return res.status(200).json({ success: true, message: "Logout berhasil" })
    } catch (error) {
        res.status(401).json({ success: false, message: error.message })
    }
}