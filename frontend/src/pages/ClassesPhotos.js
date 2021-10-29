import ClassPhoto from "../components/ClassPhoto";

import useFloatingAnimation from "../hooks/useFloatingAnimation";

import photo from "../assets/photos/photo.png";
const ClassesPhotos = () => {
	const { style: style1 } = useFloatingAnimation({
		angularPositionInitial: -20,
		linearPositionYInitial: 20,
		maxDeltaDegAngularPos: 5,
		maxDeltaPorcLinearPos: 5,
	});
	const { style: style2 } = useFloatingAnimation({
		angularPositionInitial: 20,
		linearPositionYInitial: 20,
		maxDeltaDegAngularPos: 5,
		maxDeltaPorcLinearPos: 5,
	});
	const { style: style3 } = useFloatingAnimation({
		maxDeltaPorcLinearPos: 5,
		maxDeltaDegAngularPos: 5,
	});

	return (
		<section className="classesPhotos">
			<div className="classesPhotos__photosBody">
				<div className="classesPhotos__photoContainer">
					<ClassPhoto source={photo} alternative="improv" style={style1} />
				</div>
				<div className="classesPhotos__photoContainer">
					<ClassPhoto source={photo} alternative="improv" style={style2} />
				</div>
				<div className="classesPhotos__photoContainer">
					<ClassPhoto source={photo} alternative="improv" style={style3} />
				</div>
			</div>
		</section>
	);
};

export default ClassesPhotos;
