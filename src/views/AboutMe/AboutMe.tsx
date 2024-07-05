import Css from "../../components/svgs/Css";
import Express from "../../components/svgs/Express";
import Html from "../../components/svgs/Html";
import Js from "../../components/svgs/Js";
import Nodejs from "../../components/svgs/Nodejs";
import Postgre from "../../components/svgs/Postgre";
import Prisma from "../../components/svgs/Prisma";
import React from "../../components/svgs/React";
import TypeScript from "../../components/svgs/TypeScript";
import { EDARCODE } from "../../constants/edarcode";
import css from "./css.module.css";

export default function AboutMe() {
	return (
		<div className={css.about}>
			<article className={css.me}>
				<h1>Edwin Ortiz</h1>
				<h2>Full Stack Developer</h2>
				<img className={css.img} src={EDARCODE.img} alt="edarcode" />
				<p>
					Siempre atento a aprender de los demás y compartir conocimiento. Creo
					en el trabajo duro y el compromiso.
				</p>
			</article>
			<article className={css.skills}>
				<h2>Habilidades</h2>
				<div className={css.logos}>
					<Html />
					<Css />
					<Js />
					<React />
					<Nodejs />
					<Express />
					<TypeScript />
					<Prisma />
					<Postgre />
				</div>
			</article>
		</div>
	);
}
