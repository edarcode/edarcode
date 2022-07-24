import { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { isActiveLink } from "../../../utils/isActiveLink";
import css from "./style.module.css";

export default function BoxLink({ text, img, color, path, a, className }) {
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
				className={`${css.box} ${className}}`}
				ref={link}
			>
				{img && (
					<img
						className={`${css.box__img} ${css["box__img--invert"]}`}
						src={img}
						alt={img}
					/>
				)}
				{text && <span className={css.box__text}>{text}</span>}
			</a>
		);

	return (
		<NavLink
			to={path}
			className={`${css.box} ${className}`}
			ref={link}
			style={({ isActive }) => isActiveLink({ isActive, color })}
		>
			{img && <img className={css.box__img} src={img} alt={img} />}
			{text && <span className={css.box__text}>{text}</span>}
		</NavLink>
	);
}
