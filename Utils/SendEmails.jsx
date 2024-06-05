import nodemailer from "nodemailer";

export default async function SendEmails(email, subject, text) {
    try {
        const transporter = nodemailer.createTransport({
            host: process.env.HOST,
            service: process.env.SERVICE,
            port: Number(process.env.EMAIL_PORT),
            secure: process.env.SECURE === "true",
            auth: {
                user: process.env.USER,
                pass: process.env.PASS
            }
        });

        await transporter.sendMail({
            from: process.env.USER,
            to: email,
            subject,
            text
        });

        console.log("Email sent Successfully");
    } catch (error) {
        console.log(error);
    }
}