import { Link, useLocation } from "react-router-dom";
import css from "./style.module.css";

export default function TopicLink({ path, name }) {
	const { pathname } = useLocation();
	return (
		<Link
			to={path}
			className={css.topic}
			style={(pathname === path && { backgroundColor: "var(--blue)" }) || {}}
		>
			{name}
		</Link>
	);
}
