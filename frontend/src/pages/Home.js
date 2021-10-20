const Home = () => {
	const titleOne = "Comedia en español -";

	const titleTwo = "Teatro sin guiones - no existen errores -";

	return (
		<section className="home">
			<div className="home__heading">
				<h1 className="home__title">
					improv<span className="home__titleSmile"> =)</span>
				</h1>
				<div className="home__nextShowInfo">
					<h2 className="home__nextShowText home__nextShowText--pink">
						Proximo show
					</h2>
					<p className="home__nextShowText">25.10.21 - MUNICH</p>
				</div>
			</div>
			<div className="home__floatTitle">
				<p className="home__floatTitleText home__floatTitleText--left">
					<span className="home__floatTitleSpan home__floatTitleSpan--left">
						{titleOne}
					</span>
					<span className="home__floatTitleSpan home__floatTitleSpan--left">
						{titleOne}
					</span>
				</p>
			</div>
			<div className="home__floatTitle">
				<p className="home__floatTitleText home__floatTitleText--right">
					<span className="home__floatTitleSpan home__floatTitleSpan--right">
						{titleTwo}
					</span>
					<span className="home__floatTitleSpan home__floatTitleSpan--right">
						{titleTwo}
					</span>
					<span className="home__floatTitleSpan home__floatTitleSpan--right">
						{titleTwo}
					</span>
				</p>
			</div>
		</section>
	);
};

export default Home;
