import Classes from "../pages/Classes";
import Shows from "../pages/Shows";
import Why from "../pages/Why";
import Contact from "../pages/Contact";
import Home from "../pages/Home";

// Se define y exporta array de rutas para simplificar código en App.js

const routes = [
	{ component: <Home />, path: "/", exact: true },
	{ component: <Classes />, path: "/classes", exact: true },
	{ component: <Contact />, path: "/contact", exact: true },
	{ component: <Shows />, path: "/shows", exact: true },
	{ component: <Why />, path: "/podcast", exact: true },
];

export default routes;
