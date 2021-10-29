const ClassPhoto = ({ source, alternative, style }) => {
	return (
		<img className="classPhoto" src={source} alt={alternative} style={style} />
	);
};
export default ClassPhoto;
