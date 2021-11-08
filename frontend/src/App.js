import { BrowserRouter as Router } from "react-router-dom";

import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Cursor from "./components/Cursor";
import AppRouter from "./components/Router";

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
									<AppRouter />
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
