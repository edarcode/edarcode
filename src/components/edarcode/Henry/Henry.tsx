import css from "./css.module.css";

export default function Henry() {
	return (
		<article className={css.education}>
			Henry bootcamp 800 horas teórico-practica www.soyhenry.com
			<img src="/education/henry.svg" alt="henry" />
		</article>
	);
}
