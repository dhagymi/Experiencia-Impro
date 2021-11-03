import { useEffect, useState } from "react";

const useFloatingAnimation = ({
	maxDeltaDegAngularAccForCs = 0.002,
	maxDeltaPorcLinearAccForCs = 0.002,
	maxDeltaDegAngularVelForCs = 0.2,
	maxDeltaPorcLinearVelForCs = 0.2,
	maxDeltaDegAngularPos = 15,
	maxDeltaPorcLinearPos = 15,
	deltaTimeMs = 2000,
	expCoeficient = 2,
	angularAccelerationInitial = 0,
	linearAccelerationYInitial = 0,
	linearAccelerationXInitial = 0,
	angularVelocityInitial = 0,
	linearVelocityYInitial = 0,
	linearVelocityXInitial = 0,
	angularPositionInitial = 0,
	linearPositionYInitial = 0,
	linearPositionXInitial = 0,
}) => {
	const [angularAcceleration, setAngularAcceleration] = useState(
		angularAccelerationInitial >= maxDeltaDegAngularAccForCs
			? 0
			: angularAccelerationInitial
	);
	const [linearAccelerationY, setLinearAccelerationY] = useState(
		linearAccelerationYInitial >= maxDeltaPorcLinearAccForCs
			? 0
			: linearAccelerationYInitial
	);
	const [linearAccelerationX, setLinearAccelerationX] = useState(
		linearAccelerationXInitial >= maxDeltaPorcLinearAccForCs
			? 0
			: linearAccelerationXInitial
	);
	const [angularVelocity, setAngularVelocity] = useState(
		angularVelocityInitial
	);
	const [linearVelocityY, setLinearVelocityY] = useState(
		linearVelocityYInitial
	);
	const [linearVelocityX, setLinearVelocityX] = useState(
		linearVelocityXInitial
	);
	const [angularPosition, setAngularPosition] = useState(
		angularPositionInitial
	);
	const [linearPositionY, setLinearPositionY] = useState(
		linearPositionYInitial
	);
	const [linearPositionX, setLinearPositionX] = useState(
		linearPositionXInitial
	);
	const [flagAngular, setFlagAngular] = useState(1);
	const [flagLinearY, setFlagLinearY] = useState(1);
	const [flagLinearX, setFlagLinearX] = useState(1);
	const [style, setStyle] = useState({});

	useEffect(() => {
		const timer1 = setInterval(() => {
			setFlagAngular(-flagAngular);
			setFlagLinearY(-flagLinearY);
			setFlagLinearX(-flagLinearX);
		}, ((Math.random() + 1) * deltaTimeMs) / 2);

		return () => {
			clearInterval(timer1);
		};
	}, [deltaTimeMs, flagAngular, flagLinearX, flagLinearY]);
	useEffect(() => {
		const timer2 = setInterval(() => {
			if (
				Math.abs(
					angularVelocity + angularAcceleration - angularVelocityInitial
				) >= maxDeltaDegAngularVelForCs
			) {
				setAngularVelocity(angularVelocity - angularAcceleration);
				setAngularAcceleration(0);
				setFlagAngular(-flagAngular);
			} else {
				setAngularVelocity(angularVelocity + angularAcceleration);
			}
			if (
				Math.abs(
					linearVelocityY + linearAccelerationY - linearVelocityYInitial
				) >= maxDeltaPorcLinearVelForCs
			) {
				setLinearVelocityY(linearVelocityY - linearAccelerationY);
				setLinearAccelerationY(0);
				setFlagLinearY(-flagLinearY);
			} else {
				setLinearVelocityY(linearVelocityY + linearAccelerationY);
			}
			if (
				Math.abs(
					linearVelocityX + linearAccelerationX - linearVelocityXInitial
				) >= maxDeltaPorcLinearVelForCs
			) {
				setLinearVelocityX(linearVelocityX - linearAccelerationX);
				setLinearAccelerationX(0);
				setFlagLinearX(-flagLinearX);
			} else {
				setLinearVelocityX(linearVelocityX + linearAccelerationX);
			}
			if (
				Math.abs(angularPosition + angularVelocity - angularPositionInitial) >=
				maxDeltaDegAngularPos
			) {
				setAngularPosition(angularPosition - angularVelocity);
				setAngularVelocity(0);
				setFlagAngular(-flagAngular);
			} else {
				setAngularPosition(angularPosition + angularVelocity);
			}
			if (
				Math.abs(linearPositionY + linearVelocityY - linearPositionYInitial) >=
				maxDeltaPorcLinearPos
			) {
				setLinearPositionY(linearPositionY - linearVelocityY);
				setLinearVelocityY(0);
				setFlagLinearY(-flagLinearY);
			} else {
				setLinearPositionY(linearPositionY + linearVelocityY);
			}
			if (
				Math.abs(linearPositionX + linearVelocityX - linearPositionXInitial) >=
				maxDeltaPorcLinearPos
			) {
				setLinearPositionX(linearPositionX - linearVelocityX);
				setLinearVelocityX(0);
				setFlagLinearX(-flagLinearX);
			} else {
				setLinearPositionX(linearPositionX + linearVelocityX);
			}
		}, 10);
		return () => {
			clearInterval(timer2);
		};
	}, [
		maxDeltaDegAngularPos,
		maxDeltaDegAngularVelForCs,
		maxDeltaPorcLinearPos,
		maxDeltaPorcLinearVelForCs,
		angularAcceleration,
		angularPosition,
		angularVelocity,
		flagAngular,
		flagLinearX,
		flagLinearY,
		linearAccelerationX,
		linearAccelerationY,
		linearPositionX,
		linearPositionY,
		linearVelocityX,
		linearVelocityY,
		angularVelocityInitial,
		linearVelocityYInitial,
		linearVelocityXInitial,
		angularPositionInitial,
		linearPositionYInitial,
		linearPositionXInitial,
	]);
	useEffect(() => {
		setAngularAcceleration(
			Math.random() ** expCoeficient * maxDeltaDegAngularAccForCs * flagAngular
		);
		setLinearAccelerationY(
			Math.random() ** expCoeficient * maxDeltaPorcLinearAccForCs * flagLinearY
		);
		setLinearAccelerationX(
			Math.random() ** expCoeficient * maxDeltaPorcLinearAccForCs * flagLinearX
		);
	}, [
		expCoeficient,
		maxDeltaDegAngularAccForCs,
		maxDeltaPorcLinearAccForCs,
		flagAngular,
		flagLinearX,
		flagLinearY,
	]);

	useEffect(() => {
		setStyle({
			transform: `translateX(${linearPositionX}%) rotate(${angularPosition}deg) translateY(${linearPositionY}%)`,
		});
		return () => {
			setStyle({});
		};
	}, [angularPosition, linearPositionX, linearPositionY]);

	return { style };
};

export default useFloatingAnimation;
