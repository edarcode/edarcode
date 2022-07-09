import { Link } from "react-router-dom";
import css from "./style.module.css";

export default function Topic({ path, text }) {
	return (
		<Link to={path} className={css.topic}>
			{text}
		</Link>
	);
}
