import { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

import routes from "./utils/routes";

import { useHomeContext, HomeContextProvider } from "./contexts/HomeContext";

function App() {
	const { containerReference, mainReference, setPageActive } = useHomeContext();

	useEffect(() => {
		const addScrollListener = () => {
			const scrollWindowHandler = () => {
				const distanceMainToViewportTop = mainReference
					? -mainReference.getBoundingClientRect().top
					: 0;

				const viewportHeight = containerReference
					? containerReference.offsetHeight
					: 0;

				switch (
					viewportHeight &&
					(distanceMainToViewportTop / ((viewportHeight / 3) * 2)).toFixed(0)
				) {
					case "0":
						setPageActive(1);
						break;
					case "1":
						setPageActive(2);
						break;
					case "2":
						setPageActive(3);
						break;
					default:
						break;
				}
			};

			window.addEventListener("scroll", scrollWindowHandler);
		};

		addScrollListener();
	}, [containerReference, mainReference, setPageActive]);

	return (
		<Router>
			<div className="App">
				<Header />
				<Main>
					{/* Se mapean todas las rutas traídas del fichero */}
					<Switch>
						{routes.map(({ component, path, exact }) => {
							return (
								<Route key={path} path={path} exact={exact}>
									{component}
								</Route>
							);
						})}
					</Switch>
				</Main>
				<Footer />
			</div>
		</Router>
	);
}

const AppWrapper = () => {
	return (
		<HomeContextProvider>
			<App />
		</HomeContextProvider>
	);
};

export default AppWrapper;
