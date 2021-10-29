import { useMemo } from "react";

import ClassPhoto from "../components/ClassPhoto";

import photo from "../assets/photos/photo.png";

const PodcastVoices = () => {
	const animationOptions1 = useMemo(() => {
		return {
			maxDeltaDegAngularPos: 5,
			linearPositionXInitial: -5,
			linearPositionYInitial: -5,
			maxDeltaPorcLinearPos: 5,
		};
	}, []);

	const animationOptions2 = useMemo(() => {
		return {
			maxDeltaDegAngularPos: 5,
			linearPositionXInitial: -5,
			linearPositionYInitial: -5,
			maxDeltaPorcLinearPos: 5,
		};
	}, []);
	const animationOptions3 = useMemo(() => {
		return {
			maxDeltaDegAngularPos: 5,
			linearPositionXInitial: -5,
			linearPositionYInitial: -5,
			maxDeltaPorcLinearPos: 5,
		};
	}, []);

	return (
		<section className="podcastVoices">
			<h1 className="podcastVoices__title">Las voces</h1>
			<div className="podcastVoices__body">
				<figure className="podcastVoices__photoContainer">
					<ClassPhoto
						alternative="mati"
						source={photo}
						animationOptions={animationOptions1}
					/>
					<p className="podcastVoices__photoText">mati</p>
				</figure>
				<figure className="podcastVoices__photoContainer">
					<ClassPhoto
						alternative="sandra"
						source={photo}
						animationOptions={animationOptions2}
					/>
					<p className="podcastVoices__photoText">sandra</p>
				</figure>
				<figure className="podcastVoices__photoContainer">
					<ClassPhoto
						alternative="emi"
						source={photo}
						animationOptions={animationOptions3}
					/>
					<p className="podcastVoices__photoText">emi</p>
				</figure>
			</div>
		</section>
	);
};

export default PodcastVoices;
