import { Link } from "react-router-dom";

import logo from "../assets/logoei.svg";

const Logo = () => {
	return (
		<Link className="logo" to="/">
			<figure className="logo__imageContainer">
				<img className="logo__image" src={logo} alt="logo" />
			</figure>
		</Link>
	);
};

export default Logo;
