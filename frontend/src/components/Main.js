import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";

import { ModalContextProvider } from "../contexts/ModalContext";
import { ShowsContextProvider } from "../contexts/ShowsContext";
import { useHomeContext } from "../contexts/HomeContext";
import { useClassesContext } from "../contexts/ClassesContext";
import { usePodcastContext } from "../contexts/PodcastContext";

const Main = ({ children }) => {
	const [page, setPage] = useState("");

	const { setHomeMainReference } = useHomeContext();
	const { setClassesMainReference } = useClassesContext();
	const { setPodcastMainReference } = usePodcastContext();

	const { pathname } = useLocation();
	const reference = useRef();

	useEffect(() => {
		setHomeMainReference(reference.current);
		setClassesMainReference(reference.current);
		setPodcastMainReference(reference.current);
	}, [setClassesMainReference, setHomeMainReference, setPodcastMainReference]);

	useEffect(() => {
		setPage(pathname.slice(1) || "home");
	}, [pathname]);

	return (
		<ShowsContextProvider>
			<ModalContextProvider>
				<main ref={reference} className={`main ${page ? `main--${page}` : ""}`}>
					{children}
				</main>
			</ModalContextProvider>
		</ShowsContextProvider>
	);
};
export default Main;
