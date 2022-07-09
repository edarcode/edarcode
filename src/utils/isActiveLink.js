export const isActiveLink = ({ isActive, color }) => {
	const activeStyle = {
		backgroundColor: color
	};
	if (!isActive) return undefined;
	return activeStyle;
};
