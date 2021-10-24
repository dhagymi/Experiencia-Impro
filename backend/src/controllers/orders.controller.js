import emoji from "node-emoji";

import ordersService from "../services/orders.service.js";

export const saveOrder = async (req, res) => {
	try {
		const { body } = req;

		const id = await ordersService.create(body);
		if (id) {
			console.log(
				emoji.get("heavy_check_mark"),
				` The order was saved with success: ${id}`
			);
			return res.status(200).send(id);
		} else {
			throw new Error("There was an error, the order couldn't be saved.");
		}
	} catch (error) {
		res.status(404).send(error.message);
		console.log(emoji.get("x"), ` ${error.message}`);
	}
};
