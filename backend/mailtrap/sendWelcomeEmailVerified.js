import { mailtrapClient, mailtrapSender } from "./mailtrap.config.js"

export const sendWelcomeEmailVerified = async (email, name) => {
    try {
        const recipient = [{ email }]
        await mailtrapClient.send({
            to: recipient,
            from: mailtrapSender,
            template_uuid: "cc970bff-3cc0-49b6-989f-362868f13f6f",
            template_variables: {
                "company_info_name": "Yafizham",
                "name": name,
                "company_info_address": "Jakarta, Smart city",
                "company_info_city": "Jakarta Raya, Indonesia",
                "company_info_zip_code": "01234",
                "company_info_country": "Indonesia"
            }
        })

    } catch (error) {
        console.log(`gagal mengirim welcome email ${error}`)
        return res.status(400).json({ success: false, message: error.message })
    }
}