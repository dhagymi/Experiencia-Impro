import Shows from "../pages/Shows";
import Contact from "../pages/Contact";
import Error from "../pages/Error";
import WeAreWorking from "../pages/WeAreWorking";

import HomeContainer from "../components/HomeContainer";
import ClassesContainer from "../components/ClassesContainer";
import PodcastContainer from "../components/PodcastContainer";

// Se define y exporta array de rutas para simplificar código en App.js

const routes = [
	{ component: <HomeContainer />, path: "/", exact: true },
	{ component: <ClassesContainer />, path: "/clases", exact: true },
	{ component: <PodcastContainer />, path: "/podcast", exact: true },
	{ component: <Contact />, path: "/contacto", exact: true },
	{ component: <Shows />, path: "/shows", exact: true },
	{ component: <WeAreWorking />, path: "/muypronto", exact: true },
	{ component: <Error />, path: "*" },
];

export default routes;
