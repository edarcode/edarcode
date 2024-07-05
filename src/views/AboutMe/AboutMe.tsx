import Css from "../../components/svgs/Css";
import Html from "../../components/svgs/Html";
import Js from "../../components/svgs/Js";
import React from "../../components/svgs/React";
import { EDARCODE } from "../../constants/edarcode";
import css from "./css.module.css";

export default function AboutMe() {
	return (
		<div className={css.about}>
			<article>
				<h1>Edwin Ortiz</h1>
				<h2>Full Stack Developer</h2>
				<img className={css.img} src={EDARCODE.img} alt="edarcode" />
				<p>
					Siempre atento a aprender de los demás y a compartir conocimiento.
					Creo en el trabajo duro y el compromiso.
				</p>
			</article>
			<article>
				<h2>Habilidades</h2>
				<div>
					<Html />
					<Css />
					<Js />
					<React />
				</div>
			</article>
		</div>
	);
}
