import { MailtrapClient } from "mailtrap";
import "dotenv/config";


export const mailtrapClient = new MailtrapClient({
    token: process.env.MAILTRAP_TOKEN,
});

export const mailtrapSender = {
    email: "hello@demomailtrap.com",
    name: "Yafizham",
};