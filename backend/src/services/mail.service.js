import nodemailer from "nodemailer";

class Mailer {
	constructor(service, user, pass) {
		this.service = service;
		this.user = user;
		this.pass = pass;
		this.transporter = nodemailer.createTransport({
			service,
			auth: {
				user,
				pass,
			},
		});
	}

	sendEmail = async ({
		from = "amandreacchi@gmail.com",
		to = "dhadesigners@gmail.com",
		subject,
		text = "",
		html = "",
	}) => {
		try {
			const mailOptions = {
				from,
				to,
				subject,
				text,
				html,
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

const mailer = new Mailer("gmail", "amandreacchi@gmail.com", "giladon95");
export default mailer;
