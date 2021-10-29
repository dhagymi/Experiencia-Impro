import { memo, useMemo } from "react";

import ClassPhoto from "../components/ClassPhoto";

import photo from "../assets/photos/photo.png";
const ClassesPhotos = () => {
	const animationOptions1 = useMemo(() => {
		return {
			angularPositionInitial: -20,
			linearPositionYInitial: 20,
			maxDeltaDegAngularPos: 5,
			maxDeltaPorcLinearPos: 5,
		};
	}, []);

	const animationOptions2 = useMemo(() => {
		return {
			angularPositionInitial: 20,
			linearPositionYInitial: 20,
			maxDeltaDegAngularPos: 5,
			maxDeltaPorcLinearPos: 5,
		};
	}, []);
	const animationOptions3 = useMemo(() => {
		return {
			maxDeltaPorcLinearPos: 5,
			maxDeltaDegAngularPos: 5,
		};
	}, []);

	return (
		<section className="classesPhotos">
			<div className="classesPhotos__photosBody">
				<figure className="classesPhotos__photoContainer">
					<ClassPhoto
						source={photo}
						alternative="improv"
						animationOptions={animationOptions1}
					/>
				</figure>
				<figure className="classesPhotos__photoContainer">
					<ClassPhoto
						source={photo}
						alternative="improv"
						animationOptions={animationOptions2}
					/>
				</figure>
				<figure className="classesPhotos__photoContainer">
					<ClassPhoto
						source={photo}
						alternative="improv"
						animationOptions={animationOptions3}
					/>
				</figure>
			</div>
		</section>
	);
};

export default memo(ClassesPhotos);
