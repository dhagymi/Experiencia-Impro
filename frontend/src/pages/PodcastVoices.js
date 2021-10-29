import ClassPhoto from "../components/ClassPhoto";

import useFloatingAnimation from "../hooks/useFloatingAnimation";

import photo from "../assets/photos/photo.png";

const PodcastVoices = () => {
	const { style: style1 } = useFloatingAnimation({
		maxDeltaDegAngularPos: 5,
		linearPositionXInitial: -5,
		linearPositionYInitial: -5,
		maxDeltaPorcLinearPos: 5,
	});
	const { style: style2 } = useFloatingAnimation({
		maxDeltaDegAngularPos: 5,
		linearPositionXInitial: -5,
		linearPositionYInitial: -5,
		maxDeltaPorcLinearPos: 5,
	});
	const { style: style3 } = useFloatingAnimation({
		maxDeltaDegAngularPos: 5,
		linearPositionXInitial: -5,
		linearPositionYInitial: -5,
		maxDeltaPorcLinearPos: 5,
	});

	return (
		<section className="podcastVoices">
			<h1 className="podcastVoices__title">Las voces</h1>
			<div className="podcastVoices__body">
				<figure className="podcastVoices__photoContainer">
					<ClassPhoto alternative="mati" source={photo} style={style1} />
					<p className="podcastVoices__photoText">mati</p>
				</figure>
				<figure className="podcastVoices__photoContainer">
					<ClassPhoto alternative="sandra" source={photo} style={style2} />
					<p className="podcastVoices__photoText">sandra</p>
				</figure>
				<figure className="podcastVoices__photoContainer">
					<ClassPhoto alternative="emi" source={photo} style={style3} />
					<p className="podcastVoices__photoText">emi</p>
				</figure>
			</div>
		</section>
	);
};

export default PodcastVoices;
