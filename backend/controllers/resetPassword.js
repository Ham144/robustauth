import User from "../models/user-model.js"
import bcrypt from "bcryptjs"

export const resetPassword = async (req, res) => {
    const token = req.params.token
    const { password, email } = req.body

    if (!token) {
        return res.status(400).json({
            success: false,
            errors: "token tidak ada",
        })
    }

    //cek token

    //periksa apakah email ditemukan
    const userDB = await User.findOne({ email })
    if (!userDB) {
        return res.status(404).json({
            success: false,
            errors: "email berikut tidak terdaftar"
        })
    }
    //periksa apakah menggunakan password lama
    const matchedWithOldPass = await bcrypt.compare(userDB.password, password)
    if (matchedWithOldPass) {
        return res.status(402).json({
            success: false,
            errors: "anda memasukkan password lama"
        })
    }



    if (!password || !email) {
        return res.status(400).json({
            success: false,
            errors: "diperlukan password baru"
        })
    }


    const response = await User.findOneAndUpdate({ email }, { password })
    if (response.errors) {
        return res.status(500).json({ errors: "gagal mereset password" })
    }
    return res.json({
        success: true,
        message: "anda berhasil mengubah password"
    })

}