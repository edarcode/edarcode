import { Link } from "react-router-dom";
import css from "./style.module.css";

export default function BoxLink({ text, img, color, path }) {
	if (!path) return null;
	return (
		<Link to={path} className={css.box}>
			{img && <img className={css.box__img} src={img} alt={img} />}
			<span className={css.box__text}>{text}</span>
		</Link>
	);
}
