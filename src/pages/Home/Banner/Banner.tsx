import css from "./css.module.css";

export default function Banner() {
	return (
		<article className={css.banner}>
			<div className={css.description}>
				<h1>Edwin Ortiz</h1>
				<h2>Full Stack Developer</h2>
				<p>
					Creo en el trabajo duro y el compromiso. Siempre dispuesto a compartir
					conocimientos, aprender continuamente y crecer profesional y
					personalmente.
				</p>
			</div>
			<img className={css.photo} src="/edarcode.webp" alt="edarcode" />
		</article>
	);
}
