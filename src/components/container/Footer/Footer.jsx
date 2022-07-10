import css from "./style.module.css";

export default function Footer() {
	return (
		<footer className={css.footer}>
			{/* <span>
				🎵 Inspired by&nbsp;
				<a
					href="https://manz.dev/"
					target="__blank"
					className={css["footer__link-manz"]}
				>
					manz.dev 🍕
				</a>
				<img className={css.footer__manz} src="/manz.png" alt="manz" />
			</span> */}
			<div className={css.footer__created}>
				Creado con
				<img className={css.footer__react} src="/react.svg" alt="react" />
				React
			</div>
		</footer>
	);
}
