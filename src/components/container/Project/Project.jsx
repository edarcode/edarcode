import css from "./style.module.css";

export default function Project({ name, text, link, img, video }) {
	return (
		<article className={css.card}>
			<a
				className={css.wrapperImg}
				href={link}
				target="_blank"
				rel="noreferrer"
			>
				<img className={css.img} src={img} alt={name} />
			</a>
			<div className={css.name}>{name}</div>
			<p className={`${css.text} scroll`}>{text}</p>
			{video && (
				<a className={css.video} href={video} target="_blank" rel="noreferrer">
					📼
				</a>
			)}
		</article>
	);
}
