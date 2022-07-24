import { NavLink } from "react-router-dom";
import { isActiveLink } from "../../../utils/isActiveLink";
import css from "./style.module.css";

export default function SubTopicsNav({ subTopics }) {
	return (
		<nav className={css.topics}>
			{subTopics &&
				subTopics.map(({ topic, path }) => (
					<NavLink key={topic} to={path} style={isActiveLink} end>
						{topic}
					</NavLink>
				))}
		</nav>
	);
}
