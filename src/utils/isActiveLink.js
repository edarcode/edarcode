export const isActiveLink = ({ isActive, color }) => {
	const activeStyle = {
		backgroundColor: color || "var(--blue)"
	};
	if (!isActive) return undefined;
	return activeStyle;
};
