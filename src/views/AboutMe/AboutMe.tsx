import Html from "../../components/svgs/Html";
import { EDARCODE } from "../../constants/edarcode";
import css from "./css.module.css";

export default function AboutMe() {
	return (
		<div className={css.about}>
			<img className={css.img} src={EDARCODE.img} alt="edarcode" />
			<p>
				Siempre atento a aprender de los demás y a compartir conocimiento. Creo
				en el trabajo duro y el compromiso.
			</p>
			<h2>Habilidades</h2>
			<Html />
		</div>
	);
}
