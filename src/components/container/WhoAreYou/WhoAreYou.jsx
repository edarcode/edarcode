import css from "./style.module.css";

export default function WhoAreYou() {
	return (
		<div className={css.who}>
			<h1 className={css.who__title}>
				¿QUIÉN ES{" "}
				<strong className={css.who__edarcode}>&#x22;EDARCODE&#x22;</strong>
				🧐?
			</h1>
			<p className={css.who__quote}>
				Soy programador web full-stack muy apasionado. Me encanta trabajar con
				<strong> React</strong>, <strong>Svelte</strong>, <strong>Node</strong>{" "}
				y muchas otras tecnologías.
			</p>
			<p className={css.who__text}>
				Preparado y con ganas de explotar todas mis habilidades. Aprendo rápido
				y soy bastante dedicado cuando se trata de programar, me gusta trabajar
				en equipo, enseñar, crear contenido...
				<strong className={css.who__love}>¡Amo programar!😊</strong>
			</p>
		</div>
	);
}
