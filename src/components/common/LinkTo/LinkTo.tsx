import { NavLink } from "react-router-dom";
import css from "./css.module.css";
import { Props } from "./types";

export default function LinkTo({ to, children, ...props }: Props) {
	return (
		<NavLink
			{...props}
			to={to}
			className={({ isActive }) => (isActive ? css.active : "")}
		>
			{children}
		</NavLink>
	);
}
