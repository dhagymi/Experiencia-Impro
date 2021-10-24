import Container from "../containers/firebase.container.js";

class ShowsService extends Container {
	constructor() {
		super("shows");
	}
}

const showsService = new ShowsService();
export default showsService;
