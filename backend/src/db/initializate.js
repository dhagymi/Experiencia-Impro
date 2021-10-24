import ordersService from "../services/orders.service.js";
import showsService from "../services/shows.service.js";

import Container from "../containers/firebase.container.js";

Container.connect().then(() => {
	showsService.getRef(Container.db);
	ordersService.getRef(Container.db);
});
