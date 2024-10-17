import { PASSWORD_RESET_REQUEST_TEMPLATE } from "./email.template.js"
import { mailtrapClient, mailtrapSender } from "./mailtrap.config.js"

export const sendResetPassword = async (email, clientCallback) => {
    try {
        const recipient = [{ email }]
        await mailtrapClient.send({
            to: recipient,
            from: mailtrapSender,
            subject: "Reset password",
            html: PASSWORD_RESET_REQUEST_TEMPLATE.replace("{resetURL}", `${clientCallback}`)
        })
    } catch (error) {
        console.log(`error dalam sendResetPassword : ${error}`)
        throw new Error("error dalam sendResetPassword " + error)
    }
}