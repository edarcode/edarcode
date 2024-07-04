import { NavLink } from "react-router-dom";
import css from "./css.module.css";
import { Props } from "./types";

export default function LinkTo({
	to,
	children,
	icon,
	target,
	rel,
	...props
}: Props) {
	const Icon = icon;
	return (
		<NavLink
			{...props}
			to={to}
			target={target}
			rel={rel}
			className={({ isActive }) => (isActive ? css.active : css.link)}
		>
			{Icon && <Icon className={css.icon} />}
			{children}
		</NavLink>
	);
}
