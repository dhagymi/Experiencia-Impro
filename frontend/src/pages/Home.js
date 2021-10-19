const Home = () => {
	const titleOne = [
		"Comedia ",
		"en ",
		"español ",
		"Comedia ",
		"en ",
		"español ",
		"Comedia ",
		"en ",
		"español ",
		"Comedia ",
		"en ",
		"español ",
	];
	const titleTwo = [
		"Clases ",
		"de ",
		"teatro ",
		"sin ",
		"guión ",
		"Clases ",
		"de ",
		"teatro ",
		"sin ",
		"guión ",
		"teatro ",
		"sin ",
		"guión ",
		"teatro ",
		"sin ",
		"guión ",
	];

	return (
		<section className="home">
			<div className="home__heading">
				<h1 className="home__title">
					improv<span className="home__titleSmile"> =)</span>
				</h1>
				<div className="home__nextShowInfo">
					<p className="home__nextShowText home__nextShowText--pink">
						Proximo show
					</p>
					<p className="home__nextShowText">25.10.21 - MUNICH</p>
				</div>
			</div>
			<div className="home__floatTitle">
				<p className="home__floatTitleText home__floatTitleText--left">
					{titleOne.map((text) => {
						return <span className={`home__floatTitleWord `}>{text}</span>;
					})}
				</p>
			</div>
			<div className="home__floatTitle">
				<p className="home__floatTitleText home__floatTitleText--right">
					{titleTwo.map((text) => {
						return <span className={`home__floatTitleWord`}>{text}</span>;
					})}
				</p>
			</div>
		</section>
	);
};

export default Home;
