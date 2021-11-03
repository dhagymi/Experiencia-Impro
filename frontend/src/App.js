import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Cursor from "./components/Cursor";

import routes from "./utils/routes";

import { HomeContextProvider } from "./contexts/HomeContext";
import { ClassesContextProvider } from "./contexts/ClassesContext";
import { PodcastContextProvider } from "./contexts/PodcastContext";
import { MenuContextProvider } from "./contexts/MenuContext";

function App() {
	return (
		<Router>
			<div className="App">
				<Cursor />
				<MenuContextProvider>
					<Header />
					<HomeContextProvider>
						<ClassesContextProvider>
							<PodcastContextProvider>
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
							</PodcastContextProvider>
						</ClassesContextProvider>
					</HomeContextProvider>
					<Footer />
				</MenuContextProvider>
			</div>
		</Router>
	);
}

export default App;
