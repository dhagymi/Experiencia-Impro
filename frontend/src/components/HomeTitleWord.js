const HomeTitleWord = ({ children, direction }) => {
	return (
		<span className={`home__floatTitleWord home__floatTitleWord--${direction}`}>
			{children}
		</span>
	);
};

export default HomeTitleWord;
