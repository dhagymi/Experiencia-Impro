import { useEffect, useRef } from "react";

import { ModalContextProvider } from "../contexts/ModalContext";
import { ShowsContextProvider } from "../contexts/ShowsContext";
import { useHomeContext } from "../contexts/HomeContext";

const Main = ({ children }) => {
	const { isHome, setMainReference } = useHomeContext();

	const reference = useRef();

	useEffect(() => {
		setMainReference(reference.current);
	}, [setMainReference]);

	return (
		<ShowsContextProvider>
			<ModalContextProvider>
				<main ref={reference} className={`main ${isHome ? "main--home" : ""}`}>
					{children}
				</main>
			</ModalContextProvider>
		</ShowsContextProvider>
	);
};
export default Main;
