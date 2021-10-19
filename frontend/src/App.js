import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

import routes from "./utils/routes";

function App() {
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

export default App;
