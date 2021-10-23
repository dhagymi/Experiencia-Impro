import map_image from "../assets/background/map.svg";
import line_image from "../assets/background/line.svg";
import icons_image from "../assets/background/icons.svg";

const About = () => {
	return (
		<section className="about">
			<div className="about__background">
				<img
					alt="background-map"
					src={map_image}
					className="about__backgroundImage"
				/>
				<img
					alt="background-line"
					src={line_image}
					className="about__backgroundImage about__backgroundImage--line"
				/>
				<img
					alt="background-icons"
					src={icons_image}
					className="about__backgroundImage"
				/>
			</div>
		</section>
	);
};

export default About;
