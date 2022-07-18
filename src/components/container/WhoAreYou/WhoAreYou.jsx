import css from "./style.module.css";

export default function WhoAreYou() {
	return (
		<div className={css.who}>
			<h1 className={css.who__title}>
				¿QUIÉN ES <strong>&#x22;EDARCODE&#x22;</strong>
				🧐?
			</h1>
			<p className={css.who__text}>
				Soy un programador web full-stack. He estado trabajando en proyectos que
				van desde los SPA de front-end con React / Redux hasta el back-end en
				Sequielize / Postgres conectándolos con Express.js y Node.js.
			</p>
			<p className={css.who__text}>
				Me encantan los desafíos, crecer tanto técnica como personalmente y, por
				supuesto, conocer gente que también comparta mi pasión por la
				programación.
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
