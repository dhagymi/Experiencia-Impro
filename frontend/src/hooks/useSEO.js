import { useEffect } from "react";

const useSEO = ({ title }) => {
	useEffect(() => {
		document.title = `Experiencia Impro | ${title}`;
		return () => {
			document.title = "Experiencia Impro";
		};
	}, [title]);
};

export default useSEO;
