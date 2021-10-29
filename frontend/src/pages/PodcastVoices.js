import { useMemo } from "react";

import ClassPhoto from "../components/ClassPhoto";

import photo1 from "../assets/photos/voice_photo_2.webp";
import photo2 from "../assets/photos/voice_photo_1.webp";
import photo3 from "../assets/photos/voice_photo_3.webp";

const PodcastVoices = () => {
	const animationOptions1 = useMemo(() => {
		return {
			maxDeltaDegAngularPos: 3,
			linearPositionXInitial: -10,
			linearPositionYInitial: -10,
			maxDeltaPorcLinearPos: 3,
		};
	}, []);

	const animationOptions2 = useMemo(() => {
		return {
			maxDeltaDegAngularPos: 3,
			linearPositionXInitial: -10,
			linearPositionYInitial: -10,
			maxDeltaPorcLinearPos: 3,
		};
	}, []);
	const animationOptions3 = useMemo(() => {
		return {
			maxDeltaDegAngularPos: 3,
			linearPositionXInitial: -10,
			linearPositionYInitial: -10,
			maxDeltaPorcLinearPos: 3,
		};
	}, []);

	return (
		<section className="podcastVoices">
			<h1 className="podcastVoices__title">Las voces</h1>
			<div className="podcastVoices__body">
				<figure className="podcastVoices__photoContainer">
					<ClassPhoto
						alternative="mati"
						source={photo1}
						animationOptions={animationOptions1}
						hoverClass="voices"
					/>
					<p className="podcastVoices__photoText">mati</p>
				</figure>
				<figure className="podcastVoices__photoContainer">
					<ClassPhoto
						alternative="sandra"
						source={photo2}
						animationOptions={animationOptions2}
						hoverClass="voices"
					/>
					<p className="podcastVoices__photoText">sandra</p>
				</figure>
				<figure className="podcastVoices__photoContainer">
					<ClassPhoto
						alternative="emi"
						source={photo3}
						animationOptions={animationOptions3}
						hoverClass="voices"
					/>
					<p className="podcastVoices__photoText">emi</p>
				</figure>
			</div>
		</section>
	);
};

export default PodcastVoices;
