import { NavLink } from "react-router-dom";
import Person from "../../svgs/Person";
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
	const Icons = icon || Person;
	return (
		<NavLink
			{...props}
			to={to}
			target={target}
			rel={rel}
			className={({ isActive }) => (isActive ? css.active : css.link)}
		>
			<Icons className={css.icon} />
			{children}
		</NavLink>
	);
}
