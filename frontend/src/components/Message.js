const Message = ({ children, style }) => {
	return (
		<p className="message" style={style}>
			{children}
		</p>
	);
};

export default Message;
