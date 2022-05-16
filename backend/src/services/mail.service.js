import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

class Mailer {
    constructor(user, pass) {
        this.user = user;
        this.pass = pass;
        this.transporter = nodemailer.createTransport({
            host: "smtp.hostinger.com",
            secureConnection: true,
            port: 465,
            auth: {
                user,
                pass,
            },
        });
    }

    sendEmail = async ({
        from = process.env.DELIVERY_MAIL,
        to = process.env.RECEIVING_MAIL,
        subject,
        text = "",
        html = "",
        attachments = [],
    }) => {
        try {
            const mailOptions = {
                from,
                to,
                subject,
                text,
                html,
                attachments,
            };

            const promise = new Promise((res, rej) => {
                this.transporter.sendMail(mailOptions, (error, info) => {
                    if (error) {
                        console.log(error);
                        rej(error);
                    } else {
                        console.log("Email sent: " + info.response);
                        res(info.messageId);
                    }
                });
            });

            const info = await promise;
            return info;
        } catch (error) {
            console.log(error);
        }
    };
}

const mailer = new Mailer(
    process.env.DELIVERY_MAIL,
    process.env.DELIVERY_MAIL_PASSWORD
);
export default mailer;
