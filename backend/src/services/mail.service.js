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
		from = "dhadesigners@gmail.com",
		to = "dhadesigners@gmail.com",
		subject,
		text = "",
		html = "",
	}) => {
		const mailOptions = {
			from,
			to,
			subject,
			text,
			html,
		};
		const info = this.transporter.sendMail(mailOptions, (error, info) => {
			if (error) {
				console.log(error);
			} else {
				console.log("Email sent: " + info.response);
			}
		});

		return info;
	};
}

const mailer = new Mailer("gmail", "dhadesigners@gmail.com", "Penny1989!");
export default mailer;
