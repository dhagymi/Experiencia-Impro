import { useEffect, useState } from "react";

const useFooterTransition = () => {
	const [active, setActive] = useState(false);

	useEffect(() => {
		const scrollHandle = (event) => {
			const { bottom } = document.body.getBoundingClientRect();

			console.log(window.innerHeight, Math.floor(bottom));
			if (Math.floor(bottom) <= window.innerHeight) {
				setActive(true);
			} else if (active) {
				setActive(false);
			}
		};
		document.addEventListener("scroll", scrollHandle);
	}, [active]);

	return { active };
};

export default useFooterTransition;
