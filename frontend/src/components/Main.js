import { useEffect, useRef, useState } from "react";

import { ModalContextProvider } from "../contexts/ModalContext";
import { ShowsContextProvider } from "../contexts/ShowsContext";
import { useHomeContext } from "../contexts/HomeContext";
import { useClassesContext } from "../contexts/ClassesContext";
import { usePodcastContext } from "../contexts/PodcastContext";

const Main = ({ children }) => {
	const [page, setPage] = useState("");

	const { isHome, setHomeMainReference } = useHomeContext();
	const { isClasses, setClassesMainReference } = useClassesContext();
	const { isPodcast, setPodcastMainReference } = usePodcastContext();

	const reference = useRef();

	useEffect(() => {
		setHomeMainReference(reference.current);
		setClassesMainReference(reference.current);
		setPodcastMainReference(reference.current);
	}, [setClassesMainReference, setHomeMainReference, setPodcastMainReference]);

	useEffect(() => {
		if (isHome) {
			setPage("home");
		} else if (isClasses) {
			setPage("classes");
		} else if (isPodcast) {
			setPage("podcast");
		} else {
			setPage("");
		}
	}, [isHome, isClasses, isPodcast]);

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
