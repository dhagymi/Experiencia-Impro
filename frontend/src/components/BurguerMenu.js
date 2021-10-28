import { useCallback } from "react";

import { useMenuContext } from "../contexts/MenuContext.js";

import menuImg from "../assets/icons/burguer_menu.svg";

const BurguerMenu = () => {
	const { open, setOpen, setNavBarClassActive } = useMenuContext();

	const menuClickHandler = useCallback(() => {
		if (open) {
			setNavBarClassActive(" navbar--closing");
			setTimeout(() => {
				setNavBarClassActive("");
			}, 300);
			setOpen(!open);
		} else {
			setNavBarClassActive(" navbar--init");
			setTimeout(() => {
				setNavBarClassActive(" navbar--open");
			}, 1);
			setOpen(!open);
		}
	}, [open, setNavBarClassActive, setOpen]);

	return (
		<div className="burguerMenu">
			<img
				src={menuImg}
				alt="menu"
				className="burguerMenu__img"
				onClick={menuClickHandler}
			/>
		</div>
	);
};

export default BurguerMenu;
