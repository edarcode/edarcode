import { Link } from "react-router-dom";
import css from "./style.module.css";

export default function TopicLink({ path, name }) {
	return (
		<Link to={path} className={css.topic}>
			{name}
		</Link>
	);
}
