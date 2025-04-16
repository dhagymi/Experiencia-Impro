import * as emoji from "node-emoji";;

import showsService from "../services/shows.service.js";

export const getShows = async (req, res) => {
	try {
		const shows = await showsService.getAll();
		if (shows) {
			console.log(
				emoji.get("heavy_check_mark"),
				` The shows was getted with success`
			);
			return res.status(200).send(shows);
		} else {
			throw new Error("There was an error, the shows couldn't be getted.");
		}
	} catch (error) {
		res.status(404).send(error.message);
		console.log(emoji.get("x"), ` ${error.message}`);
	}
};

export const getShowsContional = async (req, res) => {
	try {
		const {
			body: { where = [], limit = null, orderBy = [] },
		} = req;
		const shows = await showsService.getConditional(where, limit, orderBy);
		if (shows) {
			console.log(
				emoji.get("heavy_check_mark"),
				` The shows was getted with success`
			);
			return res.status(200).send(shows);
		} else {
			throw new Error("There was an error, the shows couldn't be getted.");
		}
	} catch (error) {
		res.status(404).send(error.message);
		console.log(emoji.get("x"), ` ${error.message}`);
	}
};

export const updateShow = async (req, res) => {
	try {
		const {
			body,
			params: { id },
		} = req;

		const response = await showsService.update(id, body);
		if (response) {
			console.log(
				emoji.get("heavy_check_mark"),
				` The show was updated with success`
			);
			return res.status(200).send(response);
		} else {
			throw new Error("There was an error, the show couldn't be updated.");
		}
	} catch (error) {
		res.status(404).send(error.message);
		console.log(emoji.get("x"), ` ${error.message}`);
	}
};

/* export const getShowDocRef = async (req, res) => {
	try {
		const {
			params: { id },
		} = req;

		const ref = await showsService.getDocRef(id);
		if (ref) {
			console.log(
				emoji.get("heavy_check_mark"),
				` The reference of the show with id ${id} was getted with success.`
			);
			return res.status(200).send(ref);
		} else {
			throw new Error(
				`There was an error, the reference of the show with id ${id} couldn't be getted.`
			);
		}
	} catch (error) {
		res.status(404).send(error.message);
		console.log(emoji.get("x"), ` ${error.message}`);
	}
};
 */
