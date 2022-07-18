export const isActiveLink = ({ isActive, color }) => {
	const activeStyle = {
		backgroundColor: color || "var(--softViolet)"
	};
	if (!isActive) return undefined;
	return activeStyle;
};
