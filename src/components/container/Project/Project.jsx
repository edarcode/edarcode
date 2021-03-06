import css from "./style.module.css";

export default function Project({ name, text, link, img }) {
	return (
		<a href={link} className={css.project} target="_blank" rel="noreferrer">
			<picture className={css.project__picture}>
				<img className={css.project__img} src={img} alt={name} />
			</picture>
			<div className={css.project__name}>{name}</div>
			<p className={`${css.project__text} scroll`}>{text}</p>
		</a>
	);
}
