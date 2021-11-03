import { useCallback } from "react";
import { NavLink } from "react-router-dom";

import { useMenuContext } from "../contexts/MenuContext";

import arrow from "../assets/icons/navbar_arrow.svg";

const NavBar = () => {
	const { navBarClassActive, setNavBarClassActive, setOpen, open } =
		useMenuContext();

	const navBarClickHandler = useCallback(async () => {
		setNavBarClassActive(" navbar--closing");
		setTimeout(() => {
			setNavBarClassActive("");
		}, 300);
		setOpen(!open);
	}, [open, setNavBarClassActive, setOpen]);

	const links = [
		{ to: "/", exact: true, innerText: "Home", extraText: "Conocenos" },
		{ to: "/classes", exact: true, innerText: "Clases", extraText: "Anotate" },
		{
			to: "/podcast",
			exact: true,
			innerText: "Podcast",
			extraText: "Escuchanos",
		},
		{ to: "/shows", exact: true, innerText: "Shows", extraText: "Tickets" },
		{ to: "/contact", exact: true, innerText: "Contacto", extraText: "+Info" },
	];

	return (
		<nav className={`navbar ${navBarClassActive}`}>
			<ul className="navbar__list">
				{links.map(({ to, exact, innerText, extraText }) => {
					return (
						<li className="navbar__listItem" key={to}>
							<NavLink
								onClick={open ? navBarClickHandler : null}
								className="navbar__link"
								activeClassName="navbar__link navbar__link--active"
								to={to}
								exact={exact}
							>
								{innerText}
								<img alt="navegar" src={arrow} className="navbar__arrow" />
								<span className="navbar__extraText">{extraText}</span>
							</NavLink>
						</li>
					);
				})}
			</ul>
		</nav>
	);
};

export default NavBar;
