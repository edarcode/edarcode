import css from "./style.module.css";

export default function Footer() {
	return (
		<footer className={css.footer}>
			<div className={css.footer__created}>
				Creado con
				<img className={css.footer__react} src="/react.svg" alt="react" />
				React
			</div>
		</footer>
	);
}
