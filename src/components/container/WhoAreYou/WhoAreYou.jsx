import css from "./style.module.css";

export default function WhoAreYou() {
	return (
		<div className={css.who}>
			<h1 className={css.who__title}>
				¿QUIÉN ES <strong>&#x22;EDARCODE&#x22;</strong>
				🧐?
			</h1>
			<p className={css.who__quote}>
				Programador web full-stack muy apasionado. Le encanta trabajar con
				<strong> React</strong>, <strong>Svelte</strong>, <strong>Node</strong>{" "}
				y muchas otras tecnologías.
			</p>
			<p className={css.who__text}>
				Preparado y con ganas de explotar todas sus habilidades. Aprende rápido
				y es bastante dedicado cuando se trata de programar, le gusta trabajar
				en equipo, crear contenido y sobre todo{" "}
				<strong className={css.who__love}>¡Ama programar!😊</strong>
			</p>
			<div className={css["who__container-cv-tipazo"]}>
				<span className={css.who__tipazo}>Todo un tipazo 😎</span>
				<a
					className={css.who__cv}
					href="/personal/cv.pdf"
					download="cv_edarcode.pdf"
				>
					Descarga su cv 😚
				</a>
			</div>
			<p className={css["who__free-time"]}>
				En su tiempo libre se junta con <strong>amantes del code</strong> a{" "}
				<img
					className={css["who__img-videogame"]}
					src="/svgs/videogame.svg"
					alt=""
				/>{" "}
				en linea
			</p>
		</div>
	);
}
