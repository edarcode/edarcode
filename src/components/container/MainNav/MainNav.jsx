import { courseReact } from "../../../constants/courseReact/courseReact";
import BoxLink from "../../common/BoxLink/BoxLink";
import css from "./style.module.css";

export default function MainNav({ className }) {
	return (
		<nav className={`${css.mainnav} ${className}`}>
			<BoxLink
				className={css.mainnav__link}
				{...courseReact}
				text={courseReact.topic}
			/>
		</nav>
	);
}
