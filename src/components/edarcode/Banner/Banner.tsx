import { EDARCODE } from "../../../constants/edarcode";
import css from "./css.module.css";

export default function Banner() {
	return (
		<article className={css.banner}>
			<h1>Edwin Ortiz</h1>
			<h2>Full Stack Developer</h2>
			<img className={css.img} src={EDARCODE.img} alt="edarcode" />
			<p>
				Siempre atento a aprender de los demás y compartir conocimiento. Creo en
				el trabajo duro y el compromiso.
			</p>
		</article>
	);
}
