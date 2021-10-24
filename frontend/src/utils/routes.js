import Classes from "../pages/Classes";
import Shows from "../pages/Shows";
import Podcast from "../pages/Podcast";
import Contact from "../pages/Contact";
import HomeContainer from "../components/HomeContainer";

// Se define y exporta array de rutas para simplificar código en App.js

const routes = [
	{ component: <HomeContainer />, path: "/", exact: true },
	{ component: <Classes />, path: "/classes", exact: true },
	{ component: <Contact />, path: "/contact", exact: true },
	{ component: <Shows />, path: "/shows", exact: true },
	{ component: <Podcast />, path: "/podcast", exact: true },
];

export default routes;
