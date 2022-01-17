import React from "react";
import { Switch, Route } from "react-router-dom";

import routes from "../utils/routes";

const Router = () => {
	return (
		<Switch>
			{/* Se mapean todas las rutas traídas del fichero */}
			{routes.map(({ component, path, exact }) => {
				return (
					<Route key={path} path={path} exact={exact}>
						{component}
					</Route>
				);
			})}
		</Switch>
	);
};

export default Router;
