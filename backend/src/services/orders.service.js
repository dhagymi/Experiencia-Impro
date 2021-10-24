import Container from "../containers/firebase.container.js";

class OrdersService extends Container {
	constructor() {
		super("orders");
	}
}

const ordersService = new OrdersService();
export default ordersService;
