import { BrowserRouter as Router } from "react-router-dom";

import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Cursor from "./components/Cursor";
import AppRouter from "./components/Router";
import WeAreWorking from "./pages/WeAreWorking";

import { HomeContextProvider } from "./contexts/HomeContext";
import { ClassesContextProvider } from "./contexts/ClassesContext";
import { PodcastContextProvider } from "./contexts/PodcastContext";
import { MenuContextProvider } from "./contexts/MenuContext";

function App() {
	console.log(
		`%cDeveloped & Designed by DHATeam ${String.fromCodePoint(0x0270c)}`,
		"color: #ffffff; background: #24617c; padding: 5px 10px; border-radius: 3px; font-family: 'Verdana'"
	);
	
	const isComingSoon = true; 

	return (
		<Router>
		  <div className="App">
			<Cursor />
			<MenuContextProvider>
			  {isComingSoon ? (
				<>
				  <Header />  
				  <WeAreWorking />  
				</>
			  ) : (
				<>
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
				</>
			  )}
			</MenuContextProvider>
		  </div>
		</Router>
	  );
	}
export default App;
