import emoji from "node-emoji";

import mailer from "../services/mail.service.js";

export const sendFormEmail = (req, res) => {
	try {
		const { body } = req;
		const info = mailer.sendEmail(body);
		if (info.messageId) {
			console.log(
				emoji.get("heavy_check_mark"),
				` E-mail sended with success: ${info.messageId}`
			);
			return res.status(200).send(info);
		} else {
			throw new Error("There was an error, the e-mail couldn't be sended.");
		}
	} catch (error) {
		res.status(404).send(error.message);
		console.log(emoji.get("x"), ` ${error.message}`);
	}
};
