import { NavLink } from "react-router-dom";
import { isActiveLink } from "../../../utils/isActiveLink";
import css from "./style.module.css";

const color = "var(--blue)";

export default function TopicLink({ path, name }) {
	return (
		<NavLink
			to={path}
			className={css.topic}
			style={({ isActive }) => isActiveLink({ isActive, color })}
			end
		>
			{name}
		</NavLink>
	);
}
