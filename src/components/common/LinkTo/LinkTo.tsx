import { NavLink } from "react-router-dom";
import Me from "../../svgs/Me";
import css from "./css.module.css";
import { Props } from "./types";

export default function LinkTo({ to, children, icon, ...props }: Props) {
	const Icons = icon || Me;
	return (
		<NavLink
			{...props}
			to={to}
			className={({ isActive }) => (isActive ? css.active : css.link)}
		>
			<Icons className={css.me} />
			{children}
		</NavLink>
	);
}
