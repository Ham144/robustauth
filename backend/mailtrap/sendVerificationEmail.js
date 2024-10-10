import { VERIFICATION_EMAIL_TEMPLATE } from "./email.template.js"
import { mailtrapClient, mailtrapSender } from "./mailtrap.config.js"

export const sendVerificationCode = async (email, verificationCode) => {
    try {
        const recipient = [{ email }]
        mailtrapClient.send({
            to: recipient,
            from: mailtrapSender,
            subject: "Verifikasi email anda",
            html: VERIFICATION_EMAIL_TEMPLATE.replace("{verificationCode}", verificationCode),
        })
    } catch (error) {
        console.log(`gagal mengirim kode verifikasi ${error}`)
        throw new Error(`gagal mengirim kode verifikasi ${error}`)
    }
}