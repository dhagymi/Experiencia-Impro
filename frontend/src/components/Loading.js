import loadingSpinner from "../assets/icons/loading_spinner.svg";

const Loading = ({ style }) => {
	console.log(style);
	return (
		<div className="loading" style={style}>
			<div className="loading__wheelContainer">
				<img src={loadingSpinner} alt="loading" className="loading__wheel" />
			</div>
			<span className="loading__text">cargando</span>
		</div>
	);
};

export default Loading;
