const nodemailer = require("nodemailer");

module.exports = async(email,subject,text) => {
    try {
        const Transpoter = nodemailer.createTransport({
            host:process.env.HOST,
            service:process.env.SERVICE,
            port:Number(process.env.EMAIL_PORT),
            secure:BOOLEAN(process.env.SECURE),
            auth:{
                user:process.env.USER,
                pass:process.env.PASS
            }
        });

        await Transpoter.sendMail({
            from:process.env.USER,
            to:email,
            subject:subject,
            text:text
        });

        console.log("Email sent Successfully");
        
    } catch (error) {
        console.log(error);
    }
}