import { useEffect, useRef, useState } from "react";

import { ModalContextProvider } from "../contexts/ModalContext";
import { ShowsContextProvider } from "../contexts/ShowsContext";
import { useHomeContext } from "../contexts/HomeContext";
import { useClassesContext } from "../contexts/ClassesContext";

const Main = ({ children }) => {
	const [page, setPage] = useState("");

	const { isHome, setHomeMainReference } = useHomeContext();
	const { isClasses, setClassesMainReference } = useClassesContext();

	const reference = useRef();

	useEffect(() => {
		setHomeMainReference(reference.current);
		setClassesMainReference(reference.current);
	}, [setClassesMainReference, setHomeMainReference]);

	useEffect(() => {
		console.log("alo");
		if (isHome) {
			setPage("home");
		} else if (isClasses) {
			setPage("classes");
		} else {
			setPage("");
		}
	}, [isHome, isClasses]);

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
