import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import css from "./style.module.css";

export default function BoxLink({ text, img, color, path, a }) {
	const link = useRef(null);
	useEffect(() => {
		if (color) link.current.style.color = color;
	}, [color]);
	if (!path) return null;
	if (a)
		return (
			<a
				href={path}
				target="_blank"
				rel="noreferrer"
				className={css.box}
				ref={link}
			>
				{img && <img className={css.box__img} src={img} alt={img} />}
				{text && <span className={css.box__text}>{text}</span>}
			</a>
		);
	return (
		<Link to={path} className={css.box} reloadDocument ref={link}>
			{img && <img className={css.box__img} src={img} alt={img} />}
			{text && <span className={css.box__text}>{text}</span>}
		</Link>
	);
}
